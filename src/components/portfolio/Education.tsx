export function Education() {
  return (
    <section id="education" className="relative py-28 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// 04 — education &amp; goals</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            The <span className="text-gradient">journey.</span>
          </h2>
        </div>

        <div className="relative pl-8 border-l-2 border-primary/40 space-y-10">
          <TimelineItem
            year="2025 — 2029"
            title="NxtWave Institute of Advanced Technology"
            subtitle="B.Tech in Computer Science Engineering (AI & ML)"
            tag="Current"
            body="Building deep foundations in core computer science, AI/ML, and software engineering practices."
          />
          <TimelineItem
            year="Now"
            title="Open for Opportunities"
            subtitle="Internships · Open Source · Communities"
            tag="Active"
            body="Actively seeking early internship opportunities, open-source collaborations, and tech communities where I can contribute, learn, and grow by building impactful software solutions."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  title,
  subtitle,
  tag,
  body,
}: {
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  body: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-gradient-to-br from-neon-cyan to-primary animate-pulse-glow" />
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="font-mono text-xs text-primary">{year}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary/15 text-primary">
            {tag.toUpperCase()}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        <p className="text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
