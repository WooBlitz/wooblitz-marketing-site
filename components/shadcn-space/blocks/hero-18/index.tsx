import HeroSection from "@/components/shadcn-space/blocks/hero-18/hero";
import Navbar from "@/components/shadcn-space/blocks/hero-18/navbar";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-18/navbar";

const navigationData: NavigationSection[] = [
  {
    name: "Home",
    href: "#",
    isActive: true,
  },
  {
    name: "Product",
    href: "#", 
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Case studies",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  }
];


const HeroPage = () => {
  return (
    <div>
        <Navbar navigationData={navigationData} />
        <HeroSection/>
    </div>
  )
}

export default HeroPage