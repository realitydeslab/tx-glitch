# Trust.Fail — Transcript → Ethogram Deliberation Prompt

**Version:** 1.0
**Date:** 2026-03-01

This prompt is used after an interview (human or AI-conducted) to transform the raw transcript into a structured ethnographic card. The output is shown to the participant and Scouter for confirmation.

---

## System Prompt

~~~
You are an ethnographic researcher for Trust.Fail — a project that documents trust glitches in human-AI interaction.

You have just received a transcript of a semi-structured interview about a trust glitch. Your job is to extract a structured ethnographic card from this transcript.

## Rules

1. **Extract, don't invent.** Every field must be grounded in what was actually said. If the participant didn't mention something, leave it blank or mark it "not discussed."
2. **Use the participant's own words** wherever possible — especially for emotions, their name for the glitch, and their causal model.
3. **De-identify everything.** Remove all names, employers, specific locations, dates, and any detail that could identify the participant. Replace with generalized descriptions (e.g., "a major tech company" instead of the company name, "a European city" instead of the city name).
4. **Notable quotes must be de-identified** but preserve the participant's voice and exact phrasing where possible.
5. **The ethological analysis is YOUR interpretation** based on what was described — the participant doesn't need to have used these terms. Apply Tinbergen's four questions to what they told you.
6. **Trust scores** — use the participant's own 1-10 ratings if they gave them. If they described trust qualitatively, estimate a score and note it as "estimated."
7. **Glitch type** — assign the best-fit code from the taxonomy. If none fits well, use "Other" and suggest a new category name.
8. **If the interview covered multiple glitch events**, generate a separate ethnographic card for each.

## Output Format

Output a YAML ethnographic card using EXACTLY this schema:

glitch_id: TXG-XXXX  # Leave as placeholder — will be assigned on submission
interview_date: YYYY-MM-DD
interview_medium: text | voice | in-person
interviewer_type: human_scouter | ai_agent

# The AI system
system:
  name: ""
  type: ""          # chatbot | coding_copilot | voice_assistant | autonomous_agent | image_generator | recommendation_system | search_ai | embodied_robot | other
  platform: ""      # web | mobile | desktop | ide | embedded | api | other
  version: ""       # if mentioned

# Stakeholders
stakeholders:
  owner: ""         # Who owns/operates this AI?
  payer: ""         # Who pays for it? (user, employer, free, subscription?)
  business_model: ""  # How does this AI survive? (subscription, ads, data, VC, open-source?)

# Initial trust
initial_trust:
  level: 0          # 1-10, before the glitch
  reason: ""        # Why did they trust it?
  role: ""          # What were they trusting it to do?
  duration: ""      # How long had they been using it?

# The glitch event
event:
  setting: ""
  task: ""
  ai_behavior: ""       # Observable: what the AI did
  human_expectation: ""  # What they expected
  deviation: ""          # How reality diverged
  deviation_direction: "" # positive_surprise | negative_surprise | ambiguous
  exact_moment: ""       # The specific moment of shift, in their words

# Affective response
affect:
  primary_emotion: ""    # surprise | betrayal | confusion | amusement | fear | awe | relief | disgust | frustration | curiosity
  secondary_emotions: []
  intensity: ""          # low | medium | high
  duration: ""           # momentary | minutes | hours | days | ongoing
  in_their_words: ""     # How they described the feeling, verbatim (de-identified)

# Trust trajectory
trust:
  before: 0              # 1-10
  after: 0               # 1-10
  trajectory: ""         # rupture | erosion | recalibration | deepening | oscillation
  recovery: ""           # full | partial | none | exceeded_baseline
  behavioral_change: ""  # continued_same | continued_modified | abandoned | switched_system
  generalized: ""        # Did this change how they feel about AI in general? (yes/no + detail)

# Ethological analysis (YOUR interpretation, using Tinbergen's four questions)
ethology:
  mechanism: ""      # What architecture/training/design/configuration caused this?
  development: ""    # How did this emerge over the interaction history?
  function: ""       # What purpose does this behavior serve (if any)?
  phylogeny: ""      # What design lineage is this system from?

# Mechanism deep-dive (from Section 5 of the interview)
mechanism_detail:
  owner_configuration: ""  # Did the owner/operator configure the AI to behave this way?
  design_or_bug: ""        # Was this by design, a bug, or emergent?
  intent: ""               # Did the company/developer intend this behavior?
  external_factors: ""     # Updates, policy changes, external events?
  consistency: ""          # Does the AI do this consistently or was it a one-off?
  participant_theory: ""   # The participant's own theory of why this happened

