export const websiteBuildStandard = {
  version:"1.4.0",
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
  visualStorytelling:{
    pageHeroStandard:[
      "Every major public page opens with a full-bleed cinematic hero image.",
      "Hero copy overlays the image using a controlled ORVIA gradient for readability.",
      "Hero content is limited to eyebrow, large statement, short lead, primary CTA and optional proof line.",
      "Each page uses a context-specific image; do not reuse one generic visual across the estate.",
      "Important visual subjects should be composed away from primary text placement where possible."
    ],
    productExplainerStandard:[
      "Retain strong visual product-explainer imagery below the hero; do not replace it with text-only cards.",
      "Use branded scenario imagery to explain what the product does, who is involved and what changes as a result.",
      "Product imagery should be designed as reusable storyboards for short-form video and motion explainers.",
      "Where useful, show people, evidence, workflow state, callsigns, interfaces or operational context rather than abstract decoration.",
      "Every image must have a clear communication purpose and should reduce the amount of copy needed to understand the product."
    ],
    mediaReuse:[
      "Approved product explainer stills should be reusable as keyframes, posters and scene references for 10-second and longer explainer films.",
      "Hero photography and product-explainer imagery serve different purposes and should both be retained.",
      "Product-specific accent, logo and visual cues must remain consistent across stills, video and page UI."
    ]
  },
  sharedPlatformTemplate:{
    principle:"Build the controlled shell once; each ORVIA proposition ports in its own content, media, files and working connections.",
    inheritedSlots:[
      "full-bleed hero image or hero video",
      "overlay proposition and primary action",
      "human/evidence/assurance icon explainers",
      "scenario-led explainer imagery",
      "short-form video slots",
      "trust and proof assets",
      "files and downloads",
      "commercial route",
      "customer/onboarding destination",
      "IRIS workflow ownership",
      "analytics, SEO and release verification"
    ],
    rule:"Empty areas are controlled content/media slots, not invitations to redesign the platform.",
    portingModel:"Replace proposition-specific content and approved assets while preserving the shared shell, controls and interaction patterns."
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
    "controlled v3.0 product palette allocation",
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
    "lean UX gate",
    "full-bleed page hero standard",
    "product visual storytelling standard",
    "shared platform template and controlled content/media slots",
    "public exposure and employer-brand boundary",
    "official product-logo and trust-badge asset standard",
    "service information / explainer navigation standard",
    "commercial Buy / Start / Quote route standard",
    "verified cross-service navigation",
    "WEB-QA-01 100% release gate"
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
      "No build notes, placeholder copy or internal-only controls are exposed publicly.",
      "Major public pages use the approved full-bleed hero pattern unless a documented exception applies.",
      "Product pages retain visual explainer imagery that communicates the product without relying on long copy.",
      "Public copy explains outcomes, evidence, culture and customer value without exposing proprietary engineering, prompts, orchestration, security topology or reproducible internal operating procedures.",
      "Employer-facing content makes the standard, meaning of the work, learning culture and human accountability clear without inventing benefits, offices, customers or career guarantees.",
      "The allocated palette comes from the controlled Brand Palette Library; new builds do not invent ad hoc palettes.",
      "Service cards use approved product identity assets where available; generic placeholder icons are not the finished state.",
      "Trust badges use the official supplied artwork only and are not recreated or approximated.",
      "A visitor can move from service overview → useful information / explainer → commercial route → back to all services without dead ends.",
      "Fixed-price offers expose a real Buy / Start route only when checkout is verified; scoped offers use a real Discovery / Quote route.",
      "Unfinished service websites are not linked from the public master until that destination has passed the release gate."
    ]
  },
  releaseEvidence:[
    "domain resolves",
    "repository mapped",
    "deployment mapped",
    "all navigation links tested",
    "all CTAs tested",
    "lean UX gate passed",
    "page hero imagery verified",
    "product explainer imagery verified",
    "approved product logos / service marks verified",
    "Trust A Veteran, Armed Forces Covenant and ERS Bronze official assets verified where shown",
    "canonical footer visible and complete",
    "service-to-service previous / next / all-services navigation tested",
    "useful information / explainer page and printable or downloadable copy tested",
    "service information route verified where applicable",
    "public navigation checked for internal-only architecture exposure",
    "commercial route tested",
    "fixed-price Buy / Start checkout verified where applicable",
    "scoped-service Discovery / Quote route verified where applicable",
    "no unfinished service-site URL exposed",
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
