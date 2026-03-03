import Link from "next/link";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";

const typeEmoji: Record<string, string> = {
  GH: "🫣", GU: "😳", GB: "💔", GE: "😬", GP: "📉",
  GR: "🚫", GA: "🤖", GC: "🔀", GS: "✨", GO: "🤷",
};

const typeBg: Record<string, string> = {
  GH: "bg-red-50 border-red-200",
  GU: "bg-purple-50 border-purple-200",
  GB: "bg-orange-50 border-orange-200",
  GE: "bg-pink-50 border-pink-200",
  GP: "bg-yellow-50 border-yellow-200",
  GR: "bg-blue-50 border-blue-200",
  GA: "bg-emerald-50 border-emerald-200",
  GC: "bg-amber-50 border-amber-200",
  GS: "bg-cyan-50 border-cyan-200",
  GO: "bg-slate-50 border-slate-200",
};

export function GlitchCard({ glitch }: { glitch: Glitch }) {
  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const emoji = typeEmoji[typeCode] || "❓";
  const cardBg = typeBg[typeCode] || "bg-white border-warm-border";
  const trustBefore = glitch.trust?.before ?? "?";
  const trustAfter = glitch.trust?.after ?? "?";
  const summary = glitch.event?.deviation || glitch.event?.ai_behavior || "No summary available";
  const quote = glitch.quotes?.[0];

  return (
    <Link href={`/glitch/${glitch.glitch_id}`}>
      <div className={`story-card border rounded-2xl p-6 cursor-pointer ${cardBg}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{emoji}</span>
          <span className="text-sm font-semibold text-warm-dark">{typeName}</span>
        </div>
        <p className="text-warm-dark leading-relaxed mb-4 line-clamp-3">{summary}</p>
        {quote && (
          <blockquote className="text-sm mb-4 line-clamp-2">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-warm-dim">{glitch.system?.name || "Unknown AI"}</span>
          <div className="trust-arrow font-mono font-medium">
            <span className="text-teal">{trustBefore}</span>
            <span className="text-warm-dim">→</span>
            <span className="text-coral">{trustAfter}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
