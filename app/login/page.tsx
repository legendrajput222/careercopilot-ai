"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/20">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 text-center mb-6">
          Sign in to CareerCopilot AI
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white outline-none"
        />

        <button className="w-full bg-purple-600 p-3 rounded-lg text-white font-semibold">
          Sign In
        </button>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="w-full mt-3 border border-zinc-700 p-3 rounded-lg text-white"
        >
          Continue with Google
        </button>

        <div className="text-center mt-5">
          <span className="text-zinc-400">
            Don&apos;t have an account?
          </span>

          <Link
            href="/signup"
            className="text-purple-400 ml-2 font-semibold"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}