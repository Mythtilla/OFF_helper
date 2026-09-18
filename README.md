# OFF — Open Freedom Forum

A community and communication platform being built around a simple idea:
**people should be able to be their real selves.** One open side (the World)
for finding people, a private side for actually knowing them, and a bias
towards anonymity and user control instead of engagement.

This repository holds the **project website** — not the app itself.

The OFF app is being built separately and is **not publicly released yet.**
This site is honest about that on purpose: the status board shows exactly what
works today, what's being built right now, and what's still only planned.

## About the project

- Built by one person — Bhaskar, a 15-year-old builder from India.
- No company, no team, no ad model. Just an idea being turned into software.
- Privacy and anonymity are the point, but real end-to-end encryption is
  future work and is labelled as such — not a current promise.

## What works in the app right now

| Status | Feature |
| ------ | ------- |
| Live | Create an account |
| Live | The World chat |
| Live | Profiles |
| Building | UI & UX refinement, private conversations, group chats, profile settings, mobile experience |

The full, always-updated breakdown lives on the site in the **Status** section.

## How this site is built

Plain, dependency-free web pages:

```
index.html   — structure, copy, empty containers, inline SVG
style.css    — tokens, themes, component styles, responsive
script.js    — all content data + rendering + interactions
```

No frameworks, no build step, no trackers, no analytics. Open `index.html`
directly, or serve the folder (e.g. `python3 -m http.server`) — it will work.

### Editing content

All editable content lives at the top of `script.js`:

- `OFF_CONFIG` — links, UPI ID, form endpoint, app URL
- `STORY` — the "my story" walkthrough (first person, real)
- `BELIEFS` — what OFF holds as principles
- `WORLD_FLOW` — how public and private parts connect
- `STATUS_GROUPS` / `ROADMAP` — the status board and roadmap
- `COMPARISON_COLUMNS` / `COMPARISON_ROWS` — the comparison table
- `UPDATES` — the changelog (only real entries, never invented)
- `FAQS` — questions with honest, current answers
- `OFF_CONFIG` also holds the social links; the footer `[data-link]`
  attributes point to their keys

## Forms & the email relay

The two forms (send a message, register interest) post through
**FormSubmit.co** JSON endpoint to `bhaskarz01022011@gmail.com`.

**Important on first deployment:** the very first submission makes FormSubmit
send an activation email to that inbox. Click the link inside it once, then
the forms work from anywhere. Until then the form shows a relay error.

Form settings live in `OFF_CONFIG.formEndpoint`. If the endpoint is ever
removed or unset, the form displays a friendly fallback instead of silently
failing.

## Deploy

The live site runs on Cloudflare Workers (the `off.testingver.workers.dev`
origin). To redeploy, push to `main` — the repo's GitHub → Cloudflare Pages /
Workers integration picks it up. (The OFF app itself will live at
`off_helper.testingver.workers.dev` once it opens.)

## Support

QR / UPI donation info lives in `OFF_CONFIG.upiId` (`7088411468@fam`) and
`off-upi-qr.jpg`. The QR image file must sit next to `index.html`.

## Status / changelog policy

This site only reports what is actually true, with real labels:
`LIVE` → `BUILDING` → `PLANNED` → `EXPLORING`.

- `PLANNED` and `EXPLORING` are never presented as current features.
- `EXPLORING` items (like end-to-end encryption) are ideas, not promises.
- The changelog contains only real entries, so there is no invented
  versioning or fake release dates.
- Any future claim about security will be backed by implementation.

## Licence

All rights reserved. The OFF name, brand and artwork belong to the project.
Copyright © the project; see the site footer for the current year.