export const ORVIA_BRAND_V3 = {
  version: "3.0",
  effectiveDate: "2026-08-26",
  source: "ORVIA Brand Guidelines v3.0 LIVE",
  colours: {
    navy: "#0B2450",
    warmWhite: "#FAF7F2",
    gold: "#EAAA00",
    teal: "#2B929D",
    purple: "#82418F",
    orange: "#E74612",
    ink: "#101923",
    slate: "#516274"
  }
} as const;

export type PaletteId =
  | "master"
  | "evidence-teal"
  | "decision-gold"
  | "insight-purple"
  | "action-orange"
  | "neutral-evidence"
  | "human-warm";

export const brandPalettes = {
  master:{id:"master",name:"ORVIA Master",purpose:"Corporate authority, trust, governance and parent-brand surfaces",primary:"#0B2450",secondary:"#2B929D",accent:"#EAAA00",background:"#FAF7F2",soft:"#F3F6F8",text:"#101923"},
  "evidence-teal":{id:"evidence-teal",name:"Evidence Teal",purpose:"Evidence, observation, assurance, communication and structured review",primary:"#2B929D",secondary:"#0B2450",accent:"#EAAA00",background:"#FAF7F2",soft:"#EEF7F7",text:"#101923"},
  "decision-gold":{id:"decision-gold",name:"Decision Gold",purpose:"Decision points, thresholds, commercial choice and controlled action",primary:"#0B2450",secondary:"#EAAA00",accent:"#E74612",background:"#FAF7F2",soft:"#FFF8E8",text:"#101923"},
  "insight-purple":{id:"insight-purple",name:"Insight Purple",purpose:"Interpretation, reflection, memory and specialist insight",primary:"#82418F",secondary:"#0B2450",accent:"#EAAA00",background:"#FAF7F2",soft:"#F7EFF8",text:"#101923"},
  "action-orange":{id:"action-orange",name:"Action Orange",purpose:"Digital delivery, launch, practical action and high-energy commercial surfaces",primary:"#0B2450",secondary:"#E74612",accent:"#2B929D",background:"#FAF7F2",soft:"#FFF1EC",text:"#101923"},
  "neutral-evidence":{id:"neutral-evidence",name:"Neutral Evidence",purpose:"Formal evidence, chronology, preparation, challenge and restrained professional review",primary:"#516274",secondary:"#0B2450",accent:"#EAAA00",background:"#FAF7F2",soft:"#F1F4F6",text:"#101923"},
  "human-warm":{id:"human-warm",name:"Human Warm",purpose:"Family, community, inclusion, memory and human-centred public-interest work",primary:"#82418F",secondary:"#E74612",accent:"#EAAA00",background:"#FAF7F2",soft:"#FBF3EE",text:"#101923"}
} as const;

export const currentProductPaletteAllocation = {
  oversight:"master",
  brand:"master",
  voice:"evidence-teal",
  threshold:"decision-gold",
  mia:"human-warm",
  witness:"neutral-evidence",
  perspective:"evidence-teal",
  web:"action-orange",
  business:"decision-gold",
  security:"master",
  overwatch:"master",
  command:"master",
  iris:"evidence-teal",
  academy:"neutral-evidence",
  foundation:"human-warm"
} satisfies Record<string, PaletteId>;

export const paletteAllocationRule = {
  principle:"Allocate from the controlled palette library; do not invent a new palette for each build.",
  process:[
    "Define the product purpose, audience, emotional tone and risk level.",
    "Select the closest controlled palette by meaning, not personal preference.",
    "Retain the ORVIA master logo, navy/warm-white structure, typography, shared header/footer and accessibility rules.",
    "Use the allocated palette for accents, diagrams, icons, controls and selected media treatments only.",
    "Create a new palette only when no controlled family can express the proposition and founder approval is recorded."
  ],
  prohibited:[
    "AI-invented or recoloured ORVIA master marks",
    "standalone mini-brands without approval",
    "dark cyber, surveillance or military styling as a default",
    "colour as the only carrier of meaning",
    "uncontrolled per-page palette changes"
  ]
} as const;
