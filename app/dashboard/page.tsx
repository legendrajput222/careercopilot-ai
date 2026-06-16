"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCards from "@/components/dashboard/StatsCards";
import ToolsGrid from "@/components/dashboard/ToolsGrid";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col lg:flex-row">
      <Sidebar />
  
      <div className="flex-1 p-4 sm:p-6 lg:p-10">
        ...
      </div>
    </div>
  );
}