import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowtham Ganesan — AI Engineer & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Gowtham Ganesan — B.Tech AI student crafting full-stack apps, data dashboards, and intelligent systems." },
      { property: "og:title", content: "Gowtham Ganesan — Portfolio" },
      { property: "og:description", content: "AI student crafting full-stack apps, dashboards, and intelligent systems." },
    ],
  }),
  component: Index,
});

const skills = {
  Languages: ["Java", "Python", "SQL"],
  Tools: ["Power BI", "MS Excel", "Jupyter", "VS Code"],
  Concepts: ["OOP", "DSA", "Cloud Computing"],
  Soft: ["Communication", "Problem Solving", "Adaptability"],
};

const projects = [
  {
    title: "Smart Internship Recommendation System",
    stack: ["React", "Flask", "MySQL", "AI"],
    desc: "Full-stack AI platform that parses resumes, auto-generates MCQs and recommends internships with role-based access control.",
  },
  {
    title: "Cricket Player Performance Analytics",
    stack: ["Excel", "SQL", "Power BI", "DAX"],
    desc: "End-to-end pipeline from data cleaning to an interactive dashboard tracking runs, wickets, strike & economy rates with custom KPIs.",
  },
];

const certs = [
  "NPTEL — Cloud Computing",
  "NPTEL — Programming in Java (Elite, 72%)",
  "Simplilearn — MySQL Certification",
];

function Welcome({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.4em] text-muted-foreground"
        >
          Welcome
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 text-5xl md:text-7xl font-display font-medium text-foreground"
        >
          Gowtham<span className="text-primary">.</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1.0, ease: "easeInOut" }}
          className="mx-auto mt-6 h-px w-40 origin-left bg-primary/60"
        />
      </div>
    </motion.div>
  );
}

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <Welcome onDone={() => setLoading(false)} />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen"
      >
        {/* Nav */}
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-background/60 border-b border-border/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#top" className="font-display text-lg">GG<span className="text-primary">.</span></a>
            <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
              <a href="#about" className="hover:text-foreground transition">About</a>
              <a href="#work" className="hover:text-foreground transition">Work</a>
              <a href="#skills" className="hover:text-foreground transition">Skills</a>
              <a href="#contact" className="hover:text-foreground transition">Contact</a>
            </nav>
            <a href="mailto:gowthamganesan103@gmail.com" className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground hover:bg-primary hover:text-primary-foreground transition">Let's talk</a>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-muted-foreground"
          >
            Namakkal, India · Available 2027
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl leading-[1.05] md:text-8xl"
          >
            Building <em className="text-primary not-italic">intelligent</em>
            <br />
            software, quietly.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            I'm <span className="text-foreground">Gowtham Ganesan</span> — a B.Tech Artificial Intelligence student crafting full-stack apps, data dashboards, and small, useful AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#work" className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-[0_10px_40px_-10px_var(--color-primary)]">View selected work</a>
            <a href="https://github.com/gowthamganesan103-cmyk" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-secondary transition">GitHub ↗</a>
          </motion.div>
        </section>

        {/* About */}
        <motion.section id="about" {...fade} className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">About</h2>
            <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
              <p>
                Enthusiastic and detail-oriented fresher chasing real-world problems with code. I enjoy connecting the dots between data, design and decisions — and shipping things that feel calm to use.
              </p>
              <p className="text-muted-foreground text-base">
                Currently studying B.Tech in Artificial Intelligence at <span className="text-foreground">Sri Shanmugha College of Engineering & Technology</span> (CGPA 7.8 · Expected May 2027).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Work */}
        <motion.section id="work" {...fade} className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-5xl">Selected work</h2>
            <span className="text-sm text-muted-foreground">2024 — 2025</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{s}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section id="skills" {...fade} className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
          <h2 className="font-display text-4xl md:text-5xl">Toolkit</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{group}</p>
                <ul className="mt-4 space-y-2">
                  {items.map((s) => (
                    <li key={s} className="text-foreground/90">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Certifications</p>
            <ul className="mt-4 grid gap-2 md:grid-cols-3">
              {certs.map((c) => (
                <li key={c} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">{c}</li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Recognition</p>
            <p className="mt-3 text-lg">
              Presented <span className="text-foreground">GepsLancer</span> & <span className="text-foreground">SOS Ring</span> at the “Zero to One” Startup Idea Showcase, 2024.
            </p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" {...fade} className="mx-auto max-w-6xl px-6 py-32 border-t border-border/60">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
            Have an idea? <br /><span className="text-primary">Let's build it.</span>
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a href="mailto:gowthamganesan103@gmail.com" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
              <p className="mt-2 text-foreground group-hover:text-primary transition">gowthamganesan103@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/gowtham-ganesan-b3867528b" target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">LinkedIn</p>
              <p className="mt-2 text-foreground group-hover:text-primary transition">/in/gowtham-ganesan</p>
            </a>
            <a href="tel:+919597064808" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
              <p className="mt-2 text-foreground group-hover:text-primary transition">+91 95970 64808</p>
            </a>
          </div>
        </motion.section>

        <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gowtham Ganesan · Crafted with care.
        </footer>
      </motion.main>
    </>
  );
}
