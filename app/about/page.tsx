import type { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata={
  title:"About ORVIA Oversight",
  description:"ORVIA Oversight is an independent, evidence-led, human-centred assurance and improvement company. Learn why it exists, how it works and where technology fits.",
  alternates:{canonical:"/about"}
};

const principles=[
  ["Evidence before assumption","We separate what the record shows from interpretation, uncertainty and opinion."],
  ["Human first. Human last.","Technology may organise, compare and challenge. Accountable people retain judgement and authority."],
  ["Independent challenge","We test the position without creating theatre, hostility or false certainty."],
  ["Action with ownership","A finding without an owner, next action and recheck is not finished work."],
  ["Verify improvement","We check whether the change was implemented, effective and sustained."]
] as const;

export default function AboutPage(){
  return <>
    <section className="page-hero about-orvia-hero">
      <div className="shell about-orvia-hero-grid">
        <div>
          <div className="eyebrow">ABOUT ORVIA OVERSIGHT</div>
          <h1>Independent. Precise. Human.</h1>
          <p className="lead">ORVIA helps people and organisations understand difficult situations, organise fragmented evidence, make accountability visible and turn findings into practical, verified improvement.</p>
          <div className="actions">
            <Link className="button" href="/work-with-orvia">Work with ORVIA</Link>
            <Link className="button secondary" href="/founder">Read the founder story</Link>
          </div>
          <div className="trust-inline">
            <span>Evidence-led</span><span>Human-centred</span><span>Independent challenge</span><span>No automated high-consequence decisions</span>
          </div>
        </div>
        <figure className="about-orvia-image">
          <img src="/armed-forces/service-team.jpg" alt="People working together in a demanding outdoor environment"/>
          <figcaption>ORVIA is built around people, evidence, judgement and accountable action.</figcaption>
        </figure>
      </div>
    </section>

    <section className="section">
      <div className="shell founder-story-visual-grid">
        <div>
          <div className="eyebrow">WHY ORVIA EXISTS</div>
          <h2>Important decisions are often made from evidence that is split across systems, teams and versions of the story.</h2>
          <p className="lead">ORVIA was built to reduce that fragmentation. We bring records, chronology, accounts, decisions and actions into a controlled evidence picture so authorised people can see what is supported, what is missing, what is disputed and what needs to happen next.</p>
          <p>We do not pretend uncertainty disappears when information is organised. Competing explanations, dissent and missing evidence remain visible.</p>
        </div>
        <figure className="founder-story-explainer">
          <img src="/founder/shared-evidence.svg" alt="ORVIA shared evidence diagram"/>
        </figure>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">THE ORVIA STANDARD</div><h2>Five principles that shape every service.</h2></div>
          <p>Products and delivery routes may differ, but the underlying standard should not.</p>
        </div>
        <div className="founder-aim-grid">
          {principles.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell founder-story-visual-grid founder-story-visual-grid-reverse">
        <figure className="founder-story-explainer">
          <img src="/founder/human-first.svg" alt="Human first, human last ORVIA diagram"/>
        </figure>
        <div>
          <div className="eyebrow light">TECHNOLOGY HAS A BOUNDARY</div>
          <h2>AI supports the work. Authorised humans retain judgement, authority and accountability.</h2>
          <p className="lead">ORVIA can use technology to preserve evidence, reduce repetition, test completeness and widen the field of view. It does not hand safeguarding, clinical, legal, regulatory or culpability decisions to software.</p>
          <Link className="button" href="/method">See the ORVIA method</Link>
        </div>
      </div>
    </section>

    <section className="section about-founder-film">
      <div className="shell video-block">
        <div>
          <div className="eyebrow">FOUNDER FILM</div>
          <h2>Why ORVIA was built.</h2>
          <p className="lead">A new founder film is being produced to explain the ORVIA story, the problem it is trying to solve and the human-first boundary around the technology.</p>
          <p>This placeholder is deliberately visible until the updated approved film is ready, rather than presenting an outdated video as current.</p>
          <Link className="text-link" href="/founder">Read the founder story now →</Link>
        </div>
        <div className="founder-video-placeholder" role="img" aria-label="Founder film placeholder">
          <div className="founder-video-mark">
            <img src="/brand/ORVIA-Oversight-white.png" alt="ORVIA Oversight"/>
            <span>FOUNDER FILM</span>
          </div>
          <div>
            <strong>John McGill</strong>
            <span>Updated Synthesia film coming soon</span>
          </div>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div><div className="eyebrow light">START WITH THE SITUATION</div><h2>You do not need to diagnose the problem before you contact ORVIA.</h2></div>
        <Link className="button light-button" href="/contact">Talk to ORVIA</Link>
      </div>
    </section>
  </>;
}
