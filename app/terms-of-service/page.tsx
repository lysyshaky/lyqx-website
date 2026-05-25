import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — LYQX Solutions",
  description: "Terms of Service for LYQX Solutions. Understand the terms governing your use of our services.",
  alternates: { canonical: "https://lyqx.agency/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-6 md:px-[60px] lg:px-[100px] xl:px-[160px] 2xl:px-[280px] pt-32 pb-28" style={{ background: "var(--dark)" }}>
      <div className="max-w-3xl">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(201,243,29,0.7)" }}>
          Legal
        </p>
        <h1 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-archivo)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-16" style={{ color: "rgba(255,255,255,0.35)" }}>Last Updated: April 2, 2026</p>

        <div className="space-y-12" style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8, fontSize: "0.9375rem" }}>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Introduction</h2>
            <p><strong className="text-white">LYQX Solutions</strong> (hereinafter – the "Team", "We", "Our" and "Us") offers users and companies (hereinafter – "You" or "Your") services listed below (hereinafter – the "Services"). By using Our Services, You agree to the following conditions on behalf of yourself and all members of your household and others who use any Service under your registration.</p>
            <p className="mt-4">These Terms of Service (hereinafter – the "Terms") govern Your use of Our Services, available at <strong className="text-white">lyqx.agency</strong>. LYQX Solutions is the owner and operator of the Website.</p>
            <p className="mt-4">In order to use Our Services, You must agree to all Terms set forth below without any modifications. By accepting these Terms, You also agree to Our <Link href="/privacy-policy" className="text-[#c9f31d] hover:underline">Privacy Policy</Link>.</p>
            <p className="mt-4">You automatically agree to these Terms (1) by clicking the appropriate button on our Website or making the appropriate browser settings, (2) through registration on Our Website, or (3) when You interact with our Website.</p>
            <p className="mt-4">We comply with the General Data Protection Regulation ("GDPR"; Regulation (EU) 2016/679 of 27 April 2016), the California Consumer Privacy Act of 2018 ("CCPA"), and other applicable regulatory acts.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Registration</h2>
            <p>To start receiving the Services, You need to book a consultation by filling out the contact form on our Website or reaching out directly via email. Please read Our <Link href="/privacy-policy" className="text-[#c9f31d] hover:underline">Privacy Policy</Link> to understand what data We collect about You.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Our Services</h2>
            <p>We offer the following range of Services: Mobile Development, Web Development, UX/UI Design, Branding & Identity, Backend Engineering, and AI Technologies. We reserve the right to offer any additional Services.</p>
            <p className="mt-4">The specific terms of the Services are determined by a separate cooperation agreement between Our potential client and Us.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Failed Charges</h2>
            <p>In the event of non-payment or delay in payment, We reserve the right to:</p>
            <ul className="mt-4 space-y-2 list-none">
              {["Declare all amounts owed to Us to be past due and payable immediately.", "Immediately suspend access to the Services until the owed amounts are paid in full.", "Pause the involvement of our specialists in Your project until payment is resolved.", "Terminate the cooperation agreement unilaterally if debt persists (specific term defined in the main cooperation agreement)."].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#c9f31d" }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Termination and Pause of Services</h2>
            <p>Termination and pause of use of Our Services shall be made in accordance with the provisions of the main cooperation agreement between the parties and in accordance with these Terms.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Intellectual Property</h2>
            <p>The Website and all its components — including software, databases, content of any kind (texts, images, visual effects, logos, brands) — are Our property or the property of their respective licensors, protected by all applicable intellectual property rights.</p>
            <p className="mt-4">These Terms do not transfer any intellectual property rights. The transfer of intellectual property rights takes place in accordance with the approved provisions in the main cooperation agreement between Us and Our client (each cooperation is individually negotiated).</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Third-Party Links</h2>
            <p>Our Website may contain links to third-party websites not owned or controlled by Us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise You to read the terms and privacy policies of any third-party websites You visit.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Use Policies</h2>
            <p>You are responsible for Your use of the Services and any information You share in connection therewith. As a user, You must:</p>
            <ul className="mt-4 space-y-2 list-none">
              {["Be 18 years or older to use the Services.", "Provide a valid email address and any other information requested during signup.", "Use the Services exclusively for lawful purposes.", "Acknowledge that Our Services require an Internet connection, for the quality of which We are not responsible."].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#c9f31d" }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">If You use Our Services in any way We reasonably determine to be unlawful, prohibited, or detrimental to Our Services or other customers, We reserve the right to suspend or terminate Your access without notice.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Our Obligations</h2>
            <p>We make every effort to provide quality Services and regularly improve Our qualifications and use licensed software. However, We are not responsible for any difficulties or temporary impossibility of access to Our Services due to force majeure.</p>
            <p className="mt-4">We may use subcontractors in the performance of the Services, subject to the same obligations as Us. We shall remain solely responsible to You for the proper performance of the Services.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Limitation of Liability</h2>
            <p>In no event shall We be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) Your use of the result of Our Services; (ii) any conduct or content of any third party on the Services; or (iii) unauthorized access, use, or alteration of Your transmissions or content.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Governing Law</h2>
            <p>These Terms shall be governed by applicable international laws. Any dispute, controversy, or claim arising out of these Terms shall be settled by arbitration in accordance with internationally recognized arbitration rules. The language of arbitration shall be English.</p>
            <p className="mt-4">If any provision of these Terms is held invalid or unenforceable by a court, the remaining provisions will remain in effect.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Changes</h2>
            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If the changes are material, We will endeavor to provide notice before new terms become effective. By continuing to access or use Our Services after changes become effective, You agree to be bound by the revised terms.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Contact Us</h2>
            <p>To resolve a complaint or obtain additional information regarding use of the Services, please contact us:</p>
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
