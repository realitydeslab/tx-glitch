import { getGlitches, getGlitchTypeName } from "@/lib/glitches";
import { BrowseClient } from "./BrowseClient";

export const metadata = { title: "Browse Glitches — Trust.Fail" };

export default async function BrowsePage() {
  const glitches = await getGlitches();
  const glitchTypes = [...new Set(glitches.map(g => g.glitch_type).filter(Boolean))] as string[];
  const aiSystems = [...new Set(glitches.map(g => g.system?.name).filter(Boolean))] as string[];
  const trajectories = [...new Set(glitches.map(g => g.trust?.trajectory).filter(Boolean))] as string[];
  const emotions = [...new Set(glitches.map(g => g.affect?.primary_emotion).filter(Boolean))] as string[];

  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl mb-3">Browse Glitches</h1>
          <p className="text-warm-dim text-lg">
            {glitches.length} trust experiences documented and growing
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
