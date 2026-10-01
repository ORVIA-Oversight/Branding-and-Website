# ORVIA WEBSITE BUILD & RELEASE RUNBOOK

## Purpose

Use this runbook when taking the approved Brand & Web System and turning it into a fresh ORVIA website.

## A. Before touching code

1. Identify the site in `config/siteIdentityRegistry.ts`.
2. Confirm its public name, canonical domain, GitHub target, Vercel target and favicon source.
3. Confirm whether it is `public`, `build`, `planned` or `internal`.
4. Read the current story/product brief.
5. Check pricing/quote route separately. Never infer prices from an old page.
6. Check the controlled icon/logo source.
7. Confirm the site is allowed to be public.

## B. Create the clean source

Preferred public naming convention:

- GitHub: `ORVIA-Oversight/orvia-<product>`
- Vercel: `orvia-<product>`

If the canonical name is already occupied by a legacy repository/project, preserve and rename/archive the old asset first. Do not create confusing lookalike names.

Start from the approved template source. Bring across only:

- shared layout/components;
- current CSS/design tokens;
- trust/legal components;
- contact/sales route;
- approved product identity;
- product-specific story/content;
- required assets.

Do **not** copy dead pages, legacy products, experimental styling or duplicate config.

## C. Populate the product brief

Minimum brief:

- audience;
- problem;
- promise/outcome;
- what the product does;
- what it does not do;
- trust/proof;
- imagery/media;
- offer/pricing or quote path;
- start/onboarding path;
- owner;
- IRIS workflow destination;
- follow-up / retention route.

## D. Favicons

Use the approved product icon and export the complete favicon/app-icon set.

Never:
- use a letter placeholder if an approved mark exists;
- generate a new logo with AI;
- recolour a controlled mark;
- use the full horizontal lock-up as a tiny favicon.

## E. Build verification

Run/confirm:

- framework build;
- no TypeScript/build errors;
- metadata/browser titles;
- canonical URLs;
- sitemap/robots where relevant;
- accessibility basics;
- desktop and mobile layouts;
- navigation;
- forms;
- external links;
- CTA destinations;
- images/video placeholders;
- legal/footer;
- product status wording.

## F. Commercial verification

A commercial site is incomplete until the route works:

**Understand → Trust → Price/Quote → Buy/Start → Onboard → Delivery → Follow-up → Retention**

Check:
- price shown only when controlled;
- payment link maps to the correct Stripe product/price;
- quote/discovery route reaches a real owner;
- source attribution is retained;
- onboarding destination exists;
- no dead CTA;
- no fake urgency/scarcity.

## G. Domain cutover

Do not move the domain until the preview is approved.

At cutover:
1. record existing production deployment;
2. keep rollback candidate;
3. verify DNS;
4. attach canonical domain to approved Vercel project;
5. confirm SSL;
6. check both apex and www/subdomain behaviour;
7. re-test key pages and contact route;
8. confirm favicon/browser title;
9. monitor runtime errors.

## H. After release

Record:
- GitHub repo;
- production branch/commit;
- Vercel project;
- production deployment;
- canonical domain;
- favicon source;
- contact route;
- commercial route;
- rollback reference;
- date/time checked;
- verifier.

Then move to the next site. Do not redesign the master during migration unless a genuine reusable defect is found and deliberately promoted back into the template.
