"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/20">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-zinc-400 text-center mb-6">
          Join CareerCopilot AI
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:scale-[1.02]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:scale-[1.02]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:scale-[1.02]"
        />

        <button className="w-full bg-purple-600 p-3 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95">
          Create Account
        </button>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full mt-3 border border-zinc-700 p-3 rounded-lg text-white transition-all duration-300 hover:bg-zinc-800 hover:scale-105 active:scale-95"
        >
          Continue with Google
        </button>

        <div className="text-center mt-5">
          <span className="text-zinc-400">
            Already have an account?
          </span>

          <Link
            href="/login"
            className="text-purple-400 ml-2 font-semibold transition-all duration-300 hover:text-purple-300"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}