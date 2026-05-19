"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="group fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300"
      style={{
        width: 48,
        height: 48,
        background: "var(--card)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
    >
      {/* Lime fill on hover */}
      <div
        className="absolute bottom-2 left-2 rounded-full transition-all duration-500 ease-in-out group-hover:scale-[8]"
        style={{ width: 12, height: 12, background: "#c9f31d" }}
      />
      {/* Arrow up */}
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        className="relative z-10 stroke-white group-hover:stroke-black transition-colors duration-300"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
