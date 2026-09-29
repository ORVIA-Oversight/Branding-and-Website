import Link from "next/link";
import { orviaSystems, systemWorkflow, systemBoundary } from "@/config/systems";

const systemIcons:Record<string,string> = {
  iris:"◎", hive:"▤", vita:"◫", vera:"✓", command:"⌘", ai:"✦"
};

export default function SystemsPage(){
  return <>
    <section className="page-hero systems-hero">
      <div className="shell systems-hero-grid">
        <div>
          <div className="eyebrow">ORVIA OPERATING SYSTEM</div>
          <h1>The buttons connect to something real.</h1>
          <p className="lead">ORVIA is not a collection of decorative software names. Each system has a defined role in the path from signal to evidence, assurance, verification and accountable human action.</p>
          <div className="actions">
            <Link className="button" href="/#platform">Explore the platform</Link>
            <Link className="button secondary" href="/contact">Discuss a use case</Link>
          </div>
        </div>
        <div className="systems-boundary">
          <span>NON-NEGOTIABLE</span>
          <strong>Human first. Human last.</strong>
          <p>{systemBoundary}</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">THE SYSTEMS</div><h2>Different functions. One accountable pathway.</h2></div>
          <p>Public product links open products. Internal controls stay restricted. Embedded capabilities explain what they do without pretending to be standalone public applications.</p>
        </div>
        <div className="systems-card-grid">
          {orviaSystems.map(system=><article className="system-card" id={system.id} key={system.id}>
            <div className="system-card-top">
              <span className="system-card-icon">{systemIcons[system.id]}</span>
              <span className={"system-status "+system.status}>{system.status.replaceAll("-"," ")}</span>
            </div>
            <h3>{system.name}</h3>
            <small>{system.type.toUpperCase()}</small>
            <p>{system.purpose}</p>
            <div className="system-actions">
              <Link className="button button-small" href={system.publicHref}>{system.actionLabel}</Link>
              {"accessHref" in system && system.accessHref &&
                <a className="button secondary button-small" href={system.accessHref} target="_blank" rel="noreferrer">{system.accessLabel}</a>}
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">HOW THE FUNCTIONS CONNECT</div><h2>From signal to proportionate action.</h2></div>
          <p>No card is an island. The point is the handoff between systems, with evidence and human authority preserved throughout.</p>
        </div>
        <div className="system-workflow">
          {systemWorkflow.map(([n,title,body])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow">ACCESS & BUTTON RULES</div>
          <h2>Every action has to match the real capability behind it.</h2>
          <p>We do not use “Open”, “Launch”, “Verify”, “Submit” or “Run” as decorative button language. Those verbs are reserved for actions that are actually connected to the relevant workflow, authenticated product or human contact route.</p>
        </div>
        <div className="trust-list">
          <span><strong>Open product</strong> → live public product</span>
          <span><strong>Customer access</strong> → authenticated workspace</span>
          <span><strong>Authorised access</strong> → restricted internal system</span>
          <span><strong>How it works</strong> → public explainer</span>
          <span><strong>Discuss / start</strong> → real enquiry workflow</span>
        </div>
      </div>
    </section>
  </>;
}
