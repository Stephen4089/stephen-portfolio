import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Research Methods", level: "Advanced" },
  { name: "Data Analysis", level: "Advanced" },
  { name: "Interview Techniques", level: "Advanced" },
  { name: "SPSS", level: "Proficient" },
  { name: "R", level: "Proficient" },
  { name: "Python", level: "Intermediate" },
  { name: "Writing", level: "Advanced" },
  { name: "Public Speaking", level: "Proficient" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
            What I Bring
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.05}>
              <div className="group p-6 rounded-xl bg-card hover:bg-secondary transition-colors duration-300">
                <p className="font-display text-lg font-semibold text-foreground mb-1">
                  {skill.name}
                </p>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "FullStory: Session Replay & Product Analytics", org: "Fullstory", skills: "Digital Experience Analytics (DXI), User Journey Mapping" },
                { name: "Google Analytics", org: "Google", date: "Issued Jul 2025", credential: "ID 155411139", skills: "Google Analytics" },
                { name: "The Personal Health Information Act (PHIA)", org: "Government of Manitoba", date: "Issued Jun 2025 · Expires May 2028", skills: "Confidentiality & Security Practices" },
                { name: "TCPS 2: CORE – Ethical Conduct for Research Involving Humans", org: "Government of Canada", date: "Issued May 2025", skills: "Clinical Research, Statistical Data Analysis" },
              ].map((cert) => (
                <div key={cert.name} className="p-5 rounded-xl bg-card border border-border">
                  <p className="font-display text-sm font-semibold text-foreground mb-1">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mb-1">{cert.org}</p>
                  {cert.date && <p className="text-xs text-muted-foreground">{cert.date}</p>}
                  {cert.credential && <p className="text-xs text-muted-foreground">{cert.credential}</p>}
                  <p className="text-xs text-accent mt-2">{cert.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
