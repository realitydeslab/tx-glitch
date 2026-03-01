# Trust.Fail — Component Stack (Build vs. Buy)

**Version:** 1.0
**Date:** 2026-03-01

The principle: **don't reinvent the wheel.** For each part of the workflow, use existing platforms and services. Only build the glue that connects them and the unique parts (the ethogram rendering, the deliberation prompt).

---

## Component Map

| Workflow Step | Component | Recommended Tool | Why | Cost |
|---------------|-----------|-----------------|-----|------|
| **Website & hosting** | Static site + dynamic routes | **Next.js on Vercel** | Free tier, fast, good DX | Free |
| **Styling** | UI framework | **Tailwind CSS + shadcn/ui** | Pre-built components, consistent design | Free |
| **Database** | Ethogram storage | **GitHub repo** (`data/coded/*.yml`) | Version control, audit trail, open data | Free |
| **AI Interview (text)** | Conversational AI | **Vercel AI SDK + Anthropic/OpenAI API** | Stream responses, easy to embed in Next.js | Pay-per-use |
| **AI Interview (voice)** | Speech-to-text | **OpenAI Whisper API** or **Deepgram** | Real-time transcription, multilingual | Pay-per-use |
| **Voice input in browser** | Browser mic capture | **Web Speech API** or **RecordRTC** | Native browser, no backend needed for capture | Free |
| **Human interview (video call)** | Video conferencing | **Whereby Embedded** or **Daily.co** | Embeddable video call in the website, no app install | Free tier available |
| **Human interview (alternative)** | External call + recording | **Zoom / Google Meet + Recall.ai** | Scouter uses their preferred tool, Recall.ai auto-transcribes | Recall.ai has free tier |
| **Interview scheduling** | Booking system | **Cal.com** (open-source) | Scouters share availability, reporters book slots | Free (self-hosted) |
| **Consent / legal waivers** | Digital signatures | **DocuSeal** (open-source) | E-signatures, embeddable, self-hostable | Free (self-hosted) |
| **Quick report form** | Form builder | **Built-in** (React form → GitHub Issue API) | Simple enough to build natively | Free |
| **Evidence upload** | File upload + storage | **Vercel Blob** or **Cloudflare R2** | Cheap object storage, signed upload URLs | Cheap / free tier |
| **Transcript → Ethogram** | LLM deliberation | **Anthropic Claude API** (or OpenAI) | Our custom prompt, structured YAML output | Pay-per-use |
| **Ethogram rendering** | Card display | **Custom React component** | Unique to our project — must build | Free |
| **Authentication (Scouters)** | Login | **NextAuth.js + GitHub OAuth** | Scouters already have GitHub accounts | Free |
| **Job board** | Issue listing | **GitHub Issues API** → custom UI | Issues with `job-board` label, rendered on our site | Free |
| **Scouter dashboard** | Admin panel | **Custom pages** (Next.js) | Claim reports, review cards, upload transcripts | Free |
| **Notifications** | Email to Scouters | **Resend** or **GitHub notifications** | Notify Scouters when new reports arrive | Free tier |
| **Search** | Full-text search | **Pagefind** (static) or **Algolia** (hosted) | Pagefind is free, runs client-side on static data | Free |
| **Analytics** | Privacy-respecting | **Plausible** or **Umami** | No cookies, GDPR compliant | Free (self-hosted) |
| **Domain** | trust.fail | **Already owned** | ✅ | Done |

---

## Architecture with Existing Services

