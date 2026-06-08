"use client";

import {
  BarChart3,
  FileText,
  Mail,
  Map,
  MessageSquare,
  Target,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    icon: FileText,
    title: "AI Resume Builder",
    description:
      "Generate ATS-optimized resumes tailored to any job description in seconds. Smart formatting that gets you past the bots.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Mail,
    title: "Cover Letter Generator",
    description:
      "Craft compelling, personalized cover letters that highlight your unique value and resonate with hiring managers.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Practice with AI mock interviews, get real-time feedback, and master behavioral and technical questions.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Map,
    title: "Career Roadmap Generator",
    description:
      "Get a personalized step-by-step plan to reach your dream role, with skill gaps and milestones mapped out.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Target,
    title: "Job Match Analysis",
    description:
      "Instantly see how well your profile aligns with any job posting and get actionable improvement tips.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BarChart3,
    title: "ATS Score Checker",
    description:
      "Analyze your resume against applicant tracking systems and optimize keywords for maximum visibility.",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function Features() {
  return (
    <AnimatedSection id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title="Everything you need to land your dream job"
          description="Six powerful AI tools working together to supercharge every step of your job search — from application to offer letter."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg`}
                >
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
