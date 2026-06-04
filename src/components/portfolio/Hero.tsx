import { useEffect, useState } from "react";
import { ParticleField } from "./ParticleField";
import resumeAsset from "@/assets/Shivasai_Resume.pdf.asset.json";


const ROLES = [
  "B.Tech CSE (AI & ML) Student",
  "Python Programmer",
  "Problem Solver",
  "Tech Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % ROLES.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="font-mono text-base sm:text-lg text-neon-cyan">
      {text}
      <span className="inline-block w-[2px] h-5 bg-neon-cyan ml-1 animate-blink align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <ParticleField />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-neon-violet/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Chiluveru
            <br />
            <span className="text-gradient">Shiva Sai</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium">
            Aspiring Software Engineer{" "}
            <span className="text-primary">|</span> AI &amp; ML Enthusiast
          </p>
          <p className="mt-3 italic text-foreground/80">
            "Coding the Future, One Algorithm at a Time."
          </p>
          <div className="mt-6 min-h-[2rem]">
            <Typewriter />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary rounded-xl px-6 py-3 font-semibold">
              View Projects
            </a>
            <a
            <a
              href={resumeAsset.url}
              download="Shivasai_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost rounded-xl px-6 py-3 font-semibold"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn-ghost rounded-xl px-6 py-3 font-semibold">
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative w-72 h-72 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-neon-violet opacity-30 blur-3xl" />
            <div className="absolute inset-4 rounded-full neon-border animate-pulse-glow flex items-center justify-center font-mono text-xs text-primary/70">
              <div className="text-center">
                <div className="text-5xl mb-2">⚡</div>
                <div>{"<dev />"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs font-mono">
        scroll ↓
      </div>
    </section>
  );
}
