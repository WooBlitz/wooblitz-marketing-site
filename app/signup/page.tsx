import Link from 'next/link';
import { Check } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SignupForm } from './signup-form';

export const metadata = {
  title: 'Start your free store — Wooblitz',
  description: 'Tell us what you sell. We will build your storefront in under 5 minutes. No credit card required.',
};

export const dynamic = 'force-dynamic';

export default function SignupPage() {
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
              <SignupForm />

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
  )
}