export type ServiceGuideId =
  | "voice"
  | "witness-room"
  | "perspective-room"
  | "web"
  | "mia"
  | "threshold";

export type ServiceGuide = {
  id: ServiceGuideId;
  name: string;
  strapline: string;
  accent: string;
  serviceUrl: string;
  summary: string;
  audiences: string[];
  helps: string[];
  journey: string[];
  boundaries: string;
  availabilityNote: string;
};

export const serviceGuides: Record<ServiceGuideId, ServiceGuide> = {
  voice: {
    id:"voice",
    name:"ORVIA Voice",
    strapline:"Never lose the enquiry just because you could not answer the phone.",
    accent:"#2B929D",
    serviceUrl:"https://voice.orvia.org.uk",
    summary:"ORVIA Voice provides structured call capture, routing and follow-up for organisations that cannot always answer live. It is designed to turn a missed call into an owned action rather than another voicemail that disappears.",
    audiences:["Trades and field teams","Small and growing businesses","Care and service organisations","Teams with out-of-hours or overflow calls","Organisations needing a consistent first response"],
    helps:["Capture the caller and the reason for contact","Record the information the service needs at first contact","Route or escalate according to agreed service rules","Create a clear follow-up responsibility","Support consistent customer handling when the team is busy or unavailable"],
    journey:["A caller reaches the service number.","ORVIA Voice gathers the required information in a calm, structured way.","The enquiry is passed into the agreed follow-up route.","A person owns the next action.","The organisation can review whether the enquiry was completed rather than simply received."],
    boundaries:"ORVIA Voice is a communications and workflow-support service. It does not replace emergency services, clinical judgement, safeguarding decisions or professional advice. Where a situation requires a human or emergency response, the agreed escalation route applies.",
    availabilityNote:"View current options and start with the live ORVIA Voice service page."
  },
  "witness-room": {
    id:"witness-room",
    name:"ORVIA Witness Room",
    strapline:"Bring the evidence together. Build the chronology. Find the gaps before somebody else does.",
    accent:"#516274",
    serviceUrl:"https://witness.orvia.org.uk",
    summary:"Witness Room is a structured preparation environment for people dealing with complex evidence, disputed accounts, professional scrutiny or high-stakes meetings. It helps organise the record, test the account and expose gaps without pretending to be a court, solicitor or decision-maker.",
    audiences:["People preparing for formal meetings or reviews","Professionals working through complex records","Families organising a difficult chronology","Managers facing investigation or scrutiny","Anyone who needs to test the strength and gaps in an account"],
    helps:["Organise source evidence into a controlled chronology","Separate what the record shows from what people say","Highlight missing, contradictory or unresolved material","Support structured challenge and alternative explanations","Produce a clearer preparation position for human review"],
    journey:["Add the relevant records and source material.","Build the sequence of events and identify key issues.","Test the account from controlled perspectives.","Expose gaps, contradictions and unresolved questions.","Use the preparation output to support the next human conversation or professional step."],
    boundaries:"Witness Room does not determine guilt, liability, safeguarding outcomes, legal merits or clinical conclusions. It supports preparation and structured review. Formal legal, regulatory, clinical or statutory decisions remain with the appropriate authorised professional or body.",
    availabilityNote:"Use the live Witness Room page for the current service route, pricing and onboarding status."
  },
  "perspective-room": {
    id:"perspective-room",
    name:"ORVIA Perspective Room",
    strapline:"Understand how someone reasons, adapts and responds - not just how polished their CV looks.",
    accent:"#2B929D",
    serviceUrl:"/perspective-room",
    summary:"Perspective Room is being developed as a human-reasoning and evidence-led assessment approach for recruitment and development, particularly where judgement, safeguarding awareness, communication and reflection matter.",
    audiences:["Health and social care employers","Safeguarding-sensitive services","Managers recruiting into responsible roles","Organisations seeking richer evidence than a CV alone","Candidates who want their reasoning and potential to be seen fairly"],
    helps:["Use structured scenarios rather than keyword matching alone","Look at reasoning, evidence use, reflection and adaptation","Allow challenge, reconsideration and learning to be visible","Keep final recruitment and employment decisions human","Create a richer evidence base for discussion with the candidate"],
    journey:["The candidate is given a structured situation or task.","Their reasoning and response are captured.","They can reflect, revise and explain their thinking.","The evidence is reviewed by authorised humans.","The employer uses the assessment as one input alongside the rest of the recruitment process."],
    boundaries:"Perspective Room is not an automated hiring decision-maker, psychological diagnosis or substitute for lawful recruitment practice. Protected characteristics and private information must not be inferred. Employment decisions remain with the employer.",
    availabilityNote:"This proposition is in controlled development. Use the live information page for current availability and discovery routes."
  },
  web: {
    id:"web",
    name:"ORVIA Web",
    strapline:"A website should not just look finished. It should help a customer understand, trust and act.",
    accent:"#E74612",
    serviceUrl:"https://web.orvia.org.uk",
    summary:"ORVIA Web provides governed website and digital-delivery support for organisations that need a clear commercial presence without building a large internal web function. The emphasis is on usable pages, real next actions and managed delivery.",
    audiences:["Trades and local service businesses","Creatives and independent professionals","Charities and community organisations","Small businesses that need to get online quickly","Teams needing a managed website rather than another technical project"],
    helps:["Create clear, mobile-ready customer pages","Connect real contact, quote or purchase routes","Support domain connection and managed hosting options","Build SEO and basic content structure into the release","Check that the site works as a commercial journey, not just a visual mock-up"],
    journey:["Agree the proposition, audience and commercial route.","Build the approved page structure and content.","Connect the required contact, payment or onboarding actions.","Test desktop, mobile, links and release controls.","Publish and manage the site according to the agreed service model."],
    boundaries:"ORVIA Web does not promise search rankings, sales volumes or business outcomes. Any payment, analytics, domain or third-party integration depends on the relevant provider and verified configuration.",
    availabilityNote:"See the live ORVIA Web page for current packages, scope and start route."
  },
  mia: {
    id:"mia",
    name:"MIA",
    strapline:"Preserve the person, the voice and the memories that matter.",
    accent:"#82418F",
    serviceUrl:"https://mia.orvia.org.uk",
    summary:"MIA is ORVIA's human legacy and memory-preservation service. It is designed to help people and families preserve stories, photographs, voice, video and messages in a controlled archive that remains centred on the person whose life is being recorded.",
    audiences:["Families wanting to preserve life stories","People living with life-limiting illness","Families affected by dementia or memory loss","Veterans and others with important lived histories","People who want to leave messages, stories or memories for the future"],
    helps:["Capture stories in the person's own words","Preserve photographs, voice, video and documents","Support timelines and organised family archives","Allow controlled inclusion and exclusion of material","Support messages for later and remembrance outputs where agreed"],
    journey:["Agree what the person wants to preserve and who may access it.","Capture stories, files and memories at a suitable pace.","Organise the material without rewriting the person's life.","Review permissions, exclusions and family considerations.","Create the agreed archive or memory output with export and retention choices."],
    boundaries:"MIA is a memory and archive service, not therapy, bereavement counselling, medical care or legal estate planning. Consent, family permissions and privacy choices must be respected throughout.",
    availabilityNote:"MIA is operating through controlled pilots and service development. Check the live page for current availability."
  },
  threshold: {
    id:"threshold",
    name:"ORVIA Threshold",
    strapline:"See reality first. Evidence before commitment.",
    accent:"#EAAA00",
    serviceUrl:"https://threshold.orvia.org.uk",
    summary:"ORVIA Threshold supports structured concern review and decision preparation where an issue is serious enough to need disciplined evidence handling, but the answer should not be assumed before the record is tested.",
    audiences:["Providers and service leaders","Commissioners and governance teams","Safeguarding and quality professionals","Organisations facing a material concern or disputed account","Teams needing an independent evidence-led review route"],
    helps:["Clarify the concern and the review question","Preserve evidence and competing explanations","Separate protection action from evidence inquiry where required","Test gaps, context, chronology and alternative hypotheses","Support proportionate human-owned action and later verification"],
    journey:["Define the concern and what needs to be understood.","Preserve the relevant evidence and immediate protective actions.","Review chronology, context, accounts and missing material.","Challenge the emerging explanation before closure.","Agree proportionate actions and the evidence required to verify improvement."],
    boundaries:"Threshold is independent and non-statutory. It is not a regulator, court, emergency service or substitute for statutory safeguarding, clinical or legal processes. Urgent risk must still be escalated through the appropriate formal route.",
    availabilityNote:"Use the live Threshold page to discuss scope and the appropriate next step."
  }
};

export const serviceGuideOrder: ServiceGuideId[] = ["voice","witness-room","perspective-room","web","mia","threshold"];
