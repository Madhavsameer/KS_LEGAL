import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <>
      <Navbar />

      <section className="py-20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">
          About KS Legal & Associates
        </h1>

        <p className="mt-6">
          KS Legal & Associates is a Patna based law firm
          providing professional legal services in criminal,
          civil and corporate matters.
        </p>

      </section>

      <Footer />
    </>
  )
}