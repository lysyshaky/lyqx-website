"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ico = ({ d, size = 11, color = "currentColor" }: { d: string | string[]; size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ─── Screens ──────────────────────────────────────────────── */

function TryOnScreen() {
  const [selected, setSelected] = useState(0);
  const items = [
    { label: "Dress",    emoji: "👗", color: "#c9f31d", score: 97 },
    { label: "Ring",     emoji: "💍", color: "#a78bfa", score: 94 },
    { label: "Watch",    emoji: "⌚", color: "#4e9eff", score: 91 },
    { label: "Sneakers", emoji: "👟", color: "#fb923c", score: 88 },
  ];
  const item = items[selected];
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI VIRTUAL TRY-ON</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>E-Commerce</span>
      </div>
      <div className="flex flex-1 gap-2 p-2.5 overflow-hidden">
        {/* Item selector */}
        <div className="flex flex-col gap-1.5 w-16 shrink-0">
          {items.map((it, i) => (
            <button key={it.label} onClick={() => setSelected(i)}
              className="rounded-xl p-1.5 flex flex-col items-center gap-0.5 transition-all duration-200"
              style={{ background: i === selected ? `${it.color}15` : "rgba(255,255,255,0.03)", border: `1px solid ${i === selected ? it.color + "45" : "rgba(255,255,255,0.06)"}` }}>
              <span style={{ fontSize: 13 }}>{it.emoji}</span>
              <span className="text-[5.5px] font-semibold" style={{ color: i === selected ? it.color : "rgba(255,255,255,0.3)" }}>{it.label}</span>
            </button>
          ))}
        </div>
        {/* Try-on preview */}
        <div className="flex-1 rounded-xl flex flex-col items-center justify-between p-2.5 relative" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <svg width="58" height="96" viewBox="0 0 58 96" fill="none">
                <circle cx="29" cy="13" r="9.5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <path d="M14 28 Q9 43 11 63 L19 63 L19 92 L24 92 L24 63 L34 63 L34 92 L39 92 L39 63 L47 63 Q49 43 44 28 Q37 22 29 22 Q21 22 14 28Z"
                  fill={`${item.color}20`} stroke={`${item.color}55`} strokeWidth="1" />
              </svg>
              <motion.div className="absolute inset-0 pointer-events-none" key={selected}
                style={{ background: `radial-gradient(ellipse at 50% 65%, ${item.color}25 0%, transparent 70%)` }}
                animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.2, repeat: Infinity }} />
            </div>
          </div>
          {/* Fit score bar */}
          <div className="flex items-center gap-1.5 w-full">
            <span className="text-[6px] shrink-0" style={{ color: "rgba(255,255,255,0.28)" }}>Fit</span>
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div className="h-full rounded-full" key={selected}
                style={{ background: item.color }}
                initial={{ width: 0 }} animate={{ width: `${item.score}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
            </div>
            <span className="text-[7px] font-black shrink-0" style={{ color: item.color }}>{item.score}%</span>
          </div>
          {/* AI badge */}
          <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-lg"
            style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.28)" }}>
            <motion.div className="w-1 h-1 rounded-full" style={{ background: "#a78bfa" }}
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-[6px] font-semibold" style={{ color: "#a78bfa" }}>AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI AUTOMATION</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa" }}>n8n · Zapier</span>
      </div>
      <div className="flex-1 relative overflow-hidden p-2.5">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lines */}
          <line x1="52" y1="70" x2="98" y2="70" stroke="rgba(201,243,29,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="152" y1="70" x2="198" y2="70" stroke="rgba(167,139,250,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="248" y1="60" x2="248" y2="44" stroke="rgba(78,158,255,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="248" y1="80" x2="248" y2="100" stroke="rgba(74,222,128,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="248" y1="120" x2="248" y2="140" stroke="rgba(251,146,60,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          {/* Animated dots */}
          <motion.circle r="2.5" fill="#c9f31d"
            animate={{ cx: [52, 98], cy: [70, 70] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0 }} />
          <motion.circle r="2.5" fill="#a78bfa"
            animate={{ cx: [152, 198], cy: [70, 70] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0.35 }} />
          <motion.circle r="2" fill="#4e9eff"
            animate={{ cx: [248, 248], cy: [60, 44] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.7 }} />
          <motion.circle r="2" fill="#4ade80"
            animate={{ cx: [248, 248], cy: [80, 100] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.9 }} />
          <motion.circle r="2" fill="#fb923c"
            animate={{ cx: [248, 248], cy: [120, 140] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 1.1 }} />
        </svg>

        {/* Trigger node */}
        <div className="absolute flex flex-col items-center gap-1" style={{ left: 14, top: 54 }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,243,29,0.12)", border: "1px solid rgba(201,243,29,0.3)" }}>
            <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={11} color="#c9f31d" />
          </div>
          <span className="text-[5.5px] font-semibold" style={{ color: "rgba(201,243,29,0.7)" }}>Trigger</span>
          <span className="text-[5px]" style={{ color: "rgba(255,255,255,0.2)" }}>New Lead</span>
        </div>

        {/* AI Process node */}
        <div className="absolute flex flex-col items-center gap-1" style={{ left: 98, top: 54 }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)" }}>
            <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4M12 16h.01" size={11} color="#a78bfa" />
          </div>
          <span className="text-[5.5px] font-semibold" style={{ color: "rgba(167,139,250,0.7)" }}>AI Filter</span>
          <span className="text-[5px]" style={{ color: "rgba(255,255,255,0.2)" }}>Score & rank</span>
        </div>

        {/* Route node */}
        <div className="absolute flex flex-col items-center gap-1" style={{ left: 198, top: 54 }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(78,158,255,0.12)", border: "1px solid rgba(78,158,255,0.3)" }}>
            <Ico d="M22 12H2M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" size={11} color="#4e9eff" />
          </div>
          <span className="text-[5.5px] font-semibold" style={{ color: "rgba(78,158,255,0.7)" }}>Route</span>
          <span className="text-[5px]" style={{ color: "rgba(255,255,255,0.2)" }}>Smart split</span>
        </div>

        {/* Output nodes */}
        {[
          { label: "Email", detail: "Outreach", color: "#4e9eff", top: 14, icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" },
          { label: "CRM", detail: "Log deal", color: "#4ade80", top: 80, icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
          { label: "Slack", detail: "Notify", color: "#fb923c", top: 146, icon: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" },
        ].map((n) => (
          <div key={n.label} className="absolute flex flex-col items-center gap-0.5" style={{ left: 238, top: n.top }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${n.color}12`, border: `1px solid ${n.color}28` }}>
              <Ico d={n.icon} size={9} color={n.color} />
            </div>
            <span className="text-[5px] font-semibold" style={{ color: n.color }}>{n.label}</span>
          </div>
        ))}

        {/* Status badge */}
        <div className="absolute bottom-1 left-0 flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(201,243,29,0.07)", border: "1px solid rgba(201,243,29,0.15)" }}>
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9f31d" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <span className="text-[6px] font-bold" style={{ color: "#c9f31d" }}>Running 24/7 · 1,247 runs today</span>
        </div>
      </div>
    </div>
  );
}

function AvatarScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI SALES AVATAR</p>
        <div className="flex items-center gap-1">
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <span className="text-[6px] font-semibold" style={{ color: "#4ade80" }}>Live · Calling</span>
        </div>
      </div>
      <div className="flex gap-2.5 flex-1 p-2.5">
        {/* Avatar */}
        <div className="w-20 shrink-0 flex flex-col items-center gap-2">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ background: "rgba(147,51,234,0.1)", border: "1px solid rgba(147,51,234,0.22)" }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="15" r="9" fill="rgba(201,243,29,0.1)" stroke="#c9f31d" strokeWidth="1.2" />
              <path d="M7 42 Q7 29 22 29 Q37 29 37 42" fill="rgba(201,243,29,0.08)" stroke="#c9f31d" strokeWidth="1.2" />
              <circle cx="18" cy="14" r="1.8" fill="#c9f31d" opacity="0.75" />
              <circle cx="26" cy="14" r="1.8" fill="#c9f31d" opacity="0.75" />
              <path d="M17 20 Q22 23.5 27 20" stroke="#c9f31d" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {/* Voice wave */}
            <div className="absolute bottom-1.5 flex items-end gap-0.5" style={{ height: 10 }}>
              {[2, 5, 3, 7, 4, 6, 2, 5, 3].map((h, i) => (
                <motion.div key={i} className="w-0.5 rounded-full" style={{ background: "#c9f31d", height: h }}
                  animate={{ scaleY: [1, 2.2, 0.7, 1.6, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.09, ease: "easeInOut" }} />
              ))}
            </div>
          </div>
          {/* Languages */}
          <div className="flex gap-0.5 flex-wrap justify-center">
            {["EN", "ES", "DE", "FR"].map((l, i) => (
              <span key={l} className="text-[5px] px-1 py-0.5 rounded font-semibold"
                style={{ background: i === 0 ? "rgba(201,243,29,0.12)" : "rgba(255,255,255,0.04)", color: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.22)", border: `1px solid ${i === 0 ? "rgba(201,243,29,0.25)" : "rgba(255,255,255,0.07)"}` }}>{l}</span>
            ))}
          </div>
        </div>
        {/* Stats */}
        <div className="flex-1 flex flex-col gap-1.5">
          {[
            { label: "Calls Today",  val: "847",  tag: "+12%",  c: "#c9f31d" },
            { label: "Conversion",   val: "34%",  tag: "+5.2%", c: "#4ade80" },
            { label: "Booked Demos", val: "156",  tag: "+28%",  c: "#4e9eff" },
            { label: "Avg Score",    val: "8.9",  tag: "/10",   c: "#a78bfa" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between rounded-lg px-2 py-1.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>{s.label}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black" style={{ color: s.c, fontFamily: "var(--font-archivo)" }}>{s.val}</span>
                <span className="text-[5.5px] px-1 py-0.5 rounded" style={{ background: `${s.c}14`, color: s.c }}>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentScreen() {
  const [chars, setChars] = useState(0);
  const text = "Turn your brand story into copy that converts. AI writes landing pages, email sequences, and social posts aligned with your voice and goals — at 10× the speed.";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 3;
      if (i > text.length + 24) i = 0;
      setChars(Math.min(i, text.length));
    }, 75);
    return () => clearInterval(t);
  }, [text.length]);

  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI CONTENT STUDIO</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa" }}>Multi-Model</span>
      </div>
      <div className="flex flex-col gap-2 p-2.5 flex-1">
        {/* Model pills */}
        <div className="flex gap-1 flex-wrap items-center">
          {[
            { name: "Gemini",  c: "#4e9eff" },
            { name: "Claude",  c: "#a78bfa" },
            { name: "GPT-4o",  c: "#4ade80" },
            { name: "Llama",   c: "#fb923c" },
          ].map((m) => (
            <span key={m.name} className="flex items-center gap-1 text-[5.5px] px-1.5 py-0.5 rounded-full font-semibold"
              style={{ background: `${m.c}12`, color: m.c, border: `1px solid ${m.c}28` }}>
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: m.c }} />
              {m.name}
            </span>
          ))}
          <span className="text-[5px]" style={{ color: "rgba(255,255,255,0.2)" }}>+ more</span>
        </div>
        {/* Tone pills */}
        <div className="flex gap-1 flex-wrap">
          {["Professional", "Casual", "Bold", "Minimal"].map((t, i) => (
            <span key={t} className="text-[5.5px] px-1.5 py-0.5 rounded-full font-semibold"
              style={{ background: i === 2 ? "rgba(201,243,29,0.12)" : "rgba(255,255,255,0.04)", color: i === 2 ? "#c9f31d" : "rgba(255,255,255,0.22)", border: `1px solid ${i === 2 ? "rgba(201,243,29,0.25)" : "rgba(255,255,255,0.06)"}` }}>{t}</span>
          ))}
        </div>
        {/* Typing area */}
        <div className="flex-1 rounded-xl p-2.5 relative" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[6.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
            {text.slice(0, chars)}
            <motion.span className="inline-block w-0.5 h-2.5 ml-0.5 align-middle rounded-sm"
              style={{ background: "#c9f31d" }} animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.55, repeat: Infinity }} />
          </p>
        </div>
        {/* Generated images row */}
        <div className="flex items-center gap-2">
          <span className="text-[6px] shrink-0" style={{ color: "rgba(255,255,255,0.18)" }}>Generated</span>
          <div className="flex gap-1 flex-1 justify-end">
            {["#c9f31d", "#a78bfa", "#4e9eff", "#fb923c"].map((c, i) => (
              <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${c}12`, border: `1px solid ${c}22` }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill={c} stroke="none" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI VIDEO STUDIO</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(78,158,255,0.12)", color: "#4e9eff" }}>Sora · Runway</span>
      </div>
      <div className="flex flex-col gap-2 p-2.5 flex-1">
        {/* Preview */}
        <div className="flex-1 rounded-xl relative overflow-hidden flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <motion.div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(201,243,29,0.05) 0%, transparent 70%)" }}
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <svg className="relative z-10" width="110" height="65" viewBox="0 0 110 65" fill="none">
            <motion.rect x="8" y="18" width="36" height="26" rx="4"
              fill="rgba(201,243,29,0.1)" stroke="rgba(201,243,29,0.28)" strokeWidth="1"
              animate={{ x: [8, 10, 8], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="73" cy="31" r="17"
              fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.28)" strokeWidth="1"
              animate={{ r: [17, 19, 17] }} transition={{ duration: 2.5, repeat: Infinity }} />
            <motion.path d="M46 46 L58 22 L70 46"
              fill="rgba(78,158,255,0.08)" stroke="rgba(78,158,255,0.28)" strokeWidth="1"
              animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
          {/* Playbar */}
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center gap-1.5">
            <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <motion.div className="h-full rounded-full" style={{ background: "#c9f31d" }}
                animate={{ width: ["0%", "70%"] }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} />
            </div>
            <span className="text-[5.5px] font-mono shrink-0" style={{ color: "rgba(255,255,255,0.28)" }}>0:21/0:30</span>
          </div>
        </div>
        {/* Scene strip */}
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] shrink-0" style={{ color: "rgba(255,255,255,0.18)" }}>Scenes</span>
          <div className="flex gap-1 flex-1">
            {[
              { c: "#c9f31d", on: true },
              { c: "#a78bfa", on: false },
              { c: "#4e9eff", on: false },
              { c: "#ffd166", on: false },
              { c: "#fb923c", on: false },
            ].map((s, i) => (
              <div key={i} className="flex-1 h-7 rounded-lg flex items-end justify-center pb-0.5"
                style={{ background: `${s.c}${s.on ? "16" : "08"}`, border: `1px solid ${s.c}${s.on ? "40" : "14"}` }}>
                <span className="text-[5px] font-bold" style={{ color: `${s.c}${s.on ? "ff" : "55"}` }}>{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg shrink-0"
            style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.18)" }}>
            <motion.div className="w-1 h-1 rounded-full" style={{ background: "#c9f31d" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
            <span className="text-[6px] font-bold" style={{ color: "#c9f31d" }}>4K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AI CRM INSIGHTS</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>AI Scored</span>
      </div>
      <div className="flex-1 p-2.5 flex flex-col gap-2">
        {/* Big metrics */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Revenue",    val: "$2.4M", delta: "+34%", c: "#c9f31d" },
            { label: "Pipeline",   val: "847",   delta: "+18%", c: "#4ade80" },
            { label: "Conv. Rate", val: "28%",   delta: "+9%",  c: "#4e9eff" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-2 flex flex-col gap-0.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[5.5px]" style={{ color: "rgba(255,255,255,0.26)" }}>{m.label}</p>
              <p className="text-[11px] font-black leading-none" style={{ color: m.c, fontFamily: "var(--font-archivo)" }}>{m.val}</p>
              <span className="text-[5.5px] font-semibold px-1 py-0.5 rounded w-fit mt-0.5" style={{ background: `${m.c}14`, color: m.c }}>{m.delta}</span>
            </div>
          ))}
        </div>
        {/* Pipeline funnel */}
        <div className="rounded-xl p-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[6px] mb-1.5" style={{ color: "rgba(255,255,255,0.22)" }}>Pipeline</p>
          {[
            { stage: "Lead",      count: 284, pct: 100, c: "#a78bfa" },
            { stage: "Qualified", count: 142, pct: 50,  c: "#4e9eff" },
            { stage: "Proposal",  count: 67,  pct: 24,  c: "#c9f31d" },
            { stage: "Closed",    count: 38,  pct: 13,  c: "#4ade80" },
          ].map((s) => (
            <div key={s.stage} className="flex items-center gap-2 mb-1">
              <span className="text-[5.5px] w-12 shrink-0" style={{ color: "rgba(255,255,255,0.28)" }}>{s.stage}</span>
              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.c, opacity: 0.65 }} />
              </div>
              <span className="text-[5.5px] font-bold w-6 text-right shrink-0" style={{ color: s.c }}>{s.count}</span>
            </div>
          ))}
        </div>
        {/* Hot leads row */}
        <div className="flex items-center gap-1.5">
          <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.18)" }}>Hot leads</span>
          {["94", "87", "81", "79"].map((score) => (
            <div key={score} className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(201,243,29,0.08)", border: "1px solid rgba(201,243,29,0.14)" }}>
              <span className="text-[6px] font-black" style={{ color: "#c9f31d" }}>{score}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9f31d" }} />
            <span className="text-[5.5px]" style={{ color: "rgba(255,255,255,0.2)" }}>AI ranked</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Registry ──────────────────────────────────────────────── */

const SCREENS = [
  { id: "tryon",      label: "Virtual Try-On",   component: TryOnScreen },
  { id: "automation", label: "AI Automation",    component: AutomationScreen },
  { id: "avatar",     label: "AI Sales Avatar",  component: AvatarScreen },
  { id: "content",    label: "Content Studio",   component: ContentScreen },
  { id: "video",      label: "AI Video",         component: VideoScreen },
  { id: "crm",        label: "CRM Insights",     component: CRMScreen },
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

export default function AIMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const Screen = SCREENS[idx].component;

  return (
    <div className="relative flex flex-col items-center justify-center py-8 select-none" style={{ minHeight: 440 }}>
      {/* Ambient glow — purple for AI */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{ width: 360, height: 300, top: "48%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse, rgba(147,51,234,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating badges */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: -6, top: 28 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(167,139,250,0.28)" }}>
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#a78bfa", boxShadow: "0 0 5px #a78bfa" }} />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>Multi</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>-Model</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -5]} style={{ left: -28, top: "32%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(201,243,29,0.2)" }}>
          <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>10×</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>faster</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: -6, bottom: 90 }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(201,243,29,0.2)", width: 128 }}>
          <motion.div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,243,29,0.12)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" size={9} color="#c9f31d" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>$2.4M</p>
            <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>AI generated</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: -8, top: 38 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>24/7</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>automated</span>
        </div>
      </FloatingBadge>

      {/* Dashboard window */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 316, position: "relative", zIndex: 10 }}
      >
        <div className="rounded-2xl overflow-hidden" style={{
          border: "1.5px solid rgba(255,255,255,0.1)",
          background: "#080A10",
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
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Ico d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" size={8} color="rgba(255,255,255,0.25)" />
                <span className="text-[7px] font-mono" style={{ color: "rgba(255,255,255,0.28)" }}>ai.lyqx.agency</span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span key={idx} className="text-[7px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                style={{ background: "rgba(147,51,234,0.12)", color: "rgba(167,139,250,0.9)", border: "1px solid rgba(147,51,234,0.25)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {SCREENS[idx].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Canvas */}
          <div className="relative overflow-hidden" style={{ height: 236 }}>
            <AnimatePresence mode="wait">
              <motion.div key={idx} className="absolute inset-0"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
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
            style={{ background: "rgba(147,51,234,0.08)", border: "1px solid rgba(147,51,234,0.2)", color: "rgba(167,139,250,0.8)" }}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.22 }}>
            {SCREENS[idx].label}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {SCREENS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className="rounded-full transition-all duration-300"
              style={{ width: i === idx ? 18 : 5, height: 5, background: i === idx ? "#a78bfa" : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
