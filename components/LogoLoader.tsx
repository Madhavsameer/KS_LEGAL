"use client";

import Image from "next/image";
import logo from "@/lib/logo.png";

export default function LogoLoader() {
  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999] overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"></div>

      <div className="relative flex items-center justify-center">

        {/* 🔥 Rotating Ring */}
        <div className="ring"></div>

        {/* Logo */}
        <div className="logo">
          <Image
            src={logo}
            alt="KS Legal Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

      </div>

      {/* Text */}
      <div className="absolute bottom-32 text-center">
        <h1 className="text-xl font-semibold text-white/90">
          KS Legal & Associates
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Power. Justice. Authority.
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`

        /* Rotating gradient ring */
        .ring {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent,
            #facc15,
            transparent,
            #eab308,
            transparent
          );
          animation: rotate 2s linear infinite;
          position: absolute;
        }

        /* Inner mask to create ring */
        .ring::before {
          content: "";
          position: absolute;
          inset: 6px;
          background: #020617;
          border-radius: 50%;
        }

        /* Logo animation */
        .logo {
          position: relative;
          z-index: 10;
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(250,204,21,0.3));
          }
          50% {
            transform: scale(1.08);
            filter: drop-shadow(0 0 18px rgba(250,204,21,0.6));
          }
        }

        /* Ring rotation */
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

      `}</style>
    </div>
  );
}