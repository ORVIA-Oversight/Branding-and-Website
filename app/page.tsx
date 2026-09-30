import Link from "next/link";
import Image from "next/image";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";
import { CustomerExplainer } from "@/components/marketing/CustomerExplainer";

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
  {
    name:"ORVIA Voice",
    summary:"A 24/7 call-capture and follow-up service for organisations that cannot afford enquiries, incidents or customer requests to disappear into voicemail.",
    bestFor:"Missed calls, out-of-hours demand, routing and accountable follow-up",
    outcome:"Every important call is captured, owned and moved to a next action.",
    href:"https://voice.orvia.org.uk",
    guide:"voice",
    image:"/products/voice.svg",
    alt:"Illustration of an accountable call capture and routing interface"
  },
  {
    name:"Witness Room",
    summary:"A structured preparation space for complex evidence. It helps people build chronology, compare accounts, surface gaps and prepare for difficult professional or legal conversations.",
    bestFor:"Evidence review, chronology, contradictions and structured challenge",
    outcome:"A clearer, source-led account of what is supported, disputed or still missing.",
    href:"https://witness.orvia.org.uk",
    guide:"witness-room",
    image:"/products/witness-room.svg",
    alt:"Illustration of evidence documents being compared and reviewed"
  },
  {
    name:"Perspective Room",
    summary:"A human-reasoning assessment environment that explores how somebody handles ambiguity, evidence, competing perspectives and changing information.",
    bestFor:"Recruitment, leadership development and professional judgement",
    outcome:"Better evidence about how a person thinks — without reducing them to a score.",
    href:"/perspective-room",
    guide:"perspective-room",
    image:"/products/perspective-room.svg",
    alt:"Illustration of multiple viewpoints connecting to a shared human judgement"
  },
  {
    name:"ORVIA Web",
    summary:"A managed website service for small organisations that need a professional commercial site built, connected and maintained without becoming their own web team.",
    bestFor:"Fast launches, service websites, lead capture and managed delivery",
    outcome:"A finished customer journey with a real next action — not just a brochure page.",
    href:"https://web.orvia.org.uk",
    guide:"web",
    image:"/products/web.svg",
    alt:"Illustration of a modern commercial website interface"
  },
  {
    name:"MIA",
    summary:"A human-centred memory and family archive for preserving stories, voice, photographs, timelines and messages that should not be lost.",
    bestFor:"Family history, life stories, remembrance and legacy",
    outcome:"Important memories remain organised, accessible and recognisably the person's own.",
    href:"https://mia.orvia.org.uk",
    guide:"mia",
    image:"/products/mia.svg",
    alt:"Illustration of a personal memory and family archive"
  },
  {
    name:"Threshold",
    summary:"A structured concern-review route for situations where something may be wrong but the evidence, significance or proportionate next step is not yet clear.",
    bestFor:"Concerns, early review, evidence gaps and escalation decisions",
    outcome:"A clearer threshold for action without turning uncertainty into a finding of fault.",
    href:"https://threshold.orvia.org.uk",
    guide:"threshold",
    image:"/products/threshold.svg",
    alt:"Illustration of evidence reaching a decision threshold"
  }
] as const;

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

    <CustomerExplainer/>

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
        <div className="lean-product-grid lean-product-grid-visual">
          {products.map((product)=><article key={product.name} className={`lean-product-card identity-${product.guide}`}>
            <div className="lean-product-visual">
              <Image src={product.image} alt={product.alt} width={1200} height={720}/>
              <span className="lean-product-identity" aria-label={`${product.name} product identity`}>
                <b>ORVIA</b><i>{product.name.replace("ORVIA ","")}</i>
              </span>
            </div>
            <div className="lean-product-body">
              <h3>{product.name}</h3>
              <p className="lean-product-summary">{product.summary}</p>
              <div className="lean-product-use">
                <span>Best for</span>
                <strong>{product.bestFor}</strong>
              </div>
              <div className="lean-product-outcome">
                <span>What you get</span>
                <p>{product.outcome}</p>
              </div>
              <div className="lean-product-actions">
                <Link href={`/services/${product.guide}`}>Understand the service →</Link>
                {product.href.startsWith("http")
                  ? <a href={product.href} target="_blank" rel="noreferrer">Open {product.name} →</a>
                  : <Link href={product.href}>Open {product.name} →</Link>}
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="lean-section lean-commerce">
      <div className="shell">
        <div className="lean-section-heading">
          <div>
            <div className="lean-kicker">BUY & START</div>
            <h2>Where checkout is live, buy it now. Where it needs scoping, start the right conversation.</h2>
          </div>
          <p>Only verified live checkout routes are labelled Buy now. Everything else routes to the correct start, discovery or quote journey.</p>
        </div>
        <div className="lean-commerce-grid">
          <article className="lean-commerce-card commerce-voice">
            <div><span>ORVIA VOICE</span><h3>Start with a live Voice package.</h3><p>For organisations that need calls captured, routed and owned rather than lost to voicemail.</p></div>
            <div className="lean-commerce-options">
              <a href="https://buy.stripe.com/14A7sKel27EG5m98zt0oM0G" target="_blank" rel="noreferrer"><b>Voice Essential</b><small>From £495/month</small><strong>Buy now →</strong></a>
              <a href="https://buy.stripe.com/aFa6oG2Ck9MOg0N2b50oM0H" target="_blank" rel="noreferrer"><b>Voice Business</b><small>From £695/month</small><strong>Buy now →</strong></a>
            </div>
            <a className="lean-commerce-more" href="https://voice.orvia.org.uk/#pricing" target="_blank" rel="noreferrer">Compare Voice options →</a>
          </article>
          <article className="lean-commerce-card commerce-web">
            <div><span>ORVIA WEB</span><h3>Buy a finished website route.</h3><p>For businesses that want the site built, connected and handed over without turning it into another technical project.</p></div>
            <div className="lean-commerce-options">
              <a href="https://buy.stripe.com/bJe00iccUaQS6qd02X0oM0L" target="_blank" rel="noreferrer"><b>One Page</b><small>£495 one-off</small><strong>Buy now →</strong></a>
              <a href="https://buy.stripe.com/cNidR83Goe34aGt6rl0oM0M" target="_blank" rel="noreferrer"><b>Business</b><small>£795 one-off</small><strong>Buy now →</strong></a>
            </div>
            <a className="lean-commerce-more" href="https://web.orvia.org.uk/#pricing" target="_blank" rel="noreferrer">Compare Web options →</a>
          </article>
        </div>
        <div className="lean-commerce-secondary">
          <Link href="/services/witness-room">Witness Room — view useful information and current start route →</Link>
          <Link href="/services">Browse every ORVIA service →</Link>
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
