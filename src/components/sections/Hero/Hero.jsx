import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import Photo from "../../ui/Photo";
import Reveal from "../../ui/Reveal";
import RichText from "../../ui/RichText";
import { copy } from "../../../i18n";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  return (
    <section className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero-top">
        <Reveal>
          <span className="eyebrow">
            <span className="small-star" aria-hidden="true">
              ✳
            </span>
            {copy.hero.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="hero-location">
            <RichText text={copy.hero.location} />
          </span>
        </Reveal>
      </div>
      <h1 id="hero-title">
        <motion.span
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <RichText
            text={copy.hero.title}
            emphasisClassName="hero-title-suffix"
          />
        </motion.span>
      </h1>
      <div className="hero-visual">
        <Photo
          animated
          className="hero-image"
          name="hero"
          alt={copy.hero.imageAlt}
          fetchPriority="high"
          loading="eager"
          style={{ y: reducedMotion ? 0 : imageY }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8 }}
        />
        <div className="hero-shade" />
        <Reveal className="hero-caption" delay={0.4}>
          <p>
            <RichText text={copy.hero.caption} />
          </p>
          <span>{copy.hero.categories}</span>
        </Reveal>
        <div className="image-index">
          <span>{copy.hero.imageNote}</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p>{copy.hero.tagline}</p>
        <a href="#spaces">
          {copy.hero.explore}
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
