"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactAndSales } from "@/config/contactAndSales";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm(){
  const [status,setStatus]=useState<Status>("idle");
  const [interest,setInterest]=useState("general");
  const [attribution,setAttribution]=useState({landing_page:"/contact",utm_source:"",utm_medium:"",utm_campaign:""});

  useEffect(()=>{
    const url=new URL(window.location.href);
    const requestedInterest=url.searchParams.get("interest");
    if(requestedInterest) setInterest(requestedInterest);
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
      phone:String(form.get("phone")||""),
      product_interest:String(form.get("product_interest")||"general"),
      message:String(form.get("message")||""),
      consent_or_lawful_basis:String(form.get("consent")||""),
      source:contactAndSales.leadDefaults.source,
      owner:contactAndSales.leadDefaults.owner,
      next_action:contactAndSales.leadDefaults.nextAction,
      status:contactAndSales.leadDefaults.status,
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
    <div className="eyebrow">SEND AN ENQUIRY</div>
    <h2>Tell us what is happening.</h2>
    <p>We will route your enquiry to the right ORVIA owner and keep the original source context with it.</p>
    <label>Name<input name="name" required autoComplete="name"/></label>
    <label>Work email<input name="email" type="email" required autoComplete="email"/></label>
    <label>Organisation<input name="organisation" autoComplete="organization"/></label>
    <label>Telephone <span className="form-optional">optional</span><input name="phone" type="tel" autoComplete="tel"/></label>
    <label>What is this about?
      <select name="product_interest" value={interest} onChange={event=>setInterest(event.target.value)}>
        <option value="general">General ORVIA enquiry</option>
        <option value="consultancy">Consultancy / operational support</option>
        <option value="founder">Work directly with John</option>
        <option value="voice">ORVIA Voice</option>
        <option value="witness-room">Witness Room</option>
        <option value="threshold">ORVIA Threshold</option>
        <option value="perspective-room">Perspective Room</option>
        <option value="insight">ORVIA Insight</option>
        <option value="business">ORVIA Business</option>
        <option value="web">ORVIA Web</option>
        <option value="mia">MIA</option>
        <option value="careers">Careers / practitioner interest</option>
      </select>
    </label>
    <label>What would you like to discuss?<textarea name="message" rows={6} required/></label>
    <label className="pr-consent"><input type="checkbox" name="consent" value="contact-request" required/> <span>I am asking ORVIA to contact me about this enquiry.</span></label>
    <button className="button" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send enquiry"}</button>
    {status==="sent"&&<p className="pr-form-status" role="status">Thank you. Your enquiry has been received and routed for human review.</p>}
    {status==="error"&&<p className="pr-form-status pr-form-error" role="alert">The web enquiry route is not available right now. Please call {contactAndSales.phoneDisplay}, WhatsApp us, or email {contactAndSales.generalEmail}.</p>}
  </form>;
}
