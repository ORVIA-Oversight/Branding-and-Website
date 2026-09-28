import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const geist = Geist({ subsets:["latin"], variable:"--font-geist" });
const mono = Geist_Mono({ subsets:["latin"], variable:"--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://orvia.org.uk"),
  title: { default: "ORVIA Universal Reference", template: "%s | ORVIA" },
  description: "The canonical ORVIA public web standard — one connected system for evidence, accountability and assurance.",
  openGraph: { title:"ORVIA Universal Reference", description:"One connected web system for the ORVIA estate.", type:"website" }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><Header/><main>{children}</main><Footer/></body></html>}
