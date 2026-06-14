import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
try {
const {
name,
email,
phone,
location,
linkedin,
skills,
experience,
education,
} = await req.json();


const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const prompt = `
Create a professional ATS-friendly resume.

Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
LinkedIn: ${linkedin}
Skills: ${skills}
Experience: ${experience}
Education: ${education}

IMPORTANT:

Return ONLY markdown.

Use EXACTLY this structure:

# ${name}

## Professional Summary

Write a strong professional summary based on the candidate information.

## Skills

Convert skills into bullet points.

## Experience

Improve and rewrite the experience professionally.

## Education

Rewrite education professionally.

Do not add fake information.
Do not add explanations.
Return only resume markdown.
`;

const result = await model.generateContent(prompt);

const response = await result.response;

const text = response.text();

return NextResponse.json({
  resume: text,
});

} catch (error: unknown) {
  console.error("GEMINI ERROR:", error);

  return NextResponse.json(
    {
      error:
        error instanceof Error
          ? error.message
          : "Failed to generate resume",
    },
    {
      status: 500,
    }
  );
}
}