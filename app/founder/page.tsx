import type { Metadata } from "next";
import Link from "next/link";
import { founderCredentials } from "@/config/founderCredentials";

export const metadata:Metadata={
  title:"Founder Story | Why ORVIA Exists",
  description:"How John McGill's experience across the Armed Forces, austere environments, ambulance operations, regulated care and strategic leadership became the ORVIA operating method.",
  alternates:{canonical:"/founder"}
};

const journey=[
  ["UK Armed Forces","Discipline, teamwork and responsibility — learning how individual actions connect to a wider operating picture."],
  ["Austere & high-risk environments","Situational awareness, composure and judgement when plans meet reality."],
  ["Ambulance operations","Around 11 years across ambulance and healthcare operations, including mental-health work, patient transport, urgent and frontline activity."],
  ["Independent ambulance operator","Building and operating a regulated service meant understanding delivery, workforce, contracts, compliance, governance and commercial survival together."],
  ["Registered-manager breadth","Registered-manager responsibility across independent ambulance/healthcare, domiciliary care, residential learning-disability & autism, and secure dementia services."],
  ["Local government & multi-site leadership","Governance, service improvement, systems, workforce and strategic oversight across different operating environments."],
  ["Learning disability & autism","Around 16 months in learning-disability and autism services deepened the human side of the work: a service cannot be understood only through incidents, rotas and compliance."],
  ["ORVIA","Those perspectives converged into one method: OBSERVE → REVIEW → VERIFY → INTERPRET → ACT — then verify the fix held."]
] as const;

const principles=[
  ["Evidence before assumption","Instinct can start the question. Evidence has to test it."],
  ["Human first. Human last.","Technology can organise, compare and challenge. Consequential judgement stays with accountable people."],
  ["See the whole landscape","Frontline detail only makes sense when connected to ownership, systems and consequences."],
  ["Independent challenge","Test the position without theatre, hostility or smoothing over uncomfortable truths."],
  ["Verify the fix","An action plan is not proof. Check the action was implemented, effective and sustained."]
] as const;

export default function FounderPage(){
  return <>
    <section className="page-hero founder-story-hero">
      <div className="shell founder-story-hero-grid">
        <div>
          <div className="eyebrow">THE FOUNDER STORY</div>
          <h1>Experience taught the method.</h1>
          <p className="lead">ORVIA is not built on theory. John McGill's background spans UK Armed Forces service, austere environments, ambulance operations, regulated care, local government and multi-site leadership. The value is not a list of titles — it is the accumulated ability to see what is happening at ground level, understand the wider system and act on what the evidence supports.</p>
          <div className="actions">
            <Link className="button" href="/work-with-john">Work directly with John</Link>
            <Link className="button secondary" href="/method">How ORVIA works</Link>
          </div>
        </div>
        <aside className="founder-story-quote founder-photo-ready">
          <div className="founder-photo-placeholder">
            <span>APPROVED FOUNDER IMAGE</span>
            <strong>John McGill — Founder & Managing Director</strong>
            <small>Reserved for the approved current portrait rather than an outdated image.</small>
          </div>
          <blockquote>“Did we understand what was really happening? Did we make it clearer? Did we help people act? Can we prove the fix held?”</blockquote>
        </aside>
      </div>
    </section>

    <section className="section section-soft founder-journey-section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">FROM FRONTLINE TO FOUNDING</div><h2>Each environment added a layer. None stood alone.</h2></div>
          <p>The progression matters because ORVIA connects frontline reality to strategic responsibility rather than treating them as separate worlds.</p>
        </div>
        <div className="founder-journey-grid">
          {journey.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section founder-care-story">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">THE HUMAN LAYER</div>
          <h2>Working in learning-disability and autism services changed the perspective.</h2>
          <p className="lead">After years in environments built around pressure, response and delivery, this work reinforced that systems only matter because people live inside their consequences.</p>
        </div>
        <div className="founder-story-copy">
          <p>John found his feet there and valued the people deeply — the individuals being supported, their families and the staff around them. It reinforced that a service cannot be understood only through compliance, incidents, rotas or records.</p>
          <p>That experience sat alongside ambulance work involving mental-health provision and registered-manager responsibility in domiciliary and dementia services. Together, those environments created breadth rather than a claim of universal expertise.</p>
          <p>That is now part of ORVIA's operating discipline: evidence matters because assumptions can distort a person's story, and human judgement matters because no dashboard should become the final authority over somebody's life.</p>
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">EXPERIENCE BECAME STANDARD</div><h2>The principles underneath every ORVIA product and service.</h2></div>
          <p>OBSERVE → REVIEW → VERIFY → INTERPRET → ACT is the operating method. These are the disciplines that keep it human and accountable.</p>
        </div>
        <div className="founder-aim-grid">
          {principles.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section founder-care-credentials">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">HEALTH & SOCIAL CARE CREDIBILITY</div><h2>Current sector credentials support the experience.</h2></div>
          <p>These are individual founder credentials and checks. They are not ORVIA company accreditations or endorsements.</p>
        </div>
        <div className="founder-care-credential-grid">
          {founderCredentials.assurance.map(item=><article key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
            <p>{item.note}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section founder-story-experience">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">WHY IT MATTERS</div>
          <h2>Commercially useful. Operationally credible. Human at the beginning and the end.</h2>
          <p className="lead">ORVIA is the culmination of a career that moved from frontline work to strategic leadership and now into building an organisation designed to help employers and businesses improve without losing sight of the human being inside the system.</p>
          <p>The strength is breadth, not a claim to know everything. The recurring discipline is to understand the operating reality, establish what the evidence supports, make the right thing clearer, act proportionately and verify whether the fix held.</p>
        </div>
        <div className="founder-experience-list">
          {founderCredentials.experience.map(item=><div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section section-ink founder-story-close">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow light">THE TEST</div>
          <h2>Did we understand it? Did we clarify it? Did we help people act? Can we prove the fix worked?</h2>
        </div>
        <div>
          <p className="lead">That is the standard ORVIA has to survive as it grows: solve identifiable problems, create measurable value and remain human enough to remember who is affected by the decision.</p>
          <div className="actions">
            <Link className="button" href="/work-with-john">Work directly with John</Link>
            <Link className="button secondary" href="/services">Explore ORVIA services</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
