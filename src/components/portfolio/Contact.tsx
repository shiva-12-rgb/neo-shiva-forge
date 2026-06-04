import { useState } from "react";

const EMAIL = "chiluverushivasai@gmail.com";
const PHONE = "8688648551";
const GITHUB = "https://github.com/shiva-12-rgb";
const LINKEDIN = "https://www.linkedin.com/in/shiva-sai-chiluveru-a72b09375/";

export function Contact() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const msg = fd.get("message");
    const body = `Hi Shiva,%0D%0A%0D%0A${msg}%0D%0A%0D%0A— ${name}`;
    window.location.href = `mailto:${EMAIL}?subject=Portfolio Contact&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// 05 — contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="text-gradient">connect.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Recruiters, collaborators, and curious minds — say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-input/60 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.72_0.20_240/0.4)] transition-all"
              />
            </div>
            <button type="submit" className="w-full btn-primary rounded-lg py-3 font-semibold">
              {sent ? "Opening mail client…" : "Send Message"}
            </button>
            <button
              type="button"
              onClick={() => setShow(true)}
              className="w-full btn-ghost rounded-lg py-3 font-semibold"
            >
              Connect
            </button>
          </form>

          <div className="space-y-4">
            <ContactCard
              icon="📧"
              label="Email"
              value={show ? EMAIL : "Click 'Contact Me' to reveal"}
              href={show ? `mailto:${EMAIL}` : undefined}
              highlight={show}
            />
            <ContactCard
              icon="📱"
              label="Phone"
              value={show ? `+91 ${PHONE}` : "Click 'Contact Me' to reveal"}
              href={show ? `tel:+91${PHONE}` : undefined}
              highlight={show}
            />
            <ContactCard
              icon="🐙"
              label="GitHub"
              value="github.com/shiva-12-rgb"
              href={GITHUB}
            />
            <ContactCard icon="💼" label="LinkedIn" value="Connect on LinkedIn" href={LINKEDIN} />

            {!show && (
              <button
                onClick={() => setShow(true)}
                className="w-full btn-primary rounded-xl py-4 font-semibold text-base animate-pulse-glow"
              >
                Contact Me — Reveal Details
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-input/60 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.72_0.20_240/0.4)] transition-all"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const inner = (
    <div
      className={`glass rounded-xl p-4 flex items-center gap-4 transition-all hover:border-primary ${
        highlight ? "border-primary/60" : ""
      }`}
    >
      <div className="text-2xl">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
      {href && <span className="text-primary">→</span>}
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
