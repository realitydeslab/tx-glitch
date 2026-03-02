# Trust.Fail: An Empirical Trust Intelligence Platform for Secure Agent Coordination

**ARIA Scaling Trust Programme — Call for Proposals**

**Track:** 2.2 (Components) | Cross-reference: 3.4 (Bluesky Research)

**PI:** Botao Amber Hu, Reality Design Lab, University of Oxford

**Requested Funding:** £720,000 | **Duration:** 12 months

---

## Section 0: Summary

You cannot build secure coordination infrastructure for AI agents without knowing how trust actually breaks. Yet the Scaling Trust programme—and the field at large—lacks systematic empirical data on real-world trust failures between humans and AI agents.

**Trust.Fail** is an open-source empirical trust intelligence platform that collects, codes, and publishes verified accounts of trust failures in human-AI interaction. Through semi-structured ethnographic interviews (conducted by AI agents and human researchers), we produce structured *ethnographic cards*—machine-readable records of how trust broke, what mechanism caused it, and what the human did next. Each card is coded using an ethogram adapted from Tinbergen's four questions in animal behaviour science, providing a systematic behavioural framework for understanding agent failure modes.

**What we deliver to the Scaling Trust programme:**

1. **A reusable trust failure dataset** — an open, growing corpus of real-world trust failures, coded and structured for use by Arena challenge designers, tooling teams, and fundamental researchers.
2. **Security policy elicitation tools** — our interview protocol and deliberation pipeline are open-source components for requirement capture (Track 2.2), turning fuzzy human experiences of trust violation into structured security policies.
3. **Arena challenge scenarios** — real failure patterns from the database, packaged as adversarial test cases for the Arena.
4. **Empirical grounding for formal AI security** — the data that Track 3.1 needs to move from "empirically observe failure" to provable guarantees.

Trust.Fail is the empirical data layer that other Scaling Trust teams need. We provide the ground truth on which tools are designed, challenges are built, and theories are tested.

**Open-source commitment:** All code MIT/Apache 2.0. All data CC BY 4.0. All protocols openly licensed.

---

## Section 1: Programme & Technical

### 1.1 The Problem: You Can't Engineer Trust Without Understanding How It Breaks

The Scaling Trust programme thesis identifies a core challenge: "AI agents can't securely coordinate with each other." The programme's response—tooling for requirement capture, negotiation, protocol generation, and verification—is necessary but insufficient without empirical grounding.

Consider the programme's own framing: "AI security today stands where information security stood in the pre-cryptographic era: we lack foundational definitions for core concepts." But cryptography did not emerge in a vacuum—it was driven by concrete, documented failure modes. Symmetric key distribution failed. Authentication protocols were broken. Each failure sharpened the definitions.

**The Scaling Trust programme needs its failure corpus.** Without it:
- **Requirement gathering** tools cannot be validated against real user security concerns
- **Negotiation engines** cannot be stress-tested with realistic adversarial scenarios
- **Arena challenges** risk being synthetic rather than grounded in actual agent failure modes
- **Formal security** researchers lack the empirical observations needed to identify what to formalise

Trust.Fail provides this corpus.

### 1.2 What Trust.Fail Is

Trust.Fail is an open research infrastructure for documenting, classifying, and analysing **trust experience glitches** (TX Glitches)—moments where a human's trust in an AI system shifts unexpectedly. It consists of three integrated components:

#### Component 1: The Interview Engine (Requirement Capture Tool)

A multi-surface AI interviewer that conducts semi-structured ethnographic interviews following a rigorous 5-section protocol:

1. **Stakeholder mapping** — Who owns the AI? What are the incentives? What's the business model?
2. **Initial trust baseline** — Why did the human trust it? What level? What task?
3. **The glitch moment** — Step-by-step reconstruction of the failure event
4. **Experiential impact** — Emotional response, trust trajectory, behavioural change
5. **Mechanism analysis** — Design choice, training artefact, operator configuration, or emergent behaviour?

This is directly applicable to Track 2.2's **security policy elicitation** component: our protocol transforms fuzzy human experiences ("something felt wrong") into structured data about what security properties were violated, what the user's implicit security policy was, and how the AI's behaviour diverged from it.

The interview engine runs on:
- **Discord** (primary) — AI bot creates private threads, conducts interviews in-situ
- **Web voice** — OpenAI Realtime API for spoken interviews on trust.fail
- **Text chat** — any messaging platform (WhatsApp, Telegram, extensible)

