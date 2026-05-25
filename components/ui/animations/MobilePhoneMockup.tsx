"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Shared icon helpers ─────────────────────────────────────── */
const Ico = ({ d, size = 12, color = "currentColor", fill = "none", extra = "" }: { d: string | string[]; size?: number; color?: string; fill?: string; extra?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={extra}>
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ─── Screens ─────────────────────────────────────────────────── */

function FinanceScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="mb-3">
        <p className="text-[8px] font-medium mb-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>Total Balance</p>
        <p className="text-[24px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>$12,450</p>
        <p className="text-[8px] font-semibold mt-1" style={{ color: "#c9f31d" }}>↑ +$320.40 today</p>
      </div>
      <div className="flex gap-2 mb-3">
        {[
          { label: "Send", icon: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" },
          { label: "Receive", icon: "M12 2v20M5 15l7 7 7-7" },
          { label: "Pay", icon: "M1 4h22v16H1zM1 9h22" },
        ].map((a) => (
          <div key={a.label} className="flex-1 py-2.5 rounded-xl flex flex-col items-center gap-1.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(201,243,29,0.15)" }}>
              <Ico d={a.icon} size={11} color="#c9f31d" />
            </div>
            <span className="text-[7px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>{a.label}</span>
          </div>
        ))}
      </div>
      <p className="text-[8px] font-black mb-2 text-white" style={{ fontFamily: "var(--font-archivo)" }}>Recent</p>
      {[
        { name: "Salary Deposit", amt: "+$3,200", c: "#c9f31d", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
        { name: "NovaPay Transfer", amt: "-$240", c: "rgba(255,100,100,0.9)", icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m10 0h3a2 2 0 0 0 2-2v-3" },
        { name: "Subscription", amt: "-$12", c: "rgba(255,100,100,0.9)", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
      ].map((t, i) => (
        <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
              <Ico d={t.icon} size={10} color="rgba(255,255,255,0.55)" />
            </div>
            <span className="text-[8px] font-medium text-white">{t.name}</span>
          </div>
          <span className="text-[8px] font-black" style={{ color: t.c, fontFamily: "var(--font-archivo)" }}>{t.amt}</span>
        </div>
      ))}
    </div>
  );
}

function RealEstateScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Find Home</p>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.2)" }}>
          <Ico d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" size={8} color="#c9f31d" />
          <span className="text-[7px] font-semibold" style={{ color: "#c9f31d" }}>New York</span>
        </div>
      </div>
      <div className="rounded-2xl mb-3 overflow-hidden p-3 flex flex-col justify-between" style={{ height: 95, background: "linear-gradient(135deg, #141d2d, #0d1520)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex justify-between items-start">
          <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.15)", color: "#c9f31d" }}>Featured</span>
          <div className="flex items-center gap-1">
            <Ico d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" size={9} color="rgba(255,255,255,0.35)" />
            <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.35)" }}>3 bed · 2 bath</span>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>$485,000</p>
          <p className="text-[7px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Manhattan, NY · 1,240 sqft</p>
        </div>
      </div>
      {[
        { price: "$320,000", loc: "Brooklyn, NY", beds: "2 bed", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
        { price: "$610,000", loc: "Midtown, NY", beds: "4 bed", icon: "M1 22V9l11-7 11 7v13H15v-7H9v7z" },
      ].map((p, i) => (
        <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: "rgba(201,243,29,0.07)", border: "1px solid rgba(201,243,29,0.12)" }}>
            <Ico d={p.icon} size={18} color="rgba(201,243,29,0.7)" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{p.price}</p>
            <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.35)" }}>{p.loc}</p>
          </div>
          <span className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>{p.beds}</span>
        </div>
      ))}
    </div>
  );
}

function SocialScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Discover</p>
        <div className="relative">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)" }}>
            <Ico d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" size={13} color="rgba(255,255,255,0.6)" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full text-[6px] font-black flex items-center justify-center" style={{ background: "#c9f31d", color: "#000" }}>3</span>
        </div>
      </div>
      <div className="rounded-2xl mb-3 overflow-hidden flex flex-col items-center justify-center gap-2" style={{ height: 135, background: "linear-gradient(160deg, #1e0b35, #0d0820)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(201,243,29,0.2), rgba(201,243,29,0.05))", border: "2px solid rgba(201,243,29,0.3)" }}>
          <Ico d={["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"]} size={24} color="rgba(201,243,29,0.7)" />
        </div>
        <div className="text-center">
          <p className="text-[12px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Sophie, 27</p>
          <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.4)" }}>New York · 2 mi away</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.2)" }}>
          <Ico d="M18 6L6 18M6 6l12 12" size={16} color="rgba(255,90,90,0.8)" />
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.25)" }}>
          <Ico d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" size={16} color="#c9f31d" fill="#c9f31d" />
        </div>
      </div>
      <div className="py-2 rounded-xl flex items-center justify-center gap-2" style={{ background: "rgba(201,243,29,0.07)", border: "1px solid rgba(201,243,29,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#c9f31d" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        <span className="text-[8px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>It&apos;s a Match!</span>
      </div>
    </div>
  );
}

function FoodScreen() {
  const restaurants = [
    { name: "Tony's Pizza", cuisine: "Italian", rating: "4.9", time: "18 min", icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" },
    { name: "Sakura Sushi", cuisine: "Japanese", rating: "4.8", time: "25 min", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { name: "Burger House", cuisine: "American", rating: "4.7", time: "15 min", icon: "M4 6h16M4 12h16M4 18h7" },
  ];
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Order Food</p>
        <span className="text-[7px] px-2 py-1 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>📍 NYC</span>
      </div>
      <div className="flex gap-1.5 mb-3 overflow-hidden">
        {["🍕 Pizza", "🍣 Sushi", "🍔 Burgers", "🌮 Tacos"].map((c, i) => (
          <span key={c} className="px-2 py-1 rounded-full text-[7px] font-semibold whitespace-nowrap" style={{ background: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.06)", color: i === 0 ? "#000" : "rgba(255,255,255,0.45)" }}>{c}</span>
        ))}
      </div>
      {restaurants.map((r, i) => (
        <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: "rgba(201,243,29,0.07)", border: "1px solid rgba(201,243,29,0.12)" }}>
            <Ico d={r.icon} size={18} color="rgba(201,243,29,0.7)" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{r.name}</p>
            <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.35)" }}>{r.cuisine}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[8px] font-bold" style={{ color: "#c9f31d" }}>★ {r.rating}</p>
            <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.3)" }}>{r.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function HealthScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="mb-2">
        <p className="text-[8px] font-medium" style={{ color: "rgba(255,255,255,0.32)" }}>Monday, May 26</p>
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Activity</p>
      </div>
      <div className="flex items-center justify-center mb-3">
        <div className="relative" style={{ width: 76, height: 76 }}>
          <svg width="76" height="76" viewBox="0 0 76 76">
            <circle cx="38" cy="38" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle cx="38" cy="38" r="30" fill="none" stroke="#c9f31d" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="188.5" strokeDashoffset="47"
              style={{ transform: "rotate(-90deg)", transformOrigin: "38px 38px" }} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[13px] font-black leading-none" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>75%</p>
            <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.3)" }}>goal</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        {[
          { l: "Steps", v: "8,432", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
          { l: "Kcal", v: "1,840", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" },
          { l: "BPM", v: "72", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
        ].map((s) => (
          <div key={s.l} className="flex-1 rounded-xl py-2 flex flex-col items-center gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Ico d={s.icon} size={10} color="rgba(201,243,29,0.6)" />
            <p className="text-[10px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>{s.v}</p>
            <p className="text-[6px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>{s.l}</p>
          </div>
        ))}
      </div>
      {[
        { name: "Morning Run", detail: "5.2 km · 32 min", done: true, icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
        { name: "Yoga", detail: "45 min · Calm", done: false, icon: "M12 2a4 4 0 0 1 4 4c0 2.21-1.79 4-4 4S8 8.21 8 6a4 4 0 0 1 4-4zM3 20v-2c0-3.31 2.69-6 6-6h6c3.31 0 6 2.69 6 6v2" },
      ].map((w, i) => (
        <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-2" style={{ background: i === 0 ? "rgba(201,243,29,0.06)" : "rgba(255,255,255,0.03)", border: `1px solid ${i === 0 ? "rgba(201,243,29,0.15)" : "rgba(255,255,255,0.06)"}` }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: i === 0 ? "rgba(201,243,29,0.15)" : "rgba(255,255,255,0.06)" }}>
            <Ico d={w.icon} size={12} color={i === 0 ? "#c9f31d" : "rgba(255,255,255,0.4)"} />
          </div>
          <div className="flex-1">
            <p className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{w.name}</p>
            <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.3)" }}>{w.detail}</p>
          </div>
          {w.done && <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "#c9f31d", color: "#000" }}>Done</span>}
        </div>
      ))}
    </div>
  );
}

