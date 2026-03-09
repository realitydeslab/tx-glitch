# Critique & Defense — ARIA Scaling Trust Application
## Trust.Fail | Track 2.2 (Components)

**Perspective:** Hostile expert reviewer with crypto/security background. Think: someone who has shipped cryptographic protocols, built adversarial systems, designed multi-party computation schemes. Not an HCI person. Deeply suspicious of "qualitative" research dressed up as infrastructure.

---

## CRITIQUE 1: "This is ethnography, not security engineering."

**The attack:**
> "The core methodology — semi-structured interviews, ethograms, ethnographic cards — is qualitative social science. It has zero relevance to the security infrastructure ARIA is trying to build. Track 2.2 is about components for secure agent coordination: formal policy languages, cryptographic guarantees, protocol design. You're submitting a sociology project to an engineering programme."

**Severity:** CRITICAL

**Why it stings:**
This is the central identity crisis of the application. ARIA's programme director (Alex Obadia) co-founded Flashbots — a team that built MEV auction infrastructure, formal auction mechanisms, and cryptographic relay protocols. Nicola Greco is from Protocol Labs — IPFS, Filecoin, formal verification. Their instinct when they see "ethnographic interviews" is that this is CHI or CSCW work that wandered into the wrong room. The programme language — "formal security policy elicitation," "cryptographic guarantees," "provable properties" — doesn't map obviously onto "semi-structured interview coded with an ethogram."

The sting is real: qualitative interview data, no matter how carefully coded, cannot directly yield formal security specifications. The gap between "user felt betrayed" and "RBAC policy violation" is enormous, and the application doesn't bridge it.

