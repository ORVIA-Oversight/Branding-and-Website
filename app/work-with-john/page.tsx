import Link from "next/link";
import { founderStory } from "@/config/founder";

const triggers=[
  ["Something does not add up","You have reports, explanations or assurances, but the picture still does not feel complete."],
  ["You need challenge, not agreement","You want somebody prepared to test the position, raise the uncomfortable point and explain why it matters."],
  ["Responsibility is sitting with you","You need a clear view of what is supported, what is missing and what should happen next."],
  ["The service is drifting","Performance, culture, governance or delivery is moving away from where it needs to be."],
  ["A decision carries consequence","You need the evidence organised before a high-consequence judgement, review or escalation."],
  ["You need momentum","The issue is known, but actions, ownership and follow-through are not moving quickly enough."]
] as const;

const services=[
  ["Safeguarding & governance challenge","Independent challenge on decision trails, escalation, accountability and whether practice is protecting the person in reality."],
  ["Operational review & improvement","A practical examination of how a service is working, where delivery is drifting and what management needs to do next."],
  ["Leadership & manager support","Structured support for people carrying registered, nominated, operational or safeguarding responsibility."],
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
    <section className="page-hero work-john-hero work-john-hero-v2">
      <div className="shell work-john-hero-grid">
        <div>
          <div className="eyebrow">WORK DIRECTLY WITH JOHN MCGILL</div>
          <h1>I am not there to tell you everything is fine.</h1>
          <p className="lead work-john-lead">Bring me in when you need somebody prepared to look properly, test the explanation, raise what does not fit and help turn that into practical action.</p>
          <div className="work-john-challenge-line">
            <strong>If I believe something needs fixing, I will raise it.</strong>
            <span>Clearly, respectfully and with the evidence behind the challenge.</span>
          </div>
          <div className="actions work-john-primary-actions">
            <a className="button" href="mailto:hello@orvia.org.uk?subject=Bring%20John%20in%20-%20consultancy%20enquiry">Bring John in</a>
            <Link className="button secondary" href="/contact">Talk through the situation</Link>
          </div>
          <div className="work-john-proof-row">
            <span>Direct founder access</span>
            <span>Independent challenge</span>
            <span>Clear written scope</span>
            <span>Human judgement retained</span>
          </div>
        </div>
        <aside className="work-john-authority-panel">
          <div className="founder-signature-mark">John McGill</div>
          <div className="work-john-authority-rule"/>
          <strong>{founderStory.founder}</strong>
          <span>{founderStory.role}</span>
          <blockquote>“You are not paying me to agree with you. You are bringing me in to help you see the position clearly and deal with what the evidence actually shows.”</blockquote>
          <div className="work-john-rate-card">
            <small>Consultancy from</small>
            <strong>£450 + VAT / day</strong>
            <span>Scope and rate confirmed before work begins.</span>
          </div>
        </aside>
      </div>
    </section>

    <section className="work-john-positioning">
      <div className="shell work-john-positioning-grid">
        <div><span>01</span><strong>See the problem</strong><p>I will test what you have been told against what the evidence supports.</p></div>
        <div><span>02</span><strong>Say what needs saying</strong><p>If there is a gap, contradiction, weak control or uncomfortable issue, it gets raised.</p></div>
        <div><span>03</span><strong>Turn it into action</strong><p>The purpose is not criticism. It is clarity, ownership, improvement and follow-through.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHEN TO BRING ME IN</div><h2>When you need more than reassurance.</h2></div>
          <p>These are the situations where independent challenge can be more valuable than another internal meeting or another report telling you what you already know.</p>
        </div>
        <div className="work-john-trigger-grid">
          {triggers.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <a href="mailto:hello@orvia.org.uk?subject=Work%20with%20John%20-%20situation%20to%20review">Discuss this situation →</a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink work-john-no-yes">
      <div className="shell work-john-no-yes-grid">
        <div>
          <div className="eyebrow light">INDEPENDENT MEANS INDEPENDENT</div>
          <h2>I am not a hired yes-man.</h2>
          <p className="lead">If the evidence supports your position, I will say so. If it does not, I will say that too. If something is missing, weak, contradictory or putting people at risk, I will raise it rather than smooth it over.</p>
        </div>
        <div className="work-john-wont-list">
          <span><strong>I will not</strong> rubber-stamp a conclusion because it is convenient.</span>
          <span><strong>I will not</strong> hide uncertainty to make a report look cleaner.</span>
          <span><strong>I will not</strong> tell a board, manager or founder what they want to hear just to preserve comfort.</span>
          <span><strong>I will</strong> explain the evidence, the gap, the consequence and the practical options.</span>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT I CAN BE BROUGHT IN TO DO</div><h2>Focused, accountable work with a defined outcome.</h2></div>
          <p>The engagement starts with the result you need, the responsibility involved and what must exist when the work ends.</p>
        </div>
        <div className="work-john-service-grid">
          {services.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
        <div className="work-john-mid-cta">
          <div><strong>Not sure which route fits?</strong><span>Start with the situation. ORVIA will tell you if direct consultancy, a defined package or another professional route is more appropriate.</span></div>
          <Link className="button" href="/contact">Tell us what is happening</Link>
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
          <div className="eyebrow">WHAT YOU RECEIVE</div>
          <h3>Clarity you can act on.</h3>
          <ul>
            <li>A named consultant who knows the assignment</li>
            <li>A written scope, rate and timescale before work begins</li>
            <li>Plain advice about what is supported, missing or unresolved</li>
            <li>Challenge where the evidence does not support the current position</li>
            <li>Agreed actions, owners or written outputs where included</li>
            <li>An honest answer when another professional is required</li>
          </ul>
          <a className="button" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Ask John about an assignment</a>
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
            <a href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20rate%20enquiry">Check availability →</a>
          </article>)}
        </div>
        <p className="work-john-small">Travel, accommodation and other approved expenses are agreed separately. Interim assignments remain subject to availability, applicable regulatory requirements and the correct employment-status determination.</p>
      </div>
    </section>

    <section className="section work-john-engage">
      <div className="shell work-john-engage-grid">
        <div>
          <div className="eyebrow">THREE WAYS TO START</div>
          <h2>Make it easy to bring me into the right problem.</h2>
        </div>
        <div className="work-john-engage-actions">
          <a href="mailto:hello@orvia.org.uk?subject=Bring%20John%20in%20-%20urgent%20operational%20issue"><strong>Bring John in</strong><span>I already know I need direct consultancy.</span></a>
          <Link href="/contact"><strong>Talk it through first</strong><span>I want a 30-minute conversation before deciding.</span></Link>
          <a href="mailto:hello@orvia.org.uk?subject=John%20McGill%20-%20challenge%20this%20position"><strong>Challenge this position</strong><span>I have a plan, report or issue and want it independently tested.</span></a>
        </div>
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
          <h2>Clear scope. Clear rate. Clear accountability.</h2>
          <p>Consultancy is invoiced weekly and payable within seven calendar days. New clients may be asked to pay for the first booked day in advance. The written scope records the rate, location, expenses, deliverables and any cancellation terms before the engagement starts.</p>
        </div>
        <div className="work-john-actions">
          <a className="button" href="mailto:hello@orvia.org.uk?subject=John%20McGill%20consultancy%20availability">Check John's availability</a>
          <a className="button secondary" href="tel:+443300433703">Call 0330 043 3703</a>
          <Link className="button secondary" href="/contact">Book a conversation</Link>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell work-john-final">
        <div className="eyebrow">START WITH THE SITUATION</div>
        <h2>If something is not right, say what is happening.</h2>
        <p className="lead">If ORVIA is not the right fit, you will be told plainly. If it is, you will receive a written scope and price before committing to the work.</p>
        <div className="actions">
          <a className="button" href="mailto:hello@orvia.org.uk?subject=Bring%20John%20in%20-%20consultancy%20enquiry">Bring John in</a>
          <Link className="button secondary" href="/contact">Talk it through first</Link>
        </div>
      </div>
    </section>
  </>;
}
