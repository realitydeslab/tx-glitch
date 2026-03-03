import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Grid / Magazine palette from UI Pro Max
        bg: "#FAFAFA",
        surface: "#FFFFFF",
        text: "#09090B",
        "text-secondary": "#52525B",
        "text-muted": "#A1A1AA",
        border: "#E4E4E7",
        // Trust.Fail accent colors — Pudding-style vivid
        coral: "#E85D75",
        "coral-dark": "#D14A62",
        teal: "#2EC4B6",
        "teal-dark": "#1FA396",
        gold: "#FFB800",
        violet: "#8B5CF6",
        sky: "#38BDF8",
        // Glitch type card colors (Pudding-style bold blocks)
        "card-red": "#F87171",
        "card-purple": "#A78BFA",
        "card-orange": "#FB923C",
        "card-pink": "#F472B6",
        "card-yellow": "#FBBF24",
        "card-blue": "#60A5FA",
        "card-emerald": "#34D399",
        "card-amber": "#F59E0B",
        "card-cyan": "#22D3EE",
        "card-slate": "#94A3B8",
      },
      fontFamily: {
        // Magazine Style: Libre Bodoni + Public Sans (from UI Pro Max)
        serif: ["Libre Bodoni", "Georgia", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
