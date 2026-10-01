import Link from "next/link";
import Image from "next/image";
import { ArmedForcesCommitment } from "@/components/trust/ArmedForcesCommitment";
import { SiteIcon } from "@/components/visual/SiteIcon";

const problems = [
  ["Pressure is building","Something keeps recurring, escalating or consuming management time."],
  ["The record does not match reality","Paperwork says one thing. Staff, families, customers or outcomes suggest another."],
  ["Nobody owns the next action","Actions exist, but ownership, deadlines, follow-up or evidence of completion are weak."],
  ["You need to know before it becomes a crisis","A concern is not yet a catastrophe, but ignoring it would be expensive, unsafe or damaging."]
] as const;

const fixes = [
  ["O","Observe","What is actually happening?","Capture the signal properly: calls, concerns, evidence, activity and context."],
  ["R","Review","What does the record show?","Bring chronology, evidence, competing accounts and missing information together."],
  ["V","Verify","What can we prove?","Separate evidence from assumption and check whether promised action really happened."],
  ["I","Interpret","What does it mean in context?","Turn verified information into usable understanding without automating human judgement."],
  ["A","Act","What do we do next?","Turn understanding into owned action, implementation, delivery and re-checks."]
] as const;

const specialist = [
  {
    name:"Witness Room",
    stage:"R — REVIEW",
    summary:"Structure evidence, chronology and challenge before a difficult professional, regulatory or legal conversation.",
    image:"/products/witness-room.svg",
    href:"https://witness.orvia.org.uk",
    action:"Open Witness Room"
  },
  {
    name:"ORVIA Threshold",
    stage:"R — REVIEW",
    summary:"Review a concern before commitment, escalation or another high-consequence decision.",
    image:"/products/threshold.svg",
    href:"https://threshold.orvia.org.uk",
    action:"Explore Threshold"
  },
  {
    name:"MIA",
    stage:"O — OBSERVE",
    summary:"Preserve stories, voice, photographs, timelines and messages while the opportunity still exists.",
    image:"/products/mia.svg",
    href:"https://mia.orvia.org.uk",
    action:"Explore MIA"
  },
  {
    name:"ORVIA Insight",
    stage:"I — INTERPRET",
    summary:"Structured human reasoning, perspective and organisational insight without reducing people to a score.",
    image:"/products/perspective-room.svg",
    href:"https://orviainsight.co.uk",
    action:"Explore Insight"
  }
] as const;

const caseStudies = [
  ["Missed enquiries","A demonstration of how Voice turns missed calls into owned actions, follow-up and a visible audit trail."],
  ["Evidence under pressure","A demonstration of how Witness Room separates chronology, evidence, gaps and competing explanations."],
  ["A website that has to sell","A demonstration of how ORVIA Web connects proposition, trust, price, action, onboarding and delivery."]
] as const;

