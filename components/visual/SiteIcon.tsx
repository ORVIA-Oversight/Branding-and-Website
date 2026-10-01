type IconKind =
  | "pressure" | "record" | "owner" | "alert"
  | "regulatory" | "safeguarding" | "governance" | "operations" | "technology" | "decision"
  | "checklist" | "evidence" | "journey" | "voice" | "case" | "web"
  | "observe" | "review" | "verify" | "interpret" | "act";

export function SiteIcon({kind}:{kind:IconKind}){
  const common={width:28,height:28,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  const map:Record<IconKind,React.ReactNode>={
    pressure:<><path d="M4 18h16"/><path d="M6 15l3-5 3 3 3-7 3 5"/></>,
    record:<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    owner:<><circle cx="12" cy="8" r="3"/><path d="M6 20c.7-4 3-6 6-6s5.3 2 6 6"/><path d="M18 4v4M16 6h4"/></>,
    alert:<><path d="M12 3l9 16H3z"/><path d="M12 9v4M12 17h.01"/></>,
    regulatory:<><path d="M4 20h16M6 20V8l6-4 6 4v12M9 11h6M9 15h6"/></>,
    safeguarding:<><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    governance:<><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 7l3 9M16 7l-3 9M8 6h8"/></>,
    operations:<><path d="M4 7h10M4 12h16M4 17h13"/><circle cx="17" cy="7" r="2"/><circle cx="7" cy="17" r="2"/></>,
    technology:<><rect x="4" y="5" width="16" height="11" rx="2"/><path d="M9 20h6M12 16v4"/></>,
    decision:<><path d="M4 12h12"/><path d="M12 8l4 4-4 4"/><path d="M18 4v16"/></>,
    checklist:<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8l1 1 2-2M8 13l1 1 2-2M13 8h3M13 13h3M8 18h8"/></>,
    evidence:<><circle cx="10" cy="10" r="5"/><path d="M14 14l5 5"/><path d="M8 10l1.5 1.5L12 9"/></>,
    journey:<><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18c5 0 3-10 10-10"/></>,
    voice:<><path d="M5 9v6M9 6v12M13 4v16M17 7v10M21 10v4"/></>,
    case:<><path d="M4 6h16v14H4z"/><path d="M8 6V4h8v2M4 11h16"/></>,
    web:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    observe:<><circle cx="12" cy="12" r="3"/><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/></>,
    review:<><rect x="5" y="4" width="12" height="16" rx="2"/><path d="M8 8h6M8 12h6M8 16h4"/><path d="M17 15l3 3"/></>,
    verify:<><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M8.5 12l2 2 5-5"/></>,
    interpret:<><path d="M4 18c3-6 5-8 8-8s5 2 8 8"/><circle cx="12" cy="7" r="3"/></>,
    act:<><path d="M5 19l14-14M11 5h8v8"/></>
  };
  return <svg {...common}>{map[kind]}</svg>;
}
