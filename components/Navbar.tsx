"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/lib/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const hasUserCookie = (document.cookie || "")
      .split("; ")
      .some((row) => row.startsWith("userPhone="));

    const hasAdminCookie = (document.cookie || "")
      .split("; ")
      .some((row) => row.startsWith("isAdmin="));

    setIsLoggedIn(hasUserCookie);
    setIsAdmin(hasAdminCookie);
  }, []);

  const handleLogout = () => {
    document.cookie = "userPhone=; Path=/; Max-Age=0";
    document.cookie = "isAdmin=; Path=/; Max-Age=0";
    window.location.href = "/";
  };

  return (
    <nav className="h-30 bg-[#020617]/90 backdrop-blur-md text-white px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b border-white/10">
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

      <div className="hidden md:flex gap-8 text-sm md:text-base items-center">
        <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
        <Link href="/practice-areas" className="hover:text-yellow-400 transition">Practice Areas</Link>
        <Link href="/attorneys" className="hover:text-yellow-400 transition">Attorneys</Link>
        <Link href="/blog" className="hover:text-yellow-400 transition">Blog</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>

        {isLoggedIn && !isAdmin ? (
          <>
            <Link href="/user-dashboard" className="ml-4 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:brightness-95 transition">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg border border-white/10 text-sm hover:text-yellow-400 transition"
            >
              Logout
            </button>
          </>
        ) : isAdmin ? (
          <>
            <Link href="/admin-dashboard" className="ml-4 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:brightness-95 transition">
              Admin Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg border border-white/10 text-sm hover:text-yellow-400 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/user-login" className="ml-4 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:brightness-95 transition">
              Login
            </Link>
            <Link href="/admin-login" className="ml-2 px-3 py-2 rounded-lg border border-white/10 text-sm hover:text-yellow-400 transition">
              Admin
            </Link>
          </>
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#020617] border-t border-white/10 flex flex-col items-center py-6 gap-5 md:hidden text-base">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/practice-areas" onClick={() => setOpen(false)}>Practice Areas</Link>
          <Link href="/attorneys" onClick={() => setOpen(false)}>Attorneys</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <div className="pt-4 flex gap-3">
            {isLoggedIn && !isAdmin ? (
              <>
                <Link href="/user-dashboard" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="px-3 py-2 rounded-lg border border-white/10">
                  Logout
                </button>
              </>
            ) : isAdmin ? (
              <>
                <Link href="/admin-dashboard" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold">
                  Admin Dashboard
                </Link>
                <button onClick={handleLogout} className="px-3 py-2 rounded-lg border border-white/10">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/user-login" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold">
                  Login
                </Link>
                <Link href="/admin-login" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg border border-white/10">
                  Admin
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
