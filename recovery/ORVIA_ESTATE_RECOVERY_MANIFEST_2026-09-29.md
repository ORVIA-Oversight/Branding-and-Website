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


## 29 September live Asset Registry cross-check

The live `public.orvia_asset_registry` currently contains 31 assets. It confirms that the recovery model already exists in the operational database and should be treated as the primary machine-readable recovery register.

Important current records include:
- ORVIA Oversight -> `ORVIA-Oversight/orvia-public-website` -> desired/current Vercel `orvia-oversight` -> verified.
- ORVIA Web -> `ORVIA-Oversight/web` -> Vercel `orvia-web` -> verified_by_ui in the registry on 25 Sep, but that project name is not visible in the currently connected Vercel team listing. Treat this as REGISTRY DRIFT, not as proof of outage.
- MIA -> `ORVIA-Oversight/orvia-mia` -> Vercel `orvia-mia` -> migration_pending. Registry currently records `https://mialegacy.uk/` as canonical.
- Voice -> `ORVIA-Oversight/orvia-voice` -> Vercel `orvia-voice` -> verified_by_ui on 25 Sep; current Vercel connector listing does not expose that project name.
- Threshold -> `ORVIA-Oversight/threshold` -> Vercel `orvia-threshold` -> migration_pending. Registry currently records `https://threshold-review.co.uk/`.
- Command -> `ORVIA-Oversight/orvia-command-centre` -> Vercel `orvia-command` -> verified_by_ui on 25 Sep; current Vercel listing does not expose that project name.
- IRIS -> `ORVIA-Oversight/iris-by-orvia` -> currently recorded deployment project `iris-by-orvia-jvs9`; desired name `orvia-iris`; disposition `rename`.
- Witness Room -> `ORVIA-Oversight/orvia-witness-room` -> registry deployment `orvia-witness-room` -> migration_pending; registry currently records the Vercel app URL and a separate owned `witnessroom.co.uk` domain.
- Workspace Access -> `ORVIA-Oversight/orvia-brain-prototype` -> Vercel `orvia-brain-prototype`; registry now marks it `retired_preserved` / `obsolete` / HOLD. Do not delete until dependency checks are complete.
- Legacy Vercel projects `site`, `orvia-preview`, `orvia-public-website`, `vercel-static`, `orvia_live_pull`, and `public-project` are explicitly recorded as retire candidates.
- `orvia-healthcare` is recorded as `retired_preserved` / HOLD, not as safe-to-delete.
- `orvia_site_staging` is recorded TEMPORARY and currently points at the Voice refit branch.

### Domain assets currently recorded but not fully mapped
The Asset Registry also records owned or held domains for ORVIA Academy, Brand, Business, Foundation, Governance, Insight, Safeguarding, Security, Training, Web, Vanguard Tactical, Witness Room and Threshold Review. Several are `owned_unmapped` or `commercial_primary_pending`. These must not be treated as production mappings until verified.

## Supabase recovery/security findings — 29 September

The ORVIA operational Supabase project is ACTIVE_HEALTHY and currently contains established admin, Voice, Web, MIA, Insight, Assurance and Asset Registry tables.

### SECURITY REVIEW REQUIRED
Supabase's current advisor reports:
1. **ERROR — RLS disabled:** `public.brand_social_provider_accounts` has Row Level Security disabled in the public schema. This needs a deliberate access-policy review before enabling RLS, because enabling it without suitable policies can break current access.
2. **ERROR — security-definer view:** `public.admin_iris_queue_health` is reported as a SECURITY DEFINER view. Review whether it can be converted to a security-invoker pattern without breaking the intended internal queue-health access.
3. **WARN — leaked-password protection disabled:** Supabase Auth leaked-password protection is currently disabled.
4. **INFO — RLS enabled with no policy:** 66 tables are reported with RLS enabled but no policies. This is not the same as RLS being disabled: by default it can make those tables inaccessible through client roles. Each table needs to be classified as server-only or client-accessible before any policy is added.

No remediation was auto-applied because access requirements must be verified first.

## Current priority order
1. Preserve this recovery manifest and SharePoint recovery pack.
2. Resolve Supabase security ERROR items with an explicit policy/access review.
3. Reconcile Asset Registry deployment names against the live Vercel team/account actually carrying each domain.
4. Update the Asset Registry only after each mapping is proven.
5. Verify the recovery of one full vertical slice end to end before changing or retiring legacy infrastructure.


## Security remediation completed — 29 September

Two Supabase security ERROR findings have now been remediated and rechecked:

1. `public.brand_social_provider_accounts`
   - RLS enabled.
   - Added authenticated internal-read policy tied to `admin_user_access`.
   - No broad write policy was added.
   - Supabase advisor no longer reports RLS disabled for this table.

2. `public.admin_iris_queue_health`
   - View changed to `security_invoker = true`.
   - Supabase advisor no longer reports the SECURITY DEFINER view error.

Remaining advisor items:
- WARN: leaked-password protection remains disabled in Supabase Auth.
- INFO: 66 tables have RLS enabled with no policy. These require classification before policy creation; many may intentionally be server-only. Do not auto-open them to client roles.

## DNS evidence captured — 29 September

Current DNS inspection confirms active Vercel-style routing for:
- `web.orvia.org.uk`
- `mia.orvia.org.uk`
- `command.orvia.org.uk`
- `iris.orvia.org.uk`
- `brand.orvia.org.uk`
- `brand-control.orvia.org.uk`
- `security.orvia.org.uk`
- `workspace.orvia.org.uk`

`orvia.org.uk`, `orviavoice.co.uk`, and `orviainsight.co.uk` also resolve at DNS level.

DNS inspection failed to obtain answers for:
- `threshold-review.co.uk`
- `witnessroom.co.uk`

Treat those as DNS REVIEW REQUIRED until independently rechecked. Do not infer domain loss solely from this lookup failure.

## Vercel evidence captured — 29 September

- `orvia-oversight` project is visible in the connected Vercel team and has current READY production deployments from `ORVIA-Oversight/orvia-public-website`.
- Asset Registry stores Threshold project id `prj_Qr7pUuCI1ZT9zJ4E2o3iiG9oYlLc`; querying that project id returned READY production deployments named `orvia-threshold`. This proves the current Vercel list label `legacy-orvia-threshold-review` maps to a project whose deployments are still named `orvia-threshold`. Do not retire it until domain/source mapping is reconciled.
