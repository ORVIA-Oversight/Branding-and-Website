import type { Metadata } from "next";
import Link from "next/link";
import { founderStory } from "@/config/founder";
import { founderCredentials } from "@/config/founderCredentials";

export const metadata:Metadata={
  title:"Founder Story | Why ORVIA Exists",
  description:"The story behind ORVIA Oversight: why John McGill built an evidence-led, human-centred operating model for connected review, accountability and better professional action.",
  alternates:{canonical:"/founder"}
};

const practice=[
  ["One evidence picture","Bring records, chronology, accounts, decisions and actions into one controlled view rather than leaving the truth scattered across separate systems."],
  ["Shared context","Connected parties should work from the same underlying information while permissions, attribution and professional boundaries remain clear."],
  ["Difference is preserved","A shared record does not mean forced agreement. Competing accounts, missing evidence and dissent remain visible."],
  ["Human decisions stay human","Technology can organise, compare and surface patterns. It does not make safeguarding, clinical, regulatory or culpability decisions."],
  ["Action has an owner","Every material issue should lead to a proportionate next step, a responsible person and a point at which the outcome is checked."]
] as const;

const aims=[
  ["See more clearly","Replace fragmented reporting with a view of what the record actually contains."],
  ["Understand before acting","Separate fact, account, interpretation, uncertainty and missing evidence."],
  ["Reduce repeated work","Stop different people rebuilding the same chronology from different inboxes, spreadsheets and case systems."],
  ["Make challenge safer","Give people a structured way to raise contradictions and alternative explanations without turning challenge into conflict."],
  ["Verify improvement","Do not stop at an action plan. Check whether the change was implemented, effective and sustained."]
] as const;

export default function FounderPage(){
  return <>
    <section className="page-hero founder-story-hero">
      <div className="shell founder-story-hero-grid">
        <div>
          <div className="eyebrow">THE FOUNDER STORY</div>
          <h1>ORVIA began with a simple question: what if everyone could see the same evidence before the important decision was made?</h1>
          <p className="lead">John McGill built ORVIA after years of working in environments where the real picture was often split between people, paperwork, systems and professional boundaries. The aim is not to create another layer of reporting. It is to connect the evidence, preserve context and help the right human make a better-informed decision.</p>
          <div className="actions">
            <Link className="button" href="/work-with-john">Work with John</Link>
            <Link className="button secondary" href="/method">See the ORVIA method</Link>
          </div>
          <div className="founder-story-proof">
            <span>Independent</span><span>Evidence-led</span><span>Human-centred</span><span>Accountable</span>
          </div>
        </div>
        <aside className="founder-story-quote">
          <div className="founder-signature-mark">John McGill</div>
          <strong>{founderStory.role}</strong>
          <blockquote>“The problem is rarely that nobody has information. The problem is that the information sits in different places, different hands and different versions of the story.”</blockquote>
          <p>ORVIA exists to bring those pieces into a controlled evidence picture without pretending uncertainty has disappeared.</p>
        </aside>
      </div>
    </section>

    <section className="section founder-story-origin">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">WHY ORVIA EXISTS</div>
          <h2>Instinct starts the question. Evidence tests it.</h2>
          <p className="lead">{founderStory.medium}</p>
        </div>
        <div className="founder-story-copy">
          {founderStory.full.slice(0,4).map((paragraph,index)=><p key={index}>{paragraph}</p>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell founder-story-visual-grid">
        <div>
          <div className="eyebrow">THE PROBLEM ORVIA IS TRYING TO FIX</div>
          <h2>Disconnected systems create disconnected understanding.</h2>
          <p className="lead">A family may hold one part of the story. A provider may hold another. A commissioner, school, clinician, manager or regulator may each have records of their own. Add emails, calls, dashboards, incident systems, HR platforms and spreadsheets, and the same event can quickly exist in several different versions.</p>
          <p>ORVIA's practice is designed to organise the available evidence into a controlled chronology, show where accounts align or differ, preserve the source behind each assertion and make it easier for authorised people to understand the same underlying picture.</p>
        </div>
        <figure className="founder-story-explainer">
          <img src="/founder/shared-evidence.svg" alt="Diagram showing multiple evidence sources flowing into one controlled evidence record shared with connected parties" />
        </figure>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">THE WORKING PRACTICE</div><h2>Shared information does not mean shared conclusions.</h2></div>
          <p>ORVIA is designed so connected people can work from the same evidence picture while preserving permissions, attribution, professional roles, uncertainty and disagreement.</p>
        </div>
        <div className="founder-practice-grid">
          {practice.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,"0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell founder-story-visual-grid founder-story-visual-grid-reverse">
        <figure className="founder-story-explainer">
          <img src="/founder/human-first.svg" alt="Human-first ORVIA diagram showing evidence, review, challenge and action around an accountable person" />
        </figure>
        <div>
          <div className="eyebrow">HUMAN FIRST. HUMAN LAST.</div>
          <h2>Better systems should create better human judgement, not replace it.</h2>
          <p className="lead">ORVIA uses technology to reduce repetition, preserve evidence, test completeness and widen the field of view. But the consequential decision remains with the person who is authorised, competent and accountable to make it.</p>
          <p>This is one of the founder principles that does not move: AI may support the work; it does not inherit safeguarding, clinical, legal, regulatory or culpability authority.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT WE ARE TRYING TO ACHIEVE</div><h2>Less fragmentation. More clarity. Better follow-through.</h2></div>
          <p>The measure is not whether ORVIA produces more paperwork. The measure is whether people can understand the position, act proportionately and later show what happened and why.</p>
        </div>
        <div className="founder-aim-grid">
          {aims.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
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
          <div className="eyebrow light">THE POINT OF ORVIA</div>
          <h2>See what is there. Show what is missing. Keep people connected to the same picture.</h2>
        </div>
        <div>
          <p className="lead">The ambition is straightforward even when the work is complex: evidence before assumption, context alongside attribution, challenge without theatre, action with ownership, and a human being still visible at the centre of the system.</p>
          <div className="actions">
            <Link className="button" href="/contact">Start a conversation</Link>
            <Link className="button secondary" href="/work-with-john">Work with John</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
