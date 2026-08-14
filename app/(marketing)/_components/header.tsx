import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export async function Header() {
  const { data } = await supabase.auth.getUser();
  const signedIn = !!data.user;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            W
          </div>
          <span className="font-semibold tracking-tight">Wooblitz</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link href="/#how" className="text-muted-foreground hover:text-foreground">How it works</Link>
          <Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="/#faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          {signedIn ? (
            <Link
              href={process.env.NEXT_PUBLIC_PLATFORM_URL ?? 'https://app.wooblitz.com'}
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Open dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Start free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
