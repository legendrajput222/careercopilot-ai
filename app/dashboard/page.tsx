"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">
      {/* Sidebar */}
      <div className="w-72 bg-zinc-900 p-6">
        <h1 className="text-3xl font-bold mb-10">
          CareerCopilot AI
        </h1>

        <div className="space-y-8 text-xl">
          <Link
            href="/resume-builder"
            className="block hover:text-purple-400 transition"
          >
            Resume Builder
          </Link>

          <Link
            href="/cover-letter"
            className="block hover:text-purple-400 transition"
          >
            Cover Letter
          </Link>

          <Link
            href="/ats-checker"
            className="block hover:text-purple-400 transition"
          >
            ATS Checker
          </Link>

          <Link
            href="/interview-prep"
            className="block hover:text-purple-400 transition"
          >
            Interview Prep
          </Link>

          <Link
            href="/career-roadmap"
            className="block hover:text-purple-400 transition"
          >
            Career Roadmap
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-400 mt-2 text-lg">
              Welcome back, {session?.user?.name || "User"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt="profile"
                className="w-12 h-12 rounded-full border border-zinc-700"
              />
            )}

            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/login",
                })
              }
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/resume-builder">
            <div className="bg-zinc-900 p-6 rounded-2xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Resume Builder
              </h2>

              <p className="text-zinc-400">
                Create professional resumes with AI.
              </p>
            </div>
          </Link>

          <Link href="/cover-letter">
            <div className="bg-zinc-900 p-6 rounded-2xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Cover Letter
              </h2>

              <p className="text-zinc-400">
                Generate job-specific cover letters.
              </p>
            </div>
          </Link>

          <Link href="/ats-checker">
            <div className="bg-zinc-900 p-6 rounded-2xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                ATS Checker
              </h2>

              <p className="text-zinc-400">
                Check ATS compatibility score.
              </p>
            </div>
          </Link>

          <Link href="/interview-prep">
            <div className="bg-zinc-900 p-6 rounded-2xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Interview Prep
              </h2>

              <p className="text-zinc-400">
                Practice interview questions with AI.
              </p>
            </div>
          </Link>

          <Link href="/career-roadmap">
            <div className="bg-zinc-900 p-6 rounded-2xl cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Career Roadmap
              </h2>

              <p className="text-zinc-400">
                Get a personalized growth roadmap.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}