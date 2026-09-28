import Link from "next/link";

const mindset = [
  ["Read the room","Notice what is said, what is avoided, what does not fit, where confidence is misplaced and where a system is quietly telling you something is wrong."],
  ["Treat instinct as a signal","A gut feeling is not a finding. It is a prompt to slow down, ask better questions and look for evidence that supports or challenges the concern."],
  ["Build competing hypotheses","Do not fall in love with the first explanation. Consider credible alternatives, identify what would discriminate between them and actively look for disconfirming evidence."],
  ["Separate fact from inference","Know what is evidenced, what is reported, what is assumed, what remains disputed and what is still missing."],
  ["Challenge with purpose","Ask difficult questions without becoming adversarial. The objective is not to win an argument; it is to improve the quality of the decision."],
  ["Fix the system","Work with providers, businesses and leaders to turn insight into practical changes that can be implemented, verified and sustained."]
];

const pathway = [
  ["01","Discover","Map experience, judgement, behaviours, transferable capability and the environments in which you have learned to operate."],
  ["02","Test","Use structured scenarios, evidence exercises and reflective challenge to understand how you think — not simply what qualifications you hold."],
  ["03","Build","Close the gaps through ORVIA learning, professional knowledge, role boundaries, writing, evidence discipline and sector-specific development."],
  ["04","Practise","Shadow, observe, contribute and undertake appropriately supervised work with review and feedback."],
  ["05","Evidence","Build a defensible record of competence through real outputs, observed practice, reflection and challenge."],
  ["06","Authorise","Where ORVIA governance permits, define the work you are authorised to undertake, its boundaries and the support available to you."],
  ["07","Develop","Remain part of a community of practice through CPD, peer challenge, supervision, learning and periodic assurance."]
];

const benefits = [
  ["A professional home","A community built around evidence, reflection, challenge and human reality rather than a job title alone."],
  ["Capability translated","Help turning military, operational, care, leadership, governance or lived experience into credible civilian professional value."],
  ["Structured development","A pathway that identifies genuine gaps and helps close them instead of pretending transferable skills remove the need for learning."],
  ["Supervision & challenge","Access to people who will question your reasoning, strengthen your work and help you recognise blind spots."],
  ["Real work, real evidence","Development through practical assignments and evidence of what you can actually do."],
  ["A route to opportunity","A pathway into ORVIA work, partner delivery and future practitioner opportunities where competence and demand align."]
];

