import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["I'M GURUNIVASAN", "SOFTWARE ENGINEER", "SCROLL TO EXPLORE"];

  const variants = {
    // Reinstated dynamic variants for a "nicer" animation (from previous iterations)
    hidden: { opacity: 0, y: 80, rotateX: 90, scale: 0.8 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Top Headline: Adjusted for responsiveness and font weight */}
      <div className="z-10 max-w-4xl mx-auto">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          // Smaller on mobile (text-3xl), scales up for small (sm:text-4xl), medium (md:text-5xl), and large screens (lg:text-6xl)
          className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-black text-white leading-none" // Changed font-semibold to font-black for consistency with Bebas Neue
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          WELCOME TO MY WEBSITE
        </motion.h1>
      </div>

      {/* FlipWords Section: Adjusted for responsiveness and improved spacing */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6"
      >
        <FlipWords
          words={words}
          className="z-50 text-1xl sm:text-1xl md:text-5xl lg:text-5xl font-black text-white tracking-tight"
          style={{ textShadow: "0 3px 6px rgba(0,0,0,0.5)" }}
        />
      </motion.div>

      {/* Outro Line: Adjusted for responsiveness and font weight */}
      <motion.h3
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.1, duration: 0.6 }}
        // Smaller on mobile (text-base), scales up for small (sm:text-lg), medium (md:text-xl), and large screens (lg:text-2xl)
        className="z-10 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-black mt-4 md:mt-6 leading-tight w-full text-center" // Changed font-light to font-black for consistency
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
      >
        Coding across timelines to craft immersive digital experiences.
      </motion.h3>

      {/* Scroll Indicator (z-index adjusted for consistency with other elements, no size changes) */}
      <motion.div
        className="z-10 absolute bottom-10 text-sky-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroText;