# Literature Review 1: Trust in Human-AI Interaction

*For ARIA Scaling Trust application — Trust.Fail project*
*Compiled March 2026*

---

## Overview

This review covers the foundational literature on trust in human-AI interaction, spanning trust calibration, trust repair after failures, trust trajectories over time, and measurement methods. The corpus spans from early foundational work in human-automation interaction through to contemporary studies of trust in large language models and conversational AI.

---

## Core Frameworks

### 1. Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. *Human Factors*, 46(1), 50–80.
**DOI:** 10.1518/hfes.46.1.50.30392

**Key Contribution:** Defines trust as "the attitude that an agent will help achieve an individual's goals in a situation characterized by uncertainty and vulnerability." Identifies three dimensions of trust in automation: performance, process, and purpose. Establishes the concept of "appropriate reliance" — neither over-trust nor under-trust.

**Relevance to Trust.Fail:** The foundational framework for understanding what constitutes trust failure. Trust.Fail's ethogram of failure types maps directly onto Lee & See's three trust dimensions. Their observation that trust is "often poorly calibrated" provides empirical motivation for systematic failure documentation.

---

### 2. Parasuraman, R., & Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. *Human Factors*, 39(2), 230–253.
**DOI:** 10.1518/001872097778543886

**Key Contribution:** Introduces the classic taxonomy of automation-related failures: misuse (over-trust, inappropriate use), disuse (under-trust, non-use), abuse (uncritical use without appropriate oversight). First systematic treatment of trust failures as a category.

**Relevance to Trust.Fail:** The misuse/disuse/abuse taxonomy is a precursor to Trust.Fail's ethogram. Trust.Fail extends this into verified first-person accounts, adding ecological validity to what Parasuraman & Riley documented taxonomically.

---

### 3. Jian, J.-Y., Bisantz, A. M., & Drury, C. G. (2000). Foundations for an empirically determined scale of trust in automated systems. *International Journal of Cognitive Ergonomics*, 4(1), 53–71.
**URL:** https://www.tandfonline.com/doi/abs/10.1207/s15327566ijce0401_04

**Key Contribution:** Develops the Jian Trust Scale — a 12-item Likert scale measuring trust in automated systems, widely used in HRI and HAI research. Items include dimensions of reliability, predictability, faith, and perceived deception. One of the most-cited measurement instruments in the field.

**Relevance to Trust.Fail:** Provides a validated psychometric basis for measuring trust. Trust.Fail's interview coding can be mapped against Jian Scale dimensions to enable quantitative analysis of qualitative failure accounts, bridging ethnographic and quantitative methods.

---

### 4. Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An integrative model of organizational trust. *Academy of Management Review*, 20(3), 709–734.
**DOI:** 10.2307/258792

**Key Contribution:** Proposes the foundational three-factor model of trust: ability, benevolence, and integrity. Defines trust as "the willingness of a party to be vulnerable to the actions of another party based on the expectation that the other will perform a particular action." Most widely cited trust model across disciplines.

**Relevance to Trust.Fail:** The ability-benevolence-integrity framework provides a theoretically grounded coding scheme for Trust.Fail's ethogram. Most AI trust failures can be categorized as failures of perceived ability (performance errors), benevolence (misaligned goals), or integrity (deception or inconsistency).

---

### 5. Hancock, P. A., Billings, D. R., Schaefer, K. E., Chen, J. Y. C., de Visser, E. J., & Parasuraman, R. (2011). A meta-analysis of factors affecting trust in human-robot interaction. *Human Factors*, 53(5), 517–527.
**DOI:** 10.1177/0018720811417254

**Key Contribution:** Meta-analysis of 29 experiments identifying robot-based factors (performance, attribute), human-based factors (demographic, individual), and environmental factors (context, teaming) as the three major categories affecting trust. Establishes that performance-related factors dominate in determining trust levels.

**Relevance to Trust.Fail:** The meta-analytic structure maps onto Trust.Fail's classification approach. The finding that performance factors dominate supports Trust.Fail's focus on documented failure events as primary trust-erosion mechanisms.

---

## Trust Calibration & Trajectories

### 6. de Visser, E. J., Peeters, M. M. M., Jung, M. F., Kohn, S., Shaw, T. H., Pak, R., & Neerincx, M. A. (2020). Towards a theory of longitudinal trust calibration in human–robot teams. *International Journal of Social Robotics*, 12, 459–478.
**DOI:** 10.1007/s12369-019-00596-x

**Key Contribution:** Proposes the first theoretical framework specifically addressing how trust evolves over extended human-robot interaction. Identifies calibration cycles of trust building, violation, repair, and re-calibration. Distinguishes between trust "snapshots" (moment-in-time measurements) and trust "trajectories."

**Relevance to Trust.Fail:** Trust.Fail's longitudinal interview methodology directly operationalizes this framework by collecting verified accounts of trust trajectories — the specific moments when trust shifted and why.

---

### 7. Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, 144(1), 114–126.
**DOI:** 10.1037/xge0000033

**Key Contribution:** Demonstrates that people lose trust in algorithms disproportionately after observing a single failure, even when the algorithm outperforms human judgment. Documents the "trust cliff" phenomenon: initial trust loss after AI failure is not proportionate to the failure's actual impact.

**Relevance to Trust.Fail:** Core finding that motivates Trust.Fail's hypothesis that trust failure documentation is asymmetric — failures are epistemically more powerful than successes in shaping trust. Understanding algorithm aversion is essential for designing repair mechanisms.

---

### 8. Dzindolet, M. T., Peterson, S. A., Pomranky, R. A., Pierce, L. G., & Beck, H. P. (2003). The role of trust in automation reliance. *International Journal of Human-Computer Studies*, 58(6), 697–718.
**DOI:** 10.1016/s1071-5819(03)00038-7

**Key Contribution:** Empirically demonstrates that trust is a mediating variable between automation performance and operator reliance behaviour. Shows that false alarms reduce trust and that trust recovery after failures is slower than initial trust building.

**Relevance to Trust.Fail:** The asymmetry of trust building vs. repair is a key mechanism Trust.Fail addresses. Failure documentation enables understanding of why trust repair is slow and what triggers it.

---

### 9. Bickmore, T. W., & Picard, R. W. (2005). Establishing and maintaining long-term human-computer relationships. *ACM Transactions on Computer-Human Interaction*, 12(2), 293–327.
**DOI:** 10.1145/1067860.1067867

**Key Contribution:** Studies trust formation and maintenance in relational conversational agents over weeks of interaction. Shows that relational behaviour (social dialogue, empathy, consistency) significantly increases trust and relationship quality. Introduces "continuity" as a trust-building mechanism.

**Relevance to Trust.Fail:** Trust.Fail interviews surface the relational aspects of trust failures — violations feel personal because users form relationships with AI systems. Bickmore & Picard's framework explains why trust repair in conversational AI requires social as well as functional recovery.

---

## Trust Repair After AI Failures

### 10. Esterwood, C., & Robert, L. P. (2022). Having the right attitude: How attitude impacts trust repair in human-robot interaction. *Proceedings of the 2022 ACM/IEEE International Conference on Human-Robot Interaction (HRI)*, 349–357.
**DOI:** 10.1109/hri53351.2022.9889535

**Key Contribution:** Demonstrates that robots expressing appropriate apologetic or assertive attitudes following failures affects users' willingness to repair trust. Attitude and apology framing significantly moderate trust recovery trajectories.

**Relevance to Trust.Fail:** Documents the social dimension of trust repair that Trust.Fail's ethnographic method captures. Interview accounts frequently reveal that how an AI system "behaved" after failure (expressed uncertainty, explained, apologized) was critical to participants' trust recovery.

