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
          name: 'React Ecosystem',
          level: 90,
          description: 'Production experience with React 18, TypeScript, Hooks, Context API, Redux, React Query. Built micro-frontend architectures using Single-SPA.',
          technologies: ['React 18', 'TypeScript', 'Redux', 'Single-SPA']
        },
        {
          name: 'Modern Frameworks',
          level: 82,
          description: 'Developed full-stack applications with Next.js (SSR/SSG), Svelte, and Vite. Experience with server components and API routes.',
          technologies: ['Next.js', 'Svelte', 'Vite', 'SSR/SSG']
        },
        {
          name: 'Styling & Design Systems',
          level: 78,
          description: 'Proficient in Tailwind CSS, Bootstrap, Material-UI. Created responsive designs with Figma prototypes. Implemented component libraries.',
          technologies: ['Tailwind CSS', 'Figma', 'Bootstrap', 'Material-UI']
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
          description: 'Built RESTful APIs with FastAPI and Express.js. Implemented authentication, rate limiting, and API versioning.',
          technologies: ['FastAPI', 'Express.js', 'REST API']
        },
        {
          name: 'Database Systems',
          level: 80,
          description: 'Designed schemas for MongoDB, MySQL. Vector database experience with Pinecone for AI applications.',
          technologies: ['MongoDB', 'MySQL', 'Pinecone']
        },
        {
          name: 'System Architecture',
          level: 82,
          description: 'Developed microservices with .NET Core. Containerization with Docker. Cloud deployment on AWS/Azure. CI/CD pipeline configuration.',
          technologies: ['.NET Core', 'Docker', 'AWS', 'Microservices']
        }
      ]
    },
    {
      category: 'AI & Machine Learning',
      color: 'cyber-pink',
      icon: '🤖',
      skills: [
        {
          name: 'Deep Learning & NLP',
          level: 85,
          description: 'Fine-tuned transformer models (BERT, GPT, T5) using PyTorch. Published research on text classification. Experience with Hugging Face ecosystem.',
          technologies: ['PyTorch', 'Transformers', 'BERT', 'Hugging Face']
        },
        {
          name: 'ML Engineering & MLOps',
          level: 88,
          description: 'Built end-to-end ML pipelines with Python, scikit-learn. Model deployment and monitoring. Data preprocessing and feature engineering at scale.',
          technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas']
        },
        {
          name: 'LLM & AI Agents',
          level: 85,
          description: 'Engineered production AI agents with LangChain and Agno. Implemented RAG systems with vector databases. Optimized LLM inference and prompt engineering.',
          technologies: ['LangChain', 'Agno', 'RAG', 'OpenAI API']
        }
      ]
    },
    {
      category: 'DevOps & Programming',
      color: 'cyber-blue',
      icon: '🛠️',
      skills: [
        {
          name: 'Version Control & CI/CD',
          level: 88,
          description: 'Git workflows (Git Flow, trunk-based). GitHub Actions, GitLab CI for automated testing and deployment. Code review and collaborative development.',
          technologies: ['Git', 'GitHub Actions', 'GitLab CI', 'Jenkins']
        },
        {
          name: 'Build Tools & Bundlers',
          level: 82,
          description: 'Configured Webpack, Vite for optimized builds. Module federation for micro-frontends. npm/yarn package management. Babel transpilation.',
          technologies: ['Webpack', 'Vite', 'npm']
        },
        {
          name: 'Programming Languages',
          level: 80,
          description: 'Strong foundation in C (algorithms, data structures), Java/Python (OOP principles). Statistical computing with Python/R. Shell scripting for automation.',
          technologies: ['Python', 'Javascript/Typescript', 'C', 'Java', 'R', 'Bash/PowerShell']
        }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'cyber-cyan': return 'bg-cyber-cyan text-noir-black';
      case 'cyber-purple': return 'bg-cyber-purple text-noir-black';
      case 'cyber-pink': return 'bg-cyber-pink text-noir-black';
      case 'cyber-blue': return 'bg-cyber-blue text-noir-black';
      default: return 'bg-cyber-cyan text-noir-black';
    }
  };

  const getBorderClass = (color: string) => {
    switch (color) {
      case 'cyber-cyan': return 'border-cyber-cyan';
      case 'cyber-purple': return 'border-cyber-purple';
      case 'cyber-pink': return 'border-cyber-pink';
      case 'cyber-blue': return 'border-cyber-blue';
      default: return 'border-cyber-cyan';
    }
  };

  const getTextClass = (color: string) => {
    switch (color) {
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
