import AnimatedSection from "./AnimatedSection";

const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Academic Background
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-foreground">
                University of Manitoba
              </h3>
              <p className="text-muted-foreground">
                Bachelor of Science Psychology
              </p>
        
            </div>

            <div className="mt-10">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Relevant Coursework
              </h4>
              <div className="space-y-2">
                {[
                  "Research Methods in Psychology",
                  "Cognitive Psychology",
                  "Human-Computer Interaction",
                  "Statistical Methods",
                ].map((course) => (
                  <p key={course} className="text-muted-foreground text-sm pl-4 border-l-2 border-border">
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-10">
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                  Relevant Interests
                </h4>
                <p className="text-sm text-muted-foreground pl-4 border-l-2 border-border">
                  UX Research, Behavioral Psychology, Data-driven Design
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