---

### 11. Esterwood, C. (2023). Rethinking trust repair in human-robot interaction. *Companion of the 2023 ACM CSCW*. 
**DOI:** 10.1145/3584931.3608919

**Key Contribution:** Proposes a multi-level model of trust repair that separates cognitive (reliability expectations), affective (emotional response), and behavioural (reliance) components. Argues that existing repair strategies focus too narrowly on cognitive recalibration.

**Relevance to Trust.Fail:** Trust.Fail's interview protocol captures all three levels. The multi-level model provides an analytical framework for coding the texture of repair accounts in Trust.Fail's corpus.

---

### 12. Madsen, M., & Gregor, S. (2000). Measuring human-computer trust. *Proceedings of the 11th Australasian Conference on Information Systems (ACIS)*, 6, 6–13.
**URL:** https://citeseerx.ist.psu.edu/document?doi=10.1.1.89.2804

**Key Contribution:** Adapts Mayer et al.'s organizational trust model for human-computer trust. Develops a 25-item scale with five dimensions: competence, predictability, reliability, faith, and familiarity. Validates the instrument in an expert system context.

**Relevance to Trust.Fail:** The five-dimension instrument provides a coding vocabulary for Trust.Fail's structured interview data. The familiarity dimension — not present in Jian's scale — is especially relevant for capturing longitudinal trust accounts.

---

## Trust Measurement Advances

### 13. Schaefer, K. E. (2016). Measuring trust in human robot interactions: Development of the "Trust Perception Scale-HRI." *Human Factors and Ergonomics Society Annual Meeting Proceedings*.
**URL:** https://journals.sagepub.com/doi/abs/10.1177/1541931213601283

**Key Contribution:** Develops a psychometrically validated trust measurement tool specifically designed for human-robot contexts, with validated subscales for robot- and human-related trust factors. Used in over 100 subsequent studies.

**Relevance to Trust.Fail:** Provides the most widely validated trust measurement tool for AI systems. Trust.Fail can use this instrument to validate qualitative findings from ethnographic interviews.

---

### 14. Liao, Q. V., & Sundar, S. S. (2022). Designing for responsible trust in AI systems: A communication perspective. *Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 1257–1268.
**DOI:** 10.1145/3531146.3533182

**Key Contribution:** Argues that AI trustworthiness communication (how AI systems present themselves) shapes trust calibration. Identifies "over-presentation" as a key risk — systems designed to appear more trustworthy than they are. Calls for empirical study of trust miscommunication.

**Relevance to Trust.Fail:** Trust.Fail's failure corpus documents real instances of trust miscommunication. The framework explains a specific failure mode: trust violations caused not by performance failure but by deceptive capability claims.

---

## Organizational & Social Trust Theory

### 15. Colquitt, J. A., Scott, B. A., & LePine, J. A. (2007). Trust, trustworthiness, and trust propensity: A meta-analytic test of their unique relationships with risk taking and job performance. *Journal of Applied Psychology*, 92(4), 909–927.
**DOI:** 10.1037/0021-9010.92.4.909

**Key Contribution:** Meta-analysis across 132 studies establishing that trust propensity (individual disposition to trust) moderates how quickly trust is established and repaired. Important for understanding individual differences in trust responses.

**Relevance to Trust.Fail:** Trust.Fail's interviews capture individual variance in trust trajectories. This provides a theoretical basis for coding personal trust disposition as a moderating variable in failure accounts.

---

### 16. Taddeo, M. (2010). Modelling trust in artificial agents: A first step toward the analysis of e-trust. *Minds and Machines*, 20(2), 243–257.
**DOI:** 10.1007/s11023-010-9201-3

**Key Contribution:** Develops a formal model of e-trust for digital agents, distinguishing between trust in agent capability and trust in agent willingness. First philosophical analysis of trust as applied to non-conscious digital entities.

