export const ORVIA_WEB_SYSTEM_VERSION = "1.1.0";

export const brandSystem = {
  system: {
    name: "ORVIA Brand & Web System",
    version: ORVIA_WEB_SYSTEM_VERSION,
    canonicalDomain: "https://brand.orvia.org.uk",
    authority: "ORVIA Oversight Ltd",
    humanAuthority: true,
    releaseRule: "Material public changes require human approval and post-release VERA verification."
  },
  identity: {
    masterbrand: "ORVIA",
    legalEntity: "ORVIA Oversight Ltd",
    companyNumber: "16123685",
    icoRegistration: "ZC152311",
    phone: "0330 043 3703",
    email: "hello@orvia.org.uk",
    method: ["Observe", "Review", "Verify", "Interpret", "Act"],
    principles: [
      "Human first. Human last.",
      "Evidence before assumption.",
      "Calm technology.",
      "No surveillance.",
      "No automated safeguarding, clinical or culpability decisions."
    ]
  },
  tokens: {
    colour: {
      navy: "#0B2D5C",
      teal: "#2F7F86",
      gold: "#F0A51A",
      purple: "#6A2E7C",
      orange: "#E34B23",
      warmWhite: "#FAF7F2",
      white: "#FFFFFF",
      ink: "#18263A",
      muted: "#667085"
    },
    typography: {
      ui: "Arial, Helvetica, sans-serif",
      heading: "Arial, Helvetica, sans-serif",
      editorialHero: "Source Serif 4, Georgia, serif"
    },
    radius: {
      small: "10px",
      medium: "18px",
      large: "28px",
      pill: "999px"
    },
    layout: {
      maxWidth: "1240px",
      readingWidth: "760px",
      sectionSpacing: "clamp(64px, 8vw, 112px)"
    }
  },
  requiredComponents: [
    "OrviaUtilityBar",
    "OrviaHeader",
    "OrviaHero",
    "OrviaTrustStrip",
    "OrviaMethod",
    "OrviaCaseStudies",
    "OrviaArmedForcesPanel",
    "OrviaRelatedProducts",
    "OrviaContact",
    "OrviaFooter"
  ],
  requiredControls: {
    legalFooter: true,
    canonicalUrl: true,
    metadata: true,
    openGraph: true,
    sitemap: true,
    robots: true,
    accessibilityTarget: "WCAG 2.2 AA",
    approvedAssetsOnly: true,
    noUnsupportedClaims: true,
    telemetryHooks: true
  },
  deployment: {
    sourceOfTruth: "GitHub",
    deploymentTruth: "Vercel",
    conductor: "IRIS",
    verification: "VERA",
    organisationalMemory: "SharePoint"
  }
} as const;

export type OrviaBrandSystem = typeof brandSystem;
