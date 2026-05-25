import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,243,29,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Big ghost 404 backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        style={{
          fontSize: "clamp(180px, 40vw, 520px)",
          fontFamily: "var(--font-archivo)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        404
      </div>

      <div className="relative z-10 flex flex-col items-center" style={{ gap: 0 }}>
        {/* Tag */}
        <span className="tag inline-block" style={{ marginBottom: 32 }}>Error 404</span>

        {/* Big 404 */}
        <p
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-archivo)",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            background: "linear-gradient(135deg, #c9f31d 0%, rgba(201,243,29,0.6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(201,243,29,0.25))",
            marginBottom: 32,
          }}
        >
          404
        </p>

        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-black text-white"
          style={{ fontFamily: "var(--font-archivo)", marginBottom: 20 }}
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.40)", marginBottom: 56 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center" style={{ gap: 12 }}>
          <Link
            href="/"
            className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold"
          >
            Back to Home ↗
          </Link>
          <Link
            href="/contact"
            className="glass flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            Contact Us →
          </Link>
        </div>

        {/* Bottom brand hint */}
        <p
          className="text-[11px] font-semibold tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.18)", marginTop: 64 }}
        >
          LYQX Solutions
        </p>
      </div>
    </section>
  );
}
