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
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Database</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Browse Glitches</h1>
        <p className="text-text-secondary text-lg mb-12">
          {glitches.length} trust experiences documented and growing.
        </p>
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
