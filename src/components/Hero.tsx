import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Utility function to check if the current device is likely a mobile/touch device
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const Hero = () => {
  // Conditionally enable mouse tracking based on device
  const isDesktop = !isMobileDevice();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDesktop) return; // Exit if it's a mobile device

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]); // Re-run effect when isDesktop changes (only on mount)

  const roles = ['Frontend Engineer', 'Web Developer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Increase minimum padding on mobile to ensure content isn't cramped at the top
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10 sm:pt-16">
      
      {/* Background radial gradient effect (Desktop Only for Performance) */}
      {isDesktop && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Background blur blobs (Reduce size/opacity for Mobile) */}
      <div className="absolute inset-0">
        {/* Adjusted w-48 h-48 for mobile, w-96 for larger screens */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        {/* Adjusted w-48 h-48 for mobile, w-96 for larger screens */}
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Availability Badge */}
      <div 
        className="
          absolute 
          top-16 md:top-24 /* Adjusted from top-20 to top-16 for better mobile spacing */
          left-1/2 
          -translate-x-1/2 
          z-20 
          px-3 py-1.5 /* Slightly smaller padding for mobile */
          bg-slate-900/80 
          backdrop-blur-sm 
          rounded-full 
          text-xs sm:text-sm text-cyan-400 /* Smaller text size on small screens */
          border border-cyan-500/50
          animate-fade-in delay-200 animate-pulse-glow 
        "
      >
        Available for internship opportunities
      </div>
      
      {/* Main Content */}
      {/* Reduced vertical padding on small screens */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-16 md:pt-32"> 
        <div className="space-y-6 sm:space-y-8">
          
           {/* Name/Title (with subtle hover effect) */}
          <h1 
            className="
              text-4xl xs:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 /* Adjusted text size for mobile */
              transition-all duration-300 
              hover:scale-[1.02]                 
              hover:text-shadow-glow             
              cursor-default                     
            "
          >
            <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>Hi, I'm{' '}</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Ayush Aryan
            </span>
          </h1>

          {/* Rotating Roles (centered) */}
          {/* Reduced height and font size for better mobile fit */}
          <div className="h-12 sm:h-20 flex items-center justify-center relative">
            <p className="text-xl sm:text-2xl md:text-4xl text-slate-300 font-light">
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
            text-base sm:text-lg /* Reduced font size on mobile */
            text-slate-400 
            max-w-xl sm:max-w-2xl /* Reduced max-width slightly for mobile readability */
            mx-auto 
            leading-relaxed
            opacity-0 animate-fade-in 
          " style={{ animationDelay: '0.8s' }}>
            Second-year CSE student passionate about crafting beautiful, functional web experiences.
            Currently expanding my full-stack capabilities and seeking to contribute to impactful projects.
          </p>

          {/* Action Buttons */}
          {/* Reduced vertical padding (pt-4) and horizontal padding/size on buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>

          {/* ArrowDown Separator */}
          <div className="pt-1 pb-2 opacity-1 animate-fade-in delay-1100">
            <ArrowDown className="w-6 h-6 text-slate-450 mx-auto animate-bounce" /> {/* Slightly smaller w-6 h-6 */}
          </div>
          
          {/* Social Icons */}
          {/* Reduced vertical padding (pt-0) on mobile */}
          <div className="flex items-center justify-center gap-4 pt-0 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            {/* Reduced icon padding/size slightly on mobile (p-2.5) */}
            <a
              href="https://github.com/DarkSorcerer14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-aryan-3a4688281"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="mailto:ayush.aryan@outlook.com"
              className="p-2.5 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
