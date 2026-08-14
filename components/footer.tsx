import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                W
              </div>
              <span className="font-semibold tracking-tight">Wooblitz</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              The AI-native commerce platform. Built for merchants, not engineers.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#how" className="hover:text-foreground">How it works</Link></li>
              <li><Link href="/#features" className="hover:text-foreground">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="/#faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Account</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/signup" className="hover:text-foreground">Start free</Link></li>
              <li><Link href="/login" className="hover:text-foreground">Sign in</Link></li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_PLATFORM_URL ?? 'https://app.wooblitz.com'}
                  className="hover:text-foreground"
                >
                  Open dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-foreground">Terms of service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy policy</Link></li>
              <li><a href="mailto:hello@wooblitz.com" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Wooblitz. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for the merchants who are too busy selling to learn code.
          </p>
        </div>
      </div>
    </footer>
  );
}
