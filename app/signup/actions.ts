import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase-server';

const signupSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  business_name: z.string().min(2, 'Please tell us what you sell').max(120),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function signUp(formData: FormData) {
  const parsed = signupSchema.safeParse({
    email: formData.get('email'),
    business_name: formData.get('business_name'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    redirect(`/signup?error=${encodeURIComponent(issue?.message ?? 'Invalid input')}`);
  }

  const supabase = await createServerClient();
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';

  // Step 1: create auth user
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      emailRedirectTo: `${origin}/api/auth/callback?next=/onboarding`,
      data: { business_name: parsed.data.business_name },
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  // Step 2: record the signup in our marketing leads table
  // (separate from auth so we can capture marketing attribution)
  if (data.user) {
    await supabase.from('signups').insert({
      user_id: data.user.id,
      email: parsed.data.email,
      business_name: parsed.data.business_name,
      status: 'pending_email_verification',
    });
  }

  // Email confirmation required; bounce to a holding page
  redirect(`/signup/check-email?email=${encodeURIComponent(parsed.data.email)}`);
}
