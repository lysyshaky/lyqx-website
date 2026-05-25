import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Industries — Sectors We Build For",
  description: "LYQX builds digital products for Real Estate, Fintech, Crypto, Social Networking, and Retail. Deep domain expertise across the industries that matter.",
  alternates: { canonical: "https://lyqx.agency/industries" },
  openGraph: { url: "https://lyqx.agency/industries" },
};

const industries = [
  { num: "01", title: "Real Estate",         desc: "We build efficient, user-friendly platforms that simplify property search, sales, and management.",      img: "https://framerusercontent.com/images/TiHHxu9z7D37u1XfYOdxHYCwo.png" },
  { num: "02", title: "Crypto & Stock",      desc: "We create secure, high-performance platforms for trading, analytics, and portfolio management.",           img: "https://framerusercontent.com/images/bAFsVd4fNkiiN2ARV4NMzM9RY.png" },
  { num: "03", title: "Fintech",             desc: "We deliver robust, compliant solutions that optimize financial services and elevate user trust.",           img: "https://framerusercontent.com/images/p3upMt6LUkdSlNvNkaXBMKHI6gY.png" },
  { num: "04", title: "Social Networking",   desc: "We craft engaging, scalable platforms that foster meaningful connections and active communities.",          img: "https://framerusercontent.com/images/KI1rgHt4ho4sYctNe2wuSIRnaA.png" },
  { num: "05", title: "Retail & E-Commerce", desc: "We build conversion-focused solutions that enhance shopping experiences and drive sales.",                 img: "https://framerusercontent.com/images/r0FXfEbKavQw0svOfkW4Xm9rP0.png" },
];

export default function IndustriesPage() {
  return (
    <section className="pt-40 pb-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>

      <AnimateIn className="mb-4">
        <span className="tag mb-4 inline-block">Core Niches</span>
        <h1 className="font-black display-md mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
          INDUSTRIES
          <br />
          <span style={{ color: "rgba(255,255,255,0.25)" }}>We Build For</span>
        </h1>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-4">
        {industries.slice(0, 3).map((ind, i) => (
          <AnimateIn key={ind.num} delay={i * 0.07}>
            <div className="ind-card rounded-2xl relative" style={{ minHeight: 300 }}>
              <div className="p-6 flex flex-col gap-2 relative z-10" style={{ maxWidth: "58%" }}>
                <p className="text-xs font-semibold tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.32)" }}>{ind.num}</p>
                <h2 className="text-2xl font-black leading-tight" style={{ fontFamily: "var(--font-archivo)", color: "#c9f31d" }}>{ind.title}</h2>
                <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>{ind.desc}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ind.img} alt={ind.title} className="ind-img absolute bottom-0 right-0"
                style={{ width: "54%", height: "80%", objectFit: "contain", objectPosition: "bottom right" }} loading="lazy" />
            </div>
          </AnimateIn>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {industries.slice(3).map((ind, i) => (
          <AnimateIn key={ind.num} delay={i * 0.07}>
            <div className="ind-card rounded-2xl relative" style={{ minHeight: 300 }}>
              <div className="p-6 flex flex-col gap-2 relative z-10" style={{ maxWidth: "55%" }}>
                <p className="text-xs font-semibold tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.32)" }}>{ind.num}</p>
                <h2 className="text-2xl font-black leading-tight" style={{ fontFamily: "var(--font-archivo)", color: "#c9f31d" }}>{ind.title}</h2>
                <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>{ind.desc}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ind.img} alt={ind.title} className="ind-img absolute bottom-0 right-0"
                style={{ width: "50%", height: "80%", objectFit: "contain", objectPosition: "bottom right" }} loading="lazy" />
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.2}>
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
  );
}
