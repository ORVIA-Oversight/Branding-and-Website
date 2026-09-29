# ORVIA Estate Recovery Manifest
**Status:** Controlled recovery evidence
**As at:** 2026-09-29
**Purpose:** Rebuild the ORVIA web and core-system estate quickly after loss without inventing mappings or bypassing IRIS/VERA controls.

## Recovery rule
GitHub is code truth. Vercel is deployment truth. Supabase is backend/data platform truth where used. SharePoint/HIVE preserves controlled recovery evidence. IRIS remains the sole conductor. VITA challenges completeness. VERA verifies recovery.

Do not mark a system recovered because a homepage loads. Recovery requires source, deployment, domain, data, secrets/integration references, and post-restore verification.

## Current live-source inventory

### GitHub organisation
26 repositories were visible to the connected ORVIA-Oversight account on 2026-09-29.

Core / estate repositories observed:
- ORVIA-Oversight/orvia-public-website
- ORVIA-Oversight/Branding-and-Website
- ORVIA-Oversight/orvia-brand-control
- ORVIA-Oversight/orvia-voice
- ORVIA-Oversight/threshold
- ORVIA-Oversight/orvia-mia
- ORVIA-Oversight/orvia-witness-room
- ORVIA-Oversight/orvia-insight
- ORVIA-Oversight/web
- ORVIA-Oversight/business.web
- ORVIA-Oversight/Business-in-a-Box
- ORVIA-Oversight/Security-and-Intelligence
- ORVIA-Oversight/orvia-overwatch
- ORVIA-Oversight/orvia-command-centre
- ORVIA-Oversight/iris-by-orvia
- ORVIA-Oversight/orvia-ptt
- ORVIA-Oversight/orvia-brain-prototype
- ORVIA-Oversight/santum88
- ORVIA-Oversight/Vanguard-Tactical-
- ORVIA-Oversight/AIRSOFT-FOUND
- ORVIA-Oversight/artist.web
- ORVIA-Oversight/trade.web
- ORVIA-Oversight/orvia-web-showcase
- ORVIA-Oversight/lavender-north
- ORVIA-Oversight/orvia-live-coach
- ORVIA-Oversight/Community-App-

All observed repositories reported default branch `main`. Visibility varies and must be preserved when restoring.

### Vercel team currently visible
Team: `johnmcgill-5362's projects`
Team id: `team_YCFtTNwfkZX6NNHTd5hHCag9`

Projects currently visible:
- orvia-oversight
- orvia-brain-prototype
- orvia_site_staging
- legacy-orvia-threshold-review
- site
- orvia-healthcare
- orvia-preview
- orvia-public-website
- vercel-static
- orvia_live_pull
- public-project

### Supabase
Current connected projects:
1. `qokkyynptzeuuebykmbo` — ops@orviahealthcare.co.uk's Project — eu-west-1 — ACTIVE_HEALTHY
2. `plcjodswylpelfeonupv` — Vanguard Tactical — eu-west-2 — ACTIVE_HEALTHY

The 25 September recovery snapshot records the first project as the existing ORVIA operational backend containing the Asset Registry and established work/data tables. Do not create a parallel ORVIA work database unless a verified gap requires it.

### Stripe
Connected live account:
- ORVIA Oversight Ltd
- context `acct_1TbgvzAfhS396DuC`
- livemode: true

Do not put Stripe secret values into this manifest.

## Canonical estate mapping from the 25 September controlled recovery snapshot

