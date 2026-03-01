# Trust.Fail — Complete Workflow

**Version:** 1.0
**Date:** 2026-03-01

This document describes every user journey on trust.fail, from first visit to verified ethnographic card in the database.

---

## Actors

| Actor | Description |
|-------|-------------|
| **Reporter** | A person who experienced a trust glitch and wants to share it |
| **Scouter** | A certified human interviewer (student researcher) |
| **AI Agent** | The automated interviewer on the website |
| **PI / Admin** | Principal Investigator or project administrator |

---

## Overview: Two Interview Paths, One Output

```
                    Reporter visits trust.fail
                              |
                    "Report a Glitch"
                              |
                 +------------+------------+
                 |                         |
          "Interview me now"        "I want a human
           (AI Agent)                interviewer"
                 |                         |
                 v                         v
        AI conducts the            Reporter submits
        5-section interview        brief description
        in real-time               + contact info
                 |                         |
                 |                    Goes to Job Board
                 |                         |
                 |                    Scouter picks it up
                 |                    contacts Reporter
                 |                    schedules interview
                 |                         |
                 |                    Scouter conducts
                 |                    interview (text/voice/
                 |                    in-person)
                 |                         |
                 v                         v
        Transcript generated        Scouter uploads
        automatically               transcript or notes
                 |                         |
                 +------------+------------+
                              |
                    Deliberation prompt
                    transforms transcript
                    into ethnographic card
                              |
                    Reporter reviews card
                    (confirm / edit / reject)
                              |
                    Scouter reviews card
                    (approve / edit / flag)
                              |
                    Approved card enters
                    database via GitHub PR
                              |
                    Card appears on
                    trust.fail/browse
```

---

## Path A: AI Interview (Self-Service)

### Step 1: Reporter arrives

Reporter visits `trust.fail` and clicks **"Report a Glitch."**

They see two options:
- **"Talk to our AI interviewer now"** → Path A
- **"Request a human interviewer"** → Path B

### Step 2: Consent

Before the interview begins:
- Reporter reads a summary of the consent terms (plain language)
- Checks required boxes:
  - [ ] I consent to this conversation being recorded for verification
  - [ ] I consent to my de-identified experience being published in the Trust.Fail open database
  - [ ] I understand I can stop at any time and withdraw within 30 days
- Full legal waiver linked for reference
- Reporter confirms → interview begins

### Step 3: AI conducts the interview

The AI agent opens a chat interface. The reporter can type or use voice (speech-to-text).

The agent follows the 5-section protocol:

**Section 1 — The Stakeholders** (2-3 questions)
> "Let's start with the AI you were using. What system was it? Who makes it? Do you pay for it, or is it free?"

**Section 2 — The Initial Trust** (2-3 questions)
> "When did you start using it? What made you trust it? What were you relying on it to do?"

**Section 3 — The Glitch Moment** (open-ended, the core)
> "Now tell me what happened. Walk me through the moment step by step."
> Follows up naturally: what did the AI do, what did you expect, what was the exact moment, what did you do next

**Section 4 — The Experience** (3-4 questions)
> "How did that feel? How long did the feeling last? Did you keep using the system? Did you tell anyone?"

**Section 5 — The Mechanism** (3-4 questions)
> "Let's dig into why you think this happened. Do you think the AI was configured to do that? Was it a bug or by design? What's your theory?"

The agent:
- Adapts to the reporter's responses (semi-structured, not rigid)
- Asks follow-up questions when answers are thin
- Does NOT lead or suggest answers
- Keeps a natural, conversational tone
- Asks for trust scores (1-10 before/after)
- Asks the reporter to name the glitch type in their own words

### Step 3.5: Evidence Upload

During or after the interview, the reporter can upload evidence:

- **Screenshots** — of the AI's output, the interface, error messages
- **Image series** — multiple screenshots showing the glitch unfolding step by step
- **Chat logs** — exported conversation history
- **Screen recordings** — video of the interaction

The upload interface:
- Drag-and-drop or file picker
- Supports: PNG, JPG, GIF, PDF, TXT, MP4, WEBM
- Multiple files allowed (up to 10)
- Reporter can annotate each image: "This is where it said X" / "This is what I expected"
- Images are stored securely and linked to the ethnographic card
- **De-identification reminder:** "Please blur or crop any personal information visible in your screenshots before uploading. We will review for identifying information before publication."

Evidence appears in the ethnographic card under a dedicated section and can be included (with consent) in the published card.

### Step 4: Transcript → Ethnographic card

Interview ends. The system:
1. Takes the full conversation transcript
2. Feeds it through the **deliberation prompt** (`protocol/prompts/transcript-to-ethogram.md`)
3. Generates a structured ethnographic card (YAML)
4. Renders the card in human-readable format

### Step 5: Reporter reviews the card

The card is displayed to the reporter:

> "Here's the ethnographic card from our conversation. Please review:"
>
> [Rendered card with all sections]
>
> **Is this accurate?**
> - ✅ Yes, this is correct → proceed
> - ✏️ I want to change something → edit interface
> - ❌ I don't want this published → card discarded

