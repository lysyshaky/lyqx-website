import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "GIDY — B2B Delivery Platform for Outdoor Power Equipment",
  description: "How LYQX built GIDY: a B2B platform for contractors, fleet managers, and OPE dealers that reduced service delays and increased dealer response time by 40%.",
  alternates: { canonical: "https://lyqx.agency/project/gidy/" },
};

export default function GidyPage() {
  return (
    <ProjectDetail
      title="GIDY"
      category="Retail E-Commerce"
      client="Jesse B."
      clientLocation="United States"
      timeline="Sep 2024 – Jun 2025"
      services={["Mobile Development", "UX/UI Design", "Backend", "Analytics & Strategy"]}
      heroImg="https://framerusercontent.com/images/cdsBNW5aunm8wSZ2y7Q79FGNFg.png"
      overview="GIDY was built to streamline how contractors, fleet managers, and service providers interact with authorized OPE dealers. The platform combines fast parts ordering, real-time service scheduling, and direct delivery tracking — all in one tool designed for job-site speed and dealer-side control."
      challenge="The outdoor power equipment industry ran almost entirely offline. Contractors had no direct line to dealers, parts ordering was manual and slow, and there was zero visibility into delivery status. Every delay meant lost productivity on job sites."
      result="GIDY helped reduce service delays and enabled contractors to receive parts faster than ever before. The platform processed hundreds of orders within the first month and introduced real-time delivery visibility, positioning GIDY as a modern solution in a traditionally offline industry."
      resultMetric="+40% dealer response time"
      tags={["Product Launching", "Analytics & Strategy", "Detail Presentation", "Mobile App", "Backend Infrastructure", "Real-Time Tracking"]}
      appStoreUrl="https://apps.apple.com/us/app/gidy-app/id6708224979"
      prevProject={{ label: "EVEEVO", href: "/project/eveevo" }}
      nextProject={{ label: "LoveNest", href: "/project/love-nest" }}
    />
  );
}
