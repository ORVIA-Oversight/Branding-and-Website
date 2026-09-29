const rounds = [
  {step:"01",title:"First look",copy:"What do you actually see? Separate what is observed from what has been claimed, interpreted or assumed."},
  {step:"02",title:"More evidence",copy:"New records and context arrive. Revisit your position and explain what changes — or why it does not."},
  {step:"03",title:"Another human view",copy:"A perspective you have not yet heard enters the room. Hold it alongside the evidence already present."},
  {step:"04",title:"The uncomfortable evidence",copy:"Contradictory information tests whether you protect your conclusion or remain open to what the evidence supports."},
  {step:"05",title:"Act proportionately",copy:"Decide what should happen now, what should not happen yet, and what would make you change your mind again."}
] as const;

export function AssessmentJourney(){
  return <div className="pr-journey">
    {rounds.map((round,index)=><article key={round.step} className="pr-journey-card">
      <div className="pr-journey-line" aria-hidden="true"/>
      <span>{round.step}</span>
      <h3>{round.title}</h3>
      <p>{round.copy}</p>
      <small>{index===0?"Baseline reasoning":index===4?"Human decision point":"Evidence injection"}</small>
    </article>)}
  </div>;
}
