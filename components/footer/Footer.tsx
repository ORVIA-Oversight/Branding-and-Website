import Link from "next/link";

export function Footer(){
  return <footer className="lean-footer">
    <div className="shell">
      <div className="lean-footer-top">
        <div className="lean-footer-brand">
          <img src="/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/>
          <p>Independent oversight, evidence and practical improvement with people kept at the centre.</p>
        </div>
        <div>
          <h3>Start</h3>
          <Link href="/work-with-orvia">Work with ORVIA</Link>
          <Link href="/work-with-john">Work with John</Link>
          <Link href="/products">Products</Link>
          <Link href="/customer-login">Customer access</Link>
        </div>
        <div>
          <h3>Trust</h3>
          <Link href="/trust">Trust Centre</Link>
          <Link href="/armed-forces">Armed Forces</Link>
          <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Trust A Veteran</a>
          <Link href="/founder">Founder story</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+443300433703">0330 043 3703</a>
          <a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a>
          <Link href="/contact">Contact ORVIA</Link>
        </div>
      </div>
      <div className="lean-footer-bottom">
        <span>© 2026 ORVIA Oversight Ltd</span>
        <span>Company 16123685</span>
        <span>ICO ZC152311</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>;
}
