# Trust.Fail — Semi-Structured Interview Protocol

**Version:** 2.0
**Date:** 2026-03-01

## Philosophy

The interview itself must be a **trustworthy experience**. Keep it simple and natural. Don't over-ask — let the story emerge.

The participant chooses their medium: **text or voice** — whatever feels natural.

Recording exists **solely as a verifiable record** — not for analysis. The analysis happens through the **ethnographic card** generated afterward, which the Scouter reviews and confirms.

## Pipeline

```
Story (text or voice) → Recording (for the record) → Ethnographic card (auto-generated) → Scouter confirms → Database
```

---

## The Interview

### Opening (2 min)

> "We're collecting real stories of moments where trust between people and AI shifted. I'd like you to walk me through one experience. There are no right or wrong answers."

- [ ] Consent obtained
- [ ] Recording started
- [ ] Medium chosen (text/voice)

---

### 1. The Stakeholders (5 min)

*Who are the actors in this story?*

- **Which AI system was this?** What does it do?
- **Who owns or operates this AI?** (company, open-source project, employer?)
- **Who pays for it?** (you, your employer, free tier, subscription?)
- **How does this AI survive?** What's its business model? (ads, subscription, data, venture funding, open-source community?)

*Why this matters: Trust is shaped by who's behind the system and what their incentives are.*

---

### 2. The Initial Trust (5 min)

*Why did you trust it in the first place?*

- **When did you start using this AI?** How did you find it?
- **What made you trust it initially?** (brand reputation, someone recommended it, it worked well, no alternative, you had to use it?)
- **What level of trust did you have before the glitch?** (1–10)
- **What were you trusting it to do?** What was the task or role?

*Why this matters: Trust doesn't start from zero — people arrive with assumptions, and those assumptions are what glitch.*

---

### 3. The Glitch Moment (10–15 min)

*This is the core. Let them tell the story.*

> "Walk me through what happened, step by step — like you're replaying the scene."

**Follow naturally. Only probe what doesn't emerge:**

- **What were you doing when it happened?**
- **What did the AI do?** (the observable behavior)
- **What did you expect it to do instead?**
- **What was the exact moment you felt the shift?**
- **What did you do?** (retry, stop, test it, confront it, work around it, leave?)

**If they have evidence:** *"Do you have a screenshot or log from that moment?"*

---

### 4. The Experience (5–10 min)

*How did it feel and what did it change?*

- **What did you feel?** (surprise, betrayal, confusion, amusement, fear, relief, anger?)
- **How long did that feeling last?**
- **Trust after the glitch?** (1–10)
- **Did you keep using the system?** Did anything change in how you use it?
- **Did this change how you feel about AI in general, or just this one?**
- **Have you told anyone this story?**

---

### 5. Digging Into the Mechanism (5–10 min)

*This is the ethnographic layer — understanding why the AI behaved the way it did.*

> "Now I want to understand the AI's side of this. Let's dig into what might have caused this."

- **Do you know if the AI's owner configured it in a specific way?** (custom instructions, system prompts, safety settings, fine-tuning?)
- **Was this AI behaving according to its design, or was this a bug/accident?**
- **Do you think the company/developer intended this behavior?**
- **Were there updates, policy changes, or external events around that time that might explain it?**
- **Is this something the AI does consistently, or was it a one-off?**
- **If you could see inside the system, what do you think you'd find?** (What's your theory of why this happened?)

*Why this matters: We need enough data to reconstruct the mechanism — was this a design choice, a training artifact, a configuration by the operator, or emergent behavior? The participant's theory is data too, even if it's wrong.*

---

### Closing (2 min)

- **Any other glitch moments?** (If yes, repeat sections 3–5 briefly)
- **Anything we missed?**
- **Can we follow up if needed?**

> "We'll generate a summary card from this. You'll get to review it before anything is published."

- [ ] Stop recording
- [ ] Thank participant

---

## After the Interview

1. System generates **ethnographic card** from the conversation
2. Scouter **reviews & confirms** — checks against memory and recording if needed
3. Confirmed card submitted as **GitHub Glitch Report**
4. Participant optionally reviews before publication

Recording is archived securely. Never published. Only consulted for factual disputes.

---

## Tips for Scouters

- **Less is more.** Don't ask every bullet — follow the story, fill gaps.
- **Section 3 is the heart.** Give it space. Don't rush.
- **Section 5 is what makes this research.** Dig into the mechanism — but stay curious, not interrogative.
- **Text interviews are valid.** Some people are more honest in writing.
- **The recording is a safety net, not a spotlight.** Make sure they know.
- **Silence is okay.** Let them think.
