import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Consultation() {
  return (
    <>
      <Navbar />

      <section className="py-20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Book a Consultation
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Fill the form below and our legal team will contact you.
        </p>

        <form className="mt-10 flex flex-col gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Select Case Type</option>
            <option>Criminal Law</option>
            <option>Civil Litigation</option>
            <option>Property Dispute</option>
            <option>Family / Divorce</option>
            <option>Corporate Law</option>
          </select>

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Brief about your legal issue"
            rows={5}
            className="border p-3 rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            Book Consultation
          </button>

        </form>

      </section>

      <Footer />
    </>
  )
}