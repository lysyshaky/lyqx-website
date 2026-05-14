import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Web Development — Modern Web Platforms",
  description: "LYQX builds modern, high-performing websites and web platforms. Landing pages, complex web apps, and e-commerce. Optimized for speed, SEO, and scale.",
  alternates: { canonical: "https://lyqx.agency/service/web-development/" },
};

export default function WebDevelopmentPage() {
  return (
    <ServiceDetail
      label="Service"
      title="Web Development"
      headline="Websites That Drive Results"
      intro="We build modern, high-performing websites that don't just look great — they deliver results. At LYQX, our web development team combines technical expertise with a deep understanding of user experience and business goals."
      body="Whether it's a landing page, a complex web platform, or a full-scale e-commerce solution — we code with precision and build with purpose. Our developers use the latest technologies and frameworks to ensure your website is fast, responsive, secure, and easy to scale."
      closing="With LYQX, your website becomes a powerful business tool — not just a digital placeholder."
      bulletsTitle="Why Choose Us"
      bullets={[
        "Clean, scalable code built on modern frameworks",
        "Cross-browser and mobile responsiveness",
        "Custom solutions tailored to your business",
        "Fast load times and SEO best practices",
        "Seamless collaboration with our design and backend teams",
      ]}
      prevService={{ label: "Mobile Development", href: "/service/mobile-development" }}
      nextService={{ label: "UX/UI Design", href: "/service/ux-ui-design" }}
    />
  );
}
