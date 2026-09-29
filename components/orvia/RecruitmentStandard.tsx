import Link from "next/link";
import { recruitmentModel } from "@/config/recruitment";

export function RecruitmentStandard(){
  return <section className="section recruitment-standard">
    <div className="shell">
      <div className="section-head">
        <div>
          <div className="eyebrow">THE ORVIA RECRUITMENT STANDARD</div>
          <h2>Everybody gets a fair shot. An open door is not an easy door.</h2>
        </div>
        <p>Capability-led does not mean standards-light. We test how people think, how they use evidence, how they respond to challenge and whether they can recognise uncertainty.</p>
      </div>
      <div className="recruitment-stage-grid">
        {recruitmentModel.stages.map((stage,index)=><article className="recruitment-stage-card" key={stage.id}>
          <span>{String(index+1).padStart(2,"0")}</span>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </article>)}
      </div>
      <div className="recruitment-progression">
        <div>
          <div className="eyebrow">AFTER ASSESSMENT</div>
          <h3>Selection is only the start of practice authority.</h3>
          <p>{recruitmentModel.mandatoryBoundary}</p>
        </div>
        <div className="progression-list">
          {recruitmentModel.postAssessment.map((item,index)=><span key={item}><b>{String(index+1).padStart(2,"0")}</b>{item}</span>)}
        </div>
      </div>
      <div className="pathway-strip">
        {recruitmentModel.practitionerPathway.map((item,index)=><span key={item}>{item}{index<recruitmentModel.practitionerPathway.length-1 && <i>→</i>}</span>)}
      </div>
      <div className="recruitment-boundary">
        <strong>{recruitmentModel.principles[3]}</strong>
        <Link href="/careers#express-interest" className="text-link">Start with your capability →</Link>
      </div>
    </div>
  </section>
}
