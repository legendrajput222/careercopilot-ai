"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description: string;
  align?: "center" | "left";
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-16 max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mt-4 text-lg leading-relaxed text-zinc-400 ${isCenter ? "mx-auto" : ""}`}
      >
        {description}
      </motion.p>
    </div>
  );
}
