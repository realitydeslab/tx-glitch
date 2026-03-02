import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trust.Fail — The Open Database of Human-AI Trust Glitches",
  description: "Trust broke. Tell us what happened. The open ethnographic database of trust glitches between humans and AI agents in the wild.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <div className="glitch-noise" />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-glitch-border bg-glitch-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-glitch-accent">Trust</span>
          <span className="text-glitch-text-dim">.</span>
          <span className="text-glitch-text">Fail</span>
        </a>
        <div className="flex gap-6 text-sm font-mono">
          <a href="/browse" className="text-glitch-text-dim hover:text-glitch-text transition-colors">Browse</a>
          <a href="/about" className="text-glitch-text-dim hover:text-glitch-text transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="text-glitch-accent hover:text-glitch-accent-dim transition-colors">
            Report a Glitch
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glitch-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 text-sm text-glitch-text-dim font-mono">
        <div>
          <p className="text-glitch-text font-bold mb-1">Trust.Fail</p>
          <p>Reality Design Lab · University of Oxford</p>
          <p className="mt-1">CC BY 4.0 (data) · MIT (code)</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/realitydeslab/tx-glitch" className="hover:text-glitch-text transition-colors">GitHub</a>
          <a href="/about" className="hover:text-glitch-text transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="hover:text-glitch-text transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
