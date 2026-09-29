import Link from "next/link";
import { founderStory } from "@/config/founder";

export default function FounderPage(){
  return <>
    <section className="page-hero founder-hero">
      <div className="shell founder-hero-grid">
        <div>
          <div className="eyebrow">FOUNDER STORY · CANONICAL SOURCE</div>
          <h1>{founderStory.headline}</h1>
          <p className="lead">{founderStory.medium}</p>
          <div className="actions">
            <Link className="button" href="/contact">Talk to ORVIA</Link>
            <Link className="button secondary" href="/armed-forces">Veteran story</Link>
          </div>
        </div>
        <div className="founder-signature-card">
          <div className="founder-signature-mark">John McGill</div>
          <strong>{founderStory.founder}</strong>
          <span>{founderStory.role}</span>
          <p>Canonical founder narrative. Product sites may use only the approved short, medium or full variants.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell founder-story-layout">
        <div>
          <div className="eyebrow">WHY ORVIA EXISTS</div>
          <h2>Instinct starts the question. Evidence tests it.</h2>
        </div>
        <div className="founder-story-copy">
          {founderStory.full.map((paragraph,index)=><p key={index}>{paragraph}</p>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">FOUNDER PRINCIPLES</div><h2>What does not get diluted.</h2></div>
          <p>These principles are inherited by the ORVIA estate. Product sites can shorten the presentation, but they do not rewrite the meaning.</p>
        </div>
        <div className="founder-principles">
          {founderStory.principles.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><p>{item}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell founder-control">
        <div>
          <div className="eyebrow light">SINGLE SOURCE OF TRUTH</div>
          <h2>One founder story. Three approved lengths.</h2>
        </div>
        <div className="founder-variants">
          <article><strong>Short</strong><p>{founderStory.short}</p></article>
          <article><strong>Medium</strong><p>{founderStory.medium}</p></article>
          <article><strong>Full</strong><p>Use the full canonical narrative on this page or where the founder story is itself the subject.</p></article>
        </div>
      </div>
    </section>
  </>;
}
