export default function About() {
  const highlights = [
    {
      title: "Strategic Legal Thinking",
      desc: "We combine deep legal knowledge with practical case strategy to help clients make informed decisions at every stage.",
    },
    {
      title: "Client-First Communication",
      desc: "We believe legal representation should be clear, responsive, and transparent from consultation to resolution.",
    },
    {
      title: "Strong Courtroom Presence",
      desc: "From criminal defense to civil disputes and corporate legal matters, we represent clients with precision and confidence.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "Every case is handled with honesty, discretion, and the highest professional standards.",
    },
    {
      title: "Expertise",
      desc: "Our legal approach is grounded in research, preparation, and experience across multiple practice areas.",
    },
    {
      title: "Commitment",
      desc: "We work with focus and persistence to secure the best possible outcome for every client.",
    },
    {
      title: "Confidentiality",
      desc: "We understand the sensitivity of legal issues and safeguard every matter with complete professionalism.",
    },
  ];

  const process = [
    "Initial consultation to understand your matter and legal position.",
    "Case review and legal strategy tailored to your goals.",
    "Documentation, representation, and continuous case updates.",
    "Strong advocacy focused on resolution, protection, and results.",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-[280px] w-[280px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-400">
              About KS Legal & Associates
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-3xl">
              Legal representation built on{" "}
              <span className="text-yellow-500">trust, strategy,</span> and
              results.
            </h1>

            <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-8">
              KS Legal & Associates is a Patna-based law firm offering focused
              legal services in criminal, civil, and corporate matters. We are
              committed to providing reliable counsel, sharp legal strategy, and
              strong representation tailored to each client’s situation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Contact Firm
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/30">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["10+", "Years Experience"],
                  ["500+", "Cases Handled"],
                  ["95%", "Success Rate"],
                  ["24/7", "Client Support"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="text-3xl font-semibold text-yellow-500">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Trusted Legal Counsel
                </p>
                <p className="mt-3 text-slate-200 leading-7">
                  Professional guidance backed by legal discipline, courtroom
                  readiness, and a client-centered approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIRM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Who We Are
            </p>
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold leading-tight">
              A modern legal practice with a disciplined approach to complex matters.
            </h2>
          </div>

          <div className="space-y-5 text-slate-300 leading-8">
            <p>
              At KS Legal & Associates, we understand that every legal matter
              carries real personal, financial, or business consequences. Our
              role is not only to represent clients, but to guide them with
              clarity, preparation, and confidence.
            </p>
            <p>
              Whether the issue involves criminal litigation, civil disputes, or
              corporate legal support, we focus on practical solutions,
              meticulous case handling, and communication clients can trust.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Why Clients Choose Us
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
              Legal service with clarity and conviction
            </h2>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/10"
            >
              <div className="h-12 w-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                <span className="text-lg">✦</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-400 leading-7 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE + MESSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Practice Focus
            </p>
            <ul className="mt-6 space-y-4 text-slate-300">
              {[
                "Criminal Defense & Litigation",
                "Civil Disputes & Representation",
                "Corporate Legal Advisory",
                "Documentation & Legal Drafting",
                "Client Consultation & Strategy",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-white/5 pb-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Our Perspective
            </p>
            <blockquote className="mt-5 text-xl md:text-2xl font-medium leading-9 text-white">
              “Effective legal representation begins with listening carefully,
              preparing thoroughly, and acting with confidence.”
            </blockquote>
            <p className="mt-6 text-slate-400 leading-8">
              We believe clients deserve legal counsel that is both professional
              and approachable. Our goal is to simplify the legal process,
              protect our clients’ interests, and pursue outcomes with care and
              persistence.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
            How We Work
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            A structured process from consultation to resolution
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 relative overflow-hidden"
            >
              <div className="text-5xl font-semibold text-white/10 absolute top-4 right-5">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="mb-4 h-10 w-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p className="text-slate-300 leading-7 text-sm">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
            Core Values
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            Principles that define our practice
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-yellow-500/20 transition"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 p-8 md:p-12 text-center backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
            Need Legal Assistance?
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Discuss your legal matter with confidence.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 leading-8">
            Connect with KS Legal & Associates for professional legal guidance,
            responsive support, and representation tailored to your needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/consultation"
              className="inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              Book Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}