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
        lime:    "#c9f31d",
        dark:    "#080A10",
        "dark-2": "#0B0D16",
        card:    "#0E1118",
        surface: "#1A1F2E",
        muted:   "#3A4050",
      },
      fontFamily: {
        sans:    ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)",       "system-ui", "sans-serif"],
      },
      screens: {
        sm:  "640px",
        md:  "810px",
        lg: "1100px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
