"use client";

import { useState } from "react";

export default function AnalyzeResumePage() {
  const [resume, setResume] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
        }),
      });

      const data = await response.json();

      if (data.analysis) {
        setAnalysis(data.analysis);
      } else {
        alert("Analysis failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        AI Resume Analyzer
      </h1>

      <p className="text-zinc-400 mb-10">
        Analyze your resume with AI and get professional feedback.
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
            rows={18}
            className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            onClick={analyzeResume}
            disabled={loading}
            className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Analysis Result
          </h2>

          {!analysis ? (
            <p className="text-zinc-400">
              AI feedback will appear here...
            </p>
          ) : (
            <div className="whitespace-pre-wrap text-zinc-300 leading-8">
              {analysis}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}