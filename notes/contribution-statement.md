# Contribution Statement — Trust.Fail

## For the ARIA Scaling Trust Programme

---

### Framing

The ARIA Scaling Trust programme's central thesis: secure agent coordination requires trust infrastructure. The programme's theory of change: build tools → run Arena → develop formal guarantees. The programme's blind spot: **all of this assumes you know what trust failures look like in practice.**

Trust.Fail fills that blind spot. Below are five specific contributions, ordered by significance to the programme.

---

## Contribution 1: The First Open Empirical Corpus of Mechanism-Level Trust Failures in Human-AI Interaction

**One-sentence claim:**
Trust.Fail will produce the field's first open, structured, mechanism-level database of real-world human-AI trust failures — coded to distinguish whether failure originated in system design, training artefacts, operator configuration, or emergent behaviour.

**Evidence:**
- Existing resources (AI Incident Database, AIAAIC) are event-level, lack mechanism attribution, and are not designed for programme-specific use.
- Trust survey literature (Jian et al. 2000; Lee & See 2004) measures attitudes, not incidents; lab-based, not naturalistic.
- Red teaming benchmarks (AdvGLUE, HELM, HarmBench) probe capabilities adversarially, not naturalistically from human experience.
- The proposed ethogram coding scheme — adapted from Tinbergen's four questions — provides a systematic framework for mechanism classification that no existing database applies.

**The "so what?" for Scaling Trust:**
Without mechanism-level data, the programme risks formalising the wrong properties (Track 3.1), building elicitation tools that miss the real failure modes (Track 2.2), and designing Arena challenges that don't reflect how agents actually fail in the wild (Track 1). This corpus is the empirical grounding the programme explicitly needs but cannot generate internally.

**Why hasn't this been done?**
Systematic mechanism-level analysis requires combining AI systems knowledge (to identify architectural/training causes) with ethnographic depth (to understand human experience) with ethological structure (for systematic coding). This cross-disciplinary synthesis is rare. Most AI trust research stays within one discipline: surveys (social science), red-teaming (ML), formal analysis (CS theory).

**Why now?**
The agent transition is happening now — millions of people are interacting with agentic AI systems for the first time. Trust failure modes are crystallising in the wild. If the corpus isn't built in 2025-2026, the naturalistic data is lost: users adapt, systems are updated, the original failure experiences become inaccessible. This is the narrow window.

---

## Contribution 2: An Open-Source Security Policy Elicitation Tool (MCP-Compatible)

**One-sentence claim:**
The Trust.Fail interview engine and deliberation pipeline constitute an open-source, MCP-compatible component for extracting implicit security policies from human reports of trust violations — directly applicable to Track 2.2's requirement capture mandate.

**Evidence:**
- The interview engine follows a rigorous 5-section protocol (stakeholder map → trust baseline → glitch moment → impact → mechanism) designed to surface: what the user expected the AI to do (implicit security policy), what it actually did (security violation), and what would need to change for trust to be restored (security specification).
- The deliberation pipeline converts interview transcripts to structured YAML ethnographic cards with machine-readable fields for mechanism type, trust trajectory, and policy violation class.
- The tool is designed as an MCP server, meaning it can be invoked programmatically by other Track 2 agent systems as part of a larger policy elicitation workflow.
- Open-source under MIT/Apache 2.0, compatible with ARIA's IP requirements.

**The "so what?" for Scaling Trust:**
Track 2.2 requires components that capture human security requirements and translate them into formal specifications. Existing approaches (structured interviews, policy workshops) are expensive, non-scalable, and produce inconsistent outputs. Trust.Fail's AI-powered interview engine runs continuously, produces structured output, and builds a corpus that can be reused. Any Track 2 team building a negotiation engine or formal policy language can plug in the Trust.Fail MCP tool for the requirement capture step.

**Why hasn't this been done?**
LLM-powered interview engines for security policy elicitation are possible only recently (GPT-4, Claude 3). The protocol design combining ethnographic rigor with AI elicitation is novel. Most AI safety evaluation tools focus on model capabilities (can the model do X?), not human trust requirements (what did the human need and expect?).

**Why now?**
The MCP protocol standard has just matured (Anthropic released MCP in late 2024). The timing enables interoperable tool design across the programme.

---

## Contribution 3: A Reusable Behavioural Taxonomy for Agent Trust Failures (Ethogram)

**One-sentence claim:**
The Trust.Fail ethogram — a structured classification scheme adapted from Tinbergen's four questions — provides the first systematic, cross-system vocabulary for describing AI agent trust failures at both observational and mechanism levels.

