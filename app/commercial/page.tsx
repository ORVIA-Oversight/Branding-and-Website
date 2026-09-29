import Link from "next/link";
import { commercialCompletionChain, commercialGate, commercialRegistrySchema } from "@/config/commercial";
import { siteRegistry } from "@/config/siteRegistry";

export default function CommercialPage(){
  const commercialSites=siteRegistry.filter(site=>site.commercial.commercialMode!=="non_commercial");
  return <>
    <section className="page-hero commercial-hero">
      <div className="shell commercial-hero-grid">
        <div>
          <div className="eyebrow">COMMERCIAL COMPLETION GATE</div>
          <h1>A finished-looking website is not a finished commercial system.</h1>
          <p className="lead">{commercialGate.directive}</p>
          <div className="actions">
            <Link className="button" href="/case-studies">See build case studies</Link>
            <Link className="button secondary" href="/customer-login">Customer access</Link>
          </div>
        </div>
        <div className="commercial-gate-card">
          <span>IRIS FAILURE STATE</span>
          <strong>{commercialGate.failureState}</strong>
          <p>Triggered when a commercial route lacks the evidence needed to prove that the customer can move from offer to governed delivery.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">MANDATORY CHAIN</div><h2>From understanding to revenue and retention.</h2></div>
          <p>No step is decorative. Each stage must resolve to a real system action, destination or accountable human owner.</p>
        </div>
        <div className="commercial-chain">
          {commercialCompletionChain.map((step,index)=><article key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">ESTATE COMMERCIAL STATE</div><h2>One registry. Clear rules by product.</h2></div>
          <p>Direct purchase is disabled until the relevant commercial route is verified end to end. Scoped services remain human-led.</p>
        </div>
        <div className="commercial-estate-grid">
          {commercialSites.map(site=><article key={site.id}>
            <div className="commercial-site-top">
              <span className="commercial-site-mark" style={{background:site.theme.primary}}>{site.productMark}</span>
              <em className={"commercial-state "+site.commercial.releaseState}>{site.commercial.releaseState}</em>
            </div>
            <h3>{site.name}</h3>
            <p>{site.domain}</p>
            <dl>
              <div><dt>Mode</dt><dd>{site.commercial.commercialMode.replace("_"," ")}</dd></div>
              <div><dt>Direct purchase</dt><dd>{site.commercial.allowDirectPurchase ? "Enabled" : "Not enabled"}</dd></div>
              <div><dt>Discovery</dt><dd>{site.commercial.requiresDiscovery ? "Required" : "Not required"}</dd></div>
            </dl>
            {site.commercial.releaseNote && <small>{site.commercial.releaseNote}</small>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">CONTROLLED COMMERCIAL REGISTRY</div><h2>Brand code references the commercial truth. It does not become the commercial database.</h2></div>
          <p>The live commercial registry belongs in the governed backend. The site registry stores only the reference, mode and release state needed to render the correct experience.</p>
        </div>
        <div className="commercial-schema">
          {commercialRegistrySchema.map(field=><code key={field}>{field}</code>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow">RELEASE RULES</div>
          <h2>Configured is not the same as verified.</h2>
        </div>
        <div className="trust-list">
          {commercialGate.rules.map(rule=><span key={rule}>{rule}</span>)}
        </div>
      </div>
    </section>
  </>;
}
