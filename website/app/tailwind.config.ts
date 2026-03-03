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
        // Pudding uses pure white bg, near-black text
        "pudding-bg": "#FFFFFF",
        "pudding-text": "#262626",
        "pudding-muted": "#999999",
        "pudding-border": "#EBEBEB",
        // Trust.Fail accent
        coral: "#E85D75",
        teal: "#2EC4B6",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Helvetica", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "Menlo", "Consolas", "monospace"],
      },
      fontSize: {
        "story-title": ["1.75rem", { lineHeight: "1.2", fontWeight: "600" }],
        "story-desc": ["0.875rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
export default config;
