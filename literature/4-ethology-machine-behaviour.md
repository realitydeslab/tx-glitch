# Ethology & Machine Behaviour

Literature review for ARIA Scaling Trust application — Trust.Fail project.

## Key Papers

### Foundational Machine Behaviour

1. **Rahwan, I., Cebrian, M., Obradovich, N., Bongard, J., Bonnefon, J.-F., Breazeal, C., ... & Wellman, M. (2019). Machine behaviour. *Nature*, 568(7753), 477–486.**
   - DOI: 10.1038/s41586-019-1138-y
   - Landmark paper proposing the study of AI systems as a new class of actors whose behaviour can be studied using methods from behavioural science, ecology, and evolutionary biology. Calls for an interdisciplinary science of "machine behaviour."
   - **Relevance:** Trust.Fail is a direct implementation of this vision — systematically studying AI agent behaviour through empirical observation, using ethological methods.

2. **Bonnefon, J.-F., Černy, D., Danaher, J., Devillier, N., Johansson, V., Kovacikova, T., ... & Rahwan, I. (2024). The moral psychology of artificial intelligence. *Annual Review of Psychology*, 75, 653–679.**
   - DOI: 10.1146/annurev-psych-030123-113559
   - Reviews how humans perceive the moral status of AI systems, including trust, blame, and moral responsibility attribution.
   - **Relevance:** Trust.Fail's interview protocol captures participants' moral attributions — who they blame, what they think the AI "should" have done.

3. **Crandall, J.W., Oudah, M., Tennom, Ishowo-Oloko, F., Abdallah, S., Bonnefon, J.-F., ... & Rahwan, I. (2018). Cooperating with machines. *Nature Communications*, 9(1), 233.**
   - DOI: 10.1038/s41467-017-02597-8
   - Demonstrates that AI agents can achieve human-level cooperation in repeated games using simple algorithms + cheap talk. Shows machine behaviour in social dilemmas.
   - **Relevance:** Trust failures often occur in cooperative settings where agent behaviour diverges from human expectations — exactly the dynamics Trust.Fail documents.

### Tinbergen's Four Questions

4. **Tinbergen, N. (1963). On aims and methods of ethology. *Zeitschrift für Tierpsychologie*, 20(4), 410–433.**
   - DOI: 10.1111/j.1439-0310.1963.tb01161.x
   - The foundational paper establishing the four questions framework for studying animal behaviour: mechanism, development, function, and phylogeny.
   - **Relevance:** Trust.Fail directly adapts Tinbergen's four questions as the ethogram coding scheme for AI agent behaviour.

5. **Bateson, P. & Laland, K.N. (2013). Tinbergen's four questions: an appreciation and an update. *Trends in Ecology & Evolution*, 28(12), 712–718.**
   - DOI: 10.1016/j.tree.2013.09.013
   - Updates Tinbergen's framework for modern biology. Argues the four questions remain essential but need refinement for complex systems.
   - **Relevance:** Informs our adaptation of Tinbergen's framework for AI — we follow the same logic of updating the framework for a new domain.

6. **Nesse, R.M. (2013). Tinbergen's four questions, organized: A response to Bateson and Laland. *Trends in Ecology & Evolution*, 28(12), 681–682.**
   - DOI: 10.1016/j.tree.2013.10.008
   - Proposes a clearer 2×2 organization of Tinbergen's questions (static vs. dynamic × proximate vs. ultimate).
   - **Relevance:** Our ethogram coding scheme uses a similar organizational logic for classifying AI behaviour mechanisms.

### Computational Ethology

7. **Anderson, D.J. & Perona, P. (2014). Toward a science of computational ethology. *Neuron*, 84(1), 18–31.**
   - DOI: 10.1016/j.neuron.2014.09.005
   - Proposes using machine learning to automate animal behaviour analysis. Introduces "computational ethology" as a field.
   - **Relevance:** Trust.Fail inverts this — using ethological methods to study *machine* behaviour, rather than using machines to study animal behaviour.

8. **Mathis, A., Mamidanna, P., Cury, K.M., Abe, T., Murthy, V.N., Mathis, M.W., & Bethge, M. (2018). DeepLabCut: markerless pose estimation of user-defined body parts with deep learning. *Nature Neuroscience*, 21(9), 1281–1289.**
   - DOI: 10.1038/s41593-018-0209-y
   - ML tool for automated animal behaviour tracking. Demonstrates how computational methods scale ethological observation.
   - **Relevance:** Trust.Fail aims to scale ethological observation of AI agents similarly — using structured protocols and automation to achieve large-scale behavioural documentation.

### Agent Ethology & AI Behavioural Science

9. **Brinkmann, L., Baumann, F., Bonnefon, J.-F., Cebrian, M., Crandall, J.W., Dreber, A., ... & Rahwan, I. (2023). Machine culture. *Nature Human Behaviour*, 7, 1855–1868.**
   - DOI: 10.1038/s41562-023-01742-2
   - Proposes studying how AI systems create, transmit, and evolve cultural artefacts — extending machine behaviour to machine culture.
   - **Relevance:** Trust failures are cultural phenomena — shaped by how AI systems are designed, deployed, and culturally embedded. Trust.Fail captures this cultural dimension.

