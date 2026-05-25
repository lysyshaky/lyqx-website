"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateIn from "@/components/ui/AnimateIn";

const allServices = [
  { title: "Mobile Development", href: "/service/mobile-development" },
  { title: "Web Development",    href: "/service/web-development" },
  { title: "UX/UI Design",       href: "/service/ux-ui-design" },
  { title: "Branding Identity",  href: "/service/branding-identity" },
  { title: "Backend",            href: "/service/backend" },
  { title: "AI Technologies",    href: "/service/ai-technologies" },
];

interface Highlight {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServiceDetailProps {
  label: string;
  title: string;
  headline: string;
  intro: string;
  body: string;
  bullets: string[];
  bulletsTitle: string;
  highlights?: Highlight[];
  visual?: React.ReactNode;
  prevService?: { label: string; href: string };
  nextService?: { label: string; href: string };
}

export default function ServiceDetail({
  label, headline, intro, body,
  bullets, bulletsTitle, highlights, visual, prevService, nextService,
}: ServiceDetailProps) {
  const pathname = usePathname();

  return (
    <>
      {/* HERO */}
      <section
        className="pt-36 pb-16 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] relative overflow-hidden"
        style={{ background: "var(--dark)" }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,243,29,0.05) 0%, transparent 65%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

        <div className="relative z-10">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "rgba(201,243,29,0.7)" }}>{label}</p>
            <h1
              className="font-black mb-8"
              style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05, maxWidth: "14ch" }}
            >
              {headline}
            </h1>
          </AnimateIn>

          {highlights && highlights.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-3 mt-2">
              {highlights.map((h, i) => (
                <AnimateIn key={i} delay={0.08 + i * 0.08}>
                  <motion.div
                    className="flex flex-col gap-3 rounded-2xl p-5 relative overflow-hidden cursor-default"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(201,243,29,0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <p className="text-sm font-black mb-1.5" style={{ fontFamily: "var(--font-archivo)", color: "#fff" }}>{h.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{h.desc}</p>
                    </div>
                  </motion.div>
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section
        className="py-14 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]"
        style={{ background: "var(--dark-2)" }}
      >
        <div className="grid lg:grid-cols-[240px_1fr] gap-14 xl:gap-20 items-start">

          {/* ── Sidebar ── */}
          <div className="hidden lg:block sticky top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d]" />
              <span className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(201,243,29,0.85)" }}>Our Services</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {allServices.map((s) => {
                const active = pathname.startsWith(s.href);
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200"
                    style={
                      active
                        ? { background: "#c9f31d", color: "#000", boxShadow: "0 4px 16px rgba(201,243,29,0.25)" }
                        : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }
                    }
                  >
                    <span>{s.title}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── Main content ── */}
          {visual ? (
            /* Layout with visual: text+bullets left, animation right */
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <AnimateIn>
                <div className="flex flex-col gap-6">
                  <div className="pl-4" style={{ borderLeft: "2px solid rgba(201,243,29,0.5)" }}>
                    <p className="text-white/80 leading-relaxed text-[1.05rem] font-medium">{intro}</p>
                  </div>
                  <p className="text-white/50 leading-relaxed text-sm">{body}</p>
                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b, i) => (
                      <motion.li
                        key={b}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#c9f31d" }} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold">
                      Start a Project ↗
                    </Link>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                {visual}
              </AnimateIn>
            </div>
          ) : (
            /* Default layout: text left, bullets card right */
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <AnimateIn>
                <div className="flex flex-col gap-6">
                  <div className="pl-4" style={{ borderLeft: "2px solid rgba(201,243,29,0.5)" }}>
                    <p className="text-white/80 leading-relaxed text-[1.05rem] font-medium">{intro}</p>
                  </div>
                  <p className="text-white/50 leading-relaxed text-sm">{body}</p>
                  <div className="pt-1">
                    <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold">
                      Start a Project ↗
                    </Link>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="rounded-2xl p-7 relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--card)" }}>
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,243,29,0.4), transparent)" }} />
                  <h2 className="text-base font-black mb-6" style={{ fontFamily: "var(--font-archivo)" }}>{bulletsTitle}</h2>
                  <ul className="flex flex-col gap-3">
                    {bullets.map((b, i) => (
                      <motion.li
                        key={b}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#c9f31d" }} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          )}
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section
        className="py-14 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]"
        style={{ background: "var(--dark)" }}
      >
        <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,243,29,0.15)" }}>
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9f31d, transparent)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 100% at 5% 50%, rgba(201,243,29,0.07) 0%, transparent 60%)" }} />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-8 py-8">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-black leading-none" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>60+</p>
                <p className="text-[10px] mt-1 font-medium tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Products shipped</p>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div>
                <p className="text-2xl font-black leading-none" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>7.5M+</p>
                <p className="text-[10px] mt-1 font-medium tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Users</p>
              </div>
              <div className="w-px h-10 hidden md:block" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="hidden md:block">
                <p className="text-sm font-bold text-white leading-snug">See Our Work</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Real results, real products</p>
              </div>
            </div>
            <Link href="/projects" className="btn-lime inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold shrink-0">
              View All Projects ↗
            </Link>
          </div>
        </div>
      </section>

      {/* NAV BETWEEN SERVICES */}
      {(prevService || nextService) && (
        <section
          className="py-10 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]"
          style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex justify-between items-stretch gap-4">
            {prevService ? (
              <Link
                href={prevService.href}
                className="group flex items-center gap-3 px-5 py-4 rounded-xl flex-1 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,243,29,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
                </span>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Previous</span>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{prevService.label}</span>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {nextService && (
              <Link
                href={nextService.href}
                className="group flex items-center justify-end gap-3 px-5 py-4 rounded-xl flex-1 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,243,29,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div className="flex flex-col leading-none items-end">
                  <span className="text-[9px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Next</span>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{nextService.label}</span>
                </div>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                </span>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <div className="rounded-3xl relative overflow-hidden" style={{ background: "var(--card)", border: "1px solid rgba(201,243,29,0.15)" }}>
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9f31d, transparent)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 80% at 8% 50%, rgba(201,243,29,0.07) 0%, transparent 65%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 md:p-14">
            <div>
              <span className="tag mb-5 inline-block">Start a Project</span>
              <h2 className="font-black" style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.08 }}>
                Have an Idea?<br /><span style={{ color: "#c9f31d" }}>Let&apos;s Build It.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link href="/contact" className="btn-lime flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold">
                Get a Free Quote ↗
              </Link>
              <a
                href="https://calendly.com/lyqx-info/30min"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
