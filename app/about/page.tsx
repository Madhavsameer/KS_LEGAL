import Image from "next/image";
import keshav from "@/lib/Keshav_Profile3.png";
export default function About() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Cases Handled" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Client Support" },
  ];

  const highlights = [
    {
      title: "Strategic Legal Thinking",
      desc: "We approach every matter with preparation, legal depth, and a practical strategy tailored to the client’s goals.",
    },
    {
      title: "Transparent Guidance",
      desc: "Clients receive clear advice, honest communication, and regular updates throughout the legal process.",
    },
    {
      title: "Focused Representation",
      desc: "From criminal and civil disputes to corporate legal matters, we represent every case with discipline and precision.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "We uphold the highest ethical standards in every legal matter we undertake.",
    },
    {
      title: "Expertise",
      desc: "Our work is driven by research, preparation, and practical courtroom understanding.",
    },
    {
      title: "Commitment",
      desc: "We stay fully dedicated to protecting our clients’ interests and pursuing strong outcomes.",
    },
    {
      title: "Confidentiality",
      desc: "Sensitive matters are handled with professionalism, respect, and complete discretion.",
    },
  ];

  const process = [
    "Initial consultation to understand your concerns, facts, and legal position.",
    "Detailed case assessment and a strategy designed around your objectives.",
    "Documentation, representation, and regular communication at each stage.",
    "Strong legal advocacy aimed at resolution, protection, and long-term confidence.",
  ];

  const practiceAreas = [
    "Criminal Defense & Litigation",
    "Civil Disputes & Representation",
    "Corporate Legal Advisory",
    "Legal Documentation & Drafting",
    "Consultation & Case Strategy",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
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
              KS Legal & Associates is a Patna-based law firm delivering
              professional legal services in criminal, civil, and corporate
              matters. We combine legal expertise, disciplined preparation, and
              responsive support to help clients move forward with confidence.
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
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="text-3xl font-semibold text-yellow-500">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Trusted Legal Counsel
                </p>
                <p className="mt-3 text-slate-200 leading-7">
                  Professional legal guidance backed by preparation, precision,
                  and a client-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
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
              At KS Legal & Associates, we understand that legal issues often
              involve serious personal, financial, and business consequences. We
              work to deliver not only strong representation, but also clarity
              and confidence throughout the process.
            </p>
            <p>
              Our firm is built on the belief that effective legal support
              should be strategic, transparent, and responsive. Every matter is
              approached with preparation, professionalism, and a commitment to
              achieving the best possible outcome for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
            Why Clients Choose Us
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            Legal service with clarity and conviction
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/10"
            >
              <div className="h-12 w-12 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                <span className="text-lg">✦</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-center">
          <div className="relative">
            <div className="">
               <Image
    src={keshav}
    alt="Keshav Sameer, Founder of KS Legal & Associates"
    className="w-full h-full"
  />
            </div>

            {/* <div className="absolute -bottom-5 -right-5 rounded-2xl border border-yellow-500/20 bg-slate-900/95 px-5 py-4 backdrop-blur-xl">
              <p className="text-lg font-semibold text-yellow-400">Founder</p>
              <p className="text-sm text-slate-300">Keshav Sameer</p>
            </div> */}
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Founder's Message
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              Leadership rooted in integrity and legal discipline
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              Keshav Sameer founded KS Legal & Associates with a clear vision:
              to build a law firm that combines strong legal capability with
              honest client guidance. His approach is grounded in preparation,
              precision, and a deep sense of professional responsibility.
            </p>

            <p className="mt-4 text-slate-400 leading-8">
              He believes that effective legal service is not only about
              arguments in court, but also about understanding the client’s
              concerns, communicating clearly, and pursuing every matter with
              commitment and strategic focus. Under his leadership, the firm
              continues to provide dependable representation across criminal,
              civil, and corporate matters.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg italic leading-8 text-slate-200">
                “Our responsibility is to stand beside every client with clarity,
                preparation, and confidence—because strong legal support begins
                with trust.”
              </p>

              <div className="mt-6 border-l-2 border-yellow-500 pl-4">
                <p className="font-semibold text-white">Keshav Sameer</p>
                <p className="text-sm text-slate-400">
                  Founder & Lead Advocate, KS Legal & Associates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE + PERSPECTIVE */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Practice Focus
            </p>
            <ul className="mt-6 space-y-4 text-slate-300">
              {practiceAreas.map((item) => (
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
              We believe every client deserves professional support that is both
              disciplined and approachable. Our goal is to simplify the legal
              process, protect our clients’ interests, and pursue outcomes with
              focus and responsibility.
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
            A structured legal process from consultation to resolution
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute right-5 top-4 text-5xl font-semibold text-white/10">
                0{index + 1}
              </div>
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-semibold text-black">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-300">{step}</p>
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
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-yellow-500/20"
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
            Discuss your legal matter with confidence
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