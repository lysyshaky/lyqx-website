import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LYQX — Mobile Design & Development Agency",
  description:
    "LYQX is a full-cycle digital agency specializing in mobile app development, web platforms, UX/UI design, and AI integration. 7+ years, 40+ products shipped.",
  openGraph: { url: "https://lyqx.agency/" },
  alternates: { canonical: "https://lyqx.agency/" },
};

const services = [
  { num: "01", title: "Mobile Development", href: "/service/mobile-development", desc: "Native & cross-platform iOS and Android apps built for performance and scale." },
  { num: "02", title: "Web Development", href: "/service/web-development", desc: "Modern, high-performing websites and platforms coded with precision and purpose." },
  { num: "03", title: "UX/UI Design", href: "/service/ux-ui-design", desc: "User-centered interfaces that drive engagement and support business goals." },
  { num: "04", title: "Branding Identity", href: "/service/branding-identity", desc: "Bold, strategic visual identities that make your brand unforgettable." },
  { num: "05", title: "Backend", href: "/service/backend", desc: "Secure, scalable server-side architecture and API infrastructure." },
  { num: "06", title: "AI Technologies", href: "/service/ai-technologies", desc: "Machine learning, NLP, and computer vision applied where they matter most." },
];

const projects = [
  { title: "GIDY", category: "Retail E-Commerce", href: "/project/gidy", metric: "+40% dealer response time", img: "https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png" },
  { title: "LoveNest", category: "Social Networking", href: "/project/love-nest", metric: "Premium subscription model launched", img: "https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg" },
  { title: "Fetch Agent", category: "Real Estate", href: "/project/fetch-agent", metric: "3,000+ transactions facilitated", img: "https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png" },
  { title: "GrowingGifts", category: "Fintech", href: "/project/gworing-gifts", metric: "3,000+ digital gifts sent in 3 months", img: "https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg" },
  { title: "T-Platform", category: "Crypto & Stock", href: "/project/t-platfom", metric: "$5M+ revenue before acquisition", img: "https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png" },
  { title: "EVEEVO", category: "EV Marketplace", href: "/project/eveevo", metric: "UK exclusive development partner", img: "https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg" },
];

const industries = ["Real Estate", "Retail & E-Commerce", "Social Networking", "Fintech", "Crypto & Stock", "AI Technologies", "EV / Clean Tech"];

const testimonials = [
  { name: "Amelia C.", role: "Founder", text: "LYQX delivered beyond expectations. The team understood our vision and translated it into a product our users love." },
  { name: "Daniel B.", role: "CEO", text: "Fast, professional, and incredibly detail-oriented. LYQX is the kind of team you want building your product." },
  { name: "Elena R.", role: "Product Lead", text: "Their UX thinking saved us months of iteration. They don't just build — they think through the whole product." },
  { name: "Liam M.", role: "CTO", text: "The backend architecture they delivered is solid. We scaled from 0 to 50,000 users with zero infrastructure issues." },
  { name: "Rachel S.", role: "COO", text: "Working with LYQX felt like having a senior product team in-house. Highly recommend for any serious digital product." },
  { name: "Thomas N.", role: "Founder", text: "They turned a complex fintech idea into a working, compliant product in under 6 months. Exceptional execution." },
];

