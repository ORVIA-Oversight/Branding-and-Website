import Link from "next/link";
import { products } from "@/config/products";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">O</span><span className="brand-copy"><strong>ORVIA</strong><small>Evidence. Accountability. Assurance.</small></span></div><p>Independent, evidence-led systems designed around proportionate human judgement.</p></div>
      <div><h3>Services</h3>{Object.values(products).slice(0,8).map((p)=><a key={p.name} href={p.url}>{p.name.replace("ORVIA ","")}</a>)}</div>
      <div><h3>Trust</h3><Link href="/trust">Privacy & security</Link><Link href="/trust#privacy-impact">DPIA approach</Link><a href="#">Accessibility</a><a href="#">Cookies</a><a href="#">Complaints</a><a href="#">Terms</a></div>
      <div><h3>People</h3><Link href="/careers">Careers</Link><Link href="/armed-forces">Armed Forces & Veterans</Link><a href="#">Partners</a><Link href="/contact">Contact</Link></div>
      <div><h3>Contact</h3><a href="tel:+443300433703">0330 043 3703</a><a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a><a href="https://wa.me/443300433703">WhatsApp</a><Link href="/contact">Book a meeting</Link></div>
    </div>
    <div className="shell footer-bottom"><span>ORVIA Oversight Ltd · Registered in England and Wales · Company No. 16123685 · ICO Registration ZC152311</span><span>© 2026 ORVIA Oversight Ltd</span></div>
  </footer>
}
