import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactDetails = [
  {
    title: "Office Address",
    value: "KS Legal & Associates, Patna, Bihar",
  },
  {
    title: "Phone",
    value: "+91 9470088499",
    href: "tel:+919470088499",
  },
  {
    title: "Email",
    value: "kslegalpatna@gmail.com",
    href: "mailto:kslegalpatna@gmail.com",
  },
  {
    title: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute top-40 right-0 h-[280px] w-[280px] rounded-full bg-amber-400/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-14 md:pt-32 md:pb-20 text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-400">
            Contact KS Legal & Associates
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Get in touch for <span className="text-yellow-500">legal guidance</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-slate-300">
            Reach out to discuss your legal matter with our team. We are here to
            provide clear advice, responsive communication, and professional
            legal support tailored to your needs.
          </p>
        </section>

        {/* CONTACT CONTENT */}
        <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Get In Touch
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Let’s discuss your legal matter
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Whether you need legal consultation, case assessment, or
                  representation, our team is available to guide you with
                  professionalism and clarity.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                      {item.title}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-3 block text-sm leading-7 text-slate-300 hover:text-yellow-400 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-yellow-500/20 bg-yellow-500/10 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Response Promise
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  We aim to respond to all serious legal inquiries as quickly as
                  possible. Please share only the essential details of your
                  matter in the contact form.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Send a Message
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Request a consultation
              </h2>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-500/40 focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-500/40 focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-500/40 focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Legal matter type"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-500/40 focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Briefly describe your legal matter"
                    rows={6}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-500/40 focus:ring-2 focus:ring-yellow-500/20"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs leading-6 text-slate-400">
                    By submitting this form, you agree to share your contact
                    details for communication regarding your legal inquiry. Please
                    avoid sending highly confidential documents through this
                    initial form.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl shadow-black/20">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Office Location
              </p>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </section>
      </main>

      
    </>
  );
}