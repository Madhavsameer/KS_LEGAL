import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const attorneys = [
  {
    name: "Adv. Madhav Sameer",
    role: "Founder & Advocate",
    specialization: "Criminal Law, Civil Litigation",
    experience: "5+ Years Experience",
    image: "https://avatars.githubusercontent.com/u/111692125?v=4"
    
  },
  
  {
    name: "Adv. Priya Sharma",
    role: "Legal Associate",
    specialization: "Family & Divorce Law",
    experience: "4+ Years Experience",
    image: "https://th.bing.com/th/id/OIP.hn0fEbwmoHEQRq2ddDF0xAHaE7?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
]

export default function Attorneys() {
  return (
    <>
      <Navbar />

      <section className="py-20 text-center">

        <h1 className="text-4xl font-bold">
          Our Attorneys
        </h1>

        <p className="mt-4 text-gray-600">
          Meet our experienced legal professionals.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

          {attorneys.map((lawyer, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition"
            >

              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full"> <img src={lawyer.image} alt="" /></div>

              <h2 className="text-xl font-semibold mt-4">
                {lawyer.name}
              </h2>

              <p className="text-yellow-600">
                {lawyer.role}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {lawyer.specialization}
              </p>

              <p className="text-sm mt-2">
                {lawyer.experience}
              </p>
             

            </div>
          ))}

        </div>

      </section>

      
    </>
  )
}