import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { signUp } from './actions';

export const metadata = {
  title: 'Start your free store — Wooblitz',
  description: 'Tell us what you sell. We will build your storefront in under 5 minutes. No credit card required.',
};

export const dynamic = 'force-dynamic'

export default function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">
                Start your store in 5 minutes
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us what you sell. We will build your storefront, set up your catalog, and get you ready to take orders.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                {[
                  'No credit card required',
                  'Your first store is free',
                  'Cancel anytime',
                  'You own your data and your customers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-border bg-muted/50 p-6">
                <p className="text-sm font-medium">What happens next?</p>
                <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                  <li>You create a free account</li>
                  <li>We set up your storefront</li>
                  <li>You describe what you want &mdash; our AI builds it</li>
                  <li>You take your first order</li>
                </ol>
              </div>
            </div>

            <div>
              <form action={signUp} className="space-y-4">
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
                  <label htmlFor="business_name" className="block text-sm font-medium mb-1.5">
                    What are you selling? (or your business name)
                  </label>
                  <input
                    id="business_name"
                    name="business_name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. Modern coffee beans, or ACME Studio"
                  />
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    We will use this to set up your storefront.
                  </p>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                    Create a password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="At least 8 characters"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90"
                >
                  Create my free store
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By continuing, you agree to our{' '}
                  <Link href="/terms" className="underline">Terms</Link> and{' '}
                  <Link href="/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
