"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { label: "Mobile Development",  href: "/service/mobile-development" },
  { label: "Web Development",     href: "/service/web-development"    },
  { label: "UX/UI Design",        href: "/service/ux-ui-design"       },
  { label: "Branding & Identity", href: "/service/branding-identity"  },
  { label: "Backend",             href: "/service/backend"            },
  { label: "AI Technologies",     href: "/service/ai-technologies"    },
];

const industries = [
  { label: "Real Estate",       href: "/industry/real-estate"   },
  { label: "Crypto & Stock",    href: "/industry/crypto-stock"  },
  { label: "Fintech",           href: "/industry/fintech"       },
  { label: "Social Networking", href: "/industry/social"        },
  { label: "Retail & Ecommerce",href: "/industry/retail"        },
  { label: "AI & ML",           href: "/industry/ai-ml"         },
];

const company = [
  { label: "About",    href: "/about"    },
  { label: "Projects", href: "/projects" },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
];

const locations = [
  { city: "New York, USA",     tz: "America/New_York", flag: "🇺🇸" },
  { city: "London, UK",        tz: "Europe/London",    flag: "🇬🇧" },
  { city: "Lisbon, Portugal",  tz: "Europe/Lisbon",    flag: "🇵🇹" },
  { city: "Barcelona, Spain",  tz: "Europe/Madrid",    flag: "🇪🇸" },
  { city: "Berlin, Germany",   tz: "Europe/Berlin",    flag: "🇩🇪" },
  { city: "Warsaw, Poland",    tz: "Europe/Warsaw",    flag: "🇵🇱" },
  { city: "Dubai, UAE",        tz: "Asia/Dubai",       flag: "🇦🇪" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lyqx/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/lyqx",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net/lyqx",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M7.5 11.25c.83 0 1.5-.67 1.5-1.5S8.33 8.25 7.5 8.25H4.5v3h3zm.25 2.25H4.5V17h3.5c.97 0 1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75zM2 6h6.2C10.3 6 12 7.3 12 9.5c0 1.3-.6 2.2-1.5 2.7 1.3.4 2.1 1.5 2.1 2.9C12.6 17.5 10.8 19 8.5 19H2V6zm13.5 1.5h5v1.25h-5V7.5zm2.5 9c1.1 0 1.85-.55 2.1-1.5H22c-.4 2-2 3-4 3-2.75 0-4.5-1.85-4.5-4.5S15.25 9 18 9c2.9 0 4.5 2 4.5 5h-6.75c.1 1.35.9 2.5 2.25 2.5z" />
      </svg>
    ),
  },
  {
    label: "Contra",
    href: "https://contra.com/yurii_lysyshak/work",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M15.5 9a4 4 0 1 0 0 6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lyqx.solutions/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@lysyshaky",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/Lysyshaky",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lysyshaky",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
      </svg>
    ),
  },
];

function getTimeAndOffset(tz: string) {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: tz,
    hour12: false,
  });
  const offsetRaw = new Intl.DateTimeFormat("en", {
    timeZoneName: "shortOffset",
    timeZone: tz,
  })
    .formatToParts(now)
    .find((p) => p.type === "timeZoneName")?.value ?? "";
  return { time, offset: offsetRaw.replace("GMT", "UTC") };
}

type ClockEntry = { time: string; offset: string };

