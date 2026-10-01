const estateLinks = [
  ["Oversight","https://orvia.org.uk"],
  ["Business","https://business.orvia.org.uk"],
  ["Threshold","https://threshold.orvia.org.uk"],
  ["Insight","https://orviainsight.co.uk"],
  ["Web","https://web.orvia.org.uk"],
  ["Voice","https://orviavoice.co.uk"],
  ["Witness Room","https://witness.orvia.org.uk"]
] as const;

export function EstateBar(){
  return <div className="estate-bar-v2">
    <div className="shell estate-bar-inner">
      <span className="estate-bar-title">EXPLORE ORVIA</span>
      <nav aria-label="ORVIA estate">
        {estateLinks.map(([label,href])=><a key={href} href={href}>{label}</a>)}
        <a href="/services">More</a>
      </nav>
      <a className="estate-signin" href="https://workspace.orvia.org.uk">Sign in</a>
    </div>
  </div>;
}
