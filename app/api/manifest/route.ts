import { NextResponse } from "next/server";
import { brandSystem } from "@/config/system";
import { products } from "@/config/products";
import { trust } from "@/config/trust";

export async function GET() {
  return NextResponse.json(
    {
      ...brandSystem,
      products,
      trust,
      generatedFrom: "brand.orvia.org.uk",
      schema: "orvia.brand-web-system.v1"
    },
    {
      headers: {
        "cache-control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
        "access-control-allow-origin": "*"
      }
    }
  );
}
