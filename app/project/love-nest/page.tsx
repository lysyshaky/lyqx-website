import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "LoveNest — Dating Platform",
  description: "How LYQX built LoveNest: a swipe-based dating platform with real-time messaging, admin dashboard, and premium subscription model.",
  alternates: { canonical: "https://lyqx.agency/project/love-nest/" },
};

export default function LoveNestPage() {
  return (
    <ProjectDetail
      title="LoveNest"
      category="Social Networking"
      client="Joanny S."
      clientLocation="France"
      timeline="Feb 2025 – Present"
      services={["Mobile Development", "UX/UI Design", "Custom Backend", "Admin Dashboard"]}
      heroImg="https://framerusercontent.com/images/fqpLjkqKaY2JRJXgdrGESH6XV0s.jpg"
      overview="LoveNest offers a swipe-based dating experience designed for fast interaction, real-time messaging, and meaningful discovery. The platform focuses on simplicity, trust, and intuitive user flow to encourage lasting engagement across all touchpoints."
      challenge="The client needed a dating platform that stood out in a saturated market — not just as a consumer app, but with a full backend that gave them complete operational control: activity monitoring, subscription management, moderation, and safety tools."
      result="After launch, LoveNest activated a premium model, allowing the client to monetize via subscriptions and virtual gifting. The platform is built for scale, supporting growth, retention, and full operational visibility from one admin center."
      resultMetric="Premium subscription model live"
      tags={["Custom Backend", "Admin Dashboard", "Analytics & Strategy", "Real-Time Messaging", "Subscription Monetization"]}
      prevProject={{ label: "GIDY", href: "/project/gidy" }}
      nextProject={{ label: "Fetch Agent", href: "/project/fetch-agent" }}
    />
  );
}
