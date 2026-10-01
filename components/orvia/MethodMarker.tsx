import { orviaStages, type OrviaStageId } from "@/config/method";

type Props = {
  primary: OrviaStageId;
  secondary?: readonly OrviaStageId[];
  compact?: boolean;
};

export function MethodMarker({ primary, secondary = [], compact = false }: Props) {
  const stage = orviaStages.find(item => item.id === primary)!;
  return <section className={compact ? "method-marker method-marker-compact" : "method-marker"} style={{"--method-colour":stage.colour} as React.CSSProperties}>
    <div className="method-marker-watermark" aria-hidden="true">{stage.id}</div>
    <div className="method-marker-copy">
      <div className="method-marker-label">ORVIA METHOD · {stage.id} — {stage.name.toUpperCase()}</div>
      <h2>{stage.strapline}</h2>
      <p>{stage.description}</p>
      <div className="method-marker-question"><span>Customer question</span><strong>{stage.customerQuestion}</strong></div>
      {secondary.length > 0 && <p className="method-marker-secondary">Also uses: {secondary.map(id => orviaStages.find(item => item.id === id)?.name).filter(Boolean).join(" · ")}</p>}
    </div>
  </section>;
}

export function MethodStrip({ active }:{ active?: OrviaStageId }) {
  return <nav className="method-strip" aria-label="ORVIA method">
    {orviaStages.map(stage => <a key={stage.id} className={stage.id === active ? "active" : ""} href={`/#${stage.name.toLowerCase()}`} style={{"--method-colour":stage.colour} as React.CSSProperties}>
      <b>{stage.id}</b><span>{stage.name}</span>
    </a>)}
  </nav>;
}
