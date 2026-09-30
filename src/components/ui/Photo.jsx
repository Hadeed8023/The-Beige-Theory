import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import photos from "../../data/photo-manifest.json";

const photoUrl = (src) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

// Account for object-fit: cover. A landscape photo in a tall frame needs
// more source pixels than the frame's width alone would suggest.
export default function Photo({
  name,
  animated = false,
  loading = "lazy",
  ...props
}) {
  const variants = photos[name];
  const largest = variants[variants.length - 1];
  const ref = useRef(null);
  const [sizes, setSizes] = useState("100vw");
  useLayoutEffect(() => {
    const element = ref.current;
    const measure = () => {
      const renderedWidth = Math.max(
        element.clientWidth,
        (element.clientHeight * largest.width) / largest.height,
      );
      setSizes(`${Math.ceil(renderedWidth)}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [name, largest.width, largest.height]);
  const Image = animated ? motion.img : "img";
  return (
    <Image
      {...props}
      ref={ref}
      src={
        photoUrl(variants.find((variant) => variant.width >= 1280)?.src || largest.src)
      }
      srcSet={variants
        .map((variant) => `${photoUrl(variant.src)} ${variant.width}w`)
        .join(", ")}
      sizes={sizes}
      loading={loading}
      decoding="async"
      data-photo={name}
    />
  );
}
