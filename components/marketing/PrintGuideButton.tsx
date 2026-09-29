"use client";

export function PrintGuideButton(){
  return <button className="button secondary service-guide-print" type="button" onClick={()=>window.print()}>Print / save guide</button>;
}
