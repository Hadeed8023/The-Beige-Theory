import { copy } from "../../../i18n";
import "./Marquee.css";

export default function Marquee() {
  return (
    <div className="marquee" aria-label={copy.marquee.join(". ")}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1, 2, 3].map((n) => (
          <span key={n}>
            {copy.marquee.map((text) => (
              <span className="marquee-item" key={text}>
                {text}
                <i>✳</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
