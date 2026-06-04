const groups = [
  {
    title: "Core Programming",
    icon: "💻",
    items: [
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Concepts",
    icon: "🧠",
    items: [
      { name: "Data Structures & Algorithms", level: 70 },
      { name: "OOP", level: 75 },
      { name: "Logic Building", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "Linux (CachyOS)", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Exploring",
    icon: "🚀",
    items: [
      { name: "HTML5 / CSS3 / JS", level: 60 },
      { name: "Local AI Frameworks (Ollama)", level: 55 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// 02 — skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            The <span className="text-gradient">tech stack.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{it.name}</span>
                      <span className="font-mono text-primary">{it.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-primary"
                        style={{
                          width: `${it.level}%`,
                          boxShadow: "0 0 12px oklch(0.72 0.20 240 / 0.6)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
