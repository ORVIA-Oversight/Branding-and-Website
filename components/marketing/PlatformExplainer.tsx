type IconName = "shell"|"content"|"media"|"connect"|"verify"|"file"|"video"|"image"|"proof";

function BrandIcon({name}:{name:IconName}) {
  const common={width:28,height:28,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  if(name==="shell") return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 9v11"/></svg>;
  if(name==="content") return <svg {...common}><path d="M6 4h9l3 3v13H6z"/><path d="M15 4v4h4M9 12h6M9 16h6"/></svg>;
  if(name==="media") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m5 17 5-4 3 2 3-3 3 5"/></svg>;
  if(name==="connect") return <svg {...common}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="18" cy="17" r="2.5"/><path d="m8.5 11 7-3M8.5 13l7 3"/></svg>;
  if(name==="verify") return <svg {...common}><path d="M12 3 5 6v5c0 4.4 2.6 7.5 7 10 4.4-2.5 7-5.6 7-10V6z"/><path d="m9 12 2 2 4-5"/></svg>;
  if(name==="file") return <svg {...common}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></svg>;
  if(name==="video") return <svg {...common}><rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10 5-3v10l-5-3z"/></svg>;
  if(name==="image") return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m5 17 5-4 3 2 3-3 3 5"/></svg>;
  return <svg {...common}><path d="M12 3 5 6v5c0 4.4 2.6 7.5 7 10 4.4-2.5 7-5.6 7-10V6z"/><path d="M8.5 12h7M12 8.5v7"/></svg>;
}

const steps=[
  ["shell","01","Start with the ORVIA shell","Header, footer, trust, accessibility, navigation, responsive behaviour and core controls are already there."],
  ["content","02","Drop in the proposition","Change the audience, offer, copy, pricing or scope without rebuilding the platform."],
  ["media","03","Fill the visual story","Add the right hero, explainer imagery, short films, product icons and approved proof assets."],
  ["connect","04","Connect the working parts","Wire forms, payment, onboarding, customer access, IRIS ownership and the correct destination."],
  ["verify","05","Verify and publish","Test the route, links, ownership, evidence, analytics, domain and release state before calling it live."]
] as const;

const media=[
  ["image","Hero image / hero video","One dominant opening visual with overlay copy."],
  ["image","Explainer imagery","Scenario-led images that reduce the amount of text needed."],
  ["video","Short films","Two 10-second films or equivalent product explainers."],
  ["proof","Trust & proof","Approved logos, accreditations, verified facts and boundaries."],
  ["file","Files & downloads","Reports, brochures, guides, evidence packs or customer documents."]
] as const;

export function PlatformExplainer(){
  return <section className="platform-system-section" aria-labelledby="platform-system-title">
    <div className="shell">
      <div className="platform-heading">
        <div>
          <div className="lean-kicker">ONE PLATFORM · MANY ORVIA PROPOSITIONS</div>
          <h2 id="platform-system-title">Build the shell once. Port in the right information. Launch.</h2>
        </div>
        <p>Every ORVIA site should inherit the same controlled platform. The empty spaces are deliberate content and media slots — not a reason to redesign the site each time.</p>
      </div>

      <div className="platform-step-grid">
        {steps.map(([icon,index,title,body])=><article key={title}>
          <div className="platform-icon"><BrandIcon name={icon}/></div>
          <span>{index}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>)}
      </div>

      <div className="platform-media-panel">
        <div className="platform-media-intro">
          <div className="lean-kicker">FILL THE SPACE WITH MEANING</div>
          <h3>Every void has a job.</h3>
          <p>Photography, icons, explainers, video and downloadable evidence should clarify the proposition — not decorate it.</p>
        </div>
        <div className="platform-media-grid">
          {media.map(([icon,title,body])=><div key={title}>
            <div className="platform-mini-icon"><BrandIcon name={icon}/></div>
            <div><strong>{title}</strong><span>{body}</span></div>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
