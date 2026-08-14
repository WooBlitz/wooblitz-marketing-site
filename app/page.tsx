import Link from 'next/link';
import { Header } from './_components/header';
import { Hero } from './_components/hero';
import { HowItWorks } from './_components/how-it-works';
import { Features } from './_components/features';
import { UseCases } from './_components/use-cases';
import { Pricing } from './_components/pricing';
import { FAQ } from './_components/faq';
import { FinalCTA } from './_components/final-cta';
import { Footer } from './_components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
