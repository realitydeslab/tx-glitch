# Literature Review 2: AI Incident Databases & Reporting

*For ARIA Scaling Trust application — Trust.Fail project*
*Compiled March 2026*

---

## Overview

This review covers existing infrastructure for documenting, classifying, and learning from AI failures — including the AI Incident Database (AIID), the AI, Algorithmic, and Automation Incidents and Controversies (AIAAIC) repository, aviation-inspired incident reporting models, and academic studies of AI failure documentation practices. Trust.Fail is positioned as the first platform to combine verified first-person accounts with systematic ethographic coding.

---

## Foundational Databases & Resources

### 1. McGregor, S. (2021). Preventing repeated real world AI failures by cataloging incidents: The AI Incident Database. *Proceedings of the 35th AAAI Conference on Artificial Intelligence*, 15458–15463.
**DOI:** 10.1609/aaai.v35i17.17817

**Key Contribution:** Introduces the AI Incident Database (AIID) — the first large-scale, public repository of documented AI failure incidents. Reports on methodology, initial corpus, and taxonomy. Argues that systematic cataloging enables prevention of repeated failures analogously to aviation and nuclear safety.

**Relevance to Trust.Fail:** The AIID is the closest existing system to Trust.Fail but operates at the level of media-reported incidents, not verified first-person accounts. Trust.Fail complements AIID by adding the subjective trust dimension missing from objective incident records.

---

### 2. Turri, V., & Dzombak, R. (2023). Why we need to know more: Exploring the state of AI incident documentation practices. *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society (AIES)*, 503–512.
**DOI:** 10.1145/3600211.3604700

**Key Contribution:** Empirical study of AI incident documentation practices across organizations. Finds that most organizations lack structured incident reporting, definitions of "AI incident" vary widely, and documentation rarely includes human impact. Identifies key gaps in existing practice.

**Relevance to Trust.Fail:** Directly motivates Trust.Fail's existence by documenting the absence of user-centred incident documentation. The gap between organizational records and user experience is exactly what Trust.Fail bridges.

---

### 3. Paeth, K., Atherton, D., Pittaras, N., Frase, H., & McGregor, S. (2025). Lessons for editors of AI incidents from the AI Incident Database. *Proceedings of the 39th AAAI Conference on Artificial Intelligence*.
**DOI:** 10.1609/aaai.v39i28.35163

**Key Contribution:** Reflects on five years of AIID editorial practice. Identifies challenges in incident classification, temporal drift in AI definitions, and editorial biases. Proposes improved ontologies and workflow for incident editors.

**Relevance to Trust.Fail:** Trust.Fail's structured interview and coding methodology addresses many of the editorial challenges identified here — particularly the lack of first-person accounts and the difficulty of attributing failure causation.

---

### 4. Pittaras, N., & McGregor, S. (2022). A taxonomic system for failure cause analysis of open source AI incidents. *arXiv preprint arXiv:2211.07280*.
**URL:** https://arxiv.org/abs/2211.07280

**Key Contribution:** Proposes a cause taxonomy for AI incidents based on analysis of the AIID corpus. Identifies dataset issues, model design failures, deployment context mismatches, and governance failures as primary causal categories.

**Relevance to Trust.Fail:** Trust.Fail's Tinbergen-based ethogram provides a complementary causal taxonomy. The two systems can be mapped against each other to validate and extend both.

---

### 5. McGregor, S., Paeth, K., & Lam, K. (2022). Indexing AI risks with incidents, issues, and variants. *arXiv preprint arXiv:2211.10384*.
**URL:** https://arxiv.org/abs/2211.10384

**Key Contribution:** Introduces a three-level categorization (incidents, issues, and variants) to address the challenge that many AIID entries are related instances of the same underlying failure. Provides a formal ontology for AI risk indexing.

**Relevance to Trust.Fail:** Trust.Fail's coded interviews are precisely designed to distinguish symptom-level failures (what users experienced) from root-cause failures (what actually went wrong) — directly addressing the incident/issue/variant distinction.

---

## Safety Science Models Applied to AI

### 6. Leveson, N. G. (2011). *Engineering a Safer World: Systems Thinking Applied to Safety*. MIT Press.
**DOI:** 10.7551/mitpress/8179.001.0001

**Key Contribution:** Introduces Systems-Theoretic Accident Modeling and Processes (STAMP) — a sociotechnical model that treats accidents as resulting from inadequate control constraints rather than component failures alone. Widely applied in aviation, nuclear, and now AI safety.

