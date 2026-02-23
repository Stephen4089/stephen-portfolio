import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              Psychology meets design understanding people to build better products.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a Psychology undergraduate at the <span className="text-foreground font-medium">University of Manitoba</span> with
                a deep interest in how people think, feel, and interact with technology.
                My academic training in behavioral science gives me a unique lens for
                understanding user needs and designing research that drives meaningful outcomes.
              </p>
              <p>
                I'm passionate about UX research, behavioral psychology, and data driven
                design combining qualitative empathy with quantitative rigor to inform
                product decisions.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
             
              <div className="p-5 rounded-lg bg-card">
                <p className="font-display text-3xl font-bold text-foreground">UofM</p>
                <p className="text-sm text-muted-foreground mt-1">University of Manitoba</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["UX Research", "Behavioral Psychology", "Data-Driven Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
