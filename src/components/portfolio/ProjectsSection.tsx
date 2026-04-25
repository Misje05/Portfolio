import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "FotReg",
    description:
      "A football registration application with a .NET backend and a React frontend. Designed for managing player registrations and payments.",
    tech: [".NET", "React", "PostgreSQL", "Stripe"],
    github: "https://github.com/Misje05/fotreg",
    featured: true,
  },
  {
    title: "Poker",
    description:
      "A poker game application with a SpringBoot backend and JSP frontend. Designed for managing multiple players online.",
    tech: ["Java", "Spring MVC", "JSP", "UI/UX"],
    github: "https://github.com/Misje05/poker",
    featured: true,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with React and TypeScript. Showcases my projects, experience, and skills. ",
    tech: ["React", "TypeScript"],
    github: "https://github.com/Misje05/Portfolio",
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card glow-border hover-lift p-6 md:p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </a>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-black">
            <span className="text-gradient">P</span>rojects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {/* Add more placeholder 
          <div className="glass-card border-dashed border-2 border-border/50 flex items-center justify-center p-8 min-h-[280px] opacity-40 hover:opacity-60 transition-opacity">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">+</span>
              </div>
              <p className="text-sm text-muted-foreground font-mono">More coming soon</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
