"use client";

import { useState, useMemo } from "react";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";
import { GlitchCard } from "@/components/GlitchCard";

interface Props {
  glitches: Glitch[];
  glitchTypes: string[];
  aiSystems: string[];
  trajectories: string[];
  emotions: string[];
}

export function BrowseClient({ glitches, glitchTypes, aiSystems, trajectories, emotions }: Props) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const filtered = useMemo(() => {
    return glitches.filter((g) => {
      if (filterType && g.glitch_type !== filterType) return false;
      if (search && !JSON.stringify(g).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [glitches, search, filterType]);

  return (
    <>
      <div className="flex items-center gap-4 mb-8 border-b border-pudding-border pb-4">
        <input
          type="text"
          placeholder="Find a story..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="font-mono text-sm border border-pudding-border rounded px-3 py-1.5 w-64 focus:outline-none focus:border-pudding-text"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="font-mono text-sm border border-pudding-border rounded px-3 py-1.5 focus:outline-none focus:border-pudding-text"
        >
          <option value="">All</option>
          {glitchTypes.map((t) => (<option key={t} value={t}>{getGlitchTypeName(t)}</option>))}
        </select>
        <span className="font-mono text-xs text-pudding-muted ml-auto">{filtered.length} stories</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {filtered.map((glitch) => (
          <GlitchCard key={glitch.glitch_id} glitch={glitch} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-20 font-serif text-pudding-muted">No stories found.</p>
      )}
    </>
  );
}
