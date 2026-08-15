"use client";
 
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ParticleSphereAnimation from "@/components/shadcn-space/blocks/integration-01/particalsphear";
import { motion } from "motion/react";
 
const Integration = () => {
  return (
    <section className="bg-background pt-10 dark flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-3xl mx-auto text-center"
        >
          <Badge
            variant={"outline"}
            className="h-auto px-3 py-1 rounded-full text-sm font-normal"
          >
            Integration
          </Badge>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Connect your workflow without limits
            </h2>
            <p className="text-base font-normal text-muted-foreground max-w-xl">
              Bring all your essential tools together in one unified platform.
              Our powerful integrations eliminate data silos, automate
              workflows.
            </p>
          </div>
          <Button className="rounded-full text-sm font-medium h-auto px-5 py-2.5 cursor-pointer">
            View Integrations
          </Button>
        </motion.div>
      </div>
      <div className="relative w-full h-110 md:h-160 overflow-hidden flex justify-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-75 md:w-145">
          <ParticleSphereAnimation />
        </div>
        {/* Responsive Rings with Icons — animated along orbit */}
        <style>{`
          @keyframes orbit-cw {
            from { transform: rotate(var(--start-angle)) }
            to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
          }
          @keyframes orbit-ccw {
            from { transform: rotate(var(--start-angle)) }
            to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
          }
          @keyframes counter-cw {
            from { transform: rotate(var(--counter-offset, 0deg)) }
            to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
          }
          @keyframes counter-ccw {
            from { transform: rotate(var(--counter-offset, 0deg)) }
            to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
          }
        `}</style>
        {[
          {
            size: "w-110 h-110 md:w-180 md:h-180",
            duration: 18,
            icons: [
              {
                src: "https://images.shadcnspace.com/assets/svgs/supabase.svg",
                alt: "Supabase",
                angle: -60,
              },
              {
                src: "https://images.shadcnspace.com/assets/svgs/vercel.svg",
                alt: "Vercel",
                angle: 0,
              },
              {
                src: "https://images.shadcnspace.com/assets/svgs/make.svg",
                alt: "Make",
                angle: 60,
              },
            ],
          },
          {
            size: "w-150 h-150 md:w-220 md:h-220",
            duration: 24,
            icons: [
              {
                src: "https://images.shadcnspace.com/assets/svgs/figma.svg",
                alt: "Figma",
                angle: 0,
              },
              {
                src: "https://images.shadcnspace.com/assets/svgs/slack.svg",
                alt: "Slack",
                angle: -90,
              },
            ],
          },
          {
            size: "w-180 h-180 md:w-265 md:h-265",
            duration: 30,
            icons: [
              {
                src: "https://images.shadcnspace.com/assets/svgs/clude.svg",
                alt: "Clude",
                angle: -60,
              },
              {
                src: "https://images.shadcnspace.com/assets/svgs/chatgpt.svg",
                alt: "chatgpt",
                angle: 0,
              },
              {
                src: "https://images.shadcnspace.com/assets/svgs/stripe.svg",
                alt: "Stripe",
                angle: 60,
              },
            ],
          },
        ].map((orbit, index) => {
          // Odd orbits go clockwise, even go counter-clockwise
          const isCW = index % 2 === 0;
          const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
          const counterAnim = isCW ? "counter-cw" : "counter-ccw";
 
          // Build full icon list: original angles + mirrored (angle + 180) duplicates
          const allIcons = [
            ...orbit.icons,
            ...orbit.icons.map((ic) => ({
              ...ic,
              angle: ic.angle + 180,
              alt: `${ic.alt}-mirror`,
            })),
          ];
 
          return (
            <div
              key={index}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-border ${orbit.size}`}
            >
              {allIcons.map((iconData, iconIndex) => (
                <div
                  key={iconIndex}
                  className="absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center"
                  style={
                    {
                      "--start-angle": `${iconData.angle}deg`,
                      animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  {/* Counter-rotate so the icon stays upright */}
                  <div
                    className="p-3 sm:p-4 border border-border rounded-full bg-background -mt-8 relative z-10"
                    style={
                      {
                        "--counter-offset": `${-iconData.angle}deg`,
                        animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                      } as React.CSSProperties
                    }
                  >
                    <img
                      src={iconData.src}
                      alt={iconData.alt}
                      width={32}
                      height={32}
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
 
export default Integration;