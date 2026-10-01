import type { Metadata } from "next";
import Link from "next/link";
import { founderCredentials } from "@/config/founderCredentials";

export const metadata:Metadata={
  title:"Founder Story | Why ORVIA Exists",
  description:"Why John McGill built ORVIA: experience across military, austere environments, ambulance operations, regulated care and multi-site leadership distilled into one evidence-led operating method.",
  alternates:{canonical:"/founder"}
};

const lessons=[
  ["Read the real environment","Understand what is actually happening before accepting the presentation layer."],
  ["See the whole landscape","Frontline detail only makes sense when it is connected to ownership, systems, people and consequences."],
  ["Evidence before assumption","Instinct can start the question. Evidence has to test it."],
  ["Human first. Human last.","Technology can organise, compare and challenge. Consequential judgement remains with accountable people."],
  ["Verify the fix","An action plan is not proof. Check whether change was implemented, effective and sustained."]
] as const;

const journey=[
  ["UK Armed Forces","A baseline in discipline, teamwork, responsibility and understanding how individual actions connect to a wider mission."],
  ["Austere environments","Operational work in high-risk settings developed situational awareness, composure and the habit of reading what is happening around the plan."],
  ["Ambulance operations","Around 11 years across ambulance and healthcare operations, including building and operating an independent ambulance service across mental health, patient transport, urgent and frontline work."],
  ["Registered-manager breadth","Registered-manager responsibility across independent ambulance/healthcare, domiciliary care, residential learning-disability & autism, and secure dementia services added a wide view of how regulated services actually operate."],
  ["Multi-site leadership","Experience across local government, private organisations and regulated services added governance, systems, workforce and strategic perspective."],
  ["Learning disability & autism","Around 16 months in learning-disability and autism services changed the human dimension of the work. John found his feet there, valued the experience deeply and cared about the people behind the service."],
  ["ORVIA","Those different landscapes culminated in one operating approach: observe reality, review context, verify evidence, interpret proportionately and act with accountable human judgement."]
] as const;

export default function FounderPage(){
  return <>
    <section className="page-hero founder-story-hero">
      <div className="shell founder-story-hero-grid">
        <div>
          <div className="eyebrow">THE FOUNDER STORY</div>
          <h1>ORVIA is the culmination of an operational career spent learning how people, systems and pressure really interact.</h1>
          <p className="lead">John McGill's background moves across very different landscapes — UK Armed Forces service, austere international environments, ambulance operations, local government, regulated care, safeguarding and multi-site leadership. The common thread is operational: understand the reality, understand the wider system, then act on what the evidence supports.</p>
          <div className="actions">
            <Link className="button" href="/work-with-john">Work with John</Link>
            <Link className="button secondary" href="/method">See the ORVIA method</Link>
          </div>
        </div>
        <aside className="founder-story-quote founder-photo-ready">
          <div className="founder-photo-placeholder">
            <span>APPROVED FOUNDER IMAGE</span>
            <strong>John McGill — ORVIA Oversight</strong>
            <small>The approved office portrait will sit here as the visual anchor.</small>
          </div>
          <blockquote>“The value is not one job title. It is the accumulated experience of learning how different operating environments actually work.”</blockquote>
        </aside>
      </div>
    </section>

    <section className="section founder-story-origin">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">THE BACKBONE</div>
          <h2>Frontline understanding first. Strategic understanding built on top.</h2>
          <p className="lead">The story is not about collecting job titles. It is about repeatedly moving from the ground level of an operation to understanding the wider system around it.</p>
        </div>
        <div className="founder-story-copy">
          <p>The military created the baseline: discipline, teamwork, responsibility and situational awareness. Austere environments added judgement under pressure. Ambulance operations added the reality of delivering services where people, time, risk, regulation and operational consequence meet.</p>
          <p>Owning and operating an independent ambulance service meant learning the whole landscape — frontline delivery, mental-health work, patient transport, urgent activity, workforce, governance, customers, contracts, compliance and the strategic decisions needed to keep the operation working.</p>
          <p>Later registered-manager roles widened that perspective further across domiciliary care, residential learning-disability and autism services, and secure dementia care. The point is not that John knows everything about every sector; it is that he has repeatedly had to understand very different regulated environments quickly, see how they function and work out what good operational control looks like in context.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft founder-journey-section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">EXPERIENCE BECAME METHOD</div><h2>Different industries. The same operational questions.</h2></div>
          <p>Each environment added another layer to the way ORVIA now sees a problem.</p>
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
          <h2>Learning-disability and autism services added a different kind of operational understanding.</h2>
          <p className="lead">After years in operational environments built around pressure, response and delivery, around 16 months working in learning-disability and autism services brought a different kind of learning.</p>
        </div>
        <div className="founder-story-copy">
          <p>John found his feet there. He loved the experience and, more importantly, valued the people — the individuals being supported, their families and the staff around them. It reinforced that a service cannot be understood only through compliance, incidents, rotas or records.</p>
          <p>That experience sat alongside earlier ambulance work involving mental-health provision and later registered-manager responsibility in domiciliary and dementia services. Together, those environments created breadth rather than a claim of universal expertise.</p>
          <p>That human experience sits underneath ORVIA now: systems matter because people live inside their consequences. Evidence matters because assumptions can distort a person's story. Human judgement matters because no dashboard should become the final authority over somebody's life.</p>
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow light">THE CULMINATION</div>
          <h2>ORVIA brings the accumulated learning together into one operating approach.</h2>
        </div>
        <div>
          <p className="lead">Observe the reality. Review the context. Verify what can actually be supported. Interpret it proportionately. Act — then check whether the action worked.</p>
          <p>That is the backbone of what John delivers. Not a theory built outside operations, but a method shaped by working across multiple environments where people, evidence, responsibility and consequence all had to meet.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">FROM EXPERIENCE TO ARCHITECTURE</div><h2>What ORVIA learned from the journey.</h2></div>
          <p>The important part of the founder story is not biography for biography's sake. It is the operating discipline that came out of it.</p>
        </div>
        <div className="founder-aim-grid">
          {lessons.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section founder-story-experience">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">EXPERIENCE BEHIND THE IDEA</div>
          <h2>{founderCredentials.headline}</h2>
          <p className="lead">{founderCredentials.intro}</p>
          <Link className="button" href="/work-with-john">See how John works</Link>
        </div>
        <div className="founder-experience-list">
          {founderCredentials.experience.map(item=><div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section section-ink founder-story-close">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow light">WHAT ORVIA HAS TO ACHIEVE</div>
          <h2>Commercially useful. Operationally credible. Human enough to matter.</h2>
        </div>
        <div>
          <p className="lead">ORVIA has to solve identifiable problems, create measurable value and be commercially strong enough to survive. But it also has to preserve the principles learned across the environments that built it.</p>
          <p>The test is simple: did we understand what was really happening, did we make the right thing clearer, did we help people act, and can we prove whether the fix worked?</p>
          <div className="actions">
            <Link className="button" href="/contact">Bring us a problem</Link>
            <Link className="button secondary" href="/">Back to ORVIA</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
