import Link from "next/link";
const cases=[
  {
    title:"ORVIA Brand System",
    classification:"ORVIA BUILD CASE STUDY",
    summary:"How a disconnected estate of product websites is being consolidated into one governed visual, commercial and operating standard.",
    proof:["Canonical header and footer","Site registry and colour families","Founder story source","Commercial completion gate","Migration blueprint"]
  },
  {
    title:"ORVIA Witness Room",
    classification:"ORVIA BUILD CASE STUDY",
    summary:"A structured product build for evidence organisation, chronology, controlled perspectives, challenge and human review.",
    proof:["Evidence workflow","Controlled perspectives","Crucible and Red Team distinction","Human-review boundary"]
  },
  {
    title:"ORVIA Voice",
    classification:"PRODUCT CAPABILITY / PILOT",
    summary:"A governed communications model for call capture, routing, follow-up and accountable handoff. No unverified customer-performance claims are made.",
    proof:["Call capture model","Routing and ownership","Follow-up workflow","Commercial route subject to end-to-end verification"]
  },
  {
    title:"ORVIA Web",
    classification:"ORVIA BUILD CASE STUDY",
    summary:"A rapid website operating model connecting product identity, domain, repository, deployment, commercial CTA and managed delivery.",
    proof:["Canonical site generator","Domain and repo mapping","Commercial CTA rules","Managed delivery model"]
  },
  {
    title:"IRIS · HIVE · VITA · VERA",
    classification:"ORVIA BUILD CASE STUDY",
    summary:"The operating architecture behind workflow, evidence preservation, assurance testing, verification and accountable human action.",
    proof:["IRIS coordination","HIVE provenance","VITA assurance","VERA verification","Human decision boundary"]
  }
];

export default function CaseStudies(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">CASE STUDIES</div>
        <h1>Evidence over theatre.</h1>
        <p className="lead">Public case studies are classified before publication. ORVIA-owned builds can demonstrate capability without exposing private client, employment, family or legal material.</p>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell case-study-grid-v2">
        {cases.map((item,index)=><article className="case-study-card-v2" key={item.title}>
          <div className="case-study-top"><span>{String(index+1).padStart(2,"0")}</span><em>{item.classification}</em></div>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <div className="case-proof-list">{item.proof.map(point=><span key={point}>{point}</span>)}</div>
        </article>)}
      </div>
    </section>

    <section className="section">
      <div className="shell trust-preview">
        <div><div className="eyebrow">PUBLICATION BOUNDARY</div><h2>Private evidence does not become marketing content by accident.</h2></div>
        <div className="trust-list">
          <span><strong>PUBLIC VERIFIED</strong> — identity and outcome claims have publication authority.</span>
          <span><strong>ANONYMISED VERIFIED</strong> — real work, with identifiers and sensitive detail removed.</span>
          <span><strong>ORVIA BUILD CASE STUDY</strong> — ORVIA-owned build or operating architecture.</span>
          <span><strong>DEMO / CONCEPT</strong> — clearly labelled and never presented as completed client work.</span>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div><div className="eyebrow light">APPLY THE METHOD TO YOUR PROBLEM</div><h2>Use the examples to understand the approach. Then bring us the real operating issue.</h2></div>
        <Link className="button light-button" href="/work-with-orvia">Work with ORVIA</Link>
      </div>
    </section>
  </>;
}