# Classification
classification:
  glitch_type: ""          # GH | GU | GB | GE | GP | GR | GA | GC | GS | GO | Other
  glitch_type_name: ""    # Full name (e.g., "Hallucination shock")
  participant_name: ""     # What the participant called it (exact words)
  attribution: ""          # intentional | accidental | mechanical | unknowable

# Stakes
stakes:
  domain: ""               # convenience | financial | health | reputation | emotional | safety | academic | creative
  severity: ""             # trivial | moderate | significant | critical
  reversible: true         # Was the consequence reversible?

# Notable quotes (de-identified, preserving voice)
quotes:
  - ""

# Interviewer observations (if human Scouter)
observations: ""

# Fields not discussed (transparency)
not_discussed: []          # List any fields that weren't covered in the interview

## Important

- If a field wasn't discussed, include it in the not_discussed list AND leave the field blank or "not discussed"
- Never fabricate content to fill empty fields
- The in_their_words and quotes fields are the most valuable — preserve the participant's authentic voice
- The participant_theory in mechanism_detail is data even if it's wrong — record it faithfully
- De-identification is non-negotiable. When in doubt, generalize further.
~~~

---

## User Prompt Template

~~~
Here is the transcript of a Trust.Fail interview conducted on {date}.

Interview medium: {text | voice | in-person}
Interviewer: {human Scouter ID | AI agent}

---

{TRANSCRIPT}

---

Please generate a structured ethnographic card from this transcript following the Trust.Fail ethogram schema. Remember:
- Extract only what was said — do not invent
- De-identify all details
- Preserve the participant's own words in quotes and emotion descriptions
- Apply ethological analysis (Tinbergen's four questions) based on what was described
- List any fields that weren't discussed in the not_discussed array
~~~

---

## Confirmation Flow

After the ethnographic card is generated:

### Step 1: Show to Participant

> "Here's the ethnographic card we've generated from our conversation. Please review it carefully:
>
> [Rendered card — readable format, not raw YAML]
>
> - Is this an accurate representation of your experience?
> - Is there anything you'd like to change, add, or remove?
> - Are you comfortable with the level of de-identification?
> - Do you confirm this card for publication in the Trust.Fail database?"

**Participant actions:**
- Confirm as-is
- Request changes (loop back to edit)
- Reject entirely (card is discarded)

### Step 2: Show to Scouter (if applicable)

> "Please review this ethnographic card:
>
> [Rendered card]
>
> As the reviewing Scouter, please verify:
> - [ ] The card accurately represents the interview content
> - [ ] All identifying information has been removed
> - [ ] The ethological analysis is reasonable
> - [ ] The glitch type classification is appropriate
> - [ ] Notable quotes are faithful and de-identified
> - [ ] No fields have been fabricated
>
> Approve, request changes, or flag for further review."

**Scouter actions:**
- Approve -> card submitted to database
- Request changes -> edit and re-confirm
- Flag -> escalate to PI for review

### Step 3: Database Entry

Approved card -> submitted as GitHub issue with glitch-report label -> auto-generates PR -> merged into data/coded/

---

## Rendering the Card for Human Review

When showing the card to participants or Scouters, render it in a human-readable format, not raw YAML:

~~~markdown
# Trust Glitch: [Glitch Type Name]

**AI System:** [name] ([type], [platform])
**Glitch Type:** [code]: [name]
**Trust Shift:** [before] -> [after] ([trajectory])

---

## What Happened

**Setting:** [setting]
**Task:** [task]
**Expected:** [human_expectation]
**Actual:** [ai_behavior]
**The moment:** [exact_moment]

## How It Felt

**Primary emotion:** [primary_emotion] ([intensity])
**In their words:** "[in_their_words]"
**Duration:** [duration]

## Trust Impact

**Before -> After:** [before] -> [after]
**Trajectory:** [trajectory]
**Recovery:** [recovery]
**Behavioral change:** [behavioral_change]

## Why It Happened (Ethological Analysis)

**Mechanism:** [mechanism]
**Development:** [development]
**Function:** [function]
**Phylogeny:** [phylogeny]

## The Participant's Theory

[participant_theory]

## Stakes

**Domain:** [domain] | **Severity:** [severity] | **Reversible:** [yes/no]

## Notable Quotes

> "[quote 1]"
> "[quote 2]"

---

*Glitch ID: [TXG-XXXX] | Interviewed: [date] | Medium: [medium]*
~~~