**The defense:**
The objection confuses the *medium* with the *purpose*. This is the same mistake that dismisses usable security research — ignoring that the reason PGP failed (users couldn't understand key signing) or why TLS CAs keep getting compromised (no one modelled the trust model users actually held) was *empirical failure*, not cryptographic failure. Every formal security system embeds assumptions about human trust models. Trust.Fail is the system that makes those assumptions visible and testable.

More specifically:
- The interview protocol is not just "chatting" — it produces structured YAML records with machine-readable fields: trust trajectory scores, mechanism codes (design/training/configuration/emergence), stakeholder maps. This is structured data, not field notes.
- The MCP tool pipeline from transcript → structured policy is open-source software, not a paper. It is literally a component.
- The deliberation pipeline that converts failure narratives into security policy specifications is an engineering artefact with measurable outputs (can your formal security tool ingest it? Yes, by design).

**Preemptive action:**
Add a subsection titled "From Interview to Formal Policy: The Elicitation Pipeline" that shows with a concrete worked example how a transcript becomes a structured YAML card becomes a candidate security policy requirement. Show the schema. Show an example input/output. Make the engineering artefact legible to engineers.

---

## CRITIQUE 2: "500 interviews in 12 months is fantasy. Your data will be too thin to matter."

**The attack:**
> "Your track record on data production is zero — Trust.Fail doesn't exist yet. You're asking for £720K to collect 500 self-reported interviews over 12 months, with no existing user base, no viral mechanism, no proven recruitment channel. This is a baseline-free promise. At your burn rate, you'd need to collect and verify ~10 cards per week. The AI incident database (AIID) has thousands of entries built over years with a dedicated team. What makes you think you can bootstrap a corpus from scratch at this rate?"

**Severity:** CRITICAL

**Why it stings:**
The AIID (AI Incident Database) has over 700 reports after years of operation with a full-time team and institutional backing. Recruiting interview participants for a 30-45 minute structured interview (not a casual tweet) about a personally meaningful trust failure is *hard*. The application's recruitment plan ("multi-channel collection, Discord, social media, conference recruitment drives") is vague. There's no viral mechanism, no existing community, no clear reason why someone who had a bad ChatGPT interaction would spend 45 minutes discussing it with a Discord bot.

The £10,000 participant incentive (500 × £20 Amazon vouchers) is borderline insulting — it's not nearly enough to drive participation at that scale.

**The defense:**
The key insight missed by the critique: Trust.Fail is not trying to build an AI incident database. It's specifically targeting *agents* and *trust dynamics* — a much narrower, hotter topic. The participant pool is not the general public — it's the AI-literate early-adopter community (AI safety forums, ERA/EAF networks, ALIFE community, Oxford researchers) who have *already* had meaningful agent interactions and are highly motivated to discuss them. The £20 voucher is a token appreciation, not the motivation.

More important: the AI-agent space is growing at exponential rates, with millions of new agentic interactions weekly. The interview engine running on Discord in active AI safety communities can realistically reach motivated participants at scale. The Discord bot approach lowers friction dramatically — participants don't need to navigate a separate website.

But the application should be honest: 500 is a stretch goal, not a minimum. 200 high-quality cards is already scientifically significant and programme-useful.

**Preemptive action:**
(a) Reframe milestones: Q1 = 50 (pilot/validation), Q2 = 200 (scale target), Q3-Q4 = 500 (aspirational). The programme-useful threshold is 200, not 500.
(b) Name concrete recruitment partners — specific Discord servers, specific EA/ERA networks, specific Oxford research groups. Show you have warm channels already.
(c) Add a paragraph on the "warm community" you already have access to: ERA fellows, ALIFE participants, Oxford HCC researchers. Give numbers.

---

## CRITIQUE 3: "The 'tooling' claim is hand-wavy. What is the actual MCP tool, and can I use it today?"

**The attack:**
> "You claim Track 2.2 status by asserting your interview pipeline is a 'security policy elicitation tool' and that you'll release it as an 'open-source MCP tool usable by any Track 2 agent.' But there's no prototype, no schema, no API spec, no example output. The entire Track 2 tooling claim rests on a promise. Other Track 2 teams will have working prototypes. This application has the structure of a Track 3 research project trying to pass as Track 2 tooling."

**Severity:** CRITICAL

**Why it stings:**
Completely accurate observation. The Track 2 claim is entirely forward-looking. The application describes an *intention* to build an MCP tool, not an existing component. The detailed architecture diagram shows "Collection Layer → Processing Layer → Output Layer" but does not specify: what format does the policy output take? What schema? What does an agent downstream do with it? How does it compose with negotiation engines, formal verifiers, or protocol synthesisers that other Track 2 teams are building?

Track 2.2 in the programme is specifically "Components" — meaning working, tested, interoperable software components. An intention to release MCP tools is not a component.

**The defense:**
The core infrastructure (Discord bot interview engine, deliberation pipeline, YAML schema for ethnographic cards) is already partially built — the application references trust.fail as a live site and references the GitHub repository. The question is how much is working vs. prototyped vs. planned.

If a prototype exists: show it. Link to a working demo, show an example ethnographic card YAML, show the pipeline from transcript to structured output.

The MCP tool specification should be included in the application as a technical appendix: what inputs does it take? What outputs does it produce? What does a downstream agent do with the output? This would immediately transform the Track 2 case from "promise" to "specification."

**Preemptive action:**
(a) Add a technical appendix with the YAML schema for ethnographic cards.
(b) Add a worked example: input transcript → deliberation pipeline output → structured security policy requirement in a machine-readable format.
(c) Rename the Milestone to "MCP tool v0.1 released" in Q1, not Q2 — showing it's already being built.
(d) If anything works today: show it. A GitHub link with actual code is worth more than any amount of prose.

---

## CRITIQUE 4: "£720K for 12 months to build a database and a Discord bot? Oxford overhead is eating this budget."

**The attack:**
> "Let's be honest: the technical output of this project is a Discord bot, a YAML schema, a website, and a collection of interview transcripts. The direct costs are around £423K. The remaining ~£300K is Oxford overhead (FEC, estates, indirect costs). You're paying Oxford's institutional tax to run what is essentially a lean open-source project. An independent researcher or a small startup could deliver this for £200K. Why should ARIA fund Oxford's overhead model?"

**Severity:** MAJOR

**Why it stings:**
The FEC model is genuinely painful. Oxford's overhead structure (50% indirect on staff + estates) adds ~£127K+ to what would otherwise be a lean research project. The budget breakdown shows £96,500 indirect costs + £30,000 estates on top of £193,000 staff costs. This means for every £1 of researcher salary, ARIA pays £0.65 in institutional overhead. The actual direct costs are reasonable; the overhead is what makes £720K feel inflated.

The AI API costs (£24K for £2K/month) for a Discord interviewing bot are also suspicious — this suggests heavy LLM use per interview, which raises questions about the cost model at scale and whether the "AI interviewer" quality is being over-engineered.

**The defense:**
Oxford provides real value: ethics approval (CUREC), data governance infrastructure (GDPR compliance at institutional scale), reputation that attracts participants, access to the PI's supervisor network (Van Kleek), and institutional stability for a 12-month project. An independent researcher or startup cannot get ethics approval, GDPR data protection at scale, or the participant trust that Oxford's name provides.

More importantly, ARIA has specifically sought to work with academic institutions for Track 3 and bluesky research. The application is applying to Track 2.2 *and* 3.4 — the bluesky component is inherently a fit for academic overhead models.

On API costs: £2K/month is realistic for hundreds of multi-turn GPT-4 interviews per month. The budget should show cost-per-interview calculations explicitly to make this legible.

**Preemptive action:**
(a) Add a cost-per-output table: cost per verified card, cost per Arena challenge scenario, cost per MCP tool release. This grounds the budget in concrete deliverables.
(b) Break out the FEC overhead explicitly and briefly justify each component (ethics compliance, data governance, institutional access).
(c) Show an API cost model: N interviews/month × average tokens × price/token = £X. Make the £2K/month figure concrete.

---

## CRITIQUE 5: "Why does Alex Obadia care about ethnographic interviews?"

**The attack:**
> "Alex Obadia built MEV auction mechanisms and cryptographic relays. Nicola Greco built distributed hash tables and formal verification frameworks. Neither of these people wakes up in the morning thinking 'what I really need is more ethnographic data.' The framing of this project is entirely academic-HCI — it reads like a CHI paper, not a Scaling Trust component. There is no moment in this application where I can see how a crypto engineer would pick up Trust.Fail outputs and use them in their work."

**Severity:** MAJOR

**Why it stings:**
This is a genuine cultural mismatch. The ARIA Scaling Trust team comes from crypto infrastructure backgrounds where the unit of work is a protocol spec, a formal proof, or a deployed system. Ethnographic interviews are not part of their epistemological toolkit. The application speaks to HCI/CSCW reviewers, not to crypto/security engineers. Even if Trust.Fail's outputs are genuinely useful, they need to be framed in a language that makes sense to Flashbots engineers.

The specific question: "given a Trust.Fail ethnographic card, what does a protocol engineer do with it?" is never answered.

**The defense:**
Flashbots' core problem — MEV, miner extractable value — is fundamentally a *trust failure* problem. Block proposers behave in ways that contradict the implicit security policies of users (front-running, sandwich attacks). The MEV crisis was discovered through empirical observation (Daian et al., 2019), not through formal analysis. Flashbots' solution (MEV-Boost, proposer/builder separation) emerged from understanding the *failure mode* empirically first.

Trust.Fail is building the same empirical infrastructure for human-AI trust failures. The analogy: Flashbots' incident analysis is to MEV what Trust.Fail's ethnographic cards are to agent trust violations. Both are grounded threat intelligence that enables protocol design.

Alex Obadia should care because: (1) Trust.Fail provides the failure taxonomy that tells you *which* trust properties need cryptographic guarantees — without it, you're formalising the wrong things; (2) the Arena challenge scenarios are directly usable as test cases for the systems other Track 2 teams are building.

**Preemptive action:**
(a) Open the application with the MEV analogy or a concrete crypto failure mode — something that lands with this specific audience. Not Tinbergen first, not "ethnographic cards" first.
(b) Add a short paragraph explicitly addressed to crypto/security engineers: "Here's how you use Trust.Fail outputs in your protocol design work."
(c) Frame the ethogram as a *formal taxonomy* — structured, comparable, machine-readable. This resonates with crypto engineers better than "ethnography."

---

## CRITIQUE 6: "Is this really Track 2.2? Or did you stretch to get in the door?"

**The attack:**
> "Track 2.2 is 'Components: Security Policy Elicitation.' The programme description implies tooling that takes user goals and produces formal security policies in machine-readable form — something a negotiation engine or protocol synthesiser can consume. Trust.Fail produces ethnographic cards. These are not security policies. The gap between an interview transcript and a formal policy specification is unbridged in this application."

**Severity:** MAJOR

**Why it stings:**
Valid. Track 2.2 implies a *tool* that *produces* security policies. The application's claim is that the interview protocol *elicits* implicit security policies from humans, and that the deliberation pipeline converts these into structured YAML. But the application never shows that this YAML is a *security policy* in a form that other Track 2 tools (negotiation engines, formal verifiers) can consume. It's a description of an aspiration, not a demonstrated interface.

**The defense:**
Track 3.4 (Bluesky) cross-referencing is actually the honest track. The application explicitly cross-references Track 3.4. The strongest honest positioning is: primarily Track 3.4 (empirical bluesky research that generates the data layer for the whole programme) with a sincere secondary claim on Track 2.2 (because the interview engine and MCP tool genuinely are components, even if novel and not yet proven to interoperate with downstream tools).

The risk of over-claiming Track 2.2 is that reviewers dismiss it as disingenuous. The opportunity is to be explicit: "We are Track 3.4 primary, Track 2.2 secondary. Our Track 2.2 contribution is the elicitation tool; we are explicitly designing it to interface with [name the other teams'] formal policy frameworks."

**Preemptive action:**
(a) Lead with Track 3.4 as primary, Track 2.2 as secondary. Don't try to be fully Track 2 — it reads as a stretch.
(b) Name the interface: "Our YAML schema is designed to be consumed by [X formal policy language / Y negotiation engine]. We will co-design the interface with Track 2 tooling teams during Q1."
(c) The "we serve the Arena" framing is actually the strongest honest Track 1 connection — lean into that too.

---

## CRITIQUE 7: "The team is under-powered for the claims."

**The attack:**
> "The PI is a DPhil student. The rest of the team is unfilled. There's no named security engineer, no cryptographer, no formal methods person. The advisory board is an HCI supervisor, an AI safety researcher, and an XR designer. Nobody on this team has shipped a security component, designed a cryptographic protocol, or deployed infrastructure at scale. The claim to deliver Track 2.2 security policy elicitation components requires people who understand what security policies actually are."

**Severity:** MAJOR

**Why it stings:**
This is accurate. Amber is impressive (Stanford, Tsinghua, Oxford, ERA Fellow) but his background is AI systems + HCI + open-source hardware — not security engineering. The team being listed as "to hire" is a significant weakness because ARIA cannot evaluate the team's ability to execute. An application with fully named team members is far more credible.

The advisors are all HCI/design/AI safety — none are crypto/security specialists. For a project claiming Track 2.2 status, this is a gap.

**The defense:**
The PI's Dan Boneh connection (Stanford advisor) is a direct line to one of the world's top cryptographers and security engineers. This should be foregrounded, not buried. If Boneh is willing to advise informally or be named as a collaborator, that single name transforms the credibility of the security engineering claim.

Joel Lehman (ERA/Sakana) is a credible AI safety advisor. Max Van Kleek (Oxford) has deep expertise in AI transparency and user-facing security.

The team-to-hire is a structural vulnerability — ideally name at least the postdoc if a candidate is known.

**Preemptive action:**
(a) Surface the Dan Boneh connection explicitly — even as "informal advisor" — it's a major credibility signal for this specific programme.
(b) If there's a postdoc candidate in mind, name them (or name the search criteria in detail: "candidates with background in X and Y").
(c) Add one security/crypto collaborator — even an informal connection to someone at a UK crypto lab (e.g., IC3, ETH Zurich, Edinburgh crypto group).
(d) Consider adding an advisory board member with formal security background.

---

## CRITIQUE 8: "The Tinbergen/ethology framing is academically cute but practically irrelevant."

**The attack:**
> "Adapting Tinbergen's four questions from animal behaviour to AI system analysis is intellectually interesting and probably publishable at ALIFE or CHI. But it's not a security engineering tool. The four questions — mechanism, development, function, phylogeny — are descriptive categories from ethology with no direct mapping to security properties, threat models, or attack vectors. This is scientific window-dressing."

**Severity:** MINOR

**Why it stings:**
There's a real gap between the ethological framing and the security engineering output. The four questions produce a categorisation of *why* a trust failure occurred, which is valuable for understanding and arguably for taxonomy — but the mapping from "development" or "phylogeny" of an AI behaviour to a security requirement is not obvious. The framing may obscure rather than illuminate for technical reviewers.

**The defense:**
The ethogram serves a specific purpose: enabling *systematic comparison* across diverse AI systems. Without a structured framework, you have a pile of anecdotes. With the ethogram, you can ask: "Are failures of type 'operator configuration' more likely to result in recoverable vs. permanent trust loss?" — a statistical question that informs policy design. The framework is the analytical backbone, not the deliverable.

**Preemptive action:**
(a) Show a concrete worked example of how the four questions produce a specific, useful categorisation for a real trust failure.
(b) Consider simplifying the ethogram framing for this audience: lead with the *output* (structured taxonomy, machine-readable classification) rather than the *intellectual heritage* (Tinbergen). The heritage can go in a footnote.

---

## Summary Table

| # | Attack | Severity | Key Defense | Priority Fix |
|---|--------|----------|-------------|--------------|
| 1 | "This is ethnography, not security engineering" | CRITICAL | Show the engineering pipeline with schema + worked example | Add elicitation pipeline section |
| 2 | "500 interviews is fantasy" | CRITICAL | Reframe milestones; name warm channels; lower minimum bar | Lower minimum target to 200; name partners |
| 3 | "The MCP tool is a promise, not a component" | CRITICAL | Show prototype / spec now | Add schema appendix + demo link |
| 4 | "£720K for a Discord bot is too much" | MAJOR | Cost-per-output table; justify overhead | Add deliverable cost table |
| 5 | "Why would Obadia care?" | MAJOR | MEV analogy; address crypto engineers directly | Rewrite opening with crypto framing |
| 6 | "Is this really Track 2.2?" | MAJOR | Lead with Track 3.4; name the interface | Reorder track positioning |
| 7 | "Team is under-powered" | MAJOR | Surface Boneh connection; name postdoc candidate | Add security advisor; name Boneh |
| 8 | "Tinbergen is academic window-dressing" | MINOR | Show concrete output; lead with taxonomy not heritage | Simplify ethogram framing |
