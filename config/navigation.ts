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
    label: "Platform",
    items: [
      { label: "Platform overview", href: "/#platform", description: "How the ORVIA operating system fits together." },
      { label: "ORVIA Method", href: "/#method", description: "Observe. Review. Verify. Interpret. Act." },
      { label: "Systems", href: "/systems", description: "IRIS, HIVE, VITA, VERA, Command and AI." },
      { label: "Commercial Standard", href: "/commercial", description: "The release gate from offer to governed delivery." },
      { label: "Sales Operating Model", href: "/sales", description: "Lead capture, ownership, follow-up and conversion under IRIS." },
      { label: "Website Estate", href: "/estate", description: "Review and migrate every ORVIA site into the canonical build." }
    ]
  },
  {
    label: "Products",
    items: [
      { label: "All products", href: "/products", description: "See the current ORVIA product and service estate." },
      { label: "ORVIA Voice", href: "https://voice.orvia.org.uk", description: "Call capture, routing and accountable follow-up.", external:true },
      { label: "Witness Room", href: "https://witness.orvia.org.uk", description: "Evidence preparation, challenge and controlled perspectives.", external:true },
      { label: "Perspective Room", href: "/perspective-room", description: "Human reasoning, safeguarding judgement and evidence-led recruitment." },

      { label: "ORVIA Web", href: "https://web.orvia.org.uk", description: "Rapid commercial website builds and managed web delivery.", external:true },
      { label: "MIA", href: "https://mia.orvia.org.uk", description: "Memory preservation, family archive and legacy.", external:true },
      { label: "Threshold", href: "https://threshold.orvia.org.uk", description: "Structured concern and evidence review.", external:true }
    ]
  },
  {
    label: "Company",
    items: [
      { label: "Founder Story", href: "/founder", description: "Why John built ORVIA and what drives the company." },
      { label: "Work with John", href: "/work-with-john", description: "Direct consultancy, challenge and operational support." },
      { label: "Practitioners", href: "/practitioner-network", description: "Our practitioner model and capability pathway." },
      { label: "Armed Forces", href: "/armed-forces", description: "Veterans, Service leavers, families and transferable skills." },
      { label: "Careers", href: "/careers", description: "Join ORVIA and build capability with us." }
    ]
  },
  {
    label: "Resources",
    items: [
      { label: "Case Studies", href: "/case-studies", description: "See ORVIA builds and operating models in practice." },
      { label: "Insights", href: "/insights", description: "ORVIA thinking, updates and explainers." },
      { label: "Trust Centre", href: "/trust", description: "Governance, controls, boundaries and verified trust." },
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
  },
  {
    label:"Command",
    href:"https://command.orvia.org.uk",
    description:"Restricted ORVIA operational command environment.",
    status:"restricted"
  },
  {
    label:"Brand Control",
    href:"/customer-login#brand-control",
    description:"Internal controlled brand and website administration.",
    status:"restricted"
  }
] as const;

export const footerNavigation = {
  startHere: [
    { label:"Why ORVIA", href:"/founder" },
    { label:"Work with John", href:"/work-with-john" },
    { label:"Products", href:"/products" },
    { label:"Case Studies", href:"/case-studies" },
    { label:"Contact", href:"/contact" }
  ],
  methodProducts: [
    { label:"ORVIA Method", href:"/#method" },
    { label:"ORVIA Systems", href:"/systems" },
    { label:"Commercial Standard", href:"/commercial" },
    { label:"Sales Operating Model", href:"/sales" },
    { label:"Website Estate", href:"/estate" },
    { label:"ORVIA Voice", href:"https://voice.orvia.org.uk", external:true },
    { label:"Witness Room", href:"https://witness.orvia.org.uk", external:true },
    { label:"Customer Access", href:"/customer-login" }
  ],
  company: [
    { label:"Founder Story", href:"/founder" },
    { label:"Work with John", href:"/work-with-john" },
    { label:"Insights", href:"/insights" },
    { label:"Armed Forces", href:"/armed-forces" },
    { label:"Careers", href:"/careers" },
    { label:"Trust Centre", href:"/trust" }
  ]
} as const;


// Backward-compatible flat navigation for any legacy component still importing primaryNav.
export const primaryNav = navigationGroups.flatMap(group => group.items.map(item => [item.label, item.href] as const));
