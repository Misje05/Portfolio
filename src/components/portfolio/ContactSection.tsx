import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/Misje05", handle: "@Misje05" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/magnus-misje/", handle: "Magnus Misje" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container">
        <div ref={ref} className={`text-center max-w-lg mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-gradient">L</span>et's Connect
          </h2>
          <div className="w-124 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
          <br />
          <p className="text-muted-foreground mb-12 leading-relaxed">
            I'm always open to discussing new projects, collaborations, or opportunities in data engineering and AI.
          </p>

          <div className="flex justify-center gap-6">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card hover-lift glow-border p-6 flex flex-col items-center gap-3 min-w-[160px] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 150}ms` }}
              >
                <link.icon className="w-7 h-7 text-primary" />
                <span className="font-semibold text-foreground text-sm">{link.label}</span>
                <span className="text-xs font-mono text-muted-foreground">{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
