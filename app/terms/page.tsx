import type { Metadata } from 'next';
import { Header } from '../(marketing)/_components/header';
import { Footer } from '../(marketing)/_components/footer';

export const metadata: Metadata = { title: 'Terms of service — Wooblitz' };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-16">
        <article className="container-tight max-w-2xl prose prose-sm">
          <h1>Terms of service</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>1. What Wooblitz is</h2>
          <p>
            Wooblitz (&quot;we&quot;, &quot;us&quot;) provides a hosted commerce platform that lets merchants set up and
            run an online store. By using Wooblitz, you agree to these terms.
          </p>

          <h2>2. Your store, your data</h2>
          <p>
            You own the content you upload (product photos, descriptions, etc.) and the customer
            data you collect. We will never sell your data or your customers&apos; data. You can
            export everything at any time.
          </p>

          <h2>3. Fees</h2>
          <p>
            The free plan is free. Paid plans are billed monthly. We don&apos;t take a cut of
            your sales. Payment processing fees (from Stripe) apply separately.
          </p>

          <h2>4. Cancellation</h2>
          <p>
            Cancel anytime from your account settings. No fees, no questions. Your data
            exports with you.
          </p>

          <h2>5. Acceptable use</h2>
          <p>
            Don&apos;t sell illegal goods, don&apos;t abuse the platform, don&apos;t try to hack us. We
            may suspend accounts that violate these terms.
          </p>

          <h2>6. Contact</h2>
          <p>Questions? Email <a href="mailto:hello@wooblitz.com">hello@wooblitz.com</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
