export const practitionerCaseworkGate = {
  failureState:"PRACTITIONER_CASEWORK_NOT_AUTHORISED",
  principle:"No person may undertake ORVIA casework until the mandatory ORVIA practitioner training gate has been completed and recorded.",
  mandatoryModules:[
    {
      id:"orvia-safeguarding",
      title:"ORVIA Safeguarding",
      outcome:"Understand ORVIA's human-protection principles, safeguarding boundaries, escalation discipline, precautionary protection and the separation of protection from inquiry."
    },
    {
      id:"orvia-assurance",
      title:"ORVIA Assurance",
      outcome:"Understand assurance, governance, ownership, verification, effectiveness, sustained change and how ORVIA distinguishes completion from evidence that a fix worked."
    },
    {
      id:"evidence-review",
      title:"Evidence Review",
      outcome:"Preserve provenance, separate fact from inference, identify missing evidence, understand chronology, contradictions, dissent and the limits of what the evidence can support."
    },
    {
      id:"hypothesis-study",
      title:"Hypothesis Study & Alternative Explanations",
      outcome:"Build and test competing hypotheses, identify discriminating evidence, seek disconfirming evidence and avoid premature closure."
    }
  ],
  authorisationRequires:[
    "mandatory modules completed",
    "assessment evidence recorded",
    "professional boundaries understood",
    "role-specific competence confirmed where required",
    "supervision route assigned",
    "casework authority recorded by ORVIA"
  ],
  rule:"Qualifications, prior experience, DBS status or professional background may support eligibility, but none bypass the ORVIA casework training and authorisation gate."
} as const;
