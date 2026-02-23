import { motion } from "framer-motion";
import stepPicture from "@/assets/step_picture.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <img src={stepPicture} alt="Stephen Mandela" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          UX Researcher · Psychology Student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground mb-8"
        >
          Designing with
          <br />
          empathy & evidence.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          {["Fast", "Talented", "Calm"].map((word, i) => (
            <span key={word} className="flex items-center gap-4">
              <span className="font-display text-lg sm:text-xl font-medium text-foreground">
                {word}.
              </span>
              {i < 2 && (
                <span className="w-1 h-1 rounded-full bg-accent" />
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Bridging the gap between human behavior and digital experiences
          through rigorous research and thoughtful design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
