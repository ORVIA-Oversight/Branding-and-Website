import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const sourceSerif = Source_Serif_4({ subsets:["latin"], variable:"--font-source-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brand.orvia.org.uk"),
  title: { default: "ORVIA Brand & Web System", template: "%s | ORVIA" },
  description: "The live ORVIA brand, web and customer experience reference for the connected ORVIA estate.",
  openGraph: {
    title:"ORVIA Brand & Web System",
    description:"The live brand, web and customer experience reference for the ORVIA estate.",
    type:"website",
    url:"https://brand.orvia.org.uk"
  }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-GB"><body className={sourceSerif.variable}><Header/><main>{children}</main><Footer/></body></html>;
}
