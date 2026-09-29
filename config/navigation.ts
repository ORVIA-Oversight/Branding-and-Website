export const primaryNav = [
  ["Platform", "/#platform"],
  ["Method", "/#method"],
  ["Practitioners", "/practitioner-network"],
  ["Case Studies", "/case-studies"],
  ["Trust", "/trust"],
  ["Armed Forces", "/armed-forces"],
  ["Careers", "/careers"]
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
