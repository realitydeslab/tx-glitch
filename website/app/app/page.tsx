import Link from "next/link";
import { getGlitches } from "@/lib/glitches";
import { GlitchCard } from "@/components/GlitchCard";

export default async function Home() {
  const glitches = await getGlitches();
  const typeCount = new Set(glitches.map(g => g.glitch_type)).size;

  return (
    <div className="py-8">
      {/* Intro */}
      <div className="mb-6">
        <h1 className="font-heading text-[28px] text-af-heading mb-2">Trust.Fail</h1>
        <p className="text-[15px] text-af-meta leading-relaxed">
          The open ethnographic database of trust glitches between humans and AI agents in the wild.
          {" "}<Link href="/about" className="text-af-link">Read more →</Link>
        </p>
      </div>

      {/* Stats */}
      <div className="bg-af-card border border-af-border rounded px-4 py-3 mb-8 text-[13px] text-af-meta">
        <strong className="text-af-text">{glitches.length}</strong> glitches documented · <strong className="text-af-text">{typeCount}</strong> types · <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE || "#"} className="text-af-link">Report a glitch →</a>
      </div>

      {/* Section: Alignment Forum-style post sections */}
      <Section title="Trust Glitch Reports">
        {glitches.map((glitch) => (
          <GlitchCard key={glitch.glitch_id} glitch={glitch} />
        ))}
      </Section>

      {/* Ethogram summary */}
      <Section title="Glitch Taxonomy">
        <div className="grid grid-cols-2 gap-1 text-[13px]">
          {[
            ["GH", "Hallucination Shock", "#E53E3E"],
            ["GU", "Uncanny Accuracy", "#805AD5"],
            ["GB", "Betrayal of Expectation", "#DD6B20"],
            ["GE", "Emotional Boundary Cross", "#D53F8C"],
            ["GP", "Performance Cliff", "#D69E2E"],
            ["GR", "Refusal Surprise", "#3182CE"],
            ["GA", "Agency Assertion", "#38A169"],
            ["GC", "Consistency Break", "#C05621"],
            ["GS", "Surprising Competence", "#0891B2"],
            ["GO", "Opacity Frustration", "#718096"],
          ].map(([code, name, color]) => (
            <div key={code} className="flex items-center gap-2 py-1">
              <span className="font-heading font-medium px-1.5 py-0.5 rounded text-white text-[10px] shrink-0" style={{ backgroundColor: color }}>
                {code}
              </span>
              <span className="text-af-meta">{name}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-heading text-[22px] text-af-heading mb-3 pb-1 border-b border-af-border">{title}</h2>
      {children}
    </section>
  );
}