```
┌─────────────────────────────────────────────────────────────┐
│                     trust.fail (Next.js on Vercel)           │
│                                                              │
│  PAGES:                                                      │
│  /          → Landing (built-in)                             │
│  /browse    → Ethogram cards (GitHub API → YAML → render)    │
│  /glitch/id → Card detail (custom React component)           │
│  /report    → AI interview (Vercel AI SDK) or quick form     │
│  /board     → Job board (GitHub Issues API)                  │
│  /scouters  → Apply + dashboard (NextAuth + GitHub OAuth)    │
│  /about     → Static markdown rendering                      │
│                                                              │
│  INTEGRATIONS:                                               │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Vercel AI SDK│  │  Cal.com     │  │  DocuSeal    │       │
│  │ + Claude API │  │  (scheduling)│  │  (consent)   │       │
│  │ (AI interview│  │              │  │              │       │
│  │  + ethogram  │  │  Scouter     │  │  Digital     │       │
│  │  generation) │  │  availability│  │  signatures  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Whisper /    │  │ Whereby or   │  │ Vercel Blob  │       │
│  │ Deepgram     │  │ Daily.co     │  │ / Cloudflare │       │
│  │ (speech-to-  │  │ (embedded    │  │ R2           │       │
│  │  text)       │  │  video call  │  │ (evidence    │       │
│  │              │  │  for human   │  │  upload)     │       │
│  │              │  │  interviews) │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ NextAuth.js  │  │ Resend       │  │ Pagefind     │       │
│  │ + GitHub     │  │ (email       │  │ (client-side │       │
│  │ OAuth        │  │  notifs to   │  │  search)     │       │
│  │ (Scouter     │  │  Scouters)   │  │              │       │
│  │  auth)       │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           v
              GitHub: realitydeslab/tx-glitch
              (Issues, PRs, data/coded/*.yml)
```

---

## What We Build Custom vs. What We Use Off-the-Shelf

### Build custom (unique to Trust.Fail):
1. **Ethogram card renderer** — React component that renders YAML into the human-readable card format
2. **AI interviewer system prompt** — the 5-section protocol as an LLM prompt
3. **Deliberation prompt** — transcript → ethogram YAML transformation
4. **Card review/confirm flow** — inline editing + confirmation UI
5. **Job board UI** — GitHub Issues rendered as a claimable board
6. **Scouter dashboard** — claims, reviews, uploads, stats

### Use off-the-shelf:
1. **Video calls** → Whereby Embedded or Daily.co (embed in our site)
2. **Scheduling** → Cal.com (Scouter availability booking)
3. **Consent forms** → DocuSeal (digital signatures)
4. **Transcription** → Whisper API / Deepgram
5. **AI conversation** → Vercel AI SDK + Claude/GPT API
6. **Auth** → NextAuth.js + GitHub OAuth
7. **File storage** → Vercel Blob / Cloudflare R2
8. **Search** → Pagefind (static, client-side)
9. **Email** → Resend
10. **Analytics** → Plausible

---

## Online Interview Flow (Everything Online)

All interviews happen on the website. No external tools needed for the reporter.

### AI Interview:
```
Reporter on trust.fail/report
    → Chat interface (Vercel AI SDK)
    → Voice option (browser mic → Whisper API → text)
    → AI follows 5-section protocol
    → Evidence upload inline (drag-and-drop)
    → Auto-generates ethogram card
    → Reporter confirms on-screen
```

### Human Interview:
```
Reporter on trust.fail/report
    → "Request human interviewer"
    → Books time via Cal.com embed
    → Signs consent via DocuSeal embed
    → At scheduled time: video call via Whereby embed on trust.fail
    → Scouter conducts interview + records
    → Whereby/Recall.ai provides transcript
    → Deliberation prompt generates card
    → Scouter reviews on dashboard
    → Reporter confirms via email link
```

Everything happens within trust.fail — no "go to Zoom" or "download this app."

---

## Estimated Costs (Monthly, at Scale)

| Service | Free Tier | At 100 interviews/month |
|---------|-----------|------------------------|
| Vercel (hosting) | 100GB bandwidth | Free |
| Claude API (interviews + ethograms) | — | ~$50-100 |
| Whisper API (voice transcription) | — | ~$10-30 |
| Whereby Embedded | 1 room, 45min | ~$29/mo (pro) |
| Cal.com | Self-hosted free | Free |
| DocuSeal | Self-hosted free | Free |
| Vercel Blob (evidence) | 1GB free | ~$5-10 |
| Resend (email) | 3000/mo free | Free |
| Pagefind (search) | Client-side | Free |
| **Total** | | **~$100-170/mo** |

At early stage (10-20 interviews/month): effectively **free or near-free**.

---

*Review and confirm. Once approved, building begins with Phase 1.*
