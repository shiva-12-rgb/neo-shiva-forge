import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiluveru Shiva Sai — Aspiring Software Engineer | AI & ML" },
      {
        name: "description",
        content:
          "Portfolio of Chiluveru Shiva Sai — first-year B.Tech CSE (AI & ML) student, Python programmer, and aspiring software engineer open to internships.",
      },
      { property: "og:title", content: "Chiluveru Shiva Sai — Aspiring Software Engineer" },
      {
        property: "og:description",
        content: "Coding the Future, One Algorithm at a Time.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
