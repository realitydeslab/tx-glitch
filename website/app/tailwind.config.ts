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
        "af-bg": "#F8F4EE",
        "af-card": "#FFFFFF",
        "af-text": "#000000",
        "af-heading": "#424242",
        "af-meta": "#767676",
        "af-border": "#E0DAD1",
        "af-link": "#548A2F",
        "af-link-hover": "#3D6B1E",
        "af-accent": "#548A2F",
        coral: "#E85D75",
        teal: "#2EC4B6",
      },
      fontFamily: {
        heading: ["freight-sans-pro", "Frutiger", "Calibri", "Gill Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        body: ["freight-text-pro", "Georgia", "Times New Roman", "serif"],
        mono: ["IBM Plex Mono", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
