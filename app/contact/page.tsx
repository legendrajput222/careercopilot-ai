export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[#030712] text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">
            Contact Us
          </h1>
  
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <p className="text-zinc-300 mb-4">
              Have questions, feedback, or partnership inquiries?
            </p>
  
            <p className="text-zinc-300">
              Email us at:
            </p>
  
            <a
              href="mailto:legendrana323@email.com"
              className="text-purple-400 font-semibold"
            >
              legendrana323@email.com
            </a>
          </div>
        </div>
      </div>
    );
  }