| System | Canonical domain / target | GitHub source | 29 Sep verification state |
|---|---|---|---|
| ORVIA Oversight | orvia.org.uk / www.orvia.org.uk | ORVIA-Oversight/orvia-public-website | Repo verified; Vercel project `orvia-oversight` visible |
| ORVIA Web | web.orvia.org.uk | ORVIA-Oversight/web | Repo verified; expected named Vercel project not visible in current team listing — REVIEW REQUIRED |
| MIA | mia.orvia.org.uk | ORVIA-Oversight/orvia-mia | Repo verified; expected named Vercel project not visible — REVIEW REQUIRED |
| ORVIA Voice | www.orviavoice.co.uk | ORVIA-Oversight/orvia-voice | Repo verified; expected named Vercel project not visible — REVIEW REQUIRED |
| Threshold | threshold.orvia.org.uk | ORVIA-Oversight/threshold | Repo verified; only `legacy-orvia-threshold-review` visible — REVIEW REQUIRED |
| Command | command.orvia.org.uk | ORVIA-Oversight/orvia-command-centre | Repo verified; expected named Vercel project not visible — REVIEW REQUIRED |
| IRIS | iris.orvia.org.uk target | ORVIA-Oversight/iris-by-orvia | Repo verified; expected named Vercel project not visible — REVIEW REQUIRED |
| Temporary workspace/auth | workspace.orvia.org.uk | ORVIA-Oversight/orvia-brain-prototype | Repo and Vercel project visible; TEMPORARY / do not delete without dependency verification |
| ORVIA Insight | orviainsight.co.uk | ORVIA-Oversight/orvia-insight | Repo verified; Vercel mapping not yet confirmed in connected project list |
| Witness Room | witness.orvia.org.uk | ORVIA-Oversight/orvia-witness-room | Repo verified; Vercel mapping not yet confirmed in connected project list |
| Security & Intelligence | security.orvia.org.uk | ORVIA-Oversight/Security-and-Intelligence | Repo verified; Vercel mapping not yet confirmed |
| Overwatch | orvia-overwatch.orvia.org.uk or current approved route | ORVIA-Oversight/orvia-overwatch | Repo verified; current deployment mapping requires reconciliation |
| Brand & Web System | brand.orvia.org.uk | ORVIA-Oversight/Branding-and-Website | Repo verified; current Vercel project mapping requires reconciliation |
| Brand Control | brand-control.orvia.org.uk | ORVIA-Oversight/orvia-brand-control | Repo verified; deployment mapping requires reconciliation |

## Vercel drift requiring reconciliation
The 25 September controlled snapshot recorded canonical Vercel project names for several KEEP systems. The current connected Vercel team listing on 29 September does not show those names. This is not proof the sites are down. It means one of the following may apply:
- project was renamed;
- project is under a different Vercel team/account;
- project/domain is attached to a generic project;
- connector visibility is incomplete;
- mapping has changed since the snapshot.

Do not delete or repoint anything until repo -> Vercel project -> domain is proven.

## Recovery sequence for any ORVIA site
1. Identify the asset in the ORVIA Asset Registry.
2. Confirm the canonical GitHub repository and production branch.
3. Confirm the correct Vercel team/project and domain.
4. Restore environment-variable references from the approved platform/vault; never from this document.
5. Build a preview from the canonical repository.
6. Verify build output, routes, auth, forms, integrations and data dependencies.
7. Restore or reattach the canonical domain only after preview verification.
8. Verify Supabase/RLS/data connections where applicable.
9. Verify Stripe/payment flows only where applicable and only with approved test/control steps.
10. VERA: Implemented -> Verified -> Effective -> Sustained.
11. Record the recovery evidence in SharePoint/HIVE and update the Asset Registry.

## No-delete controls
Do not delete:
- a Vercel project with custom domains until domain ownership and replacement are verified;
- any repository until dependencies, deployment, webhooks and history are confirmed;
- `orvia-healthcare` while legacy custom domains or recovery dependencies remain;
- `orvia-brain-prototype` while workspace/auth dependencies remain;
- any legacy mailbox or identity until recovery routes and SaaS ownership are migrated.

## Secrets / access
This file intentionally contains no passwords, API keys, recovery codes or secret values.
Recovery depends on a controlled password vault and platform-native secret stores.
The 25 September Accounts, Access & Credential Register requires account ownership, MFA and recovery to be migrated to canonical ORVIA identities and verified.

## Next evidence task
Reconcile each REVIEW REQUIRED row against actual Vercel project metadata and DNS/domain ownership, then update this manifest and SharePoint recovery folder. No production changes are authorised by this manifest alone.
