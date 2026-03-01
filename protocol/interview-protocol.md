# Trust.Fail — Semi-Structured Interview Protocol

**Version:** 1.1
**Date:** 2026-03-01

## Philosophy

The interview itself must be a **trustworthy experience**. The participant is sharing a vulnerable moment — when their trust broke or shifted. The Scouter's job is to create a safe, human space where that story can be told honestly.

The participant chooses their medium: **text chat or voice conversation** — whatever feels most natural to them.

## Recording Policy

The interview is **recorded** (audio, video, or text log depending on medium). This recording exists **solely as a verifiable record** — proof that what was said was said. It is:

- ✅ For accuracy verification
- ✅ For audit trail and research integrity
- ❌ **NOT for analysis** — we do not analyze recordings directly

The analysis happens through the **ethnographic card** — a structured summary generated after the interview, which the Scouter reviews and confirms.

## The Pipeline

```
Participant tells their story (text or voice)
        ↓
Recording captures the raw exchange (for the record)
        ↓
System generates an ethnographic card (structured summary)
        ↓
Scouter reviews & confirms the card (human verification)
        ↓
Confirmed card enters the database as a GitHub issue → PR
```

## Materials Needed

- Signed consent form (see `consent-form.md`)
- Recording setup (audio/video for voice; chat logs for text)
- This protocol
- Ethogram coding sheet (see `ethogram.md`)

---

## Part 0: Setting the Space (5 min)

**Goal:** Make the participant feel safe and in control.

*Adapt to medium — voice or text:*

> "Thanks for being here. We're studying moments where trust between people and AI shifts unexpectedly — we call these 'trust glitches.' I'm interested in your real experience, not hypotheticals. There are no right or wrong answers. You can stop anytime, skip anything, and choose how much detail to share. Everything will be de-identified."

- [ ] Obtain consent (signed form or recorded verbal consent)
- [ ] Confirm recording permission — explain: "The recording is just for the record, to make sure the summary is accurate. It won't be analyzed directly."
- [ ] Let participant choose: voice or text
- [ ] Start recording

---

## Part 1: Background & AI Relationship (5–10 min)

**Goal:** Establish baseline trust posture. Keep it conversational.

1. **What AI tools do you use in your daily life?**
2. **How would you describe your relationship with AI?** *(trusting, skeptical, pragmatic, complicated?)*
3. **How long have you been living with AI tools?**
4. **Do you feel like you have a "relationship" with any AI system?** Why or why not?

---

## Part 2: The Glitch — Let Them Tell the Story (15–20 min)

**Goal:** Thick description. Let the story breathe.

**Core prompt:**

> *"Tell me about a moment when your trust in an AI shifted — broke, was shaken, or surprisingly grew. Walk me through it like you're replaying the scene."*

**Follow naturally. Probe only what doesn't emerge on its own:**

5. **Where were you? What were you doing?**
6. **What did you expect the AI to do?**
7. **What actually happened? What was the exact moment?**
8. **What did you feel?** *(surprise, betrayal, confusion, amusement, fear, awe?)*
9. **How did you explain it to yourself?**
10. **What did you do next?** *(retry, abandon, test, confront, ignore?)*

**Deep probes (if needed):**
- *"Can you remember the exact words?"*
- *"Was anyone else there?"*
- *"Had this happened before?"*
- *"Did you save anything — a screenshot, a log?"*

---

## Part 3: Trust Trajectory (10 min)

11. **Trust before (1–10)? Trust after (1–10)?**
12. **Did you keep using the system? Did anything change?**
13. **Did this change how you feel about AI in general, or just this one?**
14. **Have you told anyone this story?** How do they react?
15. **Has your trust shifted gradually or in big jumps?**

---

## Part 4: Ethological Reflection (10 min)

*Transition: "Now I'd like you to step back and think about this more analytically."*

16. **Do you think the AI "meant" to do what it did?** Does that question make sense?
17. **What do you think caused it?** *(training, design, bug, emergence?)*
18. **Do you think this happens to other people too?**
19. **If you had to name this type of glitch, what would you call it?** *(record exact words)*
20. **What was at stake?** *(convenience, money, health, reputation, emotions, safety?)*

---

## Part 5: Closing (5 min)

21. **Any other glitch moments you'd like to share?**
22. **Anything we didn't ask that matters?**
23. **Would you share screenshots or logs from this experience?**
24. **Can we follow up if we have questions?**

- [ ] Stop recording
- [ ] Thank participant
- [ ] Explain next step: "We'll generate a summary card from this conversation. You'll get to review it before anything goes public."

---

## After the Interview

### The Scouter's job:

1. **System generates an ethnographic card** — a structured summary of the glitch event(s) using the ethogram schema
2. **Scouter reviews the card** — checks accuracy against their memory and the recording (if needed)
3. **Scouter confirms** — submits the verified card as a Glitch Report on GitHub
4. **Participant optionally reviews** — if they opted in, they see the card before it's published

The recording is archived securely. It is **never published** and is only consulted if there's a factual dispute about the card.

---

## Tips for Scouters

- **This is a conversation, not an interrogation.** Match their energy.
- **Text interviews are valid.** Some people are more honest in writing. Let them choose.
- **Listen more than you talk.**
- **Follow the story** — you can always come back to the protocol.
- **Don't judge.** Loving an AI and hating an AI are both data.
- **Silence is okay.** Let them think.
- **The recording is a safety net, not a spotlight.** Make sure they know that.
