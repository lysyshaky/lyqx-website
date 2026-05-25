"use client";

import Link from "next/link";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  href: string;
  metric: string;
  img: string;
}

const INITIAL = 6;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const remaining = projects.length - INITIAL;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <span
                className="text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
              >{p.category}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-xl font-black leading-tight truncate mb-1" style={{ fontFamily: "var(--font-archivo)" }}>{p.title}</h2>
                  <p className="text-[11px] font-semibold truncate" style={{ color: "#c9f31d" }}>{p.metric}</p>
                </div>
                <span
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,243,29,0.5)]"
                  style={{ background: "#c9f31d" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && remaining > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
          >
            Load More
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full text-black text-xs font-black transition-transform duration-200 group-hover:scale-110"
              style={{ background: "#c9f31d" }}
            >
              +{remaining}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
