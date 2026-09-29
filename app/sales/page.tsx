import { salesOperatingModel, salesReleaseGate } from "@/config/sales";

export default function SalesPage(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">ORVIA SALES OPERATING MODEL</div>
        <h1>Every commercial route must create accountable follow-through.</h1>
        <p className="lead">The website is only the front door. IRIS must know the source, owner, next action, timer, commercial state and customer destination behind every enquiry or purchase.</p>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">LIFECYCLE</div><h2>One sales state model across the estate.</h2></div>
          <p>No product should invent its own lead lifecycle. The stages below are the canonical commercial journey.</p>
        </div>
        <div className="commercial-chain">
          {salesOperatingModel.stages.map((stage,index)=><article key={stage}><span>{String(index+1).padStart(2,"0")}</span><strong>{stage.replace("_"," ")}</strong></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell work-john-two-col">
        <div>
          <div className="eyebrow">NON-NEGOTIABLE RULES</div>
          <h2>A lead cannot disappear.</h2>
          <div className="trust-list">{salesOperatingModel.rules.map(rule=><span key={rule}>{rule}</span>)}</div>
        </div>
        <article className="work-john-receive">
          <div className="eyebrow">IRIS RELEASE GATE</div>
          <h3>{salesReleaseGate.failureState}</h3>
          <p>Raised when the website can generate commercial interest but the operational sales path is incomplete.</p>
          <ul>{salesReleaseGate.passRequires.map(item=><li key={item}>{item}</li>)}</ul>
        </article>
      </div>
    </section>
  </>;
}
