import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import Counter from "@/components/ui/Counter";
import FAQ from "@/components/ui/FAQ";
import PhoneAnimation from "@/components/ui/PhoneAnimation";
import TechStackCarousel from "@/components/ui/TechStackCarousel";

export const metadata: Metadata = {
  title: "LYQX — Mobile Design & Development Agency",
  description:
    "LYQX is a full-cycle digital agency specializing in mobile app development, web platforms, UX/UI design, and AI integration. 7+ years, 60+ products shipped.",
  openGraph: { url: "https://lyqx.agency/" },
  alternates: { canonical: "https://lyqx.agency/" },
};

/* ── Data ───────────────────────────────────────────────── */

const services = [
  { num: "01", title: "Mobile Development",  href: "/service/mobile-development", desc: "Native & cross-platform iOS and Android apps built for performance and scale." },
  { num: "02", title: "Web Development",     href: "/service/web-development",    desc: "Modern, high-performing websites and platforms coded with precision and purpose." },
  { num: "03", title: "UX/UI Design",        href: "/service/ux-ui-design",       desc: "User-centered interfaces that drive engagement and support business goals." },
  { num: "04", title: "Branding Identity",   href: "/service/branding-identity",  desc: "Bold, strategic visual identities that make your brand unforgettable." },
  { num: "05", title: "Backend",             href: "/service/backend",            desc: "Secure, scalable server-side architecture and API infrastructure." },
  { num: "06", title: "AI Technologies",     href: "/service/ai-technologies",    desc: "Machine learning, NLP, and computer vision applied where they matter most." },
];

const projects = [
  { title: "GIDY",         category: "Retail E-Commerce", href: "/project/gidy",         metric: "+40% dealer response",    img: "https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png" },
  { title: "LoveNest",     category: "Social Networking", href: "/project/love-nest",    metric: "Subscription model live",  img: "https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg" },
  { title: "Fetch Agent",  category: "Real Estate",       href: "/project/fetch-agent",  metric: "3,000+ transactions",      img: "https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png" },
  { title: "GrowingGifts", category: "Fintech",           href: "/project/gworing-gifts",metric: "3,000 gifts / 3 months",   img: "https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg" },
  { title: "T-Platform",   category: "Crypto & Stock",    href: "/project/t-platfom",    metric: "$5M+ before acquisition",  img: "https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png" },
  { title: "EVEEVO",       category: "EV Marketplace",    href: "/project/eveevo",       metric: "UK exclusive partner",     img: "https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg" },
  { title: "NovaPay",      category: "Fintech",           href: "/project/nova-pay",     metric: "5 markets shipped",        img: "https://framerusercontent.com/images/cZ2AAxY440gMvcDCp6zKcQW8s4.jpg" },
  { title: "Vitaflow",     category: "Health & Wellness", href: "/project/vitaflow",     metric: "10k users in 60 days",     img: "https://framerusercontent.com/images/uDDaBqyNgExBJhcYGlDGUzBDIg.webp" },
];

const industries = [
  { num: "01", title: "Real Estate",         desc: "Efficient, user-friendly platforms that simplify property search, sales, and management." },
  { num: "02", title: "Crypto & Stock",      desc: "Secure, high-performance platforms for trading, analytics, and portfolio management." },
  { num: "03", title: "Fintech",             desc: "Robust, compliant solutions that optimize financial services and elevate user trust." },
  { num: "04", title: "Social Networking",   desc: "Engaging, scalable platforms that foster meaningful connections and active communities." },
  { num: "05", title: "Retail & E-Commerce", desc: "Conversion-focused solutions that enhance shopping experiences and drive sales." },
  { num: "06", title: "Health & Wellness",   desc: "Digital health tools and wellness apps that put users in control of their wellbeing." },
];

const testimonials = [
  { name: "Amelia C.",  role: "Founder",      text: "LYQX instantly got what we were trying to achieve and delivered a sleek, intuitive design that exceeded expectations." },
  { name: "Daniel B.",  role: "CEO",           text: "Fast, professional, and incredibly detail-oriented. LYQX is the kind of team you want building your product." },
  { name: "Elena R.",   role: "Product Lead",  text: "Their UX thinking saved us months of iteration. They don't just build — they think through the whole product." },
  { name: "Liam M.",    role: "CTO",           text: "The backend architecture they delivered is solid. We scaled from 0 to 50,000 users with zero infrastructure issues." },
  { name: "Rachel S.",  role: "COO",           text: "Working with LYQX felt like having a senior product team in-house. Highly recommend for any serious digital product." },
  { name: "Thomas N.",  role: "Founder",       text: "They turned a complex fintech idea into a working, compliant product in under 6 months. Exceptional execution." },
];

