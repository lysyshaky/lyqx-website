import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "Fetch Agent — Homebuyer Match Platform",
  description: "How LYQX built Fetch Agent: a real estate matching platform connecting homebuyers with agents across the US. 3,000+ transactions facilitated.",
  alternates: { canonical: "https://lyqx.agency/project/fetch-agent/" },
};

export default function FetchAgentPage() {
  return (
    <ProjectDetail
      title="Fetch Agent"
      category="Real Estate"
      client="Beau C."
      clientLocation="United States"
      timeline="Sep 2024 – Mar 2025"
      services={["Web Development", "UX/UI Design", "Backend", "Market Research & Strategy"]}
      heroImg="https://framerusercontent.com/images/rPXaLrnrfr0ykLplC0Vkam5Q.png"
      overview="Fetch Agent was designed to streamline how homebuyers connect with the right real estate agents — no listings, just smart matching. The platform simplifies discovery through filters like location, contract terms, fees, and verified reviews, creating a faster, trust-based connection experience."
      challenge="The project required a full end-to-end build: branding, UX, responsive web interface, and a scalable backend. It also demanded role-based flows, secure communication tools, and compliance-ready architecture for a market that varies by state and legal requirements."
      result="The platform launched with smart lead tools and CRM features, enabling fast buyer-agent matching. Now live across the U.S., Fetch Agent has already facilitated over 3,000 real estate transactions, giving the client a scalable, high-impact product."
      resultMetric="3,000+ transactions facilitated"
      tags={["Market Research & Strategy", "Custom Backend & Infrastructure", "Role-Based Flows", "CRM Features", "Compliance Architecture"]}
      externalUrl="https://agents.fetchagent.com/"
      prevProject={{ label: "LoveNest", href: "/project/love-nest" }}
      nextProject={{ label: "GrowingGifts", href: "/project/gworing-gifts" }}
    />
  );
}
