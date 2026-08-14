import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LoginForm } from './login-form';

export const metadata = { title: 'Sign in — Wooblitz' };

export const dynamic = 'force-dynamic';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const sp = await searchParams;

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

            {sp?.error && !sp.error.startsWith('?') && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {sp.error}
              </div>
            )}

            <LoginForm />

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