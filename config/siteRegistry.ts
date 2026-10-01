import type { CommercialRegistryReference } from "@/config/commercial";

export type SiteFamily =
  | "corporate"
  | "assurance"
  | "communications"
  | "memory"
  | "evidence"
  | "digital"
  | "business"
  | "security"
  | "operations"
  | "learning"
  | "community";

export type SiteTheme = {
  primary: string;
  secondary: string;
  accent: string;
  soft: string;
  ink: string;
  use: string;
};

export type SiteRegistryEntry = {
  id: string;
  name: string;
  domain: string;
  repo: string;
  family: SiteFamily;
  theme: SiteTheme;
  productMark: string;
  status: "live" | "build" | "internal" | "planned";
  layout: "canonical-commercial" | "canonical-service" | "canonical-internal";
  requiredSections: string[];
  commercial: CommercialRegistryReference;
  notes?: string;
};

export const ORVIA_COLOURS = {
  navy:"#0B2450",
  teal:"#2B929D",
  gold:"#EAAA00",
  purple:"#82418F",
  orange:"#E74612",
  warm:"#FAF7F2",
  slate:"#516274",
  ink:"#101923"
} as const;

const commonSections = [
  "Hero",
  "Who it is for",
  "What it does",
  "How it works",
  "Proof / trust",
  "Related ORVIA products",
  "Contact / conversion"
];

const commercialSections = [
  ...commonSections.slice(0,4),
  "Commercial offer / pricing",
  "Explainer media",
  ...commonSections.slice(4)
];

