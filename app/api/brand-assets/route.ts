import { NextResponse } from "next/server";
import { brandAssets, masterBrandAssets } from "@/config/brandAssets";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "2026-v2",
    source: "ORVIA Brand & Web System",
    master: masterBrandAssets,
    products: brandAssets
  }, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
