import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description: "Start your project with LYQX. Tell us about your idea and we'll get back to you within 24 hours. Mobile apps, web development, UX/UI design, and AI solutions.",
  alternates: { canonical: "https://lyqx.agency/contact/" },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-inter-tight)" }}>
            Say <span style={{ color: "#c9f31d" }}>Hi!</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-12 px-6 md:px-12 lg:px-16 pb-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10">
            <h2 className="text-xl font-bold mb-8" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Estimate Your Project
            </h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="John"
                    className="bg-[#0f131a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9f31d]/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="bg-[#0f131a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9f31d]/40 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="bg-[#0f131a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9f31d]/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 000 000 0000"
                  className="bg-[#0f131a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9f31d]/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="bg-[#0f131a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9f31d]/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold text-black text-sm hover:opacity-90 transition-opacity mt-2"
                style={{ backgroundColor: "#c9f31d" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-inter-tight)" }}>
                Get in Touch
              </h2>
              <p className="text-white/60 leading-relaxed">
                We&apos;re a full-cycle digital agency available to clients worldwide.
                Reach out and let&apos;s discuss how we can turn your idea into a
                market-ready product.
              </p>
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Schedule a Meeting", href: "https://calendly.com", icon: "📅", desc: "Book a free 30-min discovery call" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/lyqx/", icon: "💼", desc: "Connect with us professionally" },
                { label: "Instagram", href: "https://instagram.com", icon: "📸", desc: "Follow our work and updates" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 hover:border-[#c9f31d]/30 transition-all group"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-[#c9f31d] transition-colors">{c.label}</p>
                    <p className="text-xs text-white/40 mt-0.5">{c.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Industries info */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {["Real Estate", "Fintech", "Retail & E-Commerce", "Social Networking", "Crypto & Stock", "AI Tech"].map((ind) => (
                  <span key={ind} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
