import { customerAccessNav } from "@/config/navigation";

export default function CustomerLoginPage(){
  return <>
    <section className="page-hero customer-access-hero">
      <div className="shell customer-access-hero-grid">
        <div>
          <div className="eyebrow">CUSTOMER ACCESS</div>
          <h1>Open the service you already use.</h1>
          <p className="lead">Choose your ORVIA workspace or service. Internal control environments are not exposed through the public customer directory.</p>
        </div>
        <div className="customer-access-summary">
          <span>LIVE CUSTOMER ROUTES</span>
          <strong>Workspace · Voice · Witness Room</strong>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">ACCESS DIRECTORY</div><h2>Go straight to the service behind the work.</h2></div>
          <p>Each route below must lead to a real customer service or workspace. Internal Command and Brand Control remain outside the public customer journey.</p>
        </div>
        <div className="customer-access-grid">
          {customerAccessNav.map(item=><article className="customer-access-card" key={item.label}>
            <div className="customer-access-card-top">
              <span className={"access-status "+item.status}>{item.status}</span>
              <span>ORVIA</span>
            </div>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
            <a className="button" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
              Open service
            </a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-ink">
      <div className="shell trust-preview">
        <div>
          <div className="eyebrow light">SIMPLE FRONT DOOR</div>
          <h2>Customer access should expose the service, not ORVIA's internal control plane.</h2>
          <p>Workflow, evidence, assurance and internal controls continue underneath the customer experience without making the customer navigate the architecture.</p>
        </div>
        <div className="trust-list dark-list">
          <span>Customer Workspace</span>
          <span>ORVIA Voice</span>
          <span>Witness Room</span>
          <span>IRIS remains the workflow conductor</span>
          <span>Internal control surfaces remain restricted</span>
        </div>
      </div>
    </section>
  </>;
}