If the reporter requests changes:
- They can edit specific fields (free text)
- They can flag de-identification concerns ("this detail could identify me")
- They can add context they forgot to mention
- Updated card is re-rendered for final confirmation

### Step 6: Card enters review queue

Confirmed card is:
- Submitted as a GitHub issue with `glitch-report` and `ai-interview` labels
- Added to the **Scouter review queue**
- A Scouter will review and approve (see Step 9 below)

---

## Path B: Human Interview (Scouter-Conducted)

### Step 1: Reporter arrives

Reporter visits `trust.fail`, clicks **"Report a Glitch"**, and chooses **"Request a human interviewer."**

### Step 2: Reporter submits a brief report

A simple form:
- **What happened?** (2-3 sentences — just enough to describe the glitch)
- **Which AI system?** (dropdown + free text)
- **How did trust change?** (decreased / increased / complex)
- **Preferred interview format:** video call / audio call / text chat / in-person
- **Timezone**
- **Email or contact** (for Scouter to reach them)

This is NOT the full interview — just enough for a Scouter to understand the case and reach out.

Submitted → creates a GitHub issue with `job-board` label → appears on the Job Board.

### Step 3: Job Board

The Job Board (`trust.fail/board`) shows all pending interview requests:

| Report | AI System | Trust Direction | Format | Date | Status |
|--------|-----------|-----------------|--------|------|--------|
| "My coding assistant started ignoring..." | Copilot | Decreased | Video | Mar 1 | 🟡 Unclaimed |
| "Voice assistant said something eerily..." | Alexa | Complex | Audio | Feb 28 | 🟢 Claimed by GS-003 |

**Status flow:**
```
🟡 Unclaimed → 🟢 Claimed → 📅 Scheduled → 🎤 Interviewed → ✅ Verified
```

### Step 4: Scouter claims the report

A certified Scouter logs in (GitHub OAuth), browses the job board, and claims a report.

When a Scouter claims a report:
- The report status changes to "Claimed"
- The Scouter receives the reporter's contact info
- The Scouter receives a **research brief:**

> **Research Brief for Interview #[number]**
>
> **Reporter's summary:** [their brief description]
> **AI system:** [system name]
> **Trust direction:** [decreased / increased / complex]
> **Preferred format:** [video / audio / text / in-person]
> **Timezone:** [timezone]
> **Contact:** [email]
>
> **Your task:**
> 1. Contact the reporter and schedule the interview
> 2. Before the interview: ensure consent form is signed
> 3. Conduct the interview following the Trust.Fail protocol (5 sections)
> 4. Record the session (for verification only)
> 5. After the interview: upload the transcript or notes
> 6. Review the auto-generated ethnographic card
> 7. Confirm and submit
>
> **Protocol reminder:** [link to interview protocol]
> **Estimated time:** 30-60 minutes

### Step 5: Scouter contacts reporter & schedules

The Scouter:
- Reaches out via the reporter's preferred contact
- Schedules a time
- Sends the consent form (digital signature or verbal consent at start of interview)
- Updates the job board status to "Scheduled"

### Step 6: Scouter conducts the interview

The Scouter follows the 5-section protocol:
1. **Stakeholders** — who owns the AI, who pays, how it survives
2. **Initial trust** — why they trusted it, trust level, what they trusted it to do
3. **The glitch** — walk through the moment step by step
4. **The experience** — feelings, duration, aftermath, behavioral change
5. **The mechanism** — configuration, design vs. bug, participant's theory

The interview is recorded (audio/video/text log) for the record.

The Scouter also takes **interviewer observations**: body language, hesitations, contradictions, emotional intensity — the second-person layer that AI interviews can't capture.

### Step 6.5: Evidence collection

During the interview, the Scouter asks:
> "Do you have any screenshots, images, or recordings from this experience? These help us document the glitch more accurately."

If the reporter has evidence:
- For video/text interviews: reporter shares files during or after the call
- For in-person: reporter can AirDrop, email, or upload later via a link
- Scouter uploads evidence alongside the transcript on their dashboard
- Each piece of evidence is annotated with context from the interview

### Step 7: Scouter uploads transcript

After the interview, the Scouter:
- Goes to their dashboard on `trust.fail/scouters`
- Uploads the transcript (text) or notes
- The system runs the **deliberation prompt** on the transcript
- Generates an ethnographic card

### Step 8: Scouter reviews the card

The auto-generated card is shown to the Scouter:

> **Review checklist:**
> - [ ] Card accurately represents the interview
> - [ ] All identifying information removed
> - [ ] Ethological analysis is reasonable
> - [ ] Glitch type classification is appropriate
> - [ ] Quotes are faithful and de-identified
> - [ ] Interviewer observations are included
> - [ ] No fields were fabricated

The Scouter can:
- Edit any field
- Add their interviewer observations
- Adjust the glitch type or ethological analysis
- Add additional quotes they noted

### Step 9: Reporter reviews (optional)

If the reporter opted in to review-before-publish:
- The confirmed card is sent to the reporter for final check
- Reporter can confirm, request changes, or withdraw
- If no response within 14 days → one follow-up → if no response by day 30 → published as-is

