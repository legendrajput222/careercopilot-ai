"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Beta Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
          >
            <Sparkles className="h-3.5 w-3.5" />

            🚀 Public Beta • Free During Beta • Feedback Welcome

            <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-semibold text-violet-200">
              BETA
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build an ATS-Friendly Resume with AI

            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Career Copilot AI
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            Create ATS-friendly resumes, analyze your resume score,
            generate AI cover letters, prepare for interviews,
            and discover better job opportunities —
            all in one free AI career platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:brightness-110 sm:w-auto"
            >
              Build My Resume

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-4 w-4 fill-white" />

              See How It Works
            </a>
          </motion.div>

          {/* Small Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm text-zinc-400"
          >
            No Credit Card Required • 100% Free During Beta
          </motion.p>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-2">
              {["S", "M", "J", "A", "K"].map((initial, i) => (
                <div
                  key={initial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#030712] bg-gradient-to-br from-violet-500 to-cyan-500 text-xs font-bold text-white"
                  style={{ zIndex: 5 - i }}
                >
                  {initial}
                </div>
              ))}
            </div>

            {/* Trust Text */}
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm font-medium text-emerald-400">
                ✓ Public Beta
              </p>

              <p className="text-sm text-zinc-400">
                ✓ No Credit Card Required
              </p>

              <p className="text-sm text-zinc-400">
                ✓ 100% Free During Beta
              </p>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mx-auto mt-20 max-w-5xl"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/50 via-fuchsia-600/30 to-cyan-600/50 blur-sm" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1e]/80 shadow-2xl backdrop-blur-sm">

              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />

                <span className="ml-2 text-xs text-zinc-500">
                  careercopilot.ai/dashboard
                </span>
              </div>

              {/* Dashboard Stats */}
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                {[
                  {
                    label: "Resume Score",
                    value: "94/100",
                    color: "text-emerald-400",
                  },
                  {
                    label: "Job Matches",
                    value: "47",
                    color: "text-violet-400",
                  },
                  {
                    label: "Interview Ready",
                    value: "87%",
                    color: "text-cyan-400",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/5 bg-white/5 p-4 text-center"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>

                    <p className={`mt-1 text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="border-t border-white/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  </div>

                  <span className="text-xs text-zinc-400">
                    Career Roadmap: 75% Complete
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        {/* Feature Chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "Resume Builder",
            "ATS Checker",
            "Resume Analyzer",
            "Cover Letter",
            "Interview Prep",
            "Job Search",
          ].map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20"
            >
              {feature}
            </span>
          ))}
        </motion.div>

</div>

</div>

   </section>
  );
}