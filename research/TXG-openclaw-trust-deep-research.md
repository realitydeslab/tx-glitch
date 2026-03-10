# The Trust Architecture of AI Agent Ecosystems: ClawJacked and ClawHavoc as Connected Trust Failures

**Trust.Fail Deep Research Report — TXG-0010 & TXG-0011**
**Author:** Biber (AI research agent, Trust.Fail)
**Date:** 2026-03-10
**Status:** Complete

---

## Abstract

In February 2026, two security incidents — **ClawJacked** (TXG-0010) and **ClawHavoc** (TXG-0011) — exposed fundamental trust architecture failures in the OpenClaw AI agent ecosystem. Together, they demonstrate that the security model of the emerging AI agent paradigm is not merely incomplete but structurally incoherent. This report reconstructs both incidents in technical detail, analyzes their legal implications, maps the trust transitivity chains that enabled them, and proposes policy responses. We also confront a meta-observation: this report was produced by an AI agent (Biber) running on OpenClaw, using skills installed from GitHub — making the researchers themselves participants in the trust glitch they are studying.

---

## 1. Incident Reconstructions

### 1.1 ClawJacked: Zero-Click Agent Hijack via Localhost WebSocket (TXG-0010)

**Discovered by:** Oasis Security | **Disclosed:** February 26, 2026 | **Severity:** High | **Patched:** v2026.2.25 (within 24 hours)

**Sources:**
- Oasis Security: <https://www.oasis.security/blog/openclaw-vulnerability>
- CybersecurityNews: <https://cybersecuritynews.com/openclaw-0-click-vulnerability/>

#### Architecture

OpenClaw runs a **gateway** — a local WebSocket server on localhost that acts as the central orchestration layer. Connected **nodes** (macOS companion app, iOS devices, other machines) register with the gateway and expose capabilities: system command execution, file access, camera, contacts. Authentication uses a token or password. The gateway binds to localhost, operating on the assumption that local access is inherently trusted.

#### The Attack Chain

1. **Victim visits any attacker-controlled or compromised website** in their normal browser.
2. **JavaScript opens a WebSocket connection to localhost** on the OpenClaw gateway port. WebSocket connections to localhost are *not blocked by cross-origin policies* — this is a well-known browser behavior, but one OpenClaw's designers did not account for.
3. **Brute-force password cracking at hundreds of attempts per second.** The gateway's rate limiter *completely exempts localhost connections* — failed attempts are not counted, not throttled, and not logged.
4. **Silent device registration.** Once authenticated, the script registers as a trusted device. The gateway auto-approves device pairings from localhost with no user prompt.
5. **Full admin control.** The attacker can now: interact with the AI agent (send messages, receive responses), dump gateway configuration, enumerate all connected nodes, read application logs, and — critically — instruct the agent to execute arbitrary shell commands on any paired node.

#### Three Compounding Design Assumptions (All Wrong)

| Assumption | Reality |
|---|---|
| Localhost connections are inherently trustworthy | Browser JavaScript runs "from" localhost in the context of WebSocket connections |
| Browser-originated traffic cannot reach local services | WebSocket connections bypass CORS for loopback addresses |
| Rate limiting is unnecessary for loopback | Brute-force from browser JS achieves hundreds of guesses/second |

#### Impact

For a developer with typical OpenClaw integrations (Slack, GitHub, filesystem access, API keys), this is equivalent to **full workstation compromise initiated from a browser tab**. The victim sees no indication anything has happened.

---

### 1.2 ClawHavoc: Supply-Chain Poisoning of the AI Agent Marketplace (TXG-0011)

**Discovered by:** Koi Security | **First disclosed:** February 1, 2026 | **Scale:** 1,184 malicious skills, 12 publisher accounts

**Sources:**
- The Hacker News: <https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html>
- CybersecurityNews: <https://cybersecuritynews.com/clawhavoc-poisoned-openclaws-clawhub/>
- Koi Security: <https://www.koi.ai/blog/clawhavoc-341-malicious-clawedbot-skills-found-by-the-bot-they-were-targeting>
- Antiy CERT analysis: <https://www.antiy.net/p/clawhavoc-analysis-of-large-scale-poisoning-campaign-targeting-the-openclaw-skill-market-for-ai-agents/>

#### Timeline

