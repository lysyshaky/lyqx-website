import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Projects — From Idea to Impact",
  description:
    "Explore the LYQX portfolio of digital products across real estate, fintech, social networking, EV, and retail. 60+ shipped products, real business results.",
  alternates: { canonical: "https://lyqx.agency/project/" },
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
];

const process = [
  { num: "01", title: "Discovery & Research",   desc: "We start by getting to know your business, goals, and target audience. Research-backed insights inform every decision." },
  { num: "02", title: "Strategy & Planning",     desc: "A comprehensive roadmap — clear goals, KPIs, architecture decisions, and milestone-based delivery plan." },
  { num: "03", title: "Design & Build",          desc: "Iterative design and engineering sprints. Working builds delivered at every milestone with continuous feedback." },
  { num: "04", title: "Launch & Support",        desc: "We deploy your product and stay close post-launch — monitoring, iterating, and ensuring your product succeeds." },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-5 inline-block">Our Projects</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1
              className="font-black display-lg max-w-2xl mb-6"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              From Idea to{" "}
              <span style={{ color: "#c9f31d" }}>Impact</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              60+ digital products shipped. Real results, real clients, real business value.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────── */}
      <section className="py-12 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <AnimateIn key={p.href} delay={i * 0.05}>
              <Link
                href={p.href}
                className="group block rounded-2xl overflow-hidden card-glow"
                style={{ border: "1px solid var(--border)", background: "var(--card)" }}
              >
                <div className="relative h-56 overflow-hidden" style={{ background: "var(--surface)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="tag absolute top-4 left-4">{p.category}</span>
                  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-black/50 text-white/50 backdrop-blur-sm">
                    {p.year}
                  </span>
                </div>
                <div className="p-6">
                  <h2
                    className="text-xl font-black mb-2"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {p.title}
                  </h2>
                  <p className="text-xs font-semibold mb-4" style={{ color: "#c9f31d" }}>
                    {p.metric}
                  </p>
                  <p className="text-xs text-white/32 group-hover:text-white/60 transition-colors font-medium">
                    View case study →
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Work Process ──────────────────────────────── */}
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark-2)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-5 inline-block">Work Process</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2
              className="font-black display-md mb-16"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              How We
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Get It Done</span>
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((s, i) => (
              <AnimateIn key={s.num} delay={i * 0.07}>
                <div
                  className="rounded-2xl p-7 border-gradient h-full"
                  style={{ border: "1px solid var(--border)", background: "var(--card)" }}
                >
                  <p
                    className="text-5xl font-black mb-5"
                    style={{ color: "#c9f31d", opacity: 0.22, fontFamily: "var(--font-archivo)", lineHeight: 1 }}
                  >
                    {s.num}
                  </p>
                  <h3
                    className="text-lg font-black mb-3"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                    {s.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <div
            className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background: "radial-gradient(ellipse 60% 70% at 10% 50%, rgba(25,45,8,0.45) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(201,243,29,0.5)", fontFamily: "var(--font-archivo)" }}
                >
                  Start a Project
                </p>
                <h2
                  className="font-black display-sm"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  Have an Idea?
                  <br />
                  <span style={{ color: "#c9f31d" }}>Let&apos;s Build It.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link href="/contact" className="btn-lime flex items-center gap-2 px-7 py-4 text-sm">
                  Get a Free Quote ↗
                </Link>
                <a
                  href="https://calendly.com/lyqx-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm text-white/35 hover:text-white transition-colors py-2"
                >
                  Or schedule a call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
