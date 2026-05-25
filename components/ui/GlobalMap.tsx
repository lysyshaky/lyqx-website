"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Graticule, Marker, Sphere } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const pins = [
  // USA – spread across cities
  { id: 1,  name: "GIDY",            country: "USA",          coords: [-74.0,  40.7] as [number, number] },
  { id: 2,  name: "Growing Gifts",   country: "USA",          coords: [-87.6,  41.8] as [number, number] },
  { id: 3,  name: "Shop Society",    country: "USA",          coords: [-118.2, 34.1] as [number, number] },
  { id: 4,  name: "Super Source",    country: "USA",          coords: [-122.4, 37.8] as [number, number] },
  { id: 5,  name: "Eadnedback",      country: "USA",          coords: [-80.2,  25.8] as [number, number] },
  { id: 6,  name: "IWriteOffers",    country: "USA",          coords: [-77.0,  38.9] as [number, number] },
  { id: 7,  name: "Fetch Agent",     country: "USA",          coords: [-97.0,  32.8] as [number, number] },
  { id: 8,  name: "Gate Going",      country: "USA",          coords: [-122.3, 47.6] as [number, number] },
  { id: 9,  name: "Remhai",          country: "USA",          coords: [-71.0,  42.4] as [number, number] },
  // United Kingdom
  { id: 10, name: "EVEEVO",          country: "UK",           coords: [-0.1,   51.5] as [number, number] },
  { id: 11, name: "Communitee",      country: "UK",           coords: [-2.2,   53.5] as [number, number] },
  { id: 12, name: "Meowtion",        country: "UK",           coords: [-3.2,   55.9] as [number, number] },
  // France
  { id: 13, name: "Love Nest",       country: "France",       coords: [2.3,    48.9] as [number, number] },
  // Australia
  { id: 14, name: "Golfer",          country: "Australia",    coords: [151.2, -33.9] as [number, number] },
  // Israel
  { id: 15, name: "System Invoicer", country: "Israel",       coords: [34.8,   32.1] as [number, number] },
  { id: 16, name: "TipMe",           country: "Israel",       coords: [35.4,   31.6] as [number, number] },
  // Austria
  { id: 17, name: "Crypto Wallet",   country: "Austria",      coords: [16.4,   48.2] as [number, number] },
  // Netherlands
  { id: 18, name: "Kurio",           country: "Netherlands",  coords: [4.9,    52.4] as [number, number] },
  // Sweden
  { id: 19, name: "Paid",            country: "Sweden",       coords: [18.1,   59.3] as [number, number] },
  // Puerto Rico
  { id: 20, name: "HomeMash",        country: "Puerto Rico",  coords: [-66.1,  18.2] as [number, number] },
  // Estonia
  { id: 21, name: "EWAND",           country: "Estonia",      coords: [24.7,   59.4] as [number, number] },
  // Switzerland
  { id: 22, name: "Yonder",          country: "Switzerland",  coords: [8.5,    47.4] as [number, number] },
  // Spain
  { id: 23, name: "Tonpotezen",      country: "Spain",        coords: [-3.7,   40.4] as [number, number] },
  // Ukraine
  { id: 24, name: "Alvi Beauty",     country: "Ukraine",      coords: [30.5,   50.4] as [number, number] },
  { id: 25, name: "Intilica AI",     country: "Ukraine",      coords: [24.0,   49.8] as [number, number] },
  // Canada
  { id: 26, name: "Wahoo Predict",   country: "Canada",       coords: [-79.4,  43.7] as [number, number] },
  // Poland
  { id: 27, name: "Laud",            country: "Poland",       coords: [21.0,   52.2] as [number, number] },
  { id: 28, name: "Relaxia",         country: "Poland",       coords: [20.0,   50.1] as [number, number] },
  // Germany
  { id: 29, name: "Sign Spot",       country: "Germany",      coords: [13.4,   52.5] as [number, number] },
  // UAE
  { id: 30, name: "Railway",         country: "UAE",          coords: [55.3,   25.2] as [number, number] },
  // Singapore
  { id: 31, name: "Taximate",        country: "Singapore",    coords: [103.8,   1.4] as [number, number] },
];

