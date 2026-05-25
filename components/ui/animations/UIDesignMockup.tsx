"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ico = ({ d, size = 11, color = "currentColor", fill = "none" }: { d: string | string[]; size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ─── Canvas screens (183 × 208 canvas area) ─────────────────── */

function ComponentsScreen() {
  return (
    <div className="flex flex-col gap-2.5 p-3">
      <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>BUTTONS</p>
      {/* Button variants */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center justify-center px-3 py-1.5 rounded-full" style={{ background: "#c9f31d" }}>
          <span className="text-[8px] font-black text-black">Primary</span>
        </div>
        <div className="flex items-center justify-center px-3 py-1.5 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
          <span className="text-[8px] font-semibold">Secondary</span>
        </div>
        <div className="flex items-center justify-center px-3 py-1.5 rounded-full" style={{ background: "rgba(255,80,80,0.15)", border: "1px solid rgba(255,80,80,0.3)", color: "rgba(255,100,100,0.9)" }}>
          <span className="text-[8px] font-semibold">Danger</span>
        </div>
      </div>
      {/* Input */}
      <div>
        <p className="text-[7px] font-black mb-1.5" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>INPUTS</p>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,243,29,0.4)" }}>
            <Ico d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" size={9} color="#c9f31d" />
            <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.35)" }}>Search...</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Ico d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" size={9} color="rgba(255,255,255,0.3)" />
            <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.35)" }}>Email address</span>
          </div>
        </div>
      </div>
      {/* Badge row */}
      <div>
        <p className="text-[7px] font-black mb-1.5" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>BADGES</p>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { l: "Active", bg: "rgba(201,243,29,0.15)", c: "#c9f31d" },
            { l: "Pending", bg: "rgba(255,200,50,0.15)", c: "rgba(255,200,50,0.9)" },
            { l: "Closed", bg: "rgba(255,255,255,0.07)", c: "rgba(255,255,255,0.45)" },
          ].map((b) => (
            <span key={b.l} className="text-[7px] font-semibold px-2 py-0.5 rounded-full" style={{ background: b.bg, color: b.c }}>{b.l}</span>
          ))}
        </div>
      </div>
      {/* Card preview */}
      <div className="rounded-xl p-2.5 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,243,29,0.4), transparent)" }} />
        <p className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Card Component</p>
        <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>Reusable · Responsive</p>
      </div>
    </div>
  );
}

