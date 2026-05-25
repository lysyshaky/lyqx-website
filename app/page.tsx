import AnimateIn from "@/components/ui/AnimateIn";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

// All heavy components deferred — framer-motion loads after initial paint
const PhoneAnimation = dynamic(() => import("@/components/ui/PhoneAnimation"), {
  loading: () => <div className="w-full max-w-[390px]" style={{ aspectRatio: "390/780" }} />,
});
const Counter = dynamic(() => import("@/components/ui/Counter"));
const TechStackCarousel = dynamic(() => import("@/components/ui/TechStackCarousel"));
const GlobalMap = dynamic(() => import("@/components/ui/GlobalMap"));
const FAQ = dynamic(() => import("@/components/ui/FAQ"));

export const metadata: Metadata = {
  title: "LYQX — Mobile Design & Development Solutions",
  description:
    "LYQX is a full-cycle digital agency specializing in mobile app development, web platforms, UX/UI design, and AI integration. 7+ years, 60+ products shipped.",
  openGraph: { url: "https://lyqx.agency/" },
  alternates: { canonical: "https://lyqx.agency/" },
};

/* ── Data ───────────────────────────────────────────────── */

const services = [
  { num: "01", title: "Mobile Development", href: "/service/mobile-development", desc: "Native & cross-platform iOS and Android apps built for performance and scale." },
  { num: "02", title: "Web Development", href: "/service/web-development", desc: "Modern, high-performing websites and platforms coded with precision and purpose." },
  { num: "03", title: "UX/UI Design", href: "/service/ux-ui-design", desc: "User-centered interfaces that drive engagement and support business goals." },
  { num: "04", title: "Branding Identity", href: "/service/branding-identity", desc: "Bold, strategic visual identities that make your brand unforgettable." },
  { num: "05", title: "Backend", href: "/service/backend", desc: "Secure, scalable server-side architecture and API infrastructure." },
  { num: "06", title: "AI Technologies", href: "/service/ai-technologies", desc: "Machine learning, NLP, and computer vision applied where they matter most." },
];

const projects = [
  { title: "GIDY", category: "Retail E-Commerce", href: "/project/gidy", metric: "+40% dealer response", img: "https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png" },
  { title: "LoveNest", category: "Social Networking", href: "/project/love-nest", metric: "Subscription model live", img: "https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg" },
  { title: "Fetch Agent", category: "Real Estate", href: "/project/fetch-agent", metric: "3,000+ transactions", img: "https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png" },
  { title: "GrowingGifts", category: "Fintech", href: "/project/gworing-gifts", metric: "3,000 gifts / 3 months", img: "https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg" },
  { title: "T-Platform", category: "Crypto & Stock", href: "/project/t-platfom", metric: "$5M+ before acquisition", img: "https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png" },
  { title: "EVEEVO", category: "EV Marketplace", href: "/project/eveevo", metric: "UK exclusive partner", img: "https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg" },
  { title: "NovaPay", category: "Fintech", href: "/project/nova-pay", metric: "5 markets shipped", img: "https://framerusercontent.com/images/cZ2AAxY440gMvcDCp6zKcQW8s4.jpg" },
  { title: "Vitaflow", category: "Health & Wellness", href: "/project/vitaflow", metric: "10k users in 60 days", img: "https://framerusercontent.com/images/uDDaBqyNgExBJhcYGlDGUzBDIg.webp" },
];

const industries = [
  { num: "01", title: "Real Estate", desc: "We will help you build efficient, user-friendly platforms that simplify property search, sales, and management.", img: "https://framerusercontent.com/images/TiHHxu9z7D37u1XfYOdxHYCwo.png" },
  { num: "02", title: "Crypto & Stock", desc: "We create secure, high-performance platforms for trading, analytics, and portfolio management.", img: "https://framerusercontent.com/images/bAFsVd4fNkiiN2ARV4NMzM9RY.png" },
  { num: "03", title: "Fintech", desc: "We deliver robust, compliant solutions that optimize financial services and elevate user trust.", img: "https://framerusercontent.com/images/p3upMt6LUkdSlNvNkaXBMKHI6gY.png" },
  { num: "04", title: "Social Networking", desc: "We craft engaging, scalable platforms that foster meaningful connections and active communities.", img: "https://framerusercontent.com/images/KI1rgHt4ho4sYctNe2wuSIRnaA.png" },
  { num: "05", title: "Retail & E-Commerce", desc: "We build conversion-focused solutions that enhance shopping experiences and drive sales.", img: "https://framerusercontent.com/images/r0FXfEbKavQw0svOfkW4Xm9rP0.png" },
];

