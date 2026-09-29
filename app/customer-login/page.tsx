import { customerAccessNav } from "@/config/navigation";

export default function CustomerLoginPage(){
  return <>
    <section className="page-hero customer-access-hero">
      <div className="shell customer-access-hero-grid">
        <div>
          <div className="eyebrow">CUSTOMER LOGIN</div>
          <h1>One front door into the ORVIA estate.</h1>
          <p className="lead">Choose the ORVIA service you need. Public products open directly; restricted control environments remain limited to authorised users while the wider backend is completed.</p>
        </div>
        <div className="customer-access-summary">
          <span>LIVE ACCESS</span>
          <strong>Workspace · Voice · Witness Room</strong>
          <span>RESTRICTED / CONTROLLED</span>
          <strong>Command · Brand Control</strong>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">ACCESS DIRECTORY</div><h2>Go to the system behind the service.</h2></div>
          <p>This page is deliberately simple: every button must lead to a real service, authenticated workspace or controlled backend route.</p>
        </div>
        <div className="customer-access-grid">
          {customerAccessNav.map(item=><article className="customer-access-card" id={item.label==="Brand Control" ? "brand-control" : undefined} key={item.label}>
            <div className="customer-access-card-top">
              <span className={"access-status "+item.status}>{item.status}</span>
              <span>ORVIA</span>
            </div>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
            <a className="button" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
              {item.status==="live" ? "Open service" : item.label==="Brand Control" ? "View controlled access" : "Authorised access"}
            </a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow light">BACKEND STATUS</div>
          <h2>Access first. Full control plane next.</h2>
          <p>The customer-access layer is being standardised before the full backend is exposed. That lets the navigation, product boundaries, authentication destinations and control surfaces be reviewed without pretending unfinished functionality is complete.</p>
        </div>
        <div className="trust-list dark-list">
          <span>Customer Workspace — live route</span>
          <span>Voice — live route</span>
          <span>Witness Room — live route</span>
          <span>Command — restricted route</span>
          <span>Brand Control — controlled backend</span>
          <span>IRIS remains the workflow conductor</span>
        </div>
      </div>
    </section>
  </>;
}
