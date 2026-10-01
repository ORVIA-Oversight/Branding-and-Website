export type SiteMode = "orvia-estate" | "orvia-web-client";

export type CommercialRoute =
  | { type:"buy"; label:string; href:string; priceLabel?:string }
  | { type:"quote"; label:string; href:string }
  | { type:"book"; label:string; href:string }
  | { type:"contact"; label:string; href:string };

export type StoryBeat = {
  id:string;
  title:string;
  purpose:string;
  evidence?:string[];
  mustInclude?:string[];
  mustAvoid?:string[];
};

export type SiteBrief = {
  id:string;
  mode:SiteMode;

  identity:{
    organisationName:string;
    legalName?:string;
    systemName?:string;
    systemIcon?:string;
    parentOrganisation?:string;
    primaryColour?:string;
    accentColours?:string[];
    approvedLogoSrc?:string;
    approvedIconSrc?:string;
  };

  story:{
    oneSentence:string;
    origin:string;
    problem:string;
    consequence:string;
    insight:string;
    response:string;
    outcome:string;
    humanMeaning:string;
    founderOrOwnerVoice?:string;
    closingPromise:string;
  };

  audience:{
    primary:string[];
    secondary?:string[];
    whatTheyAreWorriedAbout:string[];
    whatTheyNeedToUnderstand:string[];
    whatTheyNeedToDoNext:string[];
  };

  boundaries:{
    mustDo:string[];
    mustNotDo:string[];
    claimsRequiringEvidence?:string[];
    legalOrRegulatoryBoundaries?:string[];
    tone?:string[];
  };

  offer:{
    services:{
      name:string;
      summary:string;
      whoFor:string;
      outcome:string;
      iconKey?:string;
      imageSlot?:string;
      commercialRoute?:CommercialRoute;
    }[];
    freeTools?:{
      name:string;
      summary:string;
      href:string;
    }[];
  };

  proof:{
    verifiedFacts:string[];
    trustSignals?:string[];
    approvedCaseStudies?:{
      title:string;
      summary:string;
      status:"live"|"demonstration";
      href:string;
    }[];
    socialLinks?:{
      label:string;
      href:string;
    }[];
  };

  media:{
    hero:{
      type:"image"|"video";
      src?:string;
      poster?:string;
      alt:string;
    };
    founderFilm?:string;
    explainerFilm?:string;
    shortFilms?:string[];
    approvedImages?:string[];
  };

  conversion:{
    primary:CommercialRoute;
    secondary?:CommercialRoute;
    onboardingDestination?:string;
    leadSourceKey?:string;
    owner?:string;
    sla?:string;
  };

  pages:{
    slug:string;
    title:string;
    purpose:string;
    required?:boolean;
  }[];

  storyboard?:StoryBeat[];
};

export const defaultOrviaBoundaries = {
  mustDo:[
    "Keep the human visible at the beginning and end",
    "Separate evidence, interpretation and action",
    "Use approved master identity assets only",
    "Make the commercial next step obvious",
    "Use plain UK English",
    "Preserve accessible contrast, keyboard access and mobile behaviour"
  ],
  mustNotDo:[
    "Invent clients, outcomes, accreditations, integrations or statistics",
    "Use AI-generated logos or unapproved brand marks",
    "Present AI as the final authority for safeguarding, clinical, culpability or other consequential judgement",
    "Use military, surveillance, cyberpunk or generic AI imagery as the default visual language",
    "Add decorative sections that do not help the user understand, trust or act"
  ]
} as const;
