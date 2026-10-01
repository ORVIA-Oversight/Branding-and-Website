import Link from "next/link";
import { footerNavigation } from "@/config/navigation";
import { armedForcesAssets } from "@/config/armedForces";

function FooterLink({item}:{item:{label:string;href:string;external?:boolean}}){
  if(item.external || item.href.startsWith("http")){
    return <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>;
  }
  return <Link href={item.href}>{item.label}</Link>;
}

export function Footer() {
  return <footer className="footer footer-approved">
    <div className="shell">
      <div className="footer-main-approved">
        <div className="footer-brand-approved">
          <Link href="https://orvia.org.uk" aria-label="ORVIA Oversight">
            <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/>
          </Link>
          <p><strong>Evidence before assumption.</strong><br/>Human first. Human last. Independent oversight, practical improvement and accountable action.</p>
        </div>

        <div className="footer-col">
          <h3>START HERE</h3>
          {footerNavigation.startHere.map(item=><FooterLink key={item.href+item.label} item={item}/>)}
        </div>

        <div className="footer-col">
          <h3>METHOD + PRODUCTS</h3>
          {footerNavigation.methodProducts.map(item=><FooterLink key={item.href+item.label} item={item}/>)}
        </div>

        <div className="footer-col">
          <h3>COMPANY</h3>
          {footerNavigation.company.map(item=><FooterLink key={item.href+item.label} item={item}/>)}
          <a href={armedForcesAssets.trustAVeteran.profile} target="_blank" rel="noreferrer">Trust A Veteran</a>
          <a href="tel:+443300433703">0330 043 3703</a>
          <a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a>
        </div>

        <div className="footer-signature-approved">
          <strong>Human first.<br/>Human last.</strong>
          <span className="footer-signature-line"/>
          <div className="footer-socials" aria-label="Social and contact links">
            <a href="mailto:hello@orvia.org.uk" aria-label="Email">@</a>
            <a href="tel:+443300433703" aria-label="Telephone">☎</a>
          </div>
        </div>
      </div>

      <div className="footer-trust-approved">
        <strong>Verified trust:</strong>
        <a href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">Armed Forces Covenant</a>
        <Link href="/trust">Companies House 16123685</Link>
        <Link href="/trust">ICO ZC152311</Link>
        <Link href="/armed-forces">ERS Bronze</Link>
        <Link href="/founder">Veteran-founded</Link>
        <a href={armedForcesAssets.trustAVeteran.profile} target="_blank" rel="noreferrer">Trust A Veteran</a>
      </div>

      <div className="footer-bottom-approved">
        <div>
          <span>© 2026 ORVIA Oversight Ltd</span>
          <span>Company 16123685</span>
          <span>ICO ZC152311</span>
        </div>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </div>
  </footer>
}
