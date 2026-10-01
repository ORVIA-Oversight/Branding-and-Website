export const contactAndSales = {
  phoneDisplay: "0330 043 3703",
  phoneE164: "+443300433703",
  whatsappHref: "https://wa.me/443300433703",
  generalEmail: "hello@orvia.org.uk",
  contactHref: "/contact",
  leadDefaults: {
    source: "website",
    owner: "sales-unassigned",
    nextAction: "human-review",
    status: "lead"
  },
  journey: [
    "UNDERSTAND",
    "TRUST",
    "PRICE_OR_QUOTE",
    "BUY_OR_START",
    "ONBOARD",
    "DELIVERY",
    "FOLLOW_UP",
    "RETENTION_OR_EXPANSION"
  ],
  releaseGate: "A commercial route is not complete until contact, attribution, owner, price-or-quote, purchase-or-start, onboarding and follow-up have been verified end to end."
} as const;