**Relevance to Trust.Fail:** Trust.Fail's failure accounts can be analyzed through STAMP to identify systemic control failures beyond individual AI performance. The platform's corpus enables the first large-scale STAMP-based analysis of human-AI trust failures.

---

### 7. Hollnagel, E., Woods, D. D., & Leveson, N. (Eds.). (2006). *Resilience Engineering: Concepts and Precepts*. Ashgate.
**URL:** https://www.ashgate.com/isbn/9780754646419

**Key Contribution:** Introduces resilience engineering as an alternative to traditional safety analysis — focusing on what goes right as well as what goes wrong. Argues for proactive safety systems that learn from both success and failure. Foundational for modern safety science.

**Relevance to Trust.Fail:** Trust.Fail adopts the resilience engineering perspective: understanding trust failures is part of building more resilient human-AI systems. The platform's positive failure documentation (what helped trust recover) is directly informed by resilience thinking.

---

### 8. Reason, J. (1990). *Human Error*. Cambridge University Press.
**DOI:** 10.1017/CBO9781139062367

**Key Contribution:** Introduces the Swiss Cheese model of accident causation — organizational failures create aligned "holes" through which hazards propagate. Foundational for safety culture analysis. Reason's distinction between active failures and latent conditions maps onto AI trust failures.

**Relevance to Trust.Fail:** Trust.Fail's interviews frequently reveal latent organizational conditions (poor deployment decisions, inadequate disclosure) that underlie apparent AI performance failures. Reason's model provides the causal structure for this analysis.

---

### 9. Kluge, A., Frank, B., & Maten, H. (2014). Measuring the near-miss reporting climate: From aviation to other high-risk industries. *Aviation, Space, and Environmental Medicine*, 85(4), 419–425.
**DOI:** 10.3357/ASEM.3758.2014

**Key Contribution:** Demonstrates that near-miss reporting culture is a leading indicator of safety performance. Studies from aviation show voluntary near-miss reporting reduces serious accidents. Argues for extending near-miss culture to other high-risk domains.

**Relevance to Trust.Fail:** Trust.Fail is explicitly a near-miss reporting system for AI trust failures. This paper validates the safety benefits of the voluntary reporting model Trust.Fail adopts.

---

## AI Failure Taxonomies

### 10. Raji, I. D., & Buolamwini, J. (2019). Actionable auditing: Investigating the impact of publicly naming biased performance results of commercial AI products. *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society (AIES)*, 429–435.
**DOI:** 10.1145/3306618.3314244

**Key Contribution:** Demonstrates that public disclosure of AI performance disparities (naming and shaming) leads to measurable improvements in commercial AI systems. Introduces the concept of "audit disclosure" as an accountability mechanism.

**Relevance to Trust.Fail:** Trust.Fail's public corpus of verified failure accounts operates as a continuous audit disclosure mechanism. This paper provides the accountability rationale for Trust.Fail's open publication model.

---

### 11. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 610–623.
**DOI:** 10.1145/3442188.3445922

**Key Contribution:** Identifies systematic failure modes of large language models: training data curation failures, opacity failures, environmental impact failures, and coherence illusion failures. Provides a taxonomy of LLM-specific risks.

**Relevance to Trust.Fail:** As Trust.Fail specifically targets human-AI interaction failures, LLM failures are a major source of incident types. The stochastic parrots taxonomy provides specific failure categories for LLM-related trust violations.

---

### 12. Wieringa, M. (2020). What to account for when accounting for algorithms: A systematic literature review on algorithmic accountability. *Proceedings of the 2020 ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 1–18.
**DOI:** 10.1145/3351095.3372833

**Key Contribution:** Systematic review identifying five accountability objects (actors, decisions, procedures, data, outcomes) and three accountability mechanisms (audit, disclosure, stakeholder participation). Maps the accountability landscape for AI systems.

**Relevance to Trust.Fail:** Trust.Fail is an accountability mechanism (stakeholder participation + disclosure). This paper positions Trust.Fail within the broader AI accountability ecosystem.

---

### 13. Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I. D., & Gebru, T. (2019). Model cards for model reporting. *Proceedings of the 2019 ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 220–229.
**DOI:** 10.1145/3287560.3287596

**Key Contribution:** Proposes model cards as structured documentation for AI models, including performance metrics across demographic groups and intended use limitations. Establishes a reporting standard that makes AI capabilities and limitations transparent.

