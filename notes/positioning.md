# Positioning Analysis — Trust.Fail in the ARIA Landscape

## 1. Where Does Trust.Fail Sit?

Trust.Fail occupies a **unique gap at the empirical-infrastructure layer** of the Scaling Trust programme. To understand its position, map the programme's knowledge stack:

```
┌─────────────────────────────────────────────────────────────────┐
│  LEVEL 4: Deployed systems — agents coordinating in production  │
├─────────────────────────────────────────────────────────────────┤
│  LEVEL 3: Formal guarantees — provable security properties      │  ← Track 3.1
├─────────────────────────────────────────────────────────────────┤
│  LEVEL 2: Tools — policy elicitation, negotiation, verification │  ← Track 2.x
├─────────────────────────────────────────────────────────────────┤
│  LEVEL 1: Arena — adversarial testing environment               │  ← Track 1
├─────────────────────────────────────────────────────────────────┤
│  LEVEL 0: Empirical data — what actually breaks in the wild     │  ← Trust.Fail
└─────────────────────────────────────────────────────────────────┘
```

Trust.Fail lives at **Level 0**. It is the only proposed component in the programme focused on *ground truth collection from the real world*. Every other team builds on assumptions about how trust breaks — Trust.Fail is proposing to make those assumptions empirically testable.

This is a **cross-cutting infrastructure role**: it doesn't compete with Level 2 or Level 3 teams; it feeds them. This is its strongest positioning.

---

## 2. Likely Competing Applicants

### Track 2.2 (Components) Competitors

**Crypto/formal methods labs:**
- **Imperial College London** (IC3 London node) — formal security policy languages, smart contract verification. Strong Track 2.2 case. They will propose tooling that converts natural language requirements into formal specifications using LLMs + SMT solvers. Very credible to Obadia/Greco.
- **Edinburgh Informatics (LFCS / DICE)** — process calculi, formal verification, type theory applied to security protocols. Academic but technically deep. Will likely propose Track 2.2 components with formal foundations.
- **Oxford CS (Department of Computer Science, not HCC)** — formal methods group (Quickcheck authors, process algebra). Could propose security policy languages.

**Security engineering teams:**
- **Cybersecurity startups / spin-outs** — e.g., teams from UK-based cybersecurity companies (NCSC network) proposing tooling for agent authentication, policy enforcement. These will be most credible on Track 2 engineering.
- **UCL Information Security** — strong applied security credentials, experience with policy languages and formal audit.

**AI safety / alignment labs:**
- **Alignment Forum / ARC Evals spinoffs** — could propose evaluation frameworks that overlap with Trust.Fail's "empirical data for formal security" claim.
- **Apollo Research** — UK-based, focused on AI evaluation and deceptive alignment. High relevance to the programme. They could credibly claim both Track 2 (eval tooling) and Track 3 (fundamental understanding of failure modes).

### Track 3.4 (Bluesky) Competitors

- **Anthropic / OpenAI research affiliates** — if academic labs affiliated with them apply. They have empirical data at scale from real deployments.
- **Alan Turing Institute groups** — data-driven AI safety research with empirical foundations.
- **Cyber-physical trust groups** (robotics safety, autonomous vehicle trust) — the programme specifically mentions cyber-physical. Teams from Edinburgh, Bristol, or Imperial working on human-robot trust could apply here.

### Key Insight on Competition

Most Track 2.2 competitors will propose **more technically credible tooling** (formal languages, SMT solvers, verified implementations). Most Track 3.4 competitors will propose **broader empirical or theoretical work** (large-scale surveys, formal models of trust).

**Trust.Fail's competitive gap:** No one else is building a *structured, open, community-generated empirical corpus* specifically for the Scaling Trust programme to use. The database itself — if it exists and is populated — is a unique asset.

---

## 3. Unique Value Proposition

### What other teams will offer:
- **Formal methods teams:** rigorous specification languages, provable properties, limited empirical grounding
- **Crypto/protocol teams:** secure multi-party coordination, cryptographic guarantees, no human trust dimension
- **AI safety/eval teams:** evaluation frameworks, red-teaming methodologies, capability assessment
- **Robotics/cyber-physical:** physical embodiment of trust, real-time constraints, limited generalizability to software agents

### What Trust.Fail uniquely offers:

