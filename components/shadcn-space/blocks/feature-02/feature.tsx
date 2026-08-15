"use client"

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { BarChart3, CreditCard, Globe, Palette, Sparkles, Zap, type LucideIcon } from "lucide-react";

import { motion } from "motion/react";



type Features = {

  icon: LucideIcon;

  title: string;

  content: string;

}[];



const DEFAULT_FEATURES: Features = [
  { icon: Sparkles, title: "AI-Powered Storefront", content: "Tell us what you sell. Our AI builds your storefront with the right blocks, layout, and copy — no design skills required." },
  { icon: Zap, title: "Lightning Fast Setup", content: "From signup to live store in under 10 minutes. We handle the infrastructure, payments, and hosting — you focus on your business." },
  { icon: Globe, title: "Custom Domain in Minutes", content: "Connect your own domain in a few clicks. We handle SSL, DNS, and provisioning automatically. No technical setup needed." },
  { icon: Palette, title: "Beautiful Themes", content: "Choose from hundreds of professional themes, or let AI match colors to your brand. Every theme is mobile-optimized." },
  { icon: CreditCard, title: "Built-in Payments", content: "Accept payments globally with Stripe, PayPal, and regional providers. Multi-currency support out of the box." },
  { icon: BarChart3, title: "Real-time Analytics", content: "Track visitors, conversions, and revenue in real-time. Get AI-powered insights to grow your business faster." }
]

const Feature = ({ featureData = DEFAULT_FEATURES }: { featureData?: Features }) => {

  return (

    <section>

      <div className="lg:py-20 sm:py-16 py-8">

        <div className="mx-auto max-w-7xl px-4 sm:px-8">

          <div className="flex flex-col gap-8 md:gap-16">

            <motion.div

              initial={{ y: -10, opacity: 0 }}

              whileInView={{ y: 0, opacity: 1 }}

              viewport={{ once: true }}

              transition={{

                duration: 0.8,

                ease: [0.21, 0.47, 0.32, 0.98],

              }}

              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"

            >

              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">

                Features

              </Badge>

              <h1 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">

                Designed for Developer Flow Helping them to Get Started

              </h1>

            </motion.div>

            <motion.div

              variants={{

                hidden: { opacity: 0 },

                show: {

                  opacity: 1,

                  transition: {

                    staggerChildren: 0.1,

                  },

                },

              }}

              initial="hidden"

              whileInView="show"

              viewport={{ once: true }}

              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

            >

              {featureData.map((value, index) => {

                return (

                  <motion.div

                    key={index}

                    variants={{

                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },

                      show: { opacity: 1, y: 0, filter: "blur(0px)" },

                    }}

                    transition={{

                      duration: 0.8,

                      ease: [0.21, 0.47, 0.32, 0.98],

                    }}

                  >

                    <Card className="py-10! h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">

                      <CardContent className="px-8! flex flex-col gap-6">

                        <value.icon

                          className="w-8 h-8 text-primary"

                          strokeWidth={1.2}

                        />

                        <div className="flex flex-col gap-3">

                          <h6 className="text-xl font-semibold">

                            {value.title}

                          </h6>

                          <p className="text-base font-normal text-muted-foreground">

                            {value.content}

                          </p>

                        </div>

                      </CardContent>

                    </Card>

                  </motion.div>

                );

              })}

            </motion.div>

            <motion.div

              initial={{ y: 20, opacity: 0 }}

              whileInView={{ y: 0, opacity: 1 }}

              viewport={{ once: true }}

              transition={{

                duration: 0.8,

                ease: [0.21, 0.47, 0.32, 0.98],

              }}

              className="flex flex-col items-center justify-center gap-5"

            >

              <div className="flex items-center gap-2 text-muted-foreground">

                <Sparkles size={16} />

                <p className="font-normal text-sm">

                  Get started in minutes — no code required

                </p>

              </div>

              <Button asChild className="rounded-full px-5 py-2.5 shadow-xs h-full cursor-pointer">
                              <a href="#">See how it works</a>
                            </Button>

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  );

};



export default Feature;

