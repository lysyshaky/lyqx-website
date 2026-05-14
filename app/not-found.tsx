import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-8xl font-bold mb-4" style={{ color: "#c9f31d", fontFamily: "var(--font-inter-tight)" }}>404</p>
        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>Page Not Found</h1>
        <p className="text-white/50 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="px-6 py-3 rounded-full text-sm font-semibold text-black hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9f31d" }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
