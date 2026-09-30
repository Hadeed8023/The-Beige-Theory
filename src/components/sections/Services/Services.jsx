import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "../../ui/Reveal";
import RichText from "../../ui/RichText";
import Photo from "../../ui/Photo";
import { copy } from "../../../i18n";
import "./Services.css";

export default function Services() {
  const [open, setOpen] = useState(copy.services.items[0]?.id);
  return (
    <section id="services" className="services section-pad">
      <div className="services-image">
        <Reveal>
          <Photo name="detail" alt={copy.services.imageAlt} />
        </Reveal>
        <div className="craft-caption">
          <span aria-hidden="true">✳</span>
          <p>
            {copy.services.craft}
            <span>{copy.services.origin}</span>
          </p>
        </div>
      </div>
      <div className="services-content">
        <Reveal>
          <span className="eyebrow">{copy.services.eyebrow}</span>
          <h2>
            <RichText text={copy.services.title} />
          </h2>
          <p className="services-intro">
            <RichText text={copy.services.intro} />
          </p>
        </Reveal>
        <div className="accordion">
          {copy.services.items.map((service, i) => (
            <div
              className={`service-item ${open === service.id ? "open" : ""}`}
              key={service.id}
            >
              <h3>
                <button
                  id={`service-button-${service.id}`}
                  aria-expanded={open === service.id}
                  aria-controls={`service-panel-${service.id}`}
                  onClick={() =>
                    setOpen(open === service.id ? null : service.id)
                  }
                >
                  <span className="service-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {service.title}
                  {open === service.id ? (
                    <Minus size={19} />
                  ) : (
                    <Plus size={19} />
                  )}
                </button>
              </h3>
              <div
                className="service-panel"
                id={`service-panel-${service.id}`}
                role="region"
                aria-labelledby={`service-button-${service.id}`}
                hidden={open !== service.id}
              >
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
