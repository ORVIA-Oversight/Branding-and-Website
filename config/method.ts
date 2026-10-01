export type OrviaStageId = "O" | "R" | "V" | "I" | "A";

export type OrviaStage = {
  id: OrviaStageId;
  name: string;
  strapline: string;
  customerQuestion: string;
  description: string;
  colour: string;
  primaryProducts: readonly string[];
  sharedCapabilities: readonly string[];
};

export const orviaStages: readonly OrviaStage[] = [
  {
    id:"O",
    name:"Observe",
    strapline:"Capture reality.",
    customerQuestion:"What is happening?",
    description:"Capture the signal at source: conversations, enquiries, files, events, memories and operational activity.",
    colour:"#0B2D5C",
    primaryProducts:["ORVIA Voice / ARIA","ORVIA Overwatch","ORVIA PTT","MIA capture"],
    sharedCapabilities:["Universal Context Intake","Forms","Voice","Media intake","Operational signals"]
  },
  {
    id:"R",
    name:"Review",
    strapline:"Bring the picture together.",
    customerQuestion:"What does what we have actually show?",
    description:"Organise the record, chronology, context and competing accounts before a consequential decision or commitment.",
    colour:"#2F7F86",
    primaryProducts:["ORVIA Threshold","Witness Room","Travel Ready","Home Buyer / Seller","Evidence Readiness"],
    sharedCapabilities:["Chronology","Document review","Gap analysis","Controlled perspectives"]
  },
  {
    id:"V",
    name:"Verify",
    strapline:"Establish what can be proved.",
    customerQuestion:"Can we prove it?",
    description:"Separate evidence from assumption, show provenance, expose uncertainty and verify whether agreed action actually happened.",
    colour:"#F0A51A",
    primaryProducts:["ORVIA Assurance","Governance","Safeguarding Assurance","Brand Control"],
    sharedCapabilities:["VERA","VITA","CRUCIBLE","HIVE provenance","Red Team"]
  },
  {
    id:"I",
    name:"Interpret",
    strapline:"Turn information into understanding.",
    customerQuestion:"What does this mean?",
    description:"Interpret verified information in context without turning AI analysis into an automated consequential decision.",
    colour:"#6A2E7C",
    primaryProducts:["ORVIA Insight","Perspective Room","Security & Intelligence"],
    sharedCapabilities:["Reasoning assessment","Pattern analysis","Commercial intelligence","Decision support"]
  },
  {
    id:"A",
    name:"Act",
    strapline:"Turn understanding into progress.",
    customerQuestion:"What do we do next?",
    description:"Convert evidence and understanding into controlled implementation, commercial delivery, learning and measurable improvement.",
    colour:"#E34B23",
    primaryProducts:["ORVIA Business","ORVIA Web","ORVIA Brand","ORVIA Academy"],
    sharedCapabilities:["IRIS workflows","Sales","Web delivery","Voice deployment","AI workforce","Training"]
  }
] as const;

export const orviaMethodMap = {
  oversight:{primary:"O",secondary:["R","V","I","A"]},
  voice:{primary:"O",secondary:["A"]},
  overwatch:{primary:"O",secondary:["V","A"]},
  ptt:{primary:"O",secondary:["A"]},
  mia:{primary:"O",secondary:["R","V"]},
  threshold:{primary:"R",secondary:["V","I"]},
  witnessRoom:{primary:"R",secondary:["V","I","A"]},
  assurance:{primary:"V",secondary:["R","I"]},
  governance:{primary:"V",secondary:["R","A"]},
  safeguarding:{primary:"V",secondary:["R","A"]},
  brandControl:{primary:"V",secondary:["A"]},
  insight:{primary:"I",secondary:["R","V"]},
  perspectiveRoom:{primary:"I",secondary:["R","V"]},
  security:{primary:"I",secondary:["O","V"]},
  business:{primary:"A",secondary:["O","R","V","I"]},
  web:{primary:"A",secondary:["O","V"]},
  academy:{primary:"A",secondary:["I","V"]}
} as const;

export const methodMarkerRule =
  "Every public ORVIA product has one primary O-R-V-I-A stage. The stage appears as a restrained method marker with a plain-English explanation. Cross-stage capability may be shown secondarily, but the primary stage remains stable.";
