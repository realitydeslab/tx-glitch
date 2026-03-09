# Multi-Agent Trust & Security

Literature review for ARIA Scaling Trust application — Trust.Fail project.

## Key Papers

### Computational Trust Models

1. **Marsh, S.P. (1994). Formalising Trust as a Computational Concept. *PhD Thesis*, University of Stirling.**
   - URL: https://dspace.stir.ac.uk/handle/1893/2010
   - First formal computational model of trust. Defines trust as a measurable quantity based on experience, knowledge, and context.
   - **Relevance:** Trust.Fail provides the empirical data that computational trust models like Marsh's need — real-world observations of how trust is formed, violated, and (sometimes) restored.

2. **Sabater, J. & Sierra, C. (2005). Review on computational trust and reputation models. *Artificial Intelligence Review*, 24(1), 33–60.**
   - DOI: 10.1007/s10462-004-0556-9
   - Comprehensive review of computational trust and reputation models for multi-agent systems. Categorises approaches by information sources and type of trust.
   - **Relevance:** Trust.Fail extends this computational tradition with empirical grounding — our ethogram codes capture the information that trust models need.

3. **Castelfranchi, C. & Falcone, R. (2010). *Trust Theory: A Socio-Cognitive and Computational Model*. Wiley.**
   - DOI: 10.1002/9780470519851
   - Proposes a socio-cognitive model of trust integrating beliefs, goals, and social relationships. Bridges sociology and multi-agent systems.
   - **Relevance:** Trust.Fail's interview protocol captures the socio-cognitive dimensions Castelfranchi & Falcone theorise about — actual beliefs, goals, and social context of trust failures.

### Trust in Multi-Agent Systems

4. **Ramchurn, S.D., Huynh, D., & Jennings, N.R. (2004). Trust in multi-agent systems. *The Knowledge Engineering Review*, 19(1), 1–25.**
   - DOI: 10.1017/S0269888904000116
   - Reviews trust mechanisms for multi-agent systems: individual-level (direct experience), system-level (institutional), and hybrid approaches.
   - **Relevance:** Trust.Fail documents trust failures across all three levels — individual, institutional, and hybrid — providing empirical cases for each.

5. **Teacy, W.T.L., Patel, J., Jennings, N.R., & Luck, M. (2006). TRAVOS: Trust and Reputation in the Context of Inaccurate Information Sources. *Autonomous Agents and Multi-Agent Systems*, 12(2), 183–198.**
   - DOI: 10.1007/s10458-006-5952-x
   - Trust model that handles inaccurate information in multi-agent systems using Bayesian estimation.
   - **Relevance:** Trust.Fail documents real cases where inaccurate AI outputs (hallucinations, errors) break trust — empirical evidence for the scenarios TRAVOS addresses.

6. **Pinyol, I. & Sabater-Mir, J. (2013). Computational trust and reputation models for open multi-agent systems: a review. *Artificial Intelligence Review*, 40(1), 1–25.**
   - DOI: 10.1007/s10462-011-9277-z
   - Updated review of trust and reputation models for open multi-agent systems. Covers cognitive, game-theoretic, and probabilistic approaches.
   - **Relevance:** The Scaling Trust programme is building exactly these open multi-agent coordination systems — Trust.Fail provides the failure data needed to validate trust models.

### Reputation Systems

7. **Resnick, P., Kuwabara, K., Zeckhauser, R., & Friedman, E. (2000). Reputation systems. *Communications of the ACM*, 43(12), 45–48.**
   - DOI: 10.1145/355112.355122
   - Foundational paper on reputation systems for online marketplaces. Identifies key design challenges: incentive compatibility, robustness, and scalability.
   - **Relevance:** Trust.Fail's database is essentially a reputation system for AI agents — documenting which systems fail and how, enabling comparative trust assessment.

8. **Jøsang, A., Ismail, R., & Boyd, C. (2007). A survey of trust and reputation systems for online service provision. *Decision Support Systems*, 43(2), 618–644.**
   - DOI: 10.1016/j.dss.2005.05.019
   - Comprehensive survey of trust and reputation frameworks. Covers subjective logic, Bayesian systems, and discrete trust models.
   - **Relevance:** Trust.Fail can be viewed as a human-in-the-loop reputation system for AI agents — providing structured evidence of trustworthiness/untrustworthiness.

### Secure Multi-Agent Coordination

9. **Sandholm, T. (1999). Distributed Rational Decision Making. *Multiagent Systems: A Modern Approach to Distributed Artificial Intelligence*, 201–258.**
   - URL: https://www.cs.cmu.edu/~sandholm/distributed-rational-decision-making.pdf
   - Covers mechanism design, negotiation, and contracting in multi-agent systems. Foundation for the Scaling Trust programme's negotiation track.
   - **Relevance:** Trust.Fail documents what happens when negotiation and coordination fail in human-AI interaction — empirical failure modes for mechanism design.

