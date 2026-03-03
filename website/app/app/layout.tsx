import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trust.Fail — The Open Database of Human-AI Trust Glitches",
  description: "The open ethnographic database of trust glitches between humans and AI agents in the wild.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jvt8wne.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="max-w-[760px] mx-auto px-5">{children}</main>
        <footer className="max-w-[760px] mx-auto px-5 py-8 border-t border-af-border mt-16">
          <p className="text-xs text-af-meta">Trust.Fail · Reality Design Lab · University of Oxford · CC BY 4.0 (data) · MIT (code)</p>
        </footer>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-af-border bg-af-card">
      <div className="max-w-[760px] mx-auto px-5 py-3 flex items-center justify-between">
        <a href="/tx-glitch" className="font-heading text-lg text-af-heading hover:text-af-text no-underline" style={{ color: "#424242" }}>
          Trust.Fail
        </a>
        <nav className="flex items-center gap-5 text-sm font-heading">
          <a href="/tx-glitch/browse" className="text-af-meta hover:text-af-text no-underline" style={{ color: "#767676" }}>Browse</a>
          <a href="/tx-glitch/about" className="text-af-meta hover:text-af-text no-underline" style={{ color: "#767676" }}>About</a>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="text-af-meta hover:text-af-text no-underline" style={{ color: "#767676" }}>Report</a>
        </nav>
      </div>
    </header>
  );
}
