import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  github: string;
  live: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'WeatherNow - Weather Dashboard',
      description:
        'Real-time weather application with current conditions, 5-day forecast, geolocation support, and detailed weather metrics using OpenWeatherMap API.',
      tech: ['JavaScript', 'REST API', 'Tailwind CSS', 'HTML5'],
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/DarkSorcerer14/weather-dashboard',
      live: 'https://darksorcerer14.github.io/weather-dashboard/',
    },
    {
      title: 'TaskFlow - Task Manager',
      description:
        'Full-featured task management app with authentication, priority levels, filtering, and real-time statistics. Supports both cloud sync and demo mode.',
      tech: ['JavaScript', 'Supabase', 'Tailwind CSS', 'Local Storage'],
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/DarkSorcerer14/taskflow-smart-manager',
      live: 'https://darksorcerer14.github.io/taskflow-smart-manager/',
    },
    {
      title: 'CodeVault - Snippet Manager',
      description:
        'Developer tool for organizing code snippets with syntax highlighting, multi-language support, tagging system, search functionality, and export capabilities.',
      tech: ['JavaScript', 'Highlight.js', 'Tailwind CSS', 'Local Storage'],
      gradient: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/DarkSorcerer14/codevault-snippet-manager',
      live: 'https://darksorcerer14.github.io/codevault-snippet-manager/',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio showcasing projects, skills, and experience. Features smooth animations, dark theme, and interactive sections.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      gradient: 'from-slate-500 to-slate-600',
      github: 'https://github.com/DarkSorcerer14/ayush-aryan-portfolio',
      live: '/',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in web development and
            problem-solving
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all hover:scale-[1.02]"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-slate-800 rounded-full text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-sm group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:text-cyan-400 transition-colors" />
                    <span>Code</span>
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all text-sm border border-cyan-500/30 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:text-cyan-400 transition-colors" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/DarkSorcerer14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all group"
          >
            <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
