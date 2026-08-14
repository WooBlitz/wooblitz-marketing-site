import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase-server';

const signupSchema = z.object({
  email: z.string().email(),
  business_name: z.string().min(2).max(120),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid input', issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      emailRedirectTo: `${request.nextUrl.origin}/api/auth/callback`,
      data: { business_name: parsed.data.business_name },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  if (data.user) {
    // Try to insert into the signups table. Don't fail signup if it doesn't
    // exist yet (the table needs to be created via supabase/migrations/).
    try {
      await supabase.from('signups').insert({
        user_id: data.user.id,
        email: parsed.data.email,
        business_name: parsed.data.business_name,
        status: 'pending_email_verification',
      });
    } catch (tableErr) {
      console.warn('[signup] signups table not yet created:', (tableErr as Error).message);
    }
  }

  return NextResponse.json({ ok: true, user_id: data.user?.id });
}