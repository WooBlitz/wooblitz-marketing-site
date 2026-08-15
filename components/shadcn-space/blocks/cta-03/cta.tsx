"use client"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

import { motion } from "motion/react"



export default function CTA() {

    return (

        <section className="lg:py-20 sm:py-16 py-8">

            <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full">

                <div className="grid grid-cols-12 gap-6">

                    <div className="xl:col-span-6 col-span-12">

                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="bg-sky-400/20 sm:py-20 py-6 sm:ps-16 ps-4 sm:pe-12 pe-4 flex flex-col sm:gap-6 gap-4">

                            <Badge className="py-0.5 px-2 bg-background text-foreground text-sm font-normal h-auto border-0">

                                Ready to launch your store?

                            </Badge>

                            <h2 className="sm:text-5xl text-3xl font-semibold">

                                Ready to start selling?

                            </h2>

                            <p className="sm:text-base text-sm text-muted-foreground">

                                Tell us what you sell. We'll build your storefront in minutes — no code, no design skills, no hassle.

                            </p>

                            <Button asChild className="w-fit text-sm font-medium py-3.5 px-6 rounded-lg h-auto border-0 hover:cursor-pointer"><a href="#">

                                Start free trial

                            </a>
                            </Button>

                        </motion.div>

                    </div>

                    <div className="xl:col-span-3 sm:col-span-6 col-span-12">

                        <motion.img initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-1.webp" className="w-full h-full object-contain" alt="cta-03-img-1" />

                    </div>

                    <div className="xl:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-6">

                        <motion.img initial={{ opacity: 0, y: -20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }} src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-2.webp" className="w-full h-full flex-1 object-contain" alt="cta-03-img-2" />

                        <motion.img initial={{ opacity: 0, y: 20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }} src="https://images.shadcnspace.com/assets/backgrounds/cta-03-img-3.webp" className="w-full h-full flex-1 object-contain" alt="cta-03-img-3" />

                    </div>

                </div>

            </div>

        </section>

    )

}