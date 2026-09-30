import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../ui/Reveal";
import RichText from "../../ui/RichText";
import Modal from "../../ui/Modal";
import Photo from "../../ui/Photo";
import WhatsAppLink from "../../ui/WhatsAppLink";
import SpacesSlider from "./SpacesSlider";
import { site } from "../../../config/site";
import { copy, formatText } from "../../../i18n";
import "./Spaces.css";

export default function Spaces() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <section id="spaces" className="spaces section-pad">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">{copy.spaces.eyebrow}</span>
            <h2>
              <RichText text={copy.spaces.title} />
            </h2>
          </div>
          <p>
            <RichText text={copy.spaces.intro} />
          </p>
        </Reveal>
        <SpacesSlider onSelect={setSelected} />
        <p className="imagery-note">
          {copy.spaces.imageryNote}{" "}
          <a href={site.instagram} target="_blank" rel="noreferrer">
            {copy.spaces.instagram}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          .
        </p>
      </section>
      {selected && (
        <Modal
          title={selected.title}
          onClose={() => setSelected(null)}
          className="project-modal"
        >
          <Photo
            name={selected.image}
            loading="eager"
            alt={formatText(copy.spaces.conceptAlt, selected)}
          />
          <div className="project-modal-body">
            <span className="eyebrow">
              {formatText(copy.spaces.detailLabel, selected)}
            </span>
            <h2>{selected.title}</h2>
            <p>{selected.detail}</p>
            <p className="materials">{selected.materials}</p>
            <WhatsAppLink
              className="button dark"
              message={formatText(copy.contact.projectMessage, selected)}
            >
              {copy.spaces.discuss}
              <ArrowUpRight size={18} />
            </WhatsAppLink>
          </div>
        </Modal>
      )}
    </>
  );
}
