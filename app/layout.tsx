import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const geist = Geist({ subsets:["latin"], variable:"--font-geist" });
const mono = Geist_Mono({ subsets:["latin"], variable:"--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://orvia.org.uk"),
  title: { default: "ORVIA Brand & Web System", template: "%s | ORVIA" },
  description: "The canonical ORVIA brand, design and public web standard for the connected ORVIA estate.",
  openGraph: {
    title:"ORVIA Brand & Web System",
    description:"The canonical brand and web system for the ORVIA estate.",
    type:"website"
  }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><Header/><main>{children}</main><Footer/></body></html>}
