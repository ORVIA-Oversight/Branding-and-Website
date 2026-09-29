export type SalesStage =
  | "visitor"
  | "lead"
  | "qualified"
  | "proposal"
  | "checkout"
  | "customer"
  | "onboarding"
  | "active"
  | "review"
  | "renewal"
  | "expansion"
  | "lost";

export const salesOperatingModel = {
  conductor:"IRIS",
  principle:"Every commercial interaction has a source, owner, next action, timer and measurable outcome.",
  stages:[
    "visitor","lead","qualified","proposal","checkout","customer","onboarding","active","review","renewal","expansion"
  ] as SalesStage[],
  requiredLeadFields:[
    "source",
    "product_interest",
    "landing_page",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "consent_or_lawful_basis",
    "owner",
    "first_contact",
    "next_action",
    "follow_up_at",
    "status",
    "value",
    "proposal_or_payment_state",
    "customer_id",
    "conversion_reason",
    "loss_reason"
  ],
  rules:[
    "No lead may exist without an owner or next action.",
    "No public CTA may exist without a defined resulting system action.",
    "Fixed offers may use Buy now / Start now only when payment, onboarding and fulfilment are verified.",
    "Scoped services use Book discovery / Request proposal and enter IRIS immediately.",
    "Sales attribution must persist from first touch through customer and revenue event.",
    "Follow-up and renewal timers are mandatory for active commercial relationships."
  ]
} as const;

export const salesReleaseGate = {
  failureState:"SALES_PATH_INCOMPLETE",
  passRequires:[
    "lead capture route",
    "source attribution",
    "product interest",
    "owner assignment",
    "next action",
    "follow-up timer",
    "commercial route",
    "IRIS workflow mapping",
    "onboarding destination",
    "customer workspace or service destination",
    "conversion / loss reason support"
  ]
} as const;
