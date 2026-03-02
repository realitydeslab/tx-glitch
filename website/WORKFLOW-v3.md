# Trust.Fail — Workflow v3: Rethinking Everything

**Version:** 3.0
**Date:** 2026-03-02

---

## Core Insight

The most convenient way for people to report a trust glitch is **wherever they already are**. Don't make them go somewhere new. Meet them where they talk.

---

## The Three Layers

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  LAYER 1: COLLECTION                                    │
│  Where people report glitches                           │
│                                                         │
│  Discord · Website · WhatsApp · Twitter · Telegram      │
│  (any platform where people already talk about AI)      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  LAYER 2: INTERVIEW & PROCESSING                        │
│  AI conducts the ethnographic interview                 │
│                                                         │
│  OpenClaw (Discord) · OpenAI Realtime (Website voice)   │
│  Same protocol, same output, different surfaces         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  LAYER 3: DATABASE & ANALYSIS                           │
│  Where verified data lives and is accessed              │
│                                                         │
│  trust.fail (browse/search/filter/cite/export)          │
│  GitHub (source of truth, audit trail)                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Layer 1: Collection — Meet People Where They Are

### Channel A: Discord (Primary)

Discord is where people already discuss AI. It has text, voice, threads, file uploads, roles, and community — everything we need.

**How it works:**

1. **Dedicated Trust.Fail Discord server** (separate from the research server)
   - Invite link prominently on trust.fail website: "Report a Glitch → Join our Discord"
   - Public server, anyone can join
   - OpenClaw deployed as the interview bot
2. Someone says "I got glitched" or reacts to a prompt or types a command
3. **OpenClaw creates a private thread** for the interview
4. The interview happens right there — text-based, in the thread
5. The person uploads screenshots/evidence directly in the thread
6. After the interview, OpenClaw generates the ethnographic card
7. Card is posted in the thread for the person to confirm
8. Confirmed card goes to GitHub → appears on trust.fail

**Why Discord is the primary channel:**
- Zero friction — people are already here
- OpenClaw is already deployed and running
- Threads keep interviews private and organized
- File uploads for evidence are native
- Community discussion happens alongside data collection
- Roles handle Scouter permissions
- No new infrastructure to build

**Community features:**
- `#glitch-stories` — public channel where people share and discuss glitches casually
- `#verified-glitches` — bot posts confirmed ethogram cards here for community browsing
- `#scouter-board` — Scouters see flagged cases that need deeper human interviews
- Voice channels for live Scouter interviews when needed

### Channel B: Website Voice Interview (trust.fail)

For people who aren't on Discord or prefer a standalone experience.

1. Visit trust.fail → "Report a Glitch"
2. **Stage 1: Quick capture** — upload evidence + brief description
3. **Stage 2: AI voice interview** — OpenAI Realtime API (gpt-realtime-mini)
4. Browser mic → AI interviewer → full conversation → transcript
5. Ethnographic card generated → person confirms
6. Card goes to GitHub → trust.fail

**Why this exists alongside Discord:**
- Not everyone uses Discord
- Voice interview captures richer emotional data than text
- The website is the public face for researchers, media, grant reviewers
- SEO-discoverable — people search "AI trust problem" and find trust.fail

### Channel C: Other Platforms (Future)

As the project scales, add more input channels — all feeding the same pipeline:

- **WhatsApp** — T3C-style interview via chat (huge reach, especially outside tech communities)
- **Twitter/X** — "Reply to this thread with your trust glitch story" → bot DMs them for the full interview
- **Telegram** — similar to Discord flow
- **Email** — for people who prefer async, long-form responses

Every channel is just an input surface. The protocol, the deliberation prompt, and the output (ethogram card) are always the same.

---

## Layer 2: Interview & Processing

### The Interview Engine

Regardless of the input channel, the interview follows the same protocol:

**The 5 Sections:**

