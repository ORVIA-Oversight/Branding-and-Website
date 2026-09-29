import type { Metadata } from "next";
import Link from "next/link";
import { WorkingPractice } from "@/components/orvia/WorkingPractice";
import { founderCredentials } from "@/config/founderCredentials";
import { practitionerDeliveryModel } from "@/config/practitionerDelivery";

export const metadata:Metadata={
  title:"Work with ORVIA | Evidence-led operational improvement",
  description:"Bring ORVIA into a difficult operational, safeguarding, governance, regulatory or systems problem. We diagnose before we prescribe and prove the reason behind every recommendation.",
  alternates:{canonical:"/work-with-orvia"}
};

const situations=[
  ["Regulatory pressure","You need to understand what CQC, Ofsted or another relevant framework expects and whether your evidence and operating reality support the position you are reporting."],
  ["Safeguarding concern","You need protection, chronology, escalation, evidence and decision-making tested without collapsing precaution into a finding of fault."],
  ["Governance failure","Ownership, action tracking, Board visibility, assurance or accountability is weak or fragmented."],
  ["Operational drift","The service is still functioning, but handovers, staffing, management, communication or process discipline are starting to fail."],
  ["Technology friction","Spreadsheets, duplicated systems, manual work or disconnected software are absorbing time and creating avoidable risk."],
  ["High-consequence decision","You need the evidence, alternatives, missing information and professional boundaries clear before a consequential decision is made."]
] as const;

export default function WorkWithOrviaPage(){
 return <>
  <section className="page-hero work-orvia-hero">
    <div className="shell">
      <div className="eyebrow">WORK WITH ORVIA</div>
      <h1>Bring us the problem. We will prove what needs fixing before we recommend the fix.</h1>
      <p className="lead">ORVIA is an evidence-led fixing company. We work across operations, governance, safeguarding, assurance, regulatory readiness and systems — augmenting the people and tools you already have before proposing anything new.</p>
      <div className="actions"><Link className="button" href="/contact">Bring us the problem</Link><Link className="button secondary" href="/work-with-john">Work directly with John</Link></div>
      <div className="trust-inline"><span>Diagnose before prescribe</span><span>Evidence before recommendation</span><span>Human accountability</span><span>Specialist boundaries respected</span></div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="section-head"><div><div className="eyebrow">WHERE WE ADD VALUE</div><h2>Problems rarely sit neatly inside one department.</h2></div><p>ORVIA looks across the operating system around the issue so the recommendation is based on cause, not symptoms.</p></div>
      <div className="work-john-trigger-grid">{situations.map(([title,copy],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><Link href="/contact">Discuss this problem →</Link></article>)}</div>
    </div>
  </section>

  <WorkingPractice/>


  <section className="section">
    <div className="shell">
      <div className="section-head">
        <div><div className="eyebrow">WHAT AN ORVIA PRACTITIONER BRINGS</div><h2>Not a generic consultant. A defined set of working qualities.</h2></div>
        <p>Practitioners are selected and developed to bring disciplined observation, evidence, safeguarding, governance and practical implementation into the client's existing environment.</p>
      </div>
      <div className="practitioner-quality-grid">
        {practitionerDeliveryModel.qualities.map(([title,copy],index)=><article key={title}>
          <span>{String(index+1).padStart(2,"0")}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="shell">
      <div className="section-head">
        <div><div className="eyebrow">PRACTITIONER PACKAGES</div><h2>Buy a defined outcome, not vague consultancy time.</h2></div>
        <p>Packages can be delivered by one authorised practitioner or a mixed ORVIA team depending on scope, risk and specialist boundaries.</p>
      </div>
      <div className="practitioner-package-grid">
        {practitionerDeliveryModel.packages.map((item,index)=><article key={item.name}>
          <span>{String(index+1).padStart(2,"0")}</span>
          <h3>{item.name}</h3>
          <p>{item.purpose}</p>
          <strong>Typical outputs</strong>
          <ul>{item.deliverables.map(d=><li key={d}>{d}</li>)}</ul>
        </article>)}
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="shell work-john-two-col">
      <div>
        <div className="eyebrow">THE TEAM AROUND THE PROBLEM</div>
        <h2>Use John, an ORVIA practitioner, or the right combination.</h2>
        <p className="lead">Assignments are shaped around the capability required. John can lead directly, ORVIA practitioners can augment the work, and specialist legal, clinical, HR, regulatory or technical professionals can be brought in where the boundary demands it.</p>
        <Link className="text-link" href="/practitioner-network">See the ORVIA Practitioner Network →</Link>
      </div>
      <article className="work-john-receive">
        <div className="eyebrow">THE STANDARD</div>
        <h3>{founderCredentials.practitionerPromise}</h3>
        <ul>
          <li>Evidence-led problem definition</li>
          <li>Clear scope and accountable owner</li>
          <li>No forced ORVIA product sale</li>
          <li>Existing client systems used where fit for purpose</li>
          <li>Third-party or white-label routes considered where better</li>
          <li>Post-change verification built into the work</li>
        </ul>
      </article>
    </div>
  </section>


  <section className="section section-soft">
    <div className="shell work-john-two-col">
      <div>
        <div className="eyebrow">ORVIA PRACTITIONER FEES</div>
        <h2>Professional casework from £520 + VAT per day.</h2>
        <p className="lead">The starting rate applies to ORVIA practitioner-led work. The final rate follows the responsibility, specialist input, urgency, travel and required written outputs. Scope and price are confirmed before work begins.</p>
      </div>
      <article className="work-john-receive">
        <div className="eyebrow">WHAT THE FEE BUYS</div>
        <h3>Structured judgement, not generic consultancy time.</h3>
        <ul>
          <li>Evidence-led problem definition</li>
          <li>Appropriate practitioner capability</li>
          <li>Clear scope, ownership and boundaries</li>
          <li>Documented reasoning behind recommendations</li>
          <li>Implementation support where agreed</li>
          <li>Verification that the intervention worked</li>
        </ul>
        <Link className="button" href="/contact">Request a scoped proposal</Link>
      </article>
    </div>
  </section>

  <section className="section section-ink">
    <div className="shell work-john-boundary">
      <div><div className="eyebrow light">OUR GUARANTEE</div><h2>If we recommend it, we will show you why.</h2></div>
      <p>Every material recommendation should be traceable to an observed problem, evidence, a requirement, a risk or a clearly stated hypothesis that still needs testing. If the evidence does not justify a new system, consultant, control or product, we should not recommend one.</p>
    </div>
  </section>

  <section className="final-cta">
    <div className="shell">
      <div><div className="eyebrow light">START WITH THE PROBLEM</div><h2>Show us what is not working. We will start with evidence, not a sales pitch.</h2></div>
      <Link className="button light-button" href="/contact">Talk to ORVIA</Link>
    </div>
  </section>
 </>;
}
