"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  category: string;
  href: string;
  metric: string;
  img: string;
}

const PER_PAGE = 6;

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    if (!containerRef.current) return;
    const top = containerRef.current.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  }, [page]);

  function go(next: number) {
    if (next < 0 || next >= totalPages) return;
    setDir(next > page ? 1 : -1);
    setPage(next);
  }

  const visible = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div ref={containerRef}>
      {/* Slide */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            initial={{ opacity: 0, x: dir * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -48 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative block rounded-2xl overflow-hidden project-card-hover"
                style={{ border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "3/4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.08) 100%)" }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,243,29,0.12) 0%, transparent 70%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="text-xl font-black leading-tight truncate mb-1" style={{ fontFamily: "var(--font-archivo)" }}>{p.title}</h2>
                      <p className="text-[11px] font-semibold truncate" style={{ color: "#c9f31d" }}>{p.metric}</p>
                    </div>
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,243,29,0.5)]"
                      style={{ background: "#c9f31d" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 mt-10">
        {/* Prev */}
        <button
          onClick={() => go(page - 1)}
          disabled={page === 0}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 disabled:opacity-25"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 items-center">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300"
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === page ? 18 : 5,
                height: 5,
                background: i === page ? "#c9f31d" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => go(page + 1)}
          disabled={page === totalPages - 1}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 disabled:opacity-25"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Page counter */}
      <p className="text-center mt-4 text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.22)" }}>
        {page + 1} / {totalPages}
      </p>
    </div>
  );
}
