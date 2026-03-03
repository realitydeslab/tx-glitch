import { getGlitch, getGlitches, getGlitchTypeName } from "@/lib/glitches";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const glitches = await getGlitches();
  return glitches.map((g) => ({ id: g.glitch_id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const glitch = await getGlitch(id);
  if (!glitch) return { title: "Glitch Not Found — Trust.Fail" };
  return {
    title: `${glitch.glitch_id} — ${glitch.system?.name || "Unknown"} — Trust.Fail`,
    description: glitch.event?.deviation || "A documented trust glitch",
  };
}

export default async function GlitchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const glitch = await getGlitch(id);
  if (!glitch) notFound();

  const typeName = getGlitchTypeName(glitch.glitch_type || "");
  const bibtex = `@misc{${glitch.glitch_id.toLowerCase()},
  title     = {Trust Glitch: ${glitch.glitch_id}},
  author    = {Trust.Fail Contributors},
  year      = {${glitch.interview_date?.split("-")[0] || "2026"}},
  url       = {https://trust.fail/glitch/${glitch.glitch_id}}
}`;

  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/browse" className="text-sm text-coral hover:text-coral-dark transition-colors mb-8 inline-block font-medium">
          ← Back to all glitches
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-warm-border pb-8">
          <p className="text-coral font-semibold mb-2">{typeName}</p>
          <h1 className="font-serif text-4xl mb-4">{glitch.event?.deviation || glitch.glitch_id}</h1>
          <div className="flex items-center gap-6 text-warm-dim text-sm">
            <span>{glitch.system?.name}</span>
            <span>·</span>
            <span>{glitch.interview_date}</span>
            <span>·</span>
            <div className="font-mono">
              Trust: <span className="text-teal font-semibold">{glitch.trust?.before}</span>
              {" → "}
              <span className="text-coral font-semibold">{glitch.trust?.after}</span>
            </div>
          </div>
        </header>

        {/* The Story */}
        <Section title="What happened">
          <p className="mb-3"><strong>Setting:</strong> {glitch.event?.setting}</p>
          <p className="mb-3"><strong>Task:</strong> {glitch.event?.task}</p>
          <p className="mb-3"><strong>What the AI did:</strong> {glitch.event?.ai_behavior}</p>
          <p className="mb-3"><strong>What was expected:</strong> {glitch.event?.human_expectation}</p>
          <p><strong>The deviation:</strong> {glitch.event?.deviation}</p>
        </Section>

        <Section title="How it felt">
          <p className="mb-3">
            <strong>Primary emotion:</strong> {glitch.affect?.primary_emotion}
            {glitch.affect?.intensity && <span className="text-warm-dim"> ({glitch.affect.intensity} intensity)</span>}
          </p>
          {glitch.affect?.secondary_emotions?.length > 0 && (
            <p className="mb-3"><strong>Also felt:</strong> {glitch.affect.secondary_emotions.join(", ")}</p>
          )}
          <p><strong>Duration:</strong> {glitch.affect?.duration}</p>
        </Section>

        <Section title="Trust trajectory">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <p className="font-serif text-4xl text-teal">{glitch.trust?.before}</p>
              <p className="text-xs text-warm-dim mt-1">Before</p>
            </div>
            <div className="text-2xl text-warm-dim">→</div>
            <div className="text-center">
              <p className="font-serif text-4xl text-coral">{glitch.trust?.after}</p>
              <p className="text-xs text-warm-dim mt-1">After</p>
            </div>
          </div>
          <p className="mb-2"><strong>Trajectory:</strong> {glitch.trust?.trajectory}</p>
          <p className="mb-2"><strong>Recovery:</strong> {glitch.trust?.recovery}</p>
          <p><strong>Behavioral change:</strong> {glitch.trust?.behavioral_change}</p>
        </Section>

        <Section title="Why it happened (ethological analysis)">
          <p className="text-warm-dim text-sm mb-4 italic">
            Tinbergen&apos;s four questions, adapted for AI agents
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-sm text-coral mb-1">Mechanism (How?)</p>
              <p>{glitch.ethology?.mechanism}</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-coral mb-1">Development (Ontogeny)</p>
              <p>{glitch.ethology?.development}</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-coral mb-1">Function (Why?)</p>
              <p>{glitch.ethology?.function}</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-coral mb-1">Phylogeny (Design lineage)</p>
              <p>{glitch.ethology?.phylogeny}</p>
            </div>
          </div>
        </Section>

        {glitch.participant_taxonomy?.their_name_for_it && (
          <Section title="In their own words">
            <p className="mb-2"><strong>They called it:</strong> &ldquo;{glitch.participant_taxonomy.their_name_for_it}&rdquo;</p>
            {glitch.participant_taxonomy?.their_causal_model && (
              <p className="mb-2"><strong>Their theory:</strong> {glitch.participant_taxonomy.their_causal_model}</p>
            )}
            <p><strong>Attribution:</strong> {glitch.participant_taxonomy?.attribution}</p>
          </Section>
        )}

        <Section title="Stakes">
          <p className="mb-2"><strong>Domain:</strong> {glitch.stakes?.domain}</p>
          <p className="mb-2"><strong>Severity:</strong> {glitch.stakes?.severity}</p>
          <p><strong>Reversible:</strong> {glitch.stakes?.reversible ? "Yes" : "No"}</p>
        </Section>

        {glitch.quotes && glitch.quotes.length > 0 && (
          <Section title="Notable quotes">
            <div className="space-y-4">
              {glitch.quotes.map((q: string, i: number) => (
                <blockquote key={i} className="text-lg leading-relaxed">
                  &ldquo;{q}&rdquo;
                </blockquote>
              ))}
            </div>
          </Section>
        )}

        {/* Citation */}
        <div className="mt-12 bg-warm-light border border-warm-border rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-4">Cite this glitch</h3>
          <p className="text-sm text-warm-dim mb-4 font-mono leading-relaxed">
            Trust.Fail Contributors ({glitch.interview_date?.split("-")[0] || "2026"}).
            Trust Glitch Report: {glitch.glitch_id}. Trust.Fail Database.
            https://trust.fail/glitch/{glitch.glitch_id}
          </p>
          <details>
            <summary className="text-sm text-coral cursor-pointer hover:text-coral-dark font-medium">Show BibTeX</summary>
            <pre className="mt-3 text-xs font-mono bg-white rounded-lg p-4 overflow-x-auto border border-warm-border">{bibtex}</pre>
          </details>
        </div>

        {/* Download */}
        <div className="mt-6 flex gap-3">
          <a
            href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(glitch, null, 2))}`}
            download={`${glitch.glitch_id}.json`}
            className="px-5 py-2 border border-warm-border rounded-full text-sm font-medium text-warm-dim hover:text-warm-dark hover:border-warm-dark transition-all"
          >
            Download JSON
          </a>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl mb-4">{title}</h2>
      <div className="text-warm-dark leading-relaxed">{children}</div>
    </section>
  );
}
