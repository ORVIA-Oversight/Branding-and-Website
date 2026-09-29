import { workingPractice } from "@/config/workingPractice";

export function WorkingPractice(){
  return <section className="section working-practice">
    <div className="shell">
      <div className="section-head">
        <div><div className="eyebrow">HOW WE WORK</div><h2>{workingPractice.headline}</h2></div>
        <p>{workingPractice.intro}</p>
      </div>

      <div className="working-practice-lenses">
        {workingPractice.lenses.map(([title,copy],index)=><article key={title}>
          <span>{String(index+1).padStart(2,"0")}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>)}
      </div>

      <div className="working-practice-guarantee">
        <div>
          <div className="eyebrow light">{workingPractice.guarantee.label}</div>
          <h3>{workingPractice.guarantee.statement}</h3>
        </div>
        <p>{workingPractice.guarantee.qualifier}</p>
      </div>

      <div className="working-practice-examples">
        <div>
          <div className="eyebrow">DIAGNOSE BEFORE YOU PRESCRIBE</div>
          <h2>If we see a problem, the answer is not automatically an ORVIA product.</h2>
        </div>
        <div className="working-practice-example-list">
          {workingPractice.interventionExamples.map(([title,copy])=><article key={title}>
            <strong>{title}</strong><p>{copy}</p>
          </article>)}
        </div>
      </div>

      <div className="working-practice-flow">
        {workingPractice.workflow.map((step,index)=><div key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}
      </div>
    </div>
  </section>;
}
