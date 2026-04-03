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
    period: "2023 – Present",
    title: "Bachelor in Data Engineering",
    org: "HVL Bergen",
    description:
      "Specialization in Machine Learning and Artificial Intelligence. Building a strong foundation in software engineering, data processing, and applied ML.",
    type: "education",
  },
  {
    period: "Coming soon",
    title: "Internship / Work Experience",
    org: "TBD",
    description:
      "Open to internships and opportunities in software development, data engineering, and machine learning.",
    type: "work",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 relative">
      <div className="container">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Experience<span className="text-gradient">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </div>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => {
            const { ref: itemRef, isVisible: itemVisible } = useScrollReveal(0.3);
            return (
              <div
                key={i}
                ref={itemRef}
                className={`relative pl-12 pb-12 last:pb-0 transition-all duration-700 ${
                  itemVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Dot */}
                <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
                  itemVisible ? "bg-primary border-primary" : "bg-background border-muted-foreground/30"
                }`} />

                <span className="text-xs font-mono text-primary mb-1 block">{item.period}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-accent mb-2">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
