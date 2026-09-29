import { siteRegistry } from "@/config/siteRegistry";
import { websiteBuildStandard } from "@/config/buildStandard";

export default function EstatePage(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">ORVIA WEBSITE ESTATE</div>
        <h1>Every site reviewed against one operating model.</h1>
        <p className="lead">The estate migration is not a cosmetic reskin. Each property must inherit the canonical brand system and pass commercial, sales, SEO, analytics, workflow and deployment verification.</p>
      </div>
    </section>
    <section className="section section-soft">
      <div className="shell commercial-estate-grid">
        {siteRegistry.map(site=><article key={site.id}>
          <div className="commercial-site-top">
            <span className="commercial-site-mark" style={{background:site.theme.primary}}>{site.productMark}</span>
            <em className={"commercial-state "+site.commercial.releaseState}>{site.status}</em>
          </div>
          <h3>{site.name}</h3>
          <p>{site.domain}</p>
          <dl>
            <div><dt>Repo</dt><dd>{site.repo.replace("ORVIA-Oversight/","")}</dd></div>
            <div><dt>Layout</dt><dd>{site.layout.replace("canonical-","")}</dd></div>
            <div><dt>Commercial</dt><dd>{site.commercial.commercialMode.replace("_"," ")}</dd></div>
            <div><dt>Release</dt><dd>{site.commercial.releaseState}</dd></div>
          </dl>
        </article>)}
      </div>
    </section>
    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">MIGRATION GATE</div><h2>What every site must inherit and prove.</h2></div>
          <p>Existing sites are reviewed and migrated into the same control model used for all new builds.</p>
        </div>
        <div className="commercial-schema">{websiteBuildStandard.releaseEvidence.map(x=><code key={x}>{x}</code>)}</div>
      </div>
    </section>
  </>;
}
