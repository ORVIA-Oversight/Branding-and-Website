import Link from "next/link";

const principles=[
  ["Capability before CV polish","We look at judgement, transferable skills, problem-solving, communication, leadership and potential — not just conventional career language."],
  ["Evidence before title","Where competence matters, we build and evidence it through structured induction, learning, shadowing, supervision and review."],
  ["Service experience counts","Veterans, Reservists and the wider Armed Forces community are encouraged to show us what they can actually do, not just translate rank into civilian job titles."],
  ["Professional boundaries stay clear","Required qualifications, clearances and regulated-role standards still apply. ORVIA does not shortcut them."]
];

export default function CareersPage(){
  return <>
    <section className="page-hero careers-hero">
      <div className="shell careers-hero-grid">
        <div>
          <div className="eyebrow">CAREERS AT ORVIA</div>
          <h1>Bring us what you’re capable of.</h1>
          <p className="lead">We recruit for capability, not CV polish. ORVIA is interested in how you think, what you notice, how you communicate, what you have learned and how you behave when the answer is not obvious.</p>
          <div className="actions">
            <a className="button" href="#express-interest">Tell us what you can do</a>
            <Link className="button secondary" href="/armed-forces">Armed Forces & Veterans</Link>
          </div>
        </div>
        <div className="careers-quote-card">
          <span>OUR RECRUITMENT QUESTION</span>
          <strong>What can you do that your CV may not show?</strong>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">HOW WE RECRUIT</div><h2>People are more than keywords, job titles and neat career histories.</h2></div>
          <p>ORVIA still checks the things that matter. But we do not mistake presentation for capability.</p>
        </div>
        <div className="card-grid">{principles.map(([title,body])=><article className="feature-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell split">
        <div>
          <div className="eyebrow">PRACTITIONER PATHWAY</div>
          <h2>From transferable experience to credible professional practice.</h2>
          <p className="lead">For some people, especially Service leavers and career changers, the right route is not simply “apply for a job”. It is to identify capability, translate it, build the missing professional layer and create evidence of safe, credible practice.</p>
          <Link className="text-link" href="/armed-forces">See the Armed Forces pathway →</Link>
        </div>
        <div className="journey-card">
          <div><span>01</span><strong>Capability mapping</strong></div>
          <div><span>02</span><strong>Role fit & boundaries</strong></div>
          <div><span>03</span><strong>Learning & supervised development</strong></div>
          <div><span>04</span><strong>Practice evidence</strong></div>
          <div><span>05</span><strong>Ongoing assurance</strong></div>
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow light">GORILLA RECRUITMENT</div>
          <h2>A separate ORVIA recruitment service built around capability, not CV theatre.</h2>
          <p>Gorilla Recruitment is the working name for ORVIA’s commercial recruitment offer: helping organisations find and assess people whose real capability may be missed by conventional recruitment filters.</p>
          <p>Its proposition should remain separate from ORVIA’s own careers pages, with its own scope, pricing, methodology and evidence before public launch.</p>
        </div>
        <div className="trust-list dark-list">
          <span>Capability-led role design</span>
          <span>Transferable-skills assessment</span>
          <span>Veteran and career-change pathways</span>
          <span>Evidence-based selection</span>
          <span>Structured onboarding and development</span>
          <span>Clear legal and professional boundaries</span>
        </div>
      </div>
    </section>

    <section id="express-interest" className="section">
      <div className="shell contact-layout">
        <div>
          <div className="eyebrow">EXPRESS INTEREST</div>
          <h2>Start with what you can do.</h2>
          <p className="lead">A CV can help, but it does not have to be the first thing we see. Tell us about your experience, capability and the direction you want to take.</p>
        </div>
        <form className="contact-form">
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Background / community<select name="background" defaultValue=""><option value="" disabled>Select if relevant</option><option>Veteran / Service leaver</option><option>Reservist</option><option>Military spouse / partner</option><option>Career changer</option><option>Experienced professional</option><option>Other</option></select></label>
          <label>What can you do that your CV may not show?<textarea name="capability" rows={7} required /></label>
          <label>What would you like to develop into?<textarea name="direction" rows={4} /></label>
          <button className="button" type="submit">Send expression of interest</button>
        </form>
      </div>
    </section>
  </>;
}
