import { ArrowDown, FileText } from 'lucide-react';
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background radial gradient effect */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Background blur blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Available for internship opportunities
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Name/Title (with subtle hover effect) */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
                Ayush Aryan
              </span>
            </h1>

            {/* Rotating Roles (centered) */}
            <div className="relative h-16 flex items-center justify-center">
              {roles.map((role, index) => (
                <h2
                  key={index}
                  className={`absolute text-2xl md:text-4xl font-semibold text-gray-300 transition-all duration-500 ${
                    index === currentRole ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {role}
                </h2>
              ))}
            </div>
          </div>

          {/* Bio Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Second-year CSE student passionate about crafting beautiful, functional web experiences.
            Currently expanding my full-stack capabilities and seeking to contribute to impactful projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* ArrowDown Separator */}
          <div className="pt-12 animate-fade-in animation-delay-600">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
          </div>
        </div>

        {/* Resume Button - Replaces Social Icons */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
