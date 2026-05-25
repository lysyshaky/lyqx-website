import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lyqx.agency"),
  title: {
    default: "LYQX — Mobile Design & Development Solutions",
    template: "%s | LYQX",
  },
  description:
    "LYQX is a full-cycle digital solutions company specializing in mobile app development, web platforms, UX/UI design, and AI integration. We build B2B and B2C products that drive real business growth.",
  openGraph: {
    type: "website",
    siteName: "LYQX",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://randomuser.me" />
        <link rel="dns-prefetch" href="https://shopsocietyapp.com" />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
