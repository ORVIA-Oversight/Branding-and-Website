# ORVIA Brand & Web System — Human Handover

## What this is

This repository is the controlled template and governance layer for the ORVIA web estate.

A human taking over should understand three things immediately:

1. **ORVIA Oversight is the parent brand.**
2. **Every product site tells its own customer story but inherits the same ORVIA principles and trust layer.**
3. **GitHub is source truth, Vercel is deployment truth, SharePoint is the controlled organisational record, and IRIS owns workflow state.**

## First rollout order

1. ORVIA Oversight — `orvia.org.uk`
2. ORVIA Web — `web.orvia.org.uk`
3. ORVIA Voice — `voice.orvia.org.uk`

Do not redesign the master while moving through those three unless a genuine reusable defect is found.

## ORVIA story to preserve

ORVIA grew from operational experience across frontline, regulated and strategic environments.

The recurring question is:

> What is actually happening, what does the evidence support, what remains unresolved, what should happen next, and did the fix work?

Method:

**OBSERVE → REVIEW → VERIFY → INTERPRET → ACT**

Principles:

- Evidence before assumption.
- Human first. Human last.
- Independent challenge without hostility.
- Make uncertainty visible.
- Consequential judgement remains with accountable people.
- Verify improvement: **Implemented → Verified → Effective → Sustained**.

## Public contact and trust

- 0330 043 3703
- hello@orvia.org.uk
- ORVIA Oversight Ltd
- Company 16123685
- ICO ZC152311
- Registered office: 3rd Floor, 86-90 Paul Street, London EC2A 4NE

ORVIA is independent and non-statutory. It is not a regulator, inspectorate, court, law firm, clinical service or emergency service.

## Key control files

- `config/siteRegistry.ts` — estate status and commercial role
- `config/siteIdentityRegistry.ts` — naming, domain, repo/Vercel target and favicon source
- `config/contactAndSales.ts` — canonical contact and lead routing
- `config/founderCredentials.ts` — founder credentials, separate from company trust
- `components/navigation/Header.tsx`
- `components/footer/Footer.tsx`
- `components/forms/ContactForm.tsx`
- `app/api/contact/route.ts`

## Favicons

Use controlled product icons only.

SharePoint backup pack:

`ORVIA-Unified-Circular-Brand-Pack.zip`

It includes circular favicon/app-icon sets for Oversight, Web, MIA, Voice, Threshold, Command and IRIS.

Never invent a replacement icon when a controlled mark exists.

## Commercial route

A site is not complete until this works:

**UNDERSTAND → TRUST → PRICE/QUOTE → BUY/START → ONBOARD → DELIVERY → FOLLOW-UP → RETENTION/EXPANSION**

Fixed-price product: real Start/Buy route.  
Scoped service: real discovery/proposal route.

No decorative dead-end CTAs.

## Release gate

Before moving a domain:

- build passes;
- desktop and mobile reviewed;
- navigation checked;
- contact form checked;
- phone/email/WhatsApp checked;
- commercial next step checked;
- legal/trust/footer checked;
- favicon and browser title checked;
- domain/SSL checked;
- rollback deployment retained.

## Read next

- `docs/BUILD_AND_RELEASE_RUNBOOK.md`
- `docs/ORVIA_STORY_TEMPLATE_RULES.md`
- `docs/ORVIA_CORE_FIXER_MODEL_SITE_INHERITANCE_STANDARD.md`

If anything conflicts or is unclear, do not silently reconcile it. Record **FOUNDER DECISION REQUIRED** and preserve the current state.