const tools = ["Figma", "Flutter", "React", "Node.js", "Firebase", "Next.js", "Swift", "Kotlin", "TypeScript", "Python", "AWS", "Framer"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(201,243,29,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Your Partner in Turning Ideas into Market-Ready Products
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Mobilize your <span style={{ color: "#c9f31d" }}>Business</span><br />
              AI &amp; Software<br />
              that move numbers
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
              From idea to execution we Design, Develop and Innovate — mobile, web, and AI solutions tailored for you and your business.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact" className="px-7 py-3.5 rounded-full font-semibold text-black text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
                Get Quote
              </Link>
              <Link href="/project" className="px-7 py-3.5 rounded-full font-semibold text-white text-sm border border-white/20 hover:border-white/40 transition-colors">
                View Projects
              </Link>
            </div>
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[{ val: "7+", label: "Years of experience" }, { val: "40+", label: "Projects shipped" }, { val: "100%", label: "Client satisfaction" }].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold" style={{ color: "#c9f31d", fontFamily: "var(--font-inter-tight)" }}>{s.val}</p>
                  <p className="text-xs text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl opacity-15" style={{ background: "radial-gradient(circle, #c9f31d 0%, transparent 70%)" }} />
            <div className="relative w-64 h-[500px] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png" alt="LYQX mobile app showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/10 py-4 overflow-hidden bg-[#0a0a0a]">
        <div className="flex gap-12 animate-marquee" style={{ width: "max-content" }}>
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="text-sm font-medium text-white/25 uppercase tracking-widest px-2">{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Proven Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Launch. Yield. Quality. <span style={{ color: "#c9f31d" }}>Xperience.</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              With 7+ years and 40+ projects, we deliver more than digital products — we solve real business needs. LYQX designs, builds, automates, and launches intelligent systems that scale with you.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Our achievements speak for themselves: years of experience, global trust, and a portfolio of digital solutions that drive real business impact.
            </p>
            <Link href="/contact" className="inline-block mt-8 px-6 py-3 rounded-full text-sm font-semibold text-black hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
              Let&apos;s Talk
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ val: "7+", label: "Years of Experience" }, { val: "40+", label: "Products Shipped" }, { val: "6", label: "Core Services" }, { val: "5", label: "Industries Served" }].map((s) => (
              <div key={s.label} className="rounded-2xl p-6 border border-white/10 bg-[#0a0a0a]">
                <p className="text-4xl font-bold" style={{ color: "#c9f31d", fontFamily: "var(--font-inter-tight)" }}>{s.val}</p>
                <p className="text-sm text-white/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Expertise Solutions</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-sm" style={{ fontFamily: "var(--font-inter-tight)" }}>
              What We Build For You
            </h2>
            <Link href="/contact" className="shrink-0 px-6 py-3 rounded-full text-sm font-semibold text-black hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
              Start a Project
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl p-6 border border-white/10 bg-[#0f131a] hover:border-[#c9f31d]/30 transition-all duration-300">
                <p className="text-xs font-bold text-white/20 mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>{s.num}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9f31d] transition-colors" style={{ fontFamily: "var(--font-inter-tight)" }}>{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                <p className="mt-5 text-xs font-semibold text-white/30 group-hover:text-[#c9f31d] transition-colors">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Our Projects</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-sm" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Work That Speaks For Itself
            </h2>
            <Link href="/project" className="shrink-0 text-sm font-semibold text-white/60 hover:text-white transition-colors">View All Projects →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.href} href={p.href} className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-[#1f1d1d]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{p.category}</p>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-inter-tight)" }}>{p.title}</h3>
                  <p className="text-xs font-semibold" style={{ color: "#c9f31d" }}>{p.metric}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Industries</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ fontFamily: "var(--font-inter-tight)" }}>Sectors We Build For</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-full text-sm text-white/70 border border-white/10 hover:border-[#c9f31d]/40 hover:text-white transition-all cursor-default">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ fontFamily: "var(--font-inter-tight)" }}>What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 border border-white/10 bg-[#0a0a0a]">
                <p className="text-3xl mb-4" style={{ color: "#c9f31d" }}>&ldquo;</p>
                <p className="text-sm text-white/70 leading-relaxed mb-6">{t.text}</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-inter-tight)" }}>
            Ready to Build Something <span style={{ color: "#c9f31d" }}>Great?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-full font-semibold text-black text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
              Get a Free Quote
            </Link>
            <a href="https://www.linkedin.com/company/lyqx/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-white text-base border border-white/20 hover:border-white/40 transition-colors">
              Find Us on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
