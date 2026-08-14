import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { Header } from '@/app/(marketing)/_components/header';
import { Footer } from '@/app/(marketing)/_components/footer';
import { createServerClient } from '@/lib/supabase-server';

export const metadata = { title: 'Email me a sign-in link — Wooblitz' };

export default async function MagicLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; email?: string }>;
}) {
  const sp = await searchParams;

  async function sendLink(formData: FormData) {
    'use server';
    const email = String(formData.get('email') ?? '').trim().toLowerCase();
    if (!email) {
      redirect('/login/magic?error=Please+enter+your+email');
    }
    const supabase = await createServerClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'}/api/auth/callback?next=/`,
    });
    if (error) {
      redirect(`/login/magic?error=${encodeURIComponent(error.message)}`);
    }
    redirect(`/login/magic/check-email?email=${encodeURIComponent(email)}`);
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
        <div className="container-tight max-w-md">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <h1 className="text-3xl font-semibold tracking-tight">Email me a sign-in link</h1>
          <p className="mt-2 text-muted-foreground">
            We&apos;ll send a magic link to your inbox. No password needed.
          </p>

          {sp?.error && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {sp.error}
            </div>
          )}

          <form action={sendLink} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue={sp?.email ?? ''}
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@yourstore.com"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me a sign-in link
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
