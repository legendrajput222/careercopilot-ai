import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { resume } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an ATS Resume Expert.

Analyze this resume and return ONLY:

Overall Resume Rating
(Excellent / Good / Average / Needs Improvement)

Strengths:
- max 3 bullet points

Improvements:
- max 3 bullet points

Recommended Role:
- one role only

Rules:
- Keep response under 120 words
- No long explanations
- No paragraphs
- No markdown headings
- Short and professional

Resume:

${resume}

Return clean readable text only.
`;

let result:
  | Awaited<ReturnType<typeof model.generateContent>>
  | undefined;

for (let i = 0; i < 3; i++) {
  try {
    result = await model.generateContent(prompt);
    break;
  } catch (error) {
    console.log(`Retry Attempt ${i + 1}`);

    if (i === 2) {
      throw error;
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
  }
}

if (!result) {
  throw new Error("Failed to generate analysis");
}

const response = result.response.text();

    return NextResponse.json({
      analysis: response,
    });
  } catch (error) {
    console.error(error);
  
    return NextResponse.json({
      analysis:
        "AI service is temporarily busy. Please try again in a few moments.",
    });
  }
}