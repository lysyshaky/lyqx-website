import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — LYQX Solutions",
  description: "Privacy Policy for LYQX Solutions. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://lyqx.agency/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] pt-32 pb-28" style={{ background: "var(--dark)" }}>
      <div className="max-w-3xl">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(201,243,29,0.7)" }}>
          Legal
        </p>
        <h1 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: "rgba(255,255,255,0.35)" }}>Last Updated: April 2, 2026</p>

        <div className="space-y-12" style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8, fontSize: "0.9375rem" }}>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>General Information</h2>
            <p>This Privacy Policy describes how <strong className="text-white">LYQX Solutions</strong> (hereinafter – the "Team", "We", "Our" and "Us") may use your personal data, and provides information about your rights in relation to personal data when you visit our website at <strong className="text-white">lyqx.agency</strong>, contact Us, or visit Our social media profiles: LinkedIn, Instagram, Dribbble, Behance, YouTube, X, and TikTok.</p>
            <p className="mt-4">LYQX Solutions is the owner and operator of the website lyqx.agency (hereinafter – the "Website"). We are the "Controller" of User personal data (1) when We provide Digital Product Design, Mobile Development, Web Development, Branding, AI Solutions, and Backend services (collectively, the "Services"), (2) when contacting potential Users interested in Our Services, and (3) when the User interacts with our Website.</p>
            <p className="mt-4">Please read Our Privacy Policy carefully to understand how we collect, use, protect, or otherwise handle your personally identifiable information.</p>
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Notice: Our Website may contain links to third-party websites not operated by Us. We strongly recommend reviewing the privacy policy of each website you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Definitions</h2>
            <p>Terms such as "controller", "processor", "third-party", "personal data breach", "personal data" or their "processing" refer to definitions in Article 4 of the GDPR. The term "User" covers all categories of persons affected by data processing, including business partners, customers, potential customers, suppliers, and other visitors to Our Website.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>What Personal Information We Collect</h2>
            <p>We collect and process the following personal data:</p>
            <ul className="mt-4 space-y-3 list-none">
              <li className="pl-4 border-l-2" style={{ borderColor: "rgba(201,243,29,0.3)" }}>
                <strong className="text-white">Personal data:</strong> We do not collect personal data such as name, date of birth, email address, or telephone number unless you intentionally provide them through our contact forms. We use this data to respond to your request and may send follow-up emails regarding Our Services. You may unsubscribe at any time by emailing <a href="mailto:info@lyqx.agency" className="text-[#c9f31d] hover:underline">info@lyqx.agency</a>.
              </li>
              <li className="pl-4 border-l-2" style={{ borderColor: "rgba(201,243,29,0.3)" }}>
                <strong className="text-white">Non-personally identifiable information:</strong> We collect browser type, referring website, date and time of requests, and other log data to better understand how our Website is used and to maintain its functionality.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Cookie Files</h2>
            <p>When you use our Website, "cookies" — small text files stored on your device — may be created. We collect information contained in cookies, such as the date of connection and IP address, for administrative and statistical purposes to improve our Website and user experience.</p>
            <p className="mt-4">You are not obliged to accept cookies, but this may result in our Website not functioning fully. We use <strong className="text-white">Persistent Cookies</strong> that store data over time and are activated each visit. When a cookie expires, it is automatically deleted.</p>
            <div className="mt-4 space-y-3">
              <p><strong className="text-white">First-party cookies</strong> are placed by Us or by third-party service providers acting on Our behalf solely for Our purposes.</p>
              <p><strong className="text-white">Third-party cookies</strong> are placed by third parties such as advertisers or video content providers (e.g. YouTube). We have no control over these cookies and encourage you to check third-party websites for their cookie policies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Grounds for Collection of Personal Data</h2>
            <p>We process your personal data on the following legal bases under the GDPR:</p>
            <ul className="mt-4 space-y-2 list-none">
              {["Your consent, which you may withdraw at any time.", "Performance of a contract or steps taken prior to entering into a contract.", "Our legitimate interests, provided they are not overridden by your rights.", "Compliance with a legal obligation."].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#c9f31d" }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Your Rights</h2>
            <p>Under the GDPR and applicable data protection laws, you have the right to:</p>
            <ul className="mt-4 space-y-2 list-none">
              {["Access your personal data.", "Rectify inaccurate personal data.", "Request erasure of your personal data.", "Object to or restrict the processing of your personal data.", "Data portability.", "Withdraw consent at any time without affecting prior lawful processing."].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#c9f31d" }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:info@lyqx.agency" className="text-[#c9f31d] hover:underline">info@lyqx.agency</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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
