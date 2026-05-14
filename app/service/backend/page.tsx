import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Backend Development — Scalable Server-Side Architecture",
  description: "LYQX builds secure, scalable backend infrastructure. APIs, databases, cloud deployment, and microservices for startups to enterprise. Security-first approach.",
  alternates: { canonical: "https://lyqx.agency/service/backend/" },
};

export default function BackendPage() {
  return (
    <ServiceDetail
      label="Service"
      title="Backend Development"
      headline="The Engine Behind Your Product"
      intro="At LYQX, we believe that powerful backend architecture is the backbone of any successful digital product. Our team of backend engineers specializes in building secure, scalable, and high-performing server-side solutions tailored to your business needs."
      body="From database architecture and user authentication to cloud deployment and data processing — we take care of every detail behind the scenes, so your product runs flawlessly on the surface. Whether you're launching a startup product or scaling a complex enterprise system, we design robust backend infrastructures that ensure stability under load."
      closing="We don't just write backend code — we build the engine that powers your entire product."
      bulletsTitle="Why Choose LYQX for Backend"
      bullets={[
        "Clean, maintainable, and testable code architecture",
        "Cloud-native and microservices architectures",
        "Proven expertise with high-load systems",
        "Security-first approach in every layer",
        "Scalable solutions built for long-term growth",
      ]}
      prevService={{ label: "Branding Identity", href: "/service/branding-identity" }}
      nextService={{ label: "AI Technologies", href: "/service/ai-technologies" }}
    />
  );
}
