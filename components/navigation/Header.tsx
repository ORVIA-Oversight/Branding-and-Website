import Link from "next/link";
import { navigationGroups, customerAccessNav } from "@/config/navigation";
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

function isExternalNavItem(item:{href:string;external?:boolean}) {
  return item.external === true || item.href.startsWith("http");
}

function NavGroup({label,items}:{label:string;items:readonly {label:string;href:string;description?:string;external?:boolean}[]}) {
  return <details className="nav-group">
    <summary>{label}</summary>
    <div className="nav-dropdown">
      {items.map(item => isExternalNavItem(item)
        ? <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
            <strong>{item.label}</strong>
            {item.description && <small>{item.description}</small>}
          </a>
        : <Link key={item.href} href={item.href}>
            <strong>{item.label}</strong>
            {item.description && <small>{item.description}</small>}
          </Link>
      )}
    </div>
  </details>;
}

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
          <a href={`mailto:${productConfig.email}`}>{productConfig.email}</a>
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
            <span className="product-brand-copy"><strong>{productName}</strong></span>
          </Link>
        </div>

        <nav className="desktop-mega-nav" aria-label="Primary navigation">
          {navigationGroups.map(group=><NavGroup key={group.label} label={group.label} items={group.items}/>)}
          <Link className="customer-access-link" href="/customer-login">Customer Login</Link>
        </nav>

        <details className="mobile-hamburger">
          <summary aria-label="Open navigation"><span></span><span></span><span></span><b>Menu</b></summary>
          <div className="mobile-menu-panel">
            {navigationGroups.map(group=><section key={group.label}>
              <h3>{group.label}</h3>
              {group.items.map(item => isExternalNavItem(item)
                ? <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                : <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </section>)}
            <section>
              <h3>Customer Login</h3>
              {customerAccessNav.map(item=><a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>{item.label}</a>)}
            </section>
          </div>
        </details>

        <Link href={ctaHref} className="button button-small estate-cta">{ctaLabel}</Link>
      </div>
    </header>
  </>;
}

export function Header(){
  return <ProductHeader/>;
}
