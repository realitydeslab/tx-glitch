import { getGlitch, getGlitches, getGlitchTypeName, getGlitchTypeColor } from "@/lib/glitches";
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

  const typeCode = glitch.glitch_type || "??";
  const typeColor = getGlitchTypeColor(typeCode);

  const bibtex = `@misc{${glitch.glitch_id.toLowerCase()},
  title     = {Trust Glitch Report: ${glitch.glitch_id}},
  author    = {Trust.Fail Contributors},
  year      = {${glitch.interview_date?.split("-")[0] || "2026"}},
  url       = {https://trust.fail/glitch/${glitch.glitch_id}},
  note      = {Ethnographic trust glitch card from the Trust.Fail database}
}`;

  const yamlDownloadUrl = `data:text/yaml;charset=utf-8,${encodeURIComponent(JSON.stringify(glitch, null, 2))}`;
  const jsonDownloadUrl = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(glitch, null, 2))}`;

  return (
    <div className="pt-14">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back */}
        <Link href="/browse" className="text-sm font-mono text-glitch-text-dim hover:text-glitch-accent transition-colors mb-8 inline-block">
          ← Back to Browse
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2 py-0.5 text-xs font-mono font-medium rounded border ${typeColor}`}>
                {typeCode}
              </span>
              <span className="text-sm text-glitch-text-dim font-mono">{getGlitchTypeName(typeCode)}</span>
            </div>
            <h1 className="font-mono text-2xl font-bold">{glitch.glitch_id}</h1>
            <p className="text-glitch-text-dim text-sm mt-1 font-mono">
              {glitch.system?.name} · {glitch.interview_date} · {glitch.trust?.trajectory}
            </p>
          </div>
          <div className="text-right font-mono">
            <div className="text-3xl font-bold">
              <span className="text-glitch-cyan">{glitch.trust?.before ?? "?"}</span>
              <span className="text-glitch-text-dim mx-2">→</span>
              <span className="text-glitch-accent">{glitch.trust?.after ?? "?"}</span>
            </div>
            <div className="text-xs text-glitch-text-dim mt-1">trust delta</div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          <Section title="System">
            <Field label="Name" value={glitch.system?.name} />
            <Field label="Type" value={glitch.system?.type} />
            <Field label="Platform" value={glitch.system?.platform} />
            <Field label="Version" value={glitch.system?.version} />
          </Section>

          <Section title="The Event">
            <Field label="Setting" value={glitch.event?.setting} />
            <Field label="Task" value={glitch.event?.task} />
            <Field label="AI Behavior" value={glitch.event?.ai_behavior} />
            <Field label="Expectation" value={glitch.event?.human_expectation} />
            <Field label="Deviation" value={glitch.event?.deviation} />
            <Field label="Direction" value={glitch.event?.deviation_direction} />
          </Section>

          <Section title="Affective Response">
            <Field label="Primary Emotion" value={glitch.affect?.primary_emotion} />
            <Field label="Secondary" value={glitch.affect?.secondary_emotions?.join(", ")} />
            <Field label="Intensity" value={glitch.affect?.intensity} />
            <Field label="Duration" value={glitch.affect?.duration} />
          </Section>

          <Section title="Trust Trajectory">
            <Field label="Before" value={String(glitch.trust?.before)} />
            <Field label="After" value={String(glitch.trust?.after)} />
            <Field label="Trajectory" value={glitch.trust?.trajectory} />
            <Field label="Recovery" value={glitch.trust?.recovery} />
            <Field label="Behavioral Change" value={glitch.trust?.behavioral_change} />
          </Section>

          <Section title="Ethological Analysis">
            <Field label="Mechanism (How)" value={glitch.ethology?.mechanism} />
            <Field label="Development (Ontogeny)" value={glitch.ethology?.development} />
            <Field label="Function (Why)" value={glitch.ethology?.function} />
            <Field label="Phylogeny (Lineage)" value={glitch.ethology?.phylogeny} />
          </Section>

          <Section title="Participant's Framing">
            <Field label="Their name for it" value={glitch.participant_taxonomy?.their_name_for_it} />
            <Field label="Their causal model" value={glitch.participant_taxonomy?.their_causal_model} />
            <Field label="Attribution" value={glitch.participant_taxonomy?.attribution} />
          </Section>

          <Section title="Stakes">
            <Field label="Domain" value={glitch.stakes?.domain} />
            <Field label="Severity" value={glitch.stakes?.severity} />
            <Field label="Reversible" value={glitch.stakes?.reversible ? "Yes" : "No"} />
          </Section>

          {glitch.quotes && glitch.quotes.length > 0 && (
            <Section title="Notable Quotes">
              <div className="space-y-3">
                {glitch.quotes.map((q, i) => (
                  <blockquote key={i} className="border-l-2 border-glitch-accent/50 pl-4 text-sm text-glitch-text italic">
                    &ldquo;{q}&rdquo;
                  </blockquote>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Citation */}
        <div className="mt-10 border border-glitch-border rounded-lg p-6 bg-glitch-surface">
          <h3 className="font-mono text-sm font-bold text-glitch-text-dim uppercase tracking-wider mb-4">Citation</h3>
          <p className="text-sm text-glitch-text mb-4 font-mono">
            Trust.Fail Contributors ({glitch.interview_date?.split("-")[0] || "2026"}).
            Trust Glitch Report: {glitch.glitch_id}. Trust.Fail Database.
            https://trust.fail/glitch/{glitch.glitch_id}
          </p>
          <details className="mt-3">
            <summary className="text-xs font-mono text-glitch-text-dim cursor-pointer hover:text-glitch-accent">BibTeX</summary>
            <pre className="mt-2 text-xs font-mono text-glitch-code bg-glitch-bg rounded p-3 overflow-x-auto">{bibtex}</pre>
          </details>
        </div>

        {/* Downloads */}
        <div className="mt-6 flex gap-3">
          <a
            href={yamlDownloadUrl}
            download={`${glitch.glitch_id}.yaml`}
            className="px-4 py-2 border border-glitch-border rounded text-sm font-mono text-glitch-text-dim hover:text-glitch-text hover:border-glitch-accent/50 transition-all"
          >
            Download YAML
          </a>
          <a
            href={jsonDownloadUrl}
            download={`${glitch.glitch_id}.json`}
            className="px-4 py-2 border border-glitch-border rounded text-sm font-mono text-glitch-text-dim hover:text-glitch-text hover:border-glitch-accent/50 transition-all"
          >
            Download JSON
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-glitch-border rounded-lg p-5 bg-glitch-surface">
      <h2 className="font-mono text-sm font-bold text-glitch-text-dim uppercase tracking-wider mb-4 pb-2 border-b border-glitch-border">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  if (!value || value === "undefined") return null;
  return (
    <div className="flex gap-4 text-sm">
      <span className="font-mono text-glitch-text-dim w-40 shrink-0">{label}</span>
      <span className="text-glitch-text">{value}</span>
    </div>
  );
}
