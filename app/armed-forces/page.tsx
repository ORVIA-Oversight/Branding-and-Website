import Link from "next/link";

const communities = [
  ["Veterans & Service leavers","Turn Service experience into a credible civilian practice pathway without forcing it into a conventional CV shape."],
  ["Reservists","A workplace that understands Reserve service, training commitments and the value of continued military service."],
  ["Spouses & partners","Recognising careers can be disrupted by postings, mobility and family commitments — and that capability is not reduced by a non-linear CV."],
  ["Cadet & wider service community","Where appropriate, create routes that help people translate leadership, instruction, logistics, communication and public-service experience into civilian opportunity."]
];

const pathway = [
  ["01","Map your capability","We start with what you can actually do: judgement, leadership, analysis, communication, discipline, operational awareness and specialist experience."],
  ["02","Translate it","We help turn military experience into language clients, commissioners and civilian organisations understand without stripping away what made the experience valuable."],
  ["03","Build practice credibility","Structured induction, supervised development, ORVIA methods, evidence discipline, governance and role-specific learning build the professional layer around existing capability."],
  ["04","Practise with support","You are not simply handed a title. We work with you through shadowing, review, feedback and appropriate supervision until the role can be evidenced."],
  ["05","Keep developing","Capability is reviewed through real work, learning and assurance. The objective is a practitioner who can explain what they know, what they do not know and what they will do next."]
];

export default function ArmedForcesPage(){
  return <>
    <section className="page-hero af-hero">
      <div className="shell af-hero-grid">
        <div>
          <div className="eyebrow">ARMED FORCES & VETERANS</div>
          <h1>Service changes. Capability doesn’t.</h1>
          <p className="lead">ORVIA is veteran-founded and committed to building meaningful civilian opportunities from the skills, judgement and objectivity developed through Service.</p>
          <div className="actions">
            <Link className="button" href="/careers">Explore practitioner careers</Link>
            <a className="button secondary" href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Our Trust A Veteran profile</a>
          </div>
          <div className="trust-inline">
            <span>Armed Forces Covenant signatory</span>
            <span>ERS Bronze Award</span>
            <span>Working toward Silver</span>
            <span>Gold is the long-term ambition</span>
          </div>
        </div>
        <div className="official-assets-panel">
          <div className="official-asset-slot">
            <strong>OFFICIAL COVENANT LOGO</strong>
            <span>Use approved Armed Forces Covenant master artwork only.</span>
          </div>
          <div className="official-asset-slot">
            <strong>OFFICIAL ERS BRONZE BADGE</strong>
            <span>Use approved Employer Recognition Scheme artwork only.</span>
          </div>
          <div className="official-asset-slot">
            <strong>TRUST A VETERAN APPROVED ASSET</strong>
            <span>Use only the authorised partner/member artwork supplied for ORVIA.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell split">
        <div>
          <div className="eyebrow">OUR JOURNEY</div>
          <h2>Bronze is a milestone, not the finish line.</h2>
          <p className="lead">ORVIA has signed the Armed Forces Covenant and achieved Bronze recognition through the Defence Employer Recognition Scheme. We are now building the policies, evidence and day-to-day practice needed to progress toward Silver, with Gold as the longer-term ambition.</p>
          <p>That means the commitment has to be visible in recruitment, Reserve support, development, communication and the way we work with the wider Armed Forces community — not just in a badge in a footer.</p>
        </div>
        <div className="journey-card">
          <div><span>ACHIEVED</span><strong>Covenant signed</strong></div>
          <div><span>ACHIEVED</span><strong>ERS Bronze</strong></div>
          <div><span>NOW</span><strong>Building toward Silver</strong></div>
          <div><span>AMBITION</span><strong>Progress to Gold</strong></div>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHO WE WANT TO HEAR FROM</div><h2>The whole Armed Forces community brings value.</h2></div>
          <p>We recruit for capability and potential, not for the ability to translate a Service career into corporate jargon.</p>
        </div>
        <div className="card-grid">{communities.map(([title,body])=><article className="feature-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="eyebrow light">THE ORVIA PRACTITIONER PATHWAY</div>
        <h2>We do not ask you to become somebody else. We build professional practice around what you already bring.</h2>
        <div className="practitioner-steps">
          {pathway.map(([n,title,body])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell benefits-grid">
        <div>
          <div className="eyebrow">WHY ORVIA</div>
          <h2>A route from resettlement to credible practice.</h2>
          <p className="lead">A Service leaver may arrive with years of operational judgement, leadership, intelligence gathering, instruction, assurance, logistics or crisis-management experience — but no civilian job title that captures it. Our job is to help translate and evidence that capability responsibly.</p>
        </div>
        <div className="benefit-list">
          <span>Capability-led selection rather than keyword CV filtering</span>
          <span>Structured ORVIA induction and methodology</span>
          <span>Mentoring, shadowing and feedback</span>
          <span>Role-specific learning and evidence of competence where required</span>
          <span>Clear professional boundaries and human oversight</span>
          <span>Opportunities to develop into practitioner, assurance and leadership roles</span>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow">TRUST A VETERAN</div>
          <h2>Part of a wider veteran business community.</h2>
          <p>Trust A Veteran is a UK directory focused on veteran-owned and veteran-provided businesses. ORVIA maintains its own profile within that community and uses only authorised Trust A Veteran branding where displayed.</p>
        </div>
        <div className="trust-list">
          <a href="https://www.trustaveteran.com/" target="_blank" rel="noreferrer">Visit Trust A Veteran →</a>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">View ORVIA on Trust A Veteran →</a>
          <a href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">Armed Forces Covenant →</a>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div>
          <div className="eyebrow light">YOU DO NOT NEED A PERFECT CIVILIAN CV</div>
          <h2>Tell us what you can do, how you think and what you want to become.</h2>
        </div>
        <Link className="button light-button" href="/careers">Start your ORVIA practitioner journey</Link>
      </div>
    </section>
  </>;
}
