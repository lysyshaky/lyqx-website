"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Projects", href: "/project" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className="text-xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter-tight)", color: "#c9f31d" }}
          >
            LYQX
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#c9f31d" }}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0f131a] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black text-center"
            style={{ backgroundColor: "#c9f31d" }}
            onClick={() => setOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