const tools = [
  "Figma", "Flutter", "React", "Node.js", "Firebase", "Next.js",
  "Swift", "Kotlin", "TypeScript", "Python", "AWS", "Go",
  "Framer", "TailwindCSS", "GraphQL", "Supabase",
];

const clientLogos = [
  "https://framerusercontent.com/images/8VBYVyfi5d478rI30BN2REGeBT8.png",
  "https://framerusercontent.com/images/9cBC9Su4ThwMM3RjQfoCFWJK9dc.png",
  "https://framerusercontent.com/images/9xUkUQhfvhnwOBQkHGQi7k12Aw.png",
  "https://framerusercontent.com/images/LYt5VTzANJNq4gfgTFXXPYL5z4w.png",
  "https://framerusercontent.com/images/PBGdmNxMkzl2tOHeBVeaAzMF4l0.png",
  "https://framerusercontent.com/images/TOdR6nyZmPwcG13jnOyjyVW59EI.png",
  "https://framerusercontent.com/images/YA8XzygH7uYlAWgezRkoV7pwM.png",
  "https://framerusercontent.com/images/hhxtQhE3LysqMPgdCbxF8aY4yjY.png",
  "https://framerusercontent.com/images/m0vDLETB4aupua3JqwelNZ3g.png",
  "https://framerusercontent.com/images/oDiWOldZZe7bLjLgSf46IobbY.png",
  "https://framerusercontent.com/images/qWMbhzTIrgEnOCKYyyJgSA5j0.png",
  "https://framerusercontent.com/images/unzL5b6c4AhfVRbqLLeIc6fo2D8.png",
];

const process = [
  { num: "01", title: "Discovery",  desc: "Deep dive into your business goals, users, and market. We ask the right questions before writing a single line of code." },
  { num: "02", title: "Strategy",   desc: "We map out the full product journey — architecture, design direction, milestones, and KPIs — before building starts." },
  { num: "03", title: "Build",      desc: "Iterative design and engineering sprints. You see progress every week and give feedback at each stage." },
  { num: "04", title: "Launch",     desc: "We deploy your product and stay close post-launch — monitoring, iterating, and ensuring your product succeeds." },
];

