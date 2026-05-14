import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Branding Identity — Visual Brand Strategy",
  description: "LYQX creates bold, strategic brand identities. Logos, color systems, brand guidelines, and visual assets aligned with your business goals and target audience.",
  alternates: { canonical: "https://lyqx.agency/service/branding-identity/" },
};

export default function BrandingIdentityPage() {
  return (
    <ServiceDetail
      label="Service"
      title="Branding Identity"
      headline="Brands That Are Remembered"
      intro="At LYQX, we help brands stand out with bold, strategic, and authentic visual identities. From logos and color systems to full brand guidelines — we craft every element with clarity and consistency."
      body="Our team dives deep into your values, audience, and market to create a brand identity that speaks your message and builds trust. Whether you're launching from scratch or rebranding, we ensure your visuals are aligned with your goals and leave a lasting impression."
      closing="Your brand is more than a logo — it's how the world sees and remembers you. We make sure it's done right."
      bulletsTitle="What We Deliver"
      bullets={[
        "Logo design and comprehensive brand guidelines",
        "Visual systems, palettes, and typography",
        "Tone of voice and brand personality definition",
        "Consistent branding across digital and print",
        "Design aligned with business strategy and target audience",
      ]}
      prevService={{ label: "UX/UI Design", href: "/service/ux-ui-design" }}
      nextService={{ label: "Backend", href: "/service/backend" }}
    />
  );
}
