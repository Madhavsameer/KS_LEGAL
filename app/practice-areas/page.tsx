import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PracticeAreas() {
  const areas = [
    "Criminal Law",
    "Civil Litigation",
    "Property Disputes",
    "Family & Divorce Law",
    "Corporate Law",
  ]

  return (
    <>
      <Navbar />

      <section className="py-20 text-center">

        <h1 className="text-4xl font-bold">
          Practice Areas
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">

          {areas.map((area) => (
            <div
              key={area}
              className="border p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold">
                {area}
              </h2>
            </div>
          ))}

        </div>

      </section>

      
    </>
  )
}