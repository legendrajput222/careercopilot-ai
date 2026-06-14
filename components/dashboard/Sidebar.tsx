"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
{ name: "Dashboard", href: "/dashboard" },
{ name: "Resume Builder", href: "/resume-builder" },
{ name: "ATS Checker", href: "/ats-checker" },
{ name: "AI Analyzer", href: "/analyze-resume" },
{ name: "Cover Letter", href: "/cover-letter" },
{ name: "Career Roadmap", href: "/career-roadmap" },
{ name: "Interview Prep", href: "/interview-prep" },
];

export default function Sidebar() {
const [isOpen, setIsOpen] = useState(false);

return (
<>
{/* Mobile Top Bar */} <div className="lg:hidden flex items-center justify-between p-4 bg-zinc-950 border-b border-zinc-800"> <h2 className="text-lg font-bold text-white">
CareerCopilot AI </h2>


    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-white text-2xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 p-4">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-white transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )}

  {/* Desktop Sidebar */}
  <div className="hidden lg:block w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-5">
    <h2 className="text-xl font-bold text-white mb-8">
      CareerCopilot AI
    </h2>

    <div className="space-y-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="block text-zinc-300 hover:text-white transition"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
</>


);
}