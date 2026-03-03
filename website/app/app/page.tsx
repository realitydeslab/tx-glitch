import Link from "next/link";
import { getGlitches } from "@/lib/glitches";
import { GlitchCard } from "@/components/GlitchCard";

export default async function Home() {
  const glitches = await getGlitches();
  const typeCount = new Set(glitches.map(g => g.glitch_type)).size;
  const systemCount = new Set(glitches.map(g => g.system?.name)).size;

  return (
    <>
      {/* Hero — Pudding-style bold editorial opening */}
      <section className="pt-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-6">An open research project</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            AI breaks your trust?<br />
            <span className="text-coral">Tell us what happened.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            The open ethnographic database of trust glitches between humans and AI agents in the&nbsp;wild.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-coral text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-coral-dark transition-colors shadow-lg shadow-coral/20">
              Share Your Story →
            </a>
            <Link href="/browse" className="bg-white text-text border-2 border-text px-8 py-4 rounded-full text-lg font-bold hover:bg-text hover:text-white transition-colors">
              Browse Glitches
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar — clean, Pudding-style horizontal numbers */}
      <section className="border-y border-border bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 text-center">
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-coral">{glitches.length}</p>
            <p className="text-text-muted text-sm mt-1">Glitches</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-violet">{typeCount}</p>
            <p className="text-text-muted text-sm mt-1">Types</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-teal">{systemCount}</p>
            <p className="text-text-muted text-sm mt-1">AI Systems</p>
          </div>
        </div>
      </section>

      {/* Editorial intro — drop cap, Pudding-style prose */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="drop-cap text-lg leading-relaxed text-text-secondary">
          A trust glitch is any moment where your trust in an AI system shifts unexpectedly — a sudden break, a creeping doubt, or a surprising deepening. Your chatbot confidently invents facts. Your copilot writes code that works too well. Your voice assistant says something it shouldn&apos;t know.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mt-6">
          These moments are data. We&apos;re building the first open ethnographic database of trust failures and surprises between humans and AI, so researchers can study what trust actually looks like in the wild — not in the lab.
        </p>
      </section>

      {/* Glitch grid — Pudding-style bold color block cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Latest</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Recent Glitches</h2>
            </div>
            <Link href="/browse" className="text-coral hover:text-coral-dark font-semibold transition-colors text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {glitches.slice(0, 4).map((glitch) => (
              <GlitchCard key={glitch.glitch_id} glitch={glitch} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works — clean 3-step */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2 text-center">Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Tell your story", desc: "Join our Discord and share your trust glitch. Our AI interviewer walks you through a structured conversation." },
              { num: "02", title: "We analyze it", desc: "Your experience becomes a structured ethnographic card using Tinbergen's four questions, adapted for AI agents." },
              { num: "03", title: "Open data", desc: "Your de-identified glitch joins an open database. Researchers worldwide can cite, analyze, and build on it." },
            ].map((step) => (
              <div key={step.num}>
                <p className="font-mono text-4xl font-bold text-coral/20 mb-4">{step.num}</p>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — bold block like Pudding feature card */}
      <section className="bg-coral mx-6 md:mx-auto max-w-5xl rounded-3xl py-16 px-8 text-center mb-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Got a story?</h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Every trust failure is data. Every glitch tells us something about how humans and AI learn to coexist.
        </p>
        <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-white text-coral px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all inline-block">
          Share Your Story →
        </a>
      </section>
    </>
  );
}
