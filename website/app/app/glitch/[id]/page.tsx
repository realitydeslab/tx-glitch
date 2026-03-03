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

const cardBg: Record<string, string> = {
  GH: "bg-card-red", GU: "bg-card-purple", GB: "bg-card-orange", GE: "bg-card-pink",
  GP: "bg-card-yellow", GR: "bg-card-blue", GA: "bg-card-emerald", GC: "bg-card-amber",
  GS: "bg-card-cyan", GO: "bg-card-slate",
};

export default async function GlitchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const glitch = await getGlitch(id);
  if (!glitch) notFound();

  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const bg = cardBg[typeCode] || "bg-gray-200";

  const bibtex = `@misc{${glitch.glitch_id.toLowerCase()},
  title  = {Trust Glitch: ${glitch.glitch_id}},
  author = {Trust.Fail Contributors},
  year   = {${glitch.interview_date?.split("-")[0] || "2026"}},
  url    = {https://trust.fail/glitch/${glitch.glitch_id}}
}`;

  return (
    <div className="pt-14">
      {/* Hero header — Pudding-style full-width color block */}
      <div className={`${bg} py-16 px-6`}>
        <div className="max-w-3xl mx-auto">
          <Link href="/browse" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-6 inline-block">
            ← All glitches
          </Link>
          <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-3">{typeCode} · {typeName}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
            {glitch.event?.deviation || glitch.glitch_id}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-70">
            <span>{glitch.system?.name}</span>
            <span>·</span>
            <span>{glitch.interview_date}</span>
            <span>·</span>
            <span className="font-mono font-bold">Trust: {glitch.trust?.before} → {glitch.trust?.after}</span>
          </div>
        </div>
      </div>

      {/* Content — editorial article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {glitch.quotes && glitch.quotes.length > 0 && (
          <div className="pull-quote mb-12">
            &ldquo;{glitch.quotes[0]}&rdquo;
          </div>
        )}

        <Section title="What happened">
          <Field label="Setting" value={glitch.event?.setting} />
          <Field label="Task" value={glitch.event?.task} />
          <Field label="What the AI did" value={glitch.event?.ai_behavior} />
          <Field label="What was expected" value={glitch.event?.human_expectation} />
          <Field label="The deviation" value={glitch.event?.deviation} />
        </Section>

        <Section title="How it felt">
          <Field label="Primary emotion" value={glitch.affect?.primary_emotion} />
          {glitch.affect?.secondary_emotions?.length > 0 && (
            <Field label="Also felt" value={glitch.affect.secondary_emotions.join(", ")} />
          )}
          <Field label="Intensity" value={glitch.affect?.intensity} />
          <Field label="Duration" value={glitch.affect?.duration} />
        </Section>

        <Section title="Trust trajectory">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <p className="font-serif text-5xl font-bold text-teal">{glitch.trust?.before}</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wide">Before</p>
            </div>
            <div className="text-3xl text-text-muted">→</div>
            <div className="text-center">
              <p className="font-serif text-5xl font-bold text-coral">{glitch.trust?.after}</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wide">After</p>
            </div>
          </div>
          <Field label="Trajectory" value={glitch.trust?.trajectory} />
          <Field label="Recovery" value={glitch.trust?.recovery} />
          <Field label="Behavioral change" value={glitch.trust?.behavioral_change} />
        </Section>

        <Section title="Ethological analysis">
          <p className="text-sm text-text-muted italic mb-4">Tinbergen&apos;s four questions, adapted for AI agents</p>
          <div className="space-y-5">
            <AnalysisField label="Mechanism (How?)" value={glitch.ethology?.mechanism} />
            <AnalysisField label="Development" value={glitch.ethology?.development} />
            <AnalysisField label="Function (Why?)" value={glitch.ethology?.function} />
            <AnalysisField label="Phylogeny" value={glitch.ethology?.phylogeny} />
          </div>
        </Section>

        {glitch.participant_taxonomy?.their_name_for_it && (
          <Section title="In their own words">
            <Field label="They called it" value={`"${glitch.participant_taxonomy.their_name_for_it}"`} />
            <Field label="Their theory" value={glitch.participant_taxonomy?.their_causal_model} />
            <Field label="Attribution" value={glitch.participant_taxonomy?.attribution} />
          </Section>
        )}

        <Section title="Stakes">
          <Field label="Domain" value={glitch.stakes?.domain} />
          <Field label="Severity" value={glitch.stakes?.severity} />
          <Field label="Reversible" value={glitch.stakes?.reversible ? "Yes" : "No"} />
        </Section>

        {/* Citation */}
        <div className="mt-16 border border-border rounded-2xl p-8 bg-white">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Cite this glitch</p>
          <p className="text-sm text-text-secondary font-mono leading-relaxed mb-4">
            Trust.Fail Contributors ({glitch.interview_date?.split("-")[0] || "2026"}).
            Trust Glitch Report: {glitch.glitch_id}. Trust.Fail Database.
            https://trust.fail/glitch/{glitch.glitch_id}
          </p>
          <details>
            <summary className="text-sm text-coral cursor-pointer hover:text-coral-dark font-medium">BibTeX</summary>
            <pre className="mt-3 text-xs font-mono bg-bg rounded-lg p-4 overflow-x-auto">{bibtex}</pre>
          </details>
        </div>

        <div className="mt-6">
          <a
            href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(glitch, null, 2))}`}
            download={`${glitch.glitch_id}.json`}
            className="text-sm font-medium text-text-secondary hover:text-text border border-border px-4 py-2 rounded-lg transition-colors"
          >
            Download JSON ↓
          </a>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold mb-5 pb-2 border-b border-border">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  if (!value || value === "undefined") return null;
  return (
    <div className="mb-3">
      <span className="text-sm font-semibold text-text-secondary">{label}: </span>
      <span className="text-text">{value}</span>
    </div>
  );
}

function AnalysisField({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-l-3 border-coral pl-4">
      <p className="text-xs font-mono uppercase tracking-widest text-coral mb-1">{label}</p>
      <p className="text-text leading-relaxed">{value}</p>
    </div>
  );
}
