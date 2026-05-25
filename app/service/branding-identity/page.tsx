import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import BrandingMockup from "@/components/ui/animations/BrandingMockup";

export const metadata: Metadata = {
  title: "Branding Identity — Visual Brand Strategy",
  description: "LYQX creates bold, strategic brand identities. Logos, color systems, brand guidelines, and visual assets aligned with your business goals and target audience.",
  alternates: { canonical: "https://lyqx.agency/service/branding-identity/" },
};

export default function BrandingIdentityPage() {
  return (
    <ServiceDetail
      label="Branding Identity"
      title="Branding Identity"
      headline="Brands That Are Remembered"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          ),
          title: "Logo System",
          desc: "Mark, wordmark, and every variation — built with construction rules so your logo stays consistent on any surface, at any size.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          ),
          title: "Visual Identity",
          desc: "Color palette, typography, iconography, and brand patterns. Every visual decision documented so your team ships on-brand every time.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
          title: "Brand Strategy",
          desc: "Positioning, tone of voice, and a complete style guide. The rules that keep your brand sharp as you grow across channels and markets.",
        },
      ]}
      intro="A brand is the promise your business makes before a word is spoken. We build identities that earn trust, stand out from competition, and stay memorable long after the first impression."
      body="From strategy and naming through logo design, color system, typography, and guidelines, we deliver everything needed to show up consistently and confidently across every channel and product."
      visual={<BrandingMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "Logo mark, wordmark and all usage variations",
        "Full color palette with usage rules",
        "Typography system and type scale",
        "Brand guidelines and style guide",
        "Business card, stationery and digital assets",
        "Social media kit and icon system",
      ]}
      prevService={{ label: "UX/UI Design", href: "/service/ux-ui-design" }}
      nextService={{ label: "Backend", href: "/service/backend" }}
    />
  );
}
