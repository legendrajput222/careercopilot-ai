import Link from "next/link";

const tools = [
  {
    name: "Resume Builder",
    href: "/resume-builder",
  },
  {
    name: "ATS Checker",
    href: "/ats-checker",
  },
  {
    name: "AI Analyzer",
    href: "/analyze-resume",
  },
  {
    name: "Cover Letter",
    href: "/cover-letter",
  },
  {
    name: "Career Roadmap",
    href: "/career-roadmap",
  },
  {
    name: "Interview Prep",
    href: "/interview-prep",
  },
];

export default function ToolsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <Link
          key={tool.name}
          href={tool.href}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-purple-500 transition"
        >
          <h3 className="text-white font-semibold">
            {tool.name}
          </h3>

          <p className="text-zinc-400 text-sm mt-2">
            Open Tool →
          </p>
        </Link>
      ))}
    </div>
  );
}