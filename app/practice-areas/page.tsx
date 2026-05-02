"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PracticeAreas() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const areas = [
    {
      title: "Criminal Law",
      image: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpbWluYWx8ZW58MHx8MHx8fDA%3D",
      short: "Defense, bail, trial support, and courtroom representation.",
      details:
        "We provide legal support in criminal matters including anticipatory bail, criminal defense strategy, hearings, and court representation with careful preparation.",
      points: ["Bail & Anticipatory Bail", "Criminal Defense", "Trial Representation"],
    },
    {
      title: "Civil Litigation",
      image: "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l2aWwlMjBsYXd8ZW58MHx8MHx8fDA%3D",
      short: "Disputes, injunctions, recovery matters, and civil proceedings.",
      details:
        "Our firm handles civil disputes with a practical and detail-oriented approach, helping clients with filings, injunctions, recoveries, and court proceedings.",
      points: ["Suit Filing", "Injunction Matters", "Recovery Disputes"],
    },
    {
      title: "Property Disputes",
      image: "https://tse1.mm.bing.net/th/id/OIP.gEp_1lSJbK_nT7otP19P6AHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      short: "Title issues, partition matters, possession, and documentation.",
      details:
        "We advise and represent clients in property and land-related disputes, including title conflicts, partition matters, possession issues, and legal documentation.",
      points: ["Title Disputes", "Partition Cases", "Property Documentation"],
    },
    {
      title: "Family & Divorce Law",
      image: "https://thfvnext.bing.com/th/id/OIP.moGP6rEQjTZAv4RYe3SSMwHaFj?w=225&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      short: "Confidential support in divorce, custody, and family matters.",
      details:
        "Family matters require both legal precision and sensitivity. We assist clients in divorce proceedings, child custody disputes, maintenance matters, and related issues.",
      points: ["Divorce Proceedings", "Child Custody", "Maintenance Matters"],
    },
    {
      title: "Corporate Law",
      image: "https://thfvnext.bing.com/th/id/OIP.Fd-XRf7jzhEMR_3zkjq6ngHaE8?w=235&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      short: "Business advisory, agreements, compliance, and legal support.",
      details:
        "We support businesses with contracts, advisory services, documentation, and compliance matters through a commercially practical legal approach.",
      points: ["Legal Advisory", "Contracts & Agreements", "Compliance Support"],
    },
    {
      title: "Legal Consultation",
      image: "https://thfvnext.bing.com/th/id/OIP.5tGrNUOjf38zec_-6HpvogHaE8?w=243&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      short: "Clear guidance before taking action in a legal matter.",
      details:
        "We offer focused consultations for individuals and businesses seeking legal clarity, preliminary case assessment, and strategic direction before moving ahead.",
      points: ["Case Review", "Legal Opinion", "Strategic Guidance"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discuss Your Matter",
      text: "We understand your issue, documents, timeline, and legal concerns in detail.",
    },
    {
      step: "02",
      title: "Legal Assessment",
      text: "We review the facts and explain your legal position and available options.",
    },
    {
      step: "03",
      title: "Build Strategy",
      text: "A tailored legal approach is prepared according to your matter and objective.",
    },
    {
      step: "04",
      title: "Take Action",
      text: "We proceed with drafting, filing, negotiation, or courtroom representation.",
    },
  ];

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute top-36 right-0 h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-10 md:pt-32 md:pb-14">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-400">
              Practice Areas
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Legal services for{" "}
              <span className="text-yellow-500">serious matters</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base md:text-lg leading-8 text-slate-300">
              Explore our key practice areas and discover how KS Legal &
              Associates approaches each matter with legal depth, practical
              strategy, and client-focused guidance.
            </p>
          </div>
        </section>

        {/* FLIP CARDS */}
        <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {areas.map((area, index) => (
              <div
                key={area.title}
                className={`flip-card ${flippedIndex === index ? "is-flipped" : ""}`}
                onClick={() => handleFlip(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleFlip(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Flip ${area.title} card`}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
                    <div className="relative h-full w-full">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-400">
                          Practice Area
                        </span>
                        <h2 className="mt-4 text-2xl font-semibold">{area.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {area.short}
                        </p>
                        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">
                          Hover or tap to flip
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl shadow-black/30">
                    <div className="flex h-full flex-col">
                      <div>
                        <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-400">
                          {area.title}
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold leading-tight">
                          What we handle
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-300">
                          {area.details}
                        </p>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {area.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-sm text-slate-200"
                          >
                            <span className="h-2 w-2 rounded-full bg-yellow-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <a
                          href="/consultation"
                          className="inline-flex w-full items-center justify-center rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 border-t border-white/10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Clear Advice
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Understand your legal position
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                We explain legal issues in clear language so clients understand
                the process, options, and next steps.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Strategic Approach
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Preparation with precision
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                Every matter is approached with legal research, careful planning,
                and practical courtroom readiness.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Responsive Support
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Guidance at every stage
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                From first consultation to representation, we keep communication
                clear, timely, and client-focused.
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
              A structured path from legal concern to action
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="absolute right-5 top-4 text-5xl font-semibold text-white/10">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 p-8 text-center backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              Need Legal Guidance?
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Speak with our legal team today
            </h2>
            <p className="mt-4 max-w-2xl mx-auto leading-8 text-slate-300">
              Get practical legal guidance, case assessment, and professional
              support tailored to your matter.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                Book Consultation
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Learn About Our Firm
              </a>
            </div>
          </div>
        </section>
      </main>

     

      <style jsx>{`
        .flip-card {
          perspective: 1200px;
          height: 430px;
          cursor: pointer;
          outline: none;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s ease;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner,
        .flip-card:focus .flip-card-inner,
        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @media (max-width: 768px) {
          .flip-card:hover .flip-card-inner {
            transform: none;
          }

          .flip-card.is-flipped .flip-card-inner,
          .flip-card:focus .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </>
  );
}