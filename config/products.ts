export type ProductId = "oversight" | "voice" | "threshold" | "mia" | "witness" | "foundation" | "academy" | "web";

export const products = {
  oversight: { name: "ORVIA Oversight", accent: "#0B2D5C", url: "https://orvia.org.uk" },
  voice: { name: "ORVIA Voice", accent: "#2F7F86", url: "https://voice.orvia.org.uk" },
  threshold: { name: "ORVIA Threshold", accent: "#F0A51A", url: "https://threshold.orvia.org.uk" },
  mia: { name: "MIA", accent: "#6A2E7C", url: "https://mia.orvia.org.uk" },
  witness: { name: "Witness Room", accent: "#516274", url: "https://witness.orvia.org.uk" },
  foundation: { name: "ORVIA Foundation", accent: "#A3684C", url: "#" },
  academy: { name: "ORVIA Academy", accent: "#5D6B82", url: "#" },
  web: { name: "ORVIA Web", accent: "#E34B23", url: "https://web.orvia.org.uk" }
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
