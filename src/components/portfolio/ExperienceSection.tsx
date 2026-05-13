import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "work";
}

const timeline: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "Bachelor in Data Engineering",
    org: "HVL Bergen",
    description:
      "Specialization in Web and Mobile Development. Building a strong foundation in software engineering, web backend for frontend development, and database and hosting.",
    type: "education",
  },
  {
    period: "2025 – Present",
    title: "Student Assistant - Programming",
    org: "HVL Bergen",
    description:
      "Assisting students with Java assignments and correcting code assignment submissions. Employed in both DAT100 and DAT102 needing wide knowledge of Java.",
    type: "work",
  },
  /*{
    period: "Coming soon",
    title: "Internship / Work Experience",
    org: "TBD",
    description:
      "Open to internships and opportunities in software development, data engineering, and machine learning.",
    type: "work",
  },*/
];

const ExperienceTimelineItem = ({ item, delay }: { item: TimelineItem; delay: number }) => {
  const { ref, isVisible: itemVisible } = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`relative pl-12 pb-12 last:pb-0 transition-all duration-700 ${
        itemVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
          itemVisible ? "bg-primary border-primary" : "bg-background border-muted-foreground/30"
        }`}
      />

      <span className="text-xs font-mono text-primary mb-1 block">{item.period}</span>
      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
      <p className="text-sm font-medium text-accent mb-2">{item.org}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 relative">
      <div className="container">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-black">
            <span className="text-gradient">E</span>xperience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </div>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <ExperienceTimelineItem key={i} item={item} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
