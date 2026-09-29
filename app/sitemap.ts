import type { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL||"https://brand.orvia.org.uk";
  const paths=[
    "",
    "/products",
    "/systems",
    "/commercial",
    "/founder",
    "/work-with-john",
    "/practitioner-network",
    "/armed-forces",
    "/careers",
    "/case-studies",
    "/insights",
    "/trust",
    "/customer-login",
    "/contact"
  ];
  return paths.map(path=>({
    url:`${base}${path}`,
    lastModified:new Date(),
    changeFrequency:path===""?"weekly":"monthly",
    priority:path===""?1:["/products","/work-with-john","/case-studies"].includes(path)?0.9:0.7
  }));
}
