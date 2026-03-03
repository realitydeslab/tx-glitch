import { getGlitches } from "@/lib/glitches";
import { BrowseClient } from "./BrowseClient";

export const metadata = { title: "Browse Glitches — Trust.Fail" };

export default async function BrowsePage() {
  const glitches = await getGlitches();
  const glitchTypes = [...new Set(glitches.map(g => g.glitch_type).filter(Boolean))] as string[];
  const aiSystems = [...new Set(glitches.map(g => g.system?.name).filter(Boolean))] as string[];
  const trajectories = [...new Set(glitches.map(g => g.trust?.trajectory).filter(Boolean))] as string[];
  const emotions = [...new Set(glitches.map(g => g.affect?.primary_emotion).filter(Boolean))] as string[];

  return (
    <div className="max-w-[1080px] mx-auto px-5 py-16">
      <h1 className="font-sans font-semibold text-3xl mb-2">Browse Glitches</h1>
      <p className="font-mono text-sm text-pudding-muted mb-10">{glitches.length} trust experiences documented</p>
      <BrowseClient
        glitches={glitches}
        glitchTypes={glitchTypes}
        aiSystems={aiSystems}
        trajectories={trajectories}
        emotions={emotions}
      />
    </div>
  );
}
