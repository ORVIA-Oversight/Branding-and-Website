export type ProductId =
  | "oversight"
  | "voice"
  | "threshold"
  | "mia"
  | "witness"
  | "foundation"
  | "academy"
  | "web";

export const products = {
  oversight: {
    name: "ORVIA Oversight",
    shortName: "Oversight",
    mark: "O",
    accent: "#0B2D5C",
    url: "https://orvia.org.uk",
    descriptor: "Corporate authority, governance and assurance",
    visualCue: "Orbit / connected oversight"
  },
  voice: {
    name: "ORVIA Voice",
    shortName: "Voice",
    mark: "R",
    accent: "#2F7F86",
    url: "https://voice.orvia.org.uk",
    descriptor: "Communications, capture and routing",
    visualCue: "Signal / conversation / connection"
  },
  threshold: {
    name: "ORVIA Threshold",
    shortName: "Threshold",
    mark: "V",
    accent: "#F0A51A",
    url: "https://threshold.orvia.org.uk",
    descriptor: "Structured concern and decision support",
    visualCue: "Threshold / doorway / decision point"
  },
  mia: {
    name: "MIA",
    shortName: "MIA",
    mark: "I",
    accent: "#6A2E7C",
    url: "https://mia.orvia.org.uk",
    descriptor: "Memory, story and human legacy",
    visualCue: "Human connection / memory / continuity"
  },
  witness: {
    name: "ORVIA Witness Room",
    shortName: "Witness Room",
    mark: "W",
    accent: "#516274",
    url: "https://witness.orvia.org.uk",
    descriptor: "Structured preparation and perspective testing",
    visualCue: "Room / perspectives / ripple"
  },
  foundation: {
    name: "ORVIA Foundation",
    shortName: "Foundation",
    mark: "F",
    accent: "#A3684C",
    url: "https://foundation.orvia.org.uk",
    descriptor: "Access, inclusion and public-interest work",
    visualCue: "Belonging / people / community"
  },
  academy: {
    name: "ORVIA Academy",
    shortName: "Academy",
    mark: "A",
    accent: "#5D6B82",
    url: "https://academy.orvia.org.uk",
    descriptor: "Learning and professional development",
    visualCue: "Learning / progression / reflection"
  },
  web: {
    name: "ORVIA Web",
    shortName: "Web",
    mark: "A",
    accent: "#E34B23",
    url: "https://web.orvia.org.uk",
    descriptor: "Governed websites and digital delivery",
    visualCue: "Build / publish / connect"
  }
} as const;

export const productIdentityRule = {
  requirement:
    "Every ORVIA site must inherit its approved product identity across the whole experience, not only in the logo.",
  surfaces: [
    "Header lock-up",
    "Primary accent",
    "Buttons and links",
    "Section highlights",
    "Cards and callouts",
    "Illustration / visual motif",
    "Favicon and app icon",
    "Open Graph / social image",
    "Footer product reference",
    "Loading, empty and error states"
  ],
  constants: [
    "ORVIA masterbrand structure",
    "Typography hierarchy",
    "Spacing system",
    "Trust and legal layer",
    "Accessibility rules",
    "Human-first interaction rules"
  ]
} as const;

export const productConfig = {
  id: "oversight" as ProductId,
  name: "ORVIA Universal Reference",
  legalEntity: "ORVIA Oversight Ltd",
  family: "oversight",
  accent: products.oversight.accent,
  parentUrl: "https://orvia.org.uk",
  phone: "0330 043 3703",
  email: "hello@orvia.org.uk",
  modules: {
    socialFeed: true,
    caseStudies: true,
    insights: true,
    armedForces: true,
    trustCentre: true,
    careers: true,
    relatedProducts: true,
    video: true
  }
};
