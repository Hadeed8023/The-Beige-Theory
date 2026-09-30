import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { site } from "../../../config/site";
import { copy, formatText } from "../../../i18n";

export default function ProjectCount() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(site.deliveredProjects);
  useEffect(() => {
    if (!visible || reducedMotion) return;
    const animation = animate(0, site.deliveredProjects, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => animation.stop();
  }, [visible, reducedMotion]);
  return (
    <span
      ref={ref}
      className="stat-number"
      aria-label={formatText(copy.accessibility.projectCount, {
        count: site.deliveredProjects,
      })}
    >
      <span className="count-value" aria-hidden="true">
        {count}
      </span>
      <span className="count-plus" aria-hidden="true">
        +
      </span>
    </span>
  );
}
