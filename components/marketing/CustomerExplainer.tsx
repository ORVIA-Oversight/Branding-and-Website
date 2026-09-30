import Link from "next/link";

const steps = [
  ["01","Tell us what is happening","Start with the concern, task, missed enquiry, evidence problem or outcome you need. You do not need to diagnose the system first."],
  ["02","ORVIA structures the picture","We organise the relevant information, make gaps or ownership visible and keep the human context alongside the record."],
  ["03","The right service takes over","Voice, Witness Room, Threshold, MIA, Web or another ORVIA route handles the part of the problem it was designed for."],
  ["04","A person owns the next action","Technology may support capture, organisation and challenge, but an accountable human retains judgement and responsibility."],
  ["05","The outcome is followed through","Where the service includes action or improvement, ORVIA keeps the next step visible and supports verification rather than assuming the job is complete."]
] as const;

export function CustomerExplainer(){
  return <section className="customer-explainer" aria-labelledby="customer-explainer-title">
    <div className="shell">
      <div className="customer-explainer-heading">
        <div>
          <div className="lean-kicker">HOW ORVIA WORKS FOR YOU</div>
          <h2 id="customer-explainer-title">One clear route from the problem to the right next action.</h2>
        </div>
        <p>You should not need to understand ORVIA's internal systems to use it. Start with the situation. We help you move from fragmented information to a clearer, human-owned next step.</p>
      </div>

      <div className="customer-explainer-flow">
        {steps.map(([n,title,body])=><article key={n}>
          <span>{n}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>)}
      </div>

      <div className="customer-explainer-actions">
        <Link className="button" href="/services">Explore the services</Link>
        <Link className="button secondary" href="/work-with-orvia">Tell us what is happening</Link>
      </div>
    </div>
  </section>;
}
