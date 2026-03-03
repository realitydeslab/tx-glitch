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
        cream: "#FFF8F0",
        "warm-light": "#FFF1E6",
        "warm-dark": "#2D2926",
        "warm-dim": "#8B7E74",
        "warm-border": "#E8DDD3",
        coral: "#E85D75",
        "coral-dark": "#D14A62",
        teal: "#2EC4B6",
        "teal-dark": "#1FA396",
        yellow: "#FFD166",
        purple: "#9B72CF",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
