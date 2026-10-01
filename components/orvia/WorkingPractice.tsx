import { workingPractice } from "@/config/workingPractice";
import { SiteIcon } from "@/components/visual/SiteIcon";

export function WorkingPractice(){
  return <section className="section working-practice">
    <div className="shell">
      <div className="section-head">
        <div><div className="eyebrow">HOW WE WORK</div><h2>{workingPractice.headline}</h2></div>
        <p>{workingPractice.intro}</p>
      </div>

      <div className="working-practice-media-row">
        <div className="section-visual-placeholder"><span>IMAGE PLACEHOLDER</span><strong>Observe the real environment</strong><small>People, context and evidence in the same frame.</small></div>
        <div className="section-visual-placeholder dark"><span>DIAGRAM PLACEHOLDER</span><strong>Problem → evidence → action</strong><small>Simple visual explainer, not another text block.</small></div>
      </div>
      <div className="working-practice-lenses visual-icon-grid">
        {workingPractice.lenses.map(([title,copy],index)=><article key={title}>
          <div className="visual-card-icon"><SiteIcon kind={(["observe","review","verify","interpret","act","evidence"] as const)[index % 6]}/></div>
          <span className="visual-icon-badge">{String(index+1).padStart(2,"0")}</span>
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
