import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — From Idea to Impact",
  description: "Explore LYQX's portfolio of digital products across real estate, fintech, social networking, EV, and retail. 40+ shipped products, real business results.",
  alternates: { canonical: "https://lyqx.agency/project/" },
};

const projects = [
  { title: "GIDY", category: "Retail E-Commerce", href: "/project/gidy", metric: "+40% dealer response time", img: "https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png", year: "2024" },
  { title: "LoveNest", category: "Social Networking", href: "/project/love-nest", metric: "Premium subscription model launched", img: "https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg", year: "2025" },
  { title: "Fetch Agent", category: "Real Estate", href: "/project/fetch-agent", metric: "3,000+ transactions facilitated", img: "https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png", year: "2025" },
  { title: "GrowingGifts", category: "Fintech", href: "/project/gworing-gifts", metric: "3,000+ digital gifts in 3 months", img: "https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg", year: "2024" },
  { title: "T-Platform", category: "Crypto & Stock", href: "/project/t-platfom", metric: "$5M+ revenue before acquisition", img: "https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png", year: "2022–2024" },
  { title: "EVEEVO", category: "EV Marketplace", href: "/project/eveevo", metric: "UK exclusive development partner", img: "https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg", year: "2025" },
];

const steps = [
  { num: "01", title: "Discovery & Research", desc: "We start by getting to know your business, your goals, and your target audience. Through in-depth research and analysis, we gather insights that inform every decision." },
  { num: "02", title: "Strategy & Planning", desc: "Based on our research, we develop a comprehensive strategy and detailed project plan. This includes setting clear goals, defining KPIs, and aligning the team." },
  { num: "03", title: "Design & Implementation", desc: "We design and build your product iteratively, delivering results and taking feedback at every stage. Research-backed design meets clean, scalable engineering." },
  { num: "04", title: "Launch & Support", desc: "We deploy your product and provide post-launch support to ensure everything runs smoothly. Your success after launch is part of our commitment." },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Our Projects</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
            From Idea to <span style={{ color: "#c9f31d" }}>Impact</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl">
            40+ digital products shipped. Real results, real clients, real business value.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.href} href={p.href} className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-all duration-300">
              <div className="relative h-56 overflow-hidden bg-[#1f1d1d]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-black/50 text-white/60 backdrop-blur-sm">{p.year}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{p.category}</p>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-inter-tight)" }}>{p.title}</h2>
                <p className="text-xs font-semibold mb-4" style={{ color: "#c9f31d" }}>{p.metric}</p>
                <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">View case study →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Work Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 max-w-md" style={{ fontFamily: "var(--font-inter-tight)" }}>
            How We Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl p-6 border border-white/10 bg-[#0f131a]">
                <p className="text-3xl font-bold mb-4" style={{ color: "#c9f31d", fontFamily: "var(--font-inter-tight)" }}>{s.num}</p>
                <h3 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-inter-tight)" }}>{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-inter-tight)" }}>
            Your Project Could Be <span style={{ color: "#c9f31d" }}>Next</span>
          </h2>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-full font-semibold text-black text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
