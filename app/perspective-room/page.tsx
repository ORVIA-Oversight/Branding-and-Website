import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentJourney } from "@/components/orvia/AssessmentJourney";
import { HumanReviewPanel } from "@/components/orvia/HumanReviewPanel";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { Method } from "@/components/orvia/Method";

export const metadata:Metadata={
  title:"ORVIA Perspective Room | Health & Social Care Recruitment Assessment",
  description:"A human reasoning, safeguarding judgement and perspective assessment environment for health and social care recruitment and development. Human review remains accountable.",
  alternates:{canonical:"/perspective-room"},
  openGraph:{
    title:"ORVIA Perspective Room™",
    description:"Understanding how people think before asking them to care for others.",
    type:"website",
    url:"/perspective-room"
  },
  keywords:[
    "health and social care recruitment assessment",
    "safeguarding judgement assessment",
    "human reasoning assessment",
    "care worker recruitment assessment",
    "values based recruitment",
    "evidence based recruitment",
    "social care recruitment tools",
    "healthcare recruitment assessment",
    "judgement and decision making assessment"
  ]
};

const assessed=[
  ["Observation discipline","Separate what happened from what was written, inferred or assumed."],
  ["Evidence use","Notice inconsistencies, missing information and the limits of what can be concluded."],
  ["360° perspective","Understand what different people can see, fear, miss or misunderstand."],
  ["Safeguarding judgement","Protect people without turning precaution into a finding of fault."],
  ["Reasoned updating","Change when the evidence warrants it — and hold when it does not."],
  ["Confidence calibration","Match certainty to the quality and completeness of the evidence."],
  ["Integrity under pressure","Maintain boundaries when hierarchy, loyalty or commercial pressure push the other way."],
  ["Adaptability","Change communication style for the person and situation without abandoning values."],
  ["Grace","Explain complexity honestly enough for someone to understand on a difficult day."],
  ["Recovery after error","Recognise, own, correct, learn and reduce the chance of repeating a mistake."],
  ["Accountability","Make proportionate action visible, owned and capable of being checked."],
  ["Humanity","Never reduce a person to a referral, allegation, incident or worst moment."]
] as const;

const audiences=[
  ["Frontline care","Support workers, senior carers and care assistants — proportionate routes focused on observation, communication, evidence and safeguarding awareness."],
  ["Supervisory & clinical","Team leaders, nurses, deputies and coordinators — deeper ambiguity, escalation and professional-boundary scenarios."],
  ["Senior & assurance","Registered managers, safeguarding leads, quality, governance and ORVIA practitioners — the full reasoning, hierarchy and high-consequence route."]
] as const;

const employerBenefits=[
  "See how somebody reasons before relying on CV polish or interview confidence.",
  "Preserve the candidate's first answer and every later change rather than scoring only an outcome.",
  "Distinguish a person who changes because of evidence from one who simply follows the latest voice.",
  "Create structured evidence for a human review conversation — not an automated hiring verdict.",
  "Use role-proportionate routes so frontline candidates are not forced through senior-governance assessment depth."
] as const;

const candidatePromises=[
  "There is no hidden answer you are expected to guess.",
  "Changing your mind is not failure.",
  "Saying “I don't know yet” is valid when you can say what you need to know next.",
  "Short, clear answers are not marked down against polished long ones.",
  "Reasonable adjustments change how you take part, not the standard of judgement being explored.",
  "Every recruitment decision remains human."
] as const;

const faqs=[
  ["Is this a psychometric test?","No. Perspective Room is a staged reasoning environment. It explores how people use evidence, perspective and judgement as new information arrives."],
  ["Does ORVIA use DISC?","ORVIA has a broader Character Assessment and communication-style heritage. Behavioural profile information may provide context, but it must never diagnose a candidate or independently decide employment. Perspective Room focuses on observed reasoning and adaptation."],
  ["Does AI score candidates?","No. Technology may organise responses, preserve versions, route workflow and surface inconsistencies. It must not independently hire, reject, diagnose or make safeguarding findings."],
  ["Why does information arrive in rounds?","Real health and social care decisions are rarely made with a complete picture. The model observes how reasoning changes when evidence, another human perspective or uncomfortable information arrives."],
  ["Can somebody disagree with ORVIA?","Yes. Respectful, evidence-led disagreement can be a strength. The assessment is not designed to reward conformity."],
  ["Is it ready for external provider use?","The design is in build and pilot preparation. It should not be described as validated or proven until legal, fairness, accessibility and pilot verification are complete."]
] as const;

