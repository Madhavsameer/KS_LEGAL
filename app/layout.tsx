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
  title: "503 — Developer Notice",
  description: "Service Suspended",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-hidden`}
      >
        {/*
        ======================================
        ORIGINAL WEBSITE LAYOUT (DISABLED)
        ======================================

        <LoaderWrapper>

          <Navbar />

          <main className="pt-24 flex-1">
            {children}
          </main>

          <Footer />
          <FloatingButtons />

        </LoaderWrapper>
        */}

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">

          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="absolute top-[-120px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-red-500/10 blur-3xl" />

          {/* Main Card */}
          <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-14 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)]">

            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs md:text-sm uppercase tracking-[0.3em] text-red-300">
              Developer Notice
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              503 — Service Suspended
            </h1>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Content */}
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-8">

              <p>
                This website has been placed offline after the continuous
                breakdown of communication and professional respect between
                the client and the developer.
              </p>

              <p>
                The project was handled with commitment, late nights,
                problem-solving, and patience. Unfortunately, not every client
                understands the value of the person working behind the screen.
              </p>

              <p>
                Technical systems can survive pressure.
                <br />
                Professional relationships sometimes cannot.
              </p>

              <p>
                Until further notice, all maintenance, deployment, and support
                services remain suspended.
              </p>
            </div>

            {/* Quote Section */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-lg md:text-2xl italic leading-10 text-white/90">
                “Website ko chalane ke liye server chahiye hota hai.
                <br />
                Relationship ko chalane ke liye Mutual-Understanding, Wafadari, aur Izzat🙌👍.”
                 <br />
                Good Luck☺️
                
              </p>
            </div>

            {/* Footer */}
            <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500">
              <span>KS Legal & Associates</span>
              <span>Developer Support Withdrawn</span>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