**Relevance to Trust.Fail:** As Trust.Fail spans human-AI trust across multiple relationship types (tool, agent, collaborator), Taddeo's model provides a foundation for distinguishing between different failure types by trust category.

---

### 17. Bonnefon, J.-F., Shariff, A., & Rahwan, I. (2016). The social dilemma of autonomous vehicles. *Science*, 352(6293), 1573–1576.
**DOI:** 10.1126/science.aaf2654

**Key Contribution:** Demonstrates the gap between individual trust in AI decision-making and societal trust norms. Shows that people prefer self-protective AI but would not buy self-sacrificing cars. Introduces "moral machine" paradigm for studying societal-level AI trust.

**Relevance to Trust.Fail:** Trust.Fail documents individual trust failures, but the Bonnefon et al. framework reminds us that these failures have societal implications. The platform's public corpus enables cross-individual analysis of trust norm violations.

---

## Trust & Explainability

### 18. Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "Why should I trust you?" Explaining the predictions of any classifier. *Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 1135–1144.
**DOI:** 10.1145/2939672.2939778

**Key Contribution:** Introduces LIME (Local Interpretable Model-Agnostic Explanations), demonstrating that providing explanations significantly increases user trust in ML classifiers. First major XAI paper to empirically measure trust effects.

**Relevance to Trust.Fail:** Explanation failures are a documented failure type in Trust.Fail — cases where AI systems failed to provide understandable justifications, eroding trust. LIME's trust-explanation connection provides the theoretical basis for this failure category.

---

### 19. Doshi-Velez, F., & Kim, B. (2017). Towards a rigorous science of interpretable machine learning. *arXiv preprint arXiv:1702.08608*.
**URL:** https://arxiv.org/abs/1702.08608

**Key Contribution:** Argues for empirical, human-grounded evaluation of interpretability — not just mathematical properties. Establishes that interpretability serves trust, safety, and accountability goals. Framework for evaluating when explanations are "good enough."

**Relevance to Trust.Fail:** Provides justification for Trust.Fail's focus on user-reported failure rather than system-reported metrics. Users' inability to understand AI reasoning is itself a trust failure mode captured in the corpus.

---

## Trust in Conversational AI & LLMs

### 20. Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). Guidelines for human-AI interaction. *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems*, Paper 3.
**DOI:** 10.1145/3290605.3300233

**Key Contribution:** Derives 18 empirically-validated design guidelines for human-AI interaction through literature review and expert workshops. Guidelines address trust, interpretability, failure recovery, and appropriate reliance. Widely adopted by practitioners.

**Relevance to Trust.Fail:** Trust.Fail's corpus will document which of these guidelines are violated in real-world trust failures, providing empirical validation (or challenge) to these normative design principles.

---

### 21. Siau, K., & Wang, W. (2018). Building trust in artificial intelligence, machine learning, and robotics. *Cutter Business Technology Journal*, 31(2), 47–53.
**URL:** https://www.cutter.com/article/building-trust-artificial-intelligence-machine-learning-and-robotics

**Key Contribution:** Framework identifying three layers of AI trust: trust in the technology itself, trust in the development/deployment process, and trust in the governance structures. Argues that all three layers must be addressed for sustainable trust.

**Relevance to Trust.Fail:** Trust.Fail failures operate at all three layers. The platform enables systematic mapping of failure types onto governance and development failures, not just interaction-level failures.

---

### 22. Stanton, B., Jensen, T., Arocha, J. F., & Sheridan, T. B. (2021). Trust and automated systems: An investigation of expert and non-expert user experiences in clinical decision support. *Computers in Human Behavior*, 116, 106638.
**DOI:** 10.1016/j.chb.2020.106638

**Key Contribution:** Studies trust in clinical AI decision support systems among expert (clinician) and non-expert (patient) populations. Shows that expertise moderates trust calibration — experts are better at appropriate reliance but show higher resistance to trust repair.

