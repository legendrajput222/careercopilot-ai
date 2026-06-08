"use client";

import { useState } from "react";

export default function InterviewPrepPage() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  const generateQuestions = () => {
    setQuestions([
      `Tell me about yourself as a ${role}.`,
      `Why do you want to work as a ${role}?`,
      `What are your strongest skills related to ${role}?`,
      `Describe a challenge you faced and how you solved it.`,
      `Where do you see yourself in 5 years?`,
    ]);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        Interview Prep
      </h1>

      <p className="text-zinc-400 mb-10">
        Practice interview questions for your role.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <label className="block mb-3">
            Job Role
          </label>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Frontend Developer"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            onClick={generateQuestions}
            className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            Generate Questions
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Questions
          </h2>

          {questions.length === 0 ? (
            <p className="text-zinc-400">
              Questions will appear here...
            </p>
          ) : (
            <ul className="space-y-4">
              {questions.map((question, index) => (
                <li
                  key={index}
                  className="bg-zinc-800 p-4 rounded-lg"
                >
                  {question}
                </li>
              ))}
            </ul>
          )}

        </div>

      </div>
    </div>
  );
}