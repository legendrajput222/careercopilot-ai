"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    question: "How is CareerCopilot AI different from ChatGPT?",
    answer:
      "CareerCopilot AI is purpose-built for job seekers. It understands ATS systems, hiring manager preferences, and industry-specific resume formats. Every feature is optimized for career outcomes — not general conversation.",
  },
  {
    question: "Will my resume pass ATS systems?",
    answer:
      "Yes. Our ATS Score Checker analyzes your resume against real applicant tracking systems and provides specific keyword and formatting recommendations. Pro users see an average 3x increase in callback rates.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. There are no long-term contracts. Cancel your Pro subscription anytime from your dashboard, and you'll retain access until the end of your billing period.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Your data is encrypted at rest and in transit. We never sell your information or use your resume data to train public models. Enterprise plans include additional compliance features.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee on all Pro plans. If you're not satisfied, contact support within 14 days of your purchase for a full refund.",
  },
  {
    question: "What industries do you support?",
    answer:
      "CareerCopilot AI supports all industries including tech, finance, healthcare, marketing, legal, and more. Our AI adapts templates and language to match your specific field and seniority level.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about CareerCopilot AI. Can't find an answer? Reach out to our support team."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-white sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-4 text-sm leading-relaxed text-zinc-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
