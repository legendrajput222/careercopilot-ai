"use client";

import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "Google",
    avatar: "SC",
    quote:
      "CareerCopilot AI helped me land my dream PM role at Google in just 3 weeks. The interview prep alone was worth 10x the subscription.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer",
    company: "Stripe",
    avatar: "MJ",
    quote:
      "I went from 2% response rate to 40% after using the ATS score checker and resume builder. The AI actually understands tech roles.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "HubSpot",
    avatar: "ER",
    quote:
      "The career roadmap feature showed me exactly what skills I needed to pivot into director-level roles. Game-changing platform.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Loved by professionals worldwide"
          description="Join thousands of job seekers who've accelerated their careers with CareerCopilot AI."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]">
                <Quote className="mb-4 h-8 w-8 text-violet-500/40" />
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
