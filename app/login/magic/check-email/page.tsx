import Link from 'next/link';
import { MailCheck, ArrowLeft } from 'lucide-react';
import { Header } from '@/app/(marketing)/_components/header';
import { Footer } from '@/app/(marketing)/_components/footer';

export const metadata = { title: 'Check your email — Wooblitz' };

export default async function CheckEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const sp = await searchParams;
  return (
    <>
      <Header />
      <main className="py-24">
        <div className="container-tight text-center max-w-xl">
          <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <MailCheck className="h-7 w-7" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">Check your email</h1>
          <p className="mt-3 text-muted-foreground">
            We sent a sign-in link to{' '}
            <span className="font-medium text-foreground">{sp?.email ?? 'your inbox'}</span>.
            Click it to sign in.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
