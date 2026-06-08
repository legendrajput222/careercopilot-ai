"use client";

import { useState } from "react";

export default function ATSCheckerPage() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const checkATS = () => {
    let atsScore = 0;

    if (resume.length > 100) atsScore += 20;
    if (resume.toLowerCase().includes("skills")) atsScore += 20;
    if (resume.toLowerCase().includes("experience")) atsScore += 20;
    if (resume.toLowerCase().includes("education")) atsScore += 20;
    if (resume.length > 300) atsScore += 20;

    setScore(atsScore);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        ATS Checker
      </h1>

      <p className="text-zinc-400 mb-10">
        Check your resume ATS compatibility score.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <label className="block mb-3 text-lg">
            Paste Your Resume
          </label>

          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here..."
            rows={15}
            className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            onClick={checkATS}
            className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            Check ATS Score
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            ATS Result
          </h2>

          {score === null ? (
            <p className="text-zinc-400">
              Your ATS score will appear here...
            </p>
          ) : (
            <>
              <h3 className="text-6xl font-bold text-purple-400 mb-4">
                {score}%
              </h3>

              <p className="text-zinc-300">
                {score >= 80
                  ? "Excellent ATS Score"
                  : score >= 60
                  ? "Good ATS Score"
                  : "Needs Improvement"}
              </p>
            </>
          )}

        </div>

      </div>
    </div>
  );
}