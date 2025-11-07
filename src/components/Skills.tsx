import React from 'react';

interface Skill {
  name: string;
  level: number;
  description: string;
  technologies: string[];
}

interface SkillCategory {
  category: string;
  color: string;
  icon: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      color: 'cyber-cyan',
      icon: '⚛️',
      skills: [
        {
          name: 'React & TypeScript',
          level: 90,
          description: 'Building scalable SPAs with modern React patterns',
          technologies: ['React 18', 'TypeScript', 'Hooks', 'Context API']
        },
        {
          name: 'Modern Frameworks',
          level: 82,
          description: 'Next.js, Svelte, and other cutting-edge frameworks',
          technologies: ['Next.js', 'Svelte', 'Vite', 'Single-SPA']
        },
        {
          name: 'UI/UX Design',
          level: 78,
          description: 'Crafting beautiful, user-centric interfaces',
          technologies: ['Figma', 'Tailwind', 'Bootstrap', 'Responsive Design']
        }
      ]
    },
    {
      category: 'Backend Development',
      color: 'cyber-purple',
      icon: '🔧',
      skills: [
        {
          name: 'API Development',
          level: 85,
          description: 'RESTful and GraphQL APIs with Node.js and Python',
          technologies: ['FastAPI', 'Express', 'REST', 'GraphQL']
        },
        {
          name: 'Database Design',
          level: 80,
          description: 'SQL and NoSQL database architecture',
          technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone']
        },
        {
          name: 'Architecture',
          level: 82,
          description: 'Microservices and scalable system design',
          technologies: ['.NET', 'Microservices', 'Docker', 'Cloud']
        }
      ]
    },
    {
      category: 'AI & Machine Learning',
      color: 'cyber-pink',
      icon: '🤖',
      skills: [
        {
          name: 'Deep Learning',
          level: 85,
          description: 'NLP and transformer-based models',
          technologies: ['PyTorch', 'Transformers', 'BERT', 'GPT']
        },
        {
          name: 'ML Engineering',
          level: 88,
          description: 'End-to-end ML pipelines and deployment',
          technologies: ['Python', 'scikit-learn', 'TensorFlow', 'MLOps']
        },
        {
          name: 'AI Agents',
          level: 85,
          description: 'Building intelligent agents with LangChain',
          technologies: ['LangChain', 'Agno', 'RAG', 'Vector DBs']
        }
      ]
    },
    {
      category: 'Tools & Others',
      color: 'cyber-blue',
      icon: '🛠️',
      skills: [
        {
          name: 'Version Control',
          level: 88,
          description: 'Git workflows and collaboration',
          technologies: ['Git', 'GitHub', 'GitLab', 'CI/CD']
        },
        {
          name: 'Build Tools',
          level: 82,
          description: 'Modern bundlers and development tools',
          technologies: ['Webpack', 'Vite', 'npm', 'Babel']
        },
        {
          name: 'Programming',
          level: 80,
          description: 'Multi-paradigm programming expertise',
          technologies: ['C++', 'Java', 'R', 'Shell']
        }
      ]
    }
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

  const getTextClass = (color: string) => {
    switch(color) {
      case 'cyber-cyan': return 'text-cyber-cyan';
      case 'cyber-purple': return 'text-cyber-purple';
      case 'cyber-pink': return 'text-cyber-pink';
      case 'cyber-blue': return 'text-cyber-blue';
      default: return 'text-cyber-cyan';
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-noir-dark">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-purple neon-glow">
          <span className="glitch-effect">SKILLS</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-purple">&gt;</span> Technical Arsenal
        </p>
        
        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className={`text-3xl font-bold font-mono ${getTextClass(category.color)} neon-glow`}>
                  {category.category}
                </h3>
                <div className={`flex-1 h-0.5 ${getColorClass(category.color)} opacity-30`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`bg-noir-darker border-2 ${getBorderClass(category.color)}/30 rounded-lg p-6 hover:${getBorderClass(category.color)}/60 transition-all duration-300 group`}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-cyber-white font-mono">
                        {skill.name}
                      </h4>
                      <span className={`px-3 py-1 rounded ${getColorClass(category.color)} text-sm font-bold shrink-0 ml-2`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-cyber-gray text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-noir-gray rounded-full overflow-hidden mb-4">
                      <div 
                        className={`absolute top-0 left-0 h-full ${getColorClass(category.color)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs px-2 py-1 bg-noir-black border ${getBorderClass(category.color)}/50 ${getTextClass(category.color)} rounded font-mono hover:bg-${category.color}/10 transition-all`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
