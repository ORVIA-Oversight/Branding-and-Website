export type CommercialMode = "fixed_price" | "scoped" | "free" | "pilot" | "non_commercial";
export type CommercialReleaseState = "draft" | "configured" | "tested" | "verified" | "live" | "degraded" | "blocked";

export type CommercialRegistryReference = {
  commercialMode: CommercialMode;
  commercialRegistryId?: string;
  allowDirectPurchase: boolean;
  requiresDiscovery: boolean;
  releaseState: CommercialReleaseState;
  releaseNote?: string;
};

export const commercialCompletionChain = [
  "Offer understood",
  "Trust established",
  "Price or scoping route clear",
  "Real CTA works",
  "Attribution captured",
  "IRIS record created",
  "Owner assigned",
  "SLA / timer started",
  "Onboarding completed",
  "Customer workspace / service delivery available",
  "Follow-up completed",
  "Renewal / expansion route available"
] as const;

export const commercialGate = {
  directive:
    "A public commercial website is not production-complete because it looks finished. It is complete only when a customer can understand the offer, take the correct real commercial action, enter a governed sales/onboarding workflow, and be tracked through to delivery and follow-up.",
  failureState:"COMMERCIAL_PATH_INCOMPLETE",
  requiredEvidence:[
    "approved_pricing_or_scoping_model",
    "functioning_cta",
    "lead_attribution",
    "workflow_template",
    "accountable_owner",
    "sla_or_timer",
    "onboarding_destination",
    "customer_access_route",
    "end_to_end_test",
    "verification_timestamp"
  ],
  rules:[
    "Fixed offer = transactional CTA backed by the controlled commercial registry.",
    "Scoped offer = Book discovery / Request proposal and immediate IRIS lead creation.",
    "No orphan CTAs. Every CTA resolves to a destination and resulting system action.",
    "Configuration alone is not verification. The path must be tested end to end.",
    "Known operational faults block direct checkout until cleared.",
    "Case studies and testimonials require classification, evidence and publication approval."
  ]
} as const;

export const commercialRegistrySchema = [
  "product_id","offer_id","offer_name","commercial_mode","price","currency","billing_type","setup_fee",
  "payment_provider","payment_product_id","payment_price_id","payment_link","quote_route","discovery_route",
  "success_route","cancel_route","onboarding_route","customer_workspace_route","IRIS_workflow_class",
  "IRIS_workflow_template","sales_owner","fulfilment_owner","SLA","lead_source_required","analytics_event",
  "post_purchase_action","renewal_route","upsell_route","status","last_verified_at"
] as const;

export const safeCaseStudyClasses = [
  "PUBLIC VERIFIED",
  "ANONYMISED VERIFIED",
  "ORVIA BUILD CASE STUDY",
  "DEMO / CONCEPT"
] as const;
