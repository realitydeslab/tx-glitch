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
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-bg text-text">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/tx-glitch" className="flex items-center gap-1">
          <span className="bg-coral text-white font-serif font-bold text-lg px-2.5 py-0.5 rounded-md">Trust.Fail</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="/tx-glitch/browse" className="text-text-secondary hover:text-text transition-colors font-medium">Browse</a>
          <a href="/tx-glitch/about" className="text-text-secondary hover:text-text transition-colors font-medium">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-text text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-text-secondary transition-colors">
            Share Your Story
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-text-secondary">
        <div>
          <span className="bg-coral text-white font-serif font-bold px-2 py-0.5 rounded text-sm">Trust.Fail</span>
          <p className="mt-3">Reality Design Lab · University of Oxford</p>
          <p className="text-text-muted mt-1">CC BY 4.0 (data) · MIT (code)</p>
        </div>
        <div className="flex gap-6 text-text-muted">
          <a href="https://github.com/realitydeslab/tx-glitch" className="hover:text-text transition-colors">GitHub</a>
          <a href="/tx-glitch/about" className="hover:text-text transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="hover:text-text transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
