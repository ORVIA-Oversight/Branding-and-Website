"use client";

import { FormEvent, useEffect, useState } from "react";

type LeadCaptureProps = {
  productId:string;
  heading?:string;
};

export function LeadCaptureForm({productId,heading="Book a discovery"}:LeadCaptureProps){
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [attribution,setAttribution]=useState({landing_page:"",utm_source:"",utm_medium:"",utm_campaign:""});

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
      organisation:String(form.get("organisation")||""),
      role:String(form.get("role")||""),
      message:String(form.get("message")||""),
      consent_or_lawful_basis:String(form.get("consent")||""),
      source:"website",
      product_interest:productId,
      ...attribution
    };
    const response=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)}).catch(()=>null);
    setStatus(response?.ok?"sent":"error");
  }

  return <form className="pr-lead-form" onSubmit={submit}>
    <div className="pr-form-head"><span>SCOPED COMMERCIAL ROUTE</span><h3>{heading}</h3><p>Tell us what you are trying to assess. We will scope the right route rather than inventing a package or price.</p></div>
    <div className="pr-form-grid">
      <label>Name<input name="name" required autoComplete="name"/></label>
      <label>Work email<input name="email" type="email" required autoComplete="email"/></label>
      <label>Organisation<input name="organisation" autoComplete="organization"/></label>
      <label>Your role<input name="role"/></label>
    </div>
    <label>What are you trying to improve?<textarea name="message" rows={5} required placeholder="Recruitment, safeguarding judgement, leadership development, assessor calibration…"/></label>
    <label className="pr-consent"><input type="checkbox" name="consent" value="contact-request" required/> <span>I am asking ORVIA to contact me about this enquiry.</span></label>
    <button className="button" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Request a discovery conversation"}</button>
    {status==="sent"&&<p className="pr-form-status" role="status">Thank you. Your enquiry has been received.</p>}
    {status==="error"&&<p className="pr-form-status pr-form-error" role="alert">The enquiry route is not currently available. Please email hello@orvia.org.uk.</p>}
  </form>;
}
