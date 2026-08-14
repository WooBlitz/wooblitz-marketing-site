const cases = [
  {
    industry: 'Coffee',
    blurb: 'I run a small roastery. Wooblitz understood what I meant by modern-but-warm and just built it.',
  },
  {
    industry: 'Fashion',
    blurb: '"I was going to hire a developer. Wooblitz did in 10 minutes what would have taken two weeks."',
  },
  {
    industry: 'Crafts',
    blurb: '"I sell handmade jewelry. Now my store looks as good as the work."',
  },
  {
    industry: 'Services',
    blurb: '"I run a yoga studio. I described the vibe and got a real storefront. Took bookings the same day."',
  },
];

export function UseCases() {
  return (
    <section className="py-20 sm:py-24 border-t border-border">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for the way you actually sell
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <figure key={c.industry} className="rounded-lg border border-border bg-card p-6 text-left">
              <blockquote className="text-sm">{c.blurb}</blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">&mdash; {c.industry} merchant</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
