"use client";

import { Rocket, Sparkles, Upload } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Profile",
    description:
      "Share your resume, LinkedIn, or career goals. Our AI builds a comprehensive profile in under 60 seconds.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Does the Heavy Lifting",
    description:
      "Get tailored resumes, cover letters, interview prep, and a personalized career roadmap — all powered by advanced AI.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Land Your Dream Role",
    description:
      "Apply with confidence, ace interviews, and track your progress. Most users see results within 2 weeks.",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Three steps to career success"
          description="No complex setup. No learning curve. Just upload, let AI work its magic, and watch opportunities roll in."
        />

        <StaggerContainer className="relative grid gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute top-24 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent lg:block" />

          {steps.map((step, index) => (
            <StaggerItem key={step.step}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-xl opacity-40" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 shadow-lg shadow-violet-500/30">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#030712] text-xs font-bold text-violet-400 ring-2 ring-violet-500/50">
                    {index + 1}
                  </span>
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                  Step {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
