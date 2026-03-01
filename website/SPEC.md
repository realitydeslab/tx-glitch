# Trust.Fail — Website Specification

**Version:** 1.0
**Date:** 2026-03-01

---

## Tech Stack

- **Next.js** (React) — static + dynamic pages
- **Tailwind CSS** — styling
- **GitHub as backend** — `data/coded/*.yml` files are the database, fetched via GitHub API
- **Vercel** — hosting (free tier, connects to trust.fail domain)
- **No traditional database** — GitHub repo IS the database

---

## Pages & Features

### 1. Landing Page (`/`)

- Hero: "Trust.Fail — When humans and AI lose trust"
- Brief explanation of the project
- Two big CTAs:
  - **"Browse Glitches"** → go to database
  - **"Report a Glitch"** → start the reporting flow
- Stats bar: total glitches, most common type, AI systems covered
- Recent glitch cards (preview grid)

### 2. Browse / Database (`/browse`)

- Grid/list of ethnographic cards
- **Filters:**
  - Glitch type (GH, GU, GB, GE, GP, GR, GA, GC, GS, GO)
  - AI system (ChatGPT, Claude, Copilot, Siri, etc.)
  - Trust trajectory (rupture, erosion, recalibration, deepening, oscillation)
  - Emotion (surprise, betrayal, confusion, amusement, fear, awe...)
  - Severity (trivial, moderate, significant, critical)
  - Deviation direction (positive, negative, ambiguous)
- **Search:** full-text across all card fields
- **Sort:** by date, trust delta (before→after), intensity
- Each card preview shows: glitch type badge, AI system, trust score change (e.g., 7→3), one-line summary, emotion tag
- Click → full card view

### 3. Glitch Card Detail (`/glitch/[id]`)

- Full ethnographic card rendered from YAML
- Sections mirror the ethogram:
  - System info (name, type, platform, version)
  - Stakeholders (who owns it, who pays, business model)
  - The event (setting, task, behavior, expectation, deviation)
  - Affect (primary/secondary emotions, intensity, duration)
  - Trust trajectory (before/after scores, recovery, behavioral change)
  - Ethological analysis (mechanism, development, function, phylogeny)
  - Participant's own name for the glitch
  - Stakes (domain, severity, reversibility)
  - Notable quotes
- Citation block with permanent ID and BibTeX
- "Download YAML" button
- "Download JSON" button

### 4. Report a Glitch (`/report`)

Three pathways on one page:

#### Option A: Quick Report (Path 1 → Job Board)
- Simple form: what happened (2-3 sentences), which AI system, contact info (optional)
- Submits as a GitHub issue with `job-board` label
- Appears on the job board for Scouters

#### Option B: AI Interview (Path 3)
- Chat interface (text input) with voice option (microphone button)
- AI agent conducts the 5-section semi-structured interview:
  1. Stakeholders
  2. Initial trust
  3. The glitch moment
  4. The experience
  5. Digging into the mechanism
- Voice input: speech-to-text via Whisper API, displayed as text in the chat
- Conversation is recorded/logged for the record
- At the end: system auto-generates ethnographic card preview
- Participant reviews the card inline: can edit, add notes, request changes
- Participant confirms → submitted as GitHub issue with `glitch-report` label
- Queued for Scouter review

#### Option C: Request Human Interview (→ Path 2)
- Form: brief description, preferred format (video/audio/text/in-person), timezone
- Submits as GitHub issue with `interview-request` label
- Matched with available Scouter

### 5. Job Board (`/board`)

- List of rough reports (from Path 1) awaiting Scouter pickup
- Each entry shows: brief description, AI system type, date submitted, status
- **Filters:** glitch type (if tagged), AI system, date range
- **Status tracking:** Unclaimed → Claimed → Scheduled → Interviewed → Verified
- Scouters log in (GitHub OAuth) → claim a report → contact the person → update status

### 6. About (`/about`)

- What is Trust.Fail
- Methodology (dual lens: ethnography + ethology)
- The ethogram explained
- The team
- The interview protocol (embedded or linked)
- How to cite the database
- Link to full PROPOSAL.md
- Link to ethics considerations

### 7. Scouters (`/scouters`)

- What is a Glitch Scouter
- How to apply (link to GitHub issue template or on-site form)
- Certification levels (Scout → Pathfinder → Ranger)
- Training materials (linked/embedded)
- **Scouter Dashboard** (authenticated):
  - Claimed interviews and their status
  - Upload portal for field interviews (Path 4: direct upload)
  - Review queue: AI-generated cards awaiting confirmation
  - Personal stats: interviews completed, reliability score

