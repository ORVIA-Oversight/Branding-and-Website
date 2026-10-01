import Link from "next/link";
import { siteRegistry } from "@/config/siteRegistry";

const publicProductIds=["oversight","voice","threshold","mia","witness","perspective","web","business","security"] as const;
const visibleProducts=siteRegistry.filter(site => publicProductIds.includes(site.id as typeof publicProductIds[number]));

function publicHref(id:string,domain:string){
  if(id==="voice") return "https://orviavoice.co.uk";
  if(id==="perspective") return "/perspective-room";
  return "https://"+domain;
}

export default function ProductsPage(){
  return <>
    <section className="page-hero products-hero">
      <div className="shell">
        <div className="eyebrow">ORVIA PRODUCTS + SERVICES</div>
        <h1>One operating philosophy. Different tools for different problems.</h1>
        <p className="lead">Every ORVIA product inherits the same core standards for evidence, human judgement, trust, accountability and commercial completion — while keeping its own purpose, audience and colour identity.</p>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell products-grid">
        {visibleProducts.map(site=><article key={site.id} className="product-directory-card">
          <div className="product-directory-top">
            <span className="product-directory-mark" style={{background:site.theme.primary}}>{site.productMark}</span>
            <em>{site.family}</em>
          </div>
          <h2>{site.name}</h2>
          <p>{site.theme.use}</p>
          <div className="product-directory-meta">
            <span>{site.domain}</span>
            <span>{site.commercial.commercialMode.replace("_"," ")}</span>
          </div>
          <div className="product-directory-actions">
            {publicHref(site.id,site.domain).startsWith("/")
              ? <Link className="button button-small" href={publicHref(site.id,site.domain)}>Open information</Link>
              : <a className="button button-small" href={publicHref(site.id,site.domain)} target="_blank" rel="noreferrer">Visit site</a>}
            <Link className="text-link" href="/contact">Talk to ORVIA →</Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell products-system-note">
        <div>
          <div className="eyebrow light">CANONICAL RULE</div>
          <h2>New products do not start from a blank page.</h2>
        </div>
        <p>They inherit the ORVIA shell, product-family colours, trust layer, founder source, navigation, footer, accessibility rules and commercial completion gate. Only the proposition, offer, imagery and product-specific identity change.</p>
      </div>
    </section>
  </>;
}
