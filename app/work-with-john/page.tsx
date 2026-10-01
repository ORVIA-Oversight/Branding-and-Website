import type { Metadata } from "next";
import Link from "next/link";
import { founderStory } from "@/config/founder";
import { founderCredentials } from "@/config/founderCredentials";
import { WorkingPractice } from "@/components/orvia/WorkingPractice";
import { practitionerDeliveryModel } from "@/config/practitionerDelivery";

export const metadata:Metadata={
  title:"Work with John McGill | ORVIA Oversight",
  description:"Direct, evidence-led consultancy with John McGill for safeguarding, governance, operational review, leadership support and high-consequence organisational challenge.",
  alternates:{canonical:"/work-with-john"},
  openGraph:{
    title:"Work with John McGill | ORVIA Oversight",
    description:"Bring John in when you need independent challenge, operational judgement and a clear view of what the evidence actually supports.",
    type:"website",
    url:"/work-with-john"
  }
};

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
  ["Founder-led diagnostic / intervention","From £1,140 per day, VAT included","£950 professional fee plus VAT. Direct access to John for complex, stuck or cross-functional problems."],
  ["Strategic operational leadership","Scoped from £950 + VAT per day","For stabilisation, mobilisation, turnaround, high-consequence delivery or executive-level operating support."],
  ["Specialist safeguarding, governance or assurance","Scoped from £950 + VAT per day","For complex review work, formal findings, regulatory preparation or substantial written outputs."],
  ["Urgent, weekend or exceptional-response instruction","Applicable rate plus 25%","Accepted only where capacity, competence and professional boundaries permit."]
] as const;

