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

  const selectClass = "bg-white border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral";

  return (
    <>
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search glitches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-border rounded-xl px-5 py-3 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
        />
        <div className="flex flex-wrap gap-2">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className={selectClass}>
            <option value="">All Types</option>
            {glitchTypes.map((t) => (<option key={t} value={t}>{t} — {getGlitchTypeName(t)}</option>))}
          </select>
          <select value={filterSystem} onChange={(e) => setFilterSystem(e.target.value)} className={selectClass}>
            <option value="">All Systems</option>
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
              className="px-3 py-2 text-sm text-coral hover:text-coral-dark font-semibold"
            >
              Clear ×
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-text-muted mb-6 font-mono">
        {filtered.length} glitch{filtered.length !== 1 ? "es" : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((glitch) => (
          <GlitchCard key={glitch.glitch_id} glitch={glitch} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="font-serif text-2xl text-text-muted">No glitches match your filters</p>
        </div>
      )}
    </>
  );
}
