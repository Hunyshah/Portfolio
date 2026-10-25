# Syed Bilal Haider — Portfolio

Personal portfolio built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS 4, Motion and Lucide icons.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where content lives

All content is typed data. The homepage, project list and case studies all read from the same source.

| File | What it holds |
| --- | --- |
| `lib/site.ts` | Name, title, intro, contact links, CV path |
| `lib/projects.ts` | Case studies and the CV project archive |
| `lib/experience.ts` | Roles and education |
| `lib/skills.ts` | Skill groups (core / also worked with) |
| `lib/content.ts` | Capabilities, AI section, principles |
| `lib/navigation.ts` | Header and footer navigation |

To add a project, append an object to `projects` in `lib/projects.ts`. It shows up on `/projects`, gets its own `/projects/<slug>` page and is added to the sitemap.

## Pages

`/` · `/projects` · `/projects/[slug]` (framelab-pro, kyapakega, hh-associate, window-door-marketplace) · `/experience` · `/about` · `/contact` · `sitemap.xml` · `robots.txt` · Open Graph image.

## Environment variables

| Variable | Needed for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, robots, Open Graph (set before deploying) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shows a public email (optional; hidden when empty) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact form delivery through [Resend](https://resend.com) |

Without the Resend variables, `/api/contact` returns 503 and the form tells visitors their message was **not** sent and points them to the direct links.

## Content review checklist

These items need your confirmation. Anything unverified is kept out of the public site.

- [ ] **TOPSOL dates** — shown as on the CV (Aug 2023 – Present). Update `end` in `lib/experience.ts` if that is no longer current.
- [ ] **FrameLab Pro metrics** — the historical figures (500+ downloads, ~700 users, ~480 MAU) are not shown. Add them only after checking Play Console.
- [ ] **Play Store link** — built from the package name `com.questtools.framelabpro`. It could not be checked from the build environment, so open it once to confirm.
- [ ] **Screenshots** — no real screenshots were available. Add images to `public/images/projects/<slug>/` and list them in each project's `images`. In development, empty galleries show a placeholder slot. In production they are hidden.
- [ ] **Marketplace** — published under a generic name with no client name or screenshots. Confirm the client is happy for it to be public. Stripe Connect is described as research only.
- [ ] **H.H. Associate** — marked "In progress". Add the live URL once the site is live.
- [ ] **CV** — put the PDF in `public/cv/` and set `cv` in `lib/site.ts`. The "Download CV" button only appears when this is set.
- [ ] **LinkedIn / WhatsApp / email** — set them in `lib/site.ts` or `.env` to make them visible.
- [ ] **Earlier projects** (VImS, WEARwise, Vx API, Social App, BMI Calculator, Reverse Chat Bot, Ecommerce) — listed by name and stack only. Each can get a full case study once its purpose and features are documented.

## Deploy (Vercel)

1. Import the repository in Vercel. The framework is detected automatically.
2. Set `NEXT_PUBLIC_SITE_URL`, plus any of the optional variables above.
3. Deploy. Every route except `/api/contact` is prerendered.
