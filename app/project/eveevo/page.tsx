import type { Metadata } from "next";
import ProjectDetail from "@/components/ui/ProjectDetail";

export const metadata: Metadata = {
  title: "EVEEVO — EV Marketplace",
  description: "How LYQX became the exclusive development partner for EVEEVO, the UK's leading electric vehicle marketplace. Full redesign and mobile-first rebuild.",
  alternates: { canonical: "https://lyqx.agency/project/eveevo/" },
};

export default function EveevoPage() {
  return (
    <ProjectDetail
      title="EVEEVO"
      category="EV Marketplace"
      client="Anthony P."
      clientLocation="United Kingdom"
      timeline="September 2025 – Present"
      services={["Web Development", "Mobile Development", "UX/UI Design", "AI Technologies"]}
      heroImg="https://framerusercontent.com/images/5W2ETFQaF9M21LbTA5qRyCmzH8w.jpg"
      overview="EVEEVO is a digital marketplace built to simplify the process of buying and selling electric vehicles. Focused on both private users and dealers, the platform offers a seamless way to explore listings, compare offers, and close deals — all in a clean, modern experience that supports the shift toward electric mobility."
      challenge="We led a full redesign of an existing product, transforming a fragmented, outdated app into a responsive, mobile-first platform. The old system had poor search UX, slow listing flows, and no coherent design language. Every touchpoint needed to be rebuilt."
      result="Post-launch results demonstrated strong traction: within the first 90 days, listing activity and user engagement grew significantly, with a notable reduction in listing time and longer buyer sessions. The enhanced experience supported EVEEVO in attracting early-stage investment."
      resultMetric="UK exclusive development partner"
      tags={["Full Redesign", "Mobile-First Architecture", "UX Research", "Listing Optimization", "Early-Stage Investment Support"]}
      externalUrl="https://eveevo.uk/"
      prevProject={{ label: "T-Platform", href: "/project/t-platfom" }}
      nextProject={{ label: "GIDY", href: "/project/gidy" }}
    />
  );
}
