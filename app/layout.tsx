import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <main className="relative flex min-h-screen items-center justify-center px-4 py-10 overflow-y-auto">

          {/* Background */}
          <div className="absolute inset-0 bg-black" />

          {/* Animated Glow */}
          <div className="absolute top-[-100px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl animate-pulse" />

          <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl animate-pulse" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Main Card */}
          <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_120px_rgba(255,255,255,0.05)] animate-fadeIn">

            {/* Top Border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

            <div className="p-6 md:p-14">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs md:text-sm uppercase tracking-[0.3em] text-red-300">
                Developer Notice
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight">
                503 — Service Suspended
              </h1>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Content */}
              <div className="space-y-6 text-base leading-8 text-gray-300 md:text-xl md:leading-10">

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

              {/* Quote Box */}
              <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 md:p-10">

                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-white/5" />

                <p className="relative z-10 text-lg italic leading-10 text-white/90 md:text-3xl md:leading-[60px]">
                  “Website ko chalane ke liye server chahiye hota hai.
                  <br />
                  Relationship ko chalane ke liye Mutual-Understanding,
                  Wafadari, aur Izzat.”
                </p>

                <p className="relative z-10 mt-6 text-right text-sm text-gray-400 md:text-lg">
                  — Good Luck ☺️
                </p>

              </div>

              {/* Footer */}
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                <span className="uppercase tracking-[0.2em]">
                  KS Legal & Associates
                </span>

                <span>
                  Developer Support Withdrawn
                </span>

              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
