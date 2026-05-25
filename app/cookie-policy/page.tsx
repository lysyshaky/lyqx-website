import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — LYQX Solutions",
  description: "Cookie Policy for LYQX Solutions. Learn how we use cookies on our website.",
  alternates: { canonical: "https://lyqx.agency/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] pt-32 pb-28" style={{ background: "var(--dark)" }}>
      <div className="max-w-3xl">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(201,243,29,0.7)" }}>
          Legal
        </p>
        <h1 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Cookie Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: "rgba(255,255,255,0.35)" }}>Last Updated: April 2, 2026</p>

        <div className="space-y-12" style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8, fontSize: "0.9375rem" }}>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you browse websites. They are commonly used to ensure the operation of websites and services provided over the Internet, and to improve and develop these websites by reading the contents of these files.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>How We Use Cookies</h2>
            <p>When you use our Website at <strong className="text-white">lyqx.agency</strong>, cookies may be created. We collect information contained in cookies — such as the date of your connection and the IP address of your device — which is used for administrative and statistical purposes to improve our Website and enhance your user experience.</p>
            <p className="mt-4">This automatically processed data may also be used to analyse User behaviour on our Website (e.g., time spent on pages) or to personalise the content of our web pages.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Types of Cookies We Use</h2>
            <div className="space-y-6">
              {[
                { title: "Essential Cookies", desc: "These cookies are necessary for the Website to function properly. They enable core functionality such as navigation and access to secure areas. The Website cannot function properly without these cookies." },
                { title: "Persistent Cookies", desc: "Designed to store data over a long period of time, these are activated each time you visit our Website. Each persistent cookie is created with an expiry date ranging from a few days to several years. When the cookie expires, it is automatically deleted." },
                { title: "Analytics Cookies", desc: "We use analytics cookies to understand how visitors interact with our Website, which pages are most visited, and how users navigate. This helps us improve the Website experience." },
                { title: "First-Party Cookies", desc: "Cookies placed by Us or by third-party service providers acting on Our behalf, used exclusively for Our purposes as described in this Cookie Policy." },
                { title: "Third-Party Cookies", desc: "Cookies placed by third parties such as advertisers or video content providers (e.g. YouTube, social media platforms). We have no control over these cookies and encourage you to check the respective third-party websites for more information." },
              ].map((item) => (
                <div key={item.title} className="pl-4" style={{ borderLeft: "2px solid rgba(201,243,29,0.25)" }}>
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Managing Cookies</h2>
            <p>You are not obliged to accept cookies. You may agree to the use of cookies by clicking the appropriate button on our Website or by making the appropriate settings in your web browser. However, declining cookies may result in our Website not functioning fully properly.</p>
            <p className="mt-4">Most browsers allow you to refuse cookies or delete existing cookies. The methods vary by browser — please refer to your browser&apos;s help documentation for instructions.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Social Media Cookies</h2>
            <p>We use social media buttons and plugins on the Website that allow you to connect with our social networks (LinkedIn, Instagram, Dribbble, YouTube, X, TikTok, Behance, Contra). In order for them to work, they may set cookies on our Website that can be used to improve your profile on their website or supplement the data they store for various purposes specified in their respective privacy and cookie policies.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us:</p>
            <div className="mt-4 p-5 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)" }}>
              <p className="text-white font-semibold mb-1">LYQX Solutions</p>
              <p>Email: <a href="mailto:info@lyqx.agency" className="text-[#c9f31d] hover:underline">info@lyqx.agency</a></p>
              <p>Website: <a href="https://lyqx.agency" className="text-[#c9f31d] hover:underline">lyqx.agency</a></p>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}
