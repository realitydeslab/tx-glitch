import Link from "next/link";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";

// Each type gets a distinct solid color (like Pudding story thumbnails)
const thumbColors: Record<string, string> = {
  GH: "#F87171", GU: "#C084FC", GB: "#FB923C", GE: "#F472B6", GP: "#FBBF24",
  GR: "#60A5FA", GA: "#34D399", GC: "#F59E0B", GS: "#22D3EE", GO: "#94A3B8",
};

export function GlitchCard({ glitch }: { glitch: Glitch }) {
  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const color = thumbColors[typeCode] || "#D1D5DB";
  const summary = glitch.event?.deviation || glitch.event?.ai_behavior || "";

  return (
    <Link href={`/glitch/${glitch.glitch_id}`} className="story-card block">
      {/* Color thumbnail — Pudding style */}
      <div
        className="aspect-[4/3] rounded-sm mb-3 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="font-sans text-white/90 font-semibold text-5xl tracking-tight">
          {typeCode}
        </span>
      </div>
      {/* Meta line */}
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-xs text-pudding-muted">#{glitch.glitch_id.replace("TXG-", "")}</span>
        <span className="font-mono text-xs text-pudding-muted">{glitch.interview_date?.slice(0, 7)}</span>
      </div>
      {/* Title */}
      <h3 className="font-sans font-semibold text-story-title text-pudding-text mb-1 leading-tight">
        {typeName.toLowerCase()}
      </h3>
      {/* Description */}
      <p className="font-mono text-story-desc text-pudding-muted line-clamp-2">
        {summary}
      </p>
    </Link>
  );
}
