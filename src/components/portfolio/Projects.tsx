const projects = [
  {
    title: "Automated Documentation Generator",
    status: "Shipped",
    description:
      "Built an automated README and documentation generator leveraging Python and local AI models via the Ollama framework to streamline developer workflows.",
    stack: ["Python", "Ollama", "Markdown", "Automation"],
    emoji: "📄",
  },
  {
    title: "AI-Powered Chatbot",
    status: "Live",
    description:
      "Local LLM-driven conversational assistant focused on privacy and offline-first interactions.",
    stack: ["Python", "Ollama", "FastAPI"],
    emoji: "🤖",
  },
  {
    title: "Personal Portfolio Website",
    status: "Live",
    description:
      "The very site you're reading — futuristic, performant, responsive, built end-to-end.",
    stack: ["React", "TanStack", "Tailwind"],
    emoji: "✨",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// 03 — projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Things I've <span className="text-gradient">built.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative glass rounded-2xl p-6 transition-all hover:-translate-y-2 hover:border-primary"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-neon-violet/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{p.emoji}</div>
                  <span
                    className={`text-[10px] font-mono px-2 py-1 rounded-md ${
                      p.status === "Shipped" || p.status === "Live"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    {p.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/60 border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