**Relevance to Trust.Fail:** Model cards document prospective limitations; Trust.Fail documents retrospective failures. The two systems are complementary — Trust.Fail's corpus can be used to identify model card disclosures that would prevent documented failures.

---

## Responsible AI Monitoring & Governance

### 14. Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. *Nature Machine Intelligence*, 1, 389–399.
**DOI:** 10.1038/s42256-019-0088-2

**Key Contribution:** Analyses 84 AI ethics guidelines from 40 countries, identifying convergence around five principles (transparency, justice, non-maleficence, responsibility, privacy) and significant implementation gaps. First systematic review of global AI ethics governance.

**Relevance to Trust.Fail:** Trust.Fail's failure corpus provides empirical evidence of where existing guidelines are insufficient or unenforced. The platform connects abstract principles to concrete failure experiences.

---

### 15. Kearns, M., & Roth, A. (2019). *The Ethical Algorithm: The Science of Socially Aware Algorithm Design*. Oxford University Press.
**URL:** https://global.oup.com/academic/product/the-ethical-algorithm-9780190948207

**Key Contribution:** Argues for formal algorithmic approaches to ethical AI problems (fairness, privacy, game theory). Provides technical frameworks for building trust properties into systems by design rather than by monitoring.

**Relevance to Trust.Fail:** Trust.Fail's security policy elicitation role (ARIA Track 2.2) requires translating documented failures into formal constraints. Kearns & Roth provide the technical vocabulary for this translation.

---

### 16. Dafoe, A. (2018). AI governance: A research agenda. *Future of Humanity Institute, University of Oxford*.
**URL:** https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf

**Key Contribution:** Comprehensive research agenda for AI governance covering technical, institutional, and international dimensions. Identifies failure documentation and incident reporting as key governance mechanisms.

**Relevance to Trust.Fail:** Positions Trust.Fail within the broader AI governance ecosystem. Dafoe's agenda explicitly calls for empirical data on AI failures — Trust.Fail provides this data at the scale of individual user experiences.

---

### 17. Cihon, P. (2019). Standards for AI governance: International standards to enable global coordination in AI research and development. *Future of Humanity Institute, University of Oxford*.
**URL:** https://www.fhi.ox.ac.uk/wp-content/uploads/Standards_-FHI-Technical-Report.pdf

**Key Contribution:** Maps existing international AI standards and proposes frameworks for global AI governance coordination. Identifies incident reporting standards as a critical missing component.

**Relevance to Trust.Fail:** Trust.Fail contributes to filling the incident reporting standards gap Cihon identifies. The platform's coded corpus could form the basis of an international AI trust failure reporting standard.

---

## Summary Table

| # | Authors | Year | Resource Type | Key Innovation | Trust.Fail Link |
|---|---------|------|--------------|----------------|-----------------|
| 1 | McGregor | 2021 | Academic paper | AI Incident Database | Complementary system |
| 2 | Turri & Dzombak | 2023 | Academic paper | Documentation practices gap | Gap validation |
| 3 | Paeth et al. | 2025 | Academic paper | AIID editorial lessons | Methodology |
| 4 | Pittaras & McGregor | 2022 | Preprint | Failure cause taxonomy | Taxonomy mapping |
| 5 | McGregor et al. | 2022 | Preprint | Risk indexing ontology | Ontology |
| 6 | Leveson | 2011 | Book | STAMP safety model | Causal analysis |
| 7 | Hollnagel et al. | 2006 | Book | Resilience engineering | Framework |
| 8 | Reason | 1990 | Book | Swiss Cheese model | Latent causes |
| 9 | Kluge et al. | 2014 | Paper | Near-miss reporting | Reporting model |
| 10 | Raji & Buolamwini | 2019 | Paper | Audit disclosure | Accountability |
| 11 | Bender et al. | 2021 | Paper | LLM failure taxonomy | LLM failures |
| 12 | Wieringa | 2020 | Paper | Algorithmic accountability | Accountability |
| 13 | Mitchell et al. | 2019 | Paper | Model cards | Documentation |
| 14 | Jobin et al. | 2019 | Paper | Ethics guidelines landscape | Governance |
| 15 | Kearns & Roth | 2019 | Book | Ethical algorithm design | Formal methods |
| 16 | Dafoe | 2018 | Report | AI governance agenda | Policy positioning |
| 17 | Cihon | 2019 | Report | Standards gap | Standards gap |
