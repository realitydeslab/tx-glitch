import Link from "next/link";
import { getGlitches } from "@/lib/glitches";
import { GlitchCard } from "@/components/GlitchCard";

export default async function Home() {
  const glitches = await getGlitches();
  const typeCount = new Set(glitches.map(g => g.glitch_type)).size;
  const systemCount = new Set(glitches.map(g => g.system?.name)).size;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-6">
          <span className="text-coral">Trust</span>
          <span className="text-warm-dim">.</span>
          <span className="text-warm-dark">Fail</span>
        </h1>
        <p className="text-2xl md:text-3xl font-serif text-warm-dark mb-4">
          AI breaks your trust?<br />Tell us what happened.
        </p>
        <p className="text-lg text-warm-dim max-w-2xl mx-auto mb-12 leading-relaxed">
          The open ethnographic database of trust glitches between humans and AI agents in the wild.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/browse" className="bg-warm-dark text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-warm-dim transition-colors">
            Browse Glitches
          </Link>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-coral text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-coral-dark transition-colors">
            Report a Glitch →
          </a>
        </div>
      </section>

      {/* What is a trust glitch? — editorial section */}
      <section className="bg-warm-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-6">What is a trust glitch?</h2>
          <p className="text-lg leading-relaxed text-warm-dim mb-6">
            A <em>trust glitch</em> is any moment where your trust in an AI system shifts unexpectedly — a sudden break, a creeping doubt, a surprising deepening. It&apos;s the moment the seams of human-AI symbiosis become visible.
          </p>
          <p className="text-lg leading-relaxed text-warm-dim">
            Your chatbot confidently invents facts. Your copilot writes code that works too well. Your voice assistant says something it shouldn&apos;t know. These moments are data — and we&apos;re collecting them.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-5xl text-coral">{glitches.length}</p>
              <p className="text-warm-dim mt-2">Glitches Documented</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-teal">{typeCount}</p>
              <p className="text-warm-dim mt-2">Glitch Types</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-purple">{systemCount}</p>
              <p className="text-warm-dim mt-2">AI Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent glitches */}
      <section className="py-16 bg-warm-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl">Recent Glitches</h2>
              <p className="text-warm-dim mt-2">The latest trust experiences from the wild</p>
            </div>
            <Link href="/browse" className="text-coral hover:text-coral-dark font-semibold transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glitches.slice(0, 4).map((glitch) => (
              <GlitchCard key={glitch.glitch_id} glitch={glitch} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-lg mb-2">Tell your story</h3>
              <p className="text-warm-dim text-sm leading-relaxed">
                Join our Discord and share your trust glitch. Our AI interviewer walks you through 5 questions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-semibold text-lg mb-2">We analyze it</h3>
              <p className="text-warm-dim text-sm leading-relaxed">
                Your experience becomes a structured ethnographic card using ethological analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-lg mb-2">Open data</h3>
              <p className="text-warm-dim text-sm leading-relaxed">
                Your de-identified glitch joins an open database that researchers worldwide can cite and build on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-4">Got a story?</h2>
          <p className="text-white/80 text-lg mb-8">
            Every trust failure is data. Every glitch tells us something about how humans and AI learn to live together.
          </p>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="bg-white text-coral px-8 py-4 rounded-full text-lg font-bold hover:bg-cream transition-colors inline-block">
            Report a Glitch →
          </a>
        </div>
      </section>
    </div>
  );
}
