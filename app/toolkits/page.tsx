import Link from "next/link";

const tools=[
  ["Concern clarity checklist","Use four columns: what happened, what is evidenced, what is interpretation and what is still missing."],
  ["Evidence readiness checklist","Check originals, chronology, decision points, owners, missing evidence, competing explanations and preserved dissent."],
  ["Commercial journey check","Test Understand → Trust → Price/Quote → Buy/Start → Onboard → Delivery → Follow-up."],
  ["30/90/180 effectiveness check","Do not stop at implemented. Recheck whether the action was verified, effective and sustained."]
] as const;

export default function ToolkitsPage(){
  return <section className="page-hero"><div className="shell">
    <div className="eyebrow">FREE ORVIA TOOLKITS</div>
    <h1>Useful before you buy anything.</h1>
    <p className="lead">These tools are designed to help people structure a problem, test their evidence and identify a proportionate next step. They are not substitutes for professional, statutory, legal or clinical advice.</p>
    <div className="compact-card-grid two toolkit-page-grid">
      {tools.map(([title,body])=><article className="compact-card" key={title}><span className="demo-label">FREE TOOL</span><h2>{title}</h2><p>{body}</p><Link href="/contact">Ask ORVIA for the working version →</Link></article>)}
    </div>
  </div></section>;
}
