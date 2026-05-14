import Link from "next/link";

const services = [
  { label: "Mobile Development", href: "/service/mobile-development" },
  { label: "Web Development", href: "/service/web-development" },
  { label: "UX/UI Design", href: "/service/ux-ui-design" },
  { label: "Branding Identity", href: "/service/branding-identity" },
  { label: "Backend", href: "/service/backend" },
  { label: "AI Technologies", href: "/service/ai-technologies" },
];

const projects = [
  { label: "GIDY", href: "/project/gidy" },
  { label: "LoveNest", href: "/project/love-nest" },
  { label: "Fetch Agent", href: "/project/fetch-agent" },
  { label: "GrowingGifts", href: "/project/gworing-gifts" },
  { label: "T-Platform", href: "/project/t-platfom" },
  { label: "EVEEVO", href: "/project/eveevo" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lyqx/" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com/app-development-company" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span
                className="text-2xl font-bold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-inter-tight)", color: "#c9f31d" }}
              >
                LYQX
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Full-cycle digital agency designing and building mobile apps, web
              platforms, and AI solutions that drive real business impact.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Contact
            </h3>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9f31d" }}
            >
              Let&apos;s Talk
            </Link>
            <p className="mt-6 text-sm text-white/40">
              Available worldwide
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LYQX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