#### Component 2: The Ethogram Coding Scheme

Each interview produces a structured **ethnographic card** coded against our ethogram—a behavioural catalog adapted from Tinbergen's four questions in ethology:

| Question | Original (Animal Behaviour) | Adapted (AI Agent Behaviour) |
|----------|---------------------------|------------------------------|
| **Mechanism** | What neural/hormonal process causes this? | What architecture/training/design caused this behaviour? |
| **Development** | How did this behaviour develop in the organism? | How did this emerge over the interaction history? |
| **Function** | What adaptive purpose does it serve? | What purpose does this behaviour serve (for whom)? |
| **Phylogeny** | What is the evolutionary history? | What design lineage does this system come from? |

Each card includes: AI system metadata, observable behaviour, human expectation vs. reality, affective response (emotion, intensity, duration), trust trajectory (before/after scores, recovery pattern), ethological analysis, participant's own causal model, and stakes assessment.

This coding scheme is a **reusable component** (Track 2.2). Any team in the programme can use it to classify agent behaviours in a structured, comparable way—including Arena scoring and Track 3 formalisation efforts.

#### Component 3: The Open Database

Verified ethnographic cards are published at [trust.fail](https://trust.fail) and stored in a public GitHub repository with full audit trail:

- **Browse/search/filter** by glitch type, AI system, trust trajectory, severity
- **Export** as CSV, JSON, YAML for downstream analysis
- **Cite** with permanent IDs and BibTeX
- **API access** for programmatic use by other programme teams

### 1.3 How Trust.Fail Serves Each Programme Track

#### For Track 1 (Arena): Real-World Challenge Scenarios

The Arena needs challenges grounded in reality—not synthetic test cases. Trust.Fail provides:

- **Adversarial scenario library** — each documented trust failure is a potential Arena challenge: "Given this user's security policy, this is how an agent violated it. Can your agent detect/prevent this?"
- **Red team patterns** — the database reveals real attack surfaces: how agents are jailbroken, how operator configurations create trust violations, how emergent behaviours undermine security policies
- **Scoring validation** — empirical trust trajectory data (before/after scores, recovery patterns) provides ground truth for the Arena's Utility vs. Security scoring

We will package database entries into **Arena-ready challenge specifications** on a quarterly basis, aligned with the programme's seasonal cadence.

#### For Track 2 (Tooling): Security Policy Elicitation Component

Our interview protocol is itself a **security policy elicitation tool**—it extracts from humans:
- What they were trusting the AI to do (the implicit security policy)
- How the AI violated that trust (the security breach)
- What the human's expectation was (the security requirement)
- What would need to change for trust to be restored (the security specification)

This maps directly to Track 2.2's requirement gathering components: "given a set of user goals, extracts a formal security policy." Our contribution is the *empirical* path to this—extracting security policies from real failure narratives rather than abstract elicitation.

We will release the interview protocol, deliberation prompts, and transcript-to-structured-data pipeline as **open-source MCP tools** usable by any Track 2 agent.

#### For Track 3 (Fundamental Research): Empirical Grounding

Track 3.1 (Formal AI Security) aims to "move beyond empirical red teaming toward provable guarantees." But you need empirical observations before you can formalise them. Trust.Fail provides:

- **Failure mode taxonomy** — a grounded, evolving classification of how agents actually fail, from which formal definitions can be derived
- **Mechanism analysis** — our ethological coding identifies *why* failures occur (design, training, configuration, emergence), informing which properties need formal guarantees
- **Scale** — hundreds of documented incidents provide statistical power for identifying patterns worth formalising

### 1.4 Technical Architecture

```
Collection Layer          Processing Layer          Output Layer
─────────────           ──────────────           ────────────
Discord bot     ─┐                                  
Website voice    ├──→  AI Interview Engine  ──→  Ethnographic Card (YAML)
WhatsApp bot    ─┘     (5-section protocol)          │
                              │                       ├──→ GitHub (source of truth)
                              ▼                       ├──→ trust.fail (public browse)
                       Deliberation Pipeline          ├──→ Arena challenges (quarterly)
                       (transcript → YAML)            └──→ API (for programme teams)
                              │
                              ▼
                       Human Verification
                       (participant + reviewer)
```

**Key technical decisions:**
- **GitHub as backend** — full audit trail, PRs for review, Actions for automation
- **AI interviewer** — scales data collection while maintaining protocol consistency
- **Human-in-the-loop** — every card confirmed by participant and reviewed by researcher
- **Dual licensing** — MIT/Apache 2.0 for code, CC BY 4.0 for data (ARIA-compliant)

### 1.5 Differentiation

**Why this doesn't exist yet:**

| Existing Approach | Limitation | Trust.Fail Difference |
|---|---|---|
| AI incident databases (AIID, AIAAIC) | Event-level, no mechanism analysis, no structured coding | Interview-based, ethological coding, mechanism depth |
| Trust surveys (Jian et al., Lee & See) | Static attitudes, lab settings | Dynamic trust trajectories, real-world incidents |
| Red teaming / jailbreak benchmarks | Adversarial probing of capabilities | Naturalistic observation of trust in the wild |
| User feedback / bug reports | Unstructured, no analytical framework | Semi-structured protocol, dual ethnographic/ethological lens |
| NASA ASRS | Aviation-specific | Same philosophy, adapted for human-AI interaction |

No existing resource provides structured, mechanism-level, empirically grounded data on how trust between humans and AI agents actually breaks. This is a novel research infrastructure.

### 1.6 Technical Risks and Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Participant recruitment** — insufficient volume of reports | High | Multi-channel collection (Discord, web, social media); partnership with AI safety communities; conference recruitment drives |
| **AI interviewer quality** — interviews may lack depth compared to human interviewers | Medium | Protocol-constrained AI ensures coverage; human review catches gaps; iterative prompt engineering; periodic human interview calibration |
| **Coding reliability** — inter-rater agreement may be low on subjective fields | Medium | Gold-standard calibration set; Cohen's κ ≥ 0.7 target; regular coder training; clear coding guidelines |
| **Data quality** — fabrication, embellishment, or misremembering | Medium | Evidence upload (screenshots, logs); consistency checks; triangulation across multiple reports of same system |
| **Privacy/ethics** — sensitive personal data in trust narratives | High | De-identification pipeline; ethics approval (Oxford CUREC); consent protocol; participant review before publication; GDPR compliance |
| **Scope creep** — database grows but doesn't connect to programme goals | Low | Quarterly Arena challenge packaging; dedicated integration with Track 2 and 3 teams; programme check-ins |

### 1.7 Milestones and Deliverables

**Quarter 1 (Months 1–3): Foundation**

| Milestone | Deliverable | Metric |
|-----------|-------------|--------|
| Interview engine deployed on Discord + web | Open-source codebase v1.0 | Functional on 2 surfaces |
| Ethics approval obtained | Oxford CUREC approval | Approved |
| Pilot data collection | 50 verified ethnographic cards | 50 cards, κ ≥ 0.6 |
| Ethogram coding scheme validated | Published coding guide + gold standard set | 20-card calibration set |
| trust.fail website live | Browse/search/filter interface | Public, indexed |

**Quarter 2 (Months 4–6): Scale & Integration**

| Milestone | Deliverable | Metric |
|-----------|-------------|--------|
| Database at scale | 200 verified ethnographic cards | 200 cards, κ ≥ 0.7 |
| First Arena challenge package | 10 real-world adversarial scenarios | Delivered to Arena team |
| Security policy elicitation tool released | MCP tool for extracting security policies from interviews | Used by ≥1 Track 2 team |
| Failure mode taxonomy v1 | Published classification of agent trust failure modes | Peer-reviewed taxonomy |
| Community launch | Active Discord community, Scouter certification pipeline | 10 certified Scouters |

**Quarter 3 (Months 7–9): Depth & Analysis**

| Milestone | Deliverable | Metric |
|-----------|-------------|--------|
| Database growing | 400 verified ethnographic cards | 400 cards |
| Broad listening analysis | Pattern analysis across corpus, cluster visualisations | Published report |
| Arena challenge package v2 | 20 scenarios, calibrated to Arena scoring | Integrated into Arena |
| Cross-system comparison | Which AI systems produce which failure modes | Dashboard on trust.fail |
| Track 3 integration | Failure mode data shared with formal security researchers | ≥1 joint working paper |

**Quarter 4 (Months 10–12): Consolidation & Publication**

| Milestone | Deliverable | Metric |
|-----------|-------------|--------|
| Database target met | 500+ verified ethnographic cards | 500 cards |
| Methodology paper submitted | CHI/CSCW/FAccT submission | Submitted |
| Complete open-source release | All tools, data, protocols, analysis code | MIT/Apache 2.0 + CC BY 4.0 |
| Arena challenge library | 30+ grounded adversarial scenarios | Available to all Arena participants |
| Programme integration report | How Trust.Fail data was used across Tracks | Documented |
| Renewal case (if applicable) | Evidence for continued funding | Report to ARIA |

---

## Section 2: The Team

### Principal Investigator: Botao Amber Hu

**Affiliation:** Reality Design Lab, University of Oxford (DPhil, Human Centred Computing)

**Supervisor:** Prof. Max Van Kleek (Oxford)

**Background:** MS Computer Science (AI), Stanford University (advisors: Andrew Ng, Jure Leskovec, Dan Boneh). BS Computer Science, Tsinghua University, Yao Class (advisor: Andrew Chi-Chih Yao). ERA (Existential Risk Alliance) Fellow, Cambridge, 2026 (advisor: Joel Lehman).

**Industry:** Founded Holo Interactive (2018–2023, $7.5M raised, HoloKit open-source MR headset, 10K units shipped). Previously at Twitter (recommendation systems), DJI (robotics), thatgamecompany, Microsoft Research Asia.

**Research areas:** Agent ethology, cyborg sociology, trustworthy agentic web, machine behaviour, more-than-human design. Currently leading multiple projects on AI agent behaviour at the intersection of HCI, AI safety, and science & technology studies.

**Relevant expertise:**
- Designed the Trust.Fail interview protocol and ethogram coding scheme
- Experience building and deploying AI agent systems (OpenClaw, HoloKit)
- Track record of open-source research infrastructure (HoloKit: MIT-licensed, 10K deployments)
- Cross-disciplinary: computer science, design, ethnography, ethology
- Active in AI safety community (ERA Fellow, ALIFE/CHI/FAccT publications)

**Time commitment:** 80% (0.8 FTE) for the duration of the project.

### Research Team (to be hired)

| Role | FTE | Status | Start |
|------|-----|--------|-------|
| **Postdoctoral Researcher** — ethnographic methods, AI trust, data analysis | 1.0 | To hire | Month 1 |
| **Research Software Engineer** — interview engine, website, data pipeline | 1.0 | To hire | Month 1 |
| **Research Assistant** — data coding, Scouter coordination, community management | 0.5 | To hire | Month 2 |

**Hiring plan:** Job descriptions prepared. Advertisements to go live within 2 weeks of award. Oxford's research community and the PI's network (Stanford, ERA, ALIFE) provide a strong recruitment pipeline. Target: all positions filled by Week 6.

### Advisory / Collaborators

- **Prof. Max Van Kleek** (Oxford, HCC) — supervisor, trust and transparency in intelligent systems
- **Joel Lehman** (ERA/Sakana AI) — AI safety, open-endedness, machine behaviour
- **Steve Benford** (Nottingham) — mixed reality, experience design, EPSRC fellow

### Coordination

- Weekly team standups
- Fortnightly PI review of all new ethnographic cards
- Quarterly reports aligned with ARIA programme cadence
- Active participation in Build Weeks and community events (budget allocated for travel)
- Open Discord channel for cross-programme collaboration

---

## Section 3: Administrative

### 3.1 Budget

| Category | Year 1 | Notes |
|----------|--------|-------|
| **Staff** | | |
| PI (0.8 FTE) | £72,000 | Oxford salary scale |
| Postdoctoral Researcher (1.0 FTE) | £48,000 | Oxford Grade 7 |
| Research Software Engineer (1.0 FTE) | £55,000 | Oxford Grade 8 |
| Research Assistant (0.5 FTE, 10 months) | £18,000 | Oxford Grade 5 |
| **Staff subtotal** | **£193,000** | |
| | | |
| **Indirect costs** | £96,500 | Oxford FEC overhead (50% of staff) |
| | | |
| **Equipment & Infrastructure** | | |
| Cloud hosting (GitHub, Vercel, API costs) | £18,000 | Compute for AI interviewer, website |
| AI API costs (OpenAI Realtime, LLM inference) | £24,000 | ~£2k/month for interview + deliberation |
| Recording & transcription services | £6,000 | |
| **Equipment subtotal** | **£48,000** | |
| | | |
| **Travel & Dissemination** | | |
| ARIA Build Weeks (4 × UK travel) | £4,000 | |
| Conference attendance (CHI, CSCW, FAccT, ALIFE) | £12,000 | Paper presentation + recruitment |
| Community events & workshops | £6,000 | Scouter training, outreach |
| **Travel subtotal** | **£22,000** | |
| | | |
| **Participant Costs** | | |
| Participant incentives (500 interviews × £20) | £10,000 | Amazon vouchers for interview completion |
| Ethics review costs | £2,000 | Oxford CUREC |
| **Participant subtotal** | **£12,000** | |
| | | |
| **Other** | | |
| Open-source community management tools | £3,000 | Discord boosts, documentation |
| Contingency (5%) | £18,725 | |
| **Other subtotal** | **£21,725** | |
| | | |
| **Estates costs** | £30,000 | Oxford desk space |
| | | |
| **Direct + Indirect Total** | **£423,225** | |

*Note: Oxford's full economic costing (FEC) model applies. ARIA funds 100% of eligible costs. The above reflects direct + indirect costs at Oxford rates. Final budget to be confirmed during negotiation phase per ARIA guidelines.*

**Revised total with Oxford FEC adjustments:** Requesting **£720,000** to account for full economic costing at Oxford rates (including estates, indirect costs, and university levy). Detailed monthly breakdown available on request and will be provided via ARIA's cost spreadsheet during the application portal submission.

### 3.2 Intellectual Property

- **Background IP:** The Trust.Fail concept, interview protocol, and ethogram coding scheme are pre-existing work by the PI. Rights are held by the PI / Reality Design Lab. This background IP will be made available under open licences for the programme.
- **Foreground IP:** All deliverables funded by this grant will be released under MIT and Apache 2.0 (code) and CC BY 4.0 (data and protocols), in full compliance with ARIA's open-source requirements.
- No third-party IP dependencies that would restrict freedom to operate.

### 3.3 Ethics

- **Oxford CUREC** (Central University Research Ethics Committee) approval will be sought immediately upon award. The interview protocol involves human participants sharing personal experiences; standard informed consent, de-identification, and data protection measures apply.
- **GDPR compliance:** All participant data processed under legitimate research interest (GDPR Art. 6(1)(e)). De-identification at point of card generation. Right to withdrawal at any time. Data stored on UK/EU servers.
- **No deception, no vulnerable populations specifically targeted, no clinical intervention.** This is observational research collecting voluntary reports.

### 3.4 Benefit to the UK

- **PI and team based at the University of Oxford** — >90% of project costs spent in the UK
- **Builds UK research infrastructure** — Trust.Fail becomes a UK-hosted, UK-led global resource for AI trust research
- **Strengthens UK AI safety ecosystem** — directly supports the UK's position as a leader in AI safety (aligns with the AI Safety Institute's mission)
- **Trains UK researchers** — postdoc, RSE, and RA positions; Scouter certification programme open to UK students
- **Open-source outputs benefit UK industry** — UK AI companies can use the failure database and tools to improve their products

