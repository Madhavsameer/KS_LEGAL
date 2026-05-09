import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import FloatingButtons from "../components/FloatingButton";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import LoaderWrapper from "@/components/LoaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Service Suspended",
  description: "Website temporarily unavailable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-hidden bg-black text-white`}
      >
        {/*
        ===========================
        OLD WEBSITE LAYOUT DISABLED
        ===========================

        <LoaderWrapper>

          <Navbar />

          <main className="pt-24 flex-1">
            {children}
          </main>

          <Footer />
          <FloatingButtons />

        </LoaderWrapper>
        */}

        <main className="relative flex min-h-screen items-center justify-center px-6">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* Glass Card */}
          <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(255,255,255,0.06)]">

            {/* Status */}
            <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm tracking-[0.2em] text-red-300 uppercase">
              Service Suspended
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              503 — Collaboration Terminated
            </h1>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Message */}
            <p className="text-lg md:text-xl leading-9 text-gray-300">
              This website is currently unavailable due to the termination
              of developer support and unresolved disputes with the client.
            </p>

            {/* Quote */}
            <p className="mt-8 italic text-gray-500">
              “Some systems fail because of technical issues.
              Others because of human ones.”
            </p>

            {/* Footer */}
            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-500">
              <span>KS Legal & Associates</span>
              <span>Developer Access Revoked</span>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
