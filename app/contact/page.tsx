import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="py-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* Contact Info */}

          <div>
            <h2 className="text-2xl font-semibold">
              Get in Touch
            </h2>

            <p className="mt-4">
              KS Legal & Associates
            </p>

            <p className="mt-2">
              Patna, Bihar
            </p>

            <p className="mt-2">
              Phone: +91 XXXXX XXXXX
            </p>

            <p className="mt-2">
              Email: contact@kslegal.in
            </p>
          </div>

          {/* Contact Form */}

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="border p-3 rounded"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>
        <iframe
  src="https://maps.google.com/maps?q=patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="300"
></iframe>

      </section>

      
    </>
  )
}