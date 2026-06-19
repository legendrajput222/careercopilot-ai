import { Globe, Mail, Share2, Sparkles } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                CareerCopilot<span className="text-violet-400"> AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            Career Copilot AI is currently in Public Beta.
            Build ATS-friendly resumes, improve your resume score, prepare for interviews, and grow your career with AI.
            Your feedback helps us improve every week.
            </p>
            {/* Beta Notice */}
<div className="mt-5 rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
<h3 className="text-sm font-semibold text-white">
  🚀 Building CareerCopilot AI in Public
</h3>

<p className="mt-2 text-sm leading-relaxed text-zinc-400">
  Every piece of feedback helps improve CareerCopilot AI faster.
  Thank you for becoming one of our earliest users ❤️
</p>
</div>
            <div className="mt-6 flex items-center gap-4">
            <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">

  <h3 className="text-base font-semibold text-white">
    ❤️ Support Career Copilot AI
  </h3>

  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
    If Career Copilot AI helped you, consider supporting development.

    Your support helps us improve AI features, buy a custom domain,
    and keep the platform free during beta.
  </p>

  <a
    href="#"
    className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
  >
    ❤️ Become an Early Supporter
  </a>
  <p className="mt-3 text-xs text-zinc-500">
  Every supporter will be remembered as an Early Supporter ❤️
</p>
</div>
  <a
    href="/contact"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 hover:text-white"
  >
    <Globe className="h-4 w-4" />
  </a>

  <a
    href="/contact"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 hover:text-white"
  >
    <Share2 className="h-4 w-4" />
  </a>

  <a
    href="mailto:legendrana323@email.com"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 hover:text-white"
  >
    <Mail className="h-4 w-4" />
  </a>
</div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} CareerCopilot AI. All rights
            reserved.
          </p>
          <p className="text-sm text-zinc-600">
          Building the future of AI Career Tools
          from Pakistan 🇵🇰 for the World 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}
