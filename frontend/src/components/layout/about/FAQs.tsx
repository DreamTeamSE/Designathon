"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Is Designathon in-person this year?",
    answer: "Yes! This year's Designathon is fully in-person and hosted at our university campus.",
  },
  {
    question: "Is it free to join the Designathon?",
    answer: "Absolutely! Our Designathon is 100% free to participate in.",
  },
  {
    question: "Do I need a team to register?",
    answer: "You can join solo or with a team! We’ll also help match solo participants with others.",
  },
  {
    question: "What do I need to bring?",
    answer: "Bring your laptop, charger, and any design tools you love. We'll provide Wi-Fi, food, and swag!",
  },
  {
    question: "Do I need prior experience?",
    answer: "Not at all! Designers of all levels are welcome, and we'll have workshops to help you along the way.",
  },
  {
    question: "Will there be prizes?",
    answer: "Yes! We’ll have awesome prizes for the top teams in different categories.",
  },
];

export default function FAQs() {
  const half = Math.ceil(questions.length / 2);
  const left = questions.slice(0, half);
  const right = questions.slice(half);

  return (
    <section className="md:px-8 xl:px-32 px-4 py-12 mx-auto">
      <h2 className="mb-10 text-center text-[40px] font-bold font-extrabold">FAQs</h2>
      <div className="flex flex-col items-start gap-6 md:flex-row">
        {[left, right].map((column, colIndex) => (
          <div key={colIndex} className="flex w-full flex-1 flex-col gap-6">
            {column.map((q, i) => (
              <motion.div
                key={`${colIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4 + 0.1 * (i + colIndex * half),
                  ease: "easeInOut",
                }}
              >
                <Accordion
                  type="single"
                  collapsible
                  className="w-full rounded-xl border border-pink-300 bg-pink-50 text-lg shadow-md height-auto"
                >
                  <AccordionItem value={`item-${colIndex}-${i}`}>
                    <AccordionTrigger className="px-6 py-5 text-xl font-semibold">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2 text-base text-gray-700">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
