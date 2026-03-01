# Trust.Fail — Ethical Considerations

**Version:** 1.0
**Date:** 2026-03-01

---

## Overview

Trust.Fail collects sensitive, personal accounts of human-AI trust experiences. This document identifies potential ethical concerns and our mitigations. It should inform ethics board applications (e.g., University of Oxford CUREC) and ongoing project governance.

---

## 1. Informed Consent

### Concern
Participants may not fully understand how their data will be used, especially given the open-data nature of the project.

### Mitigations
- Detailed legal waiver explaining exactly what is collected, stored, published, and shared
- Plain-language summaries alongside legal text
- Explicit opt-in for each data handling activity (recording, publication, AI processing)
- Participant reviews their ethnographic card before publication
- Right to withdraw within 30 days with guaranteed full deletion
- Verbal consent confirmation at the start of each interview

---

## 2. Re-identification Risk

### Concern
Even with de-identification, some glitch events may be so unique or specific that a knowledgeable party could identify the participant. For example: a person describing a very specific incident with a niche AI tool at a specific company.

### Mitigations
- Systematic de-identification protocol: remove names, employers, locations, dates, unique identifiers
- Generalization: replace specific details with categories where possible (e.g., "a large tech company" instead of naming the employer)
- Participant review: the participant sees the card and can request further anonymization
- Scouter training includes de-identification best practices
- K-anonymity assessment for edge cases: if a glitch event is so unique that it could identify someone, the Scouter flags it for additional review
- Option for participants to request "deep anonymization" — further abstraction of details at the cost of some narrative richness

---

## 3. Vulnerable Participants

### Concern
Some participants may have experienced genuinely distressing AI interactions — involving health decisions, financial loss, emotional manipulation, or safety risks. The interview could re-surface trauma.

### Mitigations
- The interview protocol explicitly allows participants to skip any question or stop at any time
- Scouters are trained to recognize signs of distress and respond with the escalation protocol
- Interviews are not therapy sessions — Scouters redirect if the conversation becomes clinical
- We do not actively recruit from vulnerable populations (e.g., people with diagnosed AI-related distress)
- Participants are informed upfront that some questions may prompt uncomfortable reflection
- Post-interview: participants can withdraw their data if the experience was negative

---

## 4. Power Dynamics

### Concern
The interviewer-participant relationship creates a power dynamic. The Scouter holds the pen — they shape the ethnographic card. The participant may feel pressure to perform, embellish, or tell "good stories."

### Mitigations
- Participant reviews and confirms the ethnographic card before publication
- The semi-structured protocol minimizes interviewer influence (open questions, no leading)
- Scouter training emphasizes: "Your job is to listen, not to lead"
- Dual coding (two Scouters code each event) reduces individual bias
- The participant's own taxonomy (Q19: "What would you call this?") centers their framing, not the researcher's

---

## 5. AI Interviewer Concerns

### Concern
Using an AI agent to conduct interviews about trust in AI creates a recursive ethical situation. The participant is sharing a trust failure with AI... to an AI. This may:
- Feel ironic, uncomfortable, or dismissive
- Introduce its own trust dynamics that contaminate the data
- Reduce the quality of responses compared to a human interviewer
- Raise concerns about AI processing sensitive personal narratives

### Mitigations
- Participants always have the option to request a human Scouter instead
- The AI interviewer is transparently identified as an AI — no deception
- The AI interview itself may become a meta-data point: "How did it feel to tell this story to an AI?"
- AI-conducted interviews still go through human Scouter review
- AI processing uses API configurations that do not train on user data
- We acknowledge this recursive dynamic openly in our methodology — it's a feature of the research, not a bug

---

## 6. Data Misuse

### Concern
The open database could be misused:
- Companies could use it to identify competitors' weaknesses rather than improve their own products
- Bad actors could study trust glitches to learn how to exploit trust more effectively
- Journalists could use de-identified stories out of context
- AI companies could use the data to train "trust-manipulating" systems

