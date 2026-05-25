"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ── timing ──────────────────────────────────────────────── */
const N = 6;
const CYCLE = 30;
const PER = CYCLE / N;
const FADE = 0.5;

function sTimes(i: number): number[] {
  if (i === 0) return [0, (PER - FADE) / CYCLE, PER / CYCLE, 1];
  const s = i * PER, e = (i + 1) * PER;
  const base = [0, s / CYCLE, (s + FADE) / CYCLE, (e - FADE) / CYCLE];
  return i === N - 1 ? [...base, 1] : [...base, e / CYCLE, 1];
}
function sOpacity(i: number): number[] {
  if (i === 0) return [1, 1, 0, 0];
  return i === N - 1 ? [0, 0, 1, 1, 0] : [0, 0, 1, 1, 0, 0];
}

/* ── floating cards ──────────────────────────────────────── */
const cards = [
  { id: "revenue", label: "$5M+", sub: "Revenue generated", color: "#c9f31d", style: { top: "6%", left: "-18%" }, delay: 0, float: { y: [-6, 6], dur: 3.2 } },
  { id: "retention", label: "+68%", sub: "User Retention", color: "#4e9eff", style: { top: "8%", right: "-16%" }, delay: 0.4, float: { y: [5, -5], dur: 2.8 } },
  { id: "platforms", label: "iOS & Android", sub: "Both platforms", color: "#a78bfa", style: { top: "46%", right: "-20%" }, delay: 0.8, float: { y: [-8, 4], dur: 3.6 } },
  { id: "growth", label: "10k Users", sub: "Shipped in 60 days", color: "#34d399", style: { bottom: "17%", left: "-14%" }, delay: 0.6, float: { y: [4, -8], dur: 3.0 } },
  { id: "rating", label: "5.0 ★", sub: "Avg. App Store rating", color: "#f6863a", style: { bottom: "9%", right: "-18%" }, delay: 1.0, float: { y: [-4, 7], dur: 3.4 } },
];

