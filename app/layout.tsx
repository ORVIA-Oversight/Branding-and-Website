import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const geist = Geist({ subsets:["latin"], variable:"--font-geist" });
const mono = Geist_Mono({ subsets:["latin"], variable:"--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brand.orvia.org.uk"),
  title: { default: "ORVIA Brand & Web System", template: "%s | ORVIA" },
  description: "The live ORVIA brand, web and customer experience reference for the connected ORVIA estate.",
  openGraph: { title:"ORVIA Brand & Web System", description:"The live brand, web and customer experience reference for the ORVIA estate.", type:"website", url:"https://brand.orvia.org.uk" }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><Header/><main>{children}</main><Footer/></body></html>}
