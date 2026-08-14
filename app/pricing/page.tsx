import type { Metadata } from 'next';
import { Header } from '../(marketing)/_components/header';
import { Footer } from '../(marketing)/_components/footer';
import { Pricing } from '../(marketing)/_components/pricing';
import { FAQ } from '../(marketing)/_components/faq';

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
