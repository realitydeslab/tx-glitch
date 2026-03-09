# Strategic Recommendations — ARIA Application

## Trust.Fail | Track 2.2 (Components) + 3.4 (Bluesky)

---

## 1. Should the Application Be Revised Before Submission?

**Yes. Strongly recommend revision.** The core idea is excellent and genuinely fills a programme gap — but the application is currently written for an HCI/CSCW audience, not for the ex-crypto-startup-and-protocol-labs people reviewing it. The risk is not the idea getting rejected; it's the idea not being understood.

The current draft reads as: *academic researcher applies for research funding to study trust.* 

It needs to read as: *infrastructure builder deploys the empirical data layer that makes the rest of the programme work.*

This is a reframing exercise more than a content rewrite. Most of the substance is there — it needs to be reordered, re-languaged, and grounded with more concrete engineering artefacts.

**Revision timeline recommendation:** 1 week for the key structural changes; don't over-polish, just fix the critical issues below.

---

## 2. The Biggest Weakness to Fix

**The #1 weakness: No demonstrated prototype / no concrete engineering artefact in the application.**

Right now, the application is a *description of intentions*. For a Flashbots co-founder reviewer, every promising application without a prototype is just a whitepaper. The application needs to show, not tell.

**Specific fix:** Add a link to a working demo or a GitHub repo with actual code. Even if it's rough. Even if it's just the Discord bot doing one interview. A 30-line GitHub repo with a working prototype is worth more than 10 pages of architecture diagrams to this audience.

If the Discord interview bot exists in any form: put a link in the application. If the YAML schema is defined: put it in an appendix. If there's a single example ethnographic card: publish it and link to it. Any real artefact transforms the credibility calculus.

**Secondary weakness: The Track 2.2 claim needs to be either substantiated with a schema/spec or diplomatically downgraded to secondary.**

The Track 2.2 claim is currently hanging in mid-air. Fix it in one of two ways:
- **Substantiate:** Add the YAML schema for ethnographic cards + show explicitly how it feeds into a formal policy language (even as pseudocode). Name the interface point with a hypothetical Track 2 formal methods team.
- **Downgrade gracefully:** "We are applying as Track 3.4 (primary) with significant Track 2.2 interoperability. Our components are designed for Track 2.2 consumption; we expect to co-design the interface with Track 2.2 teams in Q1."

---

## 3. What Angle Would Make Alex Obadia Most Excited

**The Flashbots angle: Trust.Fail is for agentic AI what MEV analysis was for DeFi.**

Alex Obadia's career-defining work was recognising that Ethereum's value chain had an empirical failure mode (MEV — miners extracting value by front-running user transactions) that nobody had systematically documented, and that solving it required first *measuring it at scale*, then designing protocols around the measured reality.

The pitch to Alex Obadia:
> "You built Flashbots because the DeFi ecosystem was being exploited in ways nobody was systematically tracking. MEV wasn't in the whitepaper — it emerged in the wild and you documented it. Trust.Fail does the same thing for agentic AI: it's the empirical intelligence infrastructure for trust failures that aren't in any spec, that nobody's tracking systematically, and that every agent coordination protocol needs to account for."

This framing:
1. Is immediately legible to him without translation
2. Positions Trust.Fail as infrastructure (not academic research)
3. Maps onto the specific programme thesis he designed
4. Is honest — it's a genuinely apt analogy

**Additional angles that will land with Obadia:**

- **Open data as public good:** Flashbots made its auction data public as a principle. Trust.Fail is building open data infrastructure in the same spirit. This resonates.
- **Community intelligence over central authority:** Scouter community model is similar to distributed node operators in crypto. Frame it as a decentralised trust-intelligence network.
- **Builder culture:** Amber ships things — HoloKit (10K units), OpenClaw, multiple deployed agent systems. Emphasise the builder credentials, not the academic credentials.

---

## 4. Budget Optimisation Suggestions

### The core problem: Oxford FEC overhead (~£300K on a £720K grant)

Oxford's Full Economic Cost model adds ~40% overhead to an already modest direct-cost budget. ARIA may not be familiar with UK HEI funding structures and could see £720K as inflated.

**Options to consider:**

**Option A: Stay at Oxford, justify the overhead explicitly**
Add a paragraph in the budget section: "Oxford's institutional infrastructure provides: ethics compliance at scale (CUREC), GDPR data governance (participant data processed under institutional DPA), recruitment pipeline (Oxford research community as participant base), and stability for a 12-month project. These are structural costs that would need to be purchased separately by a non-institutional team."

**Option B: Hybrid model — Oxford + lean contractor**
Consider spinning the RSE out as an independent contractor (not Oxford staff) — this removes one FTE from the Oxford overhead calculation. Similarly, the RA could be a part-time contractor. This reduces the overhead load while maintaining Oxford affiliation for the PI and postdoc.

**Option C: Front-load open-source community as free capacity**
The Scouter certification programme, if launched early and successfully, provides interview capacity for free. This could reduce the RA hiring need and potentially allow scaling data collection beyond the 500-card target without proportional budget increase. Frame this as leverage rather than dependency.

**Cost-per-deliverable table (add to the application):**

| Deliverable | Target | Cost per unit |
|------------|--------|--------------|
| Verified ethnographic cards | 500 | £216/card |
| Arena challenge scenarios | 30 | £3,600/scenario |
| MCP tool components | 3 | £72,000/component |
| Published taxonomy | 1 | — |
| Open-source codebase | 1 | — |

The £216/card for a verified, mechanism-coded, ethologically-analysed record of a real AI trust failure is *extremely* cheap compared to the cost of collecting this data through traditional ethnographic research (typical qualitative research: £500-2000 per participant). This reframing makes the budget look like a bargain.