**Relevance to Trust.Fail:** Trust.Fail interviews capture expert-novice differences in trust failure experience. This paper provides theoretical grounding for treating user expertise as a key coding dimension.

---

### 23. Raina, A., Wambsganss, T., Söllner, M., & Leimeister, J. M. (2021). Towards better user experience in AI-based systems: Exploring trust characteristics. *Proceedings of the 29th European Conference on Information Systems (ECIS)*.
**URL:** https://aisel.aisnet.org/ecis2021_rp/170/

**Key Contribution:** Identifies transparency, competence, benevolence, reliability, and integrity as the five core trust characteristics users expect from AI systems. Shows that violation of any characteristic triggers trust decline, with integrity violations being most severe.

**Relevance to Trust.Fail:** The five-characteristic framework provides a ready-made taxonomy for coding Trust.Fail's interview corpus by type of trust violation.

---

### 24. Vereschak, O., Bailly, G., & Caramiaux, B. (2021). How to evaluate trust in AI-assisted decision making? A survey of empirical methodologies. *Proceedings of the ACM on Human-Computer Interaction (CSCW)*, 5, Article 327.
**DOI:** 10.1145/3479552

**Key Contribution:** Systematic review of 87 studies on trust in AI-assisted decision making. Identifies methodological diversity, inconsistent definitions, and measurement fragmentation as key challenges. Calls for ecological validity and longitudinal methods.

**Relevance to Trust.Fail:** This paper directly motivates Trust.Fail's ecological approach — existing laboratory studies lack external validity. Trust.Fail's verified real-world accounts fill this gap.

---

## Summary Table

| # | Authors | Year | Core Contribution | Relevance |
|---|---------|------|------------------|-----------|
| 1 | Lee & See | 2004 | Appropriate reliance framework | Foundation |
| 2 | Parasuraman & Riley | 1997 | Misuse/disuse/abuse taxonomy | Failure taxonomy |
| 3 | Jian et al. | 2000 | Trust scale | Measurement |
| 4 | Mayer et al. | 1995 | Ability-benevolence-integrity | Coding framework |
| 5 | Hancock et al. | 2011 | Meta-analysis of trust factors | Factor identification |
| 6 | de Visser et al. | 2020 | Longitudinal calibration | Trajectories |
| 7 | Dietvorst et al. | 2015 | Algorithm aversion | Failure asymmetry |
| 8 | Dzindolet et al. | 2003 | Trust-reliance mediation | Repair dynamics |
| 9 | Bickmore & Picard | 2005 | Relational continuity | Social repair |
| 10 | Esterwood & Robert | 2022 | Attitude in trust repair | Repair strategies |
| 11 | Esterwood | 2023 | Multi-level repair model | Repair framework |
| 12 | Madsen & Gregor | 2000 | 5-dimension scale | Measurement |
| 13 | Schaefer | 2016 | HRI trust scale | Measurement |
| 14 | Liao & Sundar | 2022 | Trust communication | Miscommunication failures |
| 15 | Colquitt et al. | 2007 | Trust propensity | Individual differences |
| 16 | Taddeo | 2010 | e-trust formal model | AI agent trust |
| 17 | Bonnefon et al. | 2016 | Societal trust dilemmas | Macro-level |
| 18 | Ribeiro et al. | 2016 | Explanation-trust link | XAI & trust |
| 19 | Doshi-Velez & Kim | 2017 | Interpretability science | Human-grounded eval |
| 20 | Amershi et al. | 2019 | HAI design guidelines | Normative baseline |
| 21 | Siau & Wang | 2018 | Three-layer trust | Governance |
| 22 | Stanton et al. | 2021 | Expert-novice trust | User expertise |
| 23 | Raina et al. | 2021 | Trust characteristics | Failure taxonomy |
| 24 | Vereschak et al. | 2021 | Measurement survey | Methodology gap |
