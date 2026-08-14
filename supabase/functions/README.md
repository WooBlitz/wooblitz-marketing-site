# Supabase Edge Functions

## `provision-tenant`

Triggered when a signup is verified. Creates a tenant in the platform (Medusa)
so the merchant can start building their store.

### Deploy

```sh
supabase functions deploy provision-tenant --no-verify-jwt
```

### Secrets

```sh
supabase secrets set PLATFORM_API_URL=https://wooblitz-medusa-web.onrender.com
supabase secrets set INTERNAL_API_SECRET=<shared-secret>
```

### Trigger

In Supabase Dashboard &rarr; Database &rarr; Webhooks:
- Name: `provision-tenant`
- Table: `signups`
- Events: `UPDATE`
- Condition: `status = 'tenant_provisioned'` (or use a separate `provisioned` boolean)
- Type: `Supabase Edge Function`
- Function: `provision-tenant`

The function reads the user email and business_name from the signup row,
calls `POST /api/admin/tenants` on the platform, and updates the signup
status to `tenant_provisioned`.

### Alternative trigger (auth.users email_confirmed)

In Supabase Dashboard &rarr; Authentication &rarr; Hooks:
- Enable the `Send email` hook OR
- Use a Database trigger on `auth.users` when `email_confirmed_at` goes from NULL to a value

For now, we trigger from `signups` so we have the `business_name` available.