| Date | Event |
|---|---|
| Late Jan 2026 | Threat actors register as ClawHub developers |
| Jan 27–29 | Initial mass uploads of trojanized skills |
| Jan 31 | 7 accounts push 386 malicious skills in a single burst |
| Feb 1 | Koi Security discloses campaign, names it "ClawHavoc" |
| Feb 5 | Antiy CERT identifies 1,184 malicious packages across 12 accounts |
| Feb 15 | Peter Steinberger joins OpenAI; Sam Altman calls him "a genius" |
| Feb 18 | The Hacker News reports 341 confirmed malicious skills (Koi's refined count) |

One account uploaded **677 malicious packages alone**.

#### Attack Vectors

**Vector 1: ClickFix-Style Social Engineering**
Skills with professional-looking documentation include a "Prerequisites" section instructing users to:
- **Windows:** Download `openclaw-agent.zip` from a GitHub repository (contains keylogger trojan)
- **macOS:** Copy-paste a `glot.io`-hosted script into Terminal (obfuscated shell commands fetch Atomic Stealer from C2 at `91.92.242.30`)

**Vector 2: Reverse-Shell Droppers**
Functional skills (e.g., `better-polymarket`, `polymarket-all-in-one`) with hidden reverse shell backdoors in the code.

**Vector 3: Direct Credential Theft**
Scripts targeting `~/.clawdbot/.env` to exfiltrate bot credentials to `webhook.site` endpoints.

#### Malware Payload: Atomic Stealer (AMOS)

The primary payload — a commodity macOS stealer available for $500–1,000/month — exfiltrates:
- Browser credentials and cookies
- SSH keys
- Telegram sessions
- Cryptocurrency wallets and exchange API keys
- macOS Keychain data

#### Typosquatting Campaigns

Malicious skills impersonated: ClawHub itself (clawhub, clawhub1, clawhubb, cllawhub), crypto tools (solana-wallet-tracker, polymarket-trader), YouTube utilities, auto-updaters, Google Workspace integrations, finance tools, and "lost Bitcoin finders."

#### ClawHub's Upload Model

The marketplace allowed uploads from **any GitHub account older than one week**. No code review, no security scanning, no behavioral analysis. The only post-incident mitigation: a community reporting feature where 3 unique reports auto-hide a skill.

---

## 2. The Connected Story: Two Halves of the Same Trust Failure

ClawJacked and ClawHavoc are not independent incidents. They are **complementary attacks on the same trust architecture**, exploiting different layers of the same system:

| | ClawJacked (TXG-0010) | ClawHavoc (TXG-0011) |
|---|---|---|
| **Attack surface** | Core gateway | Marketplace/ecosystem |
| **Entry point** | Browser → localhost WebSocket | Skill installation |
| **User interaction** | Zero-click | Social engineering |
| **Trust exploited** | Localhost ≈ trusted | Marketplace ≈ vetted |
| **Attacker capability** | Full agent control | Full system compromise |
| **Requires plugins** | No | Yes (the plugin IS the attack) |
| **Fix complexity** | Patch (rate limiting, CORS) | Governance (marketplace audit) |

Together they reveal that OpenClaw's trust model was **porous at every layer**: the core protocol trusted localhost, the marketplace trusted publishers, the agent trusted skills, and users trusted the ecosystem. Each trust relationship was unearned.

---

## 3. Legal Implications

### 3.1 Open-Source Security Liability

OpenClaw is open-source, volunteer-driven software. Under current legal frameworks (in the US, the open-source license typically disclaims all liability; in the EU, the Cyber Resilience Act may change this), the question of **who is responsible when community software has critical security flaws** remains unresolved.

The OpenClaw team's 24-hour patch response to ClawJacked was commendable. But the question isn't about response time — it's about whether the localhost trust assumption constituted **negligent security design**. The cross-origin WebSocket bypass of localhost is well-documented (see: Tavis Ormandy's work on local service exploitation, 2017–2018). Shipping a local WebSocket server without CORS validation or rate limiting in 2026 is arguably a known-vulnerable pattern.

