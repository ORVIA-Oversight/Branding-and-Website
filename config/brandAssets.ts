export type BrandAssetKey =
  | "oversight"
  | "voice"
  | "threshold"
  | "witness-room"
  | "mia"
  | "web"
  | "business"
  | "security-intelligence"
  | "overwatch"
  | "iris"
  | "hive"
  | "vita"
  | "vera"
  | "command"
  | "workspace"
  | "brand-control";

export type BrandAssetRecord = {
  id: BrandAssetKey;
  displayName: string;
  domain: string;
  logo: {
    transparent: string;
    light: string;
    dark: string;
    compact: string;
  };
  favicon: {
    32: string;
    180: string;
    192: string;
    512: string;
  };
  social: {
    avatar: string;
    ogLight: string;
    ogDark: string;
  };
};

const assetRoot = "/brand/v2";

function makeRecord(id: BrandAssetKey, displayName: string, domain: string): BrandAssetRecord {
  const slug = id;
  return {
    id,
    displayName,
    domain,
    logo: {
      transparent: `${assetRoot}/logos/${slug}/orvia-${slug}-primary-horizontal-transparent-v2.png`,
      light: `${assetRoot}/logos/${slug}/orvia-${slug}-primary-horizontal-light-v2.jpg`,
      dark: `${assetRoot}/logos/${slug}/orvia-${slug}-primary-horizontal-dark-v2.jpg`,
      compact: `${assetRoot}/logos/${slug}/orvia-${slug}-compact-transparent-v2.png`
    },
    favicon: {
      32: `${assetRoot}/icons/orvia-${slug}-icon-32.png`,
      180: `${assetRoot}/icons/orvia-${slug}-icon-180.png`,
      192: `${assetRoot}/icons/orvia-${slug}-icon-192.png`,
      512: `${assetRoot}/icons/orvia-${slug}-icon-512.png`
    },
    social: {
      avatar: `${assetRoot}/social/orvia-${slug}-social-avatar-1024.jpg`,
      ogLight: `${assetRoot}/social/orvia-${slug}-og-light-1200x630.jpg`,
      ogDark: `${assetRoot}/social/orvia-${slug}-og-dark-1200x630.jpg`
    }
  };
}

export const brandAssets: Record<BrandAssetKey, BrandAssetRecord> = {
  oversight: makeRecord("oversight", "ORVIA Oversight", "orvia.org.uk"),
  voice: makeRecord("voice", "ORVIA Voice", "orviavoice.co.uk"),
  threshold: makeRecord("threshold", "ORVIA Threshold", "threshold-review.co.uk"),
  "witness-room": makeRecord("witness-room", "ORVIA Witness Room", "witnessroom.co.uk"),
  mia: makeRecord("mia", "ORVIA MIA", "mialegacy.uk"),
  web: makeRecord("web", "ORVIA Web", "orviaweb.co.uk"),
  business: makeRecord("business", "ORVIA Business", "orviabusiness.co.uk"),
  "security-intelligence": makeRecord("security-intelligence", "ORVIA Security & Intelligence", "orviasecurity.co.uk"),
  overwatch: makeRecord("overwatch", "ORVIA Overwatch", "orvia-overwatch.orvia.org.uk"),
  iris: makeRecord("iris", "ORVIA IRIS", "iris.orvia.org.uk"),
  hive: makeRecord("hive", "ORVIA HIVE", "internal"),
  vita: makeRecord("vita", "ORVIA VITA", "internal"),
  vera: makeRecord("vera", "ORVIA VERA", "internal"),
  command: makeRecord("command", "ORVIA Command", "command.orvia.org.uk"),
  workspace: makeRecord("workspace", "ORVIA Workspace", "workspace.orvia.org.uk"),
  "brand-control": makeRecord("brand-control", "ORVIA Brand Control", "orviabrand.co.uk")
};

export const masterBrandAssets = {
  logo: `${assetRoot}/master/ORVIA_Master_Primary_Horizontal_Transparent_v2.png`,
  wordmark: `${assetRoot}/master/ORVIA_Master_Wordmark_FiveColour_Transparent_CLEAN_v2.png`,
  globe: `${assetRoot}/master/ORVIA_Master_Globe_FullColour_Transparent_v2.png`,
  favicon32: `${assetRoot}/icons/orvia-master-icon-32.png`,
  appleTouch180: `${assetRoot}/icons/orvia-master-icon-180.png`,
  pwa192: `${assetRoot}/icons/orvia-master-icon-192.png`,
  pwa512: `${assetRoot}/icons/orvia-master-icon-512.png`
} as const;

export function getBrandAssets(id: BrandAssetKey) {
  return brandAssets[id];
}
