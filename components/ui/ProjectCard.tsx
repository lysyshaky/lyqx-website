"use client";

import Link from "next/link";
import { useRef, useState } from "react";

interface Props {
  href: string;
  img: string;
  alt: string;
  category: string;
  title: string;
  metric: string;
  featured?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function ProjectCard({ href, img, alt, category, title, metric, featured, style, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`block overflow-hidden relative ${className ?? ""}`}
      style={{ ...style, cursor: "none" }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"} ${featured ? "absolute inset-0" : ""}`}
        loading="lazy"
      />

      {/* Gradient overlay — strong enough for any image */}
      <div
        className="absolute inset-0"
        style={{
          background: featured
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.1) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Category tag */}
      <div className={`absolute ${featured ? "top-5 left-5" : "top-3 left-3"}`}>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full font-semibold uppercase tracking-widest ${featured ? "text-[11px]" : "text-[9px]"}`}
          style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}
        >
          {category}
        </span>
      </div>

      {/* Title + metric */}
      <div className={`absolute ${featured ? "bottom-7 left-7" : "bottom-4 left-4"}`}>
        <h3
          className={`font-black text-white ${featured ? "text-3xl mb-1.5" : "text-sm mb-0.5"}`}
          style={{ fontFamily: "var(--font-archivo)", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          {title}
        </h3>
        <p
          className={`font-semibold ${featured ? "text-sm" : "text-[10px]"}`}
          style={{ color: "#c9f31d", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          {metric}
        </p>
      </div>

      {/* Cursor-following VIEW pill — position updates instantly, only scale/opacity animate */}
      <div
        className="pointer-events-none absolute"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      >
        <div
          className="flex items-center gap-1.5 rounded-full font-black tracking-widest text-black"
          style={{
            background: "#c9f31d",
            padding: featured ? "13px 26px" : "9px 18px",
            fontSize: featured ? "13px" : "10px",
            transform: `scale(${hovered ? 1 : 0.3})`,
            opacity: hovered ? 1 : 0,
            transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease",
          }}
        >
          VIEW
          <svg
            width={featured ? 13 : 10}
            height={featured ? 13 : 10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
