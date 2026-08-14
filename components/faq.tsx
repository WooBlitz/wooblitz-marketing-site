const items = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. The whole product is drag, drop, and chat. If you can write an email, you can run a store.',
  },
  {
    q: 'What if I already have a domain?',
    a: 'Connect it in two clicks. We handle the DNS or you point your domain at our servers.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Products, customers, orders &mdash; all exportable as CSV at any time.',
  },
  {
    q: 'How does payment work?',
    a: 'We support Stripe out of the box. Set up your account in 2 minutes, accept cards worldwide.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Your first store is free forever, with up to 25 products. Upgrade when you outgrow it.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no fees, no questions. Your data exports with you.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-border">
      <div className="container-tight max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Frequently asked
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium">{it.q}</span>
                <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