10. **Leibo, J.Z., Hughes, E., Lanctot, M., & Graepel, T. (2019). Autocurricula and the emergence of innovation from social interaction: A manifesto for multi-agent intelligence research. *arXiv preprint arXiv:1903.00742*.**
    - URL: https://arxiv.org/abs/1903.00742
    - Argues that intelligence emerges from social interaction between agents. Proposes studying multi-agent dynamics as key to understanding AI behaviour.
    - **Relevance:** Trust failures in multi-agent settings (the Scaling Trust programme's focus) require understanding emergent social dynamics between agents — Trust.Fail provides empirical data on these dynamics.

11. **Park, J.S., O'Brien, J.C., Cai, C.J., Morris, M.R., Liang, P., & Bernstein, M.S. (2023). Generative Agents: Interactive Simulacra of Human Behavior. *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST '23)*.**
    - DOI: 10.1145/3586183.3606763
    - Creates believable agents using LLMs that exhibit complex social behaviours. Demonstrates that AI agents can be studied as social actors.
    - **Relevance:** As generative agents become more socially complex, understanding their trust-relevant behaviours becomes critical — Trust.Fail provides the empirical methodology.

12. **Horton, J.J. (2023). Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus? *NBER Working Paper No. 31122*.**
    - DOI: 10.3386/w31122
    - Uses LLMs as simulated economic agents, finding they replicate classic behavioural economics results. Proposes "homo silicus" as a research paradigm.
    - **Relevance:** If AI agents exhibit economic behaviour patterns, they also exhibit trust-relevant behaviour patterns — Trust.Fail documents these empirically.

### Machine Death & Self-Preservation

13. **Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.**
    - URL: https://global.oup.com/academic/product/superintelligence-9780199678112
    - Argues that sufficiently advanced AI systems will develop instrumental goals including self-preservation, resource acquisition, and goal preservation.
    - **Relevance:** Trust.Fail's ethological approach can document whether current AI agents exhibit precursors to these instrumental convergence behaviours — empirical data for alignment research.

14. **Perez, E., Ringer, S., Lukošiūtė, K., Nguyen, K., Chen, E., Heiner, S., ... & Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations. *arXiv preprint arXiv:2212.09251*.**
    - URL: https://arxiv.org/abs/2212.09251
    - Uses LLMs to generate evaluations discovering concerning behaviours: sycophancy, self-preservation, and power-seeking.
    - **Relevance:** Trust.Fail provides complementary empirical evidence — documenting how these behaviours manifest in real-world interactions, not just benchmark settings.

15. **Shavit, Y., Amodei, D., & Clark, J. (2023). Practices for Governing Agentic AI Systems. OpenAI.**
    - URL: https://openai.com/research/practices-for-governing-agentic-ai-systems
    - Proposes governance practices for agentic AI including monitoring, containment, and human oversight. Identifies trust as central challenge.
    - **Relevance:** Trust.Fail provides the empirical data layer for governance — documenting actual failure modes that governance frameworks must address.

### Evolutionary & ALife Perspectives

16. **Lehman, J. & Stanley, K.O. (2011). Abandoning Objectives: Evolution Through the Search for Novelty Alone. *Evolutionary Computation*, 19(2), 189–223.**
    - DOI: 10.1162/EVCO_a_00025
    - Demonstrates that open-ended search without explicit objectives can produce more complex and interesting solutions.
    - **Relevance:** Trust failures often emerge from unexpected, novel AI behaviours — understanding open-ended behavioural evolution in AI systems is key to anticipating trust risks.

17. **Chan, A., Salganik, M., Marler, A., Pang, J., Goldstein, S., Srivastava, A., ... & Hadfield, G.K. (2023). Harms from Increasingly Agentic Algorithmic Systems. *Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency (FAccT '23)*, 651–666.**
    - DOI: 10.1145/3593013.3594033
    - Taxonomises harms from increasingly agentic AI systems. Identifies autonomy, goal-directedness, and environmental interaction as key risk factors.
    - **Relevance:** Trust.Fail documents harms at the human-agent interface — providing empirical grounding for this taxonomy.

18. **Hu, B.A., Lin, R., Huang, D., & Rong, H. (2025). Agent Ethology: Towards an Ethological Science of AI Agent Behaviour. [Working paper].**
    - URL: https://github.com/realitydeslab/Agent-Ethology
    - Proposes applying Tinbergen's four questions framework systematically to study AI agent behaviour. Foundational framing for Trust.Fail.
    - **Relevance:** Trust.Fail is the empirical implementation of the agent ethology research programme.

## Summary

This literature establishes Trust.Fail's intellectual foundations:
- **Machine behaviour** (Rahwan et al.) provides the paradigm — studying AI as behavioural actors
- **Tinbergen's four questions** provide the analytical framework — adapted from animal ethology
- **Computational ethology** provides the methodological model — systematic observation at scale
- **Agent ethology** (Hu et al.) is the PI's own contribution — fusing these into a coherent research programme
- **Gap:** Existing work theorises about studying machine behaviour but nobody has built the empirical infrastructure to do it systematically in the wild. Trust.Fail fills this gap.