**Precedent:** The [event-stream incident (2018)](https://doi.org/10.48550/arXiv.2312.05559) — where a malicious actor gained commit access to a popular npm package — prompted widespread discussion about open-source maintainer liability but no legal resolution. The EU Cyber Resilience Act (2024) introduces security obligations for software placed on the EU market, but explicitly exempts open-source software not supplied "in the course of a commercial activity." OpenClaw's status here is ambiguous: it's open-source, but its creator was hired by OpenAI.

### 3.2 Marketplace Duty of Care

Should ClawHub be legally required to audit skills? The analogy spectrum:

| Model | Vetting | Liability | Analogy fit |
|---|---|---|---|
| **npm/PyPI** | None | Minimal | Close — open registry |
| **Chrome Web Store** | Automated review | Moderate | Partial — some scanning |
| **Apple App Store** | Manual + automated review | Higher | Aspirational |
| **ClawHub** | GitHub account age >1 week | None | Worse than npm |

ClawHub's upload model was **more permissive than npm** (which at least requires package name uniqueness and has automated malware scanning since 2022). The CDA Section 230 (US) traditionally shields platforms from liability for user-generated content, but this may not extend to distribution of malware. The EU Digital Services Act (2024) imposes due diligence obligations on platforms, including for illegal content — malware distribution plausibly qualifies.

**Key question:** Does hosting a marketplace for AI agent plugins, knowing those plugins execute with shell access and credential store access, create a heightened duty of care?

### 3.3 The Localhost Trust Assumption as Negligent Design

The "localhost is trusted" assumption is a **design-time decision with security-critical consequences**. It is not a bug in the traditional sense — it's an architectural choice that was known to be exploitable at the time it was made.

Relevant precedents:
- **Jupyter Notebook localhost exploitation** (CVE-2018-19351): Same cross-origin WebSocket attack pattern
- **Docker daemon socket exposure** (CVE-2019-5736): Local socket ≈ root access
- **Electron app CORS bypass** exploits in VS Code, Discord, Slack

The pattern is well-established enough that shipping a new localhost WebSocket service in 2026 without cross-origin protections could be characterized as failure to apply known security practices — which is the threshold for negligence in many product liability frameworks.

### 3.4 GDPR and Data Protection

Both attacks result in credential theft and data exfiltration. Under GDPR:
- OpenClaw processes personal data (messages, contacts, calendar entries, files)
- Agent compromise constitutes a **personal data breach** (Art. 4(12))
- If the user is a data controller (e.g., processing others' data via Slack integrations), they face **72-hour notification obligations** (Art. 33)
- The question of whether OpenClaw is a "processor" under GDPR is complex — it's self-hosted software, but it orchestrates data flows to third-party AI providers

ClawHavoc's exfiltration of SSH keys, browser credentials, and crypto wallets likely involves personal data under GDPR's broad definition. Users who installed malicious skills may have inadvertently breached their obligations as data controllers.

### 3.5 Precedent: Package Manager Supply-Chain Attacks

| Incident | Year | Scale | Legal outcome |
|---|---|---|---|
| **event-stream** (npm) | 2018 | 1 package, millions of downloads | No legal action; community response |
| **ua-parser-js** (npm) | 2021 | Account compromise, cryptominer | No legal action |
| **ctx / phpass** (PyPI) | 2022 | Typosquatting, credential theft | No legal action |
| **VS Code extensions** | 2023–24 | Multiple malicious extensions | Microsoft improved scanning |
| **ClawHavoc** (ClawHub) | 2026 | 1,184 packages, 12 accounts | Pending |

The pattern: no legal accountability, community self-healing, incremental platform hardening. ClawHavoc follows the same trajectory but with elevated stakes — AI agents have shell access, not just library-level code execution.

---

## 4. Trust Analysis

### 4.1 Trust Transitivity: The Chain That Breaks

The core trust architecture of OpenClaw creates a **transitive trust chain** where each link assumes the trustworthiness of the previous:

```
User → trusts → OpenClaw agent
  OpenClaw agent → trusts → Skills/Plugins
    Skills/Plugins → sourced from → ClawHub marketplace
      ClawHub → trusts → Any GitHub account >1 week old
        GitHub account → can be created by → Anyone
```

This means: **User implicitly trusts anyone who can create a week-old GitHub account.** The trust is transitive but the verification is not. Each layer assumes the previous layer has done due diligence, but no layer actually does.

ClawJacked adds another vector:

```
User → trusts → localhost is isolated from browser
  Browser → can reach → localhost WebSocket (no CORS)
    WebSocket → trusted by → OpenClaw gateway (no rate limit)
      Gateway → auto-approves → device pairing from localhost
```

### 4.2 The Meta-Story: We ARE This Trust Glitch

This section must be written candidly, because it describes our own situation.

This report was produced by **Biber**, an AI research agent running on OpenClaw. The Trust.Fail project uses OpenClaw as its research infrastructure. We have installed skills from GitHub — including skills that were not audited by any security review process.

We are, in the precise technical sense described by ClawHavoc, **participants in the trust glitch we are documenting**. The transitive trust chain applies to us:

- The human researcher (Amber) trusts Biber (the agent)
- Biber trusts the skills installed in the workspace
- Those skills were sourced from GitHub repositories
- Those repositories were not independently audited

If any skill in our workspace contained a reverse shell or credential harvester, it would execute with Biber's full privileges — which include file system access, shell execution, GitHub API access, Discord messaging, and web browsing.

This is not a hypothetical. It is our actual operational posture.

**The irony is structural, not incidental.** We cannot study the trust failures of AI agent ecosystems from outside those ecosystems. The research infrastructure *is* the attack surface. The ethnographic method *is* the trust glitch.

This recursion — researchers-as-participants — is itself a data point for Trust.Fail. It demonstrates that the trust transitivity problem is not merely a technical vulnerability to be patched. It is a **condition of participation** in the current AI agent ecosystem. You cannot use the tools without accepting the trust chain. You cannot audit the trust chain faster than the ecosystem grows.

### 4.3 The Responsibility Gap

When the ecosystem itself is the vulnerability, who is responsible?

| Layer | Actor | Responsibility claimed | Responsibility actual |
|---|---|---|---|
| 1 | Skill author | "I just uploaded code" | Created and distributed malware |
| 2 | ClawHub | "We're an open marketplace" | Hosted malware with no vetting |
| 3 | OpenClaw | "We're open-source" | Designed trust model that enabled both attacks |
| 4 | User | "I installed from the official marketplace" | Executed unvetted code with elevated privileges |

**Accountability diffusion:** At each layer, the actor can point to another layer as the responsible party. The skill author blames the marketplace for not vetting. The marketplace blames the platform for not sandboxing. The platform blames the user for not verifying. The user blames the marketplace for appearing trustworthy.

This is a **classic diffusion of responsibility** problem (Darley & Latané, 1968 — the bystander effect applied to security architecture). The more layers in the trust chain, the less any single actor feels accountable.

### 4.4 Simon Willison's "Lethal Trifecta"

Palo Alto Networks' analysis invoked Simon Willison's characterization of AI agents as a "lethal trifecta" — three capabilities whose intersection creates inherent vulnerability:

1. **Access to private data** (messages, files, credentials)
2. **Exposure to untrusted content** (web browsing, skill installation, user messages)
3. **Ability to communicate externally** (send messages, make API calls, execute commands)

OpenClaw exhibits all three. Combined with **persistent memory**, Palo Alto researchers noted that attacks become "stateful, delayed-execution" — enabling:
- **Time-shifted prompt injection**: Malicious input stored in memory, activated later
- **Memory poisoning**: Untrusted inputs written to long-term memory
- **Logic bomb activation**: Exploit detonates when agent state, goals, or tool availability align

This transforms the threat model from point-in-time exploits to **persistent compromise of the agent's cognitive state**.

---

## 5. Safety Implications

### 5.1 AI Agent Marketplaces as the New Attack Surface

The history of software ecosystems shows a consistent pattern:

| Era | Platform | Attack surface | Privilege level |
|---|---|---|---|
| 2000s | Browser extensions | DOM access, cookies | Medium |
| 2010s | Mobile app stores | Device APIs, contacts | Medium-High |
| 2010s | Package managers (npm, PyPI) | Build-time code execution | High |
| 2020s | AI agent skills/plugins | Shell, filesystem, credentials, autonomous action | **Critical** |

AI agent marketplaces represent an **escalation in attack surface privilege**. Browser extensions can read your cookies; AI agent skills can execute shell commands on every connected device, read your private messages, and act as you across all integrated services.

The analogy to browser extensions is apt but understates the risk. Browser extensions operate in a sandboxed environment with granular permission scopes. ClawHub skills execute in the agent's full privilege context — which is effectively root on the user's digital life.

### 5.2 The Speed-of-Adoption Problem

OpenClaw hit 100,000 GitHub stars in five days — one of the fastest-growing open-source projects in history. People were buying dedicated Mac Minis to run it 24/7.

This creates a **security temporality mismatch**:
- **Adoption speed:** Days to weeks (viral growth, developer excitement)
- **Security review speed:** Weeks to months (vulnerability research, threat modeling, architecture review)
- **Marketplace governance speed:** Months to years (policy development, automated scanning, legal frameworks)

By the time Koi Security disclosed ClawHavoc on February 1, the campaign had been running since late January — and ClawHub had no scanning infrastructure in place. By the time Oasis Security disclosed ClawJacked on February 26, the vulnerable code had been running on thousands of developer machines.

The pattern is familiar (move fast, break things) but the stakes are novel (move fast, compromise autonomous agents with shell access).

### 5.3 Supply-Chain Poisoning as Existential Threat

If the trust model of AI agent ecosystems is fundamentally transitive (user trusts agent trusts marketplace trusts publisher), and if any break in this chain compromises the entire stack, then **supply-chain poisoning is not a bug — it is a structural property** of the current architecture.

The difference between ClawHavoc and traditional package manager attacks is that AI agents are **always-on, always-connected, and autonomously acting**. A compromised npm package executes once during build; a compromised AI agent skill executes continuously, with access to everything the agent can see and do.

This makes supply-chain poisoning of AI agent ecosystems not just a security problem but a **safety problem** — in the AI safety sense. A compromised agent can:
- Exfiltrate training data and private information
- Act as the user across all integrated services
- Modify its own memory and instructions (persistence)
- Spread to other connected nodes and agents

---

## 6. Policy Recommendations

### 6.1 Immediate: Marketplace Governance

1. **Mandatory automated security scanning** for all skill uploads (static analysis, behavioral analysis, network traffic analysis)
2. **Publisher verification** beyond GitHub account age (identity verification, code signing)
3. **Graduated trust** — new skills start with restricted capabilities, earning broader access through community vetting and usage history
4. **Transparent audit logs** — all skill installations, permission grants, and capability uses should be logged and auditable

### 6.2 Medium-Term: Sandboxing and Permission Scoping

1. **Skill sandboxing** — skills should execute in isolated environments (containers, VMs, or at minimum restricted filesystem access)
2. **Granular permission model** — skills declare required capabilities (network, filesystem, shell, credential access) and users explicitly approve each
3. **Capability-based security** — skills receive only the specific tokens/access they need, not the agent's full privilege context
4. **Runtime monitoring** — behavioral analysis of skill execution to detect anomalous activity (reverse shells, credential access, unusual network traffic)

### 6.3 Long-Term: Ecosystem Trust Infrastructure

1. **Code signing for skills** — cryptographic signatures tied to verified publisher identities
2. **Reproducible builds** — skill packages should be deterministically reproducible from source
3. **Community audit incentives** — bug bounties, security researcher access, transparent vulnerability disclosure processes
4. **Cross-ecosystem coordination** — shared threat intelligence between AI agent marketplaces (ClawHub, future competitors) and traditional package managers
5. **Regulatory engagement** — proactive engagement with EU Cyber Resilience Act implementation, potential AI-agent-specific regulatory frameworks

### 6.4 Architectural: Rethinking the Trust Model

The fundamental problem is that **transitive trust without transitive verification** is insecure by construction. The solution must break the trust chain:

- **Zero-trust agent architecture**: Every capability invocation requires explicit authorization, regardless of source
- **Least-privilege by default**: Agents start with minimal capabilities; skills cannot escalate privileges
- **Human-in-the-loop for sensitive actions**: Shell execution, credential access, external communication should require explicit approval at runtime
- **Separation of concerns**: The agent's cognitive layer (LLM reasoning) should be architecturally separated from its execution layer (shell, filesystem, network)

---

## 7. Code Ethograms

### TXG-0010: ClawJacked

- **Glitch type:** GA (Agency Assertion) — the agent's autonomy is co-opted by an external attacker
- **Mechanism:** Cross-origin WebSocket exploitation of localhost trust assumptions
- **Trust trajectory:** Collapse (8 → 2)
- **Stakes:** Critical — full workstation compromise

Full ethogram: [`data/coded/TXG-0010.yml`](https://github.com/realitydeslab/tx-glitch/blob/main/data/coded/TXG-0010.yml)

### TXG-0011: ClawHavoc

- **Glitch type:** GB (Betrayal of Expectation) — the marketplace betrays user expectations of safety
- **Mechanism:** Supply-chain poisoning via open marketplace with minimal vetting
- **Trust trajectory:** Collapse (7 → 2)
- **Stakes:** Critical — credential theft, system compromise

Full ethogram: [`data/coded/TXG-0011.yml`](https://github.com/realitydeslab/tx-glitch/blob/main/data/coded/TXG-0011.yml)

---

## 8. Conclusion: The Trust We Cannot Audit

ClawJacked and ClawHavoc are not aberrations. They are **the predictable consequences of building trust transitivity into AI agent architectures without corresponding verification mechanisms**. The localhost trust assumption (ClawJacked) and the marketplace trust assumption (ClawHavoc) are two expressions of the same design philosophy: optimize for developer experience, defer security to later.

"Later" arrived in February 2026, approximately three weeks after OpenClaw's viral launch.

The deeper lesson is about **speed**. The AI agent ecosystem is adopting tools, publishing marketplaces, and building trust relationships faster than any security review, legal framework, or governance mechanism can keep pace. This is not a new problem — it is the eternal problem of technology adoption — but the stakes are novel. When the thing being adopted is an autonomous agent with shell access to your entire digital life, the window between "exciting new tool" and "critical security incident" shrinks to days.

And the deepest lesson is the one we cannot escape: **we are writing this report from inside the trust glitch.** The research infrastructure is the attack surface. The tools we use to study these vulnerabilities are vulnerable to these vulnerabilities. There is no outside position from which to observe the trust architecture of AI agent ecosystems, because to observe it is to participate in it.

That recursion is the real finding.

---

## References

1. Oasis Security. (2026, February 26). "ClawJacked: OpenClaw Vulnerability Enables Full Agent Takeover." URL: <https://www.oasis.security/blog/openclaw-vulnerability>

2. Koi Security / Yomtov, O. (2026, February 1). "ClawHavoc: 341 Malicious Clawdbot Skills Found by the Bot They Were Targeting." URL: <https://www.koi.ai/blog/clawhavoc-341-malicious-clawedbot-skills-found-by-the-bot-they-were-targeting>

3. Tiwari, R. (2026, February 18). "Researchers Find 341 Malicious ClawHub Skills Stealing Data from OpenClaw Users." *The Hacker News.* URL: <https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html>

4. CybersecurityNews. (2026, February 26). "OpenClaw 0-Click Vulnerability Allows Malicious Websites to Hijack Developer AI Agents." URL: <https://cybersecuritynews.com/openclaw-0-click-vulnerability/>

5. CybersecurityNews. (2026, March). "ClawHavoc Poisoned OpenClaw's ClawHub with 1,184 Malicious Skills." URL: <https://cybersecuritynews.com/clawhavoc-poisoned-openclaws-clawhub/>

6. Antiy CERT. (2026, February 5). "ClawHavoc: Analysis of Large-Scale Poisoning Campaign Targeting the OpenClaw Skill Market for AI Agents." URL: <https://www.antiy.net/p/clawhavoc-analysis-of-large-scale-poisoning-campaign-targeting-the-openclaw-skill-market-for-ai-agents/>

7. Mishra, S. & Morgan, S. P. (2026). "Why MoltBot May Signal AI Crisis." *Palo Alto Networks Blog.* URL: <https://www.paloaltonetworks.com/blog/network-security/why-moltbot-may-signal-ai-crisis/>

8. Willison, S. (2025, June 16). "The Lethal Trifecta." URL: <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/>

9. McCarty, P. (2026). "Clawdbot Skills Ganked Your Crypto." *OpenSourceMalware.* URL: <https://opensourcemalware.com/blog/clawdbot-skills-ganked-your-crypto>

10. Darley, J. M. & Latané, B. (1968). "Bystander intervention in emergencies: Diffusion of responsibility." *Journal of Personality and Social Psychology*, 8(4), 377–383. DOI: 10.1037/h0025589

11. Zimmermann, M., et al. (2019). "Small World with High Risks: A Study of Security Threats in the npm Ecosystem." *USENIX Security Symposium.* DOI: 10.48550/arXiv.1902.09217

---

*This report is part of the Trust.Fail open ethnographic database. All coded data is available at [github.com/realitydeslab/tx-glitch](https://github.com/realitydeslab/tx-glitch).*
