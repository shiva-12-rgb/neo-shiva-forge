import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">&lt;CSS /&gt;</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    active === l.id
                      ? "text-foreground bg-primary/15"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary rounded-lg px-4 py-1.5 text-sm font-semibold"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </nav>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      active === l.id ? "bg-primary/15" : ""
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
