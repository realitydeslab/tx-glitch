# Master Literature Review — Trust.Fail / ARIA Scaling Trust Application

## Overview

This review synthesises findings across six subdomain literature reviews (100+ papers total) to position Trust.Fail within the ARIA Scaling Trust programme.

## Key Themes Across the Corpus

### 1. The Empirical Gap in Trust Infrastructure

Across all six domains, a consistent pattern emerges: **theoretical frameworks outpace empirical evidence.** Computational trust models (Marsh 1994, Castelfranchi & Falcone 2010) formalise trust but lack grounding in how AI systems actually violate trust. Security requirements engineering (Haley et al. 2008, van Lamsweerde 2004) has methods for eliciting security needs but none designed for AI agent interactions. Machine behaviour (Rahwan et al. 2019) calls for empirical study of AI but nobody has built the infrastructure to do it systematically.

**Trust.Fail fills this gap.** It is the first open empirical data infrastructure that connects human trust failure experiences to structured, machine-readable security-relevant data.

### 2. The Convergence of Ethnography and Security

Two traditionally separate fields are converging:
- **HCI/ethnographic methods** (Suchman, Dourish, Seaver) emphasise situated, qualitative understanding of technology use
- **Security engineering** (Haley, van Lamsweerde, Cranor) emphasises formal specification and verification

Trust.Fail bridges these by using ethnographic interview methods to produce structured security data. Our interview protocol is both an ethnographic research tool *and* a security policy elicitation component — this dual identity is the application's core strength.

### 3. The Ethological Turn in AI Research

Machine behaviour (Rahwan et al. 2019), computational ethology (Anderson & Perona 2014), and agent ethology (Hu et al. 2025) represent a growing recognition that **AI systems can be studied as behavioural actors** using methods from the life sciences. Tinbergen's four questions (mechanism, development, function, phylogeny) provide a systematic framework that has proven durable across 60+ years of ethology.

Trust.Fail operationalises this by adapting Tinbergen's framework into a coding scheme for AI trust failures — making the ethological approach *practical* and *scalable*.

### 4. The MEV Analogy: Making the Invisible Visible

The Scaling Trust programme's leadership comes from the crypto/MEV world (Obadia, Flashbots). In crypto, MEV (Miner/Maximal Extractable Value) was an invisible tax on users until Flashbots made it visible and manageable (Daian et al. 2020, Obadia et al. 2020).

**Trust.Fail does for AI trust failures what Flashbots did for MEV** — making invisible trust violations visible, structured, and actionable. This is not an analogy we should be subtle about in the application.

### 5. Scaling Trust Requires Understanding Trust Failure

The programme thesis identifies four core components for secure agent coordination:
1. **Requirement gathering** → Trust.Fail's interview protocol extracts implicit security requirements from failure narratives
2. **Negotiation** → Trust.Fail documents failed negotiation between humans and AI (misaligned expectations, unmet commitments)
3. **Security reasoner** → Trust.Fail's ethogram provides structured failure mode data for training security reasoning systems
4. **Report** → Trust.Fail's ethnographic cards are a model for human-readable reporting of security-relevant events

The literature confirms that **you cannot build robust security tools without empirical failure data** — just as cryptography emerged from documented protocol failures, AI trust infrastructure needs a documented failure corpus.

## Gaps Trust.Fail Fills

| Gap | Evidence from Literature | How Trust.Fail Fills It |
|-----|------------------------|------------------------|
| No systematic AI trust failure corpus | AI incident databases (AIID) are event-level, not mechanism-level | Structured ethnographic cards with ethological coding |
| Trust models lack empirical grounding | Computational trust models tested on synthetic data | Real-world trust failure data from human-AI interactions |
| Security requirements elicitation not designed for AI | Existing methods target software systems, not AI agents | Interview protocol extracts security policies from trust failure narratives |
| Machine behaviour is theorised but not empirically implemented | Rahwan et al. (2019) is a manifesto, not infrastructure | Trust.Fail is the infrastructure — scalable, open, structured |
| Arena challenges risk being synthetic | No grounded failure scenarios for adversarial testing | Real-world trust failure patterns packaged as Arena challenges |
| HCI ethnography and security engineering don't talk | Separate communities, separate methods | Trust.Fail bridges both — ethnographic methods producing security data |

