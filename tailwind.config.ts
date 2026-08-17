import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0d0d0d",
        surface: "#141414",
        cream: "#e3dec3",
        creamDim: "#a8a390",
        accent: "#e8503a",
        accentHover: "#f06050",
        muted: "#666666",
        mutedLight: "#888888",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(3rem, 9vw, 7.5rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;