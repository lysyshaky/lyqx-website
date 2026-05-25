import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";
import BackendMockup from "@/components/ui/animations/BackendMockup";

export const metadata: Metadata = {
  title: "Backend Development — Scalable Server-Side Architecture",
  description: "LYQX builds secure, scalable backend infrastructure. APIs, databases, cloud deployment, and microservices for startups to enterprise. Security-first approach.",
  alternates: { canonical: "https://lyqx.agency/service/backend/" },
};

export default function BackendPage() {
  return (
    <ServiceDetail
      label="Backend Development"
      title="Backend Development"
      headline="The Engine Behind Your Product"
      highlights={[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="4" rx="1" />
              <rect x="2" y="10" width="20" height="4" rx="1" />
              <rect x="2" y="17" width="20" height="4" rx="1" />
              <circle cx="6" cy="5" r="0.8" fill="currentColor" stroke="none" />
              <circle cx="6" cy="12" r="0.8" fill="currentColor" stroke="none" />
              <circle cx="6" cy="19" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          ),
          title: "Scalable Architecture",
          desc: "Microservices, cloud-native deployments, and load-balanced APIs built to handle 10x traffic spikes without breaking a sweat.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          ),
          title: "Security First",
          desc: "JWT auth, encrypted data layers, rate limiting, and OWASP-aligned code review baked into every release — not bolted on after.",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: "API & Integrations",
          desc: "RESTful and GraphQL APIs, third-party integrations, webhooks, and real-time WebSocket layers — documented and ready for your frontend.",
        },
      ]}
      intro="Most products fail at scale, not at launch. We build backend systems that hold up when traffic spikes, payments flow, and users depend on your product 24/7."
      body="From database schema design and authentication infrastructure to cloud deployment pipelines and third-party integrations, we own every layer behind your interface. Our engineers ship clean, testable code that your future team can maintain and extend confidently."
      visual={<BackendMockup />}
      bulletsTitle="What You Get"
      bullets={[
        "REST and GraphQL API design and documentation",
        "PostgreSQL, MongoDB, or Redis database architecture",
        "JWT and OAuth2 authentication systems",
        "Cloud deployment on AWS, GCP, or Vercel",
        "CI/CD pipelines with automated testing",
        "Real-time features via WebSockets or SSE",
        "Monitoring, logging, and alerting setup",
      ]}
      prevService={{ label: "Branding Identity", href: "/service/branding-identity" }}
      nextService={{ label: "AI Technologies", href: "/service/ai-technologies" }}
    />
  );
}
