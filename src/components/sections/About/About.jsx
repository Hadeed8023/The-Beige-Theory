import Reveal from "../../ui/Reveal";
import RichText from "../../ui/RichText";
import ProjectCount from "./ProjectCount";
import { copy } from "../../../i18n";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <Reveal className="section-label">
        <span className="tiny-square" />
        {copy.about.eyebrow}
      </Reveal>
      <div className="about-content">
        <Reveal>
          <h2>
            <RichText text={copy.about.title} />
          </h2>
        </Reveal>
        <div className="about-lower">
          <Reveal>
            {copy.about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <a href="#services" className="text-link">
              {copy.about.explore}
            </a>
          </Reveal>
          <Reveal className="stat" delay={0.15}>
            <ProjectCount />
            <span className="eyebrow">{copy.about.countLabel}</span>
            <p>
              <RichText text={copy.about.countNote} />
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
