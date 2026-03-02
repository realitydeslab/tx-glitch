import Link from "next/link";
import { Glitch, getGlitchTypeName, getGlitchTypeColor } from "@/lib/glitch-types";

export function GlitchCard({ glitch }: { glitch: Glitch }) {
  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const typeColor = getGlitchTypeColor(typeCode);
  const trustBefore = glitch.trust?.before ?? "?";
  const trustAfter = glitch.trust?.after ?? "?";
  const summary = glitch.event?.deviation || glitch.event?.ai_behavior || "No summary available";

  return (
    <Link href={`/glitch/${glitch.glitch_id}`}>
      <div className="group border border-glitch-border rounded-lg p-5 bg-glitch-surface hover:bg-glitch-surface-hover hover:border-glitch-accent/30 transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`inline-block px-2 py-0.5 text-xs font-mono font-medium rounded border ${typeColor}`}>
              {typeCode}
            </span>
            <span className="text-xs text-glitch-text-dim font-mono">{typeName}</span>
          </div>
          <span className="font-mono text-sm">
            <span className="text-glitch-cyan">{trustBefore}</span>
            <span className="text-glitch-text-dim mx-1">→</span>
            <span className="text-glitch-accent">{trustAfter}</span>
          </span>
        </div>
        <p className="text-sm text-glitch-text leading-relaxed mb-3 line-clamp-2">{summary}</p>
        <div className="flex items-center justify-between text-xs text-glitch-text-dim font-mono">
          <span>{glitch.system?.name || "Unknown AI"}</span>
          <div className="flex items-center gap-3">
            {glitch.affect?.primary_emotion && (
              <span className="text-glitch-yellow">{glitch.affect.primary_emotion}</span>
            )}
            <span>{glitch.glitch_id}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
