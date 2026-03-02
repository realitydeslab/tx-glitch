import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export type { Glitch } from "./glitch-types";
export { getGlitchTypeName, getGlitchTypeColor } from "./glitch-types";
import type { Glitch } from "./glitch-types";

const DATA_DIR = path.join(process.cwd(), "..", "..", "data", "coded");

export async function getGlitches(): Promise<Glitch[]> {
  try {
    const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"));
    return files.map((file) => {
      const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
      return yaml.load(content) as Glitch;
    }).sort((a, b) => (b.interview_date || "").localeCompare(a.interview_date || ""));
  } catch {
    return [];
  }
}

export async function getGlitch(id: string): Promise<Glitch | null> {
  const glitches = await getGlitches();
  return glitches.find((g) => g.glitch_id === id) || null;
}
