const signals = [
  ["What they first believed","Initial interpretation preserved, not overwritten."],
  ["What changed","Every change is tied to the evidence that arrived before it."],
  ["What stayed the same","Holding a position is valid when the reason remains evidence-led."],
  ["Confidence calibration","Confidence should move with the strength and ambiguity of the evidence."],
  ["Recovery after error","Recognition, ownership, correction, learning and prevention are visible."],
  ["Integrity gap","What someone says they value is compared with what they actually do under pressure."]
] as const;

export function HumanReviewPanel(){
  return <div className="pr-review-shell">
    <div className="pr-review-window">
      <div className="pr-review-top"><span>FOUNDER / SENIOR VALUES REVIEW</span><strong>Human review required</strong></div>
      <div className="pr-review-timeline">
        {["Observe","Reflect","Challenge","Recalibrate","Act"].map((label,i)=><div key={label}><span>{String(i+1).padStart(2,"0")}</span><b>{label}</b></div>)}
      </div>
      <div className="pr-review-grid">
        {signals.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <div className="pr-review-boundary">No algorithm hires, rejects, diagnoses or makes a safeguarding decision.</div>
    </div>
  </div>;
}
