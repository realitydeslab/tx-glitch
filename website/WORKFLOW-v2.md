# Trust.Fail — Workflow v2: AI Interview First

**Version:** 2.0
**Date:** 2026-03-02

The primary reporting path is a **fully AI-conducted voice interview**, designed as a two-stage process: quick capture when the glitch happens, full interview shortly after.

---

## The Two-Stage Model

### Stage 1: Capture the Moment (2 min)

When a trust glitch happens, the reporter opens trust.fail:

1. Tap **"I just got glitched"**
2. **Upload evidence** — screenshot, screen recording, chat log (timestamped automatically)
3. **Record a voice note** (60–90 sec) — "Here's what just happened"
4. Done. System says: "Got it. We'll follow up within 48 hours for the full interview."

**Why this matters:**
- Evidence is captured while fresh and unaltered
- The voice note preserves the raw emotional reaction before narrative shaping
- Timestamps create a verifiable record
- Total commitment: 2–3 minutes

### Stage 2: The Full AI Interview (15–20 min)

Within 48 hours, the system sends a reminder:
> "Ready to tell the full story? Your AI interviewer is available now."

The reporter clicks the link and enters a voice conversation with the AI interviewer agent. The agent:

1. **References their uploaded evidence:**
   > "I see you uploaded a screenshot. Can you walk me through what was happening right before this?"

2. **Follows the 5-section protocol:**

   **Section 1 — The Stakeholders** (2 min)
   > "Which AI system was this? Who makes it? Do you pay for it?"

   **Section 2 — The Initial Trust** (2 min)
   > "When did you start using it? What made you trust it? What were you relying on it for?"

   **Section 3 — The Glitch Moment** (5–8 min, the core)
   > "Walk me through what happened, step by step."
   > Probes: "What exactly did it say?" / "What did you expect instead?" / "What was the exact moment you felt the shift?"

   **Section 4 — The Experience** (3 min)
   > "How did that feel?" / "How long did the feeling last?" / "Did you keep using the system?" / "Did you tell anyone?"

   **Section 5 — The Mechanism** (3 min)
   > "Why do you think it did that?" / "Do you think the company intended this?" / "Is this something it does consistently?"

3. **Asks for additional evidence:**
   > "Do you have any other screenshots or logs you'd like to share?"

4. **Generates the ethnographic card** from the conversation transcript + uploaded evidence

5. **Shows the card to the reporter:**
   > "Here's what I captured from our conversation. Does this look right?"
   > Reporter can confirm, edit, or reject

### Stage 3: Verification (Async)

After the reporter confirms:
- A Scouter reviews the card against the evidence and interview recording
- Dual coding: a second reviewer independently classifies the glitch type
- Verified card enters the database

---

## Why AI Interview First

| Factor | AI Voice Interview | Human Scouter | Self-Report Form |
|--------|:-:|:-:|:-:|
| Available 24/7 | ✅ | ❌ | ✅ |
| No scheduling needed | ✅ | ❌ | ✅ |
| Probes for depth | ✅ | ✅ | ❌ |
| Captures emotion in voice | ✅ | ✅ | ❌ |
| Consistent protocol | ✅ | ⚠️ varies | ❌ |
| Rich narrative data | ✅ | ✅ | ❌ |
| Scales to 1000s | ✅ | ❌ | ✅ |
| Trusted case | ✅ (with evidence) | ✅✅ | ⚠️ weak |

**The AI interview is the sweet spot:** convenient enough that people actually do it, structured enough that it produces research-quality ethograms, and anchored by uploaded evidence for trustworthiness.

**Human Scouter interviews remain available** as an upgrade path for:
- Complex cases that need deeper probing
- Participants who prefer a human
- Cases flagged by the AI as potentially significant
- Cross-validation studies (comparing AI vs human interview quality)

---

## All Reporting Paths (Updated)

```
                    Reporter visits trust.fail
                              |
                    "I just got glitched"
                              |
                 +------------+------------+
                 |                         |
          STAGE 1: Quick Capture     (or skip to full
          - Upload evidence           interview directly)
          - 60-sec voice note               |
                 |                         |
          STAGE 2: AI Voice Interview ◄────┘
          - 15-20 min conversation
          - References uploaded evidence
          - 5-section protocol
          - Auto-generates ethogram card
                 |
          Reporter reviews & confirms card
                 |
          STAGE 3: Scouter Verification (async)
          - Cross-check card vs evidence
          - Dual coding
                 |
          VERIFIED ETHNOGRAPHIC CARD
          → database
```

**Alternative paths (still supported):**
- **Request human Scouter** → scheduled video interview → same output
- **Scouter field upload** → direct card submission → peer review
- **Quick text report** → job board → Scouter or AI follow-up

---

## AI Interviewer Agent Spec

### Voice Interaction
- **Input:** Browser microphone → Whisper API (speech-to-text) → LLM
- **Output:** LLM response → TTS (text-to-speech) → speaker
- **Fallback:** Text chat always available alongside voice
- **Language:** English initially, expandable

### System Prompt Core Behavior
- Conversational, warm, non-judgmental
- Follows the 5-section protocol but adapts to the flow
- **Probes relentlessly (but gently) for specifics:**
  - "Can you remember the exact words?"
  - "What were you expecting instead?"
  - "Why do you think it did that?"
- **References uploaded evidence** when available
- Asks for trust scores (1-10 before/after)
- Asks the participant to name the glitch in their own words
- Never leads or suggests answers
- Knows when to wrap up (doesn't over-interview)

### Post-Interview Pipeline
1. Full transcript assembled (from speech-to-text)
2. Deliberation prompt extracts ethogram YAML
3. Card rendered in human-readable format
4. Shown to participant for confirmation
5. Submitted to Scouter review queue

### Recording & Privacy
- Full conversation is recorded (audio + transcript)
- Recording stored encrypted, for verification only
- Not used for analysis — the ethnographic card is the unit of analysis
- Participant consented before interview started
- Auto-deleted after 3 years (per retention policy)

---

## Trust Signals in the AI Interview Path

How this produces **trusted cases**, not just convenient ones:

1. **Contemporaneous evidence** — screenshots uploaded at the time of the glitch, not reconstructed
2. **Timestamped capture** — evidence + initial voice note created within minutes of the event
3. **Unrehseared first reaction** — the Stage 1 voice note preserves raw emotion
4. **Cross-referenced interview** — AI references the evidence during the interview ("walk me through this screenshot")
5. **Structured protocol** — every interview covers the same 5 sections
6. **Consistent probing** — AI never forgets to ask about mechanism, stakeholders, or trust scores
7. **Recorded audit trail** — full audio + transcript stored
8. **Human verification** — Scouter reviews card against evidence
9. **Dual coding** — two independent reviewers classify glitch type
10. **Participant confirmation** — reporter reviews and confirms the card

---

*This is the primary workflow for trust.fail. Human Scouter interviews are the gold-standard upgrade; AI interviews are the default path.*
