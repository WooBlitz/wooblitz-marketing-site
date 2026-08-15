"use client"

import { useRef } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "motion/react"

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 xl:px-16">
        <div className="flex flex-col items-center self-stretch gap-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-4"
          >
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              Loved by merchants
            </Badge>
            <h2 className="text-foreground text-3xl sm:text-5xl font-medium max-w-xs sm:max-w-2xl mx-auto text-center">
              Stories from real merchants
            </h2>
            <p className="text-muted-foreground text-base max-w-xl text-center">
              From one-person shops to growing brands — see how merchants built
              their stores with Wooblitz.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
            {/* Main testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-0 h-full w-full md:min-h-96 p-8 md:p-12 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-16 p-0 h-full">
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 py-1 px-3 h-7">
                    Featured story
                  </Badge>
                  <div className="flex flex-col gap-6">
                    <p className="text-white text-xl lg:text-2xl font-medium leading-snug">
                      “I described my boutique in three sentences and Wooblitz
                      built the whole thing — layout, copy, even the color
                      palette matched my Instagram. We were taking orders the
                      same day.”
                    </p>
                    <div>
                      <p className="text-white text-base font-medium">
                        Sarah K.
                      </p>
                      <p className="text-white/70 text-sm font-normal">
                        Owner, Maya Boutique
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 border-0 h-full w-full md:min-h-96 p-8 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-16 p-0 h-full">
                  <p className="text-white/80 text-base font-medium">
                    Average launch time
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
                      10 min
                    </p>
                    <p className="text-white/90 text-base lg:text-lg font-medium leading-snug">
                      From signup to a live, taking-orders store.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Second testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="bg-zinc-900 border-0 h-full w-full p-8 rounded-2xl text-white">
                <CardContent className="flex flex-col items-start justify-between gap-6 p-0 h-full">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-white/60 text-sm font-medium">
                      TechGear Store
                    </p>
                    <p className="text-white text-lg lg:text-xl font-medium leading-snug">
                      “We launched on a Friday night and took our first order
                      Saturday morning. The AI matched the colors I already
                      use on my packaging.”
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Mohamed A.</p>
                    <p className="text-white/60 text-sm">Founder</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Third testimonial — bigger */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="bg-primary/5 dark:bg-white/5 border border-border h-full w-full p-8 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-8 p-0 h-full">
                  <div className="flex flex-col items-start gap-3">
                    <Badge variant="outline" className="py-1 px-3 text-sm h-7">
                      Most popular quote
                    </Badge>
                    <p className="text-foreground text-xl lg:text-2xl font-medium leading-snug">
                      “I'm a designer, not a developer. Wooblitz gave me a
                      real storefront that I can edit by typing — no code, no
                      waiting for a freelancer, no surprises.”
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground font-medium">Layla H.</p>
                    <p className="text-muted-foreground text-sm">
                      Designer & owner, Cairo Crafts
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials