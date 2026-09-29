import { familyDefaults, siteRegistry, siteBuildDefaults, type SiteFamily } from "@/config/siteRegistry";

export type NewSiteInput = {
  name: string;
  family: SiteFamily;
  domain: string;
  repo: string;
  productMark?: string;
  proposition: string;
  audience: string[];
  services: string[];
  commercialModel: "published-pricing" | "quote" | "non-commercial";
};

export function buildSiteBlueprint(input: NewSiteInput){
  const theme = familyDefaults[input.family];
  const existing = siteRegistry.find(site =>
    site.name.toLowerCase() === input.name.toLowerCase() ||
    site.domain.toLowerCase() === input.domain.toLowerCase()
  );

  return {
    mode: existing ? "existing-site" : "new-site",
    identity: {
      parentBrand: siteBuildDefaults.parentBrand,
      productName: input.name,
      productMark: input.productMark || input.name.replace(/^ORVIA\s+/i,"").slice(0,2).toUpperCase(),
      theme
    },
    routes: {
      domain: input.domain,
      repository: input.repo
    },
    content: {
      proposition: input.proposition,
      audience: input.audience,
      services: input.services,
      commercialModel: input.commercialModel
    },
    inherited: {
      header: siteBuildDefaults.header,
      footer: siteBuildDefaults.footer,
      trust: siteBuildDefaults.trust,
      founderStory: siteBuildDefaults.founderStory,
      method: siteBuildDefaults.method,
      accessibility: siteBuildDefaults.accessibility
    },
    requiredSections: input.commercialModel === "non-commercial"
      ? ["Hero","Who it is for","What it does","How it works","Proof / trust","Related ORVIA products","Contact"]
      : ["Hero","Who it is for","What it does","How it works","Commercial offer / pricing","Explainer media","Proof / trust","Related ORVIA products","Contact / conversion"]
  } as const;
}
