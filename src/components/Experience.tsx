import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'Education',
      title: 'Bachelor of Technology in CSE',
      organization: 'SRM Institute of Science and Technology',
      period: '2024 - 2028',
      location: 'Kattankulathur, Tamil Nadu',
      description: 'Currently pursuing Computer Science Engineering with focus on web technologies and software development.',
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'Education',
      title: 'High School Diploma',
      organization: 'Apeejay School',
      period: '2010 - 2024',
      location: 'Panchsheel Park, New Delhi',
      description: 'High School completed in the Non-Medical Stream, providing a strong technical foundation in Physics, Chemistry, and Mathematics (PCM).',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      type: 'Workshop',
      title: 'ENDURO 2024',
      organization: 'IIT Hyderabad',
      period: '2024',
      location: 'IIT Hyderabad',
      description: 'Software training and inner personality development workshop enhancing technical and soft skills.',
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      type: 'Hackathon',
      title: 'ReGenHack 25',
      organization: 'School of Computing, SRMIST',
      period: '2025',
      location: 'SRMIST',
      description: 'Participated in intensive hackathon, building solutions under time pressure and collaborating with team members.',
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      type: 'Hackathon',
      title: 'MOZOHACK 6.0',
      organization: 'SRMKZILLA',
      period: '2025',
      location: 'SRMIST',
      description: 'Competed in technical hackathon, gaining hands-on experience in rapid prototyping and problem-solving.',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      type: 'Workshop',
      title: 'Pythoneers: Code, Create & Conquer - Python workshop',
      organization: 'SRMIST ACM SIGCHI Student Chapter',
      period: '2024',
      location: 'SRMIST',
      description: 'A hands-on Python workshop covering fundamental programming concepts, data structures, and practical application development.',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      type: 'Workshop',
      title: 'WEBCRAFT 1.0-Web Development workshop',
      organization: 'Corizo x CODENEX CLUB SRMIST',
      period: '2024',
      location: 'SRMIST (ONLINE)',
      description: 'An introductory web development workshop teaching HTML, CSS, and JavaScript basics to build responsive websites from scratch.',
    },
  ];

  const certifications = [
    {
      name: 'Introduction to Front End Development',
      issuer: 'Simplilearn',
      date: 'October 2025',
      skills: 'HTML, CSS, JavaScript, React, Git',
    },
    {
      name: 'TCS ION Career Edge - Young Professional',
      issuer: 'TCS ION',
      date: 'July 2025',
      skills: 'Professional Communication, Interview Preparation, Resume Writing',
    },
    {
      name: 'Complete Modern C++',
      issuer: 'Udemy',
      date: 'April 2025',
      skills: 'Modern C++, OOP',
    },
    {
      name: 'Introduction to Career Skills in Data Analytics',
      issuer: 'LinkedIn Learning',
      date: 'September 2024',
      skills: 'Data Analytics, Tech Career Skills',
    },
    {
      name: 'IT in Everyday Life',
      issuer: 'The Open University',
      date: 'JULY 2024',
      skills: 'IT Fundamentals, Digital Literacy',
    },
    {
      name: 'Business Analysis & Process Management',
      issuer: 'Coursera',
      date: 'November 2023',
      skills: 'Business Process Improvement, Lucidchart',
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiences & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-cyan-400" />
            Experience & Activities
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-4 md:flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">{exp.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-1 bg-slate-800 rounded text-cyan-400 border border-slate-700">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="md:text-right text-sm text-slate-400 md:ml-4">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-cyan-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-all"
              >
                <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h4>
                <div className="text-sm text-slate-400 mb-3">
                  <div>{cert.issuer}</div>
                  <div>{cert.date}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.split(', ').map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {['English', 'Hindi', 'French', 'Oriya'].map((lang, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