function ColorSystemScreen() {
  const palette = [
    { name: "Brand", shades: ["#c9f31d", "#a8d118", "#7aaa0e", "#4f7a04", "#2a4400"] },
    { name: "Neutral", shades: ["#ffffff", "#a0a8b8", "#606878", "#2a3040", "#0a0c14"] },
    { name: "Accent", shades: ["#4e9eff", "#ff6b6b", "#ffd166", "#06d6a0", "#845ec2"] },
  ];
  return (
    <div className="flex flex-col gap-2.5 p-3">
      <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>COLOR SYSTEM</p>
      {palette.map((row) => (
        <div key={row.name}>
          <p className="text-[6px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.32)" }}>{row.name}</p>
          <div className="flex gap-1">
            {row.shades.map((c, i) => (
              <div key={i} className="flex-1 flex flex-col gap-0.5">
                <div className="rounded-md" style={{ height: 22, background: c, border: c === "#ffffff" ? "1px solid rgba(255,255,255,0.1)" : "none" }} />
                <span className="text-[5px] text-center font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>{c.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-1 flex gap-2">
        {[["bg", "#0A0C14"], ["surface", "#141820"], ["card", "#1a2030"], ["border", "rgba(255,255,255,0.08)"]].map(([n, c]) => (
          <div key={n} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ background: c, border: "1px solid rgba(255,255,255,0.1)" }} />
            <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.3)" }}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyScreen() {
  const scale = [
    { label: "Display", size: "text-[17px]", weight: "font-black", sample: "Build Bold." },
    { label: "H1", size: "text-[13px]", weight: "font-black", sample: "Make It Count" },
    { label: "H2", size: "text-[10px]", weight: "font-bold", sample: "Section Heading" },
    { label: "Body", size: "text-[8px]", weight: "font-normal", sample: "Clear, readable body text that guides users through the experience without friction." },
    { label: "Caption", size: "text-[6.5px]", weight: "font-medium", sample: "Labels · Timestamps · Metadata" },
  ];
  return (
    <div className="flex flex-col gap-0 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>TYPE SCALE</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>Archivo</span>
      </div>
      {scale.map((t, i) => (
        <div key={i} className="flex items-baseline gap-2 py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="shrink-0 text-[6px] font-semibold" style={{ color: "rgba(255,255,255,0.28)", width: 36 }}>{t.label}</span>
          <span className={`${t.size} ${t.weight} text-white leading-tight`} style={{ fontFamily: "var(--font-archivo)", color: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.85)" }}>{t.sample}</span>
        </div>
      ))}
    </div>
  );
}

function WireframeScreen() {
  return (
    <div className="flex flex-col h-full p-3 gap-2">
      <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>WEB LAYOUT · 12 COL GRID</p>
      {/* Nav wireframe */}
      <div className="flex items-center justify-between px-2 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-10 h-2 rounded-sm" style={{ background: "rgba(201,243,29,0.4)" }} />
        <div className="flex gap-2">
          {[20, 16, 22, 18].map((w, i) => <div key={i} className="h-1.5 rounded-sm" style={{ width: w, background: "rgba(255,255,255,0.15)" }} />)}
        </div>
        <div className="w-10 h-2 rounded-full" style={{ background: "rgba(201,243,29,0.25)", border: "1px solid rgba(201,243,29,0.4)" }} />
      </div>
      {/* Hero wireframe */}
      <div className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-20 h-1.5 rounded-sm" style={{ background: "rgba(201,243,29,0.3)" }} />
        <div className="w-32 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="w-24 h-2.5 rounded-sm" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="flex gap-1.5 mt-1">
          <div className="w-14 h-4 rounded-full" style={{ background: "rgba(201,243,29,0.35)" }} />
          <div className="w-12 h-4 rounded-full" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
        </div>
      </div>
      {/* Cards row */}
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg p-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-full h-6 rounded-md mb-1" style={{ background: i === 0 ? "rgba(201,243,29,0.12)" : "rgba(255,255,255,0.06)" }} />
            <div className="h-1.5 rounded-sm mb-1 w-full" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div className="h-1 rounded-sm w-3/4" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
        ))}
      </div>
      {/* Footer hint */}
      <div className="flex items-center justify-between px-2 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-8 h-1.5 rounded-sm" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => <div key={i} className="h-1 rounded-sm" style={{ width: 14, background: "rgba(255,255,255,0.08)" }} />)}
        </div>
      </div>
    </div>
  );
}

function UserFlowScreen() {
  const nodes = [
    { label: "Start", x: 12, y: 80, type: "start" },
    { label: "Landing", x: 62, y: 80, type: "page" },
    { label: "Sign Up", x: 112, y: 80, type: "page" },
    { label: "Onboarding", x: 112, y: 130, type: "page" },
    { label: "Dashboard", x: 62, y: 130, type: "success" },
  ];
  return (
    <div className="flex flex-col gap-2 p-3">
      <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>USER FLOW · ONBOARDING</p>
      <div className="relative" style={{ height: 180 }}>
        <svg className="absolute inset-0" width="100%" height="180" viewBox="0 0 180 180">
          {/* Arrows */}
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="rgba(201,243,29,0.5)" />
            </marker>
          </defs>
          <line x1="32" y1="83" x2="56" y2="83" stroke="rgba(201,243,29,0.35)" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="3 2" />
          <line x1="94" y1="83" x2="106" y2="83" stroke="rgba(201,243,29,0.35)" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="3 2" />
          <line x1="124" y1="96" x2="124" y2="122" stroke="rgba(201,243,29,0.35)" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="3 2" />
          <line x1="110" y1="133" x2="96" y2="133" stroke="rgba(201,243,29,0.35)" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="3 2" />
          {/* Optional branch from Landing */}
          <line x1="75" y1="96" x2="75" y2="148" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 3" />
        </svg>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <div key={i} className="absolute flex items-center justify-center rounded-xl" style={{
            left: n.x, top: n.y - 12,
            width: n.type === "start" ? 22 : 46, height: n.type === "start" ? 22 : 24,
            background: n.type === "start" ? "rgba(201,243,29,0.15)" : n.type === "success" ? "rgba(201,243,29,0.18)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${n.type === "start" || n.type === "success" ? "rgba(201,243,29,0.35)" : "rgba(255,255,255,0.12)"}`,
            borderRadius: n.type === "start" ? "50%" : 8,
          }}>
            <span className="text-[6.5px] font-bold text-center leading-tight px-0.5" style={{ color: n.type === "start" || n.type === "success" ? "#c9f31d" : "rgba(255,255,255,0.6)", fontFamily: "var(--font-archivo)" }}>
              {n.label}
            </span>
          </div>
        ))}

        {/* Dropped off label */}
        <div className="absolute text-center" style={{ left: 58, top: 152 }}>
          <div className="px-2 py-0.5 rounded-full" style={{ background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.2)" }}>
            <span className="text-[6px] font-semibold" style={{ color: "rgba(255,100,100,0.7)" }}>Bounce 22%</span>
          </div>
        </div>

        {/* Success rate */}
        <div className="absolute text-center" style={{ left: 30, top: 148 }}>
          <div className="px-2 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.2)" }}>
            <span className="text-[6px] font-bold" style={{ color: "#c9f31d" }}>Converted 78%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileUIScreen() {
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-center justify-between mb-0.5">
        <p className="text-[7px] font-black" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-archivo)" }}>MOBILE UI · IOS</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>375 × 812</span>
      </div>
      {/* Mini phone */}
      <div className="flex justify-center">
        <div className="relative" style={{ width: 82, height: 164 }}>
          <div className="absolute inset-0 rounded-[16px]" style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "#0A0C14", boxShadow: "0 12px 32px rgba(0,0,0,0.5)" }} />
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 5, width: 28, height: 8, background: "#000", borderRadius: 6 }} />
          <div className="absolute overflow-hidden" style={{ inset: "1.5px", borderRadius: 14.5 }}>
            <div className="flex flex-col h-full">
              <div className="px-3 pt-4 pb-1">
                <p className="text-[5px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Dashboard</p>
                <p className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Good morning</p>
              </div>
              <div className="px-2 mb-1.5">
                <div className="rounded-lg p-2" style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.2)" }}>
                  <p className="text-[4.5px]" style={{ color: "rgba(255,255,255,0.4)" }}>Balance</p>
                  <p className="text-[10px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>$4,820</p>
                </div>
              </div>
              <div className="flex gap-1 px-2 mb-1.5">
                {["Send", "Pay", "More"].map((a, i) => (
                  <div key={a} className="flex-1 py-1 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <span className="text-[5px]" style={{ color: "rgba(255,255,255,0.5)" }}>{a}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5 px-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-1.5 py-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-4 h-4 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
                    <div className="flex-1 h-1.5 rounded-sm" style={{ background: "rgba(255,255,255,0.08)", width: `${[70, 55, 80][i - 1]}%` }} />
                    <div className="h-1.5 w-6 rounded-sm" style={{ background: i === 1 ? "rgba(201,243,29,0.3)" : "rgba(255,100,100,0.25)" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Annotation */}
      <div className="flex items-center justify-center gap-3">
        {[{ l: "8pt grid", c: "#c9f31d" }, { l: "Auto Layout", c: "rgba(255,255,255,0.4)" }, { l: "Components", c: "rgba(255,255,255,0.4)" }].map((a) => (
          <span key={a.l} className="text-[6px] font-semibold flex items-center gap-1">
            <span className="w-1 h-1 rounded-full" style={{ background: a.c }} />
            <span style={{ color: a.c }}>{a.l}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Registry ────────────────────────────────────────────────── */

const SCREENS = [
  { id: "components", label: "Component Library", component: ComponentsScreen },
  { id: "colors",     label: "Color System",      component: ColorSystemScreen },
  { id: "type",       label: "Typography Scale",  component: TypographyScreen },
  { id: "wireframe",  label: "Web Wireframe",     component: WireframeScreen },
  { id: "flow",       label: "User Flow",         component: UserFlowScreen },
  { id: "mobile",     label: "Mobile UI",         component: MobileUIScreen },
];

/* ─── Floating badge ──────────────────────────────────────────── */

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

/* ─── Layers panel ────────────────────────────────────────────── */

const LAYERS = [
  { name: "Page 1", depth: 0, active: false },
  { name: "Frame", depth: 1, active: false },
  { name: "Header", depth: 2, active: false },
  { name: "Hero", depth: 2, active: true },
  { name: "Heading", depth: 3, active: false },
  { name: "CTA Button", depth: 3, active: false },
  { name: "Cards", depth: 2, active: false },
  { name: "Card 1", depth: 3, active: false },
];

/* ─── Main ────────────────────────────────────────────────────── */

export default function UIDesignMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const Screen = SCREENS[idx].component;

  return (
    <div className="relative flex flex-col items-center justify-center py-8 select-none" style={{ minHeight: 440 }}>
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{ width: 360, height: 300, top: "48%", left: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(ellipse, rgba(201,243,29,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Floating badges ── */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: -6, top: 28 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.09)" }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c9f31d" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Figma</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>ready</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -5]} style={{ left: -10, top: "32%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>48</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>components</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: -6, bottom: 90 }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(201,243,29,0.22)", width: 128 }}>
          <motion.div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.15)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M20 6L9 17l-5-5" size={9} color="#c9f31d" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>Design Approved</p>
            <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Handed to dev</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: -8, top: 38 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d={["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"]} size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>User</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>tested</span>
        </div>
      </FloatingBadge>

      {/* ── Design tool window ── */}
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
            <div className="flex gap-0.5 ml-1">
              {[
                "M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4",
                "M1 4h22v16H1z M1 9h22",
                "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586",
                "M4 6h16M4 12h16M4 18h16",
                "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
              ].map((d, i) => (
                <div key={i} className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: i === 0 ? "rgba(201,243,29,0.12)" : "transparent" }}>
                  <Ico d={d} size={11} color={i === 0 ? "#c9f31d" : "rgba(255,255,255,0.28)"} />
                </div>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <AnimatePresence mode="wait">
                <motion.span key={idx} className="text-[7px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(201,243,29,0.1)", color: "rgba(201,243,29,0.8)", border: "1px solid rgba(201,243,29,0.2)" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {SCREENS[idx].label}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Body: layers + canvas + props */}
          <div className="flex" style={{ height: 236 }}>
            {/* Layers panel */}
            <div className="flex flex-col py-2" style={{ width: 90, borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}>
              <p className="text-[6px] font-black px-2 mb-1.5" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-archivo)" }}>LAYERS</p>
              {LAYERS.map((l, i) => (
                <div key={i} className="flex items-center gap-1 px-2 py-0.5 rounded-sm" style={{
                  paddingLeft: 8 + l.depth * 7,
                  background: l.active ? "rgba(201,243,29,0.1)" : "transparent",
                }}>
                  <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: l.active ? "rgba(201,243,29,0.5)" : "rgba(255,255,255,0.1)" }} />
                  <span className="text-[6.5px] truncate" style={{ color: l.active ? "#c9f31d" : "rgba(255,255,255,0.38)" }}>{l.name}</span>
                </div>
              ))}
            </div>

            {/* Canvas */}
            <div className="relative flex-1 overflow-hidden" style={{ background: "#0D0F18" }}>
              {/* Canvas dots pattern */}
              <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
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

            {/* Properties panel */}
            <div className="flex flex-col py-2 px-2 gap-2" style={{ width: 72, borderLeft: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}>
              <p className="text-[6px] font-black" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-archivo)" }}>PROPERTIES</p>
              {[
                { l: "W", v: "375" },
                { l: "H", v: "auto" },
                { l: "X", v: "0" },
                { l: "Y", v: "0" },
              ].map((p) => (
                <div key={p.l} className="flex items-center justify-between">
                  <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>{p.l}</span>
                  <div className="px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", minWidth: 32 }}>
                    <span className="text-[6.5px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{p.v}</span>
                  </div>
                </div>
              ))}
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div>
                <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>Fill</span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-4 h-4 rounded-sm" style={{ background: "#c9f31d" }} />
                  <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.5)" }}>C9F31D</span>
                </div>
              </div>
              <div>
                <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>Radius</span>
                <div className="px-1.5 py-0.5 rounded mt-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <span className="text-[6.5px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>12px</span>
                </div>
              </div>
              <div>
                <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>Opacity</span>
                <div className="mt-1 rounded-full overflow-hidden" style={{ height: 3, background: "rgba(255,255,255,0.08)" }}>
                  <div style={{ width: "100%", height: "100%", background: "linear-gradient(to right, #c9f31d, rgba(201,243,29,0.4))" }} />
                </div>
              </div>
            </div>
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
