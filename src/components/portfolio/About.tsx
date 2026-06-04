const stats = [
  { label: "First-Year Engineering Student", icon: "🎓" },
  { label: "B.Tech CSE (AI & ML)", icon: "🤖" },
  { label: "Expected Graduation: 2029", icon: "📅" },
  { label: "Fast Learner & Tech Enthusiast", icon: "⚡" },
  { label: "Logic & Problem Solving", icon: "🧩" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-sm text-primary mb-3">// 01 — about me</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built to <span className="text-gradient">ship.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Chiluveru Shiva Sai</span>, a passionate
            first-year B.Tech Computer Science student specializing in AI &amp; ML. I am deeply
            interested in software development, algorithmic problem-solving, and building
            automated digital solutions.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            I thrive on exploring new technologies, writing clean code, and fast-tracking my
            journey to becoming an industry-ready engineer.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-neon-violet flex items-center justify-center font-display font-bold text-xl text-background">
              CS
            </div>
            <div>
              <p className="font-semibold">Shiva Sai</p>
              <p className="text-xs font-mono text-muted-foreground">@shiva-12-rgb</p>
            </div>
            <span className="ml-auto text-xs font-mono px-2 py-1 rounded-md bg-primary/15 text-primary">
              ONLINE
            </span>
          </div>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary transition-colors"
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
