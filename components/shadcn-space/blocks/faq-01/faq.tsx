import {

  Accordion,

  AccordionContent,

  AccordionItem,

  AccordionTrigger,

} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";

import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";



const FAQ_DATA = [

  {

    question: "How does Wooblitz build my store?",

    answer:

      "Tell us what you sell. Our AI picks the right layout, blocks, and copy — and you see a preview before anything goes live.",

  },

  {

    question: "How long until my store is live?",

    answer:

      "Most merchants go from signup to live store in under 10 minutes. You can edit anything anytime.",

  },

  {

    question: "How much does it cost?",

    answer:

      "You can start free. When you're ready to take payments, plans start at $29/month. No setup fees, no hidden costs.",

  },

  {

    question: "Do I need to know how to code?",

    answer:

      "No. Wooblitz is built for non-technical founders. Tell us what you want in plain language, and our AI handles the rest.",

  },

  {

    question: "Can I bring my own domain?",

    answer:

      "Yes. Connect your domain in a few clicks — we handle SSL and DNS automatically.",

  },

];



export default function Faq() {

  return (

    <section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">

        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">

          <Badge

            variant="outline"

            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"

          >

            FAQ

          </Badge>

          <h2 className="text-5xl font-medium text-center max-w-lg">

            Got questions? We have answers.

          </h2>

        </div>

        <div>

          <Accordion type="single" collapsible className="w-full flex flex-col gap-6">

            {FAQ_DATA.map((faq, index) => (

              <AccordionItem

                key={`item-${index}`}

                value={`item-${index}`}

                className={cn(

                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",

                  index === 0 && "delay-100",

                  index === 1 && "delay-200",

                  index === 2 && "delay-300",

                  index === 3 && "delay-400",

                  index === 4 && "delay-500",

                )}

              >

                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">

                  {faq.question}

                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />

                </AccordionTrigger>

                <AccordionContent className="p-0 text-muted-foreground text-base">

                  {faq.answer}

                </AccordionContent>

              </AccordionItem>

            ))}

          </Accordion>

        </div>

      </div>

    </section>

  );

}

