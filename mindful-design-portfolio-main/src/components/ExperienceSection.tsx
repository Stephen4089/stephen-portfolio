import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "UX Research Assistant",
    org: "Creative & Computing Lab",
    description:
      "Worked on a banking model designed for senior citizens conducting usability testing, user interviews, and synthesizing findings to improve accessibility and trust in digital banking interfaces.",
    tags: ["Usability Testing", "User Interviews", "Accessibility"],
  },
  {
    role: "Research Assistant",
    org: "Radiology Department",
    description:
      "Supported clinical research through systematic data collection and statistical analysis, contributing to studies on diagnostic imaging workflows and process optimization.",
    tags: ["Data Collection", "Statistical Analysis", "Clinical Research"],
  },
  {
    role: "Coming Soon",
    org: "Additional Experience",
    description:
      "More case studies and research experiences will be added here as they are completed.",
    tags: [],
    placeholder: true,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Research & Case Studies
          </h2>
        </AnimatedSection>

        <div className="space-y-0 divide-y divide-border">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`group py-10 md:py-12 flex flex-col md:flex-row md:items-start gap-6 ${
                  exp.placeholder ? "opacity-50" : "cursor-pointer"
                }`}
              >
                <div className="md:w-1/3 shrink-0">
                  <p className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.org}</p>
                </div>
                <div className="md:flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {!exp.placeholder && (
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors mt-1"
                  />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
