import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import React from 'react';

// Import the external hooks
import useCountUp from './hooks/useCountUp'; 
import useInView from './hooks/useInView';

// STAT ITEM COMPONENT
interface StatItemProps {
    label: string;
    target: number;
    suffix: string;
    startCounting: boolean;
    delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, target, suffix, startCounting, delay }) => {
    // Stagger the animation start using the delay prop
    const count = useCountUp(target, 1500 + delay, startCounting); 

    // Determine the text to display: the counted number, or the final '2+'
    const displayedText = count < target ? `${count}` : `${target}${suffix}`;

    return (
        <div className="w-full">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {displayedText}
            </div>
            <div className="text-slate-400 text-sm">{label}</div>
        </div>
    );
};


// MAIN
const About = () => {
  const qualities = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Clean Code', description: 'Writing maintainable, structured code with focus on best practices' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Problem Solver', description: 'Analytical approach to debugging and finding efficient solutions' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Player', description: 'Effective collaboration and communication in group settings' },
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Learner', description: 'Continuously expanding knowledge and adapting to new technologies' },
  ];

  const statsData = [
    { label: 'Years Coding', target: 2, suffix: '+' },
    { label: 'Certifications', target: 7, suffix: '+' },
    { label: 'Hackathons', target: 2, suffix: '+' },
    { label: 'Languages', target: 4, suffix: '+' },
  ];

  // Attach the ref to the stats block and get the visibility state
  const [statsRef, statsInView] = useInView({ threshold: 0.5 });


  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Text and Qualities Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a second-year Computer Science Engineering student at SRM Institute of Science and Technology,
                  passionate about building elegant web solutions that solve real-world problems.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  My journey in web development began with frontend technologies, and I'm now expanding into
                  backend development to become a well-rounded full-stack developer. I thrive in collaborative
                  environments and love the challenge of turning ideas into functional, beautiful applications.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Active participant in hackathons like ReGenHack 25 and MOZOHACK 6.0, where I've gained
                  valuable experience in rapid prototyping, teamwork, and building under pressure.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="group bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400">{quality.icon}</div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {quality.title}
                </h4>
                <p className="text-sm text-slate-400">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics Block - Scroll-Triggered Counter */}
        <div 
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
                <StatItem 
                    key={stat.label}
                    label={stat.label}
                    target={stat.target}
                    suffix={stat.suffix}
                    // Pass the visibility state to StatItem
                    startCounting={statsInView} 
                    // Stagger the start time for a better visual effect
                    delay={index * 200}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
