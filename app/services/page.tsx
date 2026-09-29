import Link from "next/link";
import { serviceGuides, serviceGuideOrder } from "@/config/serviceGuides";

export default function ServicesPage(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">ORVIA SERVICE INFORMATION</div>
        <h1>Understand the service before you decide what to do next.</h1>
        <p className="lead">Each guide explains the purpose, who it may help, what working with it looks like and the important boundaries. The live service page remains the controlling source for current pricing and availability.</p>
      </div>
    </section>
    <section className="section">
      <div className="shell service-guide-index-grid">
        {serviceGuideOrder.map(id=>{
          const guide=serviceGuides[id];
          return <article key={id} style={{"--service-accent":guide.accent} as React.CSSProperties}>
            <span>Service guide</span>
            <h2>{guide.name}</h2>
            <p>{guide.strapline}</p>
            <Link href={"/services/"+guide.id}>Read information guide →</Link>
          </article>;
        })}
      </div>
    </section>
  </>;
}
