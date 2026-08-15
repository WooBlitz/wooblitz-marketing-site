import HeroPage from "@/components/shadcn-space/blocks/hero-18"
import LogoCloudSection from "@/components/shadcn-space/blocks/logo-cloud-01"
import FeatureSection from "@/components/shadcn-space/blocks/feature-02"
import TestimonialSection from "@/components/shadcn-space/blocks/testimonial-01"
import PricingSection from "@/components/shadcn-space/blocks/pricing-03"
import FaqSection from "@/components/shadcn-space/blocks/faq-01"
import CtaSection from "@/components/shadcn-space/blocks/cta-03"
import FooterSection from "@/components/shadcn-space/blocks/footer-03"

export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage />
      <LogoCloudSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}