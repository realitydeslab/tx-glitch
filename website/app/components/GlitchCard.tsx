import Link from "next/link";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";

const typeColors: Record<string, string> = {
  GH: "#E53E3E", GU: "#805AD5", GB: "#DD6B20", GE: "#D53F8C", GP: "#D69E2E",
  GR: "#3182CE", GA: "#38A169", GC: "#C05621", GS: "#0891B2", GO: "#718096",
};

export function GlitchCard({ glitch }: { glitch: Glitch }) {
  const typeCode = glitch.glitch_type || "??";
  const typeName = getGlitchTypeName(typeCode);
  const color = typeColors[typeCode] || "#718096";
  const summary = glitch.event?.deviation || glitch.event?.ai_behavior || "";
  const delta = (glitch.trust?.after ?? 0) - (glitch.trust?.before ?? 0);

  return (
    <div className="py-3 border-b border-af-border group">
      <div className="flex items-start gap-3">
        {/* Score/karma-like column */}
        <div className="flex flex-col items-center min-w-[40px] pt-0.5">
          <span className="font-heading text-lg font-medium" style={{ color: delta >= 0 ? "#38A169" : "#E53E3E" }}>
            {delta >= 0 ? "+" : ""}{delta}
          </span>
          <span className="text-[10px] text-af-meta">trust Δ</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Link href={`/glitch/${glitch.glitch_id}`} className="no-underline">
            <h3 className="font-heading text-[18px] font-medium text-af-text group-hover:text-af-link leading-snug mb-1 transition-colors" style={{ color: "#000" }}>
              {summary}
            </h3>
          </Link>
          <div className="flex items-center gap-2 flex-wrap text-xs text-af-meta">
            <span className="font-heading font-medium px-1.5 py-0.5 rounded text-white text-[10px]" style={{ backgroundColor: color }}>
              {typeCode}
            </span>
            <span>{typeName}</span>
            <span>·</span>
            <span>{glitch.system?.name}</span>
            <span>·</span>
            <span>Trust: {glitch.trust?.before} → {glitch.trust?.after}</span>
            <span>·</span>
            <span>{glitch.interview_date}</span>
          </div>
          {glitch.quotes?.[0] && (
            <p className="text-[13px] text-af-meta mt-1.5 italic leading-relaxed line-clamp-1">
              &ldquo;{glitch.quotes[0]}&rdquo;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
