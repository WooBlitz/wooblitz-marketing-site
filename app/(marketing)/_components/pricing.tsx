import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'For trying it out and your first store.',
    features: [
      '1 storefront',
      'Up to 25 products',
      'Wooblitz.com subdomain',
      'Built-in checkout',
      'Email support',
    ],
    cta: 'Start free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/month',
    description: 'For merchants who are starting to scale.',
    features: [
      'Unlimited products',
      'Custom domain',
      'Abandoned cart recovery',
      'Discount codes &amp; promotions',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For established stores that need more.',
    features: [
      'Multiple storefronts',
      'Team access (up to 5)',
      'Advanced analytics',
      'Custom checkout flows',
      'Dedicated success manager',
    ],
    cta: 'Talk to us',
    href: 'mailto:hello@wooblitz.com',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 border-t border-border bg-muted/30">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free. Upgrade when you need to.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                'rounded-xl border p-6 text-left ' +
                (p.highlighted
                  ? 'border-foreground bg-foreground text-background shadow-2xl'
                  : 'border-border bg-card')
              }
            >
              <h3 className={'text-lg font-semibold ' + (p.highlighted ? 'text-background' : '')}>
                {p.name}
              </h3>
              <p className={'mt-1 text-sm ' + (p.highlighted ? 'text-background/80' : 'text-muted-foreground')}>
                {p.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                <span className={'text-sm ' + (p.highlighted ? 'text-background/70' : 'text-muted-foreground')}>
                  {p.period}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={'h-4 w-4 mt-0.5 shrink-0 ' + (p.highlighted ? 'text-emerald-300' : 'text-emerald-600')} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={
                  'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ' +
                  (p.highlighted
                    ? 'bg-background text-foreground hover:opacity-90'
                    : 'bg-foreground text-background hover:opacity-90')
                }
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
