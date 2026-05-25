import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import UIDesignMockup from "@/components/ui/animations/UIDesignMockup";

export const metadata: Metadata = {
  title: "UX/UI Design — User-Centered Digital Design",
  description: "LYQX designs interfaces that are visually stunning and deeply intuitive. Research-backed UX, design systems, and prototypes that drive engagement and conversions.",
  alternates: { canonical: "https://lyqx.agency/service/ux-ui-design/" },
};

export default function UxUiDesignPage() {
  return (
    <ServiceDetail
      label="UX/UI Design"
      title="UX/UI Design"
      headline="Design That Drives Action"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          ),
          title: "Design Systems",
          desc: "Figma component libraries built for scale. Consistent tokens, reusable patterns, and a single source of truth for every product team.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          ),
          title: "User-First Research",
          desc: "Behavior-driven design grounded in real data. We map journeys, test assumptions, and remove friction before a single line of code is written.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          ),
          title: "Pixel Perfect",
          desc: "Micro-interactions, precise spacing, and motion that feels inevitable. Every detail is crafted to earn trust and guide users toward conversion.",
        },
      ]}
      intro="Good design is not decoration. It is the fastest path to user trust, higher conversion, and a brand that people remember. We design products that work as well as they look."
      body="We go from research and wireframes through full Figma handoff, component library, and interactive prototype. Every decision connects visual craft to measurable business outcomes."
      visual={<UIDesignMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "Full Figma design system with component library",
        "User research, flows, and wireframes",
        "High-fidelity UI for web and mobile",
        "Interactive prototypes and micro-interactions",
        "Developer-ready specs and design tokens",
        "Brand-aligned, accessible, and responsive",
      ]}
      prevService={{ label: "Web Development", href: "/service/web-development" }}
      nextService={{ label: "Branding Identity", href: "/service/branding-identity" }}
    />
  );
}
