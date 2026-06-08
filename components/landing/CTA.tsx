"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Start your career transformation today
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to land your dream job?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join 12,000+ professionals who&apos;ve accelerated their careers
              with AI. Free to start, no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-violet-700 shadow-xl transition-all hover:bg-white/90 sm:w-auto"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
