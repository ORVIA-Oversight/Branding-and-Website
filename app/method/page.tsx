import type { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata={
  title:"The ORVIA Method",
  description:"Observe, Review, Verify, Interpret, Act — ORVIA's evidence-led method for clearer understanding, accountable action and verified improvement.",
  alternates:{canonical:"/method"}
};

const stages=[
  ["OBSERVE","Capture what happened, what was seen, heard or recorded, and preserve the source."],
  ["REVIEW","Build context, chronology, relevant accounts, decisions and missing information."],
  ["VERIFY","Test what is supported, contradicted, disputed or still unknown."],
  ["INTERPRET","Separate evidence from professional interpretation and consider reasonable alternatives."],
  ["ACT","Assign a proportionate human-owned response, then verify whether it worked."]
] as const;

export default function MethodPage(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">THE ORVIA METHOD</div>
        <h1>Observe. Review. Verify. Interpret. Act.</h1>
        <p className="lead">A disciplined route from signal to evidence, from evidence to accountable human judgement, and from action to verified improvement.</p>
        <div className="actions">
          <Link className="button" href="/work-with-orvia">Use ORVIA on a real problem</Link>
          <Link className="button secondary" href="/about">About ORVIA</Link>
        </div>
      </div>
    </section>
    <section className="section section-ink">
      <div className="shell">
        <div className="method-grid">
          {stages.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="shell founder-story-visual-grid">
        <div>
          <div className="eyebrow">THE CONTROL</div>
          <h2>Keep the record, the context, the challenge and the human visible.</h2>
          <p className="lead">ORVIA separates source material, assertions, interpretation, dissent and action rather than allowing them to collapse into one convenient narrative.</p>
          <p>Technology can organise, compare and surface patterns. Safeguarding, clinical, legal, regulatory and culpability decisions remain with authorised humans.</p>
        </div>
        <figure className="founder-story-explainer"><img src="/founder/human-first.svg" alt="Human-first ORVIA evidence and action diagram"/></figure>
      </div>
    </section>
    <section className="final-cta"><div className="shell"><div><div className="eyebrow light">START WITH THE SITUATION</div><h2>Bring us what is happening. We will start with evidence, not a sales pitch.</h2></div><Link className="button light-button" href="/contact">Talk to ORVIA</Link></div></section>
  </>;
}
