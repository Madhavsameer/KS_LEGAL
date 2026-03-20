export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 mt-20">

      <h2 className="text-xl text-yellow-500 font-bold">
        KS Legal & Associates
      </h2>

      <p className="mt-2">
        Advocates & Legal Consultants
      </p>

      <p className="mt-2">
        Patna, Bihar
      </p>

      <p className="mt-2">
        © {new Date().getFullYear()} KS Legal & Associates
      </p>

    </footer>
  )
}