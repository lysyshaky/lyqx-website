import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "AI Technologies — Machine Learning & Intelligent Automation",
  description: "LYQX builds AI-powered solutions that drive real business value. Machine learning, NLP, computer vision, and smart automation integrated into your product.",
  alternates: { canonical: "https://lyqx.agency/service/ai-technologies/" },
};

export default function AiTechnologiesPage() {
  return (
    <ServiceDetail
      label="Service"
      title="AI Technologies"
      headline="AI Applied Where It Matters"
      intro="At LYQX, we turn cutting-edge AI into real business value. From smart automation to predictive analytics and intelligent user experiences — we build AI-powered solutions that help companies work faster, think smarter, and scale efficiently."
      body="Our team combines deep technical expertise with a clear understanding of real-world challenges. Whether you need custom machine learning models, AI-driven features, or integration with existing systems — we deliver solutions that are practical, secure, and built to perform."
      closing="We don't just experiment with AI — we apply it where it matters most to create impact and innovation."
      bulletsTitle="What We Offer"
      bullets={[
        "AI integration into mobile and web products",
        "Machine learning and deep learning solutions",
        "Natural language processing (NLP)",
        "Computer vision and image recognition",
        "Data analysis, insights, and automation tools",
      ]}
      prevService={{ label: "Backend", href: "/service/backend" }}
      nextService={{ label: "Mobile Development", href: "/service/mobile-development" }}
    />
  );
}
