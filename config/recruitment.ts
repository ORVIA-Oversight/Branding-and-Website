export const recruitmentModel = {
  principles: [
    "Everybody gets a fair shot.",
    "An open door is not an easy door.",
    "We recruit for capability, not CV polish.",
    "No AI system independently hires or rejects a practitioner."
  ],
  candidateQuestion: "What can you do that your CV may not show?",
  stages: [
    {
      id: "register",
      title: "Register interest",
      description: "Tell us about your experience, capability and the direction you want to take."
    },
    {
      id: "conversation",
      title: "Initial human conversation",
      description: "A real conversation about background, motivation, boundaries and role fit."
    },
    {
      id: "reasoning",
      title: "Human reasoning assessment",
      description: "An ambiguous operational, safeguarding or evidence scenario completed without AI.",
      assesses: ["Judgement","Evidence use","Proportionality","Vulnerability awareness","Reasoning","Integrity","Recognition of uncertainty"]
    },
    {
      id: "challenge",
      title: "Challenge / problem-solving",
      description: "A scenario, puzzle, tabletop or structured exercise.",
      assesses: ["Adaptability","Collaboration","Pressure response","Missing-information awareness","Willingness to change position","Problem-solving"]
    },
    {
      id: "ai",
      title: "AI interaction assessment",
      description: "Only after the human reasoning stages. AI is assessed as assistance, never authority.",
      assesses: ["Verification","Challenge of AI output","Dependency awareness","Critical thinking","Research behaviour"]
    },
    {
      id: "human-review",
      title: "Human suitability review",
      description: "Founder or senior-human review before any progression decision.",
      assesses: ["Values","Motivation","Resilience","Conduct","Emotional suitability","Distressing-material readiness","Fit with ORVIA principles"]
    }
  ],
  postAssessment: [
    "Identity / vetting / safer recruitment",
    "ORVIA credential",
    "Training levels",
    "Supervised practice",
    "Competency sign-off",
    "Practice authority",
    "Case allocation"
  ],
  practitionerPathway: ["Discover","Test","Build","Practise","Evidence","Authorise","Develop"],
  mandatoryBoundary:
    "Where a role requires professional qualification, statutory competence, licence, clearance or regulated status, those requirements remain mandatory."
} as const;