const globalReach = [
  { flag: "🇺🇸", country: "USA"       },
  { flag: "🇬🇧", country: "UK"        },
  { flag: "🇦🇺", country: "Australia" },
  { flag: "🇫🇷", country: "France"    },
  { flag: "🇮🇱", country: "Israel"    },
  { flag: "🇨🇦", country: "Canada"    },
  { flag: "🇪🇺", country: "Europe"    },
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
        <div className="relative z-10 w-full px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start pt-32 pb-28">

          {/* LEFT */}
          <div>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass">
                <span
                  className="w-2 h-2 rounded-full bg-[#c9f31d] shrink-0"
                  style={{ animation: "glow-pulse 2.5s ease-in-out infinite" }}
                />
                <span className="text-[10px] md:text-xs text-white/50 tracking-wide whitespace-nowrap">
                  Your Partner in Turning Ideas into Market-Ready Products
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
                LYQX designs, builds, automates, and launches intelligent
                systems that scale with you.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.24}>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="btn-lime flex items-center gap-3 px-7 py-3.5 text-sm tracking-widest"
                >
                  GET A QUOTE
                  <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center text-xs">↗</span>
                </Link>

                <Link
                  href="/project"
                  className="glass flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/60 hover:text-white transition-colors duration-250"
                >
                  View Projects
                  <span style={{ color: "#c9f31d" }}>→</span>
                </Link>

                <div className="glass flex items-center gap-3 px-4 py-2.5 rounded-xl">
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] font-medium tracking-widest uppercase text-white/30">Reviewed on</span>
                    <span className="text-sm font-bold text-white mt-0.5">Clutch</span>
                  </div>
                  <div className="flex gap-0.5 text-[#f6863a] text-xs" aria-label="5 star rating">★★★★★</div>
                  <span className="text-[10px] text-white/35">15 Reviews</span>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.33}>
              <div
                className="flex gap-10 mt-12 pt-10 border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                {[
                  { val: 7,   suffix: "+", label: "Years experience"    },
                  { val: 60,  suffix: "+", label: "Products shipped"    },
                  { val: 100, suffix: "%", label: "Client satisfaction" },
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
      <div style={{ background: "var(--dark-2)" }}>
        {/* Label + separator */}
        <div className="flex items-center gap-6 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] pt-10 pb-8">
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
          <div className="flex gap-16 animate-marquee" style={{ width: "max-content" }}>
            {[...clientLogos, ...clientLogos].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                role="presentation"
                className="h-7 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
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
              <p className="text-sm leading-relaxed max-w-sm lg:ml-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
                End-to-end digital solutions across every layer of the product —
                design, code, brand, and intelligence.
              </p>
              <Link href="/contact" className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-base mt-6">
                Start a Project ↗
              </Link>
            </AnimateIn>
          </div>

          <div>
            {services.map((s, i) => (
              <AnimateIn key={s.href} delay={i * 0.05}>
                <Link href={s.href} className="service-row group flex items-center justify-between gap-6 py-6 px-2 cursor-pointer">
                  <div className="flex items-center gap-6 min-w-0">
                    <span className="text-xs font-bold shrink-0" style={{ color: "rgba(201,243,29,0.4)", fontFamily: "var(--font-archivo)" }}>
                      {s.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black group-hover:text-[#c9f31d] transition-colors duration-300" style={{ fontFamily: "var(--font-archivo)" }}>
                      {s.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <p className="text-sm hidden md:block max-w-xs text-right leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                      {s.desc}
                    </p>
                    <span className="text-white/20 group-hover:text-[#c9f31d] transition-colors duration-300 text-xl">→</span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROJECTS — BENTO GRID
      ═══════════════════════════════════════════════════ */}
      <section id="projects" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark-2)" }}>
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
            <Link href="/project" className="text-sm font-semibold text-white/35 hover:text-white transition-colors duration-200 shrink-0">
              All Projects →
            </Link>
          </div>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-4">

          {/* Featured — EVEEVO */}
          <AnimateIn>
            <Link
              href={projects[5].href}
              className="group block rounded-3xl overflow-hidden relative card-glow"
              style={{ border: "1px solid var(--border)", background: "var(--card)", height: "100%", minHeight: 480 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projects[5].img}
                alt={projects[5].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ position: "absolute", inset: 0 }}
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }} />
              <div className="absolute top-5 left-5">
                <span className="tag">{projects[5].category}</span>
              </div>
              <div className="absolute bottom-7 left-7">
                <h3 className="text-3xl font-black mb-1" style={{ fontFamily: "var(--font-archivo)" }}>{projects[5].title}</h3>
                <p className="text-sm font-semibold" style={{ color: "#c9f31d" }}>{projects[5].metric}</p>
                <p className="text-xs text-white/40 group-hover:text-white/70 transition-colors mt-2">View case study →</p>
              </div>
            </Link>
          </AnimateIn>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {[projects[4], projects[0], projects[1], projects[2]].map((p, i) => (
              <AnimateIn key={p.href} delay={i * 0.07}>
                <Link
                  href={p.href}
                  className="group block rounded-2xl overflow-hidden relative card-glow"
                  style={{ border: "1px solid var(--border)", background: "var(--card)", aspectRatio: "1 / 1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="tag text-[9px]">{p.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-sm font-black mb-0.5" style={{ fontFamily: "var(--font-archivo)" }}>{p.title}</h3>
                    <p className="text-[10px] font-semibold" style={{ color: "#c9f31d" }}>{p.metric}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Circular "All Projects" button */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center gap-6 mt-14">
            {/* All Projects */}
            <Link
              href="/project"
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
          PROCESS
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Process</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="font-black display-md mb-16" style={{ fontFamily: "var(--font-archivo)" }}>
              How We
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Get It Done</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.08}>
                <div className="rounded-2xl p-7 border-gradient h-full" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
                  <p className="text-5xl font-black mb-5" style={{ color: "#c9f31d", opacity: 0.22, fontFamily: "var(--font-archivo)", lineHeight: 1 }}>
                    {step.num}
                  </p>
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-archivo)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INDUSTRIES
      ═══════════════════════════════════════════════════ */}
      <section id="industries" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark-2)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Industries</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="font-black display-md mb-16" style={{ fontFamily: "var(--font-archivo)" }}>
              Sectors We
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Build For</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.num} delay={i * 0.06}>
                <div className="group rounded-2xl p-7 card-glow h-full" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
                  <p className="text-5xl font-black mb-5" style={{ color: "#c9f31d", opacity: 0.18, fontFamily: "var(--font-archivo)", lineHeight: 1 }}>
                    {ind.num}
                  </p>
                  <h3 className="text-lg font-black mb-3 group-hover:text-[#c9f31d] transition-colors duration-300" style={{ fontFamily: "var(--font-archivo)" }}>
                    {ind.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{ind.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT / STATS
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-4 inline-block">About LYQX</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="font-black display-md mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
              Launch. Yield.
              <br />
              Quality.{" "}
              <span style={{ color: "#c9f31d" }}>Xperience.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "rgba(255,255,255,0.45)" }}>
              With 7+ years and 60+ projects, we deliver more than digital products —
              we solve real business needs. LYQX designs, builds, automates, and launches
              intelligent systems that scale with you.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { val: 7,  suffix: "+", label: "Years Experience"  },
              { val: 60, suffix: "+", label: "Products Shipped"  },
              { val: 6,  suffix: "",  label: "Core Services"     },
              { val: 7,  suffix: "",  label: "Industries Served" },
            ].map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.07}>
                <div className="rounded-2xl p-6 border-gradient" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
                  <p className="text-4xl font-black leading-none" style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}>
                    <Counter to={s.val} suffix={s.suffix} />
                  </p>
                  <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.42)" }}>{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="rounded-2xl p-8 md:p-10" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
              <span className="tag mb-4 inline-block">No Borders</span>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "var(--font-archivo)" }}>
                Global Reach, Local Care
              </h3>
              <p className="mb-7 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                We work with clients from around the globe. Our solutions know no geographic limits.
              </p>
              <div className="flex flex-wrap gap-3">
                {globalReach.map((g) => (
                  <div key={g.country} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <span>{g.flag}</span>
                    <span>{g.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TECH STACK CAROUSEL
      ═══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--dark-2)" }}>
        <div className="px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] mb-12">
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
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark)" }}>
        <div className="w-full">
          <AnimateIn>
            <span className="tag mb-4 inline-block">Testimonials</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="font-black display-md mb-16" style={{ fontFamily: "var(--font-archivo)" }}>
              What Clients
              <br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Say About LYQX</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.06}>
                <div className="rounded-2xl p-6 h-full flex flex-col card-glow" style={{ border: "1px solid var(--border)", background: "var(--card)" }}>
                  <p className="quote-mark mb-3">&ldquo;</p>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(255,255,255,0.62)" }}>{t.text}</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-black shrink-0" style={{ background: "#c9f31d", fontFamily: "var(--font-archivo)" }}>
                      {t.name[0]}
                    </div>
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
      <section className="py-28 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]" style={{ background: "var(--dark-2)" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-36">
            <AnimateIn>
              <span className="tag mb-4 inline-block">FAQ</span>
            </AnimateIn>
            <AnimateIn delay={0.07}>
              <h2 className="font-black display-md mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
                Frequently
                <br />
                <span style={{ color: "rgba(255,255,255,0.28)" }}>Asked Questions</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.13}>
              <p className="leading-relaxed mb-8 text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>
                Have something else in mind? We&apos;re happy to answer any questions about your project.
              </p>
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
      <section className="relative py-32 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] overflow-hidden text-center" style={{ background: "var(--dark)" }}>
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
          <AnimateIn delay={0.08}>
            <h2 className="font-black display-lg mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Ready to Build
              <br />
              Something{" "}
              <span style={{ color: "#c9f31d" }}>Great?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-lg mb-12 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.42)" }}>
              Tell us about your project and we&apos;ll get back to you within 24 hours.
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
                Find Us on LinkedIn
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
