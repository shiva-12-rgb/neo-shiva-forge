export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-4 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Chiluveru Shiva Sai. Built with passion and code.</p>
        <p className="font-mono text-xs">
          <span className="text-primary">{"<"}</span>
          designed &amp; engineered
          <span className="text-primary">{" />"}</span>
        </p>
      </div>
    </footer>
  );
}
