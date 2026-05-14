import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#c9f31d",
        dark: "#0f131a",
        card: "#0a0a0a",
        surface: "#1f1d1d",
        muted: "#3d3d3d",
        subtle: "rgba(255,255,255,0.1)",
        orange: "#f58327",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        tight: ["var(--font-inter-tight)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "810px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
