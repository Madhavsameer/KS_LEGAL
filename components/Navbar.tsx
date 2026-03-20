"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold text-yellow-500">
        KS Legal & Associates
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/practice-areas">Practice Areas</Link>
        <Link href="/attorneys">Attorneys</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link
        href="/consultation"
        className="bg-yellow-500 text-black px-4 py-2 rounded-lg"
      >
        Book Consultation
      </Link>

    </nav>
  )
}