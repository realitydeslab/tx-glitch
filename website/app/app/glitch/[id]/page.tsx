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
  if (!glitch) return { title: "Not Found — Trust.Fail" };
  return { title: `${glitch.glitch_id} — Trust.Fail` };
}

const thumbColors: Record<string, string> = {
  GH: "#F87171", GU: "#C084FC", GB: "#FB923C", GE: "#F472B6", GP: "#FBBF24",
  GR: "#60A5FA", GA: "#34D399", GC: "#F59E0B", GS: "#22D3EE", GO: "#94A3B8",
};

export default async function GlitchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const glitch = await getGlitch(id);
  if (!glitch) notFound();

  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const color = thumbColors[typeCode] || "#D1D5DB";

  return (
    <article className="max-w-[680px] mx-auto px-5 py-12">
      <Link href="/browse" className="font-mono text-xs text-pudding-muted hover:text-pudding-text transition-colors mb-8 inline-block">
        ← back to all stories
      </Link>

      {/* Colored header block */}
      <div
        className="aspect-[16/7] rounded-sm mb-8 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="text-center text-white/90">
          <p className="font-mono text-sm mb-2">{typeCode}</p>
          <h1 className="font-sans font-semibold text-3xl md:text-4xl px-8 leading-tight">
            {typeName.toLowerCase()}
          </h1>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 font-mono text-xs text-pudding-muted mb-8 pb-4 border-b border-pudding-border">
        <span>{glitch.system?.name}</span>
        <span>·</span>
        <span>{glitch.interview_date}</span>
        <span>·</span>
        <span>Trust: {glitch.trust?.before} → {glitch.trust?.after}</span>
      </div>

      {/* Lead quote */}
      {glitch.quotes?.[0] && (
        <blockquote className="font-serif text-xl italic text-pudding-text leading-relaxed mb-10 pl-5 border-l-2 border-pudding-border">
          &ldquo;{glitch.quotes[0]}&rdquo;
        </blockquote>
      )}

      {/* Body — Pudding article style: serif body text */}
      <Section title="What happened">
        <P>{glitch.event?.deviation}</P>
        <P>The participant was {glitch.event?.task}. They expected {glitch.event?.human_expectation?.toLowerCase()}. Instead, {glitch.event?.ai_behavior?.toLowerCase()}.</P>
        {glitch.event?.setting && <P><em>Setting: {glitch.event.setting}</em></P>}
      </Section>

      <Section title="How it felt">
        <P>
          Primary emotion: <strong>{glitch.affect?.primary_emotion}</strong>
          {glitch.affect?.intensity && <> ({glitch.affect.intensity} intensity)</>}.
          {glitch.affect?.secondary_emotions?.length > 0 && <> Also felt: {glitch.affect.secondary_emotions.join(", ")}.</>}
          {glitch.affect?.duration && <> Lasted {glitch.affect.duration}.</>}
        </P>
      </Section>

      <Section title="Trust trajectory">
        <div className="flex items-center gap-8 my-6">
          <div className="text-center">
            <p className="font-sans text-4xl font-semibold" style={{ color: "#2EC4B6" }}>{glitch.trust?.before}</p>
            <p className="font-mono text-xs text-pudding-muted mt-1">before</p>
          </div>
          <span className="font-sans text-2xl text-pudding-muted">→</span>
          <div className="text-center">
            <p className="font-sans text-4xl font-semibold" style={{ color: "#E85D75" }}>{glitch.trust?.after}</p>
            <p className="font-mono text-xs text-pudding-muted mt-1">after</p>
          </div>
        </div>
        <P>Trajectory: {glitch.trust?.trajectory}. Recovery: {glitch.trust?.recovery}. {glitch.trust?.behavioral_change && <>Behavioral change: {glitch.trust.behavioral_change}.</>}</P>
      </Section>

      <Section title="Ethological analysis">
        <p className="font-mono text-xs text-pudding-muted mb-4">Tinbergen&apos;s four questions, adapted for AI agents</p>
        {glitch.ethology?.mechanism && <SubField label="Mechanism" value={glitch.ethology.mechanism} />}
        {glitch.ethology?.development && <SubField label="Development" value={glitch.ethology.development} />}
        {glitch.ethology?.function && <SubField label="Function" value={glitch.ethology.function} />}
        {glitch.ethology?.phylogeny && <SubField label="Phylogeny" value={glitch.ethology.phylogeny} />}
      </Section>

      {glitch.participant_taxonomy?.their_name_for_it && (
        <Section title="In their words">
          <P>They called it: &ldquo;{glitch.participant_taxonomy.their_name_for_it}&rdquo;</P>
          {glitch.participant_taxonomy?.their_causal_model && <P>Their theory: {glitch.participant_taxonomy.their_causal_model}</P>}
        </Section>
      )}

      {/* Citation */}
      <div className="mt-16 pt-8 border-t border-pudding-border">
        <p className="font-mono text-xs text-pudding-muted mb-3">cite this story</p>
        <p className="font-mono text-xs text-pudding-muted leading-relaxed">
          Trust.Fail Contributors ({glitch.interview_date?.split("-")[0] || "2026"}).
          Trust Glitch Report: {glitch.glitch_id}. Trust.Fail Database.
          https://trust.fail/glitch/{glitch.glitch_id}
        </p>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-sans font-semibold text-xl mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-serif text-base leading-relaxed text-pudding-text mb-4">{children}</p>;
}

function SubField({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-4">
      <p className="font-mono text-xs text-pudding-muted uppercase tracking-wider mb-1">{label}</p>
      <p className="font-serif text-base leading-relaxed">{value}</p>
    </div>
  );
}
