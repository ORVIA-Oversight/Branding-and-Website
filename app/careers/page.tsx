import Link from "next/link";

const values=[
  ["Meaningful work","Use your skills to make a practical difference in people’s lives and in the organisations that serve them."],
  ["Innovative platforms","Work with IRIS, HIVE, VITA, VERA, Command and AI to support evidence-led improvement."],
  ["Human first","Technology expands the questions. Evidence disciplines the answer. A human remains accountable."],
  ["Outside the box","Test hypotheses, consider alternatives and challenge the easy explanation when the evidence points elsewhere."],
  ["Growth & development","Build capability through learning, supervision, feedback and evidence of competence."],
  ["Supportive community","Work with people who value integrity, fairness, curiosity and respect."]
];

const groups=[
  ["ARMED FORCES","Veterans · Service leavers · Reservists"],
  ["FAMILIES","Military spouses · Partners · Support networks"],
  ["OTHER SERVICES","Police · Fire · NHS · Coastguard · Prison Service"],
  ["CIVILIANS","Career changers · Specialists · Experienced professionals"]
];

export default function CareersPage(){
  return <>
    <section className="careers-v2-hero">
      <div className="shell careers-v2-grid">
        <div className="careers-v2-copy">
          <div className="eyebrow light">CAREERS AT ORVIA</div>
          <h1>Purpose. People.<br/><span>A fairer society.</span></h1>
          <p className="lead">We bring together military veterans, people from other services and civilians who share a commitment to protect people, strengthen organisations and create lasting change.</p>
          <div className="actions">
            <a className="button af-gold-button" href="#express-interest">Join our team</a>
            <Link className="button af-outline-button" href="/armed-forces">Our veteran story</Link>
          </div>
          <p className="af-v2-principle">DIFFERENT EXPERIENCES. A SHARED PURPOSE.</p>
        </div>
        <div className="careers-v2-visual">
          <img src="/armed-forces/service-team.jpg" alt="People working together in a demanding environment"/>
          <div className="careers-v2-quote"><strong>Bring us what you’re capable of.</strong><span>Not just what your CV knows how to say.</span></div>
        </div>
      </div>
    </section>

    <section className="career-group-strip">
      <div className="shell career-group-grid">
        {groups.map(([title,body])=><article key={title}><strong>{title}</strong><span>{body}</span></article>)}
      </div>
    </section>

    <section className="section">
      <div className="shell careers-story-grid">
        <div>
          <div className="eyebrow">WHY ORVIA</div>
          <h2>We need people who can see what others miss.</h2>
          <p className="lead">The work we do can be intricate. We go into organisations, examine what is happening, test explanations, identify what is not working and help make it better.</p>
          <p>That needs people who can stay steady, ask harder questions, recognise uncertainty and think beyond the obvious. Some of those people come from the Armed Forces or other public services. Some do not. What matters is the capability and the integrity behind it.</p>
          <Link className="text-link" href="/armed-forces">Read the Armed Forces & Veterans story →</Link>
        </div>
        <div className="careers-v2-photo-grid">
          <figure className="careers-v2-photo-main"><img src="/armed-forces/family.webp" alt="Family together"/></figure>
          <figure><img src="/armed-forces/john-mcgill.jpg" alt="John McGill, founder of ORVIA"/></figure>
          <div className="careers-v2-statement"><strong>Protect the human.</strong><span>Improve the system around them.</span></div>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT WORK HERE SHOULD FEEL LIKE</div><h2>More than a job.</h2></div>
          <p>ORVIA is building a workplace where unusual experience can become useful practice — with proper boundaries, development and accountability around it.</p>
        </div>
        <div className="career-value-grid">
          {values.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell careers-tech-grid">
        <div>
          <div className="eyebrow light">HUMAN-LED TECHNOLOGY</div>
          <h2>Advanced tools. Human authority.</h2>
          <p className="lead">We use technology to analyse evidence, build hypotheses, test alternatives and expose blind spots. But nothing high-consequence leaves ORVIA without human review and accountability.</p>
        </div>
        <div className="career-tech-list">
          <span><strong>IRIS</strong> coordinates work</span>
          <span><strong>HIVE</strong> preserves evidence</span>
          <span><strong>VITA</strong> tests assurance</span>
          <span><strong>VERA</strong> verifies</span>
          <span><strong>Command</strong> gives operational visibility</span>
          <span><strong>AI</strong> explores hypotheses and alternatives</span>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">HOW WE RECRUIT</div><h2>Everybody gets a fair shot. An open door is not an easy door.</h2></div>
          <p>We recruit for capability, not CV polish. Where a role requires qualification, statutory competence, licence, clearance or regulated status, those requirements remain mandatory.</p>
        </div>
        <div className="career-pathway">
          <span>DISCOVER</span><i>→</i><span>TEST</span><i>→</i><span>BUILD</span><i>→</i><span>PRACTISE</span><i>→</i><span>EVIDENCE</span><i>→</i><span>AUTHORISE</span><i>→</i><span>DEVELOP</span>
        </div>
        <div className="career-principle-box">
          <strong>No AI system independently hires or rejects a practitioner.</strong>
          <span>Human reasoning is assessed before AI use. Human suitability review remains a human responsibility.</span>
        </div>
      </div>
    </section>

    <section id="express-interest" className="section section-soft">
      <div className="shell contact-layout">
        <div>
          <div className="eyebrow">EXPRESS INTEREST</div>
          <h2>Start with what you can do.</h2>
          <p className="lead">A CV can help, but it does not have to be the first thing we see. Tell us about your experience, capability and the direction you want to take.</p>
          <div className="career-interest-prompts">
            <span>What have you done that matters?</span>
            <span>How do you think when the answer is unclear?</span>
            <span>What can you do that your CV may not show?</span>
            <span>What would you like to develop into?</span>
          </div>
        </div>
        <form className="contact-form">
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Background / community<select name="background" defaultValue=""><option value="" disabled>Select if relevant</option><option>Veteran / Service leaver</option><option>Reservist</option><option>Military spouse / partner</option><option>Police / Fire / NHS / other service</option><option>Career changer</option><option>Experienced professional</option><option>Other</option></select></label>
          <label>What can you do that your CV may not show?<textarea name="capability" rows={7} required /></label>
          <label>What would you like to develop into?<textarea name="direction" rows={4} /></label>
          <button className="button" type="submit">Send expression of interest</button>
        </form>
      </div>
    </section>
  </>;
}