### Step 10: Card enters the database

Approved card → GitHub issue with `glitch-report` label → PR to `data/coded/TXG-XXXX.yml` → merged → live on `trust.fail/browse`

---

## Scouter Registration & Onboarding

### How someone becomes a Scouter

1. **Visit `trust.fail/scouters`** → click "Apply to become a Glitch Scouter"

2. **Application form:**
   - Name, affiliation, academic level
   - Relevant background (qualitative research, HCI, ethics)
   - Motivation
   - Availability (interviews per month)
   - Timezone

3. **Application review** by PI / admin

4. **Training module** (self-paced):
   - Read the interview protocol
   - Read the ethogram coding scheme
   - Read the ethics & legal documents
   - Watch example interview walkthrough (when available)
   - Complete a short quiz on protocol and ethics

5. **Practice interview:**
   - Conduct one supervised interview (with PI or senior Scouter observing)
   - Receive feedback

6. **Calibration coding:**
   - Code 3 sample interview transcripts
   - Must achieve κ ≥ 0.6 agreement with gold standard

7. **Certification:**
   - Receives Scouter ID (e.g., GS-001)
   - Added to `scouters/certified.yml` in the repo
   - Gets GitHub OAuth access to the Scouter dashboard
   - Can now claim reports from the job board

### What the Scouter receives upon certification

A welcome message with:
- Their Scouter ID
- Login instructions for the dashboard
- Link to the protocol, ethogram, and legal documents
- Instructions for claiming their first interview
- Contact info for the PI (questions, escalation)

---

## Edge Cases & Special Flows

### Multiple glitch events in one interview

If the reporter describes more than one glitch:
- The deliberation prompt generates **one card per glitch event**
- Each card goes through the same review flow independently
- They share the same interview metadata but have separate glitch IDs

### Reporter wants to remain fully anonymous

- They can use the AI interview path without providing contact info
- No follow-up possible, but the card still goes through Scouter review
- They cannot review the card before publication (no contact)
- A notice on the card: "Participant opted for anonymous submission; no post-review"

### Scouter conducts interview outside the platform

(Path 4: field interview — at a conference, in a lab, etc.)

- Scouter conducts the interview using the protocol
- Records it locally
- Goes to dashboard → "Upload field interview"
- Uploads transcript/notes
- System generates card → Scouter reviews and confirms
- Another Scouter peer-reviews (since the original Scouter is both interviewer and reviewer)

### Reporter disputes the card after publication

- Reporter contacts PI
- PI reviews the card against the recording
- Card is corrected or retracted as needed
- Retraction note added to the database entry

---

## Database Schema Summary

Every verified ethnographic card in `data/coded/` contains:

```
Metadata:        glitch_id, interview_date, medium, interviewer_type
System:          name, type, platform, version
Stakeholders:    owner, payer, business_model
Initial Trust:   level, reason, role, duration
Event:           setting, task, ai_behavior, expectation, deviation, direction, exact_moment
Affect:          primary_emotion, secondary, intensity, duration, in_their_words
Trust:           before, after, trajectory, recovery, behavioral_change, generalized
Ethology:        mechanism, development, function, phylogeny
Mechanism Detail: owner_config, design_or_bug, intent, external_factors, consistency, participant_theory
Classification:  glitch_type, type_name, participant_name, attribution
Stakes:          domain, severity, reversible
Quotes:          [de-identified notable quotes]
Observations:    interviewer observations (human interviews only)
Evidence:        [list of attached files with annotations]
Not Discussed:   [list of fields not covered]
```

---

## Summary: The Whole System

```
+------------------+     +-------------------+     +------------------+
|                  |     |                   |     |                  |
|   REPORTERS      |     |   SCOUTERS        |     |   RESEARCHERS    |
|                  |     |                   |     |                  |
|  Submit glitches |     |  Conduct & review |     |  Browse & export |
|  via AI or human |     |  interviews       |     |  data            |
|  interview       |     |                   |     |                  |
+--------+---------+     +--------+----------+     +--------+---------+
         |                         |                         |
         v                         v                         v
+------------------------------------------------------------------+
|                                                                  |
|                        trust.fail                                |
|                                                                  |
|  /report     → AI interview or request human interview           |
|  /board      → Job board (Scouters claim reports)                |
|  /scouters   → Apply, train, dashboard                           |
|  /browse     → Search, filter, read ethnographic cards           |
|  /glitch/id  → Full card detail + citation + download            |
|  /about      → Methodology, ethics, team                        |
|                                                                  |
+------------------------------+-----------------------------------+
                               |
                               v
+------------------------------------------------------------------+
|                                                                  |
|              GitHub: realitydeslab/tx-glitch                     |
|                                                                  |
|  Issues   → reports, requests, applications                      |
|  PRs      → ethographic cards awaiting merge                     |
|  data/    → verified YAML cards (the database)                   |
|  protocol/→ interview protocol, ethogram, prompts, legal         |
|                                                                  |
+------------------------------------------------------------------+
```

---

*Review this workflow. Once confirmed, building begins.*
