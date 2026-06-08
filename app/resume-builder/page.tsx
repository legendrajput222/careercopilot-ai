"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function ResumeBuilderPage() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(name || "Your Name", 20, 20);

    doc.setFontSize(16);

    doc.text("Skills", 20, 40);
    doc.text(skills || "-", 20, 50);

    doc.text("Experience", 20, 80);
    doc.text(experience || "-", 20, 90);

    doc.text("Education", 20, 130);
    doc.text(education || "-", 20, 140);

    doc.save("resume.pdf");
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-5xl font-bold mb-2">
        Resume Builder
      </h1>

      <p className="text-zinc-400 mb-10">
        Create a professional resume with AI.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <div className="mb-5">
            <label className="block mb-2 text-zinc-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-zinc-300">
              Skills
            </label>

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Next.js, Node.js..."
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
              rows={4}
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-zinc-300">
              Experience
            </label>

            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Describe your work experience..."
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
              rows={5}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-zinc-300">
              Education
            </label>

            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Your education details..."
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
              rows={4}
            />
          </div>

          <button
            onClick={downloadPDF}
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            Download PDF
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Resume Preview
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-purple-400">
                {name || "Your Name"}
              </h3>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Skills
              </h4>

              <p className="text-zinc-300">
                {skills || "Your skills will appear here"}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Experience
              </h4>

              <p className="text-zinc-300 whitespace-pre-wrap">
                {experience || "Your experience will appear here"}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Education
              </h4>

              <p className="text-zinc-300 whitespace-pre-wrap">
                {education || "Your education details will appear here"}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}