const method = [
  ["O","Observe","See what is actually there."],
  ["R","Review","Understand the context."],
  ["V","Verify","Test what can be supported."],
  ["I","Interpret","Understand what the evidence means — and what it does not."],
  ["A","Act","Turn understanding into proportionate human action."]
];
export function Method(){return <section id="method" className="section section-dark"><div className="shell"><div className="eyebrow light">THE ORVIA METHOD</div><h2>Observe. Review. Verify. Interpret. Act.</h2><div className="method-grid">{method.map(([letter,title,body])=><article key={letter}><span>{letter}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>}