export const siteRegistry: SiteRegistryEntry[] = [
  {
    id:"oversight", name:"ORVIA Oversight", domain:"orvia.org.uk", repo:"ORVIA-Oversight/orvia-public-website",
    family:"corporate", productMark:"O", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"scoped",commercialRegistryId:"oversight",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.gold,soft:"#F3F7FA",ink:ORVIA_COLOURS.ink,use:"Corporate authority, trust, governance and assurance"},
    requiredSections:commercialSections
  },
  {
    id:"brand", name:"ORVIA Brand & Web System", domain:"brand.orvia.org.uk", repo:"ORVIA-Oversight/Branding-and-Website",
    family:"corporate", productMark:"B", status:"live", layout:"canonical-internal",
    commercial:{commercialMode:"non_commercial",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"verified"},
    theme:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.gold,soft:"#F7F9FB",ink:ORVIA_COLOURS.ink,use:"Canonical design, estate control and website template"},
    requiredSections:["Brand system","Estate map","Method","Trust","Careers","Armed Forces","Customer access","Build controls"]
  },
  {
    id:"voice", name:"ORVIA Voice", domain:"voice.orvia.org.uk", repo:"ORVIA-Oversight/orvia-voice",
    family:"communications", productMark:"R", status:"build", layout:"canonical-commercial",
    commercial:{commercialMode:"fixed_price",commercialRegistryId:"voice",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"blocked",releaseNote:"Canonical voice.orvia.org.uk DNS is not yet live. Use orviavoice.co.uk as the public route until DNS, telephony, payment and onboarding are verified end to end."},
    theme:{primary:ORVIA_COLOURS.teal,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#EFF8F8",ink:ORVIA_COLOURS.ink,use:"Conversation, signal, responsiveness and service capture"},
    requiredSections:commercialSections
  },
  {
    id:"threshold", name:"ORVIA Threshold", domain:"threshold.orvia.org.uk", repo:"ORVIA-Oversight/threshold",
    family:"assurance", productMark:"V", status:"live", layout:"canonical-service",
    commercial:{commercialMode:"scoped",commercialRegistryId:"threshold",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.gold,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.orange,soft:"#FFF8E8",ink:ORVIA_COLOURS.ink,use:"Decision points, concern escalation and structured thresholds"},
    requiredSections:commonSections
  },
  {
    id:"mia", name:"MIA", domain:"mia.orvia.org.uk", repo:"ORVIA-Oversight/orvia-mia",
    family:"memory", productMark:"I", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"pilot",commercialRegistryId:"mia",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.purple,secondary:ORVIA_COLOURS.orange,accent:ORVIA_COLOURS.gold,soft:"#FBF3FA",ink:ORVIA_COLOURS.ink,use:"Memory, warmth, family, continuity and legacy"},
    requiredSections:commercialSections
  },
  {
    id:"witness", name:"ORVIA Witness Room", domain:"witness.orvia.org.uk", repo:"ORVIA-Oversight/orvia-witness-room",
    family:"evidence", productMark:"W", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"fixed_price",commercialRegistryId:"witness",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"configured",releaseNote:"Enable direct purchase only when controlled pricing and post-purchase onboarding are verified."},
    theme:{primary:ORVIA_COLOURS.slate,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#F1F4F6",ink:ORVIA_COLOURS.ink,use:"Evidence, challenge, controlled perspectives and preparation"},
    requiredSections:commercialSections
  },
  {
    id:"perspective", name:"ORVIA Perspective Room", domain:"perspective.orvia.org.uk", repo:"ORVIA-Oversight/Branding-and-Website",
    family:"evidence", productMark:"P", status:"build", layout:"canonical-commercial",
    commercial:{commercialMode:"scoped",commercialRegistryId:"perspective-room",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured",releaseNote:"Book discovery / Request proposal only. Proposed product domain remains blocked from live status until DNS, Vercel, IRIS and onboarding are verified end to end."},
    theme:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.gold,soft:"#F3F7FA",ink:ORVIA_COLOURS.ink,use:"Human reasoning, perspective, safeguarding judgement and evidence-led recruitment"},
    requiredSections:["Hero","How it works","Assessment journey","What is assessed","Health & Social Care","Safeguarding & judgement","For employers","Candidate experience","Evidence & human review","Commercial offer / discovery","Case studies / pilots","FAQ","Trust & boundaries","Contact / conversion"],
    notes:"First live template proof job for the ORVIA Brand & Web System. Reusable patterns created here should be promoted back into the canonical system."
  },
  {
    id:"web", name:"ORVIA Web", domain:"web.orvia.org.uk", repo:"ORVIA-Oversight/web",
    family:"digital", productMark:"A", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"fixed_price",commercialRegistryId:"web",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"configured",releaseNote:"Direct purchase becomes available only for fixed packages with verified payment and onboarding routes."},
    theme:{primary:ORVIA_COLOURS.orange,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.teal,soft:"#FFF4EF",ink:ORVIA_COLOURS.ink,use:"Build, launch, digital delivery and commercial speed"},
    requiredSections:commercialSections
  },
  {
    id:"business", name:"ORVIA Business", domain:"business.orvia.org.uk", repo:"ORVIA-Oversight/Business-in-a-Box",
    family:"business", productMark:"B", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"scoped",commercialRegistryId:"business",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.gold,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.teal,soft:"#FFF8E8",ink:ORVIA_COLOURS.ink,use:"Business control, operating model and commercial improvement"},
    requiredSections:commercialSections
  },
  {
    id:"security", name:"ORVIA Security & Intelligence", domain:"security.orvia.org.uk", repo:"ORVIA-Oversight/Security-and-Intelligence",
    family:"security", productMark:"S", status:"live", layout:"canonical-commercial",
    commercial:{commercialMode:"scoped",commercialRegistryId:"security",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.orange,soft:"#EEF4F8",ink:ORVIA_COLOURS.ink,use:"Intelligence, investigations, security and evidence"},
    requiredSections:commercialSections
  },
  {
    id:"overwatch", name:"ORVIA Overwatch", domain:"orvia-overwatch.orvia.org.uk", repo:"ORVIA-Oversight/orvia-overwatch",
    family:"operations", productMark:"O", status:"live", layout:"canonical-service",
    commercial:{commercialMode:"scoped",commercialRegistryId:"overwatch",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"configured"},
    theme:{primary:ORVIA_COLOURS.navy,secondary:"#173F66",accent:ORVIA_COLOURS.gold,soft:"#EFF4F8",ink:ORVIA_COLOURS.ink,use:"Operational sensing, visibility, command and awareness"},
    requiredSections:commonSections
  },
  {
    id:"command", name:"ORVIA Command", domain:"command.orvia.org.uk", repo:"ORVIA-Oversight/orvia-command-centre",
    family:"operations", productMark:"C", status:"internal", layout:"canonical-internal",
    commercial:{commercialMode:"non_commercial",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"verified"},
    theme:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.slate,accent:ORVIA_COLOURS.teal,soft:"#EEF3F7",ink:ORVIA_COLOURS.ink,use:"Restricted operational control surface"},
    requiredSections:["Authenticated shell","Operational overview","Tasks","Systems","Telemetry","Knowledge","Audit"]
  },
  {
    id:"iris", name:"IRIS", domain:"workspace.orvia.org.uk", repo:"ORVIA-Oversight/iris-by-orvia",
    family:"operations", productMark:"IR", status:"internal", layout:"canonical-internal",
    commercial:{commercialMode:"non_commercial",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"verified"},
    theme:{primary:ORVIA_COLOURS.teal,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#EFF8F8",ink:ORVIA_COLOURS.ink,use:"Workflow conductor, routing, ownership and escalation"},
    requiredSections:["Authenticated shell","Queue","Workflow","Owners","Escalations","Audit"]
  },
  {
    id:"academy", name:"ORVIA Academy", domain:"academy.orvia.org.uk", repo:"ORVIA-Oversight/Branding-and-Website",
    family:"learning", productMark:"A", status:"planned", layout:"canonical-commercial",
    commercial:{commercialMode:"scoped",commercialRegistryId:"academy",allowDirectPurchase:false,requiresDiscovery:true,releaseState:"draft"},
    theme:{primary:"#5D6B82",secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#F3F5F8",ink:ORVIA_COLOURS.ink,use:"Learning, progression and professional development"},
    requiredSections:commercialSections
  },
  {
    id:"foundation", name:"ORVIA Foundation", domain:"foundation.orvia.org.uk", repo:"ORVIA-Oversight/Branding-and-Website",
    family:"community", productMark:"F", status:"planned", layout:"canonical-service",
    commercial:{commercialMode:"non_commercial",commercialRegistryId:"foundation",allowDirectPurchase:false,requiresDiscovery:false,releaseState:"draft"},
    theme:{primary:"#A3684C",secondary:ORVIA_COLOURS.purple,accent:ORVIA_COLOURS.gold,soft:"#FBF4EF",ink:ORVIA_COLOURS.ink,use:"Community, access, inclusion and public-interest work"},
    requiredSections:commonSections
  }
];

export const familyDefaults: Record<SiteFamily, SiteTheme> = {
  corporate:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.gold,soft:"#F3F7FA",ink:ORVIA_COLOURS.ink,use:"Corporate"},
  assurance:{primary:ORVIA_COLOURS.gold,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.orange,soft:"#FFF8E8",ink:ORVIA_COLOURS.ink,use:"Assurance"},
  communications:{primary:ORVIA_COLOURS.teal,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#EFF8F8",ink:ORVIA_COLOURS.ink,use:"Communications"},
  memory:{primary:ORVIA_COLOURS.purple,secondary:ORVIA_COLOURS.orange,accent:ORVIA_COLOURS.gold,soft:"#FBF3FA",ink:ORVIA_COLOURS.ink,use:"Memory"},
  evidence:{primary:ORVIA_COLOURS.slate,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#F1F4F6",ink:ORVIA_COLOURS.ink,use:"Evidence"},
  digital:{primary:ORVIA_COLOURS.orange,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.teal,soft:"#FFF4EF",ink:ORVIA_COLOURS.ink,use:"Digital"},
  business:{primary:ORVIA_COLOURS.gold,secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.teal,soft:"#FFF8E8",ink:ORVIA_COLOURS.ink,use:"Business"},
  security:{primary:ORVIA_COLOURS.navy,secondary:ORVIA_COLOURS.teal,accent:ORVIA_COLOURS.orange,soft:"#EEF4F8",ink:ORVIA_COLOURS.ink,use:"Security"},
  operations:{primary:ORVIA_COLOURS.navy,secondary:"#173F66",accent:ORVIA_COLOURS.gold,soft:"#EFF4F8",ink:ORVIA_COLOURS.ink,use:"Operations"},
  learning:{primary:"#5D6B82",secondary:ORVIA_COLOURS.navy,accent:ORVIA_COLOURS.gold,soft:"#F3F5F8",ink:ORVIA_COLOURS.ink,use:"Learning"},
  community:{primary:"#A3684C",secondary:ORVIA_COLOURS.purple,accent:ORVIA_COLOURS.gold,soft:"#FBF4EF",ink:ORVIA_COLOURS.ink,use:"Community"}
};

export const siteBuildDefaults = {
  parentBrand:"ORVIA Oversight",
  header:"master logo | product icon + product name | navigation | CTA",
  footer:"canonical approved ORVIA footer",
  trust:"canonical ORVIA trust layer",
  founderStory:"canonical founder source only",
  method:"canonical ORVIA method",
  accessibility:"WCAG-aware reusable component system",
  rule:"New sites inherit layout, colour family, trust, founder story, footer and shared controls from the registry. Only product-specific proposition, services, commercial detail, approved imagery and product identity vary."
} as const;
