import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's connect.
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-12">
            Open to UX research opportunities, collaborations, and conversations
            about behavioral science and design.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:stephenprabhumandela@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              stephenprabhumandela@gmail.com
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/stephen-mandela-2aa6472b0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border text-foreground font-display text-sm font-medium tracking-wide hover:bg-secondary transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
