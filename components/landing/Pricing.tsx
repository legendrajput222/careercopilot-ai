"use client";

import { Check, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "Perfect for students, fresh graduates, and job seekers getting started.",
    features: [
      "Resume Builder",
      "ATS Checker (3 checks/day)",
      "AI Resume Analyzer (3 analyses/day)",
      "Basic Cover Letter Generator",
      "Career Roadmap Access",
      "Interview Prep Questions",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },

  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description:
      "For serious job seekers who want unlimited AI-powered career tools.",
    features: [
      "Everything in Free",
      "Unlimited ATS Checks",
      "Unlimited AI Resume Analysis",
      "Unlimited Cover Letters",
      "Advanced Resume Suggestions",
      "Priority AI Processing",
      "Premium Resume Templates",
    ],
    cta: "Coming Soon",
    highlighted: true,
  },

  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description:
      "Advanced career growth toolkit for professionals and power users.",
    features: [
      "Everything in Pro",
      "Personalized Career Roadmap",
      "Advanced Interview Coaching",
      "AI Job Match Recommendations",
      "Premium Templates",
      "Early Access Features",
      "Priority Support",
    ],
    cta: "Coming Soon",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <AnimatedSection id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Pricing"
          title="Simple, transparent pricing"
          description="Start free and upgrade when you're ready. No hidden fees, cancel anytime."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-cyan-500/5 shadow-xl shadow-violet-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-zinc-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{plan.description}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-violet-400" : "text-zinc-500"
                        }`}
                      />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === "Free" ? "/signup" : "#"}
                  className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25 hover:brightness-110"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
