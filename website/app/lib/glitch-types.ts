export interface Glitch {
  glitch_id: string;
  participant_id: string;
  interview_date: string;
  interviewer: string;
  system: {
    name: string;
    type: string;
    platform: string;
    version: string;
  };
  event: {
    setting: string;
    task: string;
    ai_behavior: string;
    human_expectation: string;
    deviation: string;
    deviation_direction: string;
  };
  affect: {
    primary_emotion: string;
    secondary_emotions: string[];
    intensity: string;
    duration: string;
  };
  trust: {
    before: number;
    after: number;
    trajectory: string;
    recovery: string;
    behavioral_change: string;
  };
  ethology: {
    mechanism: string;
    development: string;
    function: string;
    phylogeny: string;
  };
  participant_taxonomy: {
    their_name_for_it: string;
    their_causal_model: string;
    attribution: string;
  };
  stakes: {
    domain: string;
    severity: string;
    reversible: boolean;
  };
  evidence: {
    available: boolean;
    items: Array<{ type: string; filename: string; annotation: string }>;
    notes: string;
  };
  coding: {
    coder: string;
    date: string;
    confidence: string;
    notes: string;
  };
  glitch_type?: string;
  quotes?: string[];
}

export function getGlitchTypeName(code: string): string {
  const map: Record<string, string> = {
    GH: "Hallucination Shock",
    GU: "Uncanny Accuracy",
    GB: "Betrayal of Expectation",
    GE: "Emotional Boundary Cross",
    GP: "Performance Cliff",
    GR: "Refusal Surprise",
    GA: "Agency Assertion",
    GC: "Consistency Break",
    GS: "Surprising Competence",
    GO: "Opacity Frustration",
  };
  return map[code] || code;
}

export function getGlitchTypeColor(code: string): string {
  const map: Record<string, string> = {
    GH: "bg-red-500/20 text-red-400 border-red-500/30",
    GU: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    GB: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    GE: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    GP: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    GR: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    GA: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    GC: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    GS: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    GO: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  };
  return map[code] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
}