**Evidence:**
- Tinbergen's four questions (mechanism, development, function, phylogeny) have proven their value for systematic behavioural analysis in ethology for 60+ years; adapting them to AI agent behaviour provides a principled framework rather than ad hoc categorisation.
- Existing AI failure taxonomies (e.g., Microsoft AI Fairness Checklist, NIST AI Risk Management Framework) are normative/risk-focused rather than behaviourally descriptive.
- The ethogram enables cross-system comparison: is a trust failure in GPT-4 of the same mechanism type as the analogous failure in Claude 3? Without a shared vocabulary, these comparisons are impossible.
- Inter-rater reliability (Cohen's κ ≥ 0.7 target) makes the taxonomy scientifically valid and replicable.

**The "so what?" for Scaling Trust:**
Track 3.1 (Formal AI Security) needs a vocabulary for "what to formalise." Track 1 (Arena) needs a vocabulary for "what attack surfaces to test." Track 2.2 needs a vocabulary for "what security properties to elicit." The ethogram provides this shared vocabulary across all three tracks. It's the common language that prevents siloed teams from working on incommensurable problems.

**Why hasn't this been done?**
Ethological frameworks have not been applied to AI agent behaviour before. The prior work on AI behaviour analysis uses either ML taxonomy (loss functions, training dynamics) or HCI taxonomy (usability, user experience) — neither provides the mechanism + function + development + lineage structure that ethology provides.

**Why now?**
The ARIA programme is explicitly building a cross-programme infrastructure. A shared vocabulary is most valuable when it can be adopted at the *start* of a programme, before teams develop incompatible private taxonomies. Year 1 is the right moment.

---

## Contribution 4: Real-World, Grounded Arena Challenge Scenarios

**One-sentence claim:**
Trust.Fail will deliver 30+ real-world-grounded adversarial challenge scenarios for the Arena, derived directly from verified trust failure reports, providing the programme's most ecologically valid test cases.

**Evidence:**
- Each ethnographic card is a documented trust failure: a specific AI system, a specific user expectation, a specific violation. This is a natural adversarial scenario: "Given this user's implicit security policy, can your agent detect/prevent/recover from this violation?"
- The cards include trust trajectory data (before/after scores, recovery patterns) which provides ground truth for the Arena's Utility vs. Security scoring function.
- No other Track 2 or Track 3 team is expected to produce empirically-grounded Arena challenges — most Arena test cases will be synthesised by researchers rather than derived from real user reports.
- Quarterly delivery (10 Q2, 20 Q3, 30+ Q4) means Arena designers have a growing library across the programme year.

**The "so what?" for Scaling Trust:**
The Arena's value depends on the quality of its challenges. Synthetic challenges (designed by researchers) have systematic blind spots — they reflect what researchers think users care about, not what users actually care about. Real-world grounded challenges expose failure modes that synthetic design misses. Trust.Fail's challenge library makes the Arena empirically legitimate.

**Why hasn't this been done?**
Previous AI evaluation efforts (HELM, BIG-bench, HarmBench) are capability benchmarks built by researchers, not failure databases built from user reports. The Arena specifically needs trust failure scenarios, not capability benchmarks. Trust.Fail is the first effort to build this specifically.

**Why now?**
The Arena is being built in 2025-2026. Challenge scenarios need to be available from early in the programme (Q2, Q3). There is a six-month window to establish Trust.Fail as the empirical grounding source before Arena design patterns solidify.

---

## Contribution 5: An Open Research Infrastructure That Outlasts the Programme

**One-sentence claim:**
Trust.Fail is designed as persistent, community-governed open research infrastructure — with permanent card IDs, API access, citable data, and an open Scouter certification programme — that will continue generating value for the AI trust research community beyond the ARIA funding period.

**Evidence:**
- The NASA Aviation Safety Reporting System (ASRS) — the closest analogue — has been operating since 1975 and has produced 1.9M+ reports cited in thousands of papers. Trust.Fail is designed on the same self-sustaining reporting philosophy.
- GitHub as backend ensures: full audit trail, community contributions via PRs, automated pipeline via Actions, permanent content-addressed IDs.
- The Scouter certification programme creates a distributed network of trained interview conductors who continue collecting data beyond the core team's capacity.
- CC BY 4.0 licensing ensures the data remains accessible regardless of funding status.

**The "so what?" for Scaling Trust:**
ARIA is investing £50M in a programme to build AI trust infrastructure. The empirical foundation — the failure database — should not expire when the programme ends. Trust.Fail is explicitly designed as a legacy infrastructure investment that multiplies the value of every other programme investment over a 10-year horizon.

**Why hasn't this been done?**
Building self-sustaining open research infrastructure requires upfront investment in community development, certification programmes, governance structures, and open data pipelines. Grant-funded projects typically optimise for publications, not infrastructure sustainability. Trust.Fail is explicitly designed to invert this priority.

**Why now?**
The window for building a definitive resource in this space is narrow. Within 2-3 years, AI companies will have internal trust failure databases that dwarf anything a research project can build. Public, open, researcher-controlled infrastructure needs to be established now, while the field is still in its formative phase.

---

## Summary

| # | Contribution | Type | Primary Track |
|---|-------------|------|--------------|
| 1 | Empirical corpus of mechanism-level trust failures | Dataset/Infrastructure | 3.4 |
| 2 | Open-source security policy elicitation tool (MCP) | Component/Software | 2.2 |
| 3 | Behavioural taxonomy for agent trust failures (ethogram) | Framework/Component | 2.2 + 3.1 |
| 4 | Real-world grounded Arena challenge scenarios | Test cases | 1 |
| 5 | Persistent open research infrastructure | Infrastructure | All tracks |

The through-line: Trust.Fail is an **empirical data layer** that makes every other programme component more credible, better-grounded, and more empirically valid. It doesn't compete with formal methods, cryptographic protocols, or agent negotiation engines — it feeds them.
