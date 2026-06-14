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
              AI-powered career tools to help you build resumes, prepare for
              interviews, and land your dream job faster.
            </p>
            <div className="mt-6 flex items-center gap-4">
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
          AI-powered Resume Builder, ATS Checker & Career Assistant.
          </p>
        </div>
      </div>
    </footer>
  );
}
