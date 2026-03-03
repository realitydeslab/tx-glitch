import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trust.Fail — The Open Database of Human-AI Trust Glitches",
  description: "AI breaks your trust? Tell us what happened. The open ethnographic database of trust glitches between humans and AI agents in the wild.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="border-b border-pudding-border">
      <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/tx-glitch" className="font-sans font-semibold text-lg text-pudding-text hover:opacity-70 transition-opacity">
          Trust.Fail
        </a>
        <nav className="flex items-center gap-6">
          <a href="/tx-glitch/browse" className="font-mono text-sm text-pudding-muted hover:text-pudding-text transition-colors">Browse</a>
          <a href="/tx-glitch/about" className="font-mono text-sm text-pudding-muted hover:text-pudding-text transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="font-mono text-sm text-pudding-muted hover:text-pudding-text transition-colors">Share a Glitch</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-pudding-border mt-24">
      <div className="max-w-[1080px] mx-auto px-5 py-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-sans font-semibold text-pudding-text">Trust.Fail</p>
          <p className="font-mono text-xs text-pudding-muted mt-2">Reality Design Lab · University of Oxford</p>
          <p className="font-mono text-xs text-pudding-muted">CC BY 4.0 (data) · MIT (code)</p>
        </div>
        <div className="flex gap-6 font-mono text-xs text-pudding-muted">
          <a href="https://github.com/realitydeslab/tx-glitch" className="hover:text-pudding-text transition-colors">GitHub</a>
          <a href="/tx-glitch/about" className="hover:text-pudding-text transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="hover:text-pudding-text transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
