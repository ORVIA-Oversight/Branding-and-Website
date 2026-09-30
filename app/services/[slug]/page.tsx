import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintGuideButton } from "@/components/marketing/PrintGuideButton";
import { serviceGuides, serviceGuideOrder, type ServiceGuideId } from "@/config/serviceGuides";

export function generateStaticParams(){
  return serviceGuideOrder.map(slug=>({slug}));
}

export default async function ServiceGuidePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const guide=serviceGuides[slug as ServiceGuideId];
  if(!guide) notFound();

  const isExternal=guide.serviceUrl.startsWith("http");
  const currentIndex=serviceGuideOrder.indexOf(guide.id);
  const previousId=serviceGuideOrder[(currentIndex-1+serviceGuideOrder.length)%serviceGuideOrder.length];
  const nextId=serviceGuideOrder[(currentIndex+1)%serviceGuideOrder.length];
  const previous=serviceGuides[previousId];
  const next=serviceGuides[nextId];

  return <>
    <nav className="service-switcher" aria-label="Browse ORVIA services">
      <div className="shell service-switcher-inner">
        <Link href={"/services/"+previous.id}>← {previous.name}</Link>
        <Link className="service-switcher-all" href="/services">All services</Link>
        <Link href={"/services/"+next.id}>{next.name} →</Link>
      </div>
    </nav>
    <section className="service-guide-hero" style={{"--service-accent":guide.accent} as React.CSSProperties}>
      <div className="shell service-guide-hero-grid">
        <div>
          <div className="eyebrow">SERVICE INFORMATION</div>
          <h1>{guide.name}</h1>
          <p className="service-guide-strap">{guide.strapline}</p>
          <p className="lead">{guide.summary}</p>
          <div className="actions">
            {isExternal
              ? <a className="button" href={guide.serviceUrl} target="_blank" rel="noreferrer">Open live service</a>
              : <Link className="button" href={guide.serviceUrl}>Open live service</Link>}
            <PrintGuideButton/>
          </div>
          <p className="service-guide-print-note">Use Print / save guide and choose “Save as PDF” for a downloadable copy.</p>
        </div>
        <aside className="service-guide-summary-card">
          <span>ORVIA service guide</span>
          <strong>Useful information before you decide what to do next.</strong>
          <p>This page explains the service in plain English: who it is for, what it helps with, what working with it looks like and the important boundaries.</p>
        </aside>
      </div>
    </section>

    <section className="section">
      <div className="shell service-guide-columns">
        <div>
          <div className="eyebrow">WHO IT IS FOR</div>
          <h2>When this service may be useful.</h2>
        </div>
        <div className="service-guide-list">
          {guide.audiences.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell service-guide-columns">
        <div>
          <div className="eyebrow">WHAT IT HELPS YOU DO</div>
          <h2>Purpose before architecture.</h2>
          <p className="lead">You should be able to understand the value of the service without learning ORVIA’s internal engineering.</p>
        </div>
        <div className="service-guide-feature-grid">
          {guide.helps.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow light">WHAT WORKING WITH IT LOOKS LIKE</div><h2>A clear route from first contact to the next human-owned action.</h2></div>
          <p>The exact workflow depends on the service and the situation. These steps describe the public experience, not ORVIA’s proprietary internal implementation.</p>
        </div>
        <div className="service-guide-journey">
          {guide.journey.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell service-guide-columns">
        <div>
          <div className="eyebrow">IMPORTANT BOUNDARIES</div>
          <h2>What this service does not replace.</h2>
        </div>
        <div className="service-guide-boundary">
          <p>{guide.boundaries}</p>
          <strong>AI may support ORVIA work; authorised humans retain judgement, authority and accountability.</strong>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell service-guide-next">
        <div>
          <div className="eyebrow">CURRENT ROUTE</div>
          <h2>Ready to take the next step?</h2>
          <p>{guide.availabilityNote}</p>
        </div>
        {isExternal
          ? <a className="button" href={guide.serviceUrl} target="_blank" rel="noreferrer">Open / start {guide.name}</a>
          : <Link className="button" href={guide.serviceUrl}>Open / start {guide.name}</Link>}
      </div>
      <div className="shell service-guide-related">
        <div>
          <span>Previous service</span>
          <Link href={"/services/"+previous.id}>← {previous.name}</Link>
        </div>
        <div>
          <span>Next service</span>
          <Link href={"/services/"+next.id}>{next.name} →</Link>
        </div>
      </div>
    </section>
  </>;
}
