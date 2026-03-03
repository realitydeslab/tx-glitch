import Link from "next/link";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";

// Pudding-style: each glitch type gets a bold, saturated background color
const cardColors: Record<string, string> = {
  GH: "bg-card-red",
  GU: "bg-card-purple",
  GB: "bg-card-orange",
  GE: "bg-card-pink",
  GP: "bg-card-yellow",
  GR: "bg-card-blue",
  GA: "bg-card-emerald",
  GC: "bg-card-amber",
  GS: "bg-card-cyan",
  GO: "bg-card-slate",
};

const cardTextColors: Record<string, string> = {
  GH: "text-red-950",
  GU: "text-purple-950",
  GB: "text-orange-950",
  GE: "text-pink-950",
  GP: "text-yellow-950",
  GR: "text-blue-950",
  GA: "text-emerald-950",
  GC: "text-amber-950",
  GS: "text-cyan-950",
  GO: "text-slate-950",
};

export function GlitchCard({ glitch }: { glitch: Glitch }) {
  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const bg = cardColors[typeCode] || "bg-gray-300";
  const textColor = cardTextColors[typeCode] || "text-gray-900";
  const summary = glitch.event?.deviation || glitch.event?.ai_behavior || "No summary";
  const quote = glitch.quotes?.[0];

  return (
    <Link href={`/glitch/${glitch.glitch_id}`}>
      <div className={`story-card rounded-2xl p-7 min-h-[280px] flex flex-col justify-between cursor-pointer ${bg}`}>
        {/* Top: type label */}
        <div>
          <div className={`text-xs font-mono font-semibold uppercase tracking-widest mb-3 opacity-70 ${textColor}`}>
            {typeCode} · {typeName}
          </div>
          <p className={`text-lg font-semibold leading-snug mb-3 line-clamp-3 ${textColor}`}>
            {summary}
          </p>
          {quote && (
            <p className={`text-sm leading-relaxed opacity-80 line-clamp-2 italic ${textColor}`}>
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>
        {/* Bottom: system + trust */}
        <div className={`flex items-center justify-between mt-5 pt-4 border-t border-black/10 ${textColor}`}>
          <span className="text-sm font-medium">{glitch.system?.name || "Unknown AI"}</span>
          <span className="font-mono text-sm font-bold">
            {glitch.trust?.before ?? "?"} → {glitch.trust?.after ?? "?"}
          </span>
        </div>
      </div>
    </Link>
  );
}
