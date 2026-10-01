export type SiteIdentityStatus = "public" | "build" | "internal" | "planned";

export type SiteIdentity = {
  id: string;
  publicName: string;
  browserTitle: string;
  domain: string;
  githubTarget: string;
  vercelTarget: string;
  status: SiteIdentityStatus;
  faviconRule: string;
  faviconSource: string;
};

export const siteIdentityRegistry: SiteIdentity[] = [
  {
    id:"oversight",
    publicName:"ORVIA Oversight",
    browserTitle:"ORVIA Oversight | Independent Evidence & Operational Assurance",
    domain:"orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-oversight-public",
    vercelTarget:"orvia-oversight-public",
    status:"public",
    faviconRule:"Use the approved ORVIA master orbit mark only. Never use a letter O as a substitute.",
    faviconSource:"Approved ORVIA master mark from controlled Brand Media library"
  },
  {
    id:"web",
    publicName:"ORVIA Web",
    browserTitle:"ORVIA Web | Websites Built to Work",
    domain:"web.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-web-public",
    vercelTarget:"orvia-web-public",
    status:"public",
    faviconRule:"Use the approved ORVIA Web product icon. Do not reuse the parent ORVIA orbit if a controlled Web icon exists.",
    faviconSource:"Current approved ORVIA Web product mark to be verified against controlled Brand Media assets before migration"
  },
  {
    id:"voice",
    publicName:"ORVIA Voice",
    browserTitle:"ORVIA Voice | Calls Into Accountable Action",
    domain:"voice.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-voice-public",
    vercelTarget:"orvia-voice-public",
    status:"build",
    faviconRule:"Use the approved ORVIA Voice product icon. Do not invent a microphone, waveform or letter mark.",
    faviconSource:"Current approved ORVIA Voice product mark to be verified against controlled Brand Media assets before migration"
  },
  {
    id:"threshold",
    publicName:"ORVIA Threshold",
    browserTitle:"ORVIA Threshold | Structured Review Before High-Consequence Decisions",
    domain:"threshold.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-threshold-public",
    vercelTarget:"orvia-threshold-public",
    status:"public",
    faviconRule:"Use the approved Threshold icon master.",
    faviconSource:"ORVIA_Threshold_icon_master_2048.png"
  },
  {
    id:"witness",
    publicName:"ORVIA Witness Room",
    browserTitle:"ORVIA Witness Room | Prepare the Account Before the Real Test",
    domain:"witness.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-witness-room-public",
    vercelTarget:"orvia-witness-room-public",
    status:"public",
    faviconRule:"Use the approved Witness Room icon master.",
    faviconSource:"ORVIA_Witness_Room_icon_master_2048.png"
  },
  {
    id:"mia",
    publicName:"MIA · Memories by ORVIA",
    browserTitle:"MIA Memories | Preserve the Stories Behind the Photographs",
    domain:"mia.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-mia-public",
    vercelTarget:"orvia-mia-public",
    status:"public",
    faviconRule:"Use the current approved MIA product icon/logo reduced specifically for browser/app-icon use. Do not substitute an ORVIA letter mark.",
    faviconSource:"Current MIA approved mark in ORVIA controlled media / current MIA repository, to be verified before migration"
  },
  {
    id:"insight",
    publicName:"ORVIA Insight",
    browserTitle:"ORVIA Insight | Human-Led Organisational Perspective",
    domain:"insight.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-insight-public",
    vercelTarget:"orvia-insight-public",
    status:"build",
    faviconRule:"Use the approved Insight product icon only.",
    faviconSource:"Current approved ORVIA Insight product mark to be verified before migration"
  },
  {
    id:"business",
    publicName:"ORVIA Business",
    browserTitle:"ORVIA Business | Evidence-Led Business Improvement",
    domain:"business.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-business-public",
    vercelTarget:"orvia-business-public",
    status:"public",
    faviconRule:"Use the approved ORVIA Business product icon only.",
    faviconSource:"Current approved ORVIA Business product mark to be verified before migration"
  },
  {
    id:"security",
    publicName:"ORVIA Security & Intelligence",
    browserTitle:"ORVIA Security & Intelligence | Evidence, Risk & Operational Assurance",
    domain:"security.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-security-intelligence-public",
    vercelTarget:"orvia-security-intelligence-public",
    status:"public",
    faviconRule:"Use the approved Security & Intelligence product icon only.",
    faviconSource:"Current approved ORVIA Security & Intelligence product mark to be verified before migration"
  },
  {
    id:"perspective",
    publicName:"ORVIA Perspective Room",
    browserTitle:"ORVIA Perspective Room | Reasoning, Judgement & Human Review",
    domain:"perspective.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-perspective-room-public",
    vercelTarget:"orvia-perspective-room-public",
    status:"build",
    faviconRule:"Use the approved Perspective Room icon only once formally approved; until then do not invent one.",
    faviconSource:"Approval required"
  },
  {
    id:"academy",
    publicName:"ORVIA Academy",
    browserTitle:"ORVIA Academy | Learning & Professional Development",
    domain:"academy.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-academy-public",
    vercelTarget:"orvia-academy-public",
    status:"planned",
    faviconRule:"Use the approved Academy icon master.",
    faviconSource:"ORVIA_Academy_icon_master_2048.png"
  },
  {
    id:"foundation",
    publicName:"ORVIA Foundation",
    browserTitle:"ORVIA Foundation | Access, Inclusion & Public-Interest Work",
    domain:"foundation.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-foundation-public",
    vercelTarget:"orvia-foundation-public",
    status:"planned",
    faviconRule:"Use the approved Foundation icon master. Do not describe Foundation as a charity unless legal status is formally established.",
    faviconSource:"ORVIA_Foundation_icon_master_2048.png"
  },
  {
    id:"workspace",
    publicName:"ORVIA Workspace · IRIS",
    browserTitle:"ORVIA Workspace | IRIS",
    domain:"workspace.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-workspace",
    vercelTarget:"orvia-workspace",
    status:"internal",
    faviconRule:"Use the controlled IRIS/workspace icon, distinct from public commercial product icons.",
    faviconSource:"Internal controlled asset"
  },
  {
    id:"command",
    publicName:"ORVIA Command",
    browserTitle:"ORVIA Command | Internal Operations",
    domain:"command.orvia.org.uk",
    githubTarget:"ORVIA-Oversight/orvia-command",
    vercelTarget:"orvia-command",
    status:"internal",
    faviconRule:"Use the controlled Command icon, distinct from public-facing product favicons.",
    faviconSource:"Internal controlled asset"
  }
];

export const siteIdentityRules = {
  repository:"Every fresh public repository uses the pattern ORVIA-Oversight/orvia-<product>-public.",
  vercel:"Every fresh public Vercel project uses the matching orvia-<product>-public name.",
  domain:"Public products use the canonical <product>.orvia.org.uk domain wherever available.",
  title:"Browser titles start with the product name and then a plain-English purpose.",
  favicon:"Every site must ship favicon.ico plus PNG/app-icon variants derived from its approved controlled product icon. No AI-generated logo or favicon is permitted.",
  fallback:"If a controlled product icon has not yet been approved, use no invented substitute. Hold the favicon task until the asset is approved."
} as const;
