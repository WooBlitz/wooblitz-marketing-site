export function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Create your free account',
      body: 'Just an email and a business name. No credit card, no setup fee.',
    },
    {
      n: '02',
      title: 'Tell us what you sell',
      body: 'Type it like you would to a friend. "A modern coffee shop with a menu and a contact form."',
    },
    {
      n: '03',
      title: 'See a preview before it goes live',
      body: 'Every change is a draft first. Nothing is published until you say so.',
    },
    {
      n: '04',
      title: 'Open the doors',
      body: 'When you are ready, your store is live on your own domain. Start taking orders.',
    },
  ];

  return (
    <section id="how" className="py-20 sm:py-24 border-t border-border">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four steps from sign-up to your first sale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-card p-6 text-left">
              <p className="text-xs font-mono text-muted-foreground">{s.n}</p>
              <h3 className="mt-2 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
