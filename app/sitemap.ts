import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||"https://orvia.org.uk";return ["","/trust","/careers","/armed-forces","/case-studies","/insights","/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date()}));}
