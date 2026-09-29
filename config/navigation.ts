export type NavItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: readonly NavItem[];
};

export const navigationGroups: readonly NavGroup[] = [
  {
    label: "What we do",
    items: [
      { label: "Work with ORVIA", href: "/work-with-orvia", description: "Evidence-led support, assurance, investigation and operational improvement." },
      { label: "Work with John", href: "/work-with-john", description: "Founder-led intervention for complex or stuck problems." },
      { label: "Products", href: "/products", description: "Plain-English routes into the current ORVIA product estate." },
      { label: "Case studies", href: "/case-studies", description: "See ORVIA operating models and builds in practice." }
    ]
  },
  {
    label: "Who we help",
    items: [
      { label: "Organisations & leaders", href: "/work-with-orvia", description: "Governance, safeguarding, assurance, operations and improvement." },
      { label: "Professionals & practitioners", href: "/practitioner-network", description: "ORVIA practitioner capability, training and delivery." },
      { label: "Veterans & Armed Forces community", href: "/armed-forces", description: "Our commitments, opportunities and verified Armed Forces links." },
      { label: "Human reasoning & recruitment", href: "/perspective-room", description: "Evidence-led assessment of reasoning, judgement and perspective." }
    ]
  },
  {
    label: "Products",
    items: [
      { label: "ORVIA Voice", href: "https://voice.orvia.org.uk", description: "24/7 call capture and accountable follow-up.", external:true },
      { label: "Witness Room", href: "https://witness.orvia.org.uk", description: "Structured evidence preparation and challenge.", external:true },
      { label: "Perspective Room", href: "/perspective-room", description: "Human reasoning, judgement and evidence-led assessment." },
      { label: "ORVIA Web", href: "https://web.orvia.org.uk", description: "Lean commercial websites and managed web delivery.", external:true },
      { label: "MIA", href: "https://mia.orvia.org.uk", description: "Memory preservation, family archive and legacy.", external:true },
      { label: "Threshold", href: "https://threshold.orvia.org.uk", description: "Structured concern and evidence review.", external:true }
    ]
  },
  {
    label: "About",
    items: [
      { label: "Founder Story", href: "/founder", description: "Why ORVIA exists and the experience behind it." },
      { label: "Trust Centre", href: "/trust", description: "Governance, controls, boundaries and verified trust." },
      { label: "Armed Forces", href: "/armed-forces", description: "Covenant, ERS Bronze and veteran commitment." },
      { label: "Careers", href: "/careers", description: "Join ORVIA and build capability with us." },
      { label: "Brand & system reference", href: "/estate", description: "Deeper governance and website-estate reference." },
      { label: "Contact", href: "/contact", description: "Talk to ORVIA." }
    ]
  }
] as const;

export const customerAccessNav = [
  {
    label:"Customer Workspace",
    href:"https://workspace.orvia.org.uk",
    description:"Customer cases, evidence, tasks and shared workspaces.",
    status:"live"
  },
  {
    label:"Voice Portal",
    href:"https://voice.orvia.org.uk",
    description:"ORVIA Voice service, onboarding and customer access.",
    status:"live"
  },
  {
    label:"Witness Room",
    href:"https://witness.orvia.org.uk",
    description:"Structured preparation, evidence and perspective testing.",
    status:"live"
  }
] as const;

export const footerNavigation = {
  startHere: [
    { label:"Work with ORVIA", href:"/work-with-orvia" },
    { label:"Work with John", href:"/work-with-john" },
    { label:"Products", href:"/products" },
    { label:"Case Studies", href:"/case-studies" },
    { label:"Customer Access", href:"/customer-login" },
    { label:"Contact", href:"/contact" }
  ],
  methodProducts: [
    { label:"ORVIA Systems", href:"/systems" },
    { label:"Commercial Standard", href:"/commercial" },
    { label:"Sales Operating Model", href:"/sales" },
    { label:"Website Estate", href:"/estate" },
    { label:"ORVIA Voice", href:"https://voice.orvia.org.uk", external:true },
    { label:"Witness Room", href:"https://witness.orvia.org.uk", external:true }
  ],
  company: [
    { label:"Founder Story", href:"/founder" },
    { label:"Practitioners", href:"/practitioner-network" },
    { label:"Insights", href:"/insights" },
    { label:"Armed Forces", href:"/armed-forces" },
    { label:"Careers", href:"/careers" },
    { label:"Trust Centre", href:"/trust" }
  ]
} as const;

// Backward-compatible flat navigation for any legacy component still importing primaryNav.
export const primaryNav = navigationGroups.flatMap(group => group.items.map(item => [item.label, item.href] as const));
