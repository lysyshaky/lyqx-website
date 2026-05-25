import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import WebBrowserMockup from "@/components/ui/animations/WebBrowserMockup";

export const metadata: Metadata = {
  title: "Web Development — Modern Web Platforms",
  description: "LYQX builds modern, high-performing websites and web platforms. Landing pages, complex web apps, and e-commerce. Optimized for speed, SEO, and scale.",
  alternates: { canonical: "https://lyqx.agency/service/web-development/" },
};

export default function WebDevelopmentPage() {
  return (
    <ServiceDetail
      label="Web Development"
      title="Web Development"
      headline="Websites That Convert"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ),
          title: "Modern Stack",
          desc: "Next.js, React, TypeScript. Fast by default, SEO-ready from day one, built to scale under real traffic.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          ),
          title: "Design to Code",
          desc: "Pixel-perfect implementation from any design file. Figma to production with zero detail lost.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          ),
          title: "Performance First",
          desc: "PageSpeed 98+, sub-second loads, CDN-optimized. Your users never wait. Your rankings never suffer.",
        },
      ]}
      intro="Your website is your brand's strongest sales channel. We build platforms that command attention, rank on search, and drive measurable business growth."
      body="We work across the full stack, frontend, backend and integrations. Every project gets clean architecture, responsive design, and SEO baked in from the start."
      visual={<WebBrowserMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "Next.js, React, TypeScript and modern frameworks",
        "Fully responsive, cross-browser compatible",
        "SEO-optimized structure and performance",
        "CMS integration, APIs and third-party services",
        "E-commerce, SaaS, landing pages and portals",
        "Post-launch support and ongoing development",
      ]}
      prevService={{ label: "Mobile Development", href: "/service/mobile-development" }}
      nextService={{ label: "UX/UI Design", href: "/service/ux-ui-design" }}
    />
  );
}
