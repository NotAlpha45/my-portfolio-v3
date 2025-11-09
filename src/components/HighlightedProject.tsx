import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: string;
}

const HighlightedProject: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Reg-AI',
      description: 'A comprehensive tax expert AI agent system built with a knowledge base of 1.5 million+ records of tax-related information. Engineered a sophisticated data pipeline leveraging Agno and Pinecone to accelerate query speeds up to 2x.',
      technologies: ['Next.js', 'React', 'FastAPI', 'Langchain', 'Agno', 'Transformers', 'Pinecone'],
      githubUrl: 'https://github.com/NotAlpha45',
      liveUrl: 'https://regplus.reganalytics.com/',
      icon: 'RA',
    },
    {
      title: 'Reganalytics',
      description: 'Modular tax analytics platform serving worldwide users with real-time tax tools and comprehensive analytics capabilities, covering world tax, transfer-pricing, entity management, and more.',
      technologies: ['React', 'Single-SPA', '.NET'],
      liveUrl: 'https://regplus.reganalytics.com/',
      icon: 'RG',
    },
    {
      title: 'Cyberbullying Detection',
      description: 'Empirical study benchmarking models and BDA augmentation framework for detecting cyberbullying in Bangla text using state-of-the-art transformer models.',
      technologies: ['Python', 'Transformers', 'PyTorch'],
      githubUrl: 'https://github.com/NotAlpha45/bangla-cyberbullying',
      icon: 'CB',
    },
    {
      title: 'Requirements Classifier',
      description: 'Transformer-based ensemble for classifying software requirements with RAG-based zero-shot method for improved accuracy.',
      technologies: ['PyTorch', 'ChromaDB', 'Transformers'],
      githubUrl: 'https://github.com/NotAlpha45/Classification-of-Software-Requirements',
      icon: 'RC',
    },
  ];

  return (
    <section id="project" className="min-h-screen flex items-center justify-center px-6 py-20 scanline">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-pink neon-glow">
          <span className="glitch-effect">PROJECTS</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-pink">&gt;</span> Featured Work
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-noir-darker border-2 border-cyber-pink/30 rounded-lg p-6 hover:border-cyber-pink/60 transition-all duration-300 group flex flex-col"
            >
              {/* Project Icon */}
              <div className="h-32 bg-noir-black rounded mb-4 flex items-center justify-center border-2 border-cyber-pink/20 group-hover:border-cyber-pink/40 transition-all">
                <span className="text-cyber-pink text-5xl font-mono font-bold neon-glow">
                  {project.icon}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-cyber-white mb-3 font-mono">
                <span className="text-cyber-pink">&lt;</span>
                {project.title}
                <span className="text-cyber-pink">/&gt;</span>
              </h3>

              {/* Project Description */}
              <p className="text-cyber-gray text-sm leading-relaxed mb-4 grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-noir-black border border-cyber-pink/50 text-cyber-pink rounded font-mono hover:bg-cyber-pink/10 hover:border-cyber-pink transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Button */}
              <div className="mt-auto">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center px-6 py-3 bg-cyber-pink border-2 border-cyber-pink text-noir-black rounded font-mono font-bold hover:bg-transparent hover:text-cyber-pink transition-all duration-300"
                  >
                    View Live Demo
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center px-6 py-3 bg-transparent border-2 border-cyber-cyan text-cyber-cyan rounded font-mono font-bold hover:bg-cyber-cyan hover:text-noir-black transition-all duration-300"
                  >
                    View Code
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;
