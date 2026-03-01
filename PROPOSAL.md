# Trust.Fail — Project Proposal

**A Living Database of Trust Glitches in Human-AI Interaction**

🌐 [trust.fail](https://trust.fail)

---

## The Problem

As AI agents become embedded in daily life — writing our emails, managing our code, answering our questions, making decisions on our behalf — trust between humans and AI is constantly being negotiated. Sometimes it breaks. Sometimes it surprisingly deepens. These moments — **trust glitches** — are where the seams of human-AI symbiosis become visible.

AI safety researchers, HCI scholars, and policymakers need **ground truth** about how trust actually behaves in the wild. Not hypothetical scenarios. Not lab studies with contrived tasks. Real, documented, verified accounts from real humans living with real AI systems.

The problem is: **how do you collect trustworthy data about trust?**

Self-reporting is prone to its own glitches — people fabricate, embellish, misremember, or tell the story they think you want to hear. That's why we need a more rigorous method.

## The Idea

**Trust.Fail** is a systematic, open research project to document, classify, and analyze trust experience glitches in human-AI interaction.

### Core Principles

1. **Interview over self-report.** The most traditional and reliable method: one human interviews another human. Both sign a contract. The interview is recorded. The result is written down as ethnography. This is how we build trustworthy data about trust.

2. **The interview itself must be a trustworthy experience.** The participant is sharing a vulnerable moment. The interview space — whether text or voice — must feel safe, human, and respectful. The participant chooses their medium.

3. **Recording is for the record, not for analysis.** The interview is recorded (audio, video, or text log) solely as a verifiable record — proof that what was said was said. Analysis happens through the **ethnographic card**, a structured summary generated after the interview.

4. **Human confirmation in the loop.** The system auto-generates an ethnographic card from the interview. The interviewer reviews and confirms it. No data enters the database without human verification.

5. **Dual analytical lens.** Each glitch is analyzed through two perspectives:
   - **First-person ethnography** — the lived experience of the human who got glitched. Feelings, reactions, trust trajectory. This is phenomenology.
   - **Ethological analysis** — asking why things happen: what behavior is this, what mechanism produced it, what function does it serve. This is the animal behavior study approach, adapted for AI agents. We build ethograms.

6. **Broad listening at scale.** Over months and years, this accumulates into a massive database covering types of trust experiences. Technology-assisted deliberation surfaces patterns, contradictions, and emergent categories across hundreds of individual reports.

7. **Open data for open research.** The database is openly accessible. AI safety researchers, AI conferences, trust scholars, and agent designers can all reference this corpus as ground truth for their own work.

### What We Collect

For each glitch, we document:

- **The stakeholders** — Who owns this AI? Who pays for it? How does it survive? (Business model, incentives, power structure)
- **How the AI survives** — Subscription? Ads? Data? Venture funding? Open-source community? This shapes the trust landscape.
- **The initial trust** — Why did the human trust this AI? What level of trust, and why? What were they trusting it to do?
- **The glitch moment** — What happened, step by step. The observable AI behavior. The expectation vs. reality. The exact moment of shift.
- **The experience** — Feelings, duration, aftermath. Did they keep using the system? Did their behavior change? Did they tell anyone?
- **The mechanism** — This is the ethnographic depth layer. Did the owner configure the AI in a specific way to produce this result? Was it a design choice, a training artifact, operator settings, a bug, or emergent behavior? We dig into WHY the AI behaved the way it did.

### The Ethogram

An ethogram is a catalog of behaviors observed in a species. We're building the ethogram for trust behavior in human-AI interaction.

Each glitch gets coded into a structured YAML entry covering: the AI system (name, type, platform, version), the event (setting, task, behavior, expectation, deviation), affective response (emotion, intensity, duration), trust trajectory (before/after scores, recovery, behavioral change), ethological analysis (Tinbergen's four questions adapted for AI: mechanism, development, function, phylogeny), participant's own taxonomy (what they call it, their causal model), and stakes (domain, severity, reversibility).

The glitch type taxonomy starts with seed categories but is designed to **emerge from the data** through grounded theory:

| Code | Type |
|------|------|
| GH | Hallucination shock |
| GU | Uncanny accuracy |
| GB | Betrayal of expectation |
| GE | Emotional boundary cross |
| GP | Performance cliff |
| GR | Refusal surprise |
| GA | Agency assertion |
| GC | Consistency break |
| GS | Surprising competence |
| GO | Opacity frustration |

These will evolve as real data arrives.

---

## The Interview Protocol

A semi-structured interview with 5 focused sections:

### 1. The Stakeholders
Who owns this AI? Who pays? How does it survive? What are the incentives behind it?

### 2. The Initial Trust
Why did you trust it? When did you start? What level of trust (1–10)? What were you trusting it to do?

### 3. The Glitch Moment
Walk me through what happened. (This is the core — gets the most time and space.)

### 4. The Experience
How did it feel? How long did the feeling last? What changed? Did you tell anyone?

### 5. Digging Into the Mechanism
The ethnographic depth layer. Was the AI configured to behave this way? Design choice or accident? Operator settings? Training artifact? What's your theory of why?

The full protocol is at [`protocol/interview-protocol.md`](protocol/interview-protocol.md).

---

## Glitch Scouters

**Glitch Scouters** are certified student interviewers — the human quality layer between raw trust experiences and the database.

### Why Scouters?

The certification process itself builds trust. A trained, certified human interviewer provides:
- Verification through probing and follow-up
- A second-person observational layer (body language, hesitations, contradictions)
- Quality control at the point of data collection
- Accountability through certification and inter-rater reliability tracking

### Certification Pipeline

1. Application
2. Self-paced training (protocol, ethogram, ethics)
3. Supervised practice interview
4. Calibration coding (κ ≥ 0.6 against gold standard)
5. Certification → Scouter ID + database access

### Scouter Levels

| Level | Title | Requirements |
|-------|-------|-------------|
| 1 | **Scout** | Certified, <10 interviews |
| 2 | **Pathfinder** | 10+ interviews, consistent reliability |
| 3 | **Ranger** | 25+ interviews, can train new Scouters |

---

## How Data Enters the System

There are **four pathways** for data to enter Trust.Fail, each with different levels of depth and verification:

### Path 1: The Job Board — "I got glitched"

The lowest-friction entry point. Anyone can **rough-report a glitch moment** on the website:

- Brief description: what happened, which AI, how trust shifted
- Contact info (optional, for follow-up)
- This is **not yet data** — it's a lead, a signal, a story waiting to be told properly

These rough reports appear on a **job board** visible to Scouters and researchers.

### Path 2: Scouter-Initiated Interview

An ethnographic researcher (Scouter) **browses the job board**, finds an interesting report, and **contacts the person** to schedule a proper interview:

- Scouter reaches out, schedules a time
- Conducts the full semi-structured interview (text or voice)
- Records the session (for the record)
- System auto-generates an ethnographic card
- Scouter reviews and confirms the card
- Confirmed card enters the database

This is the **gold standard path** — human interviewer, full protocol, maximum depth and verification.

### Path 3: AI-Conducted Interview — "Interview me now"

For people who want to report immediately without waiting for a Scouter:

- User clicks "Report a Glitch" on the website
- An **AI interviewer agent** conducts the semi-structured interview in real-time
- Participant can use **text or speech** (speech is auto-transcribed)
- The agent follows the same 5-section protocol
- Conversation is recorded for the record
- System auto-generates an ethnographic card
- **Participant reviews and confirms** the card on the spot
- A Scouter later reviews the confirmed card as a second verification layer

This scales the interview process while maintaining the semi-structured protocol. The AI agent ensures every interview covers the same ground. The Scouter remains in the loop as the final human verification.

### Path 4: Scouter Direct Upload

For Scouters who conduct interviews **outside the platform** (e.g., in-person, at conferences, in the field):

- Scouter conducts the interview using the protocol
- Uploads the ethnographic card directly to the system
- Another Scouter or researcher reviews and confirms (peer review)

### Summary of Pathways

```
┌─────────────────────────────────────────────────────────┐
│                    trust.fail                            │
│                                                         │
│  PATH 1: Job Board                                      │
│  "I got glitched" → rough report → visible to Scouters  │
│         │                                               │
│         ▼                                               │
│  PATH 2: Scouter Interview                              │
│  Scouter contacts reporter → schedules interview →      │
│  full protocol → ethnographic card → confirmed          │
│                                                         │
│  PATH 3: AI Interview                                   │
│  "Interview me now" → AI agent conducts protocol →      │
│  auto-card → participant confirms → Scouter reviews     │
│                                                         │
│  PATH 4: Scouter Direct Upload                          │
│  Field interview → Scouter uploads card → peer review   │
│                                                         │
│         All paths ──→ Verified ethnographic card         │
│                       ──→ Database                      │
└─────────────────────────────────────────────────────────┘
```

All four paths converge on the same output: a **verified ethnographic card** that enters the database.

---

## Infrastructure

### The Website — trust.fail

The website has two primary functions:

#### Function 1: Access the Data

A browsable, filterable, searchable interface to the glitch database:

- **Browse** — explore ethnographic cards by glitch type, AI system, trust trajectory, emotion, stakes
- **Filter** — narrow by system type, deviation direction, severity, date range
- **Search** — full-text search across glitch narratives and ethological analyses
- **Visualize** — dashboards showing patterns: most common glitch types, trust trajectory distributions, AI systems with the most glitches, temporal trends
- **Export** — researchers can download subsets of the data (CSV, JSON, YAML) for their own analysis
- **Cite** — each glitch has a permanent ID and citation format

This is the public research output. Anyone — AI safety researchers, conference attendees, trust scholars, agent designers, journalists — can use this data.

#### Function 2: Report a Glitch

This is where data enters the system, through multiple pathways:

- **Quick report** (Path 1) — rough-report a glitch moment for the job board
- **AI interview** (Path 3) — full semi-structured interview conducted by an AI agent, text or voice
- **Schedule a human interview** (leads to Path 2) — request a Scouter interview

#### Function 3: The Job Board

Where rough reports live, waiting for Scouters:

- Scouters browse available reports
- Filter by glitch type, AI system, urgency, region
- Claim a report → contact the person → schedule an interview
- Track interview status (unclaimed, scheduled, in-progress, completed, verified)

### GitHub as Backend

GitHub serves as the source of truth:
- **Issues** = glitch reports, interview requests, scouter applications
- **PRs** = ethogram entries awaiting confirmation
- **Actions** = auto-generation of ethogram YAML from structured forms
- **Data directory** = the canonical database (`data/coded/`)
- **Full audit trail** — every edit, review, and approval is tracked

The website reads from the GitHub repo.

---

## The Vision

Over multiple months, Trust.Fail accumulates into a **massive, living database** of trust experience glitches. This becomes:

- **Ground truth for AI safety** — real incidents, not hypotheticals
- **A reference corpus for trust research** — cited by papers, used at conferences
- **A NASA ASRS for human-AI interaction** — like the Aviation Safety Reporting System that transformed aviation safety through voluntary, systematic incident reporting
- **An ethogram for a new species** — the first systematic behavioral catalog of trust dynamics between humans and AI agents

AI safety researchers, AI conferences, HCI scholars, and trust study makers can all refer to this database to develop new ideas, validate theories, and ground their work in real human experience.

---

## Analogies

- **NASA ASRS** — Voluntary, confidential, no-blame incident reporting that transformed aviation safety. Trust.Fail is the ASRS for human-AI trust.
- **Ethograms in animal behavior** — Standardized behavioral catalogs. We're building the ethogram for trust behavior in human-AI interaction.
- **Broad listening / Polis** — Technology-assisted deliberation that surfaces collective intelligence from many individual voices. Our database is a form of broad listening about trust.

---

## Team

- **Botao Amber Hu** — Principal Investigator, Reality Design Lab, University of Oxford

---

## Repository

[github.com/realitydeslab/tx-glitch](https://github.com/realitydeslab/tx-glitch)

## License

CC BY 4.0 for research materials, MIT for code.
