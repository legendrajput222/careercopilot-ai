export default function StatsCards() {
    const stats = [
      {
        title: "Resumes",
        value: "12",
      },
      {
        title: "ATS Checks",
        value: "34",
      },
      {
        title: "Cover Letters",
        value: "8",
      },
      {
        title: "Interview Sessions",
        value: "15",
      },
    ];
  
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
          >
            <p className="text-zinc-400 text-sm">
              {stat.title}
            </p>
  
            <h3 className="text-3xl font-bold text-white mt-2">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    );
  }