function LiveClocks() {
  const [clocks, setClocks] = useState<ClockEntry[]>([]);

  useEffect(() => {
    const update = () => setClocks(locations.map((loc) => getTimeAndOffset(loc.tz)));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden self-start"
      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(201,243,29,0.03)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "#c9f31d", boxShadow: "0 0 6px rgba(201,243,29,0.9)", animation: "glow-pulse 2.5s ease-in-out infinite" }}
        />
        <span className="text-[9px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
          Available Worldwide
        </span>
      </div>

      {locations.map((loc, i) => {
        const entry = clocks[i];
        return (
          <div
            key={loc.tz}
            className="flex items-center gap-3 px-4 py-3"
            style={{
              borderBottom: i < locations.length - 1 ? "1px solid rgba(255,255,255,0.04)" : undefined,
            }}
          >
            <span className="text-sm leading-none shrink-0 w-5 text-center">{loc.flag}</span>
            <span className="text-[12px] flex-1 font-medium" style={{ color: "rgba(255,255,255,0.58)" }}>
              {loc.city}
            </span>
            <span className="text-[11px] font-mono tabular-nums shrink-0" style={{ color: "rgba(255,255,255,0.55)" }}>
              {entry ? (
                <>{entry.time} <span style={{ color: "rgba(201,243,29,0.8)" }}>({entry.offset})</span></>
              ) : (
                <span style={{ color: "rgba(255,255,255,0.2)" }}>--:--</span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const navLink = "text-[13px] transition-colors duration-200 text-white/60 hover:text-white";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#070911" }}
    >
      {/* Top bar — logo + socials */}
      <div
        className="flex items-center justify-between py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Link href="/" className="shrink-0 flex flex-col leading-none gap-[3px] group" aria-label="LYQX — home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="text-[21px] font-black tracking-[0.20em] text-white uppercase transition-colors duration-200 group-hover:text-[#c9f31d]" style={{ fontFamily: "var(--font-archivo)" }}>
            LYQX
          </span>
        </Link>

        <div className="flex items-center gap-0.5">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.32)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Middle — nav + contact + clocks */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 py-12">

        {/* Left: nav + contact highlight */}
        <div className="flex flex-col gap-10">

          {/* Nav columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="text-[9px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-archivo)" }}>
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={navLink}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[9px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-archivo)" }}>
                Industries
              </h3>
              <ul className="space-y-2.5">
                {industries.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className={navLink}>{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[9px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-archivo)" }}>
                Company
              </h3>
              <ul className="space-y-2.5">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className={navLink}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact highlight strip */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl px-4 sm:px-5 py-4"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}
          >
            <div className="flex-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                Get in touch
              </p>
              <a
                href="mailto:info@lyqx.agency"
                className="text-base font-semibold text-white transition-colors duration-200 hover:text-[#c9f31d]"
              >
                info@lyqx.agency
              </a>
            </div>
            <a
              href="https://calendly.com/lyqx-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200"
              style={{
                background: "rgba(201,243,29,0.1)",
                border: "1px solid rgba(201,243,29,0.25)",
                color: "#c9f31d",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,243,29,0.18)";
                e.currentTarget.style.borderColor = "rgba(201,243,29,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(201,243,29,0.1)";
                e.currentTarget.style.borderColor = "rgba(201,243,29,0.25)";
              }}
            >
              Schedule a Call →
            </a>
          </div>
        </div>

        {/* Live clocks */}
        <LiveClocks />
      </div>

      {/* Large decorative LYQX — spread letters */}
      <Link
        href="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex justify-between items-end w-full overflow-hidden select-none footer-lyqx-wrap"
        style={{ marginTop: "8px", marginBottom: "12px" }}
        aria-label="Back to top"
      >
        {"LYQX".split("").map((letter, i) => (
          <span
            key={i}
            className="font-black uppercase leading-none block footer-lyqx-letter"
            style={{
              fontFamily: "var(--font-archivo)",
              fontSize: "clamp(4.5rem, 17vw, 15rem)",
              backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.22) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: `footer-lyqx-in 0.9s ${i * 0.08}s ease-out both`,
              transition: "background-image 0.35s ease",
            }}
          >
            {letter}
          </span>
        ))}
      </Link>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between gap-4 py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
          © {new Date().getFullYear()} LYQX Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          {[
            { label: "Privacy Policy",   href: "/privacy-policy"   },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookie Policy",    href: "/cookie-policy"    },
          ].map((item, i, arr) => (
            <div key={item.href} className="flex items-center gap-1">
              <Link
                href={item.href}
                className="text-[12px] px-2 transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <span className="w-px h-3" style={{ background: "rgba(255,255,255,0.1)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
