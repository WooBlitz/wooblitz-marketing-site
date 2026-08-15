"use client"



import { useState, useEffect, useRef } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import type { LucideIcon } from "lucide-react"
import { Leaf, TrendingUp, Shapes, CircleCheck, ArrowRight } from "lucide-react";

import { motion, useMotionValue, useTransform, animate } from "motion/react";

import { Button } from "@/components/ui/button";





function CountUp({ value }: { value: number }) {

    const count = useMotionValue(value);

    const rounded = useTransform(count, (latest) => Math.floor(latest));

    const isFirstRender = useRef(true);



    useEffect(() => {

        if (isFirstRender.current) {

            isFirstRender.current = false;

            return;

        }



        const controls = animate(count, value, {

            duration: 0.5,

            ease: "easeOut",

        });



        return controls.stop;

    }, [value, count]);



    return <motion.span>{rounded}</motion.span>;

}



export default function Pricing() {

    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");



    const pricingCardVariants = {

        hidden: {

            opacity: 0,

            x: -60,

        },

        visible: (index: number) => ({

            opacity: 1,

            x: 0,

            transition: {

                delay: index * 0.25,

                duration: 0.6,

                ease: "easeInOut",

            },

        }),

    };



    type PricingPlan = {

        plan_name: string;

        plan_descp: string;

        plan_price: number;

        plan_feature: string[];

        plan_recommended: boolean;

        plan_icon: LucideIcon;

    };



    const pricingData: PricingPlan[] = [

        {

            plan_name: "Basic",

            plan_descp:

                "Build foundational skills with 10 essential courses.",

            plan_price: 19,

            plan_feature: [

                "Expert-Led Video Lessons",

                "Downloadable Resources",

                "Community Support",

                "Completion Certificate",

            ],

            plan_recommended: false,

            plan_icon: Leaf,

        },

        {

            plan_name: "Growth",

            plan_descp:

                "Build foundational skills with 10 essential courses.",

            plan_price: 29,

            plan_feature: [

                "Everything from Basic",

                "Downloadable Resources",

                "Community Support",

                "Completion Certificate",

            ],

            plan_recommended: true,

            plan_icon: TrendingUp,

        },

        {

            plan_name: "Scale",

            plan_descp:

                "Build foundational skills with 10 essential courses.",

            plan_price: 99,

            plan_feature: [

                "Everything from Growth",

                "Downloadable Resources",

                "Community Support",

                "Completion Certificate",

            ],

            plan_recommended: false,

            plan_icon: Shapes,

        },

    ];

    return (

        <section className="bg-background py-10 lg:py-0">

            <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">

                <div className="flex flex-col gap-12 w-full">

                    <div className="grid grid-cols-12 gap-6">

                        <div className="col-span-12 lg:col-span-8">

                            <div className="flex flex-col gap-4 items-center lg:items-start">

                                <p className="text-muted-foreground sm:text-lg text-sm">Pricing plan</p>

                                <h2 className="sm:text-5xl text-4xl font-semibold text-center lg:text-start">Pricing made easy</h2>

                                <p className="text-muted-foreground sm:text-xl text-lg text-center lg:text-start">Subheading description and information can be added here</p>

                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:items-end lg:justify-end justify-center">

                            <Tabs

                                value={billingCycle}

                                onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}

                            >

                                <TabsList className="h-auto!">

                                    <TabsTrigger value="monthly" className="py-2 px-5 hover:cursor-pointer">Monthly</TabsTrigger>

                                    <TabsTrigger value="yearly" className="py-2 px-5 hover:cursor-pointer">

                                        Yearly

                                        <div className="text-orange-400 bg-orange-400/10 rounded-full py-0.5 px-3 text-sm font-medium">

                                            15% OFF

                                        </div>

                                    </TabsTrigger>

                                </TabsList>

                            </Tabs>

                        </div>

                    </div>

                    <div className="grid grid-cols-12 gap-6">

                        {pricingData.map((item, index) => {

                            return (

                                <motion.div

                                    key={index}

                                    variants={pricingCardVariants}

                                    initial="hidden"

                                    whileInView="visible"

                                    viewport={{ once: true }}

                                    custom={index}

                                    className="col-span-12 md:col-span-6 lg:col-span-4"

                                >

                                    <Card className="bg-muted border-0 shadow-none p-2! rounded-2xl gap-0">

                                        <CardHeader className="p-6! gap-8">

                                            <div>

                                                <div className="bg-background p-3 rounded-xl outline outline-border w-fit mb-6">

                                                    <item.plan_icon width={32} height={32} />

                                                </div>

                                                <CardTitle className="text-2xl font-semibold mb-2">{item.plan_name}</CardTitle>

                                                <CardDescription className="text-muted-foreground text-lg">{item.plan_descp}</CardDescription>

                                            </div>

                                            <div className="flex items-baseline gap-1">

                                                <span className="text-foreground text-4xl sm:text-5xl font-medium">

                                                    $<CountUp value={billingCycle === "monthly" ? item.plan_price : Math.floor(item.plan_price * 12 * 0.85)} />

                                                </span>

                                                <span className="text-muted-foreground text-base font-normal">

                                                    /{billingCycle === "monthly" ? "month" : "year"}

                                                </span>

                                            </div>

                                        </CardHeader>

                                        <CardContent className="p-6! bg-card rounded-xl flex flex-col gap-6">

                                            <div className="flex flex-col gap-3">

                                                {item.plan_feature.map((feature, index) => {

                                                    return (

                                                        <div key={index} className="flex items-center gap-2 text-muted-foreground">

                                                            <CircleCheck width={20} height={20} />

                                                            <p className="text-base">{feature}</p>

                                                        </div>

                                                    )

                                                })}

                                            </div>



                                            <Button className="relative overflow-hidden group w-full py-3 h-full rounded-full font-medium text-base hover:cursor-pointer border border-primary transition-all">

                                                <span className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-950 rounded-full scale-0 transition-transform duration-700 ease-in-out group-hover:scale-[18]" />

                                                <span className="relative z-10 transition-colors duration-500 group-hover:text-gray-950 dark:group-hover:text-white">

                                                    Get Started

                                                </span>

                                            </Button>

                                        </CardContent>

                                    </Card>

                                </motion.div>

                            )

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}