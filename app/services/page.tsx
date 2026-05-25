import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Services — Full-Cycle Digital Agency",
  description: "LYQX delivers mobile development, web platforms, UX/UI design, branding, backend engineering, and AI integration. End-to-end digital services that drive growth.",
  alternates: { canonical: "https://lyqx.agency/services" },
  openGraph: { url: "https://lyqx.agency/services" },
};

const services = [
  {
    num: "01",
    title: "Mobile Development",
    href: "/service/mobile-development",
    desc: "Native & cross-platform iOS and Android apps built for performance and scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Web Development",
    href: "/service/web-development",
    desc: "Modern, high-performing websites and platforms coded with precision and purpose.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "UX/UI Design",
    href: "/service/ux-ui-design",
    desc: "User-centered interfaces that drive engagement and support business goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Branding Identity",
    href: "/service/branding-identity",
    desc: "Bold, strategic visual identities that make your brand unforgettable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Backend",
    href: "/service/backend",
    desc: "Secure, scalable server-side architecture and API infrastructure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    num: "06",
    title: "AI Technologies",
    href: "/service/ai-technologies",
    desc: "Machine learning, NLP, and computer vision applied where they matter most.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z" />
        <path d="M8 12H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--dark)" }}>
    <section className="pt-40 pb-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]">

      <AnimateIn>
        <span className="tag mb-4 inline-block">Expertise</span>
      </AnimateIn>
      <AnimateIn delay={0.07}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h1 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
            What We
            <br />
            <span style={{ color: "rgba(255,255,255,0.28)" }}>Build For You</span>
          </h1>
          <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-base shrink-0">
            Start a Project ↗
          </Link>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <AnimateIn key={s.href} delay={i * 0.07}>
            <Link
              href={s.href}
              className="svc-card"
              style={{ "--gx": i % 2 === 0 ? "20%" : "80%", "--gy": i < 2 ? "15%" : i < 4 ? "50%" : "85%" } as React.CSSProperties}
            >
              <div className="svc-icon-wrap">
                <div className="svc-icon-default">{s.icon}</div>
                <div className="svc-icon-active">{s.icon}</div>
              </div>
              <div className="flex items-center gap-2 mb-3" style={{ position: "relative", zIndex: 1 }}>
                <span className="svc-card-title" style={{ fontFamily: "var(--font-archivo)" }}>{s.title}</span>
                <svg className="svc-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)", position: "relative", zIndex: 1 }}>
                {s.desc}
              </p>
            </Link>
          </AnimateIn>
        ))}
      </div>

    </section>

    {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <AnimateIn>
          <div
            className="rounded-3xl relative overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid rgba(201,243,29,0.15)" }}
          >
            <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9f31d, transparent)" }} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 80% at 8% 50%, rgba(201,243,29,0.07) 0%, transparent 65%)" }} />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 md:p-14">
              <div>
                <span className="tag mb-5 inline-block">Start a Project</span>
                <h2 className="font-black" style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.08 }}>
                  Have an Idea?
                  <br />
                  <span style={{ color: "#c9f31d" }}>Let&apos;s Build It.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link href="/contact" className="btn-lime flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold">
                  Get a Free Quote ↗
                </Link>
                <a
                  href="https://calendly.com/lyqx-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
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
        </AnimateIn>
      </section>
    </div>
  );
}
