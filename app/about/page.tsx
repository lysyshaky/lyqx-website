import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import Counter from "@/components/ui/Counter";
import GlobalMap from "@/components/ui/GlobalMap";

export const metadata: Metadata = {
  title: "About — LYQX Solutions",
  description: "LYQX is a full-cycle digital agency designing, building, and launching intelligent digital systems that scale with your business.",
  alternates: { canonical: "https://lyqx.agency/about" },
  openGraph: { url: "https://lyqx.agency/about" },
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--dark)" }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] overflow-hidden">
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 55% at 30% 40%, rgba(201,243,29,0.05) 0%, transparent 65%)" }}
        />

        <div className="relative z-10">
          <AnimateIn>
            <span className="tag inline-block" style={{ marginBottom: 28 }}>About LYQX</span>
          </AnimateIn>

          <AnimateIn delay={0.07}>
            <h1
              className="font-black"
              style={{
                fontFamily: "var(--font-archivo)",
                fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                marginBottom: 28,
              }}
            >
              Launch. Yield.
              <br />
              Quality.{" "}
              <span style={{ color: "#c9f31d" }}>Xperience.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.13}>
            <p
              className="leading-relaxed md:whitespace-nowrap"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: "rgba(255,255,255,0.50)",
                marginBottom: 52,
              }}
            >
              We deliver more than digital products. We solve real business needs.
            </p>
          </AnimateIn>

          {/* Stats */}
          <AnimateIn delay={0.2}>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 40,
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">
                {[
                  { val: 7,   suffix: "+",  label: "Years experience"   },
                  { val: 60,  suffix: "+",  label: "Products shipped"   },
                  { val: 7.5, suffix: "M+", label: "End users reached"  },
                  { val: 25,  suffix: "+",  label: "Team members"       },
                  { val: 98,  suffix: "%",  label: "Client satisfaction"},
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-black leading-none" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>
                      <Counter to={s.val} suffix={s.suffix} />
                    </p>
                    <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── About + Awards ─────────────────────────── */}
      <section className="pt-8 pb-10 md:py-24 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 70% at 15% 50%, rgba(201,243,29,0.055) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-24 items-center">

          {/* LEFT — copy */}
          <div>
            <AnimateIn>
              <span className="tag mb-5 inline-block">Who We Are</span>
            </AnimateIn>
            <AnimateIn delay={0.07}>
              <h2 className="font-black display-md mb-10" style={{ fontFamily: "var(--font-archivo)" }}>
                We Build Products
                <br />
                <span style={{ color: "#c9f31d" }}>People Love.</span>
              </h2>
            </AnimateIn>

            <div className="flex flex-col gap-5 mb-12">
              {([
                { label: "Full-cycle delivery", detail: "Discovery, design, engineering, launch — one team from zero to live." },
                { label: "60+ products shipped", detail: "Across fintech, real estate, social, crypto, retail and more." },
                { label: "7M+ end users", detail: "Real software reaching real people, built to scale from day one." },
              ] as { label: string; detail: string }[]).map((f, i) => (
                <AnimateIn key={f.label} delay={0.14 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 mt-1 rounded-full"
                      style={{ width: 2, minHeight: 44, background: "linear-gradient(to bottom, #c9f31d, rgba(201,243,29,0.2))" }}
                    />
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{f.label}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{f.detail}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.36}>
              <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-sm">
                Work With Us ↗
              </Link>
            </AnimateIn>
          </div>

          {/* RIGHT — Awards card */}
          <AnimateIn delay={0.18}>
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                border: "1px solid rgba(201,243,29,0.18)",
                background: "var(--card)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,243,29,0.09) 0%, transparent 65%)" }}
              />
              <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,243,29,0.5), transparent)" }} />

              <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <p className="text-[12px] font-semibold tracking-[0.22em] uppercase mt-6" style={{ color: "rgba(201,243,29,0.7)", marginBottom: "36px" }}>
                  Awards &amp; Recognition
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { src: "https://framerusercontent.com/images/qp4GDPte4nzsavdQf1OJVUqfyQ.png", alt: "Clutch",    href: "https://clutch.co/profile/lyqx#reviews" },
                    { src: "https://framerusercontent.com/images/8dxpbJ12NtRhvzNp5ur0QSmM.png",  alt: "GoodFirms", href: "https://goodfirms.co" },
                    { src: "https://framerusercontent.com/images/8tpKjbOHm1tyHRdiNAlAP39wAk.png", alt: "Upwork",    href: "https://upwork.com" },
                    { src: "/images/top-app-badge.svg",                                            alt: "Dribbble",  href: "https://dribbble.com/lyqx" },
                  ].map((badge) => (
                    <a
                      key={badge.alt}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-2xl p-5 transition-all duration-300 hover:scale-[1.04]"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                        style={{ height: 84, width: "auto", objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ── Global Map ───────────────────────────────── */}
      <GlobalMap />

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="pt-4 pb-16 md:py-20 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]">
        <AnimateIn delay={0.1} className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-4 text-base">
            Work With Us ↗
          </Link>
          <Link href="/projects" className="glass flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/60 hover:text-white transition-colors">
            See Our Work →
          </Link>
        </AnimateIn>
      </section>

    </div>
  );
}
