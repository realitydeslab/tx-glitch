# Security Policy Elicitation

Literature review for ARIA Scaling Trust application — Trust.Fail project.

## Key Papers

### Security Requirements Engineering

1. **Haley, C.B., Laney, R., Moffett, J.D., & Nuseibeh, B. (2008). Security Requirements Engineering: A Framework for Representation and Analysis. *IEEE Transactions on Software Engineering*, 34(1), 133–153.**
   - DOI: 10.1109/TSE.2007.70754
   - Framework for eliciting and analysing security requirements through trust assumptions, threat descriptions, and satisfaction arguments.
   - **Relevance:** Trust.Fail's interview protocol is an empirical security requirements elicitation method — extracting implicit security policies from trust failure narratives.

2. **van Lamsweerde, A. (2004). Elaborating Security Requirements by Construction of Intentional Anti-Models. *Proceedings of the 26th International Conference on Software Engineering (ICSE '04)*, 148–157.**
   - DOI: 10.1109/ICSE.2004.1317437
   - Proposes deriving security requirements by constructing anti-models — models of what adversaries might do. Uses KAOS goal-oriented method.
   - **Relevance:** Trust.Fail's ethnographic cards are empirical anti-models — real-world accounts of how AI systems violate trust, which can be formalised into security requirements.

3. **Mellado, D., Fernández-Medina, E., & Piattini, M. (2007). A common criteria based security requirements engineering process for the development of secure information systems. *Computer Standards & Interfaces*, 29(2), 244–253.**
   - DOI: 10.1016/j.csi.2006.04.002
   - Proposes integrating Common Criteria security evaluation into requirements engineering.
   - **Relevance:** Trust.Fail's ethogram coding scheme could serve as an informal "common criteria" for AI trust — standardised assessment of trust failure modes.

### Privacy & Policy Specification

4. **Cranor, L.F. (2003). P3P: Making Privacy Policies More Useful. *IEEE Security & Privacy*, 1(6), 50–55.**
   - DOI: 10.1109/MSECP.2003.1253568
   - The Platform for Privacy Preferences (P3P) — machine-readable privacy policies. Early attempt at formalising user privacy requirements.
   - **Relevance:** Trust.Fail aims to extract machine-readable security policies from human trust narratives — a similar goal but grounded in empirical failure data rather than abstract preferences.

5. **Sadeh, N., Acquisti, A., Breaux, T.D., Cranor, L.F., McDonald, A.M., Reidenberg, J.R., ... & Schaub, F. (2013). The Usable Privacy Policy Project. *Technical Report CMU-ISR-13-119*.**
   - URL: https://usableprivacy.org/
   - Large-scale project to make privacy policies usable and machine-readable. Used NLP to extract policy requirements.
   - **Relevance:** Trust.Fail's deliberation pipeline similarly uses NLP (LLMs) to extract structured security-relevant information from unstructured narratives.

6. **Brodie, C.A., Karat, C.-M., & Karat, J. (2006). An Empirical Study of Natural Language Parsing of Privacy Policy Rules Using the SPARCLE Policy Workbench. *Proceedings of the Second Symposium on Usable Privacy and Security (SOUPS '06)*, 8–19.**
   - DOI: 10.1145/1143120.1143124
   - SPARCLE: tool for authoring privacy policies in natural language, then parsing into formal rules. Shows feasibility of NL→formal policy conversion.
   - **Relevance:** Trust.Fail's interview→structured YAML pipeline is conceptually similar — converting natural language trust narratives into structured, machine-readable security policy data.

### Elicitation from Users

7. **Patil, S. & Lai, J. (2005). Who Gets to Know What When: Configuring Privacy Permissions in an Awareness Application. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '05)*, 101–110.**
   - DOI: 10.1145/1054972.1054987
   - Studies how users configure privacy permissions and finds significant disconnect between stated preferences and actual behaviour.
   - **Relevance:** Trust.Fail documents exactly this disconnect — the gap between what users expect AI to do (implicit security policy) and what it actually does (security violation).

8. **Nissen, M.E. & Sengupta, K. (2006). Incorporating Software Agents into Supply Chains: Experimental Investigation with a Procurement Task. *MIS Quarterly*, 30(1), 145–166.**
   - DOI: 10.2307/25148721
   - Studies how humans delegate trust to software agents in procurement. Finds trust calibration is difficult and leads to systematic errors.
   - **Relevance:** Trust.Fail documents real-world trust delegation failures — when humans over-trust or under-trust AI agents, with consequences.

9. **Karat, J., Karat, C.-M., & Brodie, C. (2005). Personalizing Interaction with Information Systems. *Human-Computer Interaction in the New Millennium*, 455–470.**
   - DOI: 10.1145/1067860.1067870
   - Explores how users personalise their interaction policies with information systems. Demonstrates the challenge of eliciting coherent preferences.
   - **Relevance:** Trust.Fail's interview protocol helps users articulate their implicit security policies through structured reflection on failure experiences — a novel elicitation approach.

### AI-Assisted Security

10. **Garfinkel, S. & Lipford, H.R. (2014). Usable Security: History, Themes, and Challenges. *Synthesis Lectures on Information Security, Privacy, and Trust*, Morgan & Claypool.**
    - DOI: 10.2200/S00594ED1V01Y201408SPT011
    - Comprehensive overview of usable security — the intersection of security engineering and HCI. Covers authentication, policy management, and user education.
    - **Relevance:** Trust.Fail sits squarely in the usable security tradition — making security failures understandable and actionable through human-centred methods.

11. **Ur, B., Leon, P.G., Cranor, L.F., Shay, R., & Wang, Y. (2012). Smart, Useful, Scary, Creepy: Perceptions of Online Behavioral Advertising. *Proceedings of the Eighth Symposium on Usable Privacy and Security (SOUPS '12)*.**
    - DOI: 10.1145/2335356.2335362
    - Qualitative study of user perceptions of targeted advertising — documents how users feel when systems use their data in unexpected ways.
    - **Relevance:** Trust.Fail extends this methodology to AI agents more broadly — documenting how users feel when AI systems behave in unexpected, trust-violating ways.

12. **Schaub, F., Balebako, R., Durity, A.L., & Cranor, L.F. (2015). A Design Space for Effective Privacy Notices. *Proceedings of the Eleventh Symposium on Usable Privacy and Security (SOUPS '15)*, 1–17.**
    - URL: https://www.usenix.org/conference/soups2015/proceedings/presentation/schaub
    - Framework for designing effective privacy notices. Identifies timing, channel, modality, and control as key design dimensions.
    - **Relevance:** Trust.Fail's interview design considers similar dimensions — when and how to capture trust failure reports for maximum quality and completeness.

## Summary

This literature establishes Trust.Fail's Track 2.2 positioning:
- **Security requirements engineering** has well-established methods for formal elicitation, but none designed for AI agent trust failures
- **Privacy policy specification** shows the feasibility of NL→formal conversion, which Trust.Fail implements via LLM deliberation
- **User studies** consistently show gaps between stated preferences and actual security needs — Trust.Fail captures these gaps through failure narratives
- **Gap:** No existing tool extracts security policies from real-world trust failure accounts. Trust.Fail's interview protocol + deliberation pipeline is a novel security policy elicitation component — grounded in empirical failure data rather than abstract preference surveys.
