import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import AIMockup from "@/components/ui/animations/AIMockup";

export const metadata: Metadata = {
  title: "AI Technologies — Machine Learning & Intelligent Automation",
  description: "LYQX builds AI-powered solutions that drive real business value. Machine learning, NLP, computer vision, and smart automation integrated into your product.",
  alternates: { canonical: "https://lyqx.agency/service/ai-technologies/" },
};

export default function AiTechnologiesPage() {
  return (
    <ServiceDetail
      label="AI Technologies"
      title="AI Technologies"
      headline="AI Applied Where It Matters"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          ),
          title: "AI Automation",
          desc: "n8n, Zapier, and custom pipelines that run around the clock. They qualify leads, send outreach, update your CRM and trigger actions with no manual work needed.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
          title: "AI Avatar and Sales",
          desc: "AI avatars for video content and autonomous sales agents that handle outreach calls, qualify prospects and book demos across multiple languages.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          ),
          title: "AI Content and Video",
          desc: "Text, image and video generation built around your brand voice. Product try-ons, social content, animated ads and personalized campaigns at scale.",
        },
      ]}
      intro="Most businesses already have workflows that should be automated and revenue that AI can unlock today. We build those systems and ship them fast."
      body="We work with Gemini, Claude, OpenAI, GPT and other models to find the right fit for your product. From AI avatars running your sales calls to n8n automations handling your inbox, virtual try-ons for your store and AI video ads, we ship the highest impact AI features into production."
      visual={<AIMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "AI automation workflows with n8n, Zapier or custom builds",
        "AI sales avatar with outreach and call automation",
        "Virtual try-on for e-commerce clothes and jewelry",
        "AI content studio for text, images and video",
        "CRM with AI lead scoring and pipeline insights",
        "AI generated animation and video ads",
        "Model integrations with Gemini, Claude, OpenAI, GPT and more",
      ]}
      prevService={{ label: "Backend", href: "/service/backend" }}
      nextService={{ label: "Mobile Development", href: "/service/mobile-development" }}
    />
  );
}
