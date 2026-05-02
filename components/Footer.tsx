"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 border-t border-white/10">

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-500">
            KS Legal & Associates
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Advocates & Legal Consultants providing professional and
            result-driven legal services across multiple domains.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Patna, Bihar
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-white font-medium mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/practice-areas" className="hover:text-yellow-400">Practice Areas</Link></li>
            <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white font-medium mb-4">
            Contact
          </h3>

          <p className="text-sm text-gray-400">
            Email: info@kslegal.com
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Phone: +91 XXXXX XXXXX
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">

            <a className="p-2 border border-white/10 rounded-md hover:text-yellow-400 hover:scale-110 transition">
              <FaInstagram size={18} />
            </a>

            <a className="p-2 border border-white/10 rounded-md hover:text-yellow-400 hover:scale-110 transition">
              <FaXTwitter size={18} />
            </a>

            <a className="p-2 border border-white/10 rounded-md hover:text-yellow-400 hover:scale-110 transition">
              <FaLinkedin size={18} />
            </a>

          </div>

          {/* CTA */}
          <Link
            href="/consultation"
            className="inline-block mt-6 bg-yellow-500 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-5 text-xs text-gray-500">
        © {new Date().getFullYear()} KS Legal & Associates
      </div>

    </footer>
  );
}