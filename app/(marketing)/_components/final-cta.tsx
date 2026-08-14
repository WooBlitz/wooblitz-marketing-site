import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-tight">
        <div className="rounded-2xl border border-border bg-foreground text-background p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to open your store?
          </h2>
          <p className="mt-3 text-background/80 max-w-xl mx-auto">
            Free to start. No credit card. Cancel anytime.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