10. **Aydogan, R., Baarslag, T., Fujita, K., Mell, J., Gratch, J., de Jonge, D., ... & Muller, G. (2020). Challenges and Main Results of the Automated Negotiating Agents Competition (ANAC). *Studies in Computational Intelligence*, 958, 1–15.**
    - DOI: 10.1007/978-981-16-0471-3_1
    - Overview of ANAC competition for automated negotiation agents. Tests agent strategies in bilateral and multilateral negotiation.
    - **Relevance:** The ARIA Arena is conceptually similar to ANAC but for secure coordination. Trust.Fail provides real-world failure scenarios that could inform Arena challenge design.

### Trust Negotiation & Policy

11. **Winsborough, W.H. & Li, N. (2006). Safety in Automated Trust Negotiation. *ACM Transactions on Information and System Security*, 9(3), 352–390.**
    - DOI: 10.1145/1178618.1178622
    - Formalises safety properties for automated trust negotiation — when is it safe to disclose credentials? Defines monotonic and non-monotonic trust negotiation.
    - **Relevance:** Trust.Fail documents real-world failures of trust negotiation — when humans and AI systems fail to establish appropriate trust levels. Empirical complement to formal trust negotiation theory.

12. **Yu, T., Winslett, M., & Seamons, K.E. (2003). Supporting Structured Credentials and Sensitive Policies through Interoperable Strategies for Automated Trust Negotiation. *ACM Transactions on Information and System Security*, 6(1), 1–42.**
    - DOI: 10.1145/605434.605435
    - Addresses automated trust negotiation between parties with sensitive access control policies. Proposes interoperable strategies.
    - **Relevance:** The Scaling Trust programme's Track 2.2 negotiation components aim for exactly this — agents negotiating trust policies. Trust.Fail shows how current systems fail at this.

### Blockchain & Decentralised Trust

13. **Buterin, V. (2014). A next-generation smart contract and decentralized application platform. *Ethereum White Paper*.**
    - URL: https://ethereum.org/en/whitepaper/
    - Proposes programmable trust through smart contracts — code-enforced agreements without trusted intermediaries.
    - **Relevance:** The Scaling Trust programme (led by ex-Flashbots Obadia) builds on the crypto/blockchain trust paradigm. Trust.Fail documents how trust breaks in AI systems — the next frontier for programmable trust.

14. **Daian, P., Goldfeder, S., Kell, T., Li, Y., Zhao, X., Bentov, I., ... & Juels, A. (2020). Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. *2020 IEEE Symposium on Security and Privacy (SP)*, 910–927.**
    - DOI: 10.1109/SP40000.2020.00040
    - Foundational MEV paper (Obadia's background). Documents how trust assumptions in decentralised systems are violated through frontrunning.
    - **Relevance:** MEV is a trust failure in crypto. Trust.Fail documents trust failures in AI. Same analytical approach — understanding how systems designed for trust actually fail — applied to a new domain.

15. **Obadia, A., Salles, A., Sanchez, L., Chitra, T., Rousham, V., & Quintus, K. (2020). Flashbots: Frontrunning the MEV Crisis. *Flashbots Research*.**
    - URL: https://writings.flashbots.net/frontrunning-mev-crisis
    - Proposes making MEV extraction transparent and democratic rather than adversarial. Founded the MEV research community.
    - **Relevance:** Direct connection to Programme Director. Flashbots made dark-forest MEV visible and manageable. Trust.Fail makes dark-forest AI trust failures visible and manageable. Same philosophy.

### Human Trust in Autonomous Systems

16. **Hancock, P.A., Billings, D.R., Schaefer, K.E., Chen, J.Y.C., De Visser, E.J., & Parasuraman, R. (2011). A Meta-Analysis of Factors Affecting Trust in Human-Robot Interaction. *Human Factors*, 53(5), 517–527.**
    - DOI: 10.1177/0018720811417254
    - Meta-analysis identifying factors affecting human trust in robots: robot performance, robot attributes, human attributes, and environmental factors.
    - **Relevance:** Trust.Fail's ethogram captures all four factor categories — providing empirical data to extend this meta-analysis to AI agents beyond robots.

17. **Kok, B.C. & Soh, H. (2020). Trust in Robots: Challenges and Opportunities. *Current Robotics Reports*, 1, 297–309.**
    - DOI: 10.1007/s43154-020-00029-y
    - Reviews trust in robotics, identifying challenges in measurement, calibration, and repair. Proposes computational approaches.
    - **Relevance:** Trust.Fail addresses the measurement challenge directly — providing a structured methodology for capturing trust dynamics in human-AI interaction.

## Summary

This literature reveals a clear gap:
- **Computational trust models** exist but lack empirical grounding in real-world AI failures
- **Reputation systems** are designed for abstract settings, not AI agent behaviour specifically
- **Secure multi-agent coordination** research lacks a failure corpus to validate against
- **Blockchain trust** (Obadia's world) shows the value of making trust failures visible — Trust.Fail does this for AI
- **Gap:** No systematic empirical data collection infrastructure for AI agent trust failures exists. Trust.Fail fills this gap, providing the data layer that computational trust models and secure coordination systems need.
