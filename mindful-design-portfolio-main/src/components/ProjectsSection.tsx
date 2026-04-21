import AnimatedSection from "./AnimatedSection";

const ProjectsSection = () => {
  return (
    <section id="resume" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Resume
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            My Resume
          </h2>

          <p className="text-muted-foreground mb-10">
            Download my resume to learn more about my education, experience, and research work.
          </p>

          <a
            href="/Stephen_Mandela_Resume.pdf"
            download
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;