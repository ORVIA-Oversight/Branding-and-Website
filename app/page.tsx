import Link from "next/link";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";
import { PlatformExplainer } from "@/components/marketing/PlatformExplainer";

const needs = [
  ["I’m worried about something","Start with what happened. We help structure the concern, preserve the evidence and identify a proportionate next step.","/work-with-orvia"],
  ["I run a service or organisation","Strengthen governance, safeguarding, assurance, operational grip and evidence of improvement.","/work-with-orvia"],
  ["I need evidence reviewed","Prepare, test and challenge evidence without turning technology into the decision-maker.","https://witness.orvia.org.uk"],
  ["I need calls captured properly","Use ORVIA Voice for accountable call capture, routing and follow-up.","https://voice.orvia.org.uk"],
  ["I want to work with ORVIA","Explore founder-led, practitioner and career routes.","/work-with-orvia"],
  ["I’m already a customer","Go straight to your workspace, cases and current actions.","https://workspace.orvia.org.uk"]
] as const;

const needIcons = ["alert","service","evidence","voice","people","workspace"] as const;

const outcomes = [
  ["Clarity","See the problem, context and evidence more clearly."],
  ["Accountability","Make ownership, deadlines and decisions visible."],
  ["Assurance","Show what was checked, what changed and whether it worked."],
  ["Human judgement","Keep serious decisions with accountable people."]
] as const;

const products = [
  ["ORVIA Voice","24/7 call capture and accountable follow-up.","https://voice.orvia.org.uk","V","voice"],
  ["Witness Room","Structured evidence preparation and challenge.","https://witness.orvia.org.uk","W","witness-room"],
  ["Perspective Room","Human reasoning and evidence-led assessment.","/perspective-room","P","perspective-room"],
  ["ORVIA Web","Lean commercial websites and managed delivery.","https://web.orvia.org.uk","O","web"],
  ["MIA","Memory preservation, family archive and legacy.","https://mia.orvia.org.uk","M","mia"],
  ["Threshold","Structured concern and evidence review.","https://threshold.orvia.org.uk","T","threshold"]
] as const;

const productIcons = ["voice","evidence","perspective","web","family","threshold"] as const;

function HomeIcon({name}:{name:string}){
  const p={width:28,height:28,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  if(name==="alert") return <svg {...p}><path d="M12 3 2.8 19h18.4z"/><path d="M12 9v4M12 17h.01"/></svg>;
  if(name==="service") return <svg {...p}><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/></svg>;
  if(name==="evidence") return <svg {...p}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h4"/></svg>;
  if(name==="voice") return <svg {...p}><path d="M6 8a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0z"/><path d="M9 21h6M12 18v3"/></svg>;
  if(name==="people") return <svg {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c.5-4 2.7-6 6-6s5.5 2 6 6M15 15c2.7.2 4.4 1.8 5 5"/></svg>;
  if(name==="workspace") return <svg {...p}><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 9v11"/></svg>;
  if(name==="web") return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"/></svg>;
  if(name==="family") return <svg {...p}><circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="8" r="2.5"/><path d="M4 19c.5-3 2-5 4-5s3.5 2 4 5M12 19c.5-3 2-5 4-5s3.5 2 4 5"/></svg>;
  if(name==="threshold") return <svg {...p}><path d="M5 3v18M19 3v18M5 12h14"/><path d="m15 8 4 4-4 4"/></svg>;
  if(name==="perspective") return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z"/></svg>;
  return <svg {...p}><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></svg>;
}

export default function Home(){
  return <>
    <section className="home-cinematic-hero" aria-label="ORVIA Oversight">
      <div className="home-hero-media" aria-hidden="true">
        <div className="home-hero-image"/>
        <div className="home-hero-film-overlay"/>
      </div>
      <div className="shell home-hero-content">
        <div className="home-hero-copy">
          <div className="lean-kicker">ORVIA OVERSIGHT</div>
          <h1>See the issue.<br/>Understand the evidence.<br/><span>Act with confidence.</span></h1>
          <p>ORVIA helps people and organisations make sense of concerns, fragmented evidence and operational risk — then turn that understanding into accountable action and verified improvement.</p>
          <div className="lean-actions">
            <Link href="/work-with-orvia" className="button home-hero-primary">Tell us what’s happening</Link>
            <a href="#start" className="home-hero-secondary">Choose what you need</a>
          </div>
          <div className="lean-proof-row home-hero-proof">
            <span>Independent</span>
            <span>Evidence-led</span>
            <span>Human-centred</span>
            <span>ICO registered</span>
            <span>ERS Bronze</span>
          </div>
        </div>
        <div className="home-hero-method" aria-label="ORVIA method">
          <span>OBSERVE</span><i>→</i><span>REVIEW</span><i>→</i><span>VERIFY</span><i>→</i><span>INTERPRET</span><i>→</i><span>ACT</span>
        </div>
      </div>
    </section>

    <PlatformExplainer/>

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

    <section className="orvia-family-ribbon">
      <div className="shell orvia-family-ribbon-inner">
        <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/>
        <div>
          <strong>One ORVIA family.</strong>
          <span>Shared standards, shared trust, different propositions.</span>
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
          {products.map(([name,body,href,mark,guide],i)=><article key={name}>
            <span className="lean-product-mark-card" aria-label={`${name} icon`}><HomeIcon name={productIcons[i]}/></span>
            <div><h3>{name}</h3><p>{body}</p></div>
            <div className="lean-product-actions">
              <Link href={`/services/${guide}`}>Service information →</Link>
              {href.startsWith("http")
                ? <a href={href} target="_blank" rel="noreferrer">Open service →</a>
                : <Link href={href}>Open service →</Link>}
            </div>
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

    <section className="lean-section lean-public-standard">
      <div className="shell lean-section-heading">
        <div>
          <div className="lean-kicker">A CONTROLLED STANDARD</div>
          <h2>One ORVIA standard. Different services. The same expectations.</h2>
        </div>
        <p>Across the ORVIA estate, services inherit the same core expectations: evidence before assumption, clear human accountability, consistent trust information, accessible design and a real next action for the person using the service.</p>
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
