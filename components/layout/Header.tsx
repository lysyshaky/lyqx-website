"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/project" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-[#080A10]/88 backdrop-blur-xl border-b border-white/[0.06]"
        : "py-5 bg-transparent"
        }`}
    >
      <div className="px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 flex flex-col leading-none gap-[3px] group"
          aria-label="LYQX — home"
        >
          <span
            className="text-[21px] font-black tracking-[0.20em] text-white uppercase transition-colors duration-200 group-hover:text-[#c9f31d]"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            LYQX
          </span>
          <span className="text-[9px] font-medium tracking-[0.36em] uppercase text-white/35">
            SOLUTIONS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/lyqx-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white/65 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Schedule Call
          </a>
          <Link
            href="/contact"
            className="btn-lime flex items-center gap-2 px-5 py-2.5 text-sm"
          >
            CONTACT US
            <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center text-xs">↗</span>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""
              }`}
          />
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0 w-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-4 mt-2 mb-3 rounded-2xl border border-white/10 bg-[#0E1118]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-base text-white/70 hover:text-white transition-colors border-b border-white/[0.06] last:border-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://calendly.com/lyqx-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </a>
            <Link
              href="/contact"
              className="btn-lime text-center px-6 py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              CONTACT US ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
