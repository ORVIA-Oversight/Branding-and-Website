export type CommercialStatus = "published" | "quote" | "hold";

export type EstateProduct = {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  repo: string;
  accent: string;
  mark: string;
  proposition: string;
  audience: string[];
  services: string[];
  pricing: {
    status: CommercialStatus;
    source?: string;
    items?: {name:string; price:string; note?:string}[];
  };
  primaryCta: string;
  explainer: string;
};

export const estateProducts: EstateProduct[] = [
  {
    id:"oversight", name:"ORVIA Oversight", shortName:"Oversight", domain:"https://orvia.org.uk",
    repo:"ORVIA-Oversight/orvia-public-website", accent:"#0B2D5C", mark:"O",
    proposition:"Evidence, accountability and assurance for organisations that need to understand what is really happening and improve it.",
    audience:["Boards","Executives","Governance teams","Commissioners","Providers"],
    services:["Independent oversight","Evidence-led review","Governance and assurance","System improvement","Human-led challenge"],
    pricing:{status:"quote"}, primaryCta:"Talk to ORVIA",
    explainer:"The corporate parent and assurance authority for the ORVIA estate."
  },
  {
    id:"voice", name:"ORVIA Voice", shortName:"Voice", domain:"https://voice.orvia.org.uk",
    repo:"ORVIA-Oversight/orvia-voice", accent:"#2F7F86", mark:"R",
    proposition:"Capture, route and respond to calls and enquiries without losing the human context.",
    audience:["Trades","SMEs","Health and care","Service businesses","Operational teams"],
    services:["Inbound call capture","Routing","Appointment and enquiry handling","Out-of-hours support","Outbound workflows"],
    pricing:{status:"published",source:"COMMERCIAL_PRICING_CONTROL.md",items:[
      {name:"Voice Essential",price:"from £495/month"},
      {name:"Voice Business",price:"from £695/month"},
      {name:"Voice Growth",price:"from £995/month"},
      {name:"Voice Professional",price:"from £1,495/month"},
      {name:"Voice Command",price:"from £2,495/month"},
      {name:"Enterprise",price:"Bespoke"}]},
    primaryCta:"Start with Voice",
    explainer:"The communications front door: capture first, route clearly, preserve the enquiry and keep accountability visible."
  },
  {
    id:"mia", name:"MIA", shortName:"MIA", domain:"https://mia.orvia.org.uk",
    repo:"ORVIA-Oversight/orvia-mia", accent:"#6A2E7C", mark:"I",
    proposition:"Preserve the memory, the original and the person's right to their own story.",
    audience:["Families","People with life-limiting illness","People living with dementia","Veterans","People preserving family history"],
    services:["Memory spaces","Original media preservation","Life stories","Timeline","Messages for later","Archive export"],
    pricing:{status:"hold",source:"No controlling public pricing file in current repository"},
    primaryCta:"Explore MIA",
    explainer:"A human-centred memory and legacy service built around provenance, consent and original material."
  },
  {
    id:"witness", name:"ORVIA Witness Room", shortName:"Witness Room", domain:"https://witness.orvia.org.uk",
    repo:"ORVIA-Oversight/orvia-witness-room", accent:"#516274", mark:"W",
    proposition:"Face the room. Find the gaps. Own your account.",
    audience:["Individuals","Families","Professionals","People preparing for formal scrutiny"],
    services:["Evidence organisation","Chronology","Controlled perspectives","Crucible challenge","Red Team review","Preparation report"],
    pricing:{status:"hold",source:"Commercial pricing not controlled in current repository"},
    primaryCta:"Enter the Witness Room",
    explainer:"Structured preparation and perspective testing without automated findings of guilt, safeguarding or clinical responsibility."
  },
  {
    id:"web", name:"ORVIA Web", shortName:"Web", domain:"https://web.orvia.org.uk",
    repo:"ORVIA-Oversight/web", accent:"#E34B23", mark:"A",
    proposition:"Fast, governed websites and digital delivery for organisations that need to get online properly.",
    audience:["Trades","Creatives","Charities","Small independents"],
    services:["Website build","Managed hosting","Domain connection","SEO basics","Payment integration","Optional Voice integration"],
    pricing:{status:"hold",source:"Current repository does not contain a controlling pricing document"},
    primaryCta:"Start my website",
    explainer:"A rapid-build commercial web service using the same governed ORVIA delivery standards."
  },
  {
    id:"business", name:"ORVIA Business", shortName:"Business", domain:"https://business.orvia.org.uk",
    repo:"ORVIA-Oversight/Business-in-a-Box", accent:"#F0A51A", mark:"B",
    proposition:"Practical operating infrastructure for smaller organisations that need more control without building an enterprise back office.",
    audience:["Small businesses","Owner-managed organisations","Growing teams"],
    services:["Business operating model","Governance","Processes","Digital operating support","Commercial controls"],
    pricing:{status:"quote"}, primaryCta:"Talk about your business",
    explainer:"A controlled business-in-a-box proposition that brings ORVIA operating disciplines into smaller organisations."
  },
  {
    id:"security", name:"ORVIA Security & Intelligence", shortName:"Security & Intelligence", domain:"https://security.orvia.org.uk",
    repo:"ORVIA-Oversight/Security-and-Intelligence", accent:"#2F7F86", mark:"S",
    proposition:"Human-led intelligence, investigations and digital evidence services with explicit governance boundaries.",
    audience:["Organisations","Governance teams","Legal and assurance teams","Risk owners"],
    services:["Intelligence","Investigations","Digital evidence and OSINT","Monitoring and risk","IRIS intelligence","Reports"],
    pricing:{status:"quote"}, primaryCta:"Discuss a requirement",
    explainer:"A governed security and intelligence service using ORVIA evidence, verification and human-review disciplines."
  },
  {
    id:"overwatch", name:"ORVIA Overwatch", shortName:"Overwatch", domain:"https://orvia-overwatch.orvia.org.uk",
    repo:"ORVIA-Oversight/orvia-overwatch", accent:"#0B2D5C", mark:"O",
    proposition:"Operational sensing, visibility and structured awareness for complex environments.",
    audience:["Operational teams","Event organisers","Command teams"],
    services:["Sense","Operational visibility","Structured reporting","Coordination support"],
    pricing:{status:"quote"}, primaryCta:"Explore Overwatch",
    explainer:"A specialist operational layer within the ORVIA estate; commercial claims remain bounded to what the current product actually supports."
  }
];

export const estateTemplateRules = {
  parentBrand:"ORVIA Oversight",
  headerLayout:"master-logo | product-icon + product-name | navigation | primary CTA",
  sections:[
    "Product-specific hero","Who it is for","What it does","How it works",
    "Commercial offer / pricing","Explainer media","Evidence / trust",
    "Related ORVIA products","Contact / conversion"
  ],
  colours:["#0B2D5C","#2F7F86","#F0A51A","#6A2E7C","#E34B23","#FAF7F2"],
  rule:"Every site uses the ORVIA design system. Product difference comes from approved accent, icon, imagery, proposition, audience, services and commercial content — not from inventing a new visual language."
} as const;
