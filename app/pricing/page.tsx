import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';

export const metadata: Metadata = {
  title: 'Pricing — Wooblitz',
  description: 'Simple, honest pricing. Start free, upgrade when you need to.',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
