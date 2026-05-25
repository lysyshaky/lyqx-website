"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Mobile Development",
    href: "/service/mobile-development",
    desc: "Native & cross-platform iOS and Android apps.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    href: "/service/web-development",
    desc: "High-performing websites and platforms.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    href: "/service/ux-ui-design",
    desc: "User-centered interfaces that drive engagement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Branding Identity",
    href: "/service/branding-identity",
    desc: "Bold visual identities that make brands unforgettable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Backend",
    href: "/service/backend",
    desc: "Scalable server-side architecture and APIs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="6" cy="5" r="0.8" fill="currentColor" />
        <circle cx="6" cy="12" r="0.8" fill="currentColor" />
        <circle cx="6" cy="19" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI Technologies",
    href: "/service/ai-technologies",
    desc: "Machine learning and AI applied where it matters.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z" />
        <path d="M8 12H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3" />
      </svg>
    ),
  },
];

const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-[#080A10]/88 backdrop-blur-xl border-b border-white/[0.06]" : "py-5 bg-transparent"
      }`}
    >
      <div className="px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex flex-col leading-none gap-[3px] group" aria-label="LYQX — home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="text-[21px] font-black tracking-[0.20em] text-white uppercase transition-colors duration-200 group-hover:text-[#c9f31d]" style={{ fontFamily: "var(--font-archivo)" }}>
            LYQX
          </span>
          <span className="text-[9px] font-medium tracking-[0.36em] uppercase text-white/35">SOLUTIONS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key="services" ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                >
                  Services
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Mega dropdown */}
                <div
                  className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none ${
                    servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                  style={{ width: "min(700px, 90vw)" }}
                >
                  <div
                    className={`rounded-2xl overflow-hidden ${servicesOpen ? "pointer-events-auto" : ""}`}
                    style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 24px 64px rgba(0,0,0,0.7)" }}
                  >
                    <div className="flex">
                      {/* Left CTA */}
                      <div
                        className="flex flex-col justify-between p-7 shrink-0"
                        style={{ width: 220, background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                            Schedule a call
                          </p>
                          <p className="text-[15px] font-bold leading-snug text-white mb-6">
                            Tell us about your project and let us guide you
                          </p>
                        </div>
                        <a
                          href="https://calendly.com/lyqx-info/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-lime inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm"
                          onClick={() => setServicesOpen(false)}
                        >
                          Book a call
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      </div>

                      {/* Service grid 3×2 */}
                      <div className="grid grid-cols-3 flex-1" style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="group flex flex-col gap-3 p-5 transition-colors duration-200"
                            style={{ background: "#0E1118" }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,243,29,0.05)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#0E1118")}
                          >
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.50)" }}
                            >
                              {s.icon}
                            </div>
                            <div>
                              <p className="text-[13px] font-bold text-white mb-0.5 group-hover:text-[#c9f31d] transition-colors duration-200">
                                {s.title}
                              </p>
                              <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.36)" }}>
                                {s.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/lyqx-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white/65 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Schedule Call
          </a>
          <Link href="/contact" className="btn-lime flex items-center gap-2 px-5 py-2.5 text-sm">
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
          <span className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0 w-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 mt-2 mb-3 rounded-2xl overflow-hidden overflow-y-auto max-h-[calc(100vh-6rem)]"
          style={{ border: "1px solid rgba(255,255,255,0.09)", background: "#0B0E16" }}
        >
          {/* Lime top accent line */}
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9f31d, transparent)" }} />

          {/* Radial glow */}
          <div aria-hidden="true" className="pointer-events-none absolute" style={{ top: 0, left: 0, right: 0, height: 200, background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(201,243,29,0.06) 0%, transparent 70%)", zIndex: 0 }} />

          <div className="relative z-10 px-5 py-3 flex flex-col">
            {/* Services accordion */}
            <button
              className="flex items-center justify-between w-full py-3.5 text-[15px] font-semibold text-white/65 hover:text-white transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <span>Services</span>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className={`transition-transform duration-250 ${mobileServicesOpen ? "rotate-180" : ""}`}
                style={{ color: mobileServicesOpen ? "#c9f31d" : undefined }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[400px]" : "max-h-0"}`}>
              <div className="grid grid-cols-2 gap-1.5 pt-3 pb-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 group"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,243,29,0.07)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 [&>svg]:w-[12px] [&>svg]:h-[12px]"
                      style={{ background: "rgba(255,255,255,0.07)", color: "rgba(201,243,29,0.7)" }}
                    >
                      {s.icon}
                    </span>
                    <span className="text-[11.5px] font-semibold text-white/70 group-hover:text-white leading-tight transition-colors duration-200">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {nav.filter((i) => i.label !== "Services").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between py-3.5 text-[15px] font-semibold text-white/65 hover:text-white transition-colors"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <svg className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0 transition-transform" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9f31d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            ))}

            {/* CTA block */}
            <div className="flex flex-col gap-2.5 mt-4">
              {/* Email */}
              <a
                href="mailto:info@lyqx.agency"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.2)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9f31d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Email us</span>
                  <span className="text-[13px] font-semibold text-white group-hover:text-[#c9f31d] transition-colors duration-200">info@lyqx.agency</span>
                </div>
                <svg className="ml-auto shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              {/* Schedule a Call */}
              <a
                href="https://calendly.com/lyqx-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Schedule a Call
              </a>

              {/* Contact CTA */}
              <Link href="/contact" className="btn-lime text-center px-6 py-3.5 text-sm font-bold tracking-wide" onClick={() => setOpen(false)}>
                CONTACT US ↗
              </Link>

              {/* Bottom brand strip */}
              <p className="text-center text-[9px] font-semibold tracking-[0.22em] uppercase py-2" style={{ color: "rgba(255,255,255,0.15)" }}>
                LYQX · Full-cycle digital solutions
              </p>
            </div>
          </div>

          {/* Lime bottom accent line */}
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9f31d, transparent)" }} />
        </div>
      </div>
    </header>
  );
}
