import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React/TypeScript', level: 90, color: 'cyber-cyan' },
    { name: 'Node.js', level: 85, color: 'cyber-purple' },
    { name: 'Python', level: 88, color: 'cyber-pink' },
    { name: 'Database Design', level: 80, color: 'cyber-blue' },
    { name: 'UI/UX Design', level: 75, color: 'cyber-cyan' },
    { name: 'Cloud Services', level: 82, color: 'cyber-purple' },
    { name: 'DevOps', level: 78, color: 'cyber-pink' },
    { name: 'Machine Learning', level: 70, color: 'cyber-blue' },
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'cyber-cyan': return 'bg-cyber-cyan text-noir-black';
      case 'cyber-purple': return 'bg-cyber-purple text-noir-black';
      case 'cyber-pink': return 'bg-cyber-pink text-noir-black';
      case 'cyber-blue': return 'bg-cyber-blue text-noir-black';
      default: return 'bg-cyber-cyan text-noir-black';
    }
  };

  const getBorderClass = (color: string) => {
    switch(color) {
      case 'cyber-cyan': return 'border-cyber-cyan';
      case 'cyber-purple': return 'border-cyber-purple';
      case 'cyber-pink': return 'border-cyber-pink';
      case 'cyber-blue': return 'border-cyber-blue';
      default: return 'border-cyber-cyan';
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-noir-dark">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-purple neon-glow">
          <span className="glitch-effect">SKILLS</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-purple">&gt;</span> Technical Arsenal
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`bg-noir-darker border-2 ${getBorderClass(skill.color)}/30 rounded-lg p-6 hover:${getBorderClass(skill.color)}/60 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color}/20`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-cyber-white font-mono">
                  {skill.name}
                </h3>
                <span className={`px-3 py-1 rounded ${getColorClass(skill.color)} text-sm font-bold`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative h-3 bg-noir-gray rounded-full overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full ${getColorClass(skill.color)} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1 flex-1 rounded ${
                      i < skill.level / 10 
                        ? getColorClass(skill.color)
                        : 'bg-noir-gray'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {['Git', 'Docker', 'AWS', 'GraphQL', 'REST APIs', 'Agile', 'CI/CD', 'Testing'].map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-noir-darker border border-cyber-cyan/50 text-cyber-cyan rounded-full text-sm font-mono hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
