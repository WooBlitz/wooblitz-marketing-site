import Link from 'next/link';
import { ArrowRight, MessageSquare, Eye, ShoppingBag } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-tight text-center">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now in public beta
          </p>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
            Describe your store.{' '}
            <span className="text-muted-foreground">We&apos;ll build it in minutes.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Tell us what you sell and how you want it to look. Our AI sets up your storefront, picks the right layout, and gets you ready to take orders &mdash; no design skills or code required.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required &middot; Cancel anytime &middot; Your first store is free
          </p>
        </div>

        {/* Visual mockup */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Faux browser chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="rounded-md bg-background border border-border px-3 py-1 text-xs text-muted-foreground text-center max-w-md mx-auto">
                  yourstore.wooblitz.com
                </div>
              </div>
            </div>

            {/* Builder mockup */}
            <div className="grid grid-cols-12 h-96">
              {/* Left panel: blocks */}
              <div className="col-span-3 border-r border-border bg-muted/30 p-3 text-left">
                <p className="text-xs font-medium text-muted-foreground mb-2">Blocks</p>
                <div className="space-y-1.5">
                  {['Hero', 'Product grid', 'Featured collection', 'About', 'Contact form', 'Reviews'].map((b) => (
                    <div key={b} className="rounded border border-border bg-background px-2 py-1.5 text-xs">
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Center: preview */}
              <div className="col-span-6 bg-background p-6 text-left">
                <div className="rounded-md bg-gradient-to-br from-violet-500 to-pink-500 p-6 text-white">
                  <p className="text-xs opacity-90">Welcome to</p>
                  <p className="mt-1 text-xl font-bold">Your Store</p>
                  <p className="mt-1 text-xs opacity-90">Curated for the modern buyer</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-white text-violet-600 px-2.5 py-1 text-xs font-medium">
                    Shop now
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="rounded border border-border bg-muted/40 aspect-square" />
                  ))}
                </div>
              </div>

              {/* Right: chat */}
              <div className="col-span-3 border-l border-border bg-muted/30 p-3 text-left">
                <p className="text-xs font-medium text-muted-foreground mb-2">Chat</p>
                <div className="space-y-1.5">
                  <div className="rounded bg-primary text-primary-foreground px-2 py-1.5 text-[10px]">
                    Add a hero banner
                  </div>
                  <div className="rounded bg-background border border-border px-2 py-1.5 text-[10px] text-muted-foreground">
                    Added Hero 01 with your brand colors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
