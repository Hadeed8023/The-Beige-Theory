import { motion, MotionConfig, useScroll, useSpring } from "motion/react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Marquee from "./components/sections/Marquee/Marquee";
import Spaces from "./components/sections/Spaces/Spaces";
import Services from "./components/sections/Services/Services";
import Process from "./components/sections/Process/Process";
import Contact from "./components/sections/Contact/Contact";
import { copy } from "./i18n";

function Page() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <a className="skip-link" href="#main">
        {copy.accessibility.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Marquee />
        <Spaces />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Page />
    </MotionConfig>
  );
}
