import Link from "next/link";
import { navigationGroups, customerAccessNav } from "@/config/navigation";
import { EstateBar } from "@/components/navigation/EstateBar";
import { activeSystem, masterIdentity, systemIdentities, type OrviaSystemId } from "@/config/systemIdentity";
import { contactAndSales } from "@/config/contactAndSales";

type ProductHeaderProps = {
  systemId?: OrviaSystemId;
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
  systemId,
  productName,
  productMark,
  productIconSrc,
  productAccent,
  productHref,
  ctaLabel="Talk to ORVIA",
  ctaHref="/contact"
}:ProductHeaderProps) {
  const system = systemId ? systemIdentities[systemId] : activeSystem;
  const resolvedName = productName ?? system.name;
  const resolvedMark = productMark ?? system.icon;
  const resolvedAccent = productAccent ?? system.accent;
  const resolvedHref = productHref ?? system.href;

  return <>
    <EstateBar/>
    <div className="utility-bar">
      <div className="shell utility-inner">
        <span>{masterIdentity.legalName}</span>
        <div className="utility-actions">
          <a href={`tel:${contactAndSales.phoneE164}`}>{contactAndSales.phoneDisplay}</a>
          <a href={`mailto:${contactAndSales.generalEmail}`}>{contactAndSales.generalEmail}</a>
        </div>
      </div>
    </div>

    <header className="main-header estate-header">
      <div className="shell nav-wrap">
        <div className="estate-masthead">
          <Link href={masterIdentity.href} className="master-brand" aria-label="ORVIA Oversight">
            <img src={masterIdentity.logoSrc} alt="ORVIA"/>
            <span className="master-brand-descriptor">{masterIdentity.descriptor}</span>
          </Link>

          <span className="brand-divider" aria-hidden="true"/>

          <Link href={resolvedHref} className="product-brand" style={{"--product-accent":resolvedAccent} as React.CSSProperties}>
            {productIconSrc
              ? <img className="product-brand-image" src={productIconSrc} alt=""/>
              : <span className="product-brand-icon" aria-hidden="true">{resolvedMark}</span>}
            <span className="product-brand-copy">
              <small>ORVIA SYSTEM</small>
              <strong>{resolvedName}</strong>
            </span>
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
