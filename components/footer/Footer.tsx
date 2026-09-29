import Link from "next/link";

export function Footer() {
  return <footer className="footer footer-approved">
    <div className="shell">
      <div className="footer-main-approved">
        <div className="footer-brand-approved">
          <Link href="https://orvia.org.uk" aria-label="ORVIA Oversight">
            <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/>
          </Link>
          <p><strong>See. Understand. Protect.</strong><br/>Independent oversight, evidence and practical improvement with people kept at the centre.</p>
        </div>

        <div className="footer-col">
          <h3>START HERE</h3>
          <Link href="/why-orvia">Why ORVIA</Link>
          <Link href="/#services">Who We Help</Link>
          <Link href="/#services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h3>METHOD + PRODUCTS</h3>
          <Link href="/#method">ORVIA Method</Link>
          <a href="https://voice.orvia.org.uk">ORVIA Voice</a>
          <a href="https://workspace.orvia.org.uk">Customer Access</a>
        </div>

        <div className="footer-col">
          <h3>COMPANY</h3>
          <Link href="/about">About</Link>
          <a href="https://orvia.org.uk/work-with-john">Work with John</a>
          <Link href="/insights">Insights</Link>
          <Link href="/armed-forces">Veterans</Link>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Trust a Veteran</a>
          <a href="tel:+443300433703">0330 043 3703</a>
          <a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a>
        </div>

        <div className="footer-signature-approved">
          <strong>People first.<br/>A safer tomorrow.</strong>
          <span className="footer-signature-line"/>
          <div className="footer-socials" aria-label="Social and contact links">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
            <a href="mailto:hello@orvia.org.uk" aria-label="Email">@</a>
            <a href="tel:+443300433703" aria-label="Telephone">☎</a>
          </div>
        </div>
      </div>

      <div className="footer-trust-approved">
        <strong>Verified trust:</strong>
        <a href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">Armed Forces Covenant</a>
        <Link href="/armed-forces">ERS Bronze</Link>
        <Link href="/armed-forces#veteran-story">Veteran-founded</Link>
        <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Trust a Veteran</a>
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
