import { ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "../../ui/Reveal";
import Star from "../../ui/Star";
import RichText from "../../ui/RichText";
import WhatsAppLink from "../../ui/WhatsAppLink";
import { site } from "../../../config/site";
import { copy } from "../../../i18n";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <Reveal>
        <span className="eyebrow">{copy.contact.eyebrow}</span>
        <h2>
          <RichText text={copy.contact.title} />
        </h2>
        <div className="contact-actions">
          <WhatsAppLink className="button light">
            {copy.contact.whatsapp}
            <ArrowUpRight size={20} />
          </WhatsAppLink>
          <a
            className="text-link"
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
          >
            {copy.contact.instagram}
            <Instagram size={18} />
          </a>
        </div>
        <p>{copy.contact.note}</p>
      </Reveal>
      <span className="contact-flower" aria-hidden="true">
        <Star />
      </span>
    </section>
  );
}
