import { Code, Database, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'REST APIs', level: 70 },
        { name: 'Spring Boot', level: 60 },
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Vite', level: 75 },
        { name: 'Supabase', level: 70 },
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'C/C++', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-cyan-400">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: `expandWidth 1s ease-out ${skillIndex * 0.1}s both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Data Structures',
              'Algorithms',
              'Debugging',
              'UI/UX Design',
              'Team Collaboration',
              'Agile Methodology',
              'Technical Writing',
              'Code Review',
              'Performance Optimization',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;