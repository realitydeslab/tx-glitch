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
  const [filterSystem, setFilterSystem] = useState("");
  const [filterTrajectory, setFilterTrajectory] = useState("");
  const [filterEmotion, setFilterEmotion] = useState("");

  const filtered = useMemo(() => {
    return glitches.filter((g) => {
      if (filterType && g.glitch_type !== filterType) return false;
      if (filterSystem && g.system?.name !== filterSystem) return false;
      if (filterTrajectory && g.trust?.trajectory !== filterTrajectory) return false;
      if (filterEmotion && g.affect?.primary_emotion !== filterEmotion) return false;
      if (search) {
        const s = search.toLowerCase();
        if (!JSON.stringify(g).toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [glitches, search, filterType, filterSystem, filterTrajectory, filterEmotion]);

  const selectClass =
    "bg-white border border-warm-border rounded-full px-4 py-2 text-sm text-warm-dark focus:outline-none focus:border-coral/50 appearance-none";

  return (
    <>
      <div className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Search all glitches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-warm-border rounded-full px-6 py-3 text-warm-dark placeholder:text-warm-dim focus:outline-none focus:border-coral/50"
        />
        <div className="flex flex-wrap gap-3">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className={selectClass}>
            <option value="">All Types</option>
            {glitchTypes.map((t) => (
              <option key={t} value={t}>{t} — {getGlitchTypeName(t)}</option>
            ))}
          </select>
          <select value={filterSystem} onChange={(e) => setFilterSystem(e.target.value)} className={selectClass}>
            <option value="">All AI Systems</option>
            {aiSystems.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
          <select value={filterTrajectory} onChange={(e) => setFilterTrajectory(e.target.value)} className={selectClass}>
            <option value="">All Trajectories</option>
            {trajectories.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
          <select value={filterEmotion} onChange={(e) => setFilterEmotion(e.target.value)} className={selectClass}>
            <option value="">All Emotions</option>
            {emotions.map((e) => (<option key={e} value={e}>{e}</option>))}
          </select>
          {(filterType || filterSystem || filterTrajectory || filterEmotion || search) && (
            <button
              onClick={() => { setSearch(""); setFilterType(""); setFilterSystem(""); setFilterTrajectory(""); setFilterEmotion(""); }}
              className="px-4 py-2 text-sm text-coral hover:text-coral-dark font-semibold transition-colors"
            >
              Clear all ×
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-warm-dim mb-6">
        {filtered.length} glitch{filtered.length !== 1 ? "es" : ""} found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((glitch) => (
          <GlitchCard key={glitch.glitch_id} glitch={glitch} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl mb-2">🔍</p>
          <p className="font-serif text-xl text-warm-dim">No glitches match your filters</p>
          <p className="text-sm text-warm-dim mt-2">Try broadening your search</p>
        </div>
      )}
    </>
  );
}