export default function PractitionerNetworkPage(){
  return <>
    <section className="page-hero practitioner-hero">
      <div className="shell practitioner-hero-grid">
        <div>
          <div className="eyebrow">ORVIA PRACTITIONER NETWORK</div>
          <h1>See the room. Test the story. Fix the system.</h1>
          <p className="lead">ORVIA develops business fixers: people who can notice weak signals, challenge assumptions, test alternative explanations and work with organisations to turn uncomfortable truths into proportionate action.</p>
          <div className="actions">
            <Link className="button" href="/careers#express-interest">Explore the practitioner pathway</Link>
            <Link className="button secondary" href="/armed-forces">Armed Forces route</Link>
          </div>
          <div className="trust-inline">
            <span>Evidence-led</span><span>Human-centred</span><span>Hypothesis-aware</span><span>Supervised development</span><span>Community of practice</span>
          </div>
        </div>
        <div className="practitioner-statement-card">
          <span>THE ORVIA STANDARD</span>
          <strong>Instinct starts the question. Evidence earns the conclusion.</strong>
          <p>We value judgement and pattern recognition, but never treat confidence or intuition as proof.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell split">
        <div>
          <div className="eyebrow">BUSINESS FIXERS, NOT ENFORCERS</div>
          <h2>High-assurance thinking without pretending to be law enforcement.</h2>
          <p className="lead">We borrow from the disciplines found in serious investigative, intelligence and assurance environments: source checking, competing hypotheses, contradiction testing, evidence chains, structured challenge and documented reasoning.</p>
          <p>ORVIA is not the FBI, police, regulator or statutory investigator. We use disciplined analytical habits to help organisations understand what is happening, why it may be happening and what needs to change.</p>
        </div>
        <div className="quality-story">
          <span>NOTICE</span><span>QUESTION</span><span>TEST</span><span>CHALLENGE</span><span>VERIFY</span><span>FIX</span>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">HOW AN ORVIA PRACTITIONER THINKS</div><h2>Curious enough to doubt the obvious. Disciplined enough to prove the alternative.</h2></div>
          <p>Good practitioners do not simply collect information. They notice tension, context, omissions, patterns and competing explanations — then test them.</p>
        </div>
        <div className="practitioner-grid">{mindset.map(([title,body],i)=><article className="practitioner-card" key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="eyebrow light">THE GLADIATOR ETHOS</div>
        <h2>Calm under pressure. Curious by default. Difficult to fool.</h2>
        <div className="gladiator-grid">
          <article><strong>COURAGE</strong><p>Say when something does not make sense, even when the easier option is to stay quiet.</p></article>
          <article><strong>DISCIPLINE</strong><p>Do not turn suspicion into fact. Record the evidence, the uncertainty and the alternative explanations.</p></article>
          <article><strong>OBJECTIVITY</strong><p>Be willing to change your view when the evidence changes.</p></article>
          <article><strong>HUMILITY</strong><p>Know the boundary of your expertise and bring in the right person when the problem exceeds it.</p></article>
          <article><strong>UTILITY</strong><p>Analysis that never changes anything is unfinished work. Help the organisation make the fix real.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="eyebrow">FROM CAPABILITY TO PRACTICE</div>
        <h2>We build the professional layer around what you already bring.</h2>
        <div className="practitioner-steps premium-steps">{pathway.map(([n,title,body])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT THE NETWORK OFFERS</div><h2>More than a badge. A professional system around the practitioner.</h2></div>
          <p>The controlled ORVIA model is recruitment, standards, authorisation and community of practice. Public licence language remains held until the full governance model is approved.</p>
        </div>
        <div className="benefit-card-grid">{benefits.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow">THE WORK</div>
          <h2>Providers and businesses do not need another person who only tells them what is wrong.</h2>
          <p className="lead">They need someone who can understand the operating reality, identify the weakness, challenge the story, work alongside the people involved and help build a better way forward.</p>
        </div>
        <div className="trust-list">
          <span>Evidence and chronology review</span>
          <span>Governance and operational challenge</span>
          <span>Culture and weak-signal observation</span>
          <span>Alternative-hypothesis testing</span>
          <span>Action design and implementation support</span>
          <span>Verification that the fix actually worked</span>
        </div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="shell client-practitioner-grid">
        <div>
          <div className="eyebrow light">WHO WE ARE LOOKING FOR</div>
          <h2>Not one background. One standard of thinking.</h2>
          <p>Veterans, Service leavers, Reservists, operational leaders, care professionals, governance specialists, investigators, trainers, project people, managers, technical specialists and career changers can all bring useful capability.</p>
        </div>
        <div className="signal-list">
          <span>You notice what others walk past.</span>
          <span>You can hold more than one explanation in your head.</span>
          <span>You can challenge without performing.</span>
          <span>You can write and explain your reasoning.</span>
          <span>You care whether the fix works after you leave.</span>
          <span>You are comfortable saying “I do not know yet.”</span>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell governance-callout">
        <div>
          <div className="eyebrow">PROFESSIONAL GOVERNANCE</div>
          <h2>Recognition must be earned and maintained.</h2>
        </div>
        <p>ORVIA Practitioner Network is the approved public architecture. It is a professional network and standards pathway, not a statutory professional licence. Any future licence or public-register model requires formal rules for eligibility, competence, supervision, CPD, renewal, complaints, insurance, suspension and termination before launch.</p>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div><div className="eyebrow light">BECOME AN ORVIA PRACTITIONER</div><h2>If you see the thing that does not fit, we want to know how you think.</h2></div>
        <Link className="button light-button" href="/careers#express-interest">Start with your capability</Link>
      </div>
    </section>
  </>;
}
