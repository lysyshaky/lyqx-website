import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Mobile App Development — iOS & Android",
  description: "LYQX builds native and cross-platform mobile apps for iOS and Android. Fast, intuitive, and designed to scale. Full-cycle development from concept to launch.",
  alternates: { canonical: "https://lyqx.agency/service/mobile-development/" },
};

export default function MobileDevelopmentPage() {
  return (
    <ServiceDetail
      label="Service"
      title="Mobile Development"
      headline="Mobile Apps That Perform"
      intro="At LYQX, we craft high-quality mobile applications that combine seamless performance with great user experience. Our team builds native and cross-platform apps that are fast, intuitive, and designed to scale."
      body="From concept to launch, we take care of the entire development cycle — ensuring your app is not only functional but also aligned with your brand and business goals. Whether it's iOS, Android, or both, we use the latest technologies to deliver stable, secure, and engaging mobile products."
      closing="We don't just build apps — we create mobile experiences your users will love."
      bulletsTitle="What You Get With Us"
      bullets={[
        "Native and cross-platform expertise (Swift, Kotlin, Flutter)",
        "Beautiful, user-friendly interfaces",
        "Smooth performance and quick load times",
        "Backend integration and cloud support",
        "Rigorous testing and post-launch maintenance",
      ]}
      prevService={{ label: "AI Technologies", href: "/service/ai-technologies" }}
      nextService={{ label: "Web Development", href: "/service/web-development" }}
    />
  );
}