---

## 5. Strategic Alliances to Mention

**Within the ARIA Scaling Trust programme:**

1. **Track 3.1 (Formal AI Security) team** — Name an explicit intended collaboration: "Trust.Fail failure taxonomy data is designed to feed Track 3.1 formalisation efforts. We will work with Track 3.1 teams in Q2-Q3 to identify which failure modes are highest priority for formal treatment." Even if the Track 3.1 team isn't named, expressing the *intent* to collaborate shows programme integration thinking.

2. **Track 2 negotiation engine teams** — Same: "Our MCP tool is designed as a requirement capture step that feeds negotiation engines. We will co-design the interface with Track 2 teams in Q1 Build Week."

3. **Arena team** — Make the Arena challenge delivery timeline explicit and show you understand the Arena's cadence. This demonstrates programme awareness.

**Outside the programme:**

4. **AIID (AI Incident Database)** — Position Trust.Fail as complementary to AIID, not competing. AIID is event-level; Trust.Fail is mechanism-level. A formal data-sharing agreement or acknowledgment of complementarity strengthens both. Sean McGregor (AIID director) is likely receptive to collaboration.

5. **Anthropic / OpenAI safety teams** — If any informal contact exists with safety teams at major labs who might be willing to be named as "interested parties" or "data sharing partners," this transforms the recruitment credibility story. Even a letter of intent from one major lab saying "we are interested in Trust.Fail's findings" is worth including.

6. **UK AI Safety Institute** — AISI is the natural UK institutional ally. If there's any existing relationship, name it. AISI endorsement would be extremely powerful for this application.

7. **ERA network** — Amber is an ERA Fellow. Framing Trust.Fail as serving the EA/existential risk community provides a credible warm participant pool for data collection. Name specific EA orgs (e.g., Centre for AI Safety, Redwood Research) as potential partner communities.

---

## 6. Specific Wording/Framing Changes to Match ARIA Culture

ARIA's culture: ex-Flashbots, ex-Protocol Labs, startup founders, protocol engineers. They respect: demos over docs, shipping over theory, empirical data over intuitions, open-source over closed, infrastructure over papers.

**Kill list (phrases to remove or reframe):**

| Current phrasing | Problem | Alternative |
|-----------------|---------|-------------|
| "ethnographic interviews" | Sounds like social science, not tooling | "structured failure reporting protocol" or "incident interview system" |
| "ethogram adapted from Tinbergen's four questions" | Academic jargon, needs context | "four-dimensional classification scheme: mechanism, development, function, lineage" |
| "semi-structured protocol" | Weak-sounding to engineers | "rigorous 5-section protocol with defined output schema" |
| "experiential impact" | HCI language | "trust trajectory and behavioural response" |
| "participant" | Survey research language | "reporter" or "incident submitter" |
| "ethnographic cards" | Novel term with no context | First use: define clearly as "structured incident records"; then can use "cards" |
| "The PI brings a rare combination" | Self-promotional preamble | Move to end; let the credentials speak |

**Add list (missing language that ARIA will look for):**

- "Protocol" / "protocol design" — the interview system IS a protocol; call it that
- "Adversarial scenario library" — use this term early; it speaks directly to Arena designers
- "Empirical threat intelligence" — positions the database as security intelligence, not academic data
- "Open-source component" — use this to describe the MCP tool, not just "tool"
- "Interoperable" — explicitly state what the tool interoperates with and how
- "Ground truth" — the database IS ground truth for the programme; use this phrase

**Opening rewrite suggestion:**

Current opening:
> "You cannot build secure coordination infrastructure for AI agents without knowing how trust actually breaks."

This is good — keep it. But follow it immediately with the MEV analogy:

> "You cannot build secure coordination infrastructure for AI agents without knowing how trust actually breaks. When Flashbots documented MEV failure modes in Ethereum, it became possible to design protocols around the real attack surface — not the theoretical one. Trust.Fail does the same for agentic AI: systematic, empirical, mechanism-level documentation of how trust fails in the wild. This is the failure corpus the Scaling Trust programme needs."

---

## 7. The One Thing That Would Transform This Application

**Get a working demo on the page.** Link to trust.fail with at least one real ethnographic card. Show an actual Discord interview transcript that became an actual YAML card. Put the schema on GitHub. Even one real example makes the entire application concrete instead of speculative.

If nothing exists yet: build a 2-day MVP of the Discord interview bot conducting one interview on yourself or a colleague. Record the transcript. Run it through whatever manual version of the deliberation pipeline exists. Publish the resulting card. Link to it.

This single action — a working prototype, however crude — is worth more than any revision to the prose.

---

## Summary: Revision Checklist

- [ ] Open with the MEV/Flashbots analogy
- [ ] Add a working demo link or GitHub prototype
- [ ] Add YAML schema for ethnographic cards (appendix)
- [ ] Add worked example: transcript → deliberation → structured policy requirement
- [ ] Add cost-per-deliverable table
- [ ] Surface the Dan Boneh advisor connection explicitly
- [ ] Downgrade or substantiate the Track 2.2 primary claim
- [ ] Name at least one Track 2 or 3 team as intended collaborator
- [ ] Replace "ethnographic" with "structured incident protocol" in the first 3 paragraphs
- [ ] Replace "Tinbergen's four questions" with engineering-legible framing
- [ ] Add a paragraph explicitly addressed to crypto/security engineers: "Here's how you use this"
- [ ] Add AIID collaboration framing (complementary, not competing)
- [ ] Add AISI / UK AI safety ecosystem connection if any exists
- [ ] Review all budget numbers — add API cost-per-interview calculation
- [ ] If a postdoc candidate is known: name them
