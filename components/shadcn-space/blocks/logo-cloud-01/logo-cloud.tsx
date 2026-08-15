import { Marquee } from "@/components/shadcn-space/animations/marquee"

// Wordmark-style "brands" — using stylized text instead of remote images
// so the section works offline and feels like real merchant brands
const brands = [
  "MayaBoutique",
  "TechGearStore",
  "Cairo Crafts",
  "Riyadh Roastery",
  "NileTech",
  "AtlasArt",
  "GulfGoods",
  "Luxor Leather",
  "Desert Bloom",
  "Souk Modern",
]

const LogoCloudDemo = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden border-y border-border/60">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by 1,000+ merchants worldwide
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:40s] py-2">
        {brands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="mx-8 lg:mx-12 flex items-center gap-2 text-2xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
            {brand}
          </div>
        ))}
      </Marquee>
      {/* Left + right blur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}

export default LogoCloudDemo