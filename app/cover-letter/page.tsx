"use client";

import { useState } from "react";

export default function CoverLetterPage() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCoverLetter = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          jobTitle,
          company,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCoverLetter(data.coverLetter);
      } else {
        alert("Failed to generate cover letter");
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
        Cover Letter Generator
      </h1>

      <p className="text-zinc-400 mb-10">
        Create a professional cover letter with AI.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Form */}
        <div className="bg-zinc-900 p-8 rounded-2xl">

          <div className="mb-5">
            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">
              Job Title
            </label>

            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">
              Company Name
            </label>

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Google"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          <button
            onClick={generateCoverLetter}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            {loading ? "Generating..." : "Generate Cover Letter"}
          </button>

        </div>

        {/* Preview */}
        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Cover Letter Preview
          </h2>

          <div className="text-zinc-300 whitespace-pre-wrap leading-8">
            {coverLetter || "Your AI generated cover letter will appear here..."}
          </div>

        </div>

      </div>
    </div>
  );
}