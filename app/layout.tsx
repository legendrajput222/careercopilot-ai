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
  title: "CareerCopilot AI — Your AI Career Copilot",
  description:
    "Land your dream job faster with AI-powered resume building, cover letter generation, interview prep, career roadmaps, and ATS optimization.",
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