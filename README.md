# ORVIA Brand & Web System v1.1

Canonical brand, component and public-web reference implementation for the ORVIA estate.

## Canonical identity

- **System name:** ORVIA Brand & Web System
- **Canonical domain:** `brand.orvia.org.uk`
- **Current GitHub repository:** `ORVIA-Oversight/Branding-and-Website`
- **Recommended GitHub repository name:** `ORVIA-Oversight/orvia-brand-web-system`
- **Current Vercel project:** `branding-and-website`
- **Recommended Vercel project name:** `orvia-brand-web-system`
- **Production branch:** `main`

Do not use this project for Command, IRIS, the social platform, or a customer-facing product application. It is the design and web-system source of truth.

## Run

```bash
npm install
npm run dev
```

## Production principles

- Witness Room visual language; shorter modular homepage.
- ORVIA Oversight is the corporate authority.
- Configuration-driven product identity and accent.
- Shared trust, contact, telemetry, case-study and estate systems.
- Official badges only; no generated or implied accreditations.
- Human-first imagery and human decision-making.
- WCAG 2.2 AA target where practical.

## Before production rollout

1. Replace all media placeholders with approved assets.
2. Verify all live product domains in `config/products.ts` and `config/estate.ts`.
3. Connect form handling to `CONTACT_API_URL` / IRIS endpoint.
4. Connect analytics and approved social feed sources.
5. Verify Foundation legal details before publication.
6. Complete legal/trust review.
7. Run device, accessibility, telemetry and post-deploy QA.
8. Roll out product sites only from this approved system.

## Deployment trigger

Production changes are made on `main`. The canonical Vercel project is `branding-and-website` and the canonical domain is `brand.orvia.org.uk`. This repository is the production source of truth for the Brand & Web System.
