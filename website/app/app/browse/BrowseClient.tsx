"use client";

import { useState, useMemo } from "react";
import { Glitch, getGlitchTypeName } from "@/lib/glitch-types";
import { GlitchCard } from "@/components/GlitchCard";

interface Props { glitches: Glitch[]; glitchTypes: string[]; aiSystems: string[]; trajectories: string[]; emotions: string[]; }

export function BrowseClient({ glitches, glitchTypes, aiSystems }: Props) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterSystem, setFilterSystem] = useState("");

  const filtered = useMemo(() => {
    return glitches.filter((g) => {
      if (filterType && g.glitch_type !== filterType) return false;
      if (filterSystem && g.system?.name !== filterSystem) return false;
      if (search && !JSON.stringify(g).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [glitches, search, filterType, filterSystem]);

  const sel = "font-heading text-[13px] border border-af-border rounded px-2 py-1 bg-af-card focus:outline-none";

  return (
    <>
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-af-border">
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
          className={`${sel} w-48`} />
        <select value={filterType} onChange={e => setFilterType(e.target.value)} className={sel}>
          <option value="">All Types</option>
          {glitchTypes.map(t => <option key={t} value={t}>{t} — {getGlitchTypeName(t)}</option>)}
        </select>
        <select value={filterSystem} onChange={e => setFilterSystem(e.target.value)} className={sel}>
          <option value="">All Systems</option>
          {aiSystems.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <span className="text-[12px] text-af-meta ml-auto">{filtered.length} results</span>
      </div>
      {filtered.map(g => <GlitchCard key={g.glitch_id} glitch={g} />)}
      {filtered.length === 0 && <p className="text-center py-12 text-af-meta">No results.</p>}
    </>
  );
}
