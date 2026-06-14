export default function WelcomeCard() {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>
  
        <p className="text-zinc-400 mt-2">
          Ready to improve your career today?
        </p>
  
        <div className="mt-5">
          <p className="text-sm text-zinc-400">
            Profile Completion
          </p>
  
          <div className="w-full bg-zinc-700 rounded-full h-3 mt-2">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
  
          <p className="text-white mt-2">75%</p>
        </div>
      </div>
    );
  }