---

## Architecture

```
trust.fail (Next.js on Vercel)
    |
    |-- READ: github.com/realitydeslab/tx-glitch/data/coded/*.yml
    |   - Build-time: static generation of browse + card pages
    |   - Incremental Static Regeneration (ISR) for new entries
    |   - Or: GitHub API fetch at request time with caching
    |
    |-- WRITE: GitHub Issues API
    |   - Quick reports -> issue with "job-board" label
    |   - AI interview cards -> issue with "glitch-report" label
    |   - Interview requests -> issue with "interview-request" label
    |   - Scouter applications -> issue with "scouter-application" label
    |
    |-- AI INTERVIEW AGENT
    |   - LLM API (OpenAI / Anthropic) for conversational interview
    |   - System prompt: the 5-section protocol
    |   - Whisper API for speech-to-text (voice mode)
    |   - Post-interview: LLM generates ethnographic card from transcript
    |   - Card displayed for participant review
    |
    |-- AUTH (Scouters only)
    |   - GitHub OAuth
    |   - Role check: is this GitHub user a certified Scouter?
    |   - Scouter list maintained in repo (scouters/certified.yml)
    |
    +-- STATIC ASSETS
        - Protocol documents rendered from markdown
        - Ethogram reference
        - Training materials
```

---

## Data Flow

```
                        +------------------+
                        |   trust.fail     |
                        |   (website)      |
                        +--------+---------+
                                 |
           +---------------------+---------------------+
           |                     |                     |
    Quick Report            AI Interview         Request Human
    (Path 1)                (Path 3)             Interview (Path 2)
           |                     |                     |
           v                     v                     v
    GitHub Issue            GitHub Issue          GitHub Issue
    [job-board]            [glitch-report]      [interview-request]
           |                     |                     |
           |                     |                     |
    Scouter claims        Scouter reviews       Scouter contacts
    from job board        AI-generated card      & schedules
           |                     |                     |
           |                     |              Conducts interview
           |                     |                     |
           |                     |              Files glitch report
           |                     |                     |
           v                     v                     v
        +----------------------------------------------+
        |         Confirmed Ethnographic Card           |
        |         -> PR to data/coded/TXG-XXXX.yml     |
        |         -> Merged = in database               |
        +----------------------------------------------+
                                 |
                                 v
                    Website rebuilds / ISR
                    New card appears in /browse
```

---

## Build Phases

### Phase 1: Core (1-2 weeks)
- [ ] Next.js project setup with Tailwind
- [ ] Landing page with project explanation and CTAs
- [ ] About page (methodology, team, citation)
- [ ] Browse page: read and render `data/coded/*.yml` files
- [ ] Glitch card detail page with full ethogram rendering
- [ ] Quick report form -> creates GitHub issue
- [ ] Deploy to Vercel
- [ ] Connect trust.fail domain

### Phase 2: AI Interview (2-3 weeks)
- [ ] Chat interface component (text input + message display)
- [ ] AI agent backend: LLM API with 5-section protocol as system prompt
- [ ] Voice input: Whisper API integration for speech-to-text
- [ ] Post-interview: auto-generate ethnographic card from transcript
- [ ] Card preview + participant review/edit flow
- [ ] Confirm & submit -> GitHub issue creation
- [ ] Recording/transcript storage

### Phase 3: Job Board & Scouter Portal (2-3 weeks)
- [ ] Job board page: list open reports from GitHub issues
- [ ] GitHub OAuth for Scouter login
- [ ] Scouter dashboard: claimed interviews, review queue, stats
- [ ] Claim/status workflow for job board items
- [ ] Scouter review flow: view AI-generated card, confirm/edit, approve
- [ ] Direct upload portal for field interviews (Path 4)

### Phase 4: Polish & Scale
- [ ] Search functionality (full-text across all cards)
- [ ] Visualization dashboard (glitch type distribution, trust trajectories, temporal trends)
- [ ] Export functionality (CSV, JSON, YAML subsets)
- [ ] Responsive design / mobile optimization
- [ ] SEO + Open Graph tags for card sharing
- [ ] Analytics (privacy-respecting: Plausible or similar)

---

*This spec will be updated as the project evolves.*
