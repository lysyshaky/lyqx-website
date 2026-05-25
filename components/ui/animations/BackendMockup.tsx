"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ico = ({ d, size = 11, color = "currentColor" }: { d: string | string[]; size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);

const M = ({ c = "rgba(255,255,255,0.18)" }: { c?: string }) => (
  <span style={{ color: c, fontFamily: "monospace", fontSize: 7 }} />
);

/* ─── Screens ──────────────────────────────────────────────── */

function ApiScreen() {
  const endpoints = [
    { method: "GET",    path: "/api/users",         status: 200, ms: "42ms" },
    { method: "POST",   path: "/api/auth/login",     status: 200, ms: "68ms" },
    { method: "PUT",    path: "/api/products/:id",   status: 200, ms: "35ms" },
    { method: "GET",    path: "/api/analytics",      status: 200, ms: "91ms" },
    { method: "DELETE", path: "/api/sessions",       status: 204, ms: "28ms" },
    { method: "POST",   path: "/api/payments",       status: 201, ms: "112ms" },
  ];
  const methodColor: Record<string, string> = {
    GET: "#4e9eff", POST: "#c9f31d", PUT: "#ffd166", DELETE: "#ff6b6b",
  };
  return (
    <div className="flex flex-col h-full" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>API EXPLORER</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(78,158,255,0.12)", color: "#4e9eff", border: "1px solid rgba(78,158,255,0.2)" }}>REST · v2</span>
      </div>
      <div className="flex flex-col gap-0 flex-1 overflow-hidden px-2 py-1.5">
        {endpoints.map((e, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span className="shrink-0 text-[6.5px] font-black w-10 text-center rounded" style={{ color: methodColor[e.method], background: `${methodColor[e.method]}14`, padding: "1px 0" }}>{e.method}</span>
            <span className="flex-1 text-[7px] font-mono truncate" style={{ color: "rgba(255,255,255,0.5)" }}>{e.path}</span>
            <span className="text-[6px] font-semibold shrink-0" style={{ color: "rgba(100,220,120,0.8)" }}>{e.status}</span>
            <span className="text-[6px] shrink-0" style={{ color: "rgba(255,255,255,0.22)" }}>{e.ms}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-3 py-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.015)" }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
        <span className="text-[6.5px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>All endpoints healthy · 48ms avg</span>
      </div>
    </div>
  );
}

function DatabaseScreen() {
  const tables = [
    { name: "users",    fields: ["id", "email", "role", "created_at"], rows: "12.4k" },
    { name: "products", fields: ["id", "name", "price", "stock"],     rows: "3.2k" },
    { name: "orders",   fields: ["id", "user_id", "total", "status"], rows: "89.1k" },
  ];
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>DATABASE SCHEMA</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>PostgreSQL</span>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {tables.map((t, i) => (
          <div key={t.name} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center justify-between px-2.5 py-1.5" style={{ background: i === 0 ? "rgba(201,243,29,0.08)" : "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-1.5">
                <Ico d="M3 3h18v18H3zM3 9h18M9 21V9" size={8} color={i === 0 ? "#c9f31d" : "rgba(255,255,255,0.3)"} />
                <span className="text-[7.5px] font-black font-mono" style={{ color: i === 0 ? "#c9f31d" : "rgba(255,255,255,0.6)" }}>{t.name}</span>
              </div>
              <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.25)" }}>{t.rows} rows</span>
            </div>
            <div className="flex gap-1 px-2.5 py-1.5 flex-wrap">
              {t.fields.map((f) => (
                <span key={f} className="text-[6px] font-mono px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.38)" }}>{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricsScreen() {
  const bars = [65, 82, 48, 91, 73, 88, 55, 78, 94, 61, 85, 70];
  return (
    <div className="flex flex-col h-full p-3 gap-2.5" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>SERVER METRICS</p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 5px #4ade80" }} />
          <span className="text-[6px] font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Live</span>
        </div>
      </div>
      {/* Stat row */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Uptime", val: "99.9%", c: "#4ade80" },
          { label: "Req/s", val: "2.4k", c: "#c9f31d" },
          { label: "Latency", val: "48ms", c: "#4e9eff" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-2 flex flex-col" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</p>
            <p className="text-[12px] font-black leading-tight" style={{ color: s.c, fontFamily: "var(--font-archivo)" }}>{s.val}</p>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.25)" }}>Requests / 12h</p>
        <div className="flex-1 flex items-end gap-[3px] px-0.5">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === bars.length - 1 ? "#c9f31d" : `rgba(201,243,29,${0.15 + h / 400})` }} />
          ))}
        </div>
        <div className="flex justify-between">
          {["12h", "9h", "6h", "3h", "now"].map((t) => (
            <span key={t} className="text-[5.5px]" style={{ color: "rgba(255,255,255,0.18)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthScreen() {
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>AUTH SYSTEM</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(201,243,29,0.1)", color: "#c9f31d" }}>JWT · OAuth2</span>
      </div>
      {/* Flow diagram */}
      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        {[
          { label: "Client Request", icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v4m0 0H5m4 0h10M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 1-2-2V7", color: "#4e9eff", detail: "HTTPS + TLS 1.3" },
          { label: "Auth Gateway",   icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",                                                                    color: "#c9f31d", detail: "Rate limit · Validate" },
          { label: "JWT Verify",     icon: "M20 6L9 17l-5-5",                                                                                                 color: "#ffd166", detail: "Sign · Expire · Refresh" },
          { label: "Resource Access",icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",                                                                 color: "#4ade80", detail: "Role-based access" },
        ].map((step, i) => (
          <div key={step.label}>
            <div className="flex items-center gap-2.5 rounded-xl px-2.5 py-2" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${step.color}22` }}>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${step.color}15` }}>
                <Ico d={step.icon} size={9} color={step.color} />
              </div>
              <div className="flex-1">
                <p className="text-[7px] font-bold" style={{ color: "rgba(255,255,255,0.7)" }}>{step.label}</p>
                <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.28)" }}>{step.detail}</p>
              </div>
              <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${step.color}20` }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
              </span>
            </div>
            {i < 3 && <div className="flex justify-center"><div className="w-px h-2" style={{ background: "rgba(255,255,255,0.08)" }} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function InfraScreen() {
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>CLOUD INFRA</p>
        <span className="text-[6px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(78,158,255,0.12)", color: "#4e9eff" }}>AWS · GCP</span>
      </div>
      <div className="flex-1 relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 180" fill="none">
          {/* Connection lines */}
          {[[140,30,60,80],[140,30,140,80],[140,30,220,80],[60,80,60,130],[140,80,140,130],[220,80,220,130],[60,130,140,160],[220,130,140,160]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,243,29,0.12)" strokeWidth="1" strokeDasharray="3 3" />
          ))}
        </svg>
        {/* Load Balancer */}
        <div className="absolute flex flex-col items-center" style={{ left: "50%", top: 4, transform: "translateX(-50%)" }}>
          <div className="rounded-xl px-3 py-1.5 flex items-center gap-1.5" style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.25)" }}>
            <Ico d="M22 12H2M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" size={8} color="#c9f31d" />
            <span className="text-[6.5px] font-bold" style={{ color: "#c9f31d" }}>Load Balancer</span>
          </div>
        </div>
        {/* Services */}
        {[
          { label: "API Server", x: "10%",  top: 56, c: "#4e9eff" },
          { label: "Auth",       x: "42%",  top: 56, c: "#c9f31d" },
          { label: "Worker",     x: "74%",  top: 56, c: "#ffd166" },
        ].map((s) => (
          <div key={s.label} className="absolute flex flex-col items-center" style={{ left: s.x, top: s.top }}>
            <div className="rounded-lg px-2 py-1 flex items-center gap-1" style={{ background: `${s.c}12`, border: `1px solid ${s.c}25` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.c }} />
              <span className="text-[6px] font-semibold" style={{ color: s.c }}>{s.label}</span>
            </div>
          </div>
        ))}
        {/* DB + Cache */}
        {[
          { label: "PostgreSQL", x: "10%",  top: 108, c: "#a78bfa" },
          { label: "Redis",      x: "42%",  top: 108, c: "#fb923c" },
          { label: "S3 Storage", x: "74%",  top: 108, c: "#34d399" },
        ].map((s) => (
          <div key={s.label} className="absolute flex flex-col items-center" style={{ left: s.x, top: s.top }}>
            <div className="rounded-lg px-2 py-1 flex items-center gap-1" style={{ background: `${s.c}12`, border: `1px solid ${s.c}25` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.c }} />
              <span className="text-[6px] font-semibold" style={{ color: s.c }}>{s.label}</span>
            </div>
          </div>
        ))}
        {/* CDN */}
        <div className="absolute flex items-center justify-center" style={{ left: "50%", bottom: 0, transform: "translateX(-50%)" }}>
          <div className="rounded-lg px-3 py-1 flex items-center gap-1.5" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
            <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" size={8} color="#34d399" />
            <span className="text-[6.5px] font-bold" style={{ color: "#34d399" }}>CDN · Global Edge</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeployScreen() {
  const steps = [
    { label: "Code Push",    status: "done",    detail: "main branch · 3 commits" },
    { label: "CI Tests",     status: "done",    detail: "142 tests passed · 0 failed" },
    { label: "Docker Build", status: "done",    detail: "Image 284MB · cached layers" },
    { label: "Deploy Prod",  status: "active",  detail: "Rolling update 2/3 pods..." },
    { label: "Health Check", status: "pending", detail: "Waiting for deployment..." },
  ];
  const colors = { done: "#4ade80", active: "#c9f31d", pending: "rgba(255,255,255,0.2)" };
  return (
    <div className="flex flex-col h-full p-3 gap-2" style={{ background: "#080A10" }}>
      <div className="flex items-center justify-between">
        <p className="text-[7px] font-black tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-archivo)" }}>CI/CD PIPELINE</p>
        <div className="flex items-center gap-1">
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9f31d" }}
            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <span className="text-[6px] font-semibold" style={{ color: "#c9f31d" }}>Deploying</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2.5">
            {/* Step indicator */}
            <div className="flex flex-col items-center shrink-0" style={{ width: 16 }}>
              <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${colors[s.status as keyof typeof colors]}18`, border: `1px solid ${colors[s.status as keyof typeof colors]}40` }}>
                {s.status === "done" && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={colors.done} strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>}
                {s.status === "active" && <motion.div className="w-2 h-2 rounded-full" style={{ background: "#c9f31d" }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />}
                {s.status === "pending" && <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 mt-0.5" style={{ height: 8, background: s.status === "done" ? "rgba(74,222,128,0.25)" : "rgba(255,255,255,0.06)" }} />}
            </div>
            <div className="flex-1 rounded-xl px-2.5 py-1.5" style={{ background: s.status === "active" ? "rgba(201,243,29,0.05)" : "rgba(255,255,255,0.02)", border: `1px solid ${s.status === "active" ? "rgba(201,243,29,0.15)" : "rgba(255,255,255,0.05)"}` }}>
              <p className="text-[7px] font-bold" style={{ color: s.status === "pending" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)" }}>{s.label}</p>
              <p className="text-[6px]" style={{ color: "rgba(255,255,255,0.22)" }}>{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Registry ─────────────────────────────────────────────── */

const SCREENS = [
  { id: "api",      label: "API Explorer",    component: ApiScreen },
  { id: "db",       label: "Database Schema", component: DatabaseScreen },
  { id: "metrics",  label: "Server Metrics",  component: MetricsScreen },
  { id: "auth",     label: "Auth System",     component: AuthScreen },
  { id: "infra",    label: "Cloud Infra",     component: InfraScreen },
  { id: "deploy",   label: "CI/CD Pipeline",  component: DeployScreen },
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

export default function BackendMockup() {
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
        style={{ width: 360, height: 300, top: "48%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse, rgba(78,158,255,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating badges */}
      <FloatingBadge delay={1.0} floatY={[-5, 1]} style={{ right: -6, top: 28 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.09)" }}>
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80", boxShadow: "0 0 5px #4ade80" }} />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>99.9%</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>uptime</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.6} floatY={[0, -5]} style={{ left: -28, top: "32%" }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M22 12H2M12 2v20" size={9} color="#4e9eff" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>48ms</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>response</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.2} floatY={[-3, 4]} style={{ right: -6, bottom: 90 }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(74,222,128,0.25)", width: 130 }}>
          <motion.div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(74,222,128,0.15)" }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <Ico d="M20 6L9 17l-5-5" size={9} color="#4ade80" />
          </motion.div>
          <div>
            <p className="text-[8px] font-black text-white leading-none" style={{ fontFamily: "var(--font-archivo)" }}>Deployed</p>
            <p className="text-[6px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Zero downtime</p>
          </div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.8} floatY={[3, -3]} style={{ left: -8, top: 38 }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl" style={{ ...glass, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={9} color="#c9f31d" />
          <span className="text-[8px] font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>SSL</span>
          <span className="text-[7px]" style={{ color: "rgba(255,255,255,0.32)" }}>secured</span>
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
                <span className="text-[7px] font-mono" style={{ color: "rgba(255,255,255,0.28)" }}>api.lyqx.agency/v2</span>
              </div>
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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
