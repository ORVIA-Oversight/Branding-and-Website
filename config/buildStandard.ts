export const websiteBuildStandard = {
  version:"1.1.0",
  principle:"A new ORVIA website is an operating surface, not an isolated marketing page.",
  customerUxDoctrine:{
    hierarchy:"ANSWER FIRST → DETAIL SECOND → EVIDENCE THIRD",
    philosophy:"Depth must be available, not imposed.",
    firstTenSeconds:[
      "What is this?",
      "Is this for me?",
      "What can it help with?",
      "What do I do next?"
    ],
    patterns:[
      "Public/company sites are intent-first.",
      "Product sites are problem → outcome → price/scope → start.",
      "Customer applications are task-first.",
      "Internal applications are role, authority and evidence-first."
    ]
  },
  mandatoryConnections:[
    "Brand registry",
    "Commercial registry",
    "IRIS workflow",
    "Sales lifecycle",
    "Google Search Console",
    "GA4 or approved analytics",
    "SEO-01 daily discovery review",
    "Social attribution / campaign tracking",
    "Customer access or onboarding destination where applicable",
    "GitHub repository",
    "Vercel deployment",
    "Canonical domain"
  ],
  inheritedControls:[
    "ORVIA parent identity",
    "product colour family",
    "canonical header",
    "canonical light footer",
    "task-appropriate navigation architecture",
    "trust layer",
    "founder story source",
    "ORVIA Method",
    "accessibility rules",
    "legal footer",
    "commercial completion gate",
    "SEO release gate",
    "sales release gate",
    "case-study publication boundary",
    "lean UX gate"
  ],
  leanUxGate:{
    failureState:"LEAN_UX_GATE_FAILED",
    passRequires:[
      "A first-time user can identify what the service is within 5–10 seconds.",
      "The intended audience or relevance is immediately understandable.",
      "One primary next action is obvious.",
      "The user does not need to understand IRIS, HIVE, VITA, VERA or internal ORVIA architecture to proceed.",
      "Distress-sensitive routes use the distress-safe pattern where applicable.",
      "Depth and governance detail remain available through progressive disclosure or deeper pages.",
      "Mobile users can reach the primary action without navigating multi-level architecture.",
      "No build notes, placeholder copy or internal-only controls are exposed publicly."
    ]
  },
  releaseEvidence:[
    "domain resolves",
    "repository mapped",
    "deployment mapped",
    "all navigation links tested",
    "all CTAs tested",
    "lean UX gate passed",
    "commercial route tested",
    "IRIS workflow creation tested",
    "owner and timer tested",
    "onboarding destination tested",
    "GSC connection verified or explicitly blocked",
    "analytics connection verified or explicitly blocked",
    "sitemap and robots verified",
    "canonical URLs verified",
    "structured metadata verified",
    "mobile and accessibility checks passed",
    "rollback point recorded"
  ],
  states:["draft","configured","tested","verified","live","degraded","blocked"] as const
} as const;
