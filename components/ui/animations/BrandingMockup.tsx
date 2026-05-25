"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ico = ({ d, size = 11, color = "currentColor" }: { d: string | string[]; size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ─── Canvas screens ───────────────────────────────────────── */

function LogoScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#EEEAE2" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(0,0,0,0.38)", fontFamily: "var(--font-archivo)" }}>LOGO SYSTEM</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,0,0,0.07)", color: "rgba(0,0,0,0.38)" }}>v2.0 final</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="relative flex items-center justify-center">
          <svg className="absolute" style={{ width: 80, height: 80, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.18 }} viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" stroke="#000" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
            <line x1="40" y1="4" x2="40" y2="76" stroke="#000" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="4" y1="40" x2="76" y2="40" stroke="#000" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
          <div className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center" style={{ background: "#0A0C14" }}>
            <span className="text-[26px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)", lineHeight: 1 }}>L</span>
          </div>
        </div>
        <p className="text-[14px] font-black tracking-[0.28em] uppercase" style={{ color: "#0A0C14", fontFamily: "var(--font-archivo)" }}>LYQX</p>
        <p className="text-[6.5px] tracking-[0.35em] uppercase" style={{ color: "rgba(0,0,0,0.28)" }}>brand identity</p>
      </div>
      <div className="flex gap-1.5 px-3 pb-3">
        {[
          { bg: "#0A0C14", text: "#c9f31d", label: "Primary" },
          { bg: "#c9f31d", text: "#000", label: "Accent" },
          { bg: "rgba(0,0,0,0)", text: "#0A0C14", label: "Outline", border: "1.5px solid #0A0C14" },
        ].map((v) => (
          <div key={v.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full h-8 rounded-lg flex items-center justify-center" style={{ background: v.bg, border: v.border }}>
              <span className="text-[10px] font-black" style={{ color: v.text, fontFamily: "var(--font-archivo)" }}>L</span>
            </div>
            <span className="text-[5.5px]" style={{ color: "rgba(0,0,0,0.28)" }}>{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorScreen() {
  const colors = [
    { name: "Lime", hex: "#C9F31D", bg: "#c9f31d" },
    { name: "Ink", hex: "#0A0C14", bg: "#0A0C14" },
    { name: "Slate", hex: "#1A2030", bg: "#1A2030" },
    { name: "Mist", hex: "#A8B4C8", bg: "#A8B4C8" },
    { name: "Cream", hex: "#EEEAE2", bg: "#EEEAE2", border: "1px solid rgba(0,0,0,0.08)" },
  ];
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#0A0C14" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-archivo)" }}>COLOR PALETTE</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>5 colors</span>
      </div>
      <div className="flex gap-1.5" style={{ flex: 1 }}>
        {colors.map((c) => (
          <div key={c.name} className="flex-1 flex flex-col gap-1">
            <div className="rounded-xl flex-1" style={{ background: c.bg, border: c.border, minHeight: 80 }} />
            <p className="text-[5.5px] font-semibold" style={{ color: "rgba(255,255,255,0.32)" }}>{c.name}</p>
            <p className="text-[5px] font-mono" style={{ color: "rgba(255,255,255,0.18)" }}>{c.hex}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-2 flex items-center gap-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-5 h-5 rounded-md shrink-0" style={{ background: "#c9f31d" }} />
        <div>
          <p className="text-[6.5px] font-bold text-white">Brand Primary</p>
          <p className="text-[5.5px]" style={{ color: "rgba(255,255,255,0.28)" }}>CTAs · Highlights · Accents</p>
        </div>
      </div>
    </div>
  );
}

function TypographyScreen() {
  return (
    <div className="flex flex-col h-full p-3" style={{ background: "#EEEAE2" }}>
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(0,0,0,0.38)", fontFamily: "var(--font-archivo)" }}>TYPOGRAPHY</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.45)" }}>Archivo</span>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="font-black leading-none" style={{ fontSize: 44, color: "#0A0C14", fontFamily: "var(--font-archivo)" }}>Aa</span>
        <div className="mb-1 flex flex-col gap-0.5">
          <p className="text-[6.5px] font-semibold tracking-wider" style={{ color: "rgba(0,0,0,0.3)" }}>ABCDEFGHIJKLM</p>
          <p className="text-[6.5px]" style={{ color: "rgba(0,0,0,0.22)" }}>abcdefghijklm</p>
          <p className="text-[6.5px]" style={{ color: "rgba(0,0,0,0.22)" }}>0123456789 !@#</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-0">
        {[
          { label: "Display", sample: "Bold Vision.", size: "text-[17px]", w: "font-black" },
          { label: "H1", sample: "Section Heading", size: "text-[12px]", w: "font-bold" },
          { label: "Body", sample: "Consistent, readable and clear.", size: "text-[8px]", w: "font-normal" },
          { label: "Label", sample: "TAG · CHIP · UI ELEMENT", size: "text-[6px]", w: "font-semibold" },
        ].map((t, i) => (
          <div key={i} className="flex items-baseline gap-2 py-1.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <span className="text-[5.5px] font-semibold shrink-0 uppercase" style={{ color: "rgba(0,0,0,0.25)", width: 30 }}>{t.label}</span>
            <span className={`${t.size} ${t.w} leading-tight`} style={{ color: "#0A0C14", fontFamily: "var(--font-archivo)" }}>{t.sample}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BusinessCardScreen() {
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#141820" }}>
      <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.32)", fontFamily: "var(--font-archivo)" }}>STATIONERY</p>
      <div className="relative flex-1 flex items-center justify-center" style={{ minHeight: 140 }}>
        {/* Back card */}
        <div className="absolute" style={{ width: 156, transform: "rotate(4deg) translate(20px, -6px)" }}>
          <div className="rounded-xl p-4 flex flex-col justify-between" style={{ height: 88, background: "#c9f31d" }}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "#0A0C14" }}>
              <span className="text-[9px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>L</span>
            </div>
            <div>
              <p className="text-[5.5px] font-semibold tracking-widest uppercase" style={{ color: "rgba(0,0,0,0.55)" }}>hello@lyqx.agency</p>
              <p className="text-[5px]" style={{ color: "rgba(0,0,0,0.38)" }}>lyqx.agency · solutions</p>
            </div>
          </div>
        </div>
        {/* Front card */}
        <div className="absolute" style={{ width: 156, transform: "rotate(-2deg) translate(-16px, 4px)" }}>
          <div className="rounded-xl p-4 flex flex-col justify-between" style={{ height: 88, background: "#0A0C14", border: "1px solid rgba(255,255,255,0.09)" }}>
            <p className="text-[13px] font-black tracking-[0.22em]" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>LYQX</p>
            <div>
              <p className="text-[7.5px] font-bold text-white mb-0.5">Yurii Lysyshak</p>
              <p className="text-[5.5px]" style={{ color: "rgba(255,255,255,0.38)" }}>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[6px] text-center" style={{ color: "rgba(255,255,255,0.2)" }}>Card · Letterhead · Email signature</p>
    </div>
  );
}

function IconSystemScreen() {
  const icons = [
    "M12 2L2 7l10 5 10-5-10-5z",
    "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
    "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    "M22 12h-4l-3 9L9 3l-3 9H2",
    "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z",
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    "M5 12h14M12 5l7 7-7 7",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  ];
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#EEEAE2" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(0,0,0,0.38)", fontFamily: "var(--font-archivo)" }}>ICON SYSTEM</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.38)" }}>24 icons</span>
      </div>
      <div className="flex items-center gap-2">
        {[40, 28, 20, 14].map((s) => (
          <div key={s} className="rounded-xl flex items-center justify-center shrink-0" style={{ width: s + 8, height: s + 8, background: "#0A0C14" }}>
            <span style={{ fontSize: s * 0.55, color: "#c9f31d", fontWeight: 900, fontFamily: "var(--font-archivo)" }}>L</span>
          </div>
        ))}
        <p className="text-[6px]" style={{ color: "rgba(0,0,0,0.3)" }}>All sizes</p>
      </div>
      <div className="grid grid-cols-6 gap-1.5 flex-1 content-start">
        {icons.map((d, i) => (
          <div key={i} className="aspect-square rounded-lg flex items-center justify-center" style={{ background: "rgba(0,0,0,0.07)" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.48)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialScreen() {
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#0A0C14" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-archivo)" }}>SOCIAL MEDIA KIT</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>Instagram</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[
          { bg: "#c9f31d", content: <p className="text-[7px] font-black leading-tight text-center px-1" style={{ color: "rgba(0,0,0,0.65)", fontFamily: "var(--font-archivo)" }}>Build with purpose.</p> },
          { bg: "#1A2030", content: <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "#c9f31d" }}><span className="text-[13px] font-black" style={{ color: "#000", fontFamily: "var(--font-archivo)" }}>L</span></div> },
          { bg: "#c9f31d", content: <><p className="text-[8px] font-black" style={{ color: "rgba(0,0,0,0.6)", fontFamily: "var(--font-archivo)" }}>LYQX</p><p className="text-[5px]" style={{ color: "rgba(0,0,0,0.4)" }}>Lew drop</p></> },
          { bg: "#0D0F18", content: <p className="text-[16px] font-black" style={{ color: "rgba(255,255,255,0.08)", fontFamily: "var(--font-archivo)" }}>L</p> },
          { bg: "#1A2030", content: <p className="text-[9px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>98%</p> },
          { bg: "#c9f31d", content: <Ico d="M12 2L2 7l10 5 10-5-10-5z" size={14} color="rgba(0,0,0,0.4)" /> },
        ].map((post, i) => (
          <div key={i} className="rounded-xl flex items-center justify-center flex-col gap-0.5 overflow-hidden" style={{ background: post.bg, aspectRatio: "1/1" }}>
            {post.content}
          </div>
        ))}
      </div>
      <p className="text-[6px] text-center" style={{ color: "rgba(255,255,255,0.18)" }}>Post templates · Stories · Highlights covers</p>
    </div>
  );
}

/* ─── Registry ─────────────────────────────────────────────── */

const SCREENS = [
  { id: "logo",    label: "Logo System",      component: LogoScreen },
  { id: "colors",  label: "Color Palette",    component: ColorScreen },
  { id: "type",    label: "Typography",        component: TypographyScreen },
  { id: "card",    label: "Business Card",     component: BusinessCardScreen },
  { id: "icons",   label: "Icon System",       component: IconSystemScreen },
  { id: "social",  label: "Social Media Kit",  component: SocialScreen },
];

/* ─── Floating badge ────────────────────────────────────────── */

function FloatingBadge({ children, style, delay = 0, floatY = [-4, 2] }: {
  children: React.ReactNode; style: React.CSSProperties; delay?: number; floatY?: number[];
}) {
  return (
    <motion.div
      style={{ position: "absolute", zIndex: 20, ...style }}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1, y: floatY }}
      transition={{
        opacity: { delay, duration: 0.4 },
        scale: { delay, duration: 0.5, type: "spring", stiffness: 180, damping: 14 },
        y: { delay: delay + 0.5, duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

const glass: React.CSSProperties = {
  background: "rgba(10,12,20,0.92)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
};

/* ─── Main ──────────────────────────────────────────────────── */

export default function BrandingMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const Screen = SCREENS[idx].component;

  return (
    <div className="relative flex flex-col items-center justify-center py-8 select-none" style={{ minHeight: 440 }}>
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{ width: 360, height: 300, top: "48%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse, rgba(201,243,29,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating badges */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: -6, top: 28 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.09)" }}>
          <Ico d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>12</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>deliverables</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -5]} style={{ left: -8, top: "32%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Logo</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>system</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: -6, bottom: 90 }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(201,243,29,0.22)", width: 134 }}>
          <motion.div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.15)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M20 6L9 17l-5-5" size={9} color="#c9f31d" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>Brand Delivered</p>
            <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Style guide included</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: -8, top: 38 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Style</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>guide</span>
        </div>
      </FloatingBadge>

      {/* Brand studio window */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 316, position: "relative", zIndex: 10 }}
      >
        <div className="rounded-2xl overflow-hidden" style={{
          border: "1.5px solid rgba(255,255,255,0.1)",
          background: "rgba(10,12,20,0.97)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            <div className="flex gap-1.5 shrink-0">
              {["rgba(255,95,87,0.8)", "rgba(255,189,46,0.8)", "rgba(40,200,64,0.8)"].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[8px] font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Brand Studio — LYQX</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.span key={idx} className="text-[7px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                style={{ background: "rgba(201,243,29,0.1)", color: "rgba(201,243,29,0.8)", border: "1px solid rgba(201,243,29,0.2)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {SCREENS[idx].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Canvas */}
          <div className="relative overflow-hidden" style={{ height: 236 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Label + dots */}
      <div className="flex flex-col items-center gap-2.5 mt-5">
        <AnimatePresence mode="wait">
          <motion.span key={idx} className="text-[10px] font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.18)", color: "rgba(201,243,29,0.8)" }}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.22 }}>
            {SCREENS[idx].label}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {SCREENS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className="rounded-full transition-all duration-300"
              style={{ width: i === idx ? 18 : 5, height: 5, background: i === idx ? "#c9f31d" : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
