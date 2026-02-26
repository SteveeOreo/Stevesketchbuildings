import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "2347025389146"; // Nigeria: 234 + 7025389146 (no leading 0)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full shadow-lg ring-1 ring-stone-200/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:animate-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-bounce-attention ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <img
        src="/images/Logos/whatsapp.png"
        alt="WhatsApp"
        className="h-full w-full scale-125 object-cover object-center"
      />
    </a>
  );
};

export default WhatsAppFloat;
