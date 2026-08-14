// Supabase Edge Function: provision-tenant
//
// Called when a signup's status changes to "verified" (the user clicked
// the email confirmation link). Creates a tenant in the platform
// (Medusa) so the merchant can start building their store.
//
// Deploy:
//   supabase functions deploy provision-tenant --no-verify-jwt
//
// Required secrets (set via `supabase secrets set`):
//   PLATFORM_API_URL   e.g. https://wooblitz-medusa-web.onrender.com
//   INTERNAL_API_SECRET  shared with the platform
//
// Trigger: Supabase Database Webhook on auth.users.email_confirmed_at
// (when set), or via the auth.users UPDATE row.

interface SupabaseUser {
  id: string;
  email: string;
  user_metadata?: { business_name?: string };
}

interface PlatformTenantRequest {
  user_id: string;
  email: string;
  business_name: string;
  source: 'marketing-site';
}

interface PlatformTenantResponse {
  tenant_id: string;
  custom_domain?: string;
}

const PLATFORM_API_URL = Deno.env.get('PLATFORM_API_URL');
const INTERNAL_API_SECRET = Deno.env.get('INTERNAL_API_SECRET');

if (!PLATFORM_API_URL || !INTERNAL_API_SECRET) {
  throw new Error('Missing PLATFORM_API_URL or INTERNAL_API_SECRET env var');
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  // Handle two payload formats:
  // 1. Supabase webhook format: { type, table, record: {id, email, user_metadata}, old_record }
  // 2. Flat format: { id, email, user_metadata }
  let user: SupabaseUser;
  if (payload.record && typeof payload.record === 'object') {
    user = payload.record as unknown as SupabaseUser;
  } else {
    user = payload as unknown as SupabaseUser;
  }

  if (!user.email || !user.id) {
    return new Response(
      JSON.stringify({ ok: false, error: 'missing_user_data', payload_keys: Object.keys(payload) }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const business_name =
    user.user_metadata?.business_name ?? user.email.split('@')[0] ?? 'My Store';

  // Call the platform's tenant-creation endpoint
  const res = await fetch(`${PLATFORM_API_URL}/internal/tenants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-internal-api-secret': INTERNAL_API_SECRET,
    },
    body: JSON.stringify({
      user_id: user.id,
      email: user.email,
      business_name,
      source: 'marketing-site',
    } satisfies PlatformTenantRequest),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('[provision-tenant] Platform error:', res.status, errorText);
    return new Response(
      JSON.stringify({ ok: false, error: 'platform_error', detail: errorText }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const tenant = (await res.json()) as PlatformTenantResponse;

  // Mark the signup as tenant_provisioned
  const supabaseAdmin = createAdminClient();
  await supabaseAdmin
    .from('signups')
    .update({ status: 'tenant_provisioned' })
    .eq('user_id', user.id);

  return new Response(
    JSON.stringify({ ok: true, tenant_id: tenant.tenant_id }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
});

// Helper: create a Supabase admin client (service role)
// Only available inside the Edge Function runtime.
function createAdminClient() {
  const url = Deno.env.get('SUPABASE_URL')!;
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  return {
    from(table: string) {
      return {
        async update(values: Record<string, unknown>) {
          // ... omitted for brevity; in production, use @supabase/supabase-js
          return { eq: () => ({ /* ... */ }) };
        },
      };
    },
  };
}
