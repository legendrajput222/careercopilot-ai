"use client";

import { useState } from "react";
import mammoth from "mammoth";

export default function ATSCheckerPage() {
  const [resume, setResume] = useState("");
const [jobDescription, setJobDescription] = useState("");

const [score, setScore] = useState<number | null>(null);

const [feedback, setFeedback] = useState<string[]>([]);
const [missingKeywords, setMissingKeywords] = useState<string[]>([]);

const [fileName, setFileName] = useState("");

const [loading, setLoading] = useState(false);

const handleFileUpload = async (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (!file) return;

  setFileName(file.name);

  const extension = file.name
    .split(".")
    .pop()
    ?.toLowerCase();

  try {
    if (extension === "txt") {
      const text = await file.text();
      setResume(text);
    }

    else if (extension === "docx") {
      const arrayBuffer =
        await file.arrayBuffer();

      const result =
        await mammoth.extractRawText({
          arrayBuffer,
        });

      setResume(result.value);
    }

    else if (extension === "pdf") {
      alert(
        "PDF Upload coming soon. Please use DOCX or TXT."
      );
    }

    else {
      alert(
        "Only PDF, DOCX and TXT files are supported."
      );
    }
  } catch (error) {
    console.error(error);

    alert("Failed to read file.");
  }
};

const checkATS = () => {
  setLoading(true);

  let atsScore = 0;

  const suggestions: string[] = [];

  const resumeText = resume.toLowerCase();

  const jdText = jobDescription.toLowerCase();

  // Resume Length

  if (resume.length > 500) {
    atsScore += 20;

    suggestions.push(
      "✅ Resume length is good"
    );
  } else {
    suggestions.push(
      "❌ Resume is too short"
    );
  }

  // Skills

  const hasSkills =
    resumeText.includes("skills");

  if (hasSkills) {
    atsScore += 15;

    suggestions.push(
      "✅ Skills section found"
    );
  } else {
    suggestions.push(
      "❌ Missing Skills section"
    );
  }

  // Experience

  const hasExperience =
    resumeText.includes("experience");

  if (hasExperience) {
    atsScore += 15;

    suggestions.push(
      "✅ Experience section found"
    );
  } else {
    suggestions.push(
      "❌ Missing Experience section"
    );
  }

  // Education

  const hasEducation =
    resumeText.includes("education");

  if (hasEducation) {
    atsScore += 15;

    suggestions.push(
      "✅ Education section found"
    );
  } else {
    suggestions.push(
      "❌ Missing Education section"
    );
  }

  // Keyword Matching

  const jdKeywords = jdText
    .split(/\W+/)
    .filter((word) => word.length > 3);

  const uniqueKeywords =
    [...new Set(jdKeywords)];

  const missing: string[] = [];

  let matched = 0;

  uniqueKeywords.forEach((keyword) => {
    if (resumeText.includes(keyword)) {
      matched++;
    } else {
      missing.push(keyword);
    }
  });

  const keywordScore =
    Math.min(
      35,
      Math.round(
        (matched /
          Math.max(
            uniqueKeywords.length,
            1
          )) *
          35
      )
    );

  atsScore += keywordScore;

  if (keywordScore > 20) {
    suggestions.push(
      "✅ Strong keyword optimization"
    );
  } else {
    suggestions.push(
      "❌ Add more job-specific keywords"
    );
  }

  setMissingKeywords(
    missing.slice(0, 15)
  );

  setScore(
    Math.min(100, atsScore)
  );

  setFeedback(suggestions);

  setLoading(false);
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
        <div className="mb-6">
  <label className="block mb-3 text-lg">
    Upload Resume
  </label>

  <input
    type="file"
    accept=".pdf,.docx,.txt"
    onChange={handleFileUpload}
    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
  />

  {fileName && (
    <p className="mt-2 text-green-400">
      Uploaded: {fileName}
    </p>
  )}
</div>
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

{fileName && (
  <p className="mt-2 text-green-400">
    Uploaded: {fileName}
  </p>
)}

<div className="mt-6">
  <label className="block mb-3 text-lg">
    Job Description
  </label>

  <textarea
    value={jobDescription}
    onChange={(e) =>
      setJobDescription(e.target.value)
    }
    placeholder="Paste job description here..."
    rows={8}
    className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700"
  />
</div>

<button
  onClick={checkATS}
  disabled={loading}
  className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
>
  {loading
    ? "Analyzing..."
    : "Check ATS Score"}
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
              <div className="w-full bg-zinc-800 rounded-full h-4 mb-6">
  <div
    className="bg-purple-500 h-4 rounded-full"
    style={{
      width: `${score}%`,
    }}
  />
</div>

              <p className="text-zinc-300 mb-6">
                {score >= 80
                  ? "Excellent ATS Score"
                  : score >= 60
                  ? "Good ATS Score"
                  : "Needs Improvement"}
              </p>

              <div className="space-y-2">
                {feedback.map((item, index) => (
                  <p
                    key={index}
                    className="text-zinc-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
              {missingKeywords.length > 0 && (
  <div className="mt-8">
    <h3 className="text-xl font-bold mb-3">
      Missing Keywords
    </h3>

    <div className="flex flex-wrap gap-2">
      {missingKeywords.map(
        (keyword, index) => (
          <span
            key={index}
            className="bg-red-900 text-red-300 px-3 py-1 rounded-full text-sm"
          >
            {keyword}
          </span>
        )
      )}
    </div>
  </div>
)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}