### Mitigations
- CC BY 4.0 license requires attribution — misuse is traceable
- De-identification reduces the ability to target specific individuals or companies
- The database emphasizes patterns and types, not individual blame
- We publish aggregate analyses alongside raw data to provide proper context
- A "responsible use" statement accompanies the dataset
- We monitor high-profile uses and respond to misuse publicly if needed
- We acknowledge this risk openly: open data has costs, but the benefit of transparency and broad access outweighs the risk of misuse

---

## 7. Cultural & Contextual Bias

### Concern
Trust is culturally constructed. What constitutes a "glitch" in one culture may be normal in another. The interview protocol, ethogram, and taxonomy may embed Western/English-language biases.

### Mitigations
- The ethogram taxonomy is designed to emerge from data (grounded theory), not imposed a priori
- Participant taxonomy (Q19) captures culturally specific framings
- We aim for geographic and cultural diversity in recruitment
- Interview can be conducted in languages other than English (with translation protocols for the card)
- We track and report demographic/geographic distribution of the database
- Cultural context is recorded as part of the ethnographic card

---

## 8. Scouter Welfare

### Concern
Scouters may be exposed to distressing stories repeatedly — especially involving AI-related harm, emotional manipulation, or safety failures. This is a form of vicarious trauma.

### Mitigations
- Scouter training includes a module on vicarious trauma and self-care
- Monthly check-ins with the PI or a designated support person
- Scouters can decline specific interviews without penalty
- Recommended limit: no more than 3 interviews per week
- If a Scouter reports distress, they are offered a break and support resources
- The escalation protocol includes Scouter self-care steps

---

## 9. Incentives & Data Quality

### Concern
If we incentivize participation (e.g., compensation, co-authorship, gamification), people may fabricate or embellish stories.

### Mitigations
- The interview method itself is a quality control — trained interviewers probe for specifics and consistency
- Recordings provide a verifiable record
- Dual coding catches inconsistencies
- We do not currently offer financial compensation (to avoid incentivizing fabrication)
- If compensation is introduced later, it will be for participation (time), not for "interesting" stories
- The Scouter's interviewer observations note signs of fabrication (rehearsed narratives, inconsistencies, lack of emotional detail)

---

## 10. Scope Creep & Surveillance

### Concern
A database of human-AI trust failures could evolve into a surveillance or rating system — tracking which AI systems "fail" most, creating public shame, or being weaponized against specific companies.

### Mitigations
- The database focuses on trust dynamics, not blame
- We do not rank AI systems by "failure rate" — though researchers may derive such analyses, the database itself is descriptive, not evaluative
- Ethnographic cards include the mechanism section, which contextualizes why the AI behaved as it did (often by design, not by failure)
- Positive glitches (trust deepening, surprising competence) are collected equally with negative ones
- The framing is explicitly ecological/ethological: "this is what happens in the wild," not "this system is bad"

---

## 11. Ethics Review

This project will require ethics approval from:

- **University of Oxford CUREC** (Central University Research Ethics Committee) — as the PI's home institution
- Potentially: ethics approval from Scouters' home institutions if they are at other universities
- If recruiting internationally: compliance with local ethics requirements

### Key Points for Ethics Application
- This is qualitative research with human participants
- Minimal risk (no intervention, no deception, no vulnerable populations targeted)
- Open data with de-identification
- Recording for verification only
- Participant review before publication
- Right to withdraw
- UK GDPR compliant data handling
- Third-party AI processing disclosed and consented

---

## 12. Ongoing Governance

- Ethics considerations will be reviewed quarterly as the project scales
- A project advisory board (including external ethicists) should be established before the database exceeds 100 entries
- Any significant changes to the protocol, data handling, or publication policy trigger a new ethics review
- Incident log maintained for any ethical concerns that arise during operation

---

*This document is a living artifact. It will be updated as new ethical considerations emerge.*
