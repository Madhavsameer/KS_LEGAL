"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=1600&q=80",
];

const texts = ["Criminal Law", "Civil Litigation", "Corporate Law"];

const practiceAreas = [
  {
    title: "Criminal Defense",
    desc: "Sharp courtroom strategy and disciplined case preparation for serious matters.",
  },
  {
    title: "Civil Litigation",
    desc: "Clear legal positioning for disputes involving recovery, defense, and resolution.",
  },
  {
    title: "Corporate Law",
    desc: "Reliable legal support for contracts, compliance, structuring, and risk control.",
  },
  {
    title: "Family Law",
    desc: "Measured representation in sensitive family disputes with practical guidance.",
  },
  {
    title: "Property Law",
    desc: "Protection for ownership, transfer, title, possession, and documentation issues.",
  },
  {
    title: "Legal Advisory",
    desc: "Strategic legal advice for individuals, founders, and growing businesses.",
  },
];

const testimonials = [
  {
    name: "Private Client",
    text: "Professional handling, clear communication, and a result-focused approach from start to finish.",
  },
  {
    name: "Business Owner",
    text: "Strong legal guidance with practical thinking. The process felt structured and dependable.",
  },
  {
    name: "Corporate Client",
    text: "Fast responses, strong drafting, and serious attention to detail where it mattered most.",
  },
];

type Particle = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  x: number;
};

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.max(end / 80, 1);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 8,
      x: (Math.random() - 0.5) * 30,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-amber-300/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, p.x, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function TypewriterText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = texts[textIndex];
    let i = 0;

    setDisplayed("");

    const typing = setInterval(() => {
      i += 1;
      setDisplayed(current.slice(0, i));

      if (i >= current.length) {
        clearInterval(typing);
      }
    }, 70);

    const next = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2600);

    return () => {
      clearInterval(typing);
      clearTimeout(next);
    };
  }, [textIndex]);

  return (
    <span className="inline-flex items-center gap-1 text-amber-400">
      {displayed}
      <span className="inline-block h-[1em] w-[2px] animate-pulse bg-amber-300" />
    </span>
  );
}

export default function HomePage() {
  const [bg, setBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(
    () => [
      { value: 10, label: "Years of Experience", suffix: "+" },
      { value: 500, label: "Cases Handled", suffix: "+" },
      { value: 95, label: "Client Confidence", suffix: "%" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 ">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={bg}
              src={images[bg]}
              alt="Legal office background"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_25%)]" />
        </div>

        <Particles />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200">
                KS Legal & Associates
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Legal expertise in <br />
              <TypewriterText />
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
              Precision-led representation for clients who need clarity, strong
              legal positioning, and confident action in high-stakes matters.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Book Consultation
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <Counter end={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-300/90">
                  Why clients choose us
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    "Disciplined case strategy built around facts and outcomes.",
                    "Direct communication without confusion or unnecessary delay.",
                    "Strong drafting, legal research, and representation quality.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                      <p className="text-sm leading-6 text-neutral-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
                  <p className="text-sm font-medium text-white">
                    Strategic legal support for serious disputes, business
                    matters, advisory work, and long-term client protection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
              Practice Areas
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Legal services built for clarity and confidence
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/12 text-amber-300">
                <span className="text-lg">•</span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {area.desc}
              </p>

              <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-amber-400/30" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Serious legal work needs structure, judgment, and timing
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                Every matter is approached with careful preparation, strong
                documentation, and strategy aligned to the actual risk, forum,
                and expected outcome.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Case Review",
                  text: "Early assessment to identify strengths, exposure, and the correct legal route.",
                },
                {
                  title: "Focused Strategy",
                  text: "A litigation or advisory plan shaped around facts, documents, and timing.",
                },
                {
                  title: "Client Communication",
                  text: "Clear updates that help clients understand what matters and what comes next.",
                },
                {
                  title: "Execution",
                  text: "Drafting, filing, argument, and negotiation handled with professional discipline.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6"
                >
                  <p className="text-lg font-medium text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
              Client Perspective
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Trusted by clients who value precision
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm leading-7 text-neutral-300">“{item.text}”</p>
              <footer className="mt-6 text-sm font-medium text-amber-300">
                {item.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
            Consultation
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Start with a clear legal conversation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            Whether you need litigation strategy, business legal support, or
            direct legal advice, begin with a consultation focused on your
            actual issue and next step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Start Consultation
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-amber-400/40 hover:bg-white/10"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}