1. **The Stakeholders** — Which AI? Who owns it? Who pays? How does it survive?
2. **The Initial Trust** — When did you start? Why did you trust it? What were you trusting it to do? Level (1-10)?
3. **The Glitch Moment** — Walk me through what happened. What did the AI do? What did you expect? What was the exact moment?
4. **The Experience** — How did it feel? How long? Did you keep using it? Did you tell anyone? Trust level after (1-10)?
5. **The Mechanism** — Why do you think it did that? Was it configured that way? Design or bug? What's your theory?

**Adapts to the surface:**

| Surface | Interview Format | Evidence | Duration |
|---------|-----------------|----------|----------|
| Discord (text) | Thread conversation with OpenClaw | Image uploads in thread | 15-20 min typing |
| Discord (voice) | Voice channel with recording | Images shared in parallel text channel | 15-20 min speaking |
| Website (voice) | OpenAI Realtime API in browser | Upload widget | 15-20 min speaking |
| Website (text) | Chat interface | Upload widget | 15-20 min typing |
| WhatsApp (future) | Chat conversation | Image attachments | 15-20 min typing |

### The Deliberation Pipeline

After every interview, regardless of surface:

```
Raw conversation (text transcript or voice transcript)
        ↓
Deliberation prompt (protocol/prompts/transcript-to-ethogram.md)
        ↓
Structured ethnographic card (YAML)
        ↓
Rendered in human-readable format
        ↓
Shown to participant for confirmation
        ↓
If confirmed → submitted to review queue
```

**Rules:**
- Extract, don't invent — every field grounded in what was said
- De-identify everything — names, companies, locations generalized
- Preserve participant's own words — quotes and emotion descriptions verbatim
- Apply Tinbergen's four questions as ethological analysis
- Mark any fields not discussed

### Evidence Handling

Evidence can be submitted at any point during or after the interview:

- **Screenshots** of the AI's output
- **Image series** showing the glitch unfolding
- **Chat logs** (exported conversations)
- **Screen recordings**

Evidence is:
- Timestamped on upload
- Stored securely (encrypted)
- Referenced in the ethnographic card
- De-identification checked before publication
- Optionally included in the published card (with consent)

### Two-Stage Capture (Optional)

For people who catch a glitch in the moment:

1. **Capture now** (2 min) — screenshot + quick voice note / text description
2. **Full interview later** (within 48h) — system sends a reminder, person does the full 5-section interview

This is optional — people can also go straight to the full interview if they prefer.

---

## Layer 3: Database & Analysis

### GitHub (Source of Truth)

```
github.com/realitydeslab/tx-glitch
├── data/coded/           # Verified ethogram YAML files
├── data/pending/         # Cards awaiting review
├── protocol/             # Interview protocol, ethogram, prompts, legal
├── scouters/             # Certification materials
├── paper/                # White paper
└── website/              # trust.fail source code
```

