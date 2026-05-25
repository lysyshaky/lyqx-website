import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import ProjectsGrid from "@/components/ui/ProjectsGrid";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects — From Idea to Impact",
  description:
    "Explore the LYQX portfolio of digital products across real estate, fintech, social networking, EV, and retail. 60+ shipped products, real business results.",
  alternates: { canonical: "https://lyqx.agency/projects/" },
};

const projects = [
  {
    title: "GIDY",
    category: "Retail E-Commerce",
    href: "/project/gidy",
    metric: "+40% dealer response time",
    img: "https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png",
    year: "2024",
  },
  {
    title: "LoveNest",
    category: "Social Networking",
    href: "/project/love-nest",
    metric: "Premium subscription model launched",
    img: "https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg",
    year: "2025",
  },
  {
    title: "Fetch Agent",
    category: "Real Estate",
    href: "/project/fetch-agent",
    metric: "3,000+ transactions facilitated",
    img: "https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png",
    year: "2025",
  },
  {
    title: "GrowingGifts",
    category: "Fintech",
    href: "/project/gworing-gifts",
    metric: "3,000+ digital gifts in 3 months",
    img: "https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg",
    year: "2024",
  },
  {
    title: "T-Platform",
    category: "Crypto & Stock",
    href: "/project/t-platfom",
    metric: "$5M+ revenue before acquisition",
    img: "https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png",
    year: "2022–2024",
  },
  {
    title: "NovaPay",
    category: "Fintech",
    href: "/project/nova-pay",
    metric: "Digital wallet shipped to 5 markets",
    img: "https://framerusercontent.com/images/cZ2AAxY440gMvcDCp6zKcQW8s4.jpg",
    year: "2025",
  },
  {
    title: "Vitaflow",
    category: "Health & Wellness",
    href: "/project/vitaflow",
    metric: "10k+ active users in 60 days",
    img: "https://framerusercontent.com/images/uDDaBqyNgExBJhcYGlDGUzBDIg.webp",
    year: "2025",
  },
  {
    title: "EVEEVO",
    category: "EV Marketplace",
    href: "/project/eveevo",
    metric: "UK exclusive development partner",
    img: "https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg",
    year: "2025",
  },
  {
    title: "MediTrack",
    category: "HealthTech",
    href: "/project/meditrack",
    metric: "12k patients onboarded in 90 days",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    year: "2025",
  },
  {
    title: "FleetOS",
    category: "Logistics",
    href: "/project/fleetos",
    metric: "3x faster dispatch time",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    year: "2024",
  },
  {
    title: "LearnSpark",
    category: "EdTech",
    href: "/project/learnspark",
    metric: "50k learners in first quarter",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    year: "2025",
  },
  {
    title: "PropVault",
    category: "Real Estate",
    href: "/project/propvault",
    metric: "$120M in listings managed",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    year: "2024",
  },
  {
    title: "Carbonix",
    category: "CleanTech",
    href: "/project/carbonix",
    metric: "Carbon offset for 200+ companies",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    year: "2025",
  },
  {
    title: "ShiftPay",
    category: "Fintech",
    href: "/project/shiftpay",
    metric: "$8M processed in first month",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    year: "2025",
  },
];

const process = [
  { num: "01", title: "Discovery",  desc: "Goals, users, market. We ask the right questions first." },
  { num: "02", title: "Strategy",   desc: "Architecture, milestones, and a clear roadmap before we build." },
  { num: "03", title: "Build",      desc: "Weekly sprints with live progress and continuous feedback." },
  { num: "04", title: "Launch",     desc: "Ship, monitor, and iterate. We stay close post-launch." },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-40 pb-12 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-5 inline-block">Our Projects</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1
              className="font-black display-lg max-w-2xl mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              From Idea to{" "}
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Impact</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────── */}
      <section className="pt-6 pb-16 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <ProjectsGrid projects={projects} />
      </section>

      {/* ── Work Process ──────────────────────────────── */}
      <section className="py-24 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark-2)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-5 inline-block">Work Process</span>
          </AnimateIn>
          <AnimateIn delay={0.07} className="mb-14">
            <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
              How We
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Get It Done</span>
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              { ...process[0], icon: <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /> },
              { ...process[1], icon: <><path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" /></> },
              { ...process[2], icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
              { ...process[3], icon: <path d="M12 19V5M5 12l7-7 7 7" /> },
            ] as (typeof process[0] & { icon: ReactNode })[]).map((s, i) => (
              <AnimateIn key={s.num} delay={i * 0.07}>
                <div
                  className="process-card rounded-2xl p-6 h-full flex flex-col relative overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "var(--card)" }}
                >
                  <div className="process-glow absolute inset-0 pointer-events-none" />
                  <div
                    className="process-accent absolute left-0 top-6 bottom-6 w-[2px] rounded-full"
                    style={{ background: "linear-gradient(to bottom, #c9f31d, rgba(201,243,29,0.3))" }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.15)" }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c9f31d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {s.icon}
                      </svg>
                    </div>
                    <p className="process-num font-black leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontFamily: "var(--font-archivo)" }}>
                      {s.num}
                    </p>
                    <h3 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-archivo)" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>{s.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <AnimateIn>
          <div className="rounded-3xl relative overflow-hidden" style={{ background: "var(--card)", border: "1px solid rgba(201,243,29,0.15)" }}>
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
    </>
  );
}
