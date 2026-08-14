import Link from 'next/link';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Header } from '../_components/header';
import { Footer } from '../_components/footer';
import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export const metadata = { title: 'Sign in — Wooblitz' };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const next = sp?.next ?? '/dashboard';

  // If already signed in, bounce
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect(next);
  }

  async function signIn(formData: FormData) {
    'use server';
    const email = String(formData.get('email') ?? '').trim().toLowerCase();
    const password = String(formData.get('password') ?? '');

    if (!email || !password) {
      redirect(`/login?error=${encodeURIComponent('Please enter your email and password')}`);
    }
    const supabaseServer = (await import('@/lib/supabase-server')).createServerClient();
    const { error } = await supabaseServer.auth.signInWithPassword({ email, password });
    if (error) {
      redirect(`/login?error=${encodeURIComponent(error.message)}`);
    }
    redirect(next);
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
              <p className="mt-2 text-muted-foreground">
                Sign in to manage your storefront.
              </p>
            </div>

            {sp?.error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {sp.error}
              </div>
            )}

            <form action={signIn} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@yourstore.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <Link
              href="/login/magic"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Email me a sign-in link
            </Link>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Don&apos;t have a store yet?{' '}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Start free trial
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
