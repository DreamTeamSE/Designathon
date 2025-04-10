"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQs() {
  const leftQuestions = questions.slice(0, Math.ceil(questions.length / 2));
  const rightQuestions = questions.slice(Math.ceil(questions.length / 2));

  return (
    <section className="px-6 py-12 max-screen mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-10">FAQs</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left Column */}
        <div className="w-full flex-1 flex flex-col gap-6">
          {leftQuestions.map((q, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 + 0.1 * index, ease: "easeInOut" }}
            >
              <Accordion
                type="single"
                collapsible
                className="w-full border border-pink-300 rounded-xl bg-pink-50 text-left text-lg shadow-md"
              >
                <AccordionItem value={`left-item-${index}`} className="w-full">
                  <AccordionTrigger className="px-6 py-5 font-semibold text-xl">
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

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {rightQuestions.map((q, index) => (
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 + 0.1 * index, ease: "easeInOut" }}
            >
              <Accordion
                type="single"
                collapsible
                className="w-full border border-pink-300 rounded-xl bg-pink-50 text-left text-lg shadow-md"
              >
                <AccordionItem value={`right-item-${index}`} className="w-full">
                  <AccordionTrigger className="px-6 py-5 font-semibold text-xl">
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
      </div>
    </section>
  );
}

const questions = [
  {
    question: "Is Designathon in-person this year?",
    answer: "Yes! This year's Designathon is fully in-person and hosted at our university campus."
  },
  {
    question: "Is it free to join the Designathon?",
    answer: "Absolutely! Our Designathon is 100% free to participate in."
  },
  {
    question: "Do I need a team to register?",
    answer: "You can join solo or with a team! We’ll also help match solo participants with others."
  },
  {
    question: "What do I need to bring?",
    answer: "Bring your laptop, charger, and any design tools you love. We'll provide Wi-Fi, food, and swag!"
  },
  {
    question: "Do I need prior experience?",
    answer: "Not at all! Designers of all levels are welcome, and we'll have workshops to help you along the way."
  },
  {
    question: "Will there be prizes?",
    answer: "Yes! We’ll have awesome prizes for the top teams in different categories."
  }
];
