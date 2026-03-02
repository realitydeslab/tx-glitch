import { getGlitches, getGlitchTypeName } from "@/lib/glitches";
import { BrowseClient } from "./BrowseClient";

export const metadata = { title: "Browse Glitches — Trust.Fail" };

export default async function BrowsePage() {
  const glitches = await getGlitches();

  // Extract unique values for filters
  const glitchTypes = [...new Set(glitches.map(g => g.glitch_type).filter(Boolean))] as string[];
  const aiSystems = [...new Set(glitches.map(g => g.system?.name).filter(Boolean))] as string[];
  const trajectories = [...new Set(glitches.map(g => g.trust?.trajectory).filter(Boolean))] as string[];
  const emotions = [...new Set(glitches.map(g => g.affect?.primary_emotion).filter(Boolean))] as string[];

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-mono text-3xl font-bold mb-2">Browse Glitches</h1>
          <p className="text-glitch-text-dim">
            {glitches.length} documented trust glitches in the database
          </p>
        </div>

        <BrowseClient
          glitches={glitches}
          glitchTypes={glitchTypes}
          aiSystems={aiSystems}
          trajectories={trajectories}
          emotions={emotions}
        />
      </div>
    </div>
  );
}
