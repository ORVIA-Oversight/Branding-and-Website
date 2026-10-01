"use client";

import { FormEvent, useEffect, useState } from "react";

export function CareerInterestForm(){
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [attribution,setAttribution]=useState({landing_page:"/careers",utm_source:"",utm_medium:"",utm_campaign:""});

  useEffect(()=>{
    const url=new URL(window.location.href);
    setAttribution({
      landing_page:url.pathname,
      utm_source:url.searchParams.get("utm_source")||"",
      utm_medium:url.searchParams.get("utm_medium")||"",
      utm_campaign:url.searchParams.get("utm_campaign")||""
    });
  },[]);

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setStatus("sending");
    const form=new FormData(event.currentTarget);
    const payload={
      name:String(form.get("name")||""),
      email:String(form.get("email")||""),
      organisation:"",
      phone:"",
      product_interest:"careers",
      background:String(form.get("background")||""),
      capability:String(form.get("capability")||""),
      direction:String(form.get("direction")||""),
      message:[
        "Background / community: "+String(form.get("background")||"Not stated"),
        "Capability beyond CV: "+String(form.get("capability")||""),
        "Development direction: "+String(form.get("direction")||"")
      ].join("\n\n"),
      consent_or_lawful_basis:String(form.get("consent")||""),
      source:"website",
      owner:"people-unassigned",
      next_action:"human-review",
      status:"lead",
      ...attribution
    };

    const response=await fetch("/api/contact",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(payload)
    }).catch(()=>null);

    setStatus(response?.ok?"sent":"error");
  }

  return <form className="contact-form" onSubmit={submit}>
    <label>Name<input name="name" required autoComplete="name"/></label>
    <label>Email<input name="email" type="email" required autoComplete="email"/></label>
    <label>Background / community
      <select name="background" defaultValue="">
        <option value="" disabled>Select if relevant</option>
        <option>Veteran / Service leaver</option>
        <option>Reservist</option>
        <option>Military spouse / partner</option>
        <option>Police / Fire / NHS / other service</option>
        <option>Career changer</option>
        <option>Experienced professional</option>
        <option>Other</option>
      </select>
    </label>
    <label>What can you do that your CV may not show?<textarea name="capability" rows={7} required/></label>
    <label>What would you like to develop into?<textarea name="direction" rows={4}/></label>
    <label className="pr-consent"><input type="checkbox" name="consent" value="contact-request" required/> <span>I am asking ORVIA to contact me about career or practitioner opportunities.</span></label>
    <button className="button" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send expression of interest"}</button>
    {status==="sent"&&<p className="pr-form-status" role="status">Thank you. Your expression of interest has been received for human review.</p>}
    {status==="error"&&<p className="pr-form-status pr-form-error" role="alert">The web route is not available right now. Please email hello@orvia.org.uk with the subject “Careers”.</p>}
  </form>;
}
