import { getGlitches } from "@/lib/glitches";
import { GlitchCard } from "@/components/GlitchCard";
import Link from "next/link";

/*
 * Alternative title ideas:
 * - "Trust.Fail — When the machine breaks your trust"
 * - "Trust.Glitch — The ethnographic atlas of broken AI trust"
 * - "Glitch.Trust — Field notes from the human-AI frontier"
 * - "TrustBreak — A living archive of human-AI trust failures"
 * - "The Glitch Index — Cataloguing trust fractures in the age of AI"
 * - "Trust.404 — Not found: the trust you were looking for"
 * - "SIGFAULT — Trust interrupted"
 */

export default async function Home() {
  const glitches = await getGlitches();
  const recent = glitches.slice(0, 4);

  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden scanline">
        <div className="max-w-6xl mx-auto px-6 py-32 md:py-44 text-center relative z-10">
          {/* Decorative broken lines */}
          <div className="absolute top-20 left-10 w-32 h-px bg-glitch-accent/20 rotate-12" />
          <div className="absolute top-32 right-16 w-24 h-px bg-glitch-cyan/20 -rotate-6" />
          
          <h1 className="glitch-text font-mono text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-glitch-accent">Trust</span>
            <span className="text-glitch-text-dim">.</span>
            <span className="text-glitch-text">Fail</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-mono text-glitch-text mb-4 tracking-tight">
            Trust broke. Tell us what happened.
          </p>
          
          <p className="text-base md:text-lg text-glitch-text-dim max-w-2xl mx-auto mb-12 leading-relaxed">
            The open ethnographic database of trust glitches between humans and AI agents in the wild
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse"
              className="px-8 py-4 bg-glitch-surface border border-glitch-border rounded font-mono text-sm font-medium hover:bg-glitch-surface-hover hover:border-glitch-accent/50 transition-all"
            >
              Browse Glitches →
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"}
              className="px-8 py-4 bg-glitch-accent text-white rounded font-mono text-sm font-medium hover:bg-glitch-accent-dim transition-all"
            >
              Report a Glitch ⚡
            </a>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-glitch-accent/5 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Stats bar */}
      <section className="border-y border-glitch-border bg-glitch-surface/50">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Glitches Documented", value: glitches.length || "—" },
            { label: "AI Systems Covered", value: new Set(glitches.map(g => g.system?.name)).size || "—" },
            { label: "Avg Trust Delta", value: glitches.length ? `−${(glitches.reduce((s, g) => s + ((g.trust?.before || 0) - (g.trust?.after || 0)), 0) / glitches.length).toFixed(1)}` : "—" },
            { label: "Contributors", value: new Set(glitches.map(g => g.participant_id)).size || "—" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-glitch-cyan">{stat.value}</div>
              <div className="text-xs text-glitch-text-dim font-mono mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent glitches */}
      {recent.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-mono text-xl font-bold">Recent Glitches</h2>
            <Link href="/browse" className="text-sm font-mono text-glitch-text-dim hover:text-glitch-accent transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recent.map((glitch) => (
              <GlitchCard key={glitch.glitch_id} glitch={glitch} />
            ))}
          </div>
        </section>
      )}

      {/* CTA section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-glitch-border rounded-lg p-12 text-center bg-glitch-surface/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glitch-accent/50 to-transparent" />
          <h2 className="font-mono text-2xl font-bold mb-4">Got glitched?</h2>
          <p className="text-glitch-text-dim mb-8 max-w-lg mx-auto">
            Every trust glitch is a data point. Every data point helps us understand how humans and AI actually relate. Your story matters.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"}
            className="inline-block px-8 py-4 bg-glitch-accent text-white rounded font-mono text-sm font-medium hover:bg-glitch-accent-dim transition-all"
          >
            Share Your Story →
          </a>
        </div>
      </section>
    </div>
  );
}
