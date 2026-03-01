# TX Glitch — Trust Experience Glitch Database

A systematic, open research project to document, classify, and analyze **trust glitches** in human-AI interaction — moments where trust unexpectedly breaks, bends, or grows.

## What is a Trust Glitch?

A *trust glitch* is any moment during human-AI interaction where the human's trust trajectory shifts unexpectedly: a sudden rupture, a creeping doubt, a surprising deepening, or a recalibration of expectations.

## How It Works

Everything runs through GitHub:

### 1. 🎤 Claim an Interview
Have a trust glitch story? [Open an Interview Request](../../issues/new?template=claim-interview.yml) and a certified **Glitch Scouter** will be assigned to interview you.

### 2. 🔍 Glitch Scouters Conduct Interviews
Certified student interviewers follow our [semi-structured protocol](protocol/interview-protocol.md) — recorded, consented, rigorous.

### 3. 📋 Submit a Glitch Report
After the interview, the Scouter [files a Glitch Report](../../issues/new?template=glitch-report.yml) using our structured form.

### 4. 🤖 Auto-Generated Ethogram
GitHub Actions automatically generates a structured ethogram (YAML) from the report and opens a PR.

### 5. ✅ Scouter Confirmation
The Scouter reviews the auto-generated ethogram PR — confirms facts, corrects errors, verifies de-identification. **No data enters the database without human confirmation.**

### 6. 📊 Database Grows
Merged PRs add coded entries to `data/coded/`. Over time: a searchable, citable corpus of trust glitches.

## Become a Glitch Scouter

Glitch Scouters are certified student interviewers — the human quality layer. [Apply here](../../issues/new?template=scouter-application.yml).

| Level | Title | Requirements |
|-------|-------|-------------|
| 1 | **Scout** | Certified, <10 interviews |
| 2 | **Pathfinder** | 10+ interviews, consistent reliability |
| 3 | **Ranger** | 25+ interviews, can train new Scouters |

## Methodology

**Dual-lens approach:**
1. **First-person ethnography** — Semi-structured interviews capturing lived experience
2. **Ethological analysis** — Tinbergen's four questions adapted for AI (mechanism, development, function, phylogeny)

**Why interviews, not self-reports?** Self-reporting is prone to its own glitches. The interview method provides verification through trained interviewer probing, recorded evidence, and a second-person observational layer. Think [NASA ASRS](https://asrs.arc.nasa.gov/) for human-AI trust.

## Project Structure

```
tx-glitch/
├── protocol/               # Interview protocol, consent forms, ethogram coding scheme
├── scouters/               # Certification guide & training materials
├── data/coded/             # Verified ethogram entries (YAML)
├── research-log/           # Research ideas and decisions
└── analysis/               # Scripts and visualizations
```

## Broad Listening

This project uses **broad listening** principles: technology-assisted deliberation to surface patterns, contradictions, and emergent categories across many individual glitch reports. The GitHub issue system + automated ethogram generation enables structured data collection at scale while preserving narrative richness.

## License

CC BY 4.0 for research materials, MIT for code.

## Team

- **Botao Amber Hu** — Principal Investigator, Reality Design Lab, University of Oxford
