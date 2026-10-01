import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactAndSales } from "@/config/contactAndSales";

export const metadata:Metadata={
  title:"Contact ORVIA | Start With the Problem",
  description:"Talk to ORVIA about a difficult operating problem, product, service, evidence review, careers or founder-led support.",
  alternates:{canonical:"/contact"}
};

const nextSteps=[
  ["01 · Human review","Your enquiry is read or listened to by a person. No automated consequential action is taken."],
  ["02 · Correct route","We match the situation to the right ORVIA owner, service or product — or say plainly when ORVIA is not the right fit."],
  ["03 · Clear scope","If we can help, we confirm what we can do, what we cannot do, what we need from you and who owns the next step."],
  ["04 · Price or proposal","Any cost, quote, package or discovery requirement is made clear before substantive paid work starts."]
] as const;

const faqs=[
  ["Do I need to know which ORVIA product I need?","No. Start with the problem and we will help route it."],
  ["Can I send documents?","Yes. Email is usually the clearest route for detailed briefs and documents. Sensitive material is handled within the agreed information-handling route."],
  ["What if ORVIA is not the right service?","We will say so plainly and, where appropriate, identify the kind of professional or statutory route that may be better placed."],
  ["Is ORVIA an emergency service?","No. ORVIA is not an emergency, crisis or immediate-response service."]
] as const;

export default function ContactPage(){
  return <>
    <section className="page-hero">
      <div className="shell contact-layout">
        <div>
          <div className="eyebrow">CONTACT ORVIA</div>
          <h1>Start with the problem.</h1>
          <p className="lead">You do not need to diagnose the situation or know which ORVIA service fits. Tell us what is happening and we will guide it to the right human owner.</p>
          <div className="contact-cards">
            <a href={`tel:${contactAndSales.phoneE164}`}>Call<br/><strong>{contactAndSales.phoneDisplay}</strong><span>For a direct conversation</span></a>
            <a href={contactAndSales.whatsappHref}>WhatsApp<br/><strong>Message ORVIA</strong><span>For a quick first contact</span></a>
            <a href={`mailto:${contactAndSales.generalEmail}`}>Email<br/><strong>{contactAndSales.generalEmail}</strong><span>For documents or a detailed brief</span></a>
          </div>
          <div className="contact-assurance">
            <strong>Human first</strong>
            <span>Your enquiry keeps its source and service context.</span>
            <span>A human reviews it before any consequential action.</span>
            <span>If ORVIA is not the right route, we will say so plainly.</span>
          </div>
        </div>
        <ContactForm/>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow">WHAT HAPPENS NEXT</div><h2>A clear route from first contact to a defined next step.</h2></div>
          <p>No hidden diagnosis and no pressure-selling. Scope, ownership and commercial terms are made clear before substantive work begins.</p>
        </div>
        <div className="compact-card-grid four">
          {nextSteps.map(([title,copy])=><article className="compact-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell founder-story-two-col">
        <div>
          <div className="eyebrow">IMPORTANT BOUNDARY</div>
          <h2>ORVIA is not an emergency or crisis service.</h2>
          <p className="lead">If somebody is in immediate danger, contact the appropriate emergency or statutory service. ORVIA does not replace emergency services, safeguarding authorities, regulators, courts, legal representatives or clinicians.</p>
        </div>
        <div>
          <div className="eyebrow">FREQUENTLY ASKED</div>
          <div className="contact-faq-list">
            {faqs.map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div><div className="eyebrow light">START THE CONVERSATION</div><h2>Tell us what is happening. We will help establish the right next step.</h2></div>
        <a className="button light-button" href={`tel:${contactAndSales.phoneE164}`}>{contactAndSales.phoneDisplay}</a>
      </div>
    </section>
  </>;
}
