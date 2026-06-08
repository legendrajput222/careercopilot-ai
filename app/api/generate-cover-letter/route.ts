import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, jobTitle, company } = await req.json();

    const coverLetter = `Dear Hiring Manager,

My name is ${name} and I am applying for the position of ${jobTitle} at ${company}.

I am excited about this opportunity and believe that my skills, dedication, and enthusiasm make me a strong candidate for this role.

Throughout my experience, I have developed valuable skills that will allow me to contribute effectively to your organization. I am eager to learn, grow, and deliver high-quality results.

I would welcome the opportunity to discuss how my background and abilities align with your requirements.

Thank you for your time and consideration.

Sincerely,

${name}`;

    return NextResponse.json({
      success: true,
      coverLetter,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate cover letter",
      },
      { status: 500 }
    );
  }
}