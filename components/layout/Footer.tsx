import Link from "next/link";

const services = [
  { label: "Mobile Development", href: "/service/mobile-development" },
  { label: "Web Development",    href: "/service/web-development"    },
  { label: "UX/UI Design",       href: "/service/ux-ui-design"       },
  { label: "Branding Identity",  href: "/service/branding-identity"  },
  { label: "Backend",            href: "/service/backend"            },
  { label: "AI Technologies",    href: "/service/ai-technologies"    },
];

const projects = [
  { label: "GIDY",         href: "/project/gidy"          },
  { label: "LoveNest",     href: "/project/love-nest"     },
  { label: "Fetch Agent",  href: "/project/fetch-agent"   },
  { label: "GrowingGifts", href: "/project/gworing-gifts" },
  { label: "T-Platform",   href: "/project/t-platfom"     },
  { label: "EVEEVO",       href: "/project/eveevo"        },
];

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/lyqx/"    },
  { label: "Instagram", href: "https://www.instagram.com/lyqx.solutions/"  },
  { label: "Facebook",  href: "https://facebook.com"                       },
  { label: "YouTube",   href: "https://youtube.com"                        },
];

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8 px-6 md:px-[60px] lg:px-[100px] xl:px-[160px]"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#070911" }}
    >
      <div>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="LYQX home">
              <div className="flex flex-col leading-none gap-[3px] mb-5">
                <span
                  className="text-[18px] font-black tracking-[0.20em] uppercase"
                  style={{ color: "#c9f31d", fontFamily: "var(--font-archivo)" }}
                >
                  LYQX
                </span>
                <span className="text-[18px] font-medium tracking-[0.36em] uppercase text-white/30">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Full-cycle digital agency designing and building mobile apps,
              web platforms, and AI solutions that drive real business impact.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Get In Touch
            </h3>

            <Link
              href="/contact"
              className="btn-lime inline-flex items-center gap-2 px-6 py-3 text-sm mb-6"
            >
              Let&apos;s Talk ↗
            </Link>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://calendly.com/lyqx-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/35 hover:text-white transition-colors duration-200"
              >
                Schedule a Call →
              </a>
              <a
                href="mailto:info@lyqx.agency"
                className="text-sm text-white/35 hover:text-white transition-colors duration-200"
              >
                info@lyqx.agency
              </a>
              <p className="text-xs text-white/22 mt-1">Available worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} LYQX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/18 cursor-default">Privacy Policy</span>
            <span className="text-xs text-white/18 cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
