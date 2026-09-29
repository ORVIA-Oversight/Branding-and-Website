export const orviaSystems = [
  {
    id:"iris", name:"IRIS", type:"conductor", status:"operational",
    purpose:"Coordinates workflow state, owners, timers, routing, escalation and explicit failure states.",
    publicHref:"/systems#iris", actionLabel:"How IRIS works",
    accessHref:"https://workspace.orvia.org.uk", accessLabel:"Customer access",
    repository:"ORVIA-Oversight/iris-by-orvia"
  },
  {
    id:"hive", name:"HIVE", type:"evidence", status:"embedded",
    purpose:"Preserves originals, versions, derivatives, assertions, dissent and provenance so evidence is not flattened into a single narrative.",
    publicHref:"/systems#hive", actionLabel:"Understand HIVE"
  },
  {
    id:"vita", name:"VITA", type:"assurance", status:"embedded",
    purpose:"Runs assurance controls around completeness, patterns, blind spots and whether the evidence supports the conclusion.",
    publicHref:"/systems#vita", actionLabel:"Understand VITA"
  },
  {
    id:"vera", name:"VERA", type:"verification", status:"embedded",
    purpose:"Records who verified what, against which evidence, and whether an action is implemented, effective and sustained.",
    publicHref:"/systems#vera", actionLabel:"Understand VERA"
  },
  {
    id:"command", name:"Command", type:"control", status:"restricted",
    purpose:"Provides authorised operational visibility across tasks, systems, telemetry and controlled knowledge.",
    publicHref:"/systems#command", actionLabel:"What Command does",
    accessHref:"https://command.orvia.org.uk", accessLabel:"Authorised access",
    repository:"ORVIA-Oversight/orvia-command-centre"
  },
  {
    id:"ai", name:"AI", type:"assistive", status:"human-controlled",
    purpose:"Builds hypotheses, tests alternatives, surfaces contradictions and widens the field of view without becoming the decision-maker.",
    publicHref:"/systems#ai", actionLabel:"Our AI boundary"
  }
] as const;

export const systemWorkflow = [
  ["01","Capture","Voice, forms, APIs or human input create the signal."],
  ["02","Coordinate","IRIS assigns state, ownership, routing, timers and escalation."],
  ["03","Preserve","HIVE keeps the evidence, provenance, versions and dissent intact."],
  ["04","Test","VITA challenges completeness, patterns, blind spots and assumptions."],
  ["05","Verify","VERA records verification against evidence and checks effectiveness over time."],
  ["06","Review","A human reviews the evidence, alternatives and consequences."],
  ["07","Act","The authorised human decision becomes action with accountability visible."]
] as const;

export const systemBoundary =
  "Technology may organise, compare, challenge and suggest. It does not independently make safeguarding, clinical, culpability, recruitment or other high-consequence decisions.";