function CryptoScreen() {
  const pts = [38, 32, 52, 44, 62, 55, 72, 66, 82, 75, 92, 85, 100];
  const H = 38; const W = 182;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * W} ${H - (p / 100) * H}`).join(" ");
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Portfolio</p>
        <span className="text-[7px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>● Live</span>
      </div>
      <div className="mb-1">
        <p className="text-[8px]" style={{ color: "rgba(255,255,255,0.32)" }}>Total value</p>
        <p className="text-[22px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>$24,850</p>
        <p className="text-[8px] font-semibold" style={{ color: "#c9f31d" }}>↑ +5.24% this week</p>
      </div>
      <div className="mb-3">
        <svg width="100%" height="38" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9f31d" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#c9f31d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L ${W} ${H} L 0 ${H} Z`} fill="url(#cg2)" />
          <path d={path} fill="none" stroke="#c9f31d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {[
        { sym: "BTC", name: "Bitcoin", price: "$67,420", chg: "+2.4%", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
        { sym: "ETH", name: "Ethereum", price: "$3,840", chg: "+1.8%", icon: "M12 2l-8 13h16L12 2zM4 15l8 7 8-7" },
        { sym: "SOL", name: "Solana", price: "$182", chg: "+5.2%", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
      ].map((t, i) => (
        <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-xl mb-1.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.12)" }}>
            <Ico d={t.icon} size={12} color="#c9f31d" />
          </div>
          <div className="flex-1">
            <p className="text-[8px] font-semibold text-white">{t.sym}</p>
            <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.3)" }}>{t.name}</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>{t.price}</p>
            <p className="text-[7px] font-bold" style={{ color: "#c9f31d" }}>{t.chg}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ECommerceScreen() {
  const products = [
    { name: "Air Max", price: "$129", tag: "New", icon: "M2 12h20M12 2l8 10H4l8-10z" },
    { name: "Jacket", price: "$89", tag: "Sale", icon: "M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" },
    { name: "Watch", price: "$245", tag: null, icon: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" },
    { name: "Bag", price: "$67", tag: "Hot", icon: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" },
  ];
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Shop</p>
        <div className="relative">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
            <Ico d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" size={13} color="rgba(255,255,255,0.6)" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full text-[6px] font-black flex items-center justify-center" style={{ background: "#c9f31d", color: "#000" }}>2</span>
        </div>
      </div>
      <div className="flex gap-1.5 mb-3 overflow-hidden">
        {["All", "Trending", "New", "Sale"].map((c, i) => (
          <span key={c} className="px-2.5 py-1 rounded-full text-[7px] font-semibold whitespace-nowrap" style={{ background: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.06)", color: i === 0 ? "#000" : "rgba(255,255,255,0.45)" }}>{c}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {products.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="h-14 flex items-center justify-center relative" style={{ background: "rgba(201,243,29,0.04)" }}>
              <Ico d={p.icon} size={26} color="rgba(201,243,29,0.5)" />
              {p.tag && <span className="absolute top-1 right-1 text-[6px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(201,243,29,0.15)", color: "#c9f31d" }}>{p.tag}</span>}
            </div>
            <div className="px-2 py-1.5">
              <p className="text-[8px] font-semibold text-white">{p.name}</p>
              <p className="text-[9px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GolfScreen() {
  const holes = [
    { h: 1, par: 4, score: 4 },
    { h: 2, par: 3, score: 2 },
    { h: 3, par: 5, score: 6 },
    { h: 4, par: 4, score: 4 },
    { h: 5, par: 4, score: 5 },
    { h: 6, par: 3, score: 3 },
  ];
  return (
    <div className="flex flex-col h-full px-4 pt-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[14px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Golf</p>
        <span className="text-[7px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d", border: "1px solid rgba(201,243,29,0.2)" }}>⛳ Round Active</span>
      </div>
      {/* Course card */}
      <div className="rounded-2xl mb-3 p-3 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #0d1f0d, #0a1a0a)", border: "1px solid rgba(201,243,29,0.15)" }}>
        <div>
          <p className="text-[10px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Augusta National</p>
          <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.4)" }}>Hole 7 of 18 · Par 72</p>
        </div>
        <div className="text-right">
          <p className="text-[18px] font-black leading-none" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>+2</p>
          <p className="text-[7px]" style={{ color: "rgba(255,255,255,0.35)" }}>vs par</p>
        </div>
      </div>
      {/* Stats */}
      <div className="flex gap-2 mb-3">
        {[
          { l: "Drive", v: "284yds", icon: "M3 12h18M12 2l9 10H3L12 2z" },
          { l: "Handicap", v: "12", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" },
          { l: "Score", v: "78", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
        ].map((s) => (
          <div key={s.l} className="flex-1 rounded-xl py-2 flex flex-col items-center gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Ico d={s.icon} size={10} color="rgba(201,243,29,0.6)" />
            <p className="text-[9px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>{s.v}</p>
            <p className="text-[6px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>{s.l}</p>
          </div>
        ))}
      </div>
      {/* Scorecard */}
      <p className="text-[8px] font-black text-white mb-1.5" style={{ fontFamily: "var(--font-archivo)" }}>Scorecard</p>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex" style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {["H", "Par", "Score"].map(h => (
            <div key={h} className="flex-1 text-center py-1">
              <span className="text-[7px] font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>{h}</span>
            </div>
          ))}
        </div>
        {holes.map((h) => {
          const diff = h.score - h.par;
          const scoreColor = diff < 0 ? "#c9f31d" : diff === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,120,120,0.9)";
          return (
            <div key={h.h} className="flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex-1 text-center py-1.5"><span className="text-[8px]" style={{ color: "rgba(255,255,255,0.4)" }}>{h.h}</span></div>
              <div className="flex-1 text-center py-1.5"><span className="text-[8px]" style={{ color: "rgba(255,255,255,0.5)" }}>{h.par}</span></div>
              <div className="flex-1 text-center py-1.5"><span className="text-[8px] font-black" style={{ color: scoreColor, fontFamily: "var(--font-archivo)" }}>{h.score}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Registry ────────────────────────────────────────────────── */

const SCREENS = [
  { id: "finance",    label: "Fintech",          component: FinanceScreen },
  { id: "realestate", label: "Real Estate",       component: RealEstateScreen },
  { id: "social",     label: "Social Networking", component: SocialScreen },
  { id: "food",       label: "Food Delivery",     component: FoodScreen },
  { id: "health",     label: "Health & Wellness", component: HealthScreen },
  { id: "crypto",     label: "Crypto & Stock",    component: CryptoScreen },
  { id: "ecommerce",  label: "E-Commerce",        component: ECommerceScreen },
  { id: "golf",       label: "Sports & Golf",     component: GolfScreen },
];

/* ─── Floating badge ──────────────────────────────────────────── */

function FloatingBadge({ children, style, delay = 0, floatY = [-4, 2] }: {
  children: React.ReactNode;
  style: React.CSSProperties;
  delay?: number;
  floatY?: number[];
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

/* ─── Main ────────────────────────────────────────────────────── */

export default function MobilePhoneMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const Screen = SCREENS[idx].component;

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none" style={{ minHeight: 580 }}>
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{ width: 320, height: 320, top: "45%", left: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(ellipse, rgba(201,243,29,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Floating badges ── */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: 6, top: 68 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ background: "rgba(10,12,20,0.92)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#c9f31d"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <span className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>4.9</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>rating</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -6]} style={{ left: 2, top: "38%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ background: "rgba(10,12,20,0.92)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}>
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9f31d" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <span className="text-[9px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>2,841</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>online</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: 2, bottom: 140 }}>
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl" style={{ background: "rgba(10,12,20,0.92)", border: "1px solid rgba(201,243,29,0.22)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.45)", width: 126 }}>
          <motion.div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.15)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M20 6L9 17l-5-5" size={10} color="#c9f31d" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>App Deployed</p>
            <p className="text-[7px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>v2.1.0 is live</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: 8, top: 108 }}>
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl" style={{ background: "rgba(10,12,20,0.92)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}>
          <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>99ms</span>
        </div>
      </FloatingBadge>

      {/* ── Phone ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 230, height: 470, position: "relative", zIndex: 10 }}
      >
        <div className="absolute inset-0 rounded-[40px]" style={{
          border: "1.5px solid rgba(255,255,255,0.1)",
          background: "rgba(10,12,20,0.97)",
          boxShadow: "0 48px 96px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
        }} />
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 12, width: 80, height: 22, background: "#000", borderRadius: 14, zIndex: 10 }} />

        <div className="absolute overflow-hidden" style={{ inset: 2, borderRadius: 38, background: "#0A0C14" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5" style={{ paddingTop: 38, paddingBottom: 4 }}>
            <span className="text-[9px] font-bold" style={{ color: "rgba(255,255,255,0.55)" }}>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                <rect x="0" y="6" width="2.2" height="3" rx="0.6" fill="rgba(255,255,255,0.45)" />
                <rect x="3.5" y="4" width="2.2" height="5" rx="0.6" fill="rgba(255,255,255,0.45)" />
                <rect x="7" y="2" width="2.2" height="7" rx="0.6" fill="rgba(255,255,255,0.45)" />
                <rect x="10.5" y="0" width="2.2" height="9" rx="0.6" fill="rgba(255,255,255,0.75)" />
              </svg>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
                <rect x="0.5" y="0.5" width="15" height="9" rx="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <rect x="1.5" y="1.5" width="11" height="7" rx="1.5" fill="rgba(255,255,255,0.45)" />
                <path d="M16.5 3.5v3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Animated content */}
          <div className="relative overflow-hidden" style={{ height: 360 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2" style={{ background: "rgba(10,12,20,0.97)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {[
              "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
              "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
              "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
            ].map((d, i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? "#c9f31d" : "rgba(255,255,255,0.22)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
                {i === 3 && <circle cx="12" cy="7" r="4" fill="none" />}
              </svg>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Label + dots */}
      <div className="flex flex-col items-center gap-2.5 mt-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            className="text-[10px] font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.18)", color: "rgba(201,243,29,0.8)" }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
          >
            {SCREENS[idx].label}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === idx ? 18 : 5, height: 5, background: i === idx ? "#c9f31d" : "rgba(255,255,255,0.15)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
