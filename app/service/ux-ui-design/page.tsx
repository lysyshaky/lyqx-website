import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "UX/UI Design — User-Centered Digital Design",
  description: "LYQX designs interfaces that are visually stunning and deeply intuitive. Research-backed UX, design systems, and prototypes that drive engagement and conversions.",
  alternates: { canonical: "https://lyqx.agency/service/ux-ui-design/" },
};

export default function UxUiDesignPage() {
  return (
    <ServiceDetail
      label="Service"
      title="UX/UI Design"
      headline="Design With Purpose and Clarity"
      intro="At LYQX, we design interfaces that are not only visually stunning but also deeply intuitive. Our UX/UI team creates user-centered designs that drive engagement, improve usability, and support your business goals."
      body="We dive deep into user behavior, product logic, and brand identity to craft seamless digital experiences. Every button, screen, and interaction is thoughtfully designed to feel natural and perform flawlessly across devices."
      closing="We don't just make things look good — we design with purpose, clarity, and impact."
      bulletsTitle="What Sets Us Apart"
      bullets={[
        "Clean, modern, and scalable UI systems",
        "UX backed by research and real user data",
        "Design systems and prototyping for consistency",
        "Human-centered design approach",
        "Smooth collaboration with developers and product teams",
      ]}
      prevService={{ label: "Web Development", href: "/service/web-development" }}
      nextService={{ label: "Branding Identity", href: "/service/branding-identity" }}
    />
  );
}
