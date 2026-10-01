import type { Metadata } from "next";
import Link from "next/link";
import { founderCredentials } from "@/config/founderCredentials";

export const metadata:Metadata={
  title:"Founder Story | Why ORVIA Exists",
  description:"Why John McGill built ORVIA: from frontline responsibility and fragmented systems to an evidence-led, human-centred method for finding and fixing problems.",
  alternates:{canonical:"/founder"}
};

const lessons=[
  ["Systems record activity","A complete form is not the same thing as seeing the person, the context or the warning sign underneath it."],
  ["Evidence before assumption","Instinct may start the question. Evidence has to test it."],
  ["Challenge the comfortable answer","Ask what does not fit, what is missing, what else could this mean and what would make us wrong."],
  ["Human first. Human last.","Technology can organise, compare and challenge. Consequential judgement remains with accountable people."],
  ["Verify the fix","An action plan is not proof. Check whether change was implemented, effective and sustained."]
] as const;

export default function FounderPage(){
  return <>
    <section className="page-hero founder-story-hero">
      <div className="shell founder-story-hero-grid">
        <div>
          <div className="eyebrow">THE FOUNDER STORY</div>
          <h1>ORVIA was not built to make broken systems look better. It was built to help fix them.</h1>
          <p className="lead">John McGill spent much of his working life around responsibility, risk, people and consequence — in the military, security, ambulance operations, management and health and social care. Across different environments, the same pattern kept appearing: systems could record activity without always seeing the person or the real problem underneath it.</p>
          <div className="actions">
            <Link className="button" href="/work-with-john">Work with John</Link>
            <Link className="button secondary" href="/method">See the ORVIA method</Link>
          </div>
        </div>
        <aside className="founder-story-quote">
          <div className="founder-signature-mark">John McGill</div>
          <strong>Founder, ORVIA Oversight Ltd</strong>
          <blockquote>“Paperwork is rarely the whole story.”</blockquote>
          <p>ORVIA exists to help people see what is really happening, challenge what does not fit and turn understanding into an owned fix.</p>
        </aside>
      </div>
    </section>

    <section className="section founder-story-origin">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">THE BEGINNING</div>
          <h2>It did not begin with software.</h2>
          <p className="lead">It began with accumulated experience and one repeated lesson: the gap between what a system says happened and what people actually experienced can become enormous.</p>
        </div>
        <div className="founder-story-copy">
          <p>A form can be completed. A box can be ticked. A policy can exist. A report can be written. And the human being at the centre can still feel completely unseen.</p>
          <p>That became one of the foundations of ORVIA: evidence before assumption, context alongside attribution, and a human being still visible at the beginning and the end.</p>
          <p>Six intense months of rebuilding then turned a collection of ideas into one method: <strong>OBSERVE → REVIEW → VERIFY → INTERPRET → ACT.</strong></p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">FROM EXPERIENCE TO ARCHITECTURE</div><h2>Questions became principles. Principles became processes. Processes became tools.</h2></div>
          <p>The public founder story is not an autobiography. The important part is what ORVIA learned and built from experience.</p>
        </div>
        <div className="founder-aim-grid">
          {lessons.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow light">THE FIXER IDEA</div>
          <h2>Bring ORVIA the problem before it becomes the crisis.</h2>
        </div>
        <div>
          <p className="lead">Think crisis-fixer discipline without the spin: find the pressure point, get beyond the presentation layer, establish what the evidence supports and fix the system.</p>
          <p>ORVIA is not there to hide a problem, manufacture a defence or protect an organisation from the truth. It is there to help the organisation face the truth early enough to do something useful with it.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">THE HUMAN THREAD</div>
          <h2>ORVIA learned that preserving context matters because people can disappear inside systems.</h2>
          <p className="lead">Some of the strongest principles came from personal experience of separation, loss and the fear that an important human story could one day be reduced to somebody else's record.</p>
        </div>
        <div className="founder-story-copy">
          <p>That experience contributed to MIA, ORVIA's memory and legacy work: preserve voice, photographs, stories and messages so the parts of a life that matter are not lost when circumstances change.</p>
          <p>The public story deliberately protects private family circumstances. The principle is what belongs here: <strong>see people properly, preserve what matters and do not let a system erase human context.</strong></p>
          <Link className="text-link" href="https://mia.orvia.org.uk">Explore MIA →</Link>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">HUMAN FIRST. HUMAN LAST.</div>
          <h2>AI can help us see. It should not decide who somebody is.</h2>
          <p className="lead">ORVIA uses technology to organise records, compare information, surface gaps, preserve provenance and challenge assumptions.</p>
        </div>
        <div className="founder-story-copy">
          <p>But safeguarding, clinical, culpability and other high-consequence judgements remain with accountable people. A machine should not become the final authority over another human being.</p>
          <p>That boundary is not a disclaimer added at the end. It is part of the architecture.</p>
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
          <h2>Build something commercially strong enough to survive its founder without losing the reason it exists.</h2>
        </div>
        <div>
          <p className="lead">ORVIA has to create recurring revenue, useful intellectual property, strong customer relationships and products that solve identifiable problems. But commercial success cannot become an excuse for abandoning the principles that made the company worth building.</p>
          <p>The test is whether ORVIA can help an organisation become clearer, more accountable and more human — and prove the improvement rather than merely claim it.</p>
          <div className="actions">
            <Link className="button" href="/contact">Bring us a problem</Link>
            <Link className="button secondary" href="/">Back to ORVIA</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
