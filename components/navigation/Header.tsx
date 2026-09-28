import Link from "next/link";
import { primaryNav } from "@/config/navigation";
import { productConfig } from "@/config/products";

export function Header() {
  return <>
    <div className="utility-bar">
      <div className="shell utility-inner">
        <span>ORVIA Oversight Ltd</span>
        <div className="utility-actions">
          <a href="tel:+443300433703">{productConfig.phone}</a>
          <a href={`mailto:${productConfig.email}`}>Email</a>
          <a href="https://wa.me/443300433703">WhatsApp</a>
          <Link href="/contact">Book a meeting</Link>
          <a href="#">Client login</a>
        </div>
      </div>
    </div>
    <header className="main-header">
      <div className="shell nav-wrap">
        <Link href="/" className="brand" aria-label="ORVIA home">
          <span className="brand-mark">O</span>
          <span className="brand-copy"><strong>ORVIA</strong><small>UNIVERSAL REFERENCE</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          {primaryNav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="button button-small">Talk to ORVIA</Link>
      </div>
    </header>
  </>;
}
