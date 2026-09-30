import Reveal from "../../ui/Reveal";
import RichText from "../../ui/RichText";
import { copy } from "../../../i18n";
import "./Process.css";

export default function Process() {
  return (
    <section className="process section-pad">
      <Reveal className="section-heading">
        <div>
          <span className="eyebrow">{copy.process.eyebrow}</span>
          <h2>
            <RichText text={copy.process.title} />
          </h2>
        </div>
      </Reveal>
      <div className="process-grid">
        {copy.process.steps.map((step, i) => (
          <Reveal delay={i * 0.12} key={step.title}>
            <div className="process-step">
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