1. **Naturalistic failure data** — real humans, real systems, real failures. Not synthetic, not lab, not adversarial probing. The programme has no other source for this.

2. **Mechanism-level analysis** — not "this AI was wrong" but "this AI was wrong *because* of [design choice/training artefact/operator configuration/emergent behaviour]." This granularity is rare.

3. **Human trust trajectory data** — before/after trust scores, recovery patterns, emotional response coding. No other approach produces this time-series view of human trust.

4. **Cross-system comparability** — the ethogram enables comparison across OpenAI, Anthropic, Mistral, etc. agents. No other resource does this at mechanism level.

5. **Arena-ready adversarial scenarios** — packaged, real-world-grounded test cases that Arena designers need and no one else is offering.

6. **Open, citable, growing** — AIID is retrospective and event-level. Trust.Fail is prospective, mechanism-level, and specifically designed for the Scaling Trust programme's use.

---

## 4. Why This Team?

**Amber's specific fit:**

- **Dan Boneh connection** (Stanford advisor) — one of the world's top cryptographers. This is the most important credential for ARIA credibility and currently buried in the application.
- **Cross-disciplinary legitimacy** — Tsinghua CS (Yao Class) + Stanford AI (Ng, Leskovec, Boneh) + Oxford HCC. This is genuinely unusual and highly credible.
- **AI systems builder** — HoloKit (10K units shipped), OpenClaw (actual deployed agent infrastructure). He's not a pure academic; he ships things. ARIA, coming from a startup/builder culture, will respond to this.
- **ERA Fellow / AI safety community insider** — warm access to the exact population of participants Trust.Fail needs for data collection.
- **Pre-existing work** — Trust.Fail conceptual framework, ethogram, interview protocol already designed. This isn't a blank-slate proposal; there's intellectual pre-investment.

**The honest case:** This team is strong on concept and PI credentials, weak on team composition (unfilled posts, no named security engineer). The strongest argument for this team is that no one else has combined ethnographic depth + AI systems engineering + AI safety community access in this specific way. It's a rare combination that can't be assembled quickly from a crypto lab or a pure HCI group.

---

## 5. Strategic Positioning: Track 2 vs Track 3.4?

### The honest answer: Lead with Track 3.4, claim Track 2.2 as secondary.

**Why lead with Track 3.4 (Bluesky):**
- The core work IS bluesky: building novel research infrastructure that doesn't exist, generating empirical data for a field that has none.
- Track 3.4 reviewers will respond better to "here's a new way of understanding trust failures in agent systems" than Track 2.2 reviewers who want a working component.
- The application's strongest intellectual content — the ethogram, the ethological framing, the naturalistic observation methodology — is Track 3.4 material.
- Less risk of being judged against purely engineering criteria.

**Why retain Track 2.2 claim:**
- The MCP tools ARE components. The interview engine, the deliberation pipeline, the YAML schema — these are software components.
- Track 2.2 positioning gives the project concrete programme integration (it serves other teams, not just the literature).
- The Arena challenge package deliverable is a Track 1 integration that no Track 3.4 project is offering.
- Dual-track positioning demonstrates programme value across multiple dimensions.

**Recommended positioning:**
> "We are a Track 3.4 Bluesky project that produces Track 2.2-interoperable components and Track 1 Arena challenges. We're the empirical data layer that every other project in the programme needs but no one else is building."

This framing:
- Defuses the "is this really Track 2.2?" critique
- Emphasises the cross-programme infrastructure role
- Sets honest expectations about the nature of the deliverables

---

## 6. The Competitive Moat

Trust.Fail's real competitive moat is *not* the methodology — it's the **community and the corpus**. Once the database exists with 200+ high-quality, mechanism-coded entries:

- It becomes the reference dataset for every researcher in the programme
- Arena challenge designers reference specific card IDs
- Formal security researchers cite specific failure modes they're trying to formalise
- The interview network (Scouters, community members) becomes a self-sustaining recruitment mechanism

Year 1 is expensive to build. Years 2-5 are essentially self-sustaining on a fraction of the budget. ARIA should see this as infrastructure investment, not a one-year project.

**Frame it as infrastructure investment, not a research project.** The closest analogy: AIID is the closest prior work, and AIID has been cited 500+ times and influenced AI policy globally. Trust.Fail is better-designed for the programme's specific needs.
