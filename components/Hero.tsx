import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-black text-white py-32 text-center">

      <h1 className="text-5xl font-bold text-yellow-500">
        KS Legal & Associates
      </h1>

      <p className="mt-6 text-xl">
        Committed to Justice. Dedicated to You.
      </p>

      <p className="mt-4">
        Trusted Legal Services in Patna
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <Link
          href="/consultation"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg"
        >
          Book Consultation
        </Link>

        <Link
          href="/contact"
          className="border border-yellow-500 px-6 py-3 rounded-lg"
        >
          Contact Us
        </Link>

      </div>

    </section>
  )
}