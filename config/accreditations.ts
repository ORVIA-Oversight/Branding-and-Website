export const accreditationRegister = {
  company: [
    { id:"companies-house", name:"Companies House", status:"verified", detail:"ORVIA Oversight Ltd · Company No. 16123685", publicUse:true },
    { id:"ico", name:"Information Commissioner's Office", status:"verified", detail:"ICO registration ZC152311", publicUse:true },
    { id:"afc", name:"Armed Forces Covenant", status:"verified", detail:"Signatory · official record reissued to ORVIA Oversight Ltd", publicUse:true },
    { id:"ers-bronze", name:"Defence Employer Recognition Scheme", status:"verified", detail:"Bronze Award holder", publicUse:true },
    { id:"trust-a-veteran", name:"Trust A Veteran", status:"verified", detail:"Verified ORVIA profile", publicUse:true }
  ],
  future: [
    { id:"ers-silver", name:"ERS Silver", status:"aspiration", detail:"Future progression goal. Not currently awarded." },
    { id:"ers-gold", name:"ERS Gold", status:"aspiration", detail:"Long-term ambition. Not currently awarded." },
    { id:"disability-confident", name:"Disability Confident", status:"not-held", detail:"Do not display until formally achieved." },
    { id:"cyber-essentials", name:"Cyber Essentials", status:"not-held", detail:"Do not display until formally achieved." },
    { id:"living-wage", name:"Living Wage Employer", status:"not-held", detail:"Do not display until formally achieved." }
  ],
  founder: [
    { id:"skills-for-care", name:"Skills for Care Registered Manager Membership", status:"verify-current", detail:"Founder/professional credential only. Never present as company accreditation." },
    { id:"cmi", name:"Chartered Management Institute", status:"verify-exact-grade", detail:"Founder/professional credential only. Use exact verified grade/designation only." },
    { id:"qualifications", name:"Professional qualifications", status:"verify-exact-title", detail:"Founder credentials should use exact qualification title, awarding body and year once evidenced." },
    { id:"veteran", name:"British Armed Forces veteran", status:"use-now", detail:"Founder background. Keep factual and distinct from company accreditation." }
  ],
  rules: [
    "Keep company credentials separate from founder and professional credentials.",
    "Never state that ORVIA is accredited by an organisation when the credential belongs to an individual.",
    "Never display Silver or Gold artwork before formal award.",
    "Never recolour or recreate third-party accreditation artwork unless the rights holder expressly permits it.",
    "Use verifiable links and provenance rather than badge clutter."
  ]
} as const;
