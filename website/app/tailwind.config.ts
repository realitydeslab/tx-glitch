import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        glitch: {
          bg: "#0a0a0f",
          surface: "#12121a",
          "surface-hover": "#1a1a25",
          border: "#2a2a3a",
          accent: "#ff3366",
          "accent-dim": "#cc2952",
          cyan: "#00ffcc",
          yellow: "#ffcc00",
          text: "#e0e0e8",
          "text-dim": "#8888aa",
          code: "#b0b0d0",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