/* ── screens — shapes only, no text ─────────────────────── */
const SCREENS = [

  /* 1 ── Finance ─────────────────────────────────────────── */
  <g key="finance">
    {/* App bar */}
    <rect x="20" y="28" width="80" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    <circle cx="190" cy="32" r="9" fill="rgba(167,139,250,0.25)" />
    <circle cx="190" cy="32" r="5" fill="rgba(167,139,250,0.55)" />
    {/* Balance block */}
    <rect x="20" y="50" width="55" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <rect x="20" y="62" width="128" height="18" rx="5" fill="rgba(255,255,255,0.22)" />
    <rect x="154" y="62" width="38" height="18" rx="9" fill="rgba(52,211,153,0.18)" />
    <rect x="162" y="68" width="22" height="6" rx="3" fill="#34d399" opacity="0.8" />
    {/* Chart card */}
    <rect x="20" y="92" width="172" height="90" rx="12" fill="rgba(167,139,250,0.05)" />
    <defs>
      <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.38" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </linearGradient>
    </defs>
    <polygon
      points="32,172 52,159 72,163 94,142 114,148 136,119 156,126 178,106 178,174 32,174"
      fill="url(#finGrad)" opacity="0.4"
    />
    <polyline
      points="32,172 52,159 72,163 94,142 114,148 136,119 156,126 178,106"
      fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="178" cy="106" r="4" fill="#a78bfa" />
    {/* Asset rows */}
    {[
      { y: 196, bg: "rgba(167,139,250,0.13)", dot: "#a78bfa", w1: 62, w2: 38, chg: "#34d399", bull: true },
      { y: 238, bg: "rgba(52,211,153,0.10)", dot: "#34d399", w1: 52, w2: 44, chg: "#34d399", bull: true },
      { y: 280, bg: "rgba(248,113,113,0.10)", dot: "#f87171", w1: 70, w2: 36, chg: "#f87171", bull: false },
    ].map((r) => (
      <g key={r.y}>
        <rect x="20" y={r.y} width="32" height="32" rx="8" fill={r.bg} />
        <rect x="29" y={r.y + 10} width="14" height="10" rx="3" fill={r.dot} opacity="0.65" />
        <rect x="62" y={r.y + 6} width={r.w1} height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="62" y={r.y + 18} width={r.w2} height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
        <rect x="155" y={r.y + 8} width="37" height="14" rx="7" fill={r.bull ? "rgba(52,211,153,0.14)" : "rgba(248,113,113,0.14)"} />
        <rect x="162" y={r.y + 12} width="22" height="6" rx="3" fill={r.chg} opacity="0.7" />
      </g>
    ))}
    <rect x="0" y="330" width="212" height="50" fill="rgba(255,255,255,0.03)" />
    <rect x="26" y="342" width="28" height="4" rx="2" fill="#a78bfa" opacity="0.9" />
    <rect x="92" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="158" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
  </g>,

  /* 2 ── Real Estate ──────────────────────────────────────── */
  <g key="realestate">
    {/* App bar */}
    <rect x="20" y="28" width="100" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    <rect x="174" y="24" width="18" height="18" rx="6" fill="rgba(84,197,248,0.22)" />
    <rect x="178" y="28" width="10" height="10" rx="3" fill="#54C5F8" opacity="0.7" />
    {/* Search bar */}
    <rect x="20" y="46" width="172" height="26" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(84,197,248,0.2)" strokeWidth="1" />
    <circle cx="36" cy="59" r="5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    <rect x="48" y="56" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
    {/* Property card */}
    <rect x="20" y="80" width="172" height="130" rx="14" fill="rgba(84,197,248,0.06)" stroke="rgba(84,197,248,0.14)" strokeWidth="1" />
    {/* Floor plan rooms */}
    <rect x="30" y="90" width="80" height="62" rx="4" fill="none" stroke="rgba(84,197,248,0.45)" strokeWidth="1.5" />
    <rect x="30" y="110" width="32" height="42" rx="2" fill="rgba(84,197,248,0.08)" stroke="rgba(84,197,248,0.2)" strokeWidth="1" />
    <rect x="63" y="90" width="47" height="26" rx="2" fill="rgba(84,197,248,0.07)" stroke="rgba(84,197,248,0.18)" strokeWidth="1" />
    <rect x="63" y="117" width="47" height="35" rx="2" fill="rgba(84,197,248,0.04)" stroke="rgba(84,197,248,0.14)" strokeWidth="1" />
    {/* Map section */}
    <rect x="120" y="90" width="62" height="62" rx="8" fill="rgba(84,197,248,0.06)" />
    {/* Street lines */}
    <line x1="120" y1="120" x2="182" y2="120" stroke="rgba(84,197,248,0.14)" strokeWidth="1" />
    <line x1="151" y1="90" x2="151" y2="152" stroke="rgba(84,197,248,0.12)" strokeWidth="1" />
    {/* Secondary location dots */}
    <circle cx="135" cy="134" r="4" fill="rgba(84,197,248,0.22)" />
    <circle cx="168" cy="106" r="3" fill="rgba(84,197,248,0.18)" />
    {/* Primary map pin (circle + triangle = teardrop) */}
    <circle cx="151" cy="112" r="11" fill="rgba(84,197,248,0.28)" />
    <circle cx="151" cy="109" r="7" fill="#54C5F8" opacity="0.9" />
    <polygon points="146,118 156,118 151,126" fill="#54C5F8" opacity="0.9" />
    <circle cx="151" cy="109" r="3" fill="rgba(0,0,0,0.45)" />
    {/* Price badge */}
    <rect x="28" y="86" width="54" height="18" rx="9" fill="rgba(0,0,0,0.5)" />
    <rect x="34" y="91" width="42" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
    {/* Property stats strip */}
    {[0, 1, 2].map((j) => (
      <g key={j}>
        <rect x={30 + j * 56} y="160" width="20" height="20" rx="6" fill="rgba(84,197,248,0.1)" />
        <rect x={33 + j * 56} y="164" width="14" height="8" rx="3" fill="#54C5F8" opacity="0.4 + j * 0.1" />
        <rect x={30 + j * 56} y="184" width="40" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      </g>
    ))}
    {/* Listing cards */}
    {[0, 1].map((j) => (
      <g key={j}>
        <rect x={20 + j * 92} y="218" width="82" height="78" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <rect x={20 + j * 92} y="218" width="82" height="46" rx="10" fill={j === 0 ? "rgba(84,197,248,0.08)" : "rgba(201,243,29,0.07)"} />
        {/* Mini pin */}
        <circle cx={61 + j * 92} cy="237" r="8" fill={j === 0 ? "rgba(84,197,248,0.3)" : "rgba(201,243,29,0.25)"} />
        <circle cx={61 + j * 92} cy="234" r="4" fill={j === 0 ? "#54C5F8" : "#c9f31d"} opacity="0.85" />
        <polygon points={`${57 + j * 92},242 ${65 + j * 92},242 ${61 + j * 92},248`} fill={j === 0 ? "#54C5F8" : "#c9f31d"} opacity="0.85" />
        <rect x={26 + j * 92} y="270" width="52" height="7" rx="3.5" fill="rgba(255,255,255,0.2)" />
        <rect x={26 + j * 92} y="282" width="36" height="5" rx="2.5" fill={j === 0 ? "rgba(84,197,248,0.5)" : "rgba(201,243,29,0.5)"} />
      </g>
    ))}
    <rect x="0" y="330" width="212" height="50" fill="rgba(255,255,255,0.03)" />
    <rect x="26" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="92" y="342" width="28" height="4" rx="2" fill="#54C5F8" opacity="0.9" />
    <rect x="158" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
  </g>,

  /* 3 ── Golf ─────────────────────────────────────────────── */
  <g key="golf">
    {/* App bar */}
    <rect x="20" y="28" width="70" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    <rect x="154" y="24" width="38" height="18" rx="9" fill="rgba(201,243,29,0.15)" />
    <rect x="160" y="30" width="26" height="6" rx="3" fill="#c9f31d" opacity="0.7" />
    {/* Course top-down view */}
    <ellipse cx="106" cy="118" rx="78" ry="58" fill="rgba(34,197,94,0.07)" stroke="rgba(201,243,29,0.13)" strokeWidth="1" />
    <ellipse cx="106" cy="118" rx="48" ry="34" fill="rgba(201,243,29,0.05)" />
    <ellipse cx="106" cy="102" rx="24" ry="18" fill="rgba(201,243,29,0.17)" />
    <circle cx="106" cy="100" r="3.5" fill="rgba(0,0,0,0.65)" />
    {/* Flag */}
    <line x1="106" y1="100" x2="106" y2="79" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
    <polygon points="106,79 119,84 106,89" fill="#f6863a" opacity="0.85" />
    {/* Tee marker */}
    <circle cx="106" cy="152" r="7" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <circle cx="106" cy="152" r="3" fill="rgba(255,255,255,0.45)" />
    {/* Info pills */}
    <rect x="22" y="182" width="50" height="18" rx="9" fill="rgba(201,243,29,0.14)" />
    <rect x="28" y="188" width="38" height="6" rx="3" fill="#c9f31d" opacity="0.7" />
    <rect x="78" y="182" width="42" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
    <rect x="84" y="188" width="30" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
    <rect x="126" y="182" width="46" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
    <rect x="132" y="188" width="34" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
    {/* Scorecard */}
    <rect x="20" y="208" width="172" height="108" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
    {/* Header row */}
    {[0, 1, 2, 3].map((c) => (
      <rect key={c} x={30 + c * 44} y="216" width={c === 0 ? 30 : 22} height="6" rx="3" fill="rgba(255,255,255,0.14)" />
    ))}
    {/* Score rows */}
    {[
      { fills: ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)", "rgba(201,243,29,0.22)"] },
      { fills: ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)", "rgba(248,113,113,0.2)"] },
      { fills: ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.06)"] },
    ].map((row, r) => (
      <g key={r}>
        {row.fills.map((fill, c) => (
          <rect key={c} x={30 + c * 44} y={228 + r * 26} width={c === 0 ? 30 : 22} height="18" rx="5" fill={fill} />
        ))}
      </g>
    ))}
    <rect x="0" y="330" width="212" height="50" fill="rgba(255,255,255,0.03)" />
    <rect x="26" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="92" y="342" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="158" y="342" width="28" height="4" rx="2" fill="#c9f31d" opacity="0.9" />
  </g>,

  /* 4 ── Dating ───────────────────────────────────────────── */
  <g key="dating">
    {/* App bar */}
    <rect x="20" y="28" width="70" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    <rect x="180" y="24" width="12" height="18" rx="6" fill="rgba(248,113,113,0.25)" />
    <rect x="183" y="28" width="6" height="10" rx="3" fill="#f87171" opacity="0.7" />
    {/* Profile card */}
    <rect x="20" y="44" width="172" height="228" rx="20" fill="rgba(248,113,113,0.07)" stroke="rgba(248,113,113,0.15)" strokeWidth="1" />
    {/* Avatar halo rings */}
    <circle cx="106" cy="120" r="60" fill="rgba(248,113,113,0.06)" />
    <circle cx="106" cy="120" r="50" fill="rgba(248,113,113,0.08)" />
    {/* Avatar circle */}
    <circle cx="106" cy="120" r="42" fill="rgba(248,113,113,0.2)" />
    {/* Face outline suggestion */}
    <circle cx="106" cy="107" r="18" fill="rgba(255,255,255,0.08)" />
    <ellipse cx="106" cy="140" rx="28" ry="18" fill="rgba(255,255,255,0.05)" />
    {/* Name bar */}
    <rect x="62" y="166" width="88" height="11" rx="5.5" fill="rgba(255,255,255,0.25)" />
    {/* Location dot + bar */}
    <circle cx="44" cy="185" r="4" fill="rgba(248,113,113,0.35)" />
    <rect x="52" y="182" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
    {/* Match badge */}
    <rect x="60" y="196" width="84" height="24" rx="12" fill="rgba(248,113,113,0.2)" />
    <rect x="68" y="205" width="68" height="6" rx="3" fill="#f87171" opacity="0.65" />
    {/* Interest tags */}
    {[{ x: 20, w: 50 }, { x: 76, w: 54 }, { x: 136, w: 56 }].map((t) => (
      <g key={t.x}>
        <rect x={t.x} y="230" width={t.w} height="18" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x={t.x + 8} y="236" width={t.w - 16} height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      </g>
    ))}
    {/* Action buttons */}
    <circle cx="70" cy="310" r="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
    <line x1="58" y1="298" x2="82" y2="322" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="82" y1="298" x2="58" y2="322" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="142" cy="310" r="30" fill="rgba(248,113,113,0.22)" stroke="rgba(248,113,113,0.38)" strokeWidth="1" />
    <path d="M132 307 C132 303 137 301 142 305 C147 301 152 303 152 307 C152 313 142 320 142 320 C142 320 132 313 132 307Z" fill="#f87171" opacity="0.85" />
    <rect x="0" y="352" width="212" height="44" fill="rgba(255,255,255,0.02)" />
    <rect x="26" y="362" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="92" y="362" width="28" height="4" rx="2" fill="#f87171" opacity="0.9" />
    <rect x="158" y="362" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
  </g>,

  /* 5 ── Retail / E-Commerce ──────────────────────────────── */
  <g key="retail">
    {/* App bar */}
    <rect x="20" y="28" width="88" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    {/* Cart icon */}
    <rect x="172" y="24" width="20" height="20" rx="6" fill="rgba(246,134,58,0.2)" />
    <path d="M177 29 L175 29 L173 36 L189 36 L191 32 L178 32" fill="none" stroke="#f6863a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="177" cy="39" r="2" fill="#f6863a" opacity="0.8" />
    <circle cx="186" cy="39" r="2" fill="#f6863a" opacity="0.8" />
    {/* Category tabs */}
    <rect x="20" y="46" width="50" height="20" rx="10" fill="rgba(246,134,58,0.22)" />
    <rect x="26" y="52" width="38" height="8" rx="4" fill="#f6863a" opacity="0.75" />
    <rect x="76" y="46" width="50" height="20" rx="10" fill="rgba(255,255,255,0.05)" />
    <rect x="82" y="52" width="38" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
    <rect x="132" y="46" width="50" height="20" rx="10" fill="rgba(255,255,255,0.05)" />
    <rect x="138" y="52" width="38" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
    {/* Product grid 2×2 */}
    {([
      { x: 20, y: 74, bg: "rgba(246,134,58,0.09)", ic: "#f6863a" },
      { x: 112, y: 74, bg: "rgba(167,139,250,0.09)", ic: "#a78bfa" },
      { x: 20, y: 190, bg: "rgba(52,211,153,0.08)", ic: "#34d399" },
      { x: 112, y: 190, bg: "rgba(201,243,29,0.08)", ic: "#c9f31d" },
    ] as { x: number; y: number; bg: string; ic: string }[]).map((p) => (
      <g key={`${p.x}-${p.y}`}>
        <rect x={p.x} y={p.y} width="82" height="108" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        {/* Photo area */}
        <rect x={p.x} y={p.y} width="82" height="64" rx="12" fill={p.bg} />
        {/* Product icon shape (circle) */}
        <circle cx={p.x + 41} cy={p.y + 32} r="20" fill={p.bg.replace("0.0", "0.25").replace("0.08", "0.22").replace("0.09", "0.25")} />
        <circle cx={p.x + 41} cy={p.y + 32} r="11" fill={p.ic} opacity="0.3" />
        {/* Price tag */}
        <rect x={p.x + 6} y={p.y + 68} width="30" height="10" rx="5" fill={p.ic} opacity="0.75" />
        <rect x={p.x + 40} y={p.y + 70} width="38" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        {/* Name bar */}
        <rect x={p.x + 6} y={p.y + 84} width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.2)" />
        <rect x={p.x + 6} y={p.y + 96} width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.09)" />
      </g>
    ))}
    {/* Add to cart bar */}
    <rect x="20" y="308" width="172" height="32" rx="16" fill="rgba(246,134,58,0.2)" />
    <rect x="56" y="317" width="100" height="14" rx="7" fill="#f6863a" opacity="0.8" />
    <rect x="0" y="350" width="212" height="46" fill="rgba(255,255,255,0.02)" />
    <rect x="26" y="358" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="92" y="358" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="158" y="358" width="28" height="4" rx="2" fill="#f6863a" opacity="0.9" />
  </g>,

  /* 6 ── Crypto & Stock ───────────────────────────────────── */
  <g key="crypto">
    {/* App bar */}
    <rect x="20" y="28" width="80" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
    <circle cx="190" cy="32" r="9" fill="rgba(251,191,36,0.22)" />
    <circle cx="190" cy="32" r="5" fill="rgba(251,191,36,0.55)" />
    {/* Balance */}
    <rect x="20" y="50" width="52" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <rect x="20" y="62" width="130" height="18" rx="5" fill="rgba(255,255,255,0.22)" />
    <rect x="154" y="62" width="38" height="18" rx="9" fill="rgba(52,211,153,0.18)" />
    <rect x="162" y="68" width="22" height="6" rx="3" fill="#34d399" opacity="0.8" />
    {/* Candlestick chart */}
    <rect x="20" y="88" width="172" height="86" rx="12" fill="rgba(251,191,36,0.05)" />
    <defs>
      <linearGradient id="cryptoGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Candles: wick (line) + body (rect) */}
    {([
      { x: 36, wy1: 138, wy2: 168, by: 148, bh: 16, bull: false },
      { x: 54, wy1: 130, wy2: 163, by: 138, bh: 18, bull: true },
      { x: 72, wy1: 126, wy2: 162, by: 132, bh: 24, bull: true },
      { x: 90, wy1: 120, wy2: 158, by: 124, bh: 28, bull: false },
      { x: 108, wy1: 115, wy2: 152, by: 120, bh: 24, bull: true },
      { x: 126, wy1: 110, wy2: 148, by: 114, bh: 26, bull: true },
      { x: 144, wy1: 104, wy2: 144, by: 108, bh: 28, bull: true },
      { x: 162, wy1: 100, wy2: 140, by: 102, bh: 30, bull: true },
    ] as { x: number; wy1: number; wy2: number; by: number; bh: number; bull: boolean }[]).map((c) => (
      <g key={c.x}>
        <line x1={c.x} y1={c.wy1} x2={c.x} y2={c.wy2} stroke={c.bull ? "rgba(52,211,153,0.35)" : "rgba(248,113,113,0.35)"} strokeWidth="1" />
        <rect x={c.x - 5} y={c.by} width="10" height={c.bh} rx="1.5" fill={c.bull ? "#34d399" : "#f87171"} opacity={c.bull ? "0.75" : "0.65"} />
      </g>
    ))}
    {/* Coin rows */}
    {([
      { y: 186, bg: "rgba(251,191,36,0.15)", ic: "#fbbf24", w1: 62, w2: 38, chg: "#34d399", bull: true },
      { y: 228, bg: "rgba(167,139,250,0.12)", ic: "#a78bfa", w1: 52, w2: 46, chg: "#34d399", bull: true },
      { y: 270, bg: "rgba(52,211,153,0.12)", ic: "#34d399", w1: 58, w2: 40, chg: "#f87171", bull: false },
    ] as { y: number; bg: string; ic: string; w1: number; w2: number; chg: string; bull: boolean }[]).map((r) => (
      <g key={r.y}>
        <circle cx="36" cy={r.y + 16} r="16" fill={r.bg} />
        <circle cx="36" cy={r.y + 16} r="8" fill={r.ic} opacity="0.4" />
        <rect x="60" y={r.y + 6} width={r.w1} height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="60" y={r.y + 18} width={r.w2} height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
        <rect x="154" y={r.y + 8} width="38" height="14" rx="7" fill={r.bull ? "rgba(52,211,153,0.14)" : "rgba(248,113,113,0.14)"} />
        <rect x="162" y={r.y + 12} width="22" height="6" rx="3" fill={r.chg} opacity="0.7" />
      </g>
    ))}
    {/* Buy / Sell */}
    <rect x="20" y="318" width="82" height="28" rx="14" fill="rgba(251,191,36,0.18)" />
    <rect x="30" y="326" width="62" height="12" rx="6" fill="#fbbf24" opacity="0.6" />
    <rect x="110" y="318" width="82" height="28" rx="14" fill="rgba(248,113,113,0.14)" />
    <rect x="120" y="326" width="62" height="12" rx="6" fill="#f87171" opacity="0.45" />
    <rect x="0" y="354" width="212" height="42" fill="rgba(255,255,255,0.02)" />
    <rect x="26" y="362" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
    <rect x="92" y="362" width="28" height="4" rx="2" fill="#fbbf24" opacity="0.9" />
    <rect x="158" y="362" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
  </g>,
];

