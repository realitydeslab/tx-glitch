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
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-cream text-warm-dark">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-cream/90 backdrop-blur-sm border-b border-warm-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/tx-glitch" className="font-serif text-2xl tracking-tight">
          <span className="text-coral">Trust</span>
          <span className="text-warm-dim">.</span>
          <span className="text-warm-dark">Fail</span>
        </a>
        <div className="flex gap-8 text-sm font-medium">
          <a href="/tx-glitch/browse" className="text-warm-dim hover:text-warm-dark transition-colors">Browse</a>
          <a href="/tx-glitch/about" className="text-warm-dim hover:text-warm-dark transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-coral text-white px-4 py-2 rounded-full hover:bg-coral-dark transition-colors text-sm font-semibold">
            Report a Glitch
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-warm-border py-16 mt-24 bg-warm-light">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 text-sm text-warm-dim">
        <div>
          <p className="font-serif text-xl text-warm-dark mb-2">Trust.Fail</p>
          <p>Reality Design Lab · University of Oxford</p>
          <p className="mt-1">CC BY 4.0 (data) · MIT (code)</p>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/realitydeslab/tx-glitch" className="hover:text-warm-dark transition-colors">GitHub</a>
          <a href="/tx-glitch/about" className="hover:text-warm-dark transition-colors">About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="hover:text-warm-dark transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
