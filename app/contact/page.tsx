import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata:Metadata={
  title:"Contact ORVIA",
  description:"Talk to ORVIA about consultancy, evidence review, products, careers or a specific operational problem.",
  alternates:{canonical:"/contact"}
};

export default function ContactPage(){
  return <section className="page-hero">
    <div className="shell contact-layout">
      <div>
        <div className="eyebrow">CONTACT ORVIA</div>
        <h1>Start with the problem.</h1>
        <p className="lead">You do not need to know which ORVIA service fits before you contact us. Tell us what is happening and we will route it to the right human owner.</p>
        <div className="contact-cards">
          <a href="tel:+443300433703">Call<br/><strong>0330 043 3703</strong><span>Speak to ORVIA</span></a>
          <a href="https://wa.me/443300433703">WhatsApp<br/><strong>Message ORVIA</strong><span>For a quick first contact</span></a>
          <a href="mailto:hello@orvia.org.uk">Email<br/><strong>hello@orvia.org.uk</strong><span>For documents or a detailed brief</span></a>
        </div>
        <div className="contact-assurance">
          <strong>What happens next</strong>
          <span>Your enquiry keeps its source and service context.</span>
          <span>A human reviews it before any consequential action.</span>
          <span>If ORVIA is not the right route, we will say so plainly.</span>
        </div>
      </div>
      <ContactForm/>
    </div>
  </section>;
}
