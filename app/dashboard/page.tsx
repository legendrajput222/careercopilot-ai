"use client";

import { useSession, signOut } from "next-auth/react";
import Sidebar from "@/components/dashboard/Sidebar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCards from "@/components/dashboard/StatsCards";
import ToolsGrid from "@/components/dashboard/ToolsGrid";

export default function DashboardPage() {
const { data: session } = useSession();

return ( 
  <div className="min-h-screen bg-[#030712] text-white flex flex-col lg:flex-row"> <Sidebar />

  <div className="flex-1 p-4 sm:p-6 lg:p-10">
  <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back, {session?.user?.name || "User"}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="profile"
            className="w-10 h-10 rounded-full border border-zinc-700"
          />
        )}

        <button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>

    <WelcomeCard />

    <div className="mt-6">
      <StatsCards />
    </div>

    <div className="mt-6">
      <ToolsGrid />
    </div>
  </div>
</div>

);
}