const testimonials = [
  { name: "Amelia C.", role: "Founder", avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "LYQX instantly got what we were trying to achieve and delivered a sleek, intuitive design that exceeded expectations." },
  { name: "Daniel B.", role: "CEO", avatar: "https://randomuser.me/api/portraits/men/32.jpg", text: "Fast, professional, and incredibly detail-oriented. LYQX is the kind of team you want building your product." },
  { name: "Elena R.", role: "Product Lead", avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "Their UX thinking saved us months of iteration. They don't just build — they think through the whole product." },
  { name: "Liam M.", role: "CTO", avatar: "https://randomuser.me/api/portraits/men/75.jpg", text: "The backend architecture they delivered is solid. We scaled from 0 to 50,000 users with zero infrastructure issues." },
  { name: "Rachel S.", role: "COO", avatar: "https://randomuser.me/api/portraits/women/25.jpg", text: "Working with LYQX felt like having a senior product team in-house. Highly recommend for any serious digital product." },
  { name: "Thomas N.", role: "Founder", avatar: "https://randomuser.me/api/portraits/men/55.jpg", text: "They turned a complex fintech idea into a working, compliant product in under 6 months. Exceptional execution." },
];

const tools = [
  "Figma", "Flutter", "React", "Node.js", "Firebase", "Next.js",
  "Swift", "Kotlin", "TypeScript", "Python", "AWS", "Go",
  "Framer", "TailwindCSS", "GraphQL", "Supabase",
];

const clientLogos: { src: string; invert?: boolean; dim?: boolean }[] = [
  { src: "https://framerusercontent.com/images/8VBYVyfi5d478rI30BN2REGeBT8.png" },
  { src: "https://framerusercontent.com/images/9cBC9Su4ThwMM3RjQfoCFWJK9dc.png" },
  { src: "https://framerusercontent.com/images/9xUkUQhfvhnwOBQkHGQi7k12Aw.png" },
  { src: "https://framerusercontent.com/images/LYt5VTzANJNq4gfgTFXXPYL5z4w.png" },
  { src: "https://framerusercontent.com/images/PBGdmNxMkzl2tOHeBVeaAzMF4l0.png" },
  { src: "https://framerusercontent.com/images/TOdR6nyZmPwcG13jnOyjyVW59EI.png" },
  { src: "https://framerusercontent.com/images/YA8XzygH7uYlAWgezRkoV7pwM.png" },
  { src: "https://framerusercontent.com/images/hhxtQhE3LysqMPgdCbxF8aY4yjY.png" },
  { src: "https://framerusercontent.com/images/m0vDLETB4aupua3JqwelNZ3g.png" },
  { src: "https://framerusercontent.com/images/oDiWOldZZe7bLjLgSf46IobbY.png" },
  { src: "https://framerusercontent.com/images/qWMbhzTIrgEnOCKYyyJgSA5j0.png" },
  { src: "https://framerusercontent.com/images/unzL5b6c4AhfVRbqLLeIc6fo2D8.png" },
  { src: "https://mkt-site-asset.crypto.com/assets/logo/crypto-com.svg", dim: true },
  { src: "/images/near-wordmark.svg", dim: true },
  { src: "https://shopsocietyapp.com/wp-content/uploads/2025/12/Logo-HD.png", invert: true },
  { src: "/images/kurio-wordmark.svg", dim: true },
  { src: "/images/lovenest-logo.svg", dim: true },
];

const process = [
  { num: "01", title: "Discovery", desc: "Deep dive into your business goals, users, and market. We ask the right questions before writing a single line of code." },
  { num: "02", title: "Strategy", desc: "We map out the full product journey — architecture, design direction, milestones, and KPIs — before building starts." },
  { num: "03", title: "Build", desc: "Iterative design and engineering sprints. You see progress every week and give feedback at each stage." },
  { num: "04", title: "Launch", desc: "We deploy your product and stay close post-launch — monitoring, iterating, and ensuring your product succeeds." },
];


