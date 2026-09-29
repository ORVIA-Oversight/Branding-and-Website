import Link from "next/link";
import { trust } from "@/config/trust";

export default function TrustPage(){
  return <>
    <section className="page-hero">
      <div className="shell">
        <div className="eyebrow">TRUST CENTRE</div>
        <h1>Trust should be inspectable.</h1>
        <p className="lead">Clear company information, privacy approach, security practices, verified external trust signals and the limits of automation.</p>

        <div className="info-grid">
          <article>
            <h2>Company</h2>
            <p>{trust.company}<br/>Company No. {trust.companyNumber}<br/>ICO {trust.ico}</p>
          </article>
          <article>
            <h2>Privacy</h2>
            <p>Privacy notice, cookies, data rights and a living DPIA approach.</p>
          </article>
          <article>
            <h2>Security</h2>
            <p>Access controls, hosting, incident response, supplier assurance and vulnerability reporting.</p>
          </article>
          <article>
            <h2>Human oversight</h2>
            <p>{trust.humanOversight}<br/>{trust.automatedDecisionStatement}</p>
          </article>
          <article id="privacy-impact">
            <h2>DPIA approach</h2>
            <p>ORVIA uses Data Protection Impact Assessments where processing may create elevated privacy risks. These are maintained as living governance records and reviewed when systems, processing or risk materially change.</p>
          </article>
          <article>
            <h2>Cyber Essentials</h2>
            <p>{trust.cyberEssentials}</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">VERIFIED EXTERNAL TRUST</div>
            <h2>Independent signals, linked back to their source.</h2>
          </div>
          <p>ORVIA separates verified external recognition from internal claims and does not alter third-party marks or badges.</p>
        </div>

        <div className="card-grid">
          <article className="feature-card">
            <h3>Defence Employer Recognition Scheme</h3>
            <p><strong>Bronze Award holder.</strong> Award confirmed 22 September 2026.</p>
            <Link className="text-link" href="/armed-forces">See Armed Forces commitment →</Link>
          </article>

          <article className="feature-card">
            <h3>Armed Forces Covenant</h3>
            <p>ORVIA Oversight Ltd is an Armed Forces Covenant signatory and publishes its commitment separately from commercial claims.</p>
            <a className="text-link" href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">Visit Armed Forces Covenant →</a>
          </article>

          <article className="feature-card">
            <h3>Trust A Veteran</h3>
            <p>ORVIA has a current public Trust A Veteran profile. Trust A Veteran has authorised ORVIA to promote its membership while the subscription remains current, using the supplied artwork unchanged.</p>
            <a className="text-link" href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">View ORVIA profile →</a>
          </article>
        </div>
      </div>
    </section>
  </>;
}
