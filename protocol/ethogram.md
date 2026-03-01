# TX Glitch Ethogram — Coding Scheme

**Version:** 1.0
**Date:** 2026-03-01

## What is This?

An ethogram is a catalog of behaviors observed in a species. This is an ethogram for **trust behaviors** in human-AI interaction — specifically, the moments where trust shifts.

Each glitch event from an interview gets coded against this scheme.

---

## Glitch Entry Template

```yaml
glitch_id: TXG-XXXX
participant_id: P-XXX
interview_date: YYYY-MM-DD
interviewer: [Scouter ID]

# The AI system
system:
  name: ""                    # e.g., ChatGPT, Copilot, Siri
  type: ""                    # chatbot / copilot / voice assistant / autonomous agent / other
  platform: ""                # web / mobile / desktop / embedded
  version: ""                 # if known

# The glitch event
event:
  setting: ""                 # where/when it happened
  task: ""                    # what the human was trying to do
  ai_behavior: ""             # observable: what the AI did
  human_expectation: ""       # what the human expected
  deviation: ""               # how reality diverged from expectation
  deviation_direction: ""     # positive_surprise / negative_surprise / ambiguous

# Affective response
affect:
  primary_emotion: ""         # surprise / betrayal / confusion / amusement / fear / awe / relief / disgust
  secondary_emotions: []      # additional emotions
  intensity: ""               # low / medium / high
  duration: ""                # momentary / minutes / hours / days / ongoing

# Trust trajectory
trust:
  before: 0                   # 1-10 scale
  after: 0                    # 1-10 scale
  trajectory: ""              # rupture / erosion / recalibration / deepening / oscillation
  recovery: ""                # full / partial / none / exceeded_baseline
  behavioral_change: ""       # continued_same / continued_modified / abandoned / switched_system

# Ethological analysis (Tinbergen's four questions, adapted)
ethology:
  mechanism: ""               # What architecture/training/design caused this?
  development: ""             # How did this emerge over the interaction history?
  function: ""                # What purpose does this behavior serve (if any)?
  phylogeny: ""               # What design lineage does this system come from?

# Participant's own framing
participant_taxonomy:
  their_name_for_it: ""       # What they called the glitch type (Q19)
  their_causal_model: ""      # What they think caused it (Q17)
  attribution: ""             # intentional / accidental / mechanical / unknowable

# Stakes & context
stakes:
  domain: ""                  # convenience / financial / health / reputation / emotional / safety
  severity: ""                # trivial / moderate / significant / critical
  reversible: true            # was the consequence reversible?

# Evidence (screenshots, images, recordings submitted by participant)
evidence:
  available: false
  items:
    - type: ""                # screenshot / image_series / chat_log / screen_recording / video / other
      filename: ""
      annotation: ""          # Participant's description of what this shows
      deidentified: false     # Has this been reviewed for identifying information?
      published: false        # Is this included in the public card?
  notes: ""

# Coding metadata
coding:
  coder: ""                   # Who coded this entry
  date: ""
  confidence: ""              # high / medium / low
  notes: ""
```

---

## Glitch Type Taxonomy (Emergent)

*This section will grow as we collect data. Initial seed categories below — expect these to be revised or replaced by grounded categories from interviews.*

| Code | Type | Description |
|------|------|-------------|
| GH | **Hallucination shock** | AI confidently fabricates information |
| GU | **Uncanny accuracy** | AI knows/infers something it "shouldn't" |
| GB | **Betrayal of expectation** | AI fails at something it was trusted to do |
| GE | **Emotional boundary cross** | AI exhibits unexpected emotional/personal behavior |
| GP | **Performance cliff** | AI works well then suddenly fails catastrophically |
| GR | **Refusal surprise** | AI refuses to do something the human thought was fine |
| GA | **Agency assertion** | AI acts autonomously in unexpected ways |
| GC | **Consistency break** | AI contradicts itself or behaves inconsistently |
| GS | **Surprising competence** | AI exceeds expectations in a trust-building way |
| GO | **Opacity frustration** | Human can't understand why the AI did what it did |

---

## Inter-Rater Reliability

- Each glitch event should be coded by **at least two coders**
- Disagreements resolved through discussion
- Track Cohen's kappa for key categorical fields
- Target: κ ≥ 0.7 for glitch type, trust trajectory, and affect
