import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import MobilePhoneMockup from "@/components/ui/animations/MobilePhoneMockup";

export const metadata: Metadata = {
  title: "Mobile App Development — iOS & Android",
  description: "LYQX builds native and cross-platform mobile apps for iOS and Android. Fast, intuitive, and designed to scale. Full-cycle development from concept to launch.",
  alternates: { canonical: "https://lyqx.agency/service/mobile-development/" },
};

export default function MobileDevelopmentPage() {
  return (
    <ServiceDetail
      label="Mobile Development"
      title="Mobile Development"
      headline="Apps Users Come Back To"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
            </svg>
          ),
          title: "iOS & Android Native",
          desc: "Swift and Kotlin. Peak performance, battery efficiency, and full platform feature access on both stores.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "Cross-Platform Ready",
          desc: "Flutter and React Native for speed to market. One codebase, both platforms, zero UX compromise.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          ),
          title: "End-to-End Delivery",
          desc: "From first wireframe to App Store listing. One team owns the full cycle with no handoff gaps.",
        },
      ]}
      intro="Users decide in 3 seconds. We build apps that are fast, intuitive, and built to retain."
      body="We work as your product partner. Discovery, architecture, design, development, QA, and launch all in one place. Weekly demos, clear timelines, no surprises."
      visual={<MobilePhoneMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "Native iOS and Android, Swift and Kotlin",
        "Cross-platform with Flutter and React Native",
        "Performance-first architecture from day one",
        "App Store and Google Play submission",
        "Backend, APIs and cloud infrastructure",
        "Post-launch monitoring and ongoing support",
      ]}
      prevService={{ label: "AI Technologies", href: "/service/ai-technologies" }}
      nextService={{ label: "Web Development", href: "/service/web-development" }}
    />
  );
}
