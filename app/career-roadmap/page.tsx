"use client";

import { useState } from "react";

export default function CareerRoadmapPage() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState<string[]>([]);

  const generateRoadmap = () => {
    setRoadmap([
      `Learn the fundamentals of ${goal}`,
      `Build 3 practical projects related to ${goal}`,
      `Create a professional portfolio`,
      `Practice interview questions`,
      `Apply for internships or freelance work`,
      `Build a strong LinkedIn profile`,
      `Start applying for full-time ${goal} roles`,
    ]);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        Career Roadmap
      </h1>

      <p className="text-zinc-400 mb-10">
        Generate a learning roadmap for your dream career.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <label className="block mb-3">
            Career Goal
          </label>

          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="AI Engineer"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            onClick={generateRoadmap}
            className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            Generate Roadmap
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Your Roadmap
          </h2>

          {roadmap.length === 0 ? (
            <p className="text-zinc-400">
              Roadmap will appear here...
            </p>
          ) : (
            <ul className="space-y-4">
              {roadmap.map((step, index) => (
                <li
                  key={index}
                  className="bg-zinc-800 p-4 rounded-lg"
                >
                  Step {index + 1}: {step}
                </li>
              ))}
            </ul>
          )}

        </div>

      </div>
    </div>
  );
}