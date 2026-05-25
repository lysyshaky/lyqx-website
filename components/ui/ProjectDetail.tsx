"use client";

import Link from "next/link";

interface ProjectDetailProps {
  title: string;
  category: string;
  client: string;
  clientLocation: string;
  timeline: string;
  services: string[];
  heroImg: string;
  overview: string;
  challenge: string;
  result: string;
  resultMetric: string;
  tags: string[];
  externalUrl?: string;
  appStoreUrl?: string;
  prevProject?: { label: string; href: string };
  nextProject?: { label: string; href: string };
}

export default function ProjectDetail({
  title, category, client, clientLocation, timeline, services,
  heroImg, overview, challenge, result, resultMetric, tags,
  externalUrl, appStoreUrl, prevProject, nextProject,
}: ProjectDetailProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-0 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All Projects
          </Link>
          <div className="mt-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{category}</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-inter-tight)" }}>{title}</h1>
              <p className="mt-6 text-white/60 leading-relaxed text-lg">{overview}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                {externalUrl && (
                  <a href={externalUrl} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-black hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9f31d" }}>
                    Visit Live Site →
                  </a>
                )}
                {appStoreUrl && (
                  <a href={appStoreUrl} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">
                    App Store
                  </a>
                )}
              </div>
            </div>
            {/* Meta */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 flex flex-col gap-5">
              <InfoRow label="Client" value={`${client} (${clientLocation})`} />
              <InfoRow label="Timeline" value={timeline} />
              <InfoRow label="Category" value={category} />
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto rounded-2xl overflow-hidden border border-white/10 h-64 md:h-96 bg-[#1f1d1d]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImg} alt={title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* CHALLENGE + RESULT */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">The Challenge</p>
            <p className="text-white/70 leading-relaxed">{challenge}</p>
          </div>
          <div className="rounded-2xl border border-[#c9f31d]/20 bg-[#0f131a] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#c9f31d]/60 mb-4">The Result</p>
            <p className="text-3xl font-bold mb-4" style={{ color: "#c9f31d", fontFamily: "var(--font-inter-tight)" }}>{resultMetric}</p>
            <p className="text-white/70 leading-relaxed">{result}</p>
          </div>
        </div>
      </section>

      {/* TAGS */}
      {tags.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Project Deliverables</p>
            <div className="flex flex-wrap gap-3">
              {tags.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/60">{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NAV BETWEEN PROJECTS */}
      {(prevProject || nextProject) && (
        <section className="py-16 px-6 md:px-12 lg:px-16 border-t border-white/10">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            {prevProject ? (
              <Link href={prevProject.href} className="text-sm text-white/50 hover:text-white transition-colors">← {prevProject.label}</Link>
            ) : <span />}
            {nextProject && (
              <Link href={nextProject.href} className="text-sm text-white/50 hover:text-white transition-colors">{nextProject.label} →</Link>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>
            Inspired? <span style={{ color: "#c9f31d" }}>Let&apos;s Build Yours.</span>
          </h2>
          <Link href="/contact" className="inline-block mt-6 px-8 py-4 rounded-full font-semibold text-black text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm text-white/80">{value}</p>
    </div>
  );
}
