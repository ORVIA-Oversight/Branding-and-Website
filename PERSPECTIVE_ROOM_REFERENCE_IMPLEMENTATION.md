# ORVIA Perspective Room™ — Reference Implementation Report

Status: **BUILD / NOT YET LIVE-VERIFIED**

This is the first live-template proof job for the canonical ORVIA Brand & Web System.

## Inherited from the canonical system

- ORVIA parent identity
- canonical header and navigation architecture
- canonical light footer
- trust and legal layer
- ORVIA Method
- accessibility target
- site registry
- commercial completion gate
- sales lifecycle and attribution model
- sitemap / robots / canonical metadata model
- GitHub main as source of truth
- Vercel as deployment truth
- IRIS as workflow conductor
- VERA as verification discipline

## Product-specific work created

- ORVIA Perspective Room product identity and registry entry
- public route: /perspective-room
- health and social care positioning
- five-round evidence-injection journey
- ORVIA Character Assessment integration
- Integrity Gap review
- role-proportionate candidate routes
- candidate experience principles
- Grace Principle section
- trust and human-review boundaries
- scoped discovery commercial route
- FAQ and pilot / validation boundaries

## Reusable components promoted into the canonical system

- AssessmentJourney
- HumanReviewPanel
- LeadCaptureForm
- Perspective / evidence hero visual pattern
- Integrity Gap pattern
- role-tier card pattern
- confidence / reasoned-updating presentation model

## Backend state

Lead capture now targets the canonical /api/contact route. The route will forward to CONTACT_API_URL or IRIS_LEAD_ENDPOINT when configured.

The route intentionally returns a non-success state when the IRIS endpoint is absent so the website cannot falsely report a governed lead capture when none occurred.

## Current blockers

1. perspective.orvia.org.uk has no DNS records yet.
2. The Vercel status for the canonical branding-and-website project is failing. This condition predates the Perspective Room implementation and blocks deployment verification.
3. CONTACT_API_URL / IRIS_LEAD_ENDPOINT must be configured and tested end-to-end.
4. Analytics / GSC must be verified in the production environment.
5. Approved Perspective Room media assets are still required.
6. Legal / DPIA / employment-law / accessibility review remains required before a live recruitment pilot.
7. Perspective Room must not be described as validated or proven until the pilot controls are closed.

## Release gates

- Brand gate: **PASS — source implementation**
- Commercial gate: **CONFIGURED / BLOCKED from verified-live**
- Sales gate: **CONFIGURED / IRIS endpoint verification required**
- SEO gate: **SOURCE PASS / production verification required**
- Accessibility gate: **SOURCE TARGET APPLIED / manual QA required**
- IRIS workflow gate: **BLOCKED — endpoint not verified**
- Deployment verification gate: **BLOCKED — Vercel project failing**
