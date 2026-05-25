"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ico = ({ d, size = 11, color = "currentColor", fill = "none" }: { d: string | string[]; size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ─── Screen components (280 × 190 content area) ─────────────── */

function DashboardScreen({ url }: { url: string }) {
  const bars = [0.45, 0.62, 0.5, 0.78, 0.68, 0.9, 0.82, 0.95, 0.88, 1.0, 0.76, 0.84];
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="flex flex-col items-center gap-3 py-4 px-2.5" style={{ width: 44, background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "#c9f31d" }}>
          <span className="text-[7px] font-black text-black" style={{ fontFamily: "var(--font-archivo)" }}>LQ</span>
        </div>
        <div className="flex flex-col gap-2.5 mt-2">
          {[
            "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            "M18 20V10M12 20V4M6 20v-6",
            "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
            "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
          ].map((d, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: i === 0 ? "rgba(201,243,29,0.12)" : "transparent" }}>
              <Ico d={d} size={13} color={i === 0 ? "#c9f31d" : "rgba(255,255,255,0.25)"} />
            </div>
          ))}
        </div>
      </div>
      {/* Main */}
      <div className="flex-1 flex flex-col px-4 py-3 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[11px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Analytics</p>
            <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>May 2026</p>
          </div>
          <div className="flex gap-1.5">
            {["Week", "Month", "Year"].map((t, i) => (
              <span key={t} className="text-[7px] px-2 py-0.5 rounded-full font-semibold" style={{ background: i === 1 ? "#c9f31d" : "rgba(255,255,255,0.06)", color: i === 1 ? "#000" : "rgba(255,255,255,0.4)" }}>{t}</span>
            ))}
          </div>
        </div>
        {/* Metric chips */}
        <div className="flex gap-2 mb-3">
          {[
            { l: "Visitors", v: "124K", up: true },
            { l: "Conversions", v: "8.4%", up: true },
            { l: "Revenue", v: "$48K", up: false },
          ].map((m) => (
            <div key={m.l} className="flex-1 rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>{m.v}</p>
              <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>{m.l}</p>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="flex-1 flex flex-col">
          <p className="text-[7px] font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Weekly Traffic</p>
          <div className="flex items-end gap-1 flex-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ background: i === bars.length - 1 ? "#c9f31d" : i % 3 === 0 ? "rgba(201,243,29,0.35)" : "rgba(255,255,255,0.12)", transformOrigin: "bottom", height: `${h * 100}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.35, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ECommerceScreen({ url }: { url: string }) {
  return (
    <div className="flex flex-col h-full">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>GIDY</span>
        <div className="flex gap-3">
          {["Shop", "Deals", "About"].map((n, i) => (
            <span key={n} className="text-[7px] font-medium" style={{ color: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.4)" }}>{n}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Ico d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" size={12} color="rgba(255,255,255,0.55)" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full text-[5px] font-black flex items-center justify-center" style={{ background: "#c9f31d", color: "#000" }}>3</span>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="flex gap-1.5 px-4 py-2">
        {["All", "Trending", "New", "Sale"].map((c, i) => (
          <span key={c} className="px-2 py-0.5 rounded-full text-[7px] font-semibold" style={{ background: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.06)", color: i === 0 ? "#000" : "rgba(255,255,255,0.4)" }}>{c}</span>
        ))}
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2 px-4 flex-1">
        {[
          { name: "Air Max 2024", price: "$129", tag: "New", icon: "M2 12h20M12 2l8 10H4l8-10z" },
          { name: "Tech Jacket", price: "$89", tag: "Sale", icon: "M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" },
          { name: "Smart Watch", price: "$245", tag: null, icon: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" },
        ].map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="h-14 flex items-center justify-center relative" style={{ background: "rgba(201,243,29,0.04)" }}>
              <Ico d={p.icon} size={24} color="rgba(201,243,29,0.5)" />
              {p.tag && <span className="absolute top-1 right-1 text-[5px] font-bold px-1 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.15)", color: "#c9f31d" }}>{p.tag}</span>}
            </div>
            <div className="p-2">
              <p className="text-[7px] font-semibold text-white truncate">{p.name}</p>
              <p className="text-[8px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstateScreen({ url }: { url: string }) {
  return (
    <div className="flex flex-col h-full px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Find Property</p>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.2)" }}>
          <Ico d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" size={8} color="#c9f31d" />
          <span className="text-[7px] font-semibold" style={{ color: "#c9f31d" }}>New York</span>
        </div>
      </div>
      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <Ico d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" size={10} color="rgba(255,255,255,0.3)" />
        <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.3)" }}>2 bed · Manhattan · Under $500K</span>
      </div>
      {/* Listings */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {[
          { price: "$485,000", loc: "Manhattan", tag: "Featured", beds: "3 bed · 2 bath", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
          { price: "$320,000", loc: "Brooklyn", tag: null, beds: "2 bed · 1 bath", icon: "M1 22V9l11-7 11 7v13H15v-7H9v7z" },
        ].map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="h-16 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, rgba(20,30,45,1), rgba(12,18,28,1))" }}>
              <Ico d={p.icon} size={28} color="rgba(201,243,29,0.45)" />
              {p.tag && <span className="absolute top-1.5 left-1.5 text-[5px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.2)", color: "#c9f31d" }}>{p.tag}</span>}
            </div>
            <div className="p-2">
              <p className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{p.price}</p>
              <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.35)" }}>{p.loc} · {p.beds}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LandingScreen({ url }: { url: string }) {
  return (
    <div className="flex flex-col h-full">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>LYQX</span>
        <div className="flex gap-3">
          {["Work", "Services", "About"].map((n) => (
            <span key={n} className="text-[7px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{n}</span>
          ))}
        </div>
        <span className="text-[7px] font-bold px-2.5 py-1 rounded-full" style={{ background: "#c9f31d", color: "#000" }}>Contact</span>
      </div>
      {/* Hero */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 text-center gap-2 relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,243,29,0.06) 0%, transparent 70%)" }} />
        <span className="text-[7px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>Full-Cycle Digital Agency</span>
        <p className="text-[16px] font-black text-white leading-tight" style={{ fontFamily: "var(--font-archivo)" }}>
          Build. Launch.<br /><span style={{ color: "#c9f31d" }}>Grow.</span>
        </p>
        <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.4)", maxWidth: 160 }}>We turn your ideas into digital products that perform.</p>
        <div className="flex gap-2 mt-1">
          <span className="text-[7px] font-bold px-3 py-1.5 rounded-full" style={{ background: "#c9f31d", color: "#000" }}>Start a Project ↗</span>
          <span className="text-[7px] font-medium px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>View Work</span>
        </div>
      </div>
    </div>
  );
}

function FintechScreen({ url }: { url: string }) {
  const pts = [35, 30, 48, 40, 58, 52, 68, 62, 78, 72, 88, 82, 100];
  const H = 40; const W = 220;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * W} ${H - (p / 100) * H}`).join(" ");
  return (
    <div className="flex flex-col h-full px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[8px]" style={{ color: "rgba(255,255,255,0.32)" }}>Account Overview</p>
          <p className="text-[18px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>$48,250</p>
          <p className="text-[8px] font-semibold mt-0.5" style={{ color: "#c9f31d" }}>↑ +4.2% this month</p>
        </div>
        <div className="flex flex-col gap-1.5">
          {["Send", "Add"].map((a, i) => (
            <div key={a} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg" style={{ background: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.06)", border: i === 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <span className="text-[7px] font-black" style={{ color: i === 0 ? "#000" : "rgba(255,255,255,0.6)" }}>{a}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Chart */}
      <div className="mb-3">
        <svg width="100%" height="40" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="wg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9f31d" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#c9f31d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L ${W} ${H} L 0 ${H} Z`} fill="url(#wg1)" />
          <path d={path} fill="none" stroke="#c9f31d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Transactions */}
      <p className="text-[7px] font-black mb-1.5 text-white" style={{ fontFamily: "var(--font-archivo)" }}>Recent</p>
      {[
        { name: "Stripe Payout", amt: "+$4,200", icon: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" },
        { name: "AWS Invoice", amt: "-$340", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
        { name: "Team Salary", amt: "-$8,500", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
      ].map((t, i) => (
        <div key={i} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
              <Ico d={t.icon} size={9} color="rgba(255,255,255,0.45)" />
            </div>
            <span className="text-[7px] font-medium text-white">{t.name}</span>
          </div>
          <span className="text-[7px] font-black" style={{ color: t.amt.startsWith("+") ? "#c9f31d" : "rgba(255,100,100,0.9)", fontFamily: "var(--font-archivo)" }}>{t.amt}</span>
        </div>
      ))}
    </div>
  );
}

function BlogScreen({ url }: { url: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>The Journal</span>
        <div className="flex gap-2.5">
          {["Tech", "Design", "Business"].map((n, i) => (
            <span key={n} className="text-[7px]" style={{ color: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.35)" }}>{n}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 px-4 py-3 gap-2.5">
        {/* Featured post */}
        <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="h-12 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(201,243,29,0.1), rgba(201,243,29,0.03))" }}>
            <Ico d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" size={22} color="rgba(201,243,29,0.5)" />
          </div>
          <div className="p-2.5">
            <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>AI & Tech</span>
            <p className="text-[9px] font-black text-white mt-1" style={{ fontFamily: "var(--font-archivo)" }}>How AI Is Reshaping Product Development</p>
            <p className="text-[7px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>May 2026 · 5 min read</p>
          </div>
        </div>
        {/* List posts */}
        {[
          { cat: "Design", title: "Design Systems That Scale" },
          { cat: "Business", title: "From MVP to $1M ARR" },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
              <Ico d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" size={13} color="rgba(255,255,255,0.3)" />
            </div>
            <div>
              <p className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{p.title}</p>
              <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{p.cat} · 4 min read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Registry ────────────────────────────────────────────────── */

const SCREENS = [
  { id: "dashboard",  label: "SaaS Dashboard",    url: "app.saasplatform.io",      component: DashboardScreen },
  { id: "ecommerce",  label: "E-Commerce",         url: "shop.gidy.com",            component: ECommerceScreen },
  { id: "realestate", label: "Real Estate",        url: "fetchagent.com/search",    component: RealEstateScreen },
  { id: "landing",    label: "Landing Page",       url: "lyqx.agency",              component: LandingScreen },
  { id: "fintech",    label: "Fintech Platform",   url: "novapay.io/dashboard",     component: FintechScreen },
  { id: "blog",       label: "Content Platform",   url: "thejournal.io",            component: BlogScreen },
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

const badgeBase: React.CSSProperties = {
  background: "rgba(10,12,20,0.92)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
};

/* ─── Main ────────────────────────────────────────────────────── */

export default function WebBrowserMockup() {
  const [idx, setIdx] = useState(0);
  const Screen = SCREENS[idx].component;
  const current = SCREENS[idx];

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-8 select-none" style={{ minHeight: 420 }}>
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{ width: 360, height: 260, top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(ellipse, rgba(201,243,29,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Floating badges ── */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: -8, top: 30 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...badgeBase, border: "1px solid rgba(255,255,255,0.09)" }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="#c9f31d"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>98</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>PageSpeed</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -5]} style={{ left: -10, top: "35%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...badgeBase, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>0.8s</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>load</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: -8, bottom: 80 }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ ...badgeBase, border: "1px solid rgba(201,243,29,0.22)", width: 128 }}>
          <motion.div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.15)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M20 6L9 17l-5-5" size={9} color="#c9f31d" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>Site Deployed</p>
            <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Production live</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: -6, top: 40 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...badgeBase, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>100</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>SEO</span>
        </div>
      </FloatingBadge>

      {/* ── Browser window ── */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 300, position: "relative", zIndex: 10 }}
      >
        <div className="rounded-2xl overflow-hidden" style={{
          border: "1.5px solid rgba(255,255,255,0.1)",
          background: "rgba(10,12,20,0.97)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            {/* Traffic lights */}
            <div className="flex gap-1.5 shrink-0">
              {["rgba(255,95,87,0.8)", "rgba(255,189,46,0.8)", "rgba(40,200,64,0.8)"].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            {/* URL bar */}
            <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={8} color="rgba(201,243,29,0.6)" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  className="text-[7px] font-medium"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {current.url}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Content */}
          <div className="relative overflow-hidden" style={{ height: 210 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                style={{ background: "#0A0C14" }}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Screen url={current.url} />
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
            {current.label}
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
