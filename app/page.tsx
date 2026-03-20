import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Welcome to KS Legal & Associates
        </h2>

        <p className="mt-4 max-w-2xl mx-auto">
          We provide professional legal services in criminal law,
          civil litigation, property disputes and family law.
        </p>
      </section>

      <Footer />

    </main>
  )
}