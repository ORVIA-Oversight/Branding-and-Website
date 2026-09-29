import Link from "next/link";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";

const needs = [
  {
    title:"I need help with a concern",
    body:"Start with what has happened. ORVIA helps structure the concern, preserve the evidence and identify a proportionate next step.",
    href:"/work-with-orvia",
    cta:"Tell us what is happening"
  },
  {
    title:"I run a service or organisation",
    body:"Strengthen governance, safeguarding, assurance, operational grip and evidence of improvement without adding unnecessary complexity.",
    href:"/work-with-orvia",
    cta:"See how ORVIA can help"
  },
  {
    title:"I need evidence reviewed or challenged",
    body:"Use structured evidence review, chronology, competing explanations and human challenge for consequential or disputed matters.",
    href:"https://witness.orvia.org.uk",
    cta:"Open Witness Room",
    external:true
  },
  {
    title:"I need calls captured and followed up",
    body:"ORVIA Voice provides accountable call capture, routing and follow-up, with human judgement kept where it matters.",
    href:"https://voice.orvia.org.uk",
    cta:"Explore ORVIA Voice",
    external:true
  },
  {
    title:"I want to work with ORVIA",
    body:"Explore practitioner, founder-led and career routes, including the training and authorisation standards behind ORVIA casework.",
    href:"/work-with-orvia",
    cta:"Work with ORVIA"
  },
  {
    title:"I am already a customer",
    body:"Open your workspace, cases, evidence and current actions.",
    href:"https://workspace.orvia.org.uk",
    cta:"Customer workspace",
    external:true
  }
] as const;

const outcomes = [
  ["See the real problem","Bring fragmented evidence, concerns, workflows and context into one clearer picture."],
  ["Know what needs action","Make ownership, deadlines, uncertainty and escalation visible."],
  ["Prove what changed","Keep the evidence showing what was found, what was done and whether the improvement worked."],
  ["Keep judgement human","Use technology to organise, compare and challenge without handing high-consequence decisions to a machine."]
] as const;

const process = [
  ["01","Tell us what is happening"],
  ["02","Preserve and structure the evidence"],
  ["03","Test what the evidence actually supports"],
  ["04","Agree the proportionate action"],
  ["05","Verify whether the change worked"]
] as const;

const routes = [
  ["ORVIA Voice","24/7 call capture and accountable follow-up.","https://voice.orvia.org.uk"],
  ["Witness Room","Structured evidence preparation, challenge and controlled perspectives.","https://witness.orvia.org.uk"],
  ["Perspective Room","Human reasoning, safeguarding judgement and evidence-led assessment.","/perspective-room"],
  ["ORVIA Web","Lean commercial websites and managed web delivery.","https://web.orvia.org.uk"],
  ["MIA","Memory preservation, family archive and legacy.","https://mia.orvia.org.uk"],
  ["Threshold","Structured concern and evidence review.","https://threshold.orvia.org.uk"]
] as const;

export default function Home(){
  return <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">ORVIA OVERSIGHT</div>
          <h1>Bring us the problem. We help make the evidence clearer.</h1>
          <p>ORVIA helps people and organisations understand concerns, strengthen governance, test evidence and turn findings into accountable improvement.</p>
          <div className="actions">
            <Link className="button" href="/work-with-orvia">Tell us what is happening</Link>
            <Link className="button secondary" href="#start">Choose what you need</Link>
          </div>
          <div className="trust-inline">
            <span>Independent</span>
            <span>Evidence-led</span>
            <span>Human-centred</span>
            <span>ICO registered</span>
            <span>ERS Bronze</span>
          </div>
        </div>
        <div className="hero-media">
          <div className="media-visual">
            <div className="orbit orbit-a"></div>
            <div className="orbit orbit-b"></div>
            <div className="core">ORVIA</div>
            <div className="signal signal-1">Understand</div>
            <div className="signal signal-2">Evidence</div>
            <div className="signal signal-3">Improve</div>
          </div>
        </div>
      </div>
    </section>

    <section id="start" className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">START WITH YOUR NEED</div>
            <h2>You do not need to understand the ORVIA system before you can use it.</h2>
          </div>
          <p>Choose the route closest to what you need now. The deeper methodology, governance and evidence standards remain available when you want them.</p>
        </div>
        <div className="card-grid">
          {needs.map(item => <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.external
              ? <a className="text-link" href={item.href} target="_blank" rel="noreferrer">{item.cta} →</a>
              : <Link className="text-link" href={item.href}>{item.cta} →</Link>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT ORVIA HELPS YOU ACHIEVE</div><h2>Clarity, accountability and evidence of real improvement.</h2></div>
          <p>ORVIA is designed to reduce noise, not create another layer of it.</p>
        </div>
        <div className="card-grid">
          {outcomes.map(([title,body]) => <article className="feature-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="eyebrow">HOW IT WORKS</div>
        <h2>From concern to verified improvement.</h2>
        <div className="steps">
          {process.map(([number,label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}
        </div>
        <p className="lead">Technology can organise evidence, identify gaps and challenge assumptions. Safeguarding, clinical, culpability and other high-consequence judgements remain human decisions.</p>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">MAIN ROUTES</div><h2>Use the service that matches the job.</h2></div>
          <p>Product names should never be a barrier. Every ORVIA service is paired with a plain-English purpose.</p>
        </div>
        <div className="card-grid">
          {routes.map(([name,body,href]) => <article className="feature-card" key={name}>
            <h3>{name}</h3>
            <p>{body}</p>
            {href.startsWith("http")
              ? <a className="text-link" href={href} target="_blank" rel="noreferrer">Open service →</a>
              : <Link className="text-link" href={href}>Open service →</Link>}
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow">TRUST, WITHOUT THE WALL OF TEXT</div>
          <h2>Important proof should be easy to find, not forced in front of every user.</h2>
          <p>ORVIA publishes verified claims, keeps human authority explicit and separates public trust information from internal governance detail.</p>
        </div>
        <div className="trust-list">
          <span>Companies House 16123685</span>
          <span>ICO ZC152311</span>
          <span>Armed Forces Covenant signatory</span>
          <span>Defence Employer Recognition Scheme Bronze Award</span>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Trust A Veteran profile →</a>
          <Link href="/trust">Open Trust Centre →</Link>
        </div>
      </div>
    </section>

    <ArmedForcesCommitment/>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">BRAND & WEB GOVERNANCE</div><h2>Need the system underneath the experience?</h2></div>
          <p>This site also remains the canonical reference for teams building and governing the wider ORVIA estate. Depth is available, but it is no longer imposed on the first-time user.</p>
        </div>
        <div className="card-grid">
          <article className="feature-card"><h3>ORVIA systems</h3><p>IRIS, HIVE, VITA, VERA, Command and the controlled AI architecture.</p><Link className="text-link" href="/systems">Open systems reference →</Link></article>
          <article className="feature-card"><h3>Commercial standard</h3><p>The release gate from offer to governed delivery, including real next actions and onboarding.</p><Link className="text-link" href="/commercial">Open commercial standard →</Link></article>
          <article className="feature-card"><h3>Website estate</h3><p>The canonical route for migrating ORVIA sites into the shared brand, UX and release standard.</p><Link className="text-link" href="/estate">Open estate reference →</Link></article>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div>
          <div className="eyebrow light">START WITH THE PROBLEM</div>
          <h2>You do not need to diagnose it before you contact ORVIA.</h2>
        </div>
        <Link href="/work-with-orvia" className="button light-button">Tell us what is happening</Link>
      </div>
    </section>
  </>;
}
