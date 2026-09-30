import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "../../../config/site";
import { copy, formatText, locale } from "../../../i18n";
import Photo from "../../ui/Photo";

const spaces = site.spaces.map((space) => ({
  ...space,
  ...copy.spaces.items[space.id],
}));

export default function SpacesSlider({ onSelect }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(null);
  const reducedMotion = useReducedMotion();
  const project = spaces[index];
  function goTo(next, directionHint = next > index ? 1 : -1) {
    setDirection(directionHint);
    setIndex((next + spaces.length) % spaces.length);
  }
  return (
    <div
      className="spaces-slider"
      role="region"
      aria-roledescription={copy.accessibility.carousel}
      aria-label={copy.accessibility.spaces}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const step = event.key === "ArrowRight" ? 1 : -1;
          goTo(index + step, step);
        }
      }}
    >
      <div className="slider-toolbar">
        <div
          className="slider-categories"
          role="group"
          aria-label={copy.accessibility.chooseSpace}
        >
          {spaces.map((space, i) => (
            <button
              key={space.id}
              aria-pressed={index === i}
              onClick={() => goTo(i)}
            >
              {space.category}
              {index === i && (
                <motion.span
                  className="slider-underline"
                  layoutId="space-underline"
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div
        className="slider-stage"
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
            goTo(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
        }}
      >
        <div className="slider-visual">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={project.id}
              className="space-slide"
              role="group"
              aria-roledescription={copy.accessibility.slide}
              aria-label={formatText(copy.accessibility.slideLabel, {
                index: index + 1,
                total: spaces.length,
                category: project.category,
              })}
              custom={direction}
              variants={{
                enter: (dir) => ({
                  x: reducedMotion ? 0 : `${dir * 100}%`,
                  opacity: reducedMotion ? 0 : 1,
                }),
                center: { x: 0, opacity: 1 },
                exit: (dir) => ({
                  x: reducedMotion ? 0 : `${dir * -100}%`,
                  opacity: reducedMotion ? 0 : 1,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Photo
                name={project.image}
                alt={formatText(copy.spaces.inspirationAlt, project)}
                draggable="false"
              />
              <div className="slide-shade" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="slide-caption">
          <span className="eyebrow">
            {formatText(copy.spaces.caption, {
              category: project.category.toLocaleUpperCase(locale),
            })}
          </span>
          <h3>{project.title}</h3>
          <button className="slide-details" onClick={() => onSelect(project)}>
            {copy.spaces.explore}
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {formatText(copy.accessibility.slideAnnouncement, {
          category: project.category,
          index: index + 1,
          total: spaces.length,
        })}
      </p>
    </div>
  );
}
