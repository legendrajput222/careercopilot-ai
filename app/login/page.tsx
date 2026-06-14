"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();

useEffect(() => {
  if (session) {
    router.push("/dashboard");
  }
}, [session, router]);

  if (status === "loading") 
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Sign in to CareerCopilot AI
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