import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MagicLinkForm } from './magic-form';

export const metadata = { title: 'Email me a sign-in link — Wooblitz' };

export const dynamic = 'force-dynamic';

export default async function MagicLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; email?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
        <div className="container-tight max-w-md">
          <MagicLinkForm initialEmail={sp?.email} />
        </div>
      </main>
      <Footer />
    </>
  );
}