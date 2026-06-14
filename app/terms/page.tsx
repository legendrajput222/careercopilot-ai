export default function TermsPage() {
    return (
      <div className="min-h-screen bg-[#030712] text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">
            Terms of Service
          </h1>
  
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              By using CareerCopilot AI, you agree to these terms.
            </p>
  
            <h2 className="text-2xl font-semibold text-white">
              Service Usage
            </h2>
  
            <p>
              Users must use the platform responsibly and lawfully.
            </p>
  
            <h2 className="text-2xl font-semibold text-white">
              AI Generated Content
            </h2>
  
            <p>
              AI-generated content should be reviewed before professional use.
            </p>
  
            <h2 className="text-2xl font-semibold text-white">
              Limitation of Liability
            </h2>
  
            <p>
              CareerCopilot AI is provided as-is without guarantees of employment outcomes.
            </p>
          </div>
        </div>
      </div>
    );
  }