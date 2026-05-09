"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useRef } from "react";

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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.4;
          await audioRef.current.play();
        }
      } catch (err) {
        console.log("Autoplay blocked until user interaction.");
      }
    };

    playAudio();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white overflow-hidden`}
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

        {/* Audio */}
        <audio ref={audioRef} loop>
          <source src="/dark-ambient.mp3" type="audio/mpeg" />
        </audio>

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">

          {/* Animated Background */}
          <div className="absolute inset-0 bg-black" />

          <div className="absolute top-[-100px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl animate-pulse" />

          <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl animate-pulse" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

          {/* Floating Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Main Card */}
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_120px_rgba(255,255,255,0.05)] animate-[fadeIn_1.2s_ease]">

            {/* Top Glow Border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

            <div className="p-6 md:p-14">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs md:text-sm uppercase tracking-[0.3em] text-red-300 backdrop-blur-xl">
                Developer Notice
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
                503 — Service Suspended
              </h1>

              {/* Animated Divider */}
              <div className="my-8 h-px w-full overflow-hidden bg-white/10">
                <div className="h-full w-[40%] animate-[slide_4s_linear_infinite] bg-gradient-to-r from-transparent via-red-400 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-300 text-base md:text-xl leading-8 md:leading-10">

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

                <p className="relative z-10 text-lg md:text-3xl italic leading-10 md:leading-[60px] text-white/90 font-light">
                  “Website ko chalane ke liye server chahiye hota hai.
                  <br />
                  Relationship ko chalane ke liye Mutual-Understanding,
                  Wafadari, aur Izzat.”
                </p>

                <p className="relative z-10 mt-6 text-right text-sm md:text-lg text-gray-400">
                  — Good Luck ☺️
                </p>

              </div>

              {/* Footer */}
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between text-gray-500">

                <span className="tracking-[0.2em] uppercase">
                  KS Legal & Associates
                </span>

                <span>
                  Developer Support Withdrawn
                </span>

              </div>

            </div>
          </div>
        </main>

        {/* Animations */}
        <style jsx global>{`
          @keyframes slide {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(350%);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0px) scale(1);
            }
          }
        `}</style>

      </body>
    </html>
  );
}
