# ORVIA Universal Web System v1.0

Canonical reference implementation for the ORVIA public website estate.

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

## Before production

1. Replace all media placeholders with approved assets.
2. Verify all live product domains in `config/products.ts`.
3. Connect form handling to `CONTACT_API_URL` / IRIS endpoint.
4. Connect analytics and social feed sources.
5. Verify Foundation legal details before publication.
6. Complete legal/trust review.
7. Run device, accessibility, telemetry and post-deploy QA.
