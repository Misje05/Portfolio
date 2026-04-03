import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
}

const skills: Skill[] = [
  { name: "C# / .NET", category: "Backend", level: 80 },
  { name: "React", category: "Frontend", level: 75 },
  { name: "TypeScript", category: "Frontend", level: 75 },
  { name: "Python", category: "AI / ML", level: 85 },
  { name: "Machine Learning", category: "AI / ML", level: 70 },
  { name: "Git / GitHub", category: "Tools", level: 85 },
];

const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 relative">
      <div className="container">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Skills & Tech<span className="text-gradient">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`glass-card badge-pulse p-6 cursor-default transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredSkill === skill.name ? "glow-border" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-xs font-mono text-muted-foreground">{skill.category}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 100 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
