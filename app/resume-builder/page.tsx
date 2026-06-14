"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

export default function ResumeBuilderPage() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [location, setLocation] = useState("");
const [linkedin, setLinkedin] = useState("");

const [skills, setSkills] = useState("");
const [experience, setExperience] = useState("");
const [education, setEducation] = useState("");

  const [generatedResume, setGeneratedResume] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedResume = localStorage.getItem("generatedResume");

    if (savedResume) {
      setGeneratedResume(savedResume);
    }
  }, []);

  const generateResume = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          location,
          linkedin,
          skills,
          experience,
          education,
        }),
      });
      
      const data = await response.json();

      if (data.resume) {
        setGeneratedResume(data.resume);

        localStorage.setItem(
          "generatedResume",
          data.resume
        );
      } else {
        alert("AI service busy. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("AI service busy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Premium Top Bar
    doc.setFillColor(124, 58, 237);
    doc.rect(0, 0, 210, 10, "F");
    
    let y = 25;
    
    // Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(name || "Your Name", 20, y);
    
    y += 10;
    
    // Contact Information
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    
    const contactLine =
    `${email || ""} | ${phone || ""} | ${location || ""}`;
    
    doc.text(contactLine, 20, y);
    
    y += 6;
    
    if (linkedin) {
    doc.text(linkedin, 20, y);
    y += 8;
    }
    
    // Divider
    doc.setDrawColor(180, 180, 180);
    doc.line(20, y, 190, y);
    
    y += 12;
    
    // Summary
    const summaryMatch = generatedResume.match(
    /## Professional Summary([\s\S]*?)## Skills/i
    );
    
    const summaryText = summaryMatch
    ? summaryMatch[1].trim()
    : "Professional summary not available.";
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Professional Summary", 20, y);
    
    y += 8;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    
    const summaryLines = doc.splitTextToSize(
    summaryText,
    170
    );
    
    doc.text(summaryLines, 20, y);
    
    y += summaryLines.length * 6 + 12;
    
    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Skills", 20, y);
    
    y += 8;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    
    const skillsMatch = generatedResume.match(
      /## Skills([\s\S]*?)## Experience/i
      );
      
      const skillsText = skillsMatch
      ? skillsMatch[1].trim()
      : skills;
      
      const skillsLines = doc.splitTextToSize(
      skillsText.replace(/-/g, "•"),
      170
      );
      
      doc.text(skillsLines, 20, y);
      
      y += skillsLines.length * 6;
    
    y += 6;
    
    // Experience
    const expMatch = generatedResume.match(
      /## Experience([\s\S]*?)## Education/i
      );
      
      const expText = expMatch
      ? expMatch[1].trim()
      : experience;
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Experience", 20, y);
      
      y += 8;
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      
      const expLines = doc.splitTextToSize(
      expText,
      170
      );
      
      doc.text(expLines, 20, y);
      
      y += expLines.length * 6 + 12;
    
    // Education
    const eduMatch = generatedResume.match(
      /## Education([\s\S]*)/i
      );
      
      const eduText = eduMatch
      ? eduMatch[1].trim()
      : education;
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Education", 20, y);
      
      y += 8;
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      
      const eduLines = doc.splitTextToSize(
      eduText,
      170
      );
      
      doc.text(eduLines, 20, y);
    
    doc.save(`${name || "resume"}.pdf`);
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

      <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 shadow-xl">

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
    Email
  </label>

  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="you@example.com"
    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
  />
</div>

<div className="mb-5">
  <label className="block mb-2 text-zinc-300">
    Phone Number
  </label>

  <input
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="+92xxxxxxxxxx"
    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
  />
</div>

<div className="mb-5">
  <label className="block mb-2 text-zinc-300">
    Location
  </label>

  <input
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    placeholder="Lahore, Pakistan"
    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
  />
</div>

<div className="mb-5">
  <label className="block mb-2 text-zinc-300">
    LinkedIn
  </label>

  <input
    type="text"
    value={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
    placeholder="linkedin.com/in/username"
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

          <div className="flex gap-4 flex-wrap">

            <button
              onClick={generateResume}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              {loading ? "Generating..." : "Generate AI Resume"}
            </button>

            <button
              onClick={downloadPDF}
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              Download PDF
            </button>

          </div>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">

        <h2 className="text-4xl font-bold mb-8">
            Resume Preview
          </h2>

          {generatedResume ? (
  <div className="space-y-6">

    <div>
      <h1 className="text-4xl font-bold mb-2">
        {name}
      </h1>

      <div className="text-zinc-400 space-y-2 mb-6">

  <p>
    <span className="font-semibold text-white">
      Email:
    </span>{" "}
    {email}
  </p>

  <p>
    <span className="font-semibold text-white">
      Phone:
    </span>{" "}
    {phone}
  </p>

  <p>
    <span className="font-semibold text-white">
      Location:
    </span>{" "}
    {location}
  </p>

  <p>
    <span className="font-semibold text-white">
      LinkedIn:
    </span>{" "}
    {linkedin}
  </p>

</div>
    </div>

    <div className="prose prose-invert prose-lg max-w-none">
    <ReactMarkdown>
  {generatedResume.replace(/^# .*$/m, "")}
</ReactMarkdown>
    </div>

  </div>
) : (
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
          )}

        </div>

      </div>
    </div>
  );
}