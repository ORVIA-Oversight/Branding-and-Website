import { orviaStages, type OrviaStageId } from "@/config/method";

export function MethodMarker({stage,productName,explanation}:{stage:OrviaStageId;productName:string;explanation:string}){
  const current=orviaStages.find(item=>item.id===stage)!;
  return <section className="method-marker-section" style={{"--method-colour":current.colour} as React.CSSProperties}>
    <div className="shell method-marker">
      <div className="method-marker-letter" aria-hidden="true">{current.id}</div>
      <div className="method-marker-copy">
        <span>ORVIA METHOD · PRIMARY STAGE</span>
        <h2>{current.id} — {current.name}</h2>
        <strong>{current.strapline}</strong>
        <p>{productName}: {explanation}</p>
      </div>
      <div className="method-marker-strip" aria-label="ORVIA method">
        {orviaStages.map(item=><span key={item.id} className={item.id===stage?"active":""} style={{"--stage-colour":item.colour} as React.CSSProperties}><b>{item.id}</b><small>{item.name}</small></span>)}
      </div>
    </div>
  </section>;
}
