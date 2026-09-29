import Link from "next/link";
import { armedForcesAssets } from "@/config/armedForces";

const serviceGroups = [
  ["ARMY","Discipline · resilience · leadership"],
  ["ROYAL NAVY","Adaptability · teamwork · perspective"],
  ["ROYAL AIR FORCE","Precision · innovation · problem solving"],
  ["VETERANS & FAMILIES","Support · opportunity · belonging"],
  ["OTHER SERVICES","Police · Fire · NHS · Coastguard · Prison Service"]
];

const strengths = [
  ["resilience","Resilience","Stay steady when information is incomplete, difficult or changing."],
  ["strategy","Strategic thinking","See the wider system, dependencies and consequences."],
  ["leadership","Leadership","Take responsibility, communicate clearly and support others."],
  ["communication","Direct communication","Say what matters without hiding behind unnecessary complexity."],
  ["problem","Problem solving","Challenge assumptions, test alternatives and adapt when the evidence changes."],
  ["integrity","Integrity","Do the right thing even when the answer is uncomfortable."]
];

function StrengthIcon({type}:{type:string}){
  const common={width:34,height:34,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  if(type==="resilience") return <svg {...common}><path d="M12 3l7 3v5c0 4.8-2.8 8.2-7 10-4.2-1.8-7-5.2-7-10V6l7-3Z"/><path d="M9 12l2 2 4-5"/></svg>;
  if(type==="strategy") return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M14.5 9.5l-2 5-5 2 2-5 5-2Z"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>;
  if(type==="leadership") return <svg {...common}><circle cx="12" cy="8" r="3"/><path d="M5 20c.6-4 3-6 7-6s6.4 2 7 6"/><path d="M5 10a2.5 2.5 0 1 0 0-5M19 10a2.5 2.5 0 1 1 0-5"/></svg>;
  if(type==="communication") return <svg {...common}><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>;
  if(type==="problem") return <svg {...common}><path d="M5 5h5v5H5zM14 14h5v5h-5z"/><path d="M10 7.5h3a3 3 0 0 1 3 3V14M7.5 10v3a3 3 0 0 0 3 3H14"/></svg>;
  return <svg {...common}><path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/><path d="M9.5 12.5l1.7 1.7 3.5-3.8"/></svg>;
}

const pathway = [
  ["01","Register interest","Tell us about your experience, capability and where you want to go next."],
  ["02","Initial human conversation","A real conversation about motivation, transferable experience, boundaries and role fit."],
  ["03","Human reasoning assessment","Work through an ambiguous scenario without AI. We assess evidence use, judgement, proportionality and uncertainty."],
  ["04","Challenge & problem-solving","A structured scenario or exercise tests adaptability, collaboration and willingness to revise a position."],
  ["05","AI interaction assessment","Only after the human-only stages. We assess whether AI is used as assistance rather than authority."],
  ["06","Human suitability review","A senior human reviews values, resilience, conduct and fit. AI does not hire or reject practitioners."],
  ["07","Vetting & safer recruitment","Appropriate identity, vetting and safer-recruitment checks are completed for the role."],
  ["08","Training & supervised practice","ORVIA methods, observed work and supervised assignments build evidence of competence."],
  ["09","Competency sign-off","Practice authority is earned through demonstrated competence."],
  ["10","Case allocation & development","Work is allocated within verified competence, with continuing learning and assurance."]
];

export default function ArmedForcesPage(){
  return <>
    <section className="af-v2-hero">
      <div className="shell af-v2-hero-grid">
        <div className="af-v2-copy">
          <div className="eyebrow light">VETERANS · SERVICE LEAVERS · FAMILIES · PUBLIC SERVICE</div>
          <h1>Different experiences.<br/><span>A shared purpose.</span></h1>
          <p className="lead">John McGill is a military veteran. ORVIA takes that status seriously by creating work where judgement, resilience, curiosity and unconventional problem-solving can be used to protect people and improve organisations.</p>
          <div className="actions">
            <Link className="button af-gold-button" href="/careers">Explore opportunities</Link>
            <a className="button af-outline-button" href="#veteran-story">Our veteran story</a>
          </div>
          <p className="af-v2-principle">HUMAN FIRST. HUMAN LAST.</p>
        </div>

        <div className="af-v2-media" aria-label="ORVIA Armed Forces and family imagery">
          <div className="af-v2-main-image">
            <img src="/armed-forces/service-team.jpg" alt="Team working together outdoors"/>
            <div className="af-v2-image-label">SERVICE INFORMS PURPOSE</div>
          </div>
          <div className="af-v2-side-grid">
            <figure><img src="/armed-forces/john-mcgill.jpg" alt="John McGill, founder of ORVIA"/></figure>
            <figure><img src="/armed-forces/family.webp" alt="Family together"/></figure>
          </div>
        </div>
      </div>
    </section>

    <section className="af-service-strip">
      <div className="shell af-service-grid">
        {serviceGroups.map(([title,body])=><article key={title}><strong>{title}</strong><span>{body}</span></article>)}
      </div>
    </section>

    <section className="af-proof-strip">
      <div className="shell af-proof-grid">
        <a className="af-proof-card" href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">
          <img src={armedForcesAssets.covenant.src} alt={armedForcesAssets.covenant.alt}/>
          <span><strong>Armed Forces Covenant</strong>Official signatory</span>
        </a>
        <div className="af-proof-card">
          <img src={armedForcesAssets.bronze.src} alt={armedForcesAssets.bronze.alt}/>
          <span><strong>ERS Bronze Award</strong>Current award holder</span>
        </div>
        <a className="af-proof-card af-proof-text" href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">
          <span className="af-proof-monogram">TAV</span>
          <span><strong>Trust A Veteran</strong>ORVIA public profile</span>
        </a>
        <div className="af-proof-card af-proof-next">
          <span className="af-proof-monogram">→</span>
          <span><strong>Our next steps</strong>Silver aspiration · Gold longer-term ambition</span>
        </div>
      </div>
    </section>

    <section className="section" id="veteran-story">
      <div className="shell af-story-grid">
        <div>
          <div className="eyebrow">OUR VETERAN STORY</div>
          <h2>Service built the foundation. People give it purpose.</h2>
          <p className="lead">John is a military veteran. Military service taught him resilience and a steady mindset: stay calm, look at what is actually in front of you and deal with the issue rather than the noise around it.</p>
          <p>John is direct and straight to the point. Those characteristics are not a template everybody has to follow, but they help explain why ORVIA is prepared to ask difficult questions, follow evidence and keep going when the answer is uncomfortable.</p>
          <p>We may not always be liked. We may uncover things an organisation would rather had stayed hidden. But if a human, family, professional or organisation has trusted ORVIA to look properly, we cannot be truthful to them by avoiding what the evidence shows.</p>
          <div className="af-story-quote">
            <strong>Fix the wrongs. Improve the system. Protect the human.</strong>
            <span>That is the purpose behind the work.</span>
          </div>
        </div>
        <figure className="af-family-feature">
          <img src="/armed-forces/family.webp" alt="Family together"/>
          <figcaption>Service affects more than the person in uniform. Families, partners and support networks matter too.</figcaption>
        </figure>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">YOUR SKILLS MAKE A DIFFERENCE</div><h2>Experience is valuable when it is recognised properly.</h2></div>
          <p>ORVIA looks for the underlying capability behind a career history, whether it comes from the Armed Forces, emergency services, public service, regulated work or another demanding environment.</p>
        </div>
        <div className="af-strength-grid">
          {strengths.map(([icon,title,body],i)=><article key={title}>
            <div className="af-strength-top">
              <span className="af-strength-icon"><StrengthIcon type={icon}/></span>
              <span className="af-strength-number">{String(i+1).padStart(2,"0")}</span>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink af-tech-section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">HUMAN-LED TECHNOLOGY</div><h2>Use every tool available. Never hand the decision to the tool.</h2></div>
          <p>ORVIA uses future-facing technology to widen the field of view, test more possibilities and preserve evidence — while keeping responsibility with a human.</p>
        </div>
        <div className="af-system-grid">
          <article><strong>IRIS</strong><span>Coordinates work, owners, routing and escalation.</span></article>
          <article><strong>HIVE</strong><span>Preserves evidence, provenance, versions and dissent.</span></article>
          <article><strong>VITA</strong><span>Tests completeness, assurance and blind spots.</span></article>
          <article><strong>VERA</strong><span>Verifies who checked what against which evidence.</span></article>
          <article><strong>Command</strong><span>Provides operational visibility for authorised humans.</span></article>
          <article><strong>AI</strong><span>Builds hypotheses, challenges theories and explores alternative explanations.</span></article>
        </div>
        <div className="af-human-last">
          <strong>Nothing high-consequence leaves a human.</strong>
          <span>Technology can organise, compare, challenge and suggest. Safeguarding, clinical, culpability and other serious judgements remain human decisions.</span>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">THE ORVIA RECRUITMENT PATHWAY</div><h2>Everybody gets a fair shot. An open door is not an easy door.</h2></div>
          <p>We recruit for capability, not CV polish. Professional requirements still apply where the work demands them, and authority is earned through evidence of competence.</p>
        </div>
        <div className="af-pathway-grid">
          {pathway.map(([n,title,body])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell af-community-grid">
        <div>
          <div className="eyebrow">WHO WE WANT TO HEAR FROM</div>
          <h2>Veterans are part of the story, not the whole story.</h2>
          <p className="lead">ORVIA wants people who can think, challenge, learn and stay accountable. That includes veterans, Service leavers, Reservists, military families and people from other services — but also civilians whose experience gives them the same commitment to evidence, people and improvement.</p>
        </div>
        <div className="af-community-list">
          <span>Veterans & Service leavers</span>
          <span>Reservists</span>
          <span>Military spouses & partners</span>
          <span>Police, Fire, NHS, Coastguard & other services</span>
          <span>Career changers</span>
          <span>Experienced professionals</span>
          <span>People with unconventional career histories</span>
          <span>People whose capability is bigger than their CV</span>
        </div>
      </div>
    </section>

    <section className="final-cta af-final-cta">
      <div className="shell">
        <div>
          <div className="eyebrow light">BUILD A CAREER WITH PURPOSE</div>
          <h2>Your experience can still make a difference.</h2>
          <p>Tell us what you can do, how you think and what you want to become.</p>
        </div>
        <Link className="button light-button" href="/careers#express-interest">Join our team</Link>
      </div>
    </section>
  </>;
}
