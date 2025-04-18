"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { faqs } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-white dark:bg-black py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" delay={400} cascade damping={0.1}>
          <div className="text-center">
            <h2 className="font-inter text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </Fade>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 dark:border-gray-800"
            >
              <button
                className="w-full text-left py-6 flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="font-medium text-lg sm:text-xl text-black dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-2xl transform transition-transform duration-300">
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      {faq.answer.map((paragraph: string, itemIndex: number) => (
                        <p
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-400 mb-2 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
