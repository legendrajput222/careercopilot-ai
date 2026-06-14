"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Join CareerCopilot AI
        </p>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="w-full bg-white text-black font-semibold p-3 rounded-lg hover:bg-zinc-200 transition"
        >
          Continue with Google
        </button>

        <div className="text-center mt-6">
          <span className="text-zinc-400">
            Already have an account?
          </span>

          <Link
            href="/login"
            className="text-purple-400 ml-2 font-semibold"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}