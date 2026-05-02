"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  const phoneNumber = "919876543210"; // 👈 apna number (without +)
  const message = "Hello, I need legal consultation";

  const whatsappLink = `https://wa.me/${+919470088499}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:+${919470088499}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={20} />
        <span className="hidden sm:inline text-sm">Chat</span>
      </a>

      {/* Call */}
      <a
        href={callLink}
        className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaPhone size={18} />
        <span className="hidden sm:inline text-sm">Call</span>
      </a>

    </div>
  );
}