export default function GlobalMap() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = pins.find((p) => p.id === hovered);

  return (
    <section
      className="py-16 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] overflow-hidden relative"
      style={{ background: "var(--dark)" }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(201,243,29,0.045) 0%, transparent 65%)",
        }}
      />

      {/* ── Header ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="tag mb-3 inline-block">Global Reach</span>
          <h2
            className="font-black leading-none"
            style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our Global<br /><span style={{ color: "rgba(255,255,255,0.28)" }}>Partnerships</span>
          </h2>
        </div>
        <div className="flex items-center gap-6 md:gap-8 shrink-0">
          <div className="text-center">
            <p className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>40+</p>
            <p className="text-[10px] tracking-[0.18em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Clients</p>
          </div>
          <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="text-center">
            <p className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-archivo)" }}>20+</p>
            <p className="text-[10px] tracking-[0.18em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Countries</p>
          </div>
          <div className="w-px h-10 hidden md:block" style={{ background: "rgba(255,255,255,0.08)" }} />
          <p className="hidden md:block text-white/40 text-sm max-w-[200px] leading-relaxed">
            Top-tier companies worldwide trust LYQX to build their products.
          </p>
        </div>
      </div>

      {/* ── Map ────────────────────────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#03060E" }}
      >
        {/* Left / right edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: "linear-gradient(to right, #03060E, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{ background: "linear-gradient(to left, #03060E, transparent)" }}
        />
        {/* Top / bottom edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-10 z-10"
          style={{ background: "linear-gradient(to bottom, #03060E, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-10 h-10 z-10"
          style={{ background: "linear-gradient(to top, #03060E, transparent)" }}
        />

        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 142, center: [12, 10] }}
          width={960}
          height={340}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Sphere id="rsm-sphere" fill="transparent" stroke="rgba(201,243,29,0.05)" strokeWidth={0.6} />
          <Graticule stroke="rgba(255,255,255,0.022)" strokeWidth={0.35} />

          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(255,255,255,0.065)"
                  stroke="rgba(255,255,255,0.025)"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none", fill: "rgba(201,243,29,0.11)" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {pins.map((pin) => {
            const on = hovered === pin.id;
            return (
              <Marker
                key={pin.id}
                coordinates={pin.coords}
                onMouseEnter={() => setHovered(pin.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Pulse ring */}
                <circle
                  r={10}
                  fill="none"
                  stroke={on ? "rgba(201,243,29,0.3)" : "rgba(201,243,29,0.15)"}
                  strokeWidth={0.8}
                  style={{ animation: "map-ring 2.2s ease-out infinite" }}
                />
                {/* Glow halo */}
                <circle
                  r={on ? 5.5 : 4}
                  fill={on ? "rgba(201,243,29,0.2)" : "rgba(201,243,29,0.12)"}
                  style={{ transition: "r 0.15s ease" }}
                />
                {/* Core dot */}
                <circle
                  r={on ? 3.5 : 2.5}
                  fill="#c9f31d"
                  style={{
                    cursor: "pointer",
                    transition: "r 0.15s ease",
                    filter: on
                      ? "drop-shadow(0 0 5px rgba(201,243,29,1))"
                      : "drop-shadow(0 0 2px rgba(201,243,29,0.7))",
                  }}
                />

                {/* Tooltip */}
                {on && (
                  <foreignObject
                    x={-70}
                    y={-46}
                    width={140}
                    height={40}
                    style={{ overflow: "visible", pointerEvents: "none" }}
                  >
                    <div
                      style={{
                        background: "rgba(8,10,20,0.95)",
                        border: "1px solid rgba(201,243,29,0.3)",
                        borderRadius: 7,
                        padding: "5px 10px",
                        textAlign: "center",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.8), 0 0 10px rgba(201,243,29,0.06)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p style={{ color: "#fff", fontSize: 10.5, fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                        {pin.name}
                      </p>
                      <p style={{ color: "rgba(201,243,29,0.75)", fontSize: 9.5, lineHeight: 1.3, margin: 0 }}>
                        {pin.country}
                      </p>
                    </div>
                  </foreignObject>
                )}
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            background: "rgba(3,6,14,0.9)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#c9f31d]"
              style={{ boxShadow: "0 0 5px rgba(201,243,29,0.9)", animation: "glow-pulse 2.5s ease-in-out infinite" }}
            />
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              {active ? active.name : "Client locations"}
            </span>
          </div>
          {active && (
            <span className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(201,243,29,0.65)" }}>
              {active.country}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
