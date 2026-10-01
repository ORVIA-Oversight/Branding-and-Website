import Link from "next/link";

const routes=[
  ["How ORVIA works","The evidence-led method, human-control boundary and action-to-assurance discipline.","/method"],
  ["Why ORVIA exists","The founder story behind the operating model and the principle of keeping the human visible.","/founder"],
  ["Build case studies","Controlled examples of ORVIA products, systems and delivery patterns without invented client outcomes.","/case-studies"]
] as const;

export default function Insights(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">INSIGHTS</div>
        <h1>Useful thinking, not content for content's sake.</h1>
        <p className="lead">ORVIA publishes approved explainers, founder notes, evidence practice and product updates when there is something worth saying. Uncontrolled social comments are not republished automatically.</p>
      </div>
    </section>
    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">START WITH THE CURRENT SOURCE MATERIAL</div><h2>Three useful routes while the publishing library is being built.</h2></div>
          <p>Each route links to current controlled content rather than placeholder articles or invented commentary.</p>
        </div>
        <div className="compact-card-grid three">
          {routes.map(([title,copy,href])=><article className="compact-card" key={title}><h2>{title}</h2><p>{copy}</p><Link href={href}>Open →</Link></article>)}
        </div>
      </div>
    </section>
    <section className="final-cta"><div className="shell"><div><div className="eyebrow light">HAVE A QUESTION WORTH EXPLORING?</div><h2>Bring ORVIA the problem, evidence or operating question.</h2></div><Link className="button light-button" href="/contact">Talk to ORVIA</Link></div></section>
  </>;
}