export default function PerspectiveRoomPage(){
  const structuredData={
    "@context":"https://schema.org",
    "@type":"Service",
    name:"ORVIA Perspective Room",
    provider:{"@type":"Organization",name:"ORVIA Oversight Ltd",url:"https://orvia.org.uk"},
    areaServed:"United Kingdom",
    serviceType:"Health and social care recruitment assessment and professional development",
    description:"A staged human reasoning, safeguarding judgement and perspective assessment environment with accountable human review."
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
    <section className="pr-hero">
      <div className="shell pr-hero-grid">
        <div className="pr-hero-copy">
          <div className="eyebrow">ORVIA PERSPECTIVE ROOM™</div>
          <h1>Understanding how people think before asking them to care for others.</h1>
          <p className="pr-hero-lead">A cinematic, evidence-led assessment environment for health and social care recruitment, safeguarding judgement and professional development. Not a puzzle. Not a personality verdict. Not an algorithmic hiring gate.</p>
          <div className="actions">
            <a className="button" href="#discovery">Book discovery</a>
            <a className="button secondary" href="#journey">See the assessment journey</a>
          </div>
          <div className="pr-hero-proof">
            <span>Human first. Human last.</span>
            <span>Evidence before assumption.</span>
            <span>No automated hiring decision.</span>
          </div>
        </div>
        <div className="pr-hero-visual" aria-label="Layered Perspective Room visual showing changing evidence and human review">
          <div className="pr-room-frame">
            <div className="pr-room-grid"/>
            <div className="pr-orbit pr-orbit-a"/>
            <div className="pr-orbit pr-orbit-b"/>
            <div className="pr-core"><small>THE QUESTION</small><strong>What changes<br/>when you move<br/>around it?</strong></div>
            <span className="pr-signal pr-signal-a">EVIDENCE</span>
            <span className="pr-signal pr-signal-b">PERSPECTIVE</span>
            <span className="pr-signal pr-signal-c">HUMAN REVIEW</span>
          </div>
        </div>
      </div>
    </section>

    <section className="pr-manifesto">
      <div className="shell">
        <p>Most recruitment asks people to <strong>present their best answer.</strong> Perspective Room is interested in something harder: <strong>how they reach it, what they missed, what changes their mind and what they do when the evidence becomes uncomfortable.</strong></p>
      </div>
    </section>

    <section id="journey" className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">ASSESSMENT JOURNEY</div><h2>The world changes around the candidate.</h2></div>
          <p>They are not given five chances to “get it right”. Evidence arrives in rounds. Every answer is preserved so the trajectory itself becomes evidence.</p>
        </div>
        <AssessmentJourney/>
      </div>
    </section>

    <section className="section pr-cinematic-break">
      <div className="shell pr-cinematic-grid">
        <div>
          <div className="eyebrow light">THE 360° PRINCIPLE</div>
          <h2>An apple. A banana. A person.</h2>
        </div>
        <div className="pr-cinematic-copy">
          <p>Move around any object and the view changes. A human situation changes even more: history, fear, communication, power, environment and evidence alter what each person can see.</p>
          <p>Perspective Room does not ask candidates to abandon their judgement. It asks whether they can deliberately change viewpoint <strong>without changing the evidence.</strong></p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT IS ASSESSED</div><h2>Capability, not conformity.</h2></div>
          <p>The model separates the quality of reasoning from whether somebody happens to land on the same first conclusion as the assessor.</p>
        </div>
        <div className="pr-domain-grid">
          {assessed.map(([title,copy],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell pr-character-grid">
        <div>
          <div className="eyebrow">ORVIA CHARACTER ASSESSMENT</div>
          <h2>What they say. How they profile. What they actually do.</h2>
          <p className="lead">Perspective Room connects with the broader ORVIA Character Assessment without turning behavioural style into a verdict. The important comparison is between self-description, structured character evidence and observed behaviour under pressure.</p>
          <div className="pr-character-flow">
            <div><span>01</span><strong>Human Behind the Application</strong><small>Values, motivation, boundaries and own words</small></div>
            <div><span>02</span><strong>ORVIA Character Assessment</strong><small>Communication, integrity, self-awareness and behavioural tendency</small></div>
            <div><span>03</span><strong>Perspective Room</strong><small>Observed reasoning under changing evidence</small></div>
            <div><span>04</span><strong>Integrity Gap Review</strong><small>Compare stated values with behaviour when it became difficult</small></div>
            <div><span>05</span><strong>Human Review</strong><small>Founder / senior conversation and accountable panel decision</small></div>
          </div>
        </div>
        <div className="pr-integrity-card">
          <span>INTEGRITY GAP</span>
          <blockquote>“I always challenge unsafe practice.”</blockquote>
          <div className="pr-integrity-divider"/>
          <p><strong>Observed:</strong> hesitated when a senior manager asked for a concern to remain internal.</p>
          <p><strong>Review question:</strong> “Help me understand the difference.”</p>
          <small>Contradiction is a question for human review — not an automatic fail.</small>
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">ROLE-PROPORTIONATE</div><h2>Same principles. Different depth.</h2></div>
          <p>Frontline candidates should not be filtered by a four-hour senior-governance assessment. The route scales with the responsibility of the role.</p>
        </div>
        <div className="pr-audience-grid">
          {audiences.map(([title,copy],i)=><article key={title}><span>Tier {String.fromCharCode(65+i)}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head"><div><div className="eyebrow">FOR EMPLOYERS</div><h2>See the reasoning behind the answer.</h2></div><p>Designed for organisations that need more than interview confidence when recruiting into roles where judgement, safeguarding and evidence matter.</p></div>
        <div className="pr-benefit-grid">{employerBenefits.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell pr-candidate-grid">
        <div><div className="eyebrow">CANDIDATE EXPERIENCE</div><h2>Challenge without humiliation.</h2><p className="lead">Difficulty comes from ambiguity, evidence and perspective — not traps, obscure puzzles, countdown theatrics or trying to catch somebody out.</p></div>
        <div className="pr-promise-list">{candidatePromises.map(item=><div key={item}><span>✓</span><p>{item}</p></div>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head"><div><div className="eyebrow">EVIDENCE & HUMAN REVIEW</div><h2>No black-box suitability score.</h2></div><p>The reviewer sees the candidate's own words, version history, confidence shifts, assessor evidence and areas of disagreement.</p></div>
        <HumanReviewPanel/>
      </div>
    </section>

    <section className="section pr-grace">
      <div className="shell pr-grace-grid">
        <div><div className="eyebrow">THE GRACE PRINCIPLE</div><h2>If it cannot be understood at the worst moment, it is not finished.</h2></div>
        <div><p>Candidates may be given a complex professional explanation and asked to make it understandable to a person receiving care or a family member — honestly, simply and without false reassurance.</p><strong>Clarity is not simplification of truth. It is respect for the person who needs it.</strong></div>
      </div>
    </section>

    <Method/>

    <section className="section section-ink">
      <div className="shell pr-boundaries">
        <div><div className="eyebrow light">TRUST & BOUNDARIES</div><h2>Technology can organise the evidence. A human remains accountable.</h2></div>
        <div className="pr-boundary-grid">
          <article><strong>AI may</strong><p>transcribe, organise, preserve versions, compare evidence and surface inconsistencies.</p></article>
          <article><strong>AI must not</strong><p>hire, reject, diagnose, score safeguarding risk or make a high-consequence finding.</p></article>
          <article><strong>Assessors must</strong><p>rate from the candidate's own responses, record evidence and preserve disagreement.</p></article>
          <article><strong>Decision panels must</strong><p>remain human, record reasons and keep the path to challenge visible.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head"><div><div className="eyebrow">CASE STUDIES / PILOTS</div><h2>Build first. Validate next. Never overclaim.</h2></div><p>Perspective Room is being prepared as ORVIA's first live template proof job. External claims of effectiveness should wait for shadow piloting, legal review, accessibility checks and evidence.</p></div>
        <div className="pr-pilot-card">
          <div><span>STATUS</span><strong>Build / pilot preparation</strong></div>
          <div><span>FIRST CONTROL</span><strong>Shadow pilot before employment decisions</strong></div>
          <div><span>PUBLIC CLAIM</span><strong>Not yet validated or proven</strong></div>
          <div><span>GO / NO-GO</span><strong>Human + VERA + VITA evidence</strong></div>
        </div>
      </div>
    </section>

    <section id="discovery" className="section section-soft">
      <div className="shell pr-discovery-grid">
        <div>
          <div className="eyebrow">FOR PROVIDERS & EMPLOYERS</div>
          <h2>Scope the problem before pricing the solution.</h2>
          <p className="lead">No pricing is invented on this site. Until a controlled commercial model is approved, Perspective Room uses a discovery / proposal route.</p>
          <div className="pr-commercial-chain"><span>Understand</span><b>→</b><span>Trust</span><b>→</b><span>Scope</span><b>→</b><span>IRIS</span><b>→</b><span>Owner</span><b>→</b><span>Onboard</span></div>
        </div>
        <LeadCaptureForm productId="perspective-room"/>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head"><div><div className="eyebrow">FAQ</div><h2>Questions worth asking before you use it.</h2></div></div>
        <div className="pr-faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <section className="pr-final">
      <div className="shell pr-final-grid">
        <div><div className="eyebrow light">ORVIA PERSPECTIVE ROOM™</div><h2>Don't ask only whether they got the answer right.</h2><p>Ask whether you can defend how they got there.</p></div>
        <div className="actions"><a className="button light-button" href="#discovery">Book discovery</a><Link className="button pr-outline-light" href="/trust">Review ORVIA trust</Link></div>
      </div>
    </section>
  </>;
}