export default function WorkWithJohnPage(){
  return <>
    <section className="page-hero work-john-hero work-john-hero-v2">
      <div className="shell work-john-hero-grid">
        <div>
          <div className="eyebrow">WORK DIRECTLY WITH JOHN MCGILL</div>
          <h1>I am not there to tell you everything is fine.</h1>
          <p className="lead work-john-lead">Bring me in when the problem crosses functions, the obvious answer is not working, or you need someone who can move from evidence to operations to systems and find a route through.</p>
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
          <div className="work-john-hero-media-placeholder">
            <span>IMAGE / VIDEO PLACEHOLDER</span>
            <strong>John McGill — founder introduction</strong>
            <small>Approved portrait, working image or short founder film.</small>
          </div>
          <div className="founder-signature-mark">John McGill</div>
          <div className="work-john-authority-rule"/>
          <strong>{founderStory.founder}</strong>
          <span>{founderStory.role}</span>
          <blockquote>“You are not paying me to agree with you. You are bringing me in to help you see the position clearly and deal with what the evidence actually shows.”</blockquote>
          <div className="work-john-rate-card">
            <small>Consultancy from</small>
            <strong>£950 + VAT / day</strong>
            <span>Founder-led work. Scope and rate confirmed before work begins.</span>
          </div>
        </aside>
      </div>
    </section>


    <section className="section work-john-founder-value">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHY ENGAGE JOHN PERSONALLY</div><h2>A particular set of eyes built across very different operating environments.</h2></div>
          <p>Founder-led work is priced above the practitioner rate because the value is the combination: operator, business builder, safeguarding and governance leader, systems thinker and experienced decision-maker under pressure.</p>
        </div>
        <div className="work-john-founder-media-row">
          <figure className="work-john-visual-placeholder image">
            <span>IMAGE PLACEHOLDER</span>
            <strong>John working with a team / reviewing evidence</strong>
            <small>Documentary-style working image, not staged corporate photography.</small>
          </figure>
          <figure className="work-john-visual-placeholder video">
            <span>VIDEO PLACEHOLDER</span>
            <strong>Why bring me in?</strong>
            <small>30–60 second founder film explaining the value of direct involvement.</small>
          </figure>
        </div>
        <div className="work-john-value-grid visual-icon-grid">
          {practitionerDeliveryModel.founder.value.map((item,index)=><article key={item}><span className="visual-icon-badge">{String(index+1).padStart(2,"0")}</span><p>{item}</p></article>)}
        </div>
        <div className="work-john-founder-statement">
          <div>
            <div className="eyebrow light">FOUNDER-LED INTERVENTION</div>
            <h3>From £{practitionerDeliveryModel.founder.fromExVat} + VAT per day.</h3>
          </div>
          <p>{practitionerDeliveryModel.founder.positioning}</p>
        </div>
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
        <div className="work-john-trigger-grid visual-icon-grid">
          {triggers.map(([title,copy],index)=><article key={title}>
            <span className="visual-icon-badge">{String(index+1).padStart(2,"0")}</span>
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
          <div><div className="eyebrow">CREDENTIALS & OPERATING EXPERIENCE</div><h2>Experience you can verify. Judgement you can test.</h2></div>
          <p>{founderCredentials.intro}</p>
        </div>
        <div className="work-john-credential-media">
          <div className="work-john-visual-placeholder image">
            <span>IMAGE PLACEHOLDER</span>
            <strong>Founder credentials / operational background</strong>
            <small>Approved documentary image or controlled credential montage.</small>
          </div>
        </div>
        <div className="work-john-credential-grid visual-icon-grid">
          {founderCredentials.assurance.map((item,index)=><article key={item.label}>
            <span className="visual-icon-badge">{String(index+1).padStart(2,"0")}</span>
            <small className="credential-label">{item.label}</small>
            <h3>{item.value}</h3>
            <p>{item.note}</p>
          </article>)}
        </div>
        <div className="work-john-experience-band">
          <div><div className="eyebrow">OPERATING BACKGROUND</div><h3>{founderCredentials.headline}</h3></div>
          <ul>{founderCredentials.experience.map(item=><li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>

    <WorkingPractice/>

    <section className="section work-john-practitioner-layer">
      <div className="shell work-john-two-col">
        <div>
          <div className="eyebrow">WORK WITH ORVIA PRACTITIONERS</div>
          <h2>John does not have to be the only person in the room.</h2>
          <p className="lead">Where the assignment needs a broader skill mix, ORVIA can bring practitioners around the problem: governance, safeguarding, evidence, operations, quality, systems, implementation and assurance.</p>
          <p>{founderCredentials.practitionerPromise}</p>
        </div>
        <article className="work-john-receive">
          <div className="eyebrow">AUGMENT, DON'T REPLACE</div>
          <h3>Use the capability you already have.</h3>
          <ul>
            <li>Work alongside your existing leadership and specialist teams</li>
            <li>Bring in additional practitioner capability only where the evidence shows a gap</li>
            <li>Recommend your existing software when it is fit for purpose</li>
            <li>Recommend third-party, white-label or ORVIA software only where justified</li>
            <li>Define specialist legal, HR, clinical or regulatory hand-offs clearly</li>
            <li>Verify whether the intervention actually improved the problem</li>
          </ul>
          <Link className="button" href="/practitioner-network">See the practitioner model</Link>
        </article>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT I CAN BE BROUGHT IN TO DO</div><h2>Focused, accountable work with a defined outcome.</h2></div>
          <p>The engagement starts with the result you need, the responsibility involved and what must exist when the work ends.</p>
        </div>
        <div className="work-john-service-grid visual-icon-grid">
          {services.map(([title,copy],index)=><article key={title}>
            <span className="visual-icon-badge">{String(index+1).padStart(2,"0")}</span>
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
          <div className="work-john-experience-media">
            <figure className="work-john-visual-placeholder image compact">
              <span>IMAGE PLACEHOLDER</span>
              <strong>Operational leadership in practice</strong>
              <small>Use an approved working/leadership image.</small>
            </figure>
            <figure className="work-john-visual-placeholder video compact">
              <span>VIDEO PLACEHOLDER</span>
              <strong>How I approach a difficult assignment</strong>
              <small>Short founder explainer film.</small>
            </figure>
          </div>
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
          <div className="work-john-visual-placeholder image compact engage">
            <span>IMAGE PLACEHOLDER</span>
            <strong>Conversation / briefing image</strong>
            <small>Human first-contact visual.</small>
          </div>
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
