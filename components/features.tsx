import { Eye, Code, ShoppingBag, Layers, Sparkles, Image as ImageIcon, ShieldCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Built by AI, edited by you',
    body: 'Describe what you want. Our AI sets up the page. Want to change something? Just ask.',
  },
  {
    icon: Eye,
    title: 'Preview before you publish',
    body: 'Every change is a draft. Nothing reaches your customers until you hit publish.',
  },
  {
    icon: ShoppingBag,
    title: 'Real commerce, out of the box',
    body: 'Products, cart, checkout, taxes, shipping &middot; all the boring parts handled for you.',
  },
  {
    icon: Layers,
    title: 'Bring your own brand',
    body: 'Pick your colors, fonts, and tone. The storefront follows your lead, not a template.',
  },
  {
    icon: ImageIcon,
    title: 'Real product photos',
    body: 'Upload photos or describe what you sell. The store looks polished without a designer.',
  },
  {
    icon: Code,
    title: 'No code required',
    body: 'Everything is drag, drop, and chat. If you can write an email, you can run a store.',
  },
  {
    icon: ShieldCheck,
    title: 'Your data is yours',
    body: 'Your customers, your orders, your products. Export anytime. We never sell your data.',
  },
  {
    icon: Globe,
    title: 'Your own domain',
    body: 'Connect a domain you already own, or use a free wooblitz.com subdomain to start.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 border-t border-border bg-muted/30">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Everything you need to run a store
          </h2>
          <p className="mt-3 text-muted-foreground">
            One platform. No plugins to glue together.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-6 text-left">
              <f.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
