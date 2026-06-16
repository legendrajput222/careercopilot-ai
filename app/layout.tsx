import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerCopilot AI — AI Resume Builder & ATS Checker",

  description:
    "Build professional resumes, optimize ATS scores, generate cover letters, prepare for interviews, and accelerate your career with AI.",

  keywords: [
    "AI Resume Builder",
    "ATS Checker",
    "Resume Analyzer",
    "Cover Letter Generator",
    "Career Roadmap",
    "Interview Preparation",
    "CareerCopilot AI",
  ],

  authors: [
    {
      name: "CareerCopilot AI",
    },
  ],

  verification: {
    google: "xOCycphVo5OLf9aCcQ3m9Mk_83ByXzMSCYM6tQi6y64",
  },

  openGraph: {
    title: "CareerCopilot AI",
    description:
      "Your AI-powered career assistant for resumes, ATS optimization, cover letters, and interview preparation.",
    type: "website",
    siteName: "CareerCopilot AI",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareerCopilot AI",
    description:
      "Build resumes, improve ATS scores and land jobs faster with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#030712] antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}