- **Issues** = raw reports, interview requests, scouter applications
- **PRs** = ethogram cards going through review
- **data/coded/** = the canonical database
- **Full audit trail** — every edit tracked

### trust.fail (Public Interface)

The website is the **read layer** — where anyone accesses the data:

- **Browse** — grid of ethnographic cards, filterable by glitch type, AI system, trust trajectory, emotion, severity
- **Search** — full-text across all cards
- **Card detail** — full ethogram with citations, quotes, evidence, download
- **Visualize** — dashboards showing patterns (glitch type distribution, trust trajectories, AI systems, trends over time)
- **Export** — CSV, JSON, YAML for researchers
- **Cite** — permanent IDs, BibTeX blocks
- **Report** — voice/text interview (for people not on Discord)
- **About** — methodology, ethics, team, funding

### Broad Listening Layer

As the database grows, apply broad listening analysis (inspired by Talk to the City):

- **Theme extraction** — LLM identifies emergent patterns across hundreds of cards
- **Cluster visualization** — map glitch types and see how they relate
- **Grounded insights** — every theme traces back to specific participant quotes
- **Temporal trends** — how trust glitches evolve as AI systems update
- **Cross-system comparison** — which AI systems generate which types of glitches

---

## Verification & Quality

### Automated Checks
- De-identification scan (flag potential identifying information)
- Completeness check (are all required ethogram fields populated?)
- Consistency check (do trust scores match the trajectory description?)

### Human Verification

**For AI-conducted interviews:**
1. Participant confirms the card (mandatory)
2. Scouter reviews the card (async, checks de-identification and classification)
3. If flagged → PI reviews

**For Scouter-conducted interviews:**
1. Scouter generates and reviews the card
2. Participant optionally reviews
3. Second Scouter peer-reviews (for inter-rater reliability)

### Trust Signals

| Signal | How |
|---|---|
| Contemporaneous evidence | Screenshots uploaded at time of glitch |
| Timestamped capture | Evidence + initial report timestamped |
| Structured protocol | Same 5 sections every time |
| Consistent probing | AI doesn't forget to ask key questions |
| Recorded audit trail | Full transcript stored |
| Human verification | Scouter reviews every card |
| Dual coding | Two reviewers classify independently |
| Participant confirmation | Reporter confirms the card is accurate |
| Grounded quotes | Every claim traceable to exact words |

---

## Scouters in the New Model

Scouters evolve from "the primary interviewers" to **quality controllers and deep-dive specialists:**

### What Scouters Do Now:
1. **Review AI-generated cards** — verify de-identification, classification, accuracy
2. **Conduct deep-dive interviews** — for complex or high-stakes cases flagged by the AI or community
3. **Calibration** — maintain inter-rater reliability across the database
4. **Community moderation** — manage the Discord, help reporters, flag interesting cases
5. **Outreach** — recruit participants, run interview events, attend conferences

### Scouter Workflow on Discord:
- See flagged cases in `#scouter-board`
- Claim a case → conduct a deeper interview in a voice channel or thread
- Upload their notes → system generates enriched card
- Review and approve

---

## Implementation Priority

### Phase 1: Discord + GitHub (This Week)
- [x] GitHub repo with protocol, ethogram, legal docs ✅
- [ ] **OpenClaw skill for Trust.Fail interviews on Discord**
  - Creates private thread on trigger
  - Conducts 5-section interview via text
  - Accepts image uploads as evidence
  - Runs deliberation prompt → generates ethogram YAML
  - Posts rendered card for confirmation
  - Commits confirmed card to GitHub repo
- [ ] Discord channels: `#glitch-stories`, `#verified-glitches`, `#scouter-board`
- [ ] Sample ethogram cards in `data/coded/`

### Phase 2: Website (Weeks 2-3)
- [ ] trust.fail landing page + about
- [ ] Browse/search/filter ethogram cards
- [ ] Card detail pages
- [ ] Voice interview via OpenAI Realtime API
- [ ] Deploy on Vercel, connect domain

### Phase 3: Scale (Month 2+)
- [ ] Scouter certification pipeline
- [ ] Visualization dashboard
- [ ] WhatsApp channel
- [ ] Broad listening analysis layer
- [ ] Export tools for researchers

---

## Summary: The Simplest Possible Version

```
Someone on Discord: "I got glitched by ChatGPT"
        ↓
OpenClaw: creates private thread, starts interview
        ↓
5-section conversation (10-15 min text)
        ↓
"Can you upload a screenshot?" → they do
        ↓
OpenClaw generates ethnographic card
        ↓
"Here's what I captured. Does this look right?"
        ↓
Person confirms → card pushed to GitHub
        ↓
Card appears on trust.fail/browse
```

**That's it.** Everything else is optimization.

---

*The principle: collect where people are (Discord), process with AI (OpenClaw + deliberation prompt), publish where researchers look (trust.fail + GitHub).*
