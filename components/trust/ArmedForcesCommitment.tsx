import Link from "next/link";
import { armedForcesAssets } from "@/config/armedForces";

export function ArmedForcesCommitment(){
  return <section className="section">
    <div className="shell af-panel">
      <div>
        <div className="eyebrow">ARMED FORCES COMMITMENT</div>
        <h2>Forces friendly by commitment, not marketing.</h2>
        <p>ORVIA Oversight Ltd supports the Armed Forces community and recognises the transferable capability, judgement and experience developed through Service.</p>
        <p><strong>Employer Recognition Scheme — Bronze Award holder.</strong> Award confirmed 22 September 2026. ORVIA also has a current public Trust A Veteran profile, with membership promotion authorised by Trust A Veteran.</p>
        <Link href="/armed-forces" className="text-link">Read our commitment →</Link>\n        <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer" className="text-link">View Trust A Veteran profile →</a>
      </div>
      <div className="af-official-lockup" aria-label="Official Armed Forces recognition marks">
        <figure className="af-official-mark">
          <img src={armedForcesAssets.covenant.src} alt={armedForcesAssets.covenant.alt}/>
          <figcaption>Armed Forces Covenant signatory</figcaption>
        </figure>
        <figure className="af-official-mark bronze">
          <img src={armedForcesAssets.bronze.src} alt={armedForcesAssets.bronze.alt}/>
          <figcaption>Defence Employer Recognition Scheme Bronze Award</figcaption>
        </figure>
      </div>
    </div>
  </section>
}
