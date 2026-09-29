import Link from "next/link";
import { primaryNav, customerAccessNav } from "@/config/navigation";
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
    <div className="utility-bar">
      <div className="shell utility-inner">
        <span>ORVIA Oversight Ltd</span>
        <div className="utility-actions">
          <a href="tel:+443300433703">{productConfig.phone}</a>
          <a href={`mailto:${productConfig.email}`}>Email</a>
          <a href="https://wa.me/443300433703">WhatsApp</a>
          <Link href="/contact">Book a meeting</Link>
        </div>
      </div>
    </div>

    <header className="main-header estate-header">
      <div className="shell nav-wrap">
        <div className="estate-masthead">
          <Link href="https://orvia.org.uk" className="master-brand" aria-label="ORVIA Oversight">
            <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA"/>
          </Link>

          <span className="brand-divider" aria-hidden="true"/>

          <Link href={productHref} className="product-brand" style={{"--product-accent":productAccent} as React.CSSProperties}>
            {productIconSrc
              ? <img className="product-brand-image" src={productIconSrc} alt=""/>
              : <span className="product-brand-icon">{productMark}</span>}
            <span className="product-brand-copy">
              <strong>{productName}</strong>
            </span>
          </Link>
        </div>

        <nav aria-label="Primary navigation">
          {primaryNav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
          <details className="customer-login-menu">
            <summary>Customer Login</summary>
            <div className="customer-login-dropdown">
              <div className="customer-login-heading">
                <strong>ORVIA Access</strong>
                <span>Choose the service you need.</span>
              </div>
              {customerAccessNav.map(item=><a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <span><strong>{item.label}</strong><small>{item.description}</small></span>
                <em className={"access-status "+item.status}>{item.status}</em>
              </a>)}
              <Link className="customer-login-manage" href="/customer-login">View all access options →</Link>
            </div>
          </details>
        </nav>

        <Link href={ctaHref} className="button button-small estate-cta">{ctaLabel}</Link>
      </div>
    </header>
  </>;
}

export function Header(){
  return <ProductHeader/>;
}