/* ── component ───────────────────────────────────────────── */
export default function PhoneAnimation({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative flex items-start justify-center ${className ?? ""}`}>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-20% -10%",
          background: "radial-gradient(ellipse 70% 55% at 55% 35%, rgba(201,243,29,0.07) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ── Floating cards ────────────────────────────────── */}
      {cards.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-2xl px-4 py-3 min-w-[130px] pointer-events-none"
          style={{
            ...c.style,
            background: "rgba(12,16,22,0.84)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: c.float.y }
          }
          transition={
            reduce
              ? { duration: 0.4 }
              : {
                opacity: { duration: 0.5, delay: c.delay },
                scale: { duration: 0.5, delay: c.delay, ease: [0.22, 1, 0.36, 1] },
                y: { duration: c.float.dur, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: c.delay },
              }
          }
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
            <p className="text-[10px] font-semibold uppercase tracking-widest leading-none" style={{ color: "rgba(255,255,255,0.28)" }}>
              {c.id === "revenue" ? "Revenue" : c.id === "retention" ? "Retention" : c.id === "platforms" ? "Coverage" : c.id === "growth" ? "Growth" : "Rating"}
            </p>
          </div>
          <p className="text-base font-black leading-none" style={{ color: c.color, fontFamily: "var(--font-archivo)" }}>
            {c.label}
          </p>
          <p className="text-[10px] mt-1 leading-none" style={{ color: "rgba(255,255,255,0.32)" }}>
            {c.sub}
          </p>
        </motion.div>
      ))}

      {/* ── Phone frame ───────────────────────────────────── */}
      <motion.div
        className="relative shrink-0"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 5, marginTop: "2.5rem" }}
      >
        <div
          className="relative rounded-[40px] overflow-hidden"
          style={{
            width: 212, height: 420,
            background: "linear-gradient(150deg, #1c2130 0%, #0b0e18 100%)",
            border: "1.5px solid rgba(255,255,255,0.10)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 rounded-b-2xl"
            style={{ width: 70, height: 22, background: "#080A10", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          />
          {/* Screen glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 35% at 50% 8%, rgba(201,243,29,0.04) 0%, transparent 55%)" }}
          />

          {/* ── Animated screens ─────────────────────────── */}
          {SCREENS.map((screen, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 212 420"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: i === 0 ? 1 : 0 }}
              animate={reduce ? { opacity: i === 0 ? 1 : 0 } : { opacity: sOpacity(i) }}
              transition={reduce ? {} : { duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: sTimes(i) }}
              aria-hidden="true"
            >
              {screen}
            </motion.svg>
          ))}

          {/* Screen reflection */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[40px]"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%)" }}
          />

          {/* Indicator dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
            {SCREENS.map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{ background: "#c9f31d", height: 4 }}
                initial={{ width: i === 0 ? 16 : 4, opacity: i === 0 ? 1 : 0.3 }}
                animate={
                  reduce
                    ? { width: i === 0 ? 16 : 4, opacity: i === 0 ? 1 : 0.3 }
                    : {
                      width: sOpacity(i).map((v) => (v > 0.5 ? 16 : 4)),
                      opacity: sOpacity(i).map((v) => (v > 0.5 ? 1 : 0.3)),
                    }
                }
                transition={reduce ? {} : { duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: sTimes(i) }}
              />
            ))}
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute rounded-r-sm" style={{ left: -3, top: 90, width: 3, height: 28, background: "rgba(255,255,255,0.08)" }} />
        <div className="absolute rounded-r-sm" style={{ left: -3, top: 124, width: 3, height: 28, background: "rgba(255,255,255,0.08)" }} />
        <div className="absolute rounded-l-sm" style={{ right: -3, top: 100, width: 3, height: 44, background: "rgba(255,255,255,0.08)" }} />
      </motion.div>

      {/* Orbiting dot particles */}
      {!reduce && [0, 1, 2].map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{ background: "#c9f31d", opacity: 0.35, zIndex: 4 }}
          animate={{ x: [0, 22 * Math.cos(i * 2.09), 0], y: [0, 22 * Math.sin(i * 2.09), 0], scale: [1, 1.5, 1], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
