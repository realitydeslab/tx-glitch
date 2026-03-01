# TX Glitch — Website

## Purpose

A public-facing website where:
1. **Anyone** can submit a "glitch moment" (self-report, lower quality but high volume)
2. **Participants** can claim an interview slot with a certified Glitch Scouter
3. **Scouters** can log in and upload coded interview data
4. **Researchers** can browse and query the de-identified database

## Planned Features

### Public
- Landing page explaining TX Glitch
- "Submit a Glitch" form (lightweight self-report)
- "Request an Interview" — schedule with a Scouter
- Browse the glitch database (de-identified, searchable)
- Statistics dashboard (glitch types, trust trajectories, AI systems)

### Scouter Portal (authenticated)
- Upload interview transcripts and coding sheets
- View assigned interviews
- Inter-rater calibration tools
- Dashboard: personal stats, reliability scores

### Admin
- Manage Scouter accounts and certifications
- Review and approve database entries
- Export data for analysis

## Tech Stack

TBD — likely:
- Static site (Next.js or Astro) for public pages
- Supabase or similar for database + auth
- Markdown-based submission forms
