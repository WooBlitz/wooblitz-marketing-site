import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = { title: 'Privacy policy — Wooblitz' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16">
        <article className="container-tight max-w-2xl prose prose-sm">
          <h1>Privacy policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>What we collect</h2>
          <p>
            When you sign up, we collect your email, business name, and password (hashed).
            When you use the platform, we store the content you upload and the actions
            you take. We use cookies for session management.
          </p>

          <h2>What we don&apos;t collect</h2>
          <p>
            We don&apos;t sell your data. We don&apos;t share it with third-party advertisers.
            We don&apos;t track you across other sites.
          </p>

          <h2>Where your data lives</h2>
          <p>
            Account data lives in our Supabase database. Storefront content lives on
            Render. Both are in the US with encryption at rest and in transit.
          </p>

          <h2>Your rights</h2>
          <p>
            You can export all your data at any time (Settings &rarr; Export). You can
            delete your account and all associated data (Settings &rarr; Delete account).
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:hello@wooblitz.com">hello@wooblitz.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
