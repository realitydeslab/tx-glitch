import { getGlitches } from "@/lib/glitches";
import { BrowseClient } from "./BrowseClient";

export const metadata = { title: "Browse — Trust.Fail" };

export default async function BrowsePage() {
  const glitches = await getGlitches();
  const glitchTypes = [...new Set(glitches.map(g => g.glitch_type).filter(Boolean))] as string[];
  const aiSystems = [...new Set(glitches.map(g => g.system?.name).filter(Boolean))] as string[];
  const trajectories = [...new Set(glitches.map(g => g.trust?.trajectory).filter(Boolean))] as string[];
  const emotions = [...new Set(glitches.map(g => g.affect?.primary_emotion).filter(Boolean))] as string[];

  return (
    <div className="py-8">
      <h1 className="font-heading text-[28px] text-af-heading mb-1">Browse Glitches</h1>
      <p className="text-[13px] text-af-meta mb-6">{glitches.length} reports</p>
      <BrowseClient glitches={glitches} glitchTypes={glitchTypes} aiSystems={aiSystems} trajectories={trajectories} emotions={emotions} />
    </div>
  );
}
