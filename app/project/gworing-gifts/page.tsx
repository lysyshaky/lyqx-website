import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "GrowingGifts — Fractional Investment Gifting Platform",
  description: "How LYQX built GrowingGifts: a fintech platform for gifting fractional stocks and crypto as digital gift certificates. 3,000+ gifts sent in 3 months.",
  alternates: { canonical: "https://lyqx.agency/project/gworing-gifts/" },
};

export default function GrowingGiftsPage() {
  return (
    <ProjectDetail
      title="GrowingGifts"
      category="Fintech"
      client="Benjamin A."
      clientLocation="United States"
      timeline="Nov 2024 – Present"
      services={["Web Development", "UX/UI Design", "Backend", "Brokerage & Payment Integrations"]}
      heroImg="https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg"
      overview="GrowingGifts was built to introduce a new way of gifting — bundling fractional stocks and crypto into digital gift certificates. The platform makes it easy for users to send financial assets as personalized gifts, while recipients can track value in real-time and redeem when ready."
      challenge="The system required a custom end-to-end build, from asset selection and brokerage integration to PDF generation, order tracking, and redemption flows. Each step needed to be designed for clarity, automation, and compliance — making the gifting of investments secure, simple, and scalable."
      result="GrowingGifts launched with a streamlined user journey that unified live market pricing, asset selection, and redemption into one smooth experience. In just three months, users sent over 3,000 digital investment gifts, validating strong product-market fit."
      resultMetric="3,000+ investment gifts sent in 3 months"
      tags={["Brokerage & Payment Integrations", "Admin & Support Dashboard", "Analytics & Strategy", "PDF Generation", "Compliance-Ready"]}
      prevProject={{ label: "Fetch Agent", href: "/project/fetch-agent" }}
      nextProject={{ label: "T-Platform", href: "/project/t-platfom" }}
    />
  );
}
