import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FloatingButtons from "../components/FloatingButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoaderWrapper from "@/components/LoaderWrapper"; // ✅ add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KS Legal & Associates",
  description: "Professional Legal Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white flex flex-col min-h-screen`}
      >
        <LoaderWrapper> {/* ✅ wrap everything */}

          <Navbar />

          <main className="pt-24 flex-1">
            {children}
          </main>

          <Footer />
          <FloatingButtons />

        </LoaderWrapper>
      </body>
    </html>
  );
}