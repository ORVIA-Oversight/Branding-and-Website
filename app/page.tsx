import Link from "next/link";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";

const needs = [
  ["I’m worried about something","Start with what happened. We help structure the concern, preserve the evidence and identify a proportionate next step.","/work-with-orvia"],
  ["I run a service or organisation","Strengthen governance, safeguarding, assurance, operational grip and evidence of improvement.","/work-with-orvia"],
  ["I need evidence reviewed","Prepare, test and challenge evidence without turning technology into the decision-maker.","https://witness.orvia.org.uk"],
  ["I need calls captured properly","Use ORVIA Voice for accountable call capture, routing and follow-up.","https://voice.orvia.org.uk"],
  ["I want to work with ORVIA","Explore founder-led, practitioner and career routes.","/work-with-orvia"],
  ["I’m already a customer","Go straight to your workspace, cases and current actions.","https://workspace.orvia.org.uk"]
] as const;

const outcomes = [
  ["Clarity","See the problem, context and evidence more clearly."],
  ["Accountability","Make ownership, deadlines and decisions visible."],
  ["Assurance","Show what was checked, what changed and whether it worked."],
  ["Human judgement","Keep serious decisions with accountable people."]
] as const;

const products = [
  ["ORVIA Voice","24/7 call capture and accountable follow-up.","https://voice.orvia.org.uk","V"],
  ["Witness Room","Structured evidence preparation and challenge.","https://witness.orvia.org.uk","W"],
  ["Perspective Room","Human reasoning and evidence-led assessment.","/perspective-room","P"],
  ["ORVIA Web","Lean commercial websites and managed delivery.","https://web.orvia.org.uk","O"],
  ["MIA","Memory preservation, family archive and legacy.","https://mia.orvia.org.uk","M"],
  ["Threshold","Structured concern and evidence review.","https://threshold.orvia.org.uk","T"]
] as const;

export default function Home(){
  return <>
    <section className="lean-hero">
      <div className="shell lean-hero-grid">
        <div>
          <div className="lean-kicker">ORVIA OVERSIGHT</div>
          <h1>See the issue.<br/>Understand the evidence.<br/><span>Act with confidence.</span></h1>
          <p>ORVIA helps people and organisations make sense of concerns, fragmented evidence and operational risk — then turn that understanding into accountable action and verified improvement.</p>
          <div className="lean-actions">
            <Link href="/work-with-orvia" className="button">Tell us what’s happening</Link>
            <a href="#start" className="lean-secondary-action">Choose what you need</a>
          </div>
          <div className="lean-proof-row">
            <span>Independent</span>
            <span>Evidence-led</span>
            <span>Human-centred</span>
            <span>ICO registered</span>
            <span>ERS Bronze</span>
          </div>
        </div>

        <div className="lean-hero-panel" aria-label="ORVIA operating model">
          <div className="lean-core">ORVIA</div>
          <div className="lean-node n1"><b>OBSERVE</b><span>What is happening?</span></div>
          <div className="lean-node n2"><b>REVIEW</b><span>What does it mean?</span></div>
          <div className="lean-node n3"><b>VERIFY</b><span>What can be proved?</span></div>
          <div className="lean-node n4"><b>INTERPRET</b><span>What else could explain it?</span></div>
          <div className="lean-node n5"><b>ACT</b><span>What needs to happen next?</span></div>
        </div>
      </div>
    </section>

    <section id="start" className="lean-section">
      <div className="shell">
        <div className="lean-section-heading">
          <div>
            <div className="lean-kicker">START WITH YOUR NEED</div>
            <h2>You should not need to understand our architecture before you can use it.</h2>
          </div>
          <p>Choose the route closest to what you need now. The method, governance and technical depth remain available when you want them.</p>
        </div>
        <div className="lean-need-grid">
          {needs.map(([title,body,href],i)=><article key={title}>
            <span className="lean-index">{String(i+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            {href.startsWith("http")
              ? <a href={href} target="_blank" rel="noreferrer">Open route →</a>
              : <Link href={href}>Open route →</Link>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="lean-section lean-section-dark">
      <div className="shell">
        <div className="lean-section-heading inverse">
          <div>
            <div className="lean-kicker">WHAT ORVIA GIVES YOU</div>
            <h2>Less noise. Better evidence. Clearer responsibility.</h2>
          </div>
          <p>ORVIA is built to help people see what matters without losing the context, challenge or human judgement behind the work.</p>
        </div>
        <div className="lean-outcome-grid">
          {outcomes.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="lean-section">
      <div className="shell">
        <div className="lean-section-heading">
          <div>
            <div className="lean-kicker">HOW IT WORKS</div>
            <h2>From signal to verified improvement.</h2>
          </div>
          <p>Technology can organise, compare and challenge. Safeguarding, clinical, culpability and other high-consequence judgements remain human decisions.</p>
        </div>
        <div className="lean-process">
          <div><span>01</span><strong>Capture</strong><p>Record the concern, event or evidence at source.</p></div>
          <div><span>02</span><strong>Understand</strong><p>Build context, chronology and competing explanations.</p></div>
          <div><span>03</span><strong>Verify</strong><p>Check what is supported, missing, disputed or contradicted.</p></div>
          <div><span>04</span><strong>Act</strong><p>Assign a proportionate human-owned response.</p></div>
          <div><span>05</span><strong>Recheck</strong><p>Verify whether the improvement actually worked.</p></div>
        </div>
      </div>
    </section>

    <section className="lean-section lean-products">
      <div className="shell">
        <div className="lean-section-heading">
          <div>
            <div className="lean-kicker">MAIN ROUTES</div>
            <h2>Use the service that matches the job.</h2>
          </div>
          <p>Product names are secondary. Each service is presented with a plain-English purpose and a real next action.</p>
        </div>
        <div className="lean-product-grid">
          {products.map(([name,body,href,mark])=><article key={name}>
            <span className="lean-product-mark-card">{mark}</span>
            <div><h3>{name}</h3><p>{body}</p></div>
            {href.startsWith("http")
              ? <a href={href} target="_blank" rel="noreferrer">Open service →</a>
              : <Link href={href}>Open service →</Link>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="lean-section lean-trust-section">
      <div className="shell lean-trust-grid">
        <div>
          <div className="lean-kicker">TRUST, WITHOUT THE WALL OF TEXT</div>
          <h2>Important proof should be easy to inspect.</h2>
          <p>ORVIA publishes verified claims, keeps external recognition separate from marketing language and makes human authority explicit.</p>
          <Link href="/trust" className="lean-inline-cta">Open Trust Centre →</Link>
        </div>
        <div className="lean-trust-list">
          <span><b>Company</b>16123685</span>
          <span><b>ICO</b>ZC152311</span>
          <span><b>Armed Forces Covenant</b>Signatory</span>
          <span><b>ERS</b>Bronze Award holder</span>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer"><b>Trust A Veteran</b>Current public profile →</a>
        </div>
      </div>
    </section>

    <ArmedForcesCommitment/>

    <section className="lean-section lean-governance">
      <div className="shell">
        <div className="lean-section-heading">
          <div>
            <div className="lean-kicker">BRAND & WEB GOVERNANCE</div>
            <h2>The deeper system is still here — just no longer in the way.</h2>
          </div>
          <p>For teams building or governing ORVIA, the technical and commercial standards remain available as the canonical reference layer.</p>
        </div>
        <div className="lean-governance-grid">
          <Link href="/systems"><strong>Systems reference</strong><span>IRIS, HIVE, VITA, VERA and controlled AI architecture.</span></Link>
          <Link href="/commercial"><strong>Commercial standard</strong><span>From offer to onboarding, ownership and governed delivery.</span></Link>
          <Link href="/estate"><strong>Website estate</strong><span>Migration, release controls and shared UX standards.</span></Link>
        </div>
      </div>
    </section>

    <section className="lean-final">
      <div className="shell">
        <div><span>START WITH THE PROBLEM</span><h2>You do not need to diagnose it before you contact ORVIA.</h2></div>
        <Link href="/work-with-orvia" className="button light-button">Tell us what’s happening</Link>
      </div>
    </section>
  </>;
}
