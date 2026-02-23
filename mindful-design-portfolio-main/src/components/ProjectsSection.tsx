import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UX Case Study — Banking for Seniors",
    description:
      "Exploring how digital banking interfaces can be redesigned for accessibility and trust among senior users.",
    status: "Coming Soon",
  },
  {
    title: "Research Project — Behavioral Insights",
    description:
      "A deep-dive into behavioral patterns and their implications for product design decisions.",
    status: "Coming Soon",
  },
  {
    title: "Additional Case Study",
    description:
      "Placeholder for future UX research case studies and design projects.",
    status: "Coming Soon",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Selected Work
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative p-8 rounded-xl bg-background border border-border hover:border-accent/40 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                    {project.status}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
