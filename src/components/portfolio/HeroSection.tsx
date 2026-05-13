import { useEffect, useState } from "react";

const roles = ["Data Engineering Student", "Web & Mobile Developer", "Full-Stack Developer", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/8 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 py-32">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-in-up opacity-0">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 animate-fade-in-up opacity-0 stagger-1">
            <span className="text-gradient">M</span>agnus <span className="text-gradient">M</span>isje
          </h1>
          <div className="h-12 md:h-16 mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground animate-fade-in-up opacity-0 stagger-2">
              <span>{displayed}</span>
              <span className="text-primary animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up opacity-0 stagger-3">
            I'm a data engineering student at{" "}
            <span className="text-foreground font-medium">HVL Bergen</span> specializing in{" "}
            <span className="text-primary font-medium">Web</span> and{" "}
            <span className="text-accent font-medium">Mobile Development</span>. I'm passionate about building practical software
            and creating seamless digital experiences.
          </p>

          <div className="flex gap-4 animate-fade-in-up opacity-0 stagger-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-lift transition-all"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-fade-in-up" style={{ animationDuration: "1.5s", animationIterationCount: "infinite" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
