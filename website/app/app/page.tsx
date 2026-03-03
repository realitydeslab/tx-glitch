import Link from "next/link";
import { getGlitches } from "@/lib/glitches";
import { GlitchCard } from "@/components/GlitchCard";

export default async function Home() {
  const glitches = await getGlitches();

  return (
    <>
      {/* Intro — Pudding style: simple text, centered */}
      <div className="max-w-[680px] mx-auto px-5 pt-16 pb-8 text-center">
        <p className="font-serif text-lg text-pudding-muted mb-8 leading-relaxed">
          A digital publication that <strong className="text-pudding-text">explains trust glitches with visual stories</strong>.
        </p>
      </div>

      {/* Story grid — Pudding 2-column layout */}
      <div className="max-w-[1080px] mx-auto px-5 pb-20">
        {/* Search/filter bar */}
        <div className="flex items-center gap-4 mb-10 border-b border-pudding-border pb-4">
          <span className="font-mono text-xs text-pudding-muted">{glitches.length} stories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {glitches.map((glitch) => (
            <GlitchCard key={glitch.glitch_id} glitch={glitch} />
          ))}
        </div>
      </div>
    </>
  );
}
