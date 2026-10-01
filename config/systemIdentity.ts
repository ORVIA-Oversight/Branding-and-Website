export type OrviaSystemId =
  | "brand"
  | "oversight"
  | "voice"
  | "threshold"
  | "witness"
  | "insight"
  | "business"
  | "web"
  | "mia"
  | "security"
  | "academy"
  | "foundation"
  | "workspace"
  | "command";

export const systemIdentities = {
  brand: {
    name: "Brand & Web System",
    shortName: "Brand",
    icon: "B",
    accent: "#0B2450",
    href: "https://brand.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  oversight: {
    name: "Oversight",
    shortName: "Oversight",
    icon: "O",
    accent: "#0B2450",
    href: "https://orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  voice: {
    name: "Voice",
    shortName: "Voice",
    icon: "V",
    accent: "#2B929D",
    href: "https://voice.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  threshold: {
    name: "Threshold",
    shortName: "Threshold",
    icon: "T",
    accent: "#2B929D",
    href: "https://threshold.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  witness: {
    name: "Witness Room",
    shortName: "Witness",
    icon: "W",
    accent: "#2B929D",
    href: "https://witness.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  insight: {
    name: "Insight",
    shortName: "Insight",
    icon: "I",
    accent: "#82418F",
    href: "https://insight.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  business: {
    name: "Business",
    shortName: "Business",
    icon: "B",
    accent: "#E74612",
    href: "https://business.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  web: {
    name: "Web",
    shortName: "Web",
    icon: "W",
    accent: "#E74612",
    href: "https://web.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  mia: {
    name: "MIA",
    shortName: "MIA",
    icon: "M",
    accent: "#82418F",
    href: "https://mia.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  security: {
    name: "Security & Intelligence",
    shortName: "Security",
    icon: "S",
    accent: "#0B2450",
    href: "https://security.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  academy: {
    name: "Academy",
    shortName: "Academy",
    icon: "A",
    accent: "#EAAA00",
    href: "https://academy.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  foundation: {
    name: "Foundation",
    shortName: "Foundation",
    icon: "F",
    accent: "#EAAA00",
    href: "https://foundation.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  workspace: {
    name: "Workspace",
    shortName: "Workspace",
    icon: "W",
    accent: "#0B2450",
    href: "https://workspace.orvia.org.uk",
    parent: "ORVIA Oversight"
  },
  command: {
    name: "Command",
    shortName: "Command",
    icon: "C",
    accent: "#0B2450",
    href: "https://command.orvia.org.uk",
    parent: "ORVIA Oversight"
  }
} as const;

export const activeSystemId: OrviaSystemId = "brand";

export const activeSystem = systemIdentities[activeSystemId];

export const masterIdentity = {
  publicName: "ORVIA",
  descriptor: "OVERSIGHT",
  legalName: "ORVIA Oversight Ltd",
  href: "https://orvia.org.uk",
  logoSrc: "/brand/ORVIA-Oversight-master.png"
} as const;
