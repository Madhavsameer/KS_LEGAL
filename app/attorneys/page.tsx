import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const attorneys = [
  {
    name: "Adv. Keshav Sameer",
    role: "Founder & Advocate",
    specialization: "Criminal Law, Civil Litigation",
    experience: "5+ Years Experience",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGgZBtdXZ7jKg/profile-displayphoto-scale_400_400/B56Zs..zH.K8Ak-/0/1766288210393?e=1779321600&v=beta&t=a3-PBRzV4CXKMHMKuEr2FJYx6qcop41ZWiNGsRVr844",
    bio: "Focused on criminal defense and civil litigation with a practical, client-centered legal approach.",
    expertise: ["Criminal Defense", "Civil Litigation", "Court Representation"],
  },
  {
    name: "Adv. Madhav Sameer",
    role: "Legal Associate",
    specialization: "Family & Divorce Law",
    experience: "4+ Years Experience",
    image:
      "https://avatars.githubusercontent.com/u/111692125?v=4",
    bio: "Assists clients in family and divorce matters with clarity, care, and professional legal guidance.",
    expertise: ["Family Law", "Divorce Matters", "Child Custody"],
  },
];

const highlights = [
  {
    title: "Experienced Representation",
    text: "Our attorneys bring focused legal knowledge and disciplined preparation to every matter.",
  },
  {
    title: "Client-Focused Support",
    text: "We believe every client deserves clear communication and practical legal guidance.",
  },
  {
    title: "Professional Integrity",
    text: "Every case is handled with seriousness, confidentiality, and commitment.",
  },
];

export default function Attorneys() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute top-36 right-0 h-[260px] w-[260px] rounded-full bg-amber-400/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-14 md:pt-32 md:pb-20 text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-400">
            Our Attorneys
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Meet our trusted <span className="text-yellow-500">legal team</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-slate-300">
            Our attorneys combine legal expertise, strategic thinking, and
            client-focused support to deliver strong representation across a
            range of legal matters.
          </p>
        </section>

        {/* ATTORNEY CARDS */}
        <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {attorneys.map((lawyer, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/10"
              >
                <div className="relative mx-auto h-32 w-32">
                  <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md" />
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="relative h-32 w-32 rounded-full object-cover border-4 border-white/10 shadow-lg mx-auto"
                  />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">{lawyer.name}</h2>

                <p className="mt-2 text-sm font-medium text-yellow-400">
                  {lawyer.role}
                </p>

                <p className="mt-3 text-sm text-slate-300">
                  {lawyer.specialization}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {lawyer.experience}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400 max-w-md mx-auto">
                  {lawyer.bio}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {lawyer.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="/consultation"
                    className="inline-flex items-center rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 border-t border-white/10">
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                  {item.title}
                </p>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 p-8 text-center backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              Need Legal Assistance?
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Speak with our attorneys today
            </h2>

            <p className="mt-4 max-w-2xl mx-auto leading-8 text-slate-300">
              Connect with our team for professional guidance, legal strategy,
              and representation tailored to your matter.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                Book Consultation
              </a>
              <a
                href="/practice-areas"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Practice Areas
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}