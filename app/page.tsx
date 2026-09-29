import Link from "next/link";
import { Method } from "@/components/orvia/Method";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";
import { products, productIdentityRule } from "@/config/products";

const cards=[
  ["Fragmented systems","Connect evidence, ownership and assurance around one coherent operating model.","A clearer line from concern to action."],
  ["Weak provenance","Preserve originals, versions, assertions, dissent and missing evidence.","More defensible decisions."],
  ["Actions that disappear","Assign ownership, timers, gates and explicit failure states.","Visible accountability."],
  ["Assurance that stops at closure","Verify implementation, effectiveness and sustained impact.","Learning that continues after action."]
];
const steps=["Capture","Understand","Verify","Human review","Act"];

export default function Home(){return <>
  <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><div className="eyebrow">ORVIA BRAND & WEB SYSTEM</div><h1>One brand system. Every ORVIA product aligned.</h1><p>This is the canonical ORVIA design and web reference: one visual language, one trust layer, one component system and one governed standard for every ORVIA public product.</p><div className="actions"><Link className="button" href="/contact">Book a discovery</Link><Link className="button secondary" href="#platform">Explore the platform</Link></div><div className="trust-inline"><span>Independent</span><span>Evidence-led</span><span>Human-centred</span><span>ICO registered</span></div></div><div className="hero-media"><div className="media-visual"><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="core">ORVIA</div><div className="signal signal-1">Evidence</div><div className="signal signal-2">Assurance</div><div className="signal signal-3">Action</div></div></div></div></section>
  <section id="platform" className="section"><div className="shell"><div className="section-head"><div><div className="eyebrow">WHAT ORVIA DOES</div><h2>Make complex organisational truth easier to see — and harder to lose.</h2></div><p>ORVIA is designed for environments where fragmented systems, incomplete evidence and weak follow-through create risk.</p></div><div className="card-grid">{cards.map(([problem,doing,outcome])=><article className="feature-card" key={problem}><span className="card-label">Problem</span><h3>{problem}</h3><p>{doing}</p><div className="card-outcome"><strong>Outcome</strong><span>{outcome}</span></div></article>)}</div></div></section>
  <section className="section"><div className="shell split"><div className="editorial-media"><div className="visual-caption">Human first. Human last.</div></div><div><div className="eyebrow">DESIGNED AROUND JUDGEMENT</div><h2>Technology should organise evidence, not decide who is right.</h2><p className="lead">ORVIA separates capture, workflow, evidence, assurance and human decision. AI can assist with structure and inconsistency detection, but it does not make safeguarding, clinical or culpability decisions.</p><Link className="text-link" href="/trust">See our trust model →</Link></div></div></section>
  <section className="section section-soft"><div className="shell"><div className="eyebrow">HOW IT WORKS</div><h2>From signal to proportionate action.</h2><div className="steps">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong></div>)}</div></div></section>
  <section className="section"><div className="shell video-block"><div><div className="eyebrow">10-SECOND EXPLAINER</div><h2>One connected pathway, not another disconnected tool.</h2><p>Video slot is production-ready with poster, captions, reduced-motion fallback and analytics hooks. Media should be loaded only from approved ORVIA assets.</p></div><div className="video-placeholder"><span>APPROVED VIDEO ASSET</span><strong>00:10</strong></div></div></section>
  <section className="section section-ink"><div className="shell case-feature"><div><div className="eyebrow light">FEATURED CASE STUDY</div><h2>From fragmented concern to visible accountability.</h2><p>A reference case-study module showing problem, approach, outcome, limitations and related services without hard-coding the story into the page.</p><Link href="/case-studies" className="button light-button">View case studies</Link></div><div className="case-metrics"><div><span>01</span><strong>Original evidence preserved</strong></div><div><span>02</span><strong>Ownership made explicit</strong></div><div><span>03</span><strong>Effectiveness rechecked</strong></div></div></div></section>
  <Method/>
  <section className="section identity-system" id="identity-system"><div className="shell">
  <div className="section-head identity-head"><div><div className="eyebrow">ORVIA IDENTITY SYSTEM</div><h2>One masterbrand. Every site visibly its own.</h2></div><p>The ORVIA structure stays consistent, but each product must carry its approved identity through the entire website — not just the logo in the header.</p></div>
  <div className="identity-rule"><div><span className="identity-rule-number">01</span><h3>The logo starts the identity. It does not end it.</h3><p>{productIdentityRule.requirement}</p></div><div className="identity-surfaces">{productIdentityRule.surfaces.map(surface=><span key={surface}>{surface}</span>)}</div></div>
  <div className="identity-grid">
    {Object.values(products).map(product=><article className="identity-card" key={product.name} style={{"--product-accent":product.accent} as React.CSSProperties}>
      <div className="identity-logo-stage"><span className="identity-mark">{product.mark}</span><div className="identity-lockup"><strong>{product.name}</strong><small>{product.visualCue}</small></div></div>
      <div className="identity-copy"><div><span className="identity-accent-dot"/><b>{product.shortName}</b></div><p>{product.descriptor}</p><small>{product.url.replace("https://","")}</small></div>
      <div className="identity-swatch"><span/><span/><span/></div>
    </article>)}
  </div>
  <div className="identity-governance">
    <div><div className="eyebrow">NON-NEGOTIABLE</div><h3>Site-wide brand matching</h3></div>
    <p>A product logo and its accent define a site-level theme token. Header, CTA treatment, highlights, selected cards, visual motifs, favicon, OG image and footer reference must all resolve from the same product configuration. No page should look like a generic ORVIA page with a different badge pasted onto it.</p>
  </div>
</div></section>
  <section className="section section-soft"><div className="shell trust-preview"><div><div className="eyebrow">TRUST & SECURITY</div><h2>Claims should be supported by evidence.</h2><p>ORVIA publishes what can be substantiated, separates public trust information from internal risk registers, and keeps human oversight explicit.</p></div><div className="trust-list"><span>Privacy & data rights</span><span>DPIA approach</span><span>Security practices</span><span>Human oversight</span><span>Working toward Cyber Essentials</span><Link href="/trust">Open Trust Centre →</Link></div></div></section>
  <ArmedForcesCommitment/>
  <section className="final-cta"><div className="shell"><div><div className="eyebrow light">START A CONVERSATION</div><h2>Bring us the problem. We’ll help make the evidence clearer.</h2></div><Link href="/contact" className="button light-button">Talk to ORVIA</Link></div></section>
</>}
