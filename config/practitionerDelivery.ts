export const practitionerDeliveryModel = {
  founder:{
    label:"Founder-led intervention",
    fromExVat:950,
    vatNote:"plus VAT",
    positioning:"Direct access to John McGill for complex, high-consequence, cross-functional or stuck problems where the value is the breadth of operational judgement brought to the room.",
    value:[
      "Founder/operator experience building and scaling regulated services",
      "Cross-sector judgement across care, healthcare, local government, security and operational delivery",
      "Safeguarding, governance and regulatory assurance perspective",
      "Commercial and systems thinking — including when not to buy new software",
      "Calm decision-making in complex and high-pressure environments",
      "Ability to move between strategy, frontline reality and implementation",
      "Independent challenge without losing sight of the people affected",
      "A practical bias toward finding a workable route, not merely describing the problem"
    ]
  },
  practitioner:{
    label:"ORVIA practitioner-led casework",
    fromExVat:520,
    vatNote:"plus VAT",
    principle:"Practitioners augment the client's capability with disciplined observation, evidence review, safeguarding awareness, governance thinking, systems analysis and implementation support."
  },
  qualities:[
    ["Professional curiosity","Notice what does not fit and ask the next useful question without turning suspicion into fact."],
    ["Evidence discipline","Separate source evidence, reported information, inference, assumption, missing material and unresolved disagreement."],
    ["Systems thinking","Look beyond the immediate symptom to the process, ownership, incentives, technology and controls around it."],
    ["Safeguarding awareness","Keep protection, dignity, escalation and human impact visible while respecting role boundaries."],
    ["Governance judgement","Understand ownership, delegated authority, assurance, escalation, Board visibility and decision trails."],
    ["Regulatory literacy","Work against the relevant regulatory or inspection framework where within scope, without pretending to be the regulator."],
    ["Hypothesis testing","Hold credible alternative explanations and look for evidence that can confirm or disconfirm them."],
    ["Operational practicality","Turn findings into actions that can actually be delivered by the people and resources available."],
    ["Calm under pressure","Prioritise, communicate and maintain decision discipline when the environment is busy, uncertain or high consequence."],
    ["Cross-functional working","Work with leaders, frontline staff, safeguarding, quality, HR, legal, technical and external partners without creating another silo."],
    ["Commercial proportion","Recommend the simplest justified route — process change, existing software, third-party, white-label or ORVIA — rather than forcing a product."],
    ["Verification mindset","Return to the intervention and test whether the fix was implemented, effective and sustained."]
  ],
  packages:[
    {
      name:"Discovery & Diagnostic",
      purpose:"When the client knows something is wrong but cannot yet define the real problem.",
      deliverables:["problem map","evidence and gap map","stakeholder/ownership map","initial hypotheses","priority actions","recommended route"]
    },
    {
      name:"Safeguarding & Assurance",
      purpose:"For safeguarding practice, escalation, protection, evidence handling and assurance concerns.",
      deliverables:["chronology and evidence review","protection/inquiry separation","decision-trail review","missing-evidence list","assurance actions","recheck plan"]
    },
    {
      name:"Governance & Regulatory Readiness",
      purpose:"For services preparing for scrutiny or strengthening governance against applicable standards.",
      deliverables:["governance map","control/evidence review","inspection-readiness gaps","owner/action plan","Board or leadership summary","verification points"]
    },
    {
      name:"Operational Stabilisation",
      purpose:"For services that are drifting, overloaded, underperforming or repeatedly firefighting.",
      deliverables:["operating-reality review","priority/risk map","role and handover fixes","resource/process recommendations","stabilisation actions","30/60/90-day verification"]
    },
    {
      name:"Systems & Process Fix",
      purpose:"For spreadsheet-heavy, duplicated, manual or disconnected workflows.",
      deliverables:["current-process map","duplication/friction analysis","requirements definition","existing-system fit check","options appraisal","implementation and verification plan"]
    },
    {
      name:"Evidence & Incident Review",
      purpose:"For incidents, complaints, disputed narratives or consequential decisions requiring disciplined evidence handling.",
      deliverables:["source/evidence map","chronology","fact/inference separation","alternative hypotheses","contradiction/missing-evidence review","human review brief"]
    }
  ]
} as const;
