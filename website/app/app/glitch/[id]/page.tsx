import { getGlitch, getGlitches, getGlitchTypeName } from "@/lib/glitches";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return (await getGlitches()).map(g => ({ id: g.glitch_id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await getGlitch(id);
  return { title: g ? `${g.glitch_id} — Trust.Fail` : "Not Found" };
}

const typeColors: Record<string, string> = {
  GH: "#E53E3E", GU: "#805AD5", GB: "#DD6B20", GE: "#D53F8C", GP: "#D69E2E",
  GR: "#3182CE", GA: "#38A169", GC: "#C05621", GS: "#0891B2", GO: "#718096",
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await getGlitch(id);
  if (!g) notFound();

  const typeCode = g.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const color = typeColors[typeCode] || "#718096";

  return (
    <article className="py-8">
      <Link href="/browse" className="text-[12px] text-af-meta hover:text-af-text no-underline">← All reports</Link>

      {/* Title area */}
      <div className="mt-4 mb-6 pb-4 border-b border-af-border">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-heading font-medium px-1.5 py-0.5 rounded text-white text-[11px]" style={{ backgroundColor: color }}>{typeCode}</span>
          <span className="font-heading text-[13px] text-af-meta">{typeName}</span>
        </div>
        <h1 className="font-heading text-[26px] text-af-text leading-snug mb-3">
          {g.event?.deviation || g.glitch_id}
        </h1>
        <div className="text-[12px] text-af-meta flex items-center gap-2 flex-wrap">
          <span>{g.system?.name}</span> · <span>{g.interview_date}</span> · <span>Trust: {g.trust?.before} → {g.trust?.after}</span>
        </div>
      </div>

      {/* Quote */}
      {g.quotes?.[0] && (
        <blockquote className="text-[16px] italic text-af-heading leading-relaxed mb-6 pl-4 border-l-3 border-af-border">
          &ldquo;{g.quotes[0]}&rdquo;
        </blockquote>
      )}

      {/* Body — AF-style long-form post content */}
      <div className="text-[15px] leading-[1.7] text-af-text space-y-6">
        <Section title="What happened">
          <p>{g.event?.deviation}</p>
          {g.event?.task && <p>The participant was {g.event.task}. They expected {g.event?.human_expectation?.toLowerCase()}. Instead, {g.event?.ai_behavior?.toLowerCase()}.</p>}
          {g.event?.setting && <p className="italic text-af-meta">Setting: {g.event.setting}</p>}
        </Section>

        <Section title="How it felt">
          <p>Primary emotion: <strong>{g.affect?.primary_emotion}</strong>{g.affect?.intensity && ` (${g.affect.intensity})`}.
          {g.affect?.secondary_emotions?.length > 0 && ` Also: ${g.affect.secondary_emotions.join(", ")}.`}
          {g.affect?.duration && ` Duration: ${g.affect.duration}.`}</p>
        </Section>

        <Section title="Trust trajectory">
          <div className="flex items-baseline gap-4 my-3 font-heading">
            <span className="text-[32px] font-medium" style={{ color: "#38A169" }}>{g.trust?.before}</span>
            <span className="text-af-meta text-[18px]">→</span>
            <span className="text-[32px] font-medium" style={{ color: "#E53E3E" }}>{g.trust?.after}</span>
          </div>
          <p>Trajectory: {g.trust?.trajectory}. Recovery: {g.trust?.recovery}. {g.trust?.behavioral_change && `Change: ${g.trust.behavioral_change}.`}</p>
        </Section>

        <Section title="Ethological analysis">
          <p className="text-[12px] text-af-meta italic mb-2">Tinbergen&apos;s four questions, adapted for AI agents</p>
          {g.ethology?.mechanism && <Sub label="Mechanism" value={g.ethology.mechanism} />}
          {g.ethology?.development && <Sub label="Development" value={g.ethology.development} />}
          {g.ethology?.function && <Sub label="Function" value={g.ethology.function} />}
          {g.ethology?.phylogeny && <Sub label="Phylogeny" value={g.ethology.phylogeny} />}
        </Section>

        {g.participant_taxonomy?.their_name_for_it && (
          <Section title="Participant's taxonomy">
            <p>They called it: &ldquo;{g.participant_taxonomy.their_name_for_it}&rdquo;</p>
            {g.participant_taxonomy?.their_causal_model && <p>Their theory: {g.participant_taxonomy.their_causal_model}</p>}
          </Section>
        )}

        <Section title="Stakes">
          <p>Domain: {g.stakes?.domain}. Severity: {g.stakes?.severity}. Reversible: {g.stakes?.reversible ? "Yes" : "No"}.</p>
        </Section>
      </div>

      {/* Citation */}
      <div className="mt-10 pt-4 border-t border-af-border">
        <p className="text-[12px] text-af-meta mb-2">Cite this report</p>
        <pre className="text-[11px] font-mono text-af-meta bg-af-card border border-af-border rounded p-3 overflow-x-auto">{`Trust.Fail Contributors (${g.interview_date?.split("-")[0] || "2026"}).
Trust Glitch Report: ${g.glitch_id}. Trust.Fail Database.
https://trust.fail/glitch/${g.glitch_id}`}</pre>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-[18px] text-af-heading mb-2 font-medium">{title}</h2>
      {children}
    </div>
  );
}

function Sub({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 pl-3 border-l-2 border-af-border">
      <p className="text-[11px] font-heading text-af-meta uppercase tracking-wider mb-0.5">{label}</p>
      <p>{value}</p>
    </div>
  );
}