export default function Home(){
  return <>
    <section className="master-hero">
      <div className="master-hero-bg" aria-hidden="true"/>
      <div className="shell master-hero-grid">
        <div className="master-hero-copy">
          <div className="lean-kicker">ORVIA OVERSIGHT · INDEPENDENT · HUMAN-CENTRED</div>
          <h1>Find what is going wrong.<br/><span>Fix it before it becomes the thing that breaks the service.</span></h1>
          <p className="master-hero-lead">ORVIA helps when something does not add up, keeps recurring, is consuming management time or risks becoming much bigger. We find the pressure point, test the evidence, help fix the system and verify whether the improvement worked.</p>
          <div className="lean-actions master-hero-actions">
            <Link href="/work-with-orvia" className="button">Tell us what needs fixing</Link>
            <a href="#start" className="button secondary">See what you can start now</a>
          </div>
          <div className="master-proof">
            <span>Evidence before assumption</span>
            <span>Human first. Human last.</span>
            <span>Calm challenge. Accountable action.</span>
          </div>
        </div>
        <div className="master-hero-panel">
          <div className="master-hero-video-placeholder" aria-label="Future ORVIA hero explainer video">
            <div className="master-hero-video-overlay">
              <span className="master-hero-video-label">HERO VIDEO PLACEHOLDER</span>
              <strong>60-second ORVIA explainer</strong>
              <p>Full-size hero film will sit here once the visual design is signed off.</p>
              <div className="master-hero-video-play" aria-hidden="true">▶</div>
            </div>
            <div className="master-hero-method-overlay">
              <span>THE ORVIA METHOD</span>
              <strong>OBSERVE → REVIEW → VERIFY → INTERPRET → ACT</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="master-intro">
      <div className="shell master-intro-grid">
        <div>
          <div className="lean-kicker">WHY ORVIA EXISTS</div>
          <h2>We are not here to make broken systems look better. We are here to help make them better.</h2>
        </div>
        <div>
          <div className="home-story-media-placeholder">
            <span>IMAGE PLACEHOLDER</span>
            <strong>ORVIA in the real world</strong>
            <small>Use approved documentary-style imagery showing people, evidence, leadership and practical problem-solving.</small>
          </div>
          <p>ORVIA grew from years of seeing the same gap: what a system records is not always what people experience. A form can be complete, a policy can exist and a meeting can be minuted — while the real problem continues underneath.</p>
          <p>We start with reality rather than reassurance: what is strong, what does not fit, what is missing, what needs action and how we will know whether the fix actually worked.</p>
          <Link href="/founder" className="lean-inline-cta">Read the ORVIA story →</Link>
        </div>
      </div>
    </section>

    <section className="lean-section compact-section" id="problems">
      <div className="shell">
        <div className="lean-section-heading compact-heading">
          <div>
            <div className="lean-kicker">WHEN TO CALL ORVIA</div>
            <h2>Bring us the difficult, stuck or recurring problem.</h2>
          </div>
          <p>Independent problem-solving without cover-up, blame theatre or pretending that software replaces accountable people.</p>
        </div>
        <div className="compact-card-grid four">
          {problems.map(([title,body],index)=><article className="compact-card problem-card visual-card" key={title}>
            <div className="visual-card-icon"><SiteIcon kind={(["pressure","record","owner","alert"] as const)[index]}/></div>
            <span className="card-index">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="start" className="lean-section priority-commerce-section">
      <div className="shell">
        <div className="lean-section-heading compact-heading">
          <div>
            <div className="lean-kicker">START NOW</div>
            <h2>Two practical ways to put ORVIA to work today.</h2>
          </div>
          <p>Research first if you want to. When you are ready, the commercial route should be equally clear.</p>
        </div>

        <div className="priority-commerce-grid">
          <article className="priority-commerce-card voice">
            <div className="priority-media"><Image src="/products/voice.svg" alt="" width={900} height={520}/><span>O — OBSERVE</span></div>
            <div className="priority-copy">
              <div className="lean-kicker">ORVIA VOICE</div>
              <h3>Important calls should become owned work, not forgotten voicemail.</h3>
              <p>Capture why somebody called, route it properly, create a visible next action and make follow-up accountable.</p>
              <div className="priority-actions"><a className="button" href="https://orviavoice.co.uk">Understand Voice</a><a className="button secondary" href="https://orviavoice.co.uk/#pricing">Price / start →</a></div>
            </div>
          </article>

          <article className="priority-commerce-card web">
            <div className="priority-media"><Image src="/products/web.svg" alt="" width={900} height={520}/><span>A — ACT</span></div>
            <div className="priority-copy">
              <div className="lean-kicker">ORVIA WEB</div>
              <h3>Your website should tell the story, earn trust and lead somewhere useful.</h3>
              <p>We internalise the business, define the story and boundaries, then build the commercial journey around a controlled reusable system.</p>
              <div className="priority-actions"><a className="button" href="https://web.orvia.org.uk">Understand Web</a><a className="button secondary" href="https://web.orvia.org.uk/#start">Start a website →</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="lean-section section-soft compact-section">
      <div className="shell">
        <div className="lean-section-heading compact-heading">
          <div>
            <div className="lean-kicker">SPECIALIST ROUTES</div>
            <h2>Different problems. The same evidence-led discipline.</h2>
          </div>
          <p>Specialist experiences stay distinct above the surface while sharing ORVIA's trust, method and human-control principles underneath.</p>
        </div>
        <div className="commercial-compact-grid">
          {specialist.map(product=><article key={product.name} className="commercial-compact-card">
            <div className="commercial-compact-image"><Image src={product.image} alt="" width={800} height={420}/><span>{product.stage}</span></div>
            <div className="commercial-compact-body"><h3>{product.name}</h3><p>{product.summary}</p><a href={product.href}>{product.action} →</a></div>
          </article>)}
        </div>
        <div className="commercial-master-actions">
          <Link href="/services" className="button">Browse all ORVIA routes</Link>
          <Link href="/work-with-orvia" className="button secondary">Not sure? Bring us the problem</Link>
        </div>
      </div>
    </section>

    <section className="lean-section lean-section-dark compact-section">
      <div className="shell">
        <div className="lean-section-heading inverse compact-heading">
          <div>
            <div className="lean-kicker">HOW ORVIA WORKS</div>
            <h2>One method — without making the buyer learn the whole operating architecture.</h2>
          </div>
          <p>The deeper workflow, evidence and verification layers remain underneath the customer experience until they are useful to understand.</p>
        </div>
        <div className="method-flow-rail" aria-label="ORVIA method flow">
          {fixes.map(([stage,title,question,body],index)=><article key={stage} className={`method-flow-step stage-border-${stage.toLowerCase()}`}>
            <div className="method-flow-icon"><SiteIcon kind={(["observe","review","verify","interpret","act"] as const)[index]}/></div>
            <span>{stage}</span>
            <h3>{title}</h3>
            <strong>{question}</strong>
            <p>{body}</p>
          </article>)}
        </div>
        <div className="method-deeper-link"><Link href="/method" className="button light-button">Explore the Method & Trust layers</Link></div>
      </div>
    </section>

    <section className="story-band">
      <div className="shell story-band-grid">
        <div className="story-band-copy">
          <div className="lean-kicker">THE STORY BEHIND THE SYSTEM</div>
          <h2>ORVIA did not begin with software.</h2>
          <p>It began with frontline responsibility, operational pressure and a repeated question: why do systems become so good at recording activity while still missing the person, the context or the warning sign underneath it?</p>
          <p>Six months of building, challenging and rebuilding turned separate ideas into one method and one connected estate.</p>
          <blockquote>“Paperwork is rarely the whole story.”</blockquote>
          <Link href="/founder" className="button light-button">Read why ORVIA was built</Link>
        </div>
        <div className="story-band-media" aria-label="Founder film placeholder">
          <div className="story-film-placeholder"><span>FOUNDER FILM</span><strong>Why ORVIA exists</strong><small>Final founder film / approved still will occupy this slot.</small></div>
        </div>
      </div>
    </section>

    <section className="lean-section compact-section human-influence-section">
      <div className="shell human-influence-grid">
        <div>
          <div className="lean-kicker">HUMAN FIRST</div>
          <h2>People should not disappear behind the process.</h2>
          <p>Founder development includes Oliver McGowan training. Its emphasis on better understanding of autistic people and people with a learning disability reinforces ORVIA's own focus on communication, lived experience and reasonable adjustment.</p>
          <p className="boundary-note">Reference to the training describes founder learning and influence only. It does not imply endorsement of ORVIA by the training programme, NHS England or government.</p>
        </div>
        <div className="human-influence-actions">
          <a className="button secondary" href="https://www.gov.uk/government/collections/mandatory-training-on-learning-disability-and-autism" target="_blank" rel="noreferrer">About the Oliver McGowan training</a>
          <Link className="button" href="/founder">Founder experience & boundaries</Link>
        </div>
      </div>
    </section>

    <section className="lean-section compact-section">
      <div className="shell">
        <div className="lean-section-heading compact-heading">
          <div>
            <div className="lean-kicker">FREE TOOLS</div>
            <h2>Useful before you buy anything.</h2>
          </div>
          <p>Practical tools should help somebody understand the problem even when ORVIA is not the right commercial answer.</p>
        </div>
        <div className="compact-card-grid three">
          <article className="compact-card resource visual-card"><div className="visual-card-icon"><SiteIcon kind="checklist"/></div><span>FREE</span><h3>Concern clarity checklist</h3><p>Separate what happened, what is known, what is assumed and what is still missing.</p><Link href="/toolkits">Open toolkit →</Link></article>
          <article className="compact-card resource visual-card"><div className="visual-card-icon"><SiteIcon kind="evidence"/></div><span>FREE</span><h3>Evidence readiness checklist</h3><p>Check whether chronology, originals, decisions, owners and gaps are visible before review.</p><Link href="/toolkits">Open toolkit →</Link></article>
          <article className="compact-card resource visual-card"><div className="visual-card-icon"><SiteIcon kind="journey"/></div><span>FREE</span><h3>Commercial journey check</h3><p>Test whether your website genuinely moves somebody from understanding to a real next action.</p><Link href="/toolkits">Open toolkit →</Link></article>
        </div>
      </div>
    </section>

    <section className="lean-section section-soft compact-section">
      <div className="shell">
        <div className="lean-section-heading compact-heading">
          <div><div className="lean-kicker">CASE STUDIES</div><h2>Show the method. Do not invent the outcome.</h2></div>
          <p>Until client evidence is approved for publication, ORVIA uses clearly labelled demonstration cases to show how the operating model works.</p>
        </div>
        <div className="compact-card-grid three">
          {caseStudies.map(([title,body],index)=><article className="compact-card case-visual-card" key={title}>
            <div className="case-media-placeholder">
              <SiteIcon kind={(["voice","case","web"] as const)[index]}/>
              <span>CASE VISUAL</span>
            </div>
            <span className="demo-label">DEMONSTRATION</span><h3>{title}</h3><p>{body}</p><Link href="/case-studies">View case study →</Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="lean-section compact-section">
      <div className="shell master-updates-grid">
        <div>
          <div className="lean-kicker">INSIGHTS & UPDATES</div>
          <h2>What ORVIA is learning, building and challenging.</h2>
          <p>Insights hold explainers, founder notes, evidence practice and product updates without turning the homepage into a feed.</p>
          <Link href="/insights" className="button">Read insights</Link>
        </div>
        <div className="master-updates-card">
          <strong>Social & publishing hub</strong>
          <p>Verified ORVIA social channels will be linked here as they are confirmed, alongside founder notes, product releases and explainers.</p>
          <div className="social-link-placeholders">
            <span>LINKEDIN</span><span>FACEBOOK</span><span>INSTAGRAM</span><span>VIDEO</span>
          </div>
          <Link href="/contact">Follow / contact ORVIA →</Link>
        </div>
      </div>
    </section>

    <section className="lean-section lean-trust-section compact-section">
      <div className="shell lean-trust-grid">
        <div>
          <div className="lean-kicker">VERIFIED TRUST</div>
          <h2>Proof should be easy to inspect.</h2>
          <p>Company credentials stay separate from founder credentials. Important claims are checked before publication.</p>
          <Link href="/trust" className="lean-inline-cta">Open Trust Centre →</Link>
        </div>
        <div className="lean-trust-list">
          <span><b>Company</b>16123685</span>
          <span><b>ICO</b>ZC152311</span>
          <span><b>Armed Forces Covenant</b>Signatory</span>
          <span><b>ERS</b>Bronze Award holder</span>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer"><b>Trust A Veteran</b>Public profile →</a>
        </div>
      </div>
    </section>

    <ArmedForcesCommitment/>

    <section className="lean-final">
      <div className="shell">
        <div><span>ORVIA OVERSIGHT</span><h2>Tell us where the pressure is. We will help you see what needs fixing.</h2></div>
        <Link href="/work-with-orvia" className="button light-button">Bring us the problem</Link>
      </div>
    </section>
  </>;
}