/* ── Component ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--dark)" }}
      >
        {/* Background orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{
              width: 900, height: 900,
              left: "-15%", top: "50%", marginTop: -450,
              background: "radial-gradient(circle, rgba(41,68,10,0.85) 0%, rgba(15,25,5,0.4) 40%, transparent 70%)",
              filter: "blur(90px)",
              animation: "orb-1 18s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 700, height: 700,
              right: "-5%", top: "10%",
              background: "radial-gradient(circle, rgba(18,26,58,0.8) 0%, rgba(8,10,24,0.4) 45%, transparent 70%)",
              filter: "blur(90px)",
              animation: "orb-2 22s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 400, height: 400,
              left: "40%", bottom: "-5%",
              background: "radial-gradient(circle, rgba(30,50,12,0.55) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "orb-3 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start pt-32 pb-28">

          {/* LEFT */}
          <div>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass">
                <span
                  className="w-2 h-2 rounded-full bg-[#c9f31d] shrink-0"
                  style={{ animation: "glow-pulse 2.5s ease-in-out infinite" }}
                />
                <span className="text-[9px] md:text-xs text-white/50 tracking-wide whitespace-nowrap">
                  Your Partner for Market-Ready Products
                </span>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.07}>
              <h1
                className="font-black uppercase leading-none display-xl"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Mobilize
                <br />
                Your
                <br />
                <span className="relative inline-block">
                  Business
                  <span
                    className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                    style={{ width: "100%", background: "var(--lime)", opacity: 0.5 }}
                  />
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.16}>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md"
                style={{ color: "rgba(255,255,255,0.45)", marginTop: "2.75rem" }}
              >
                LYQX designs, builds, and launches intelligent systems that scale with you.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.24}>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <Link
                  href="/contact"
                  className="btn-lime flex items-center gap-3 px-7 py-3.5 text-sm tracking-widest"
                >
                  GET A QUOTE
                  <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center text-xs">↗</span>
                </Link>

                <Link
                  href="/projects"
                  className="glass flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/60 hover:text-white transition-colors duration-250"
                >
                  View Projects
                  <span style={{ color: "#c9f31d" }}>→</span>
                </Link>

                <a
                  href="https://clutch.co/profile/lyqx#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>Reviewed on</span>
                    <span className="text-base font-black text-white mt-0.5" style={{ fontFamily: "var(--font-archivo)" }}>Clutch</span>
                  </div>
                  <div className="w-px h-8 self-stretch" style={{ background: "rgba(255,255,255,0.12)" }} />
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex gap-0.5 text-[#f6863a]" style={{ fontSize: 14 }} aria-label="5 star rating">★★★★★</div>
                    <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.50)" }}>15 Reviews</span>
                  </div>
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.33}>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 pt-10 border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                {[
                  { val: 7, suffix: "+", label: "Years experience" },
                  { val: 60, suffix: "+", label: "Products shipped" },
                  { val: 7.5, suffix: "M+", label: "End users reached" },
                  { val: 25, suffix: "+", label: "Team members" },
                  { val: 98, suffix: "%", label: "Client satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-3xl font-black leading-none"
                      style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}
                    >
                      <Counter to={s.val} suffix={s.suffix} />
                    </p>
                    <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* RIGHT — phone animation */}
          <div className="hidden lg:flex items-start justify-end self-start">
            <PhoneAnimation className="w-full max-w-[390px]" />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--dark))" }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          CLIENT LOGO TICKER
      ═══════════════════════════════════════════════════ */}
      <div style={{ background: "var(--dark)" }}>
        {/* Label + separator */}
        <div className="flex items-center gap-6 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] pt-10 pb-8">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <p className="text-xs font-semibold tracking-[0.18em] uppercase shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>
            Trusted by 60+ top-tier companies
          </p>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Scrolling logos */}
        <div
          className="overflow-hidden pb-10"
          style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)",
          }}
        >
          <div className="flex gap-8 md:gap-16 animate-marquee" style={{ width: "max-content" }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt=""
                role="presentation"
                className="h-7 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
                style={
                  logo.invert
                    ? { filter: "grayscale(1) invert(1)", mixBlendMode: "lighten" }
                    : logo.dim
                      ? { filter: "brightness(0.55)" }
                      : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <AnimateIn>
                <span className="tag mb-4 inline-block">Expertise</span>
              </AnimateIn>
              <AnimateIn delay={0.07}>
                <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
                  What We
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.28)" }}>Build For You</span>
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.12} className="lg:text-right">
              <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-base">
                Start a Project ↗
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { s: services[0], gx: "20%", gy: "15%", icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" /></> },
              { s: services[1], gx: "80%", gy: "15%", icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></> },
              { s: services[2], gx: "50%", gy: "10%", icon: <><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></> },
              { s: services[3], gx: "20%", gy: "85%", icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></> },
              { s: services[4], gx: "80%", gy: "85%", icon: <><rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="20" height="4" rx="1" /><circle cx="6" cy="5" r="0.8" fill="currentColor" /><circle cx="6" cy="12" r="0.8" fill="currentColor" /><circle cx="6" cy="19" r="0.8" fill="currentColor" /></> },
              { s: services[5], gx: "50%", gy: "20%", icon: <><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z" /><path d="M8 12H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3" /></> },
            ] as { s: typeof services[0]; gx: string; gy: string; icon: React.ReactNode }[]).map(({ s, gx, gy, icon }, i) => (
              <AnimateIn key={s.href} delay={i * 0.07}>
                <Link
                  href={s.href}
                  className="svc-card"
                  style={{ "--gx": gx, "--gy": gy } as React.CSSProperties}
                >
                  {/* Icon — white default / lime active crossfade */}
                  <div className="svc-icon-wrap">
                    <div className="svc-icon-default">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <div className="svc-icon-active">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                  </div>

                  {/* Title + sliding arrow */}
                  <div className="flex items-center gap-2 mb-3" style={{ position: "relative", zIndex: 1 }}>
                    <span className="svc-card-title" style={{ fontFamily: "var(--font-archivo)" }}>{s.title}</span>
                    <svg className="svc-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)", position: "relative", zIndex: 1 }}>
                    {s.desc}
                  </p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROJECTS — BENTO GRID
      ═══════════════════════════════════════════════════ */}
      <section id="projects" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark-2)" }}>
        <AnimateIn>
          <span className="tag mb-4 inline-block">Selected Work</span>
        </AnimateIn>
        <AnimateIn delay={0.07}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
              Work That Speaks
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>For Itself</span>
            </h2>
            <Link href="/projects" className="flex items-center gap-1.5 text-sm font-semibold text-white/65 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-200 shrink-0">
              All Projects
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-4">

          {/* Featured — EVEEVO */}
          <AnimateIn className="h-full">
            <ProjectCard
              href={projects[5].href}
              img={projects[5].img}
              alt={projects[5].title}
              category={projects[5].category}
              title={projects[5].title}
              metric={projects[5].metric}
              featured
              className="rounded-3xl card-glow"
              style={{ border: "1px solid var(--border)", background: "var(--card)", height: "100%", minHeight: 480 }}
            />
          </AnimateIn>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {[projects[4], projects[0], projects[1], projects[2]].map((p, i) => (
              <AnimateIn key={p.href} delay={i * 0.07}>
                <ProjectCard
                  href={p.href}
                  img={p.img}
                  alt={p.title}
                  category={p.category}
                  title={p.title}
                  metric={p.metric}
                  className="rounded-2xl card-glow"
                  style={{ border: "1px solid var(--border)", background: "var(--card)", aspectRatio: "1 / 1" }}
                />
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Circular "All Projects" button */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center gap-6 mt-14">
            {/* All Projects */}
            <Link
              href="/projects"
              className="group relative flex flex-col items-center justify-center rounded-full overflow-hidden"
              style={{ width: 148, height: 148, border: "1px solid rgba(255,255,255,0.14)", background: "var(--card)" }}
            >
              <div className="absolute bottom-4 left-4 rounded-full transition-all duration-500 ease-in-out group-hover:scale-[12]" style={{ width: 24, height: 24, background: "#c9f31d" }} />
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-base font-bold text-white group-hover:text-black transition-colors duration-300">All Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white group-hover:stroke-black transition-colors duration-300">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>

          </div>
        </AnimateIn>
      </section>

      {/* ═══════════════════════════════════════════════════
          INDUSTRIES
      ═══════════════════════════════════════════════════ */}
      <section id="industries" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>

        {/* Header — title + description stacked */}
        <AnimateIn className="mb-4">
          <span className="tag mb-4 inline-block">Core Niches</span>
          <h2 className="font-black display-md mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
            INDUSTRIES
            <br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>We Build For</span>
          </h2>
        </AnimateIn>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-4">
          {industries.slice(0, 3).map((ind, i) => (
            <AnimateIn key={ind.num} delay={i * 0.07}>
              <div className="ind-card rounded-2xl relative" style={{ minHeight: 300 }}>
                {/* Text — top-left */}
                <div className="p-6 flex flex-col gap-2 relative z-10" style={{ maxWidth: "58%" }}>
                  <p className="text-xs font-semibold tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.32)" }}>{ind.num}</p>
                  <h3 className="text-2xl font-black leading-tight" style={{ fontFamily: "var(--font-archivo)", color: "#c9f31d" }}>{ind.title}</h3>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>{ind.desc}</p>
                </div>
                {/* Image — bottom-right, floating */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="ind-img absolute bottom-0 right-0"
                  style={{ width: "54%", height: "80%", objectFit: "contain", objectPosition: "bottom right" }}
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industries.slice(3).map((ind, i) => (
            <AnimateIn key={ind.num} delay={i * 0.07}>
              <div className="ind-card rounded-2xl relative" style={{ minHeight: 300 }}>
                <div className="p-6 flex flex-col gap-2 relative z-10" style={{ maxWidth: "55%" }}>
                  <p className="text-xs font-semibold tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.32)" }}>{ind.num}</p>
                  <h3 className="text-2xl font-black leading-tight" style={{ fontFamily: "var(--font-archivo)", color: "#c9f31d" }}>{ind.title}</h3>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>{ind.desc}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="ind-img absolute bottom-0 right-0"
                  style={{ width: "50%", height: "80%", objectFit: "contain", objectPosition: "bottom right" }}
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* LET'S TALK circular button */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center mt-14">
            <Link
              href="/contact"
              className="group relative flex flex-col items-center justify-center rounded-full overflow-hidden"
              style={{ width: 148, height: 148, border: "1px solid rgba(61,61,61,1)", background: "var(--card)" }}
            >
              <div className="absolute bottom-4 left-4 rounded-full transition-all duration-500 ease-in-out group-hover:scale-[12]" style={{ width: 24, height: 24, background: "#c9f31d" }} />
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-base font-bold text-white group-hover:text-black transition-colors duration-300" style={{ fontFamily: "var(--font-archivo)" }}>LET&apos;S TALK</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white group-hover:stroke-black transition-colors duration-300">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </div>
        </AnimateIn>

      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] overflow-hidden" style={{ background: "var(--dark-2)" }}>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Our Process</span>
            <h2 className="font-black display-md leading-none" style={{ fontFamily: "var(--font-archivo)" }}>
              How We
              <br />
              <span style={{ color: "rgba(255,255,255,0.25)" }}>Get It Done</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col items-end gap-4">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ border: "1px solid rgba(201,243,29,0.22)", background: "rgba(201,243,29,0.04)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9f31d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>Ready to launch your product?</span>
              </div>
              <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-base">
                Start a Project ↗
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* 4 arc steps */}
        <AnimateIn delay={0.12}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
            {([
              {
                num: "01", title: "Get in Touch",
                path: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>
              },
              {
                num: "02", title: "Discovery Call",
                path: <path d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              },
              {
                num: "03", title: "Free Estimate",
                path: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>
              },
              {
                num: "04", title: "Build Together",
                path: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></>
              },
            ] as { num: string; title: string; path: React.ReactNode }[]).map((step) => (
              <div key={step.num} className="flex flex-col items-center">

                {/* Semicircle arc */}
                <div className="relative w-full" style={{ paddingBottom: "54%" }}>
                  <svg viewBox="0 0 200 108" className="absolute inset-0 w-full h-full overflow-visible" fill="none">
                    <defs>
                      <radialGradient id={`glow-${step.num}`} cx="50%" cy="0%" r="75%" gradientUnits="objectBoundingBox">
                        <stop offset="0%" stopColor="#c9f31d" stopOpacity="0.11" />
                        <stop offset="55%" stopColor="#c9f31d" stopOpacity="0.03" />
                        <stop offset="100%" stopColor="#c9f31d" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    {/* Subtle glow fill */}
                    <path d="M 0 108 A 100 100 0 0 1 200 108" fill={`url(#glow-${step.num})`} />
                    {/* Dashed arc — edge to edge */}
                    <path d="M 0 108 A 100 100 0 0 1 200 108"
                      stroke="rgba(201,243,29,0.38)" strokeWidth="1.5"
                      strokeDasharray="6 5" strokeLinecap="round" />
                    {/* Junction dot at right endpoint */}
                    <circle cx="200" cy="108" r="5" fill="rgba(201,243,29,0.18)" />
                    <circle cx="200" cy="108" r="3" fill="#c9f31d" />
                    {/* Icon circle */}
                    <circle cx="100" cy="8" r="24" fill="#111d05" stroke="rgba(201,243,29,0.35)" strokeWidth="1.2" />
                  </svg>

                  {/* Icon — white, at arc crown */}
                  <div className="absolute flex items-center justify-center"
                    style={{ width: 48, height: 48, top: "7%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {step.path}
                    </svg>
                  </div>

                  {/* Number + title — centered inside the dome */}
                  <div className="absolute flex flex-col items-center text-center"
                    style={{ top: "57%", left: "50%", transform: "translate(-50%, -50%)", width: "72%" }}>
                    <p className="text-[10px] font-bold tracking-[0.22em] mb-2" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>{step.num}</p>
                    <h3 className="text-[15px] font-black text-white leading-snug" style={{ fontFamily: "var(--font-archivo)" }}>{step.title}</h3>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </AnimateIn>

      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] overflow-hidden relative" style={{ background: "var(--dark)" }}>

        {/* Wind streaks */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {([
            { top: "14%", width: "28%", delay: "0s", dur: "7s" },
            { top: "33%", width: "18%", delay: "2.1s", dur: "5.8s" },
            { top: "55%", width: "34%", delay: "0.8s", dur: "6.5s" },
            { top: "71%", width: "20%", delay: "3.5s", dur: "8.2s" },
            { top: "88%", width: "15%", delay: "1.6s", dur: "6s" },
          ] as { top: string; width: string; delay: string; dur: string }[]).map((w, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                top: w.top,
                left: `-${w.width}`,
                width: w.width,
                background: "linear-gradient(to right, transparent, rgba(201,243,29,0.18), rgba(201,243,29,0.08), transparent)",
                animation: `about-wind ${w.dur} ${w.delay} ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Lime glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 70% at 15% 50%, rgba(201,243,29,0.055) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-24 items-center">

          {/* LEFT — copy + features + CTA */}
          <div>
            <AnimateIn>
              <span className="tag mb-5 inline-block">About LYQX</span>
            </AnimateIn>

            <AnimateIn delay={0.07}>
              <h2 className="font-black display-md mb-10" style={{ fontFamily: "var(--font-archivo)" }}>
                We Build Products
                <br />
                <span style={{ color: "#c9f31d" }}>People Love.</span>
              </h2>
            </AnimateIn>

            {/* Feature rows */}
            <div className="flex flex-col gap-5 mb-12">
              {([
                { label: "Full-cycle delivery", detail: "Discovery, design, engineering, launch — one team from zero to live." },
                { label: "60+ products shipped", detail: "Across fintech, real estate, social, crypto, retail and more." },
                { label: "7M+ end users", detail: "Real software reaching real people, built to scale from day one." },
              ] as { label: string; detail: string }[]).map((f, i) => (
                <AnimateIn key={f.label} delay={0.14 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 mt-1 rounded-full"
                      style={{ width: 2, minHeight: 44, background: "linear-gradient(to bottom, #c9f31d, rgba(201,243,29,0.2))" }}
                    />
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{f.label}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{f.detail}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.36}>
              <Link href="/about" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-sm">
                About LYQX ↗
              </Link>
            </AnimateIn>
          </div>

          {/* RIGHT — Awards card */}
          <AnimateIn delay={0.18}>
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                border: "1px solid rgba(201,243,29,0.18)",
                background: "var(--card)",
              }}
            >
              {/* Green radial glow inside card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,243,29,0.09) 0%, transparent 65%)",
                }}
              />
              {/* Top lime accent line */}
              <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,243,29,0.5), transparent)" }} />

              <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <p className="text-[12px] font-semibold tracking-[0.22em] uppercase mt-6" style={{ color: "rgba(201,243,29,0.7)", marginBottom: "36px" }}>
                  Awards &amp; Recognition
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { src: "https://framerusercontent.com/images/qp4GDPte4nzsavdQf1OJVUqfyQ.png", alt: "Clutch", href: "https://clutch.co/profile/lyqx#reviews" },
                    { src: "https://framerusercontent.com/images/8dxpbJ12NtRhvzNp5ur0QSmM.png", alt: "GoodFirms", href: "https://goodfirms.co" },
                    { src: "https://framerusercontent.com/images/8tpKjbOHm1tyHRdiNAlAP39wAk.png", alt: "Upwork", href: "https://upwork.com" },
                    { src: "/images/top-app-badge.svg", alt: "Dribbble", href: "https://dribbble.com/lyqx" },
                  ].map((badge) => (
                    <a
                      key={badge.alt}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-2xl p-5 transition-all duration-300 hover:scale-[1.04]"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                        style={{ height: 84, width: "auto", objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          GLOBAL MAP
      ═══════════════════════════════════════════════════ */}
      <GlobalMap />


      {/* ═══════════════════════════════════════════════════
          TECH STACK CAROUSEL
      ═══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--dark-2)" }}>
        <div className="px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] mb-12">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Tech Stack</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
              Tools We Use
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>With Ease</span>
            </h2>
          </AnimateIn>
        </div>
        <TechStackCarousel />
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Testimonials</span>
          </AnimateIn>
          <AnimateIn delay={0.07} className="mb-16">
            <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)", lineHeight: 1.08 }}>
              What Clients Say
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>About LYQX</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.06}>
                <div className="rounded-2xl p-6 h-full flex flex-col card-glow" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
                  <p className="quote-mark mb-5">&ldquo;</p>
                  <p className="text-sm leading-relaxed flex-1 mb-8" style={{ color: "rgba(255,255,255,0.62)" }}>{t.text}</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                      style={{ border: "2px solid rgba(201,243,29,0.25)" }}
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px]" style={{ background: "var(--dark-2)" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-36">
            <AnimateIn>
              <span className="tag mb-4 inline-block">FAQ</span>
            </AnimateIn>
            <AnimateIn delay={0.07} className="mb-16">
              <h2 className="font-black display-md" style={{ fontFamily: "var(--font-archivo)" }}>
                Frequently{" "}
                <span style={{ color: "rgba(255,255,255,0.28)" }}>Asked Questions</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.13}>
              <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-6 py-3 text-sm">
                Ask Us Anything ↗
              </Link>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.16}>
            <FAQ />
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] overflow-hidden text-center" style={{ background: "var(--dark)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(25,45,8,0.5) 0%, transparent 70%)" }}
        />
        <p
          className="absolute inset-0 flex items-center justify-center font-black uppercase leading-none pointer-events-none select-none"
          style={{ fontSize: "22vw", color: "rgba(201,243,29,0.025)", fontFamily: "var(--font-archivo)" }}
          aria-hidden="true"
        >
          LYQX
        </p>
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn>
            <span className="tag mb-6 inline-block">Let&apos;s Build</span>
          </AnimateIn>
          <AnimateIn delay={0.08} className="mb-8">
            <h2 className="font-black display-lg" style={{ fontFamily: "var(--font-archivo)" }}>
              Ready to Build
              <br />
              Something{" "}
              <span style={{ color: "#c9f31d" }}>Great?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15} className="mb-20">
            <p className="text-base mx-auto" style={{ color: "rgba(255,255,255,0.42)" }}>
              Tell us about your project and we&apos;ll get back to you within{" "}
              <span
                className="font-semibold px-2 py-0.5 rounded-md"
                style={{
                  color: "#c9f31d",
                  background: "rgba(201,243,29,0.1)",
                  border: "1px solid rgba(201,243,29,0.2)",
                  letterSpacing: "0.01em",
                }}
              >
                24 hours
              </span>
              .
            </p>
          </AnimateIn>
          <AnimateIn delay={0.22}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-lime flex items-center gap-3 px-8 py-4 text-base">
                Get a Free Quote ↗
              </Link>
              <a
                href="https://www.linkedin.com/company/lyqx/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base hover:border-white/30 transition-colors"
              >
                Find Us on LinkedInW
              </a>с
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
