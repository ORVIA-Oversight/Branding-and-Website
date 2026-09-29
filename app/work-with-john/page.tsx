import Link from "next/link";
import { founderStory } from "@/config/founder";

const services=[
  ["Safeguarding & governance advice","Independent challenge on decision trails, escalation, accountability and whether practice is protecting the person in reality."],
  ["Operational review & improvement","A practical examination of how a service is working, where delivery is drifting and what management needs to do next."],
  ["Leadership & manager mentoring","Structured support for people carrying registered, nominated, operational or safeguarding responsibility."],
  ["Incident & evidence review","A disciplined look at records, chronology, decisions, gaps and competing explanations before conclusions are drawn."],
  ["Inspection & assessment preparation","Preparation for scrutiny that tests the evidence behind the reported position rather than rehearsing ideal answers."],
  ["Operational & major-incident planning","Clear roles, priorities, decision logs, handovers and recovery actions for work that must remain coordinated under pressure."]
] as const;

const rates=[
  ["Remote advice and mentoring","£540 per day, VAT included","£450 professional fee plus VAT where applicable"],
  ["Operational consultancy or interim leadership","£720 per day, VAT included","£600 professional fee plus VAT where applicable"],
  ["Specialist safeguarding, governance or assurance","£950 per day, VAT included","Higher-risk review work requiring defined findings or a formal written output."],
  ["Urgent or weekend instruction","Applicable rate plus 25%","Accepted only where capacity and professional boundaries permit."]
] as const;

export default function WorkWithJohnPage(){
  return <>
    <section className="page-hero work-john-hero">
      <div className="shell work-john-hero-grid">
        <div>
          <div className="eyebrow">DIRECT CONSULTANCY</div>
          <h1>Bring John in when the situation needs an experienced pair of eyes.</h1>
          <p className="lead">John McGill is the founder and Principal Consultant of ORVIA Oversight. He can be engaged directly for practical operational judgement, independent challenge and experienced leadership support without committing to a permanent appointment.</p>
          <div className="work-john-rate-pill">Consultancy from <strong>£450 + VAT per day</strong></div>
          <div className="actions">
            <a className="button" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Check John's availability</a>
            <Link className="button secondary" href="/contact">Book a 30-minute conversation</Link>
          </div>
          <p className="work-john-note">The contract and invoice come from ORVIA Oversight Ltd. John remains the named consultant accountable for the agreed work.</p>
        </div>
        <div className="work-john-signature-panel">
          <div className="founder-signature-mark">John McGill</div>
          <strong>{founderStory.founder}</strong>
          <span>{founderStory.role}</span>
          <p>Direct, evidence-led consultancy with clear scope, accountability and professional boundaries.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHEN TO BRING JOHN IN</div><h2>Focused support when responsibility cannot be passed around.</h2></div>
          <p>The starting point is the result you need, the responsibility involved and what must exist when the engagement ends.</p>
        </div>
        <div className="work-john-service-grid">
          {services.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell work-john-two-col">
        <div>
          <div className="eyebrow">EXPERIENCE APPLIED</div>
          <h2>Operational leadership, not consultancy theatre.</h2>
          <p className="lead">John has held senior operational responsibility across independent ambulance services, regulated care, local government and overseas security. His professional development includes advanced safeguarding, health and social care leadership and strategic management.</p>
          <p className="lead">He works from the evidence available, states where information is incomplete and keeps consequential judgement with an accountable person. Technology may support the work; it does not replace professional responsibility.</p>
        </div>
        <article className="work-john-receive">
          <h3>What clients receive</h3>
          <ul>
            <li>A named consultant who knows the assignment</li>
            <li>A written scope, rate and timescale before work begins</li>
            <li>Plain advice about what is supported, missing or unresolved</li>
            <li>Agreed actions, owners or written outputs where included</li>
            <li>An honest answer when another professional is required</li>
          </ul>
          <a className="button secondary" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Ask John about an assignment</a>
        </article>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">PUBLISHED CONSULTANCY RATES</div><h2>The rate follows the responsibility.</h2></div>
          <p>A consultancy day is up to 7.5 hours. The applicable rate is confirmed in the written scope before any time is booked.</p>
        </div>
        <div className="work-john-rates">
          {rates.map(([name,price,note])=><article key={name}>
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{note}</p>
          </article>)}
        </div>
        <p className="work-john-small">Travel, accommodation and other approved expenses are agreed separately. Interim assignments remain subject to availability, applicable regulatory requirements and the correct employment-status determination.</p>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell work-john-boundary">
        <div>
          <div className="eyebrow light">THE BOUNDARY</div>
          <h2>A day rate buys time and judgement. It does not quietly include a complete ORVIA package.</h2>
        </div>
        <p>Formal evidence reviews, full audits, assurance opinions and substantial written reports require their own written scope. Where a fixed ORVIA package is more appropriate, ORVIA will say so before work begins rather than allow a day-rate assignment to drift.</p>
      </div>
    </section>

    <section className="section">
      <div className="shell work-john-terms">
        <div>
          <div className="eyebrow">TERMS</div>
          <h2>Weekly invoices. Seven calendar days to pay.</h2>
          <p>Consultancy is invoiced weekly and payable within seven calendar days. New clients may be asked to pay for the first booked day in advance. The written scope records the rate, location, expenses, deliverables and any cancellation terms before the engagement starts.</p>
        </div>
        <div className="work-john-actions">
          <a className="button" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Check John's availability</a>
          <a className="button secondary" href="tel:+443300433703">Call 0330 043 3703</a>
          <Link className="button secondary" href="/contact">Talk it through first</Link>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell work-john-final">
        <div className="eyebrow">START WITH THE SITUATION</div>
        <h2>Tell John what is happening and what needs to change.</h2>
        <p className="lead">If ORVIA is not the right fit, you will be told plainly. If it is, you will receive a written scope and price before committing to the work.</p>
        <div className="actions">
          <a className="button" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Request direct consultancy</a>
          <Link className="button secondary" href="/contact">Talk it through first</Link>
        </div>
      </div>
    </section>
  </>;
}
