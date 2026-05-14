import Link from "next/link";

interface ServiceDetailProps {
  label: string;
  title: string;
  headline: string;
  intro: string;
  body: string;
  closing: string;
  bullets: string[];
  bulletsTitle: string;
  prevService?: { label: string; href: string };
  nextService?: { label: string; href: string };
}

export default function ServiceDetail({
  label, title, headline, intro, body, closing,
  bullets, bulletsTitle, prevService, nextService,
}: ServiceDetailProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <Link href="/#services" className="text-xs text-white/40 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">← All Services</Link>
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4 mt-6">{label}</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-inter-tight)" }}>
            {headline}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-white/70 leading-relaxed text-lg">{intro}</p>
            <p className="text-white/60 leading-relaxed">{body}</p>
            <p className="text-white/60 leading-relaxed italic">{closing}</p>
            <div className="mt-4">
              <Link href="/contact" className="px-6 py-3 rounded-full text-sm font-semibold text-black hover:opacity-90 transition-opacity inline-block" style={{ backgroundColor: "#c9f31d" }}>
                Get Started
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-8">
            <h2 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-inter-tight)" }}>{bulletsTitle}</h2>
            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#c9f31d" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-inter-tight)" }}>See Our Work in Action</h2>
            <p className="text-white/50 text-sm">Explore projects built with this service</p>
          </div>
          <Link href="/project" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors shrink-0">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* NAV BETWEEN SERVICES */}
      {(prevService || nextService) && (
        <section className="py-10 px-6 md:px-12 lg:px-16 border-t border-white/10">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            {prevService ? (
              <Link href={prevService.href} className="text-sm text-white/40 hover:text-white transition-colors">← {prevService.label}</Link>
            ) : <span />}
            {nextService && (
              <Link href={nextService.href} className="text-sm text-white/40 hover:text-white transition-colors">{nextService.label} →</Link>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>
            Ready to Get <span style={{ color: "#c9f31d" }}>Started?</span>
          </h2>
          <p className="text-white/50 mb-8">Brief us on your project — free consultation, no commitment.</p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-full font-semibold text-black text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
