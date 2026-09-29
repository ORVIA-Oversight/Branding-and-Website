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

export const navigationGroups = [
  {
    label: "Explore",
    items: [
      { label: "Platform", href: "/#platform", description: "How the ORVIA operating system fits together." },
      { label: "Method", href: "/#method", description: "Observe. Review. Verify. Interpret. Act." },
      { label: "Systems", href: "/systems", description: "IRIS, HIVE, VITA, VERA, Command and AI." },
      { label: "Commercial Standard", href: "/commercial", description: "The release gate from offer to governed delivery." },
      { label: "Case Studies", href: "/case-studies", description: "See the ORVIA approach in practice." }
    ]
  },
  {
    label: "People",
    items: [
      { label: "Founder Story", href: "/founder", description: "Why John built ORVIA and what drives the company." },
      { label: "Work with John", href: "/work-with-john", description: "Direct consultancy, mentoring and operational support." },
      { label: "Practitioners", href: "/practitioner-network", description: "Our practitioner model and capability pathway." },
      { label: "Armed Forces", href: "/armed-forces", description: "Veterans, Service leavers, families and transferable skills." },
      { label: "Careers", href: "/careers", description: "Join ORVIA and build capability with us." }
    ]
  },
  {
    label: "Trust",
    items: [
      { label: "Trust Centre", href: "/trust", description: "Governance, controls, boundaries and verified trust." },
      { label: "Armed Forces Covenant", href: "/armed-forces", description: "Our Covenant commitment and ERS Bronze status." },
      { label: "Insights", href: "/insights", description: "ORVIA thinking, updates and explainers." },
      { label: "Contact", href: "/contact", description: "Talk to ORVIA." }
    ]
  }
] as const satisfies readonly NavGroup[];

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
    { label:"Why ORVIA", href:"/why-orvia" },
    { label:"Founder Story", href:"/founder" },
    { label:"Who We Help", href:"/#services" },
    { label:"Services", href:"/#services" },
    { label:"Contact", href:"/contact" }
  ],
  methodProducts: [
    { label:"ORVIA Method", href:"/#method" },
    { label:"ORVIA Systems", href:"/systems" },
    { label:"Commercial Standard", href:"/commercial" },
    { label:"ORVIA Voice", href:"https://voice.orvia.org.uk", external:true },
    { label:"Witness Room", href:"https://witness.orvia.org.uk", external:true },
    { label:"Customer Access", href:"/customer-login" }
  ],
  company: [
    { label:"About", href:"/about" },
    { label:"Founder Story", href:"/founder" },
    { label:"Work with John", href:"/work-with-john" },
    { label:"Insights", href:"/insights" },
    { label:"Armed Forces", href:"/armed-forces" },
    { label:"Careers", href:"/careers" },
    { label:"Trust Centre", href:"/trust" }
  ]
} as const;
