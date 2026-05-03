"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/lib/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-30 bg-[#020617]/90 backdrop-blur-md text-white px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b border-white/10">

      {/* Logo + Name */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src={logo}
          alt="KS Legal Logo"
          width={160}
          height={160}
          className="object-contain"
        />

        <div className="leading-tight">
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:opacity-80 transition">
            KS Legal & Associates
          </h1>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm md:text-base">
        <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
        <Link href="/practice-areas" className="hover:text-yellow-400 transition">Practice Areas</Link>
        <Link href="/attorneys" className="hover:text-yellow-400 transition">Attorneys</Link>
        <Link href="/blog" className="hover:text-yellow-400 transition">Blog</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#020617] border-t border-white/10 flex flex-col items-center py-6 gap-5 md:hidden text-base">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/practice-areas" onClick={() => setOpen(false)}>Practice Areas</Link>
          <Link href="/attorneys" onClick={() => setOpen(false)}>Attorneys</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>
      )}
    </nav>
  );
}