## How the Literature Supports Application Claims

### Claim 1: "Trust.Fail is the empirical data layer that other Scaling Trust teams need"
- **Supported by:** Computational trust literature showing models need empirical calibration (Sabater & Sierra 2005, Pinyol & Sabater-Mir 2013); security requirements literature showing elicitation needs real-world failure data (van Lamsweerde 2004); machine behaviour literature calling for empirical infrastructure (Rahwan et al. 2019)

### Claim 2: "No existing resource provides structured, mechanism-level data on how trust between humans and AI agents actually breaks"
- **Supported by:** Review of AI incident databases (AIID, AIAAIC) showing event-level reporting without mechanism analysis; review of trust measurement literature showing attitude surveys without failure documentation; review of red-teaming literature showing capability probing without naturalistic observation

### Claim 3: "Our interview protocol is a security policy elicitation tool"
- **Supported by:** Security requirements engineering literature showing NL→formal conversion is feasible (Brodie et al. 2006, Sadeh et al. 2013); usable security literature showing users cannot articulate security needs in the abstract but can describe violations (Patil & Lai 2005, Ur et al. 2012)

### Claim 4: "The ethogram coding scheme provides a shared vocabulary for the programme"
- **Supported by:** 60+ years of ethological research showing Tinbergen's framework is durable and generalisable (Tinbergen 1963, Bateson & Laland 2013); machine behaviour literature arguing for systematic behavioural classification (Rahwan et al. 2019)

## Cross-Cutting Insights

1. **The strongest version of the application positions Trust.Fail as infrastructure, not research.** The literature shows that research programmes succeed when they produce reusable infrastructure (AIID, ASRS, P3P). Trust.Fail should be framed as the "ASRS for AI trust" — an operational reporting system, not just an academic project.

2. **The ethological framing is a genuine differentiator.** No other likely applicant will bring Tinbergen's four questions to AI security. This is not decorative — it provides a principled, falsifiable framework for categorising agent behaviour.

3. **The MEV/Flashbots connection is the killer pitch for Obadia.** Frame Trust.Fail as "making the dark forest of AI trust visible" — same philosophy as Flashbots making MEV visible. This resonates with the PD's intellectual background and values.

4. **The weakest link is the Track 2.2 fit.** The literature shows that Track 2.2 expects concrete, reusable tooling (negotiation engines, cryptographic libraries). Trust.Fail's interview protocol is a tool, but a "soft" one. The application should heavily emphasise the MCP tool outputs and structured data API.

5. **Consider reframing as Track 3.4 (Bluesky) primary, Track 2.2 secondary.** The literature review suggests Trust.Fail is more naturally a "radical new approach" (Track 3.4) than a conventional component (Track 2.2). Bluesky is designed for proposals that "address emerging bottlenecks" and "explore wildcard concepts" — Trust.Fail fits perfectly.

## Subdomain Reviews

| File | Papers | Key Gap Identified |
|------|--------|-------------------|
| [1-trust-human-ai.md](1-trust-human-ai.md) | ~25 | Trust measurement tools exist but no systematic failure documentation |
| [2-ai-incident-databases.md](2-ai-incident-databases.md) | ~18 | Incident databases are event-level, not mechanism-level |
| [3-ethnographic-methods.md](3-ethnographic-methods.md) | 18 | Ethnographic methods for technology study exist but none adapted for AI trust failure at scale |
| [4-ethology-machine-behaviour.md](4-ethology-machine-behaviour.md) | 18 | Machine behaviour is theorised but lacks empirical infrastructure |
| [5-multi-agent-trust-security.md](5-multi-agent-trust-security.md) | 17 | Computational trust models lack real-world AI failure data |
| [6-security-policy-elicitation.md](6-security-policy-elicitation.md) | 12 | Security elicitation methods not designed for AI agent contexts |

**Total:** ~108 papers across 6 subdomains.
