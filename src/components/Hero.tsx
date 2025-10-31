import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ['Frontend Engineer', 'Web Developer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Background radial gradient effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
        }}
      />

      {/* Background blur blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Availability Badge */}
      <div 
        className="
          absolute 
          top-20 md:top-24
          left-1/2 
          -translate-x-1/2 
          z-20 
          px-4 py-2 
          bg-slate-900/80 
          backdrop-blur-sm 
          rounded-full 
          text-sm text-cyan-400 
          border border-cyan-500/50
          animate-fade-in delay-200 animate-pulse-glow 
        "
      >
        Available for internship opportunities
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 md:pt-32"> 
        <div className="space-y-8">
          
           {/* Name/Title (with subtle hover effect) */}
          <h1 
            className="
              text-5xl md:text-7xl font-bold mb-6 
              transition-all duration-300 
              hover:scale-[1.02]                 /* Subtle bulge effect */
              hover:text-shadow-glow             /* Custom glow utility */
              cursor-default                     /* Indicate it's interactive */
            "
          >
            <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>Hi, I'm{' '}</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Ayush Aryan
            </span>
          </h1>

          {/* Rotating Roles (centered) */}
          <div className="h-20 flex items-center justify-center relative">
            <p className="text-2xl md:text-4xl text-slate-300 font-light">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                    index === currentRole
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  {role}
                </span>
              ))}
            </p>
          </div>

          {/* Bio Paragraph */}
          <p className="
            text-lg 
            text-slate-400 
            max-w-2xl 
            mx-auto 
            leading-relaxed
            opacity-0 animate-fade-in 
          " style={{ animationDelay: '0.8s' }}>
            Second-year CSE student passionate about crafting beautiful, functional web experiences.
            Currently expanding my full-stack capabilities and seeking to contribute to impactful projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
            >
              View My Work
            </a>
          </div>

          {/* UPDATED: ArrowDown Separator */}
          {/* Used mx-auto for centering, with specific padding and smaller size */}
          <div className="pt-1 pb-2 opacity-1 animate-fade-in delay-1100"> {/* Added fade-in and delay */}
            <ArrowDown className="w-7 h-7 text-slate-450 mx-auto animate-bounce" /> {/* Smaller size w-6 h-6 */}
          </div>
          {/* END UPDATED */}
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a
              href="https://github.com/DarkSorcerer14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-aryan-3a4688281"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="mailto:ayush.aryan@outlook.com"
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Mail className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;