import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "T-Platform — Crypto & Stock Trading Platform",
  description: "How LYQX built T-Platform: a high-performance unified crypto and stock trading platform. $5M+ revenue generated before successful acquisition.",
  alternates: { canonical: "https://lyqx.agency/project/t-platfom/" },
};

export default function TPlatformPage() {
  return (
    <ProjectDetail
      title="T-Platform"
      category="Crypto & Stock"
      client="Salem M."
      clientLocation="United Arab Emirates"
      timeline="Jul 2022 – Aug 2024"
      services={["Mobile Development", "Web Development", "UX/UI Design", "Analytics & Strategy"]}
      heroImg="https://framerusercontent.com/images/3quFMIv6ZHa5UcOs63diPc93Bg.png"
      overview="T-Platform was created to deliver a high-performance trading experience that brings both crypto and stock markets into one unified system. The platform addresses the need for speed, clarity, and real-time decision-making for both casual and professional traders."
      challenge="Building a unified trading platform for two volatile, data-intensive markets required real-time data pipelines, microsecond-responsive UI, and multi-device consistency. Every interface decision had to support fast, high-stakes decisions without cognitive friction."
      result="T-Platform became the client's core product offering and a key asset in their go-to-market strategy. The platform directly contributed to over $5M in revenue before being successfully sold. Designed for scale and performance, it now powers a new generation of financial tools under new ownership."
      resultMetric="$5M+ revenue before acquisition"
      tags={["Real-Time Trading Features", "Push Notifications", "Product Concept Implementation", "Multi-Device Support", "Portfolio Management"]}
      prevProject={{ label: "GrowingGifts", href: "/project/gworing-gifts" }}
      nextProject={{ label: "EVEEVO", href: "/project/eveevo" }}
    />
  );
}
