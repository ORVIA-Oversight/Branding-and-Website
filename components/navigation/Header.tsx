import Link from "next/link";
import { productConfig } from "@/config/products";

type ProductHeaderProps = {
  productName?: string;
  productMark?: string;
  productIconSrc?: string;
  productAccent?: string;
  productHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const publicNav = [
  ["What we do","/work-with-orvia"],
  ["Who we help","/#start"],
  ["Products","/products"],
  ["Trust","/trust"],
  ["About","/founder"]
] as const;

export function ProductHeader({
  productName="Brand & Web System",
  productMark="B",
  productIconSrc,
  productAccent=productConfig.accent,
  productHref="/",
  ctaLabel="Talk to ORVIA",
  ctaHref="/contact"
}:ProductHeaderProps) {
  return <>
    <div className="lean-utility">
      <div className="shell lean-utility-inner">
        <span>ORVIA Oversight Ltd</span>
        <div>
          <a href="tel:+443300433703">{productConfig.phone}</a>
          <a href={"mailto:"+productConfig.email}>{productConfig.email}</a>
        </div>
      </div>
    </div>

    <header className="lean-header">
      <div className="shell lean-header-inner">
        <div className="lean-brand-lockup">
          <Link href="/" className="lean-master-brand" aria-label="ORVIA Oversight">
            <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/>
          </Link>
          <span className="lean-brand-rule" aria-hidden="true"/>
          <Link href={productHref} className="lean-product-brand" style={{"--product-accent":productAccent} as React.CSSProperties}>
            {productIconSrc
              ? <img className="lean-product-image" src={productIconSrc} alt=""/>
              : <span className="lean-product-mark">{productMark}</span>}
            <span>{productName}</span>
          </Link>
        </div>

        <nav className="lean-desktop-nav" aria-label="Primary navigation">
          {publicNav.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}
        </nav>

        <div className="lean-header-actions">
          <Link className="lean-login" href="/customer-login">Customer login</Link>
          <Link className="button button-small lean-primary-cta" href={ctaHref}>{ctaLabel}</Link>
        </div>

        <details className="lean-mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            {publicNav.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}
            <Link href="/customer-login">Customer login</Link>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </div>
        </details>
      </div>
    </header>
  </>;
}

export function Header(){ return <ProductHeader/>; }