### 3.5 Commercialisation Hypothesis

Trust.Fail is primarily a research infrastructure project. However, commercial pathways exist:

- **Consulting:** AI companies pay for bespoke trust audits using the Trust.Fail methodology
- **Enterprise API:** Premium access to real-time trust failure intelligence for product teams
- **Training:** Scouter certification as a professional credential for UX researchers and trust & safety teams

These are post-programme pathways. During the ARIA-funded period, all outputs are fully open.

### 3.6 Conflicts of Interest

None identified. The PI has no relationship with the Programme Director or ARIA staff.

---

## Motivation

Why us? Because Trust.Fail sits at the intersection of three fields that rarely talk to each other:

1. **Ethnography** — the oldest and most reliable method for understanding human experience
2. **Ethology** — the systematic study of animal behaviour, adapted here for AI agents
3. **Security engineering** — the discipline of understanding how systems fail

Most AI trust research stays in one silo. Survey researchers measure attitudes. Red teamers probe capabilities. Ethicists write frameworks. Nobody is systematically collecting and coding real-world trust failures in a way that's useful across all of these.

We are. That's what Trust.Fail does.

The PI brings a rare combination: Stanford AI training (Ng, Leskovec, Boneh), Tsinghua CS foundations (Yao Class), industry experience building AI products (Twitter, DJI, HoloKit), and current doctoral work at Oxford on human-centred computing. This project is the convergence of everything he's built toward.

The programme thesis says: "empirical iteration without theory is guesswork." We agree. But theory without empirical data is also guesswork. Trust.Fail provides the empirical data that makes the rest of the programme's theory and tooling real.

---

*Trust.Fail — [trust.fail](https://trust.fail) — [github.com/realitydeslab/tx-glitch](https://github.com/realitydeslab/tx-glitch)*

*Contact: Botao Amber Hu — amber@reality.design*
