import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const HighlightedProject: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Reg-AI',
      description: 'A comprehensive tax expert AI agent system built with a knowledge base of 1.5 million+ records of tax-related information. From question-answering to analysis - this system can do many things. Engineered a sophisticated data pipeline leveraging Agno and Pinecone to accelerate query speeds up to 2x.',
      technologies: ['Next.js', 'React', 'FastAPI', 'Langchain', 'Agno', 'Transformers', 'Pinecone'],
      githubUrl: 'https://github.com/NotAlpha45',
      liveUrl: 'https://regplus.reganalytics.com/',
      imageUrl: '/images/reg.png',
    },
    {
      title: 'Reganalytics',
      description: 'Modular tax analytics platform serving 10,000+ worldwide users with real-time tax tools and comprehensive financial analysis capabilities.',
      technologies: ['React', 'Single-SPA', '.NET'],
      liveUrl: 'https://reganalytics.com/',
    },
    {
      title: 'Cyberbullying Detection',
      description: 'Empirical study benchmarking models for detecting cyberbullying in Bangla text using advanced NLP techniques and transformer architectures.',
      technologies: ['Python', 'Transformers', 'PyTorch'],
      githubUrl: 'https://github.com/NotAlpha45/cyberbullying-detection',
    },
    {
      title: 'Requirements Classifier',
      description: 'Transformer-based ensemble for classifying software requirements with RAG-based zero-shot method for improved requirement analysis.',
      technologies: ['PyTorch', 'ChromaDB'],
      githubUrl: 'https://github.com/NotAlpha45/requirements-classifier',
    },
  ];

  const getViewUrl = (project: Project) => {
    return project.liveUrl || project.githubUrl || '#';
  };

  const getViewText = (project: Project) => {
    if (project.liveUrl) return 'Live Demo';
    if (project.githubUrl) return 'View Code';
    return 'View';
  };

  return (
    <section id="project" className="min-h-screen flex items-center justify-center px-6 py-20 scanline">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-pink neon-glow">
          <span className="glitch-effect">PROJECTS</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-pink">&gt;</span> Showcase Excellence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-noir-darker border-2 border-cyber-pink/30 rounded-lg overflow-hidden hover:border-cyber-pink/60 transition-all duration-300 shadow-2xl group"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-cyber-pink/20 via-cyber-purple/20 to-cyber-cyan/20 overflow-hidden">
                <div className="absolute inset-0 bg-noir-black/50 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} Screenshot`}
                      className="max-h-full max-w-full object-contain z-10"
                    />
                  ) : (
                    <span className="text-cyber-pink/50 text-4xl font-mono">
                      {project.title.split(' ').map(word => word[0]).join('').toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Decorative grid overlay */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyber-white mb-3 font-mono">
                  <span className="text-cyber-pink">&lt;</span>
                  {project.title}
                  <span className="text-cyber-pink">/&gt;</span>
                </h3>

                <p className="text-sm text-cyber-gray leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-noir-black border border-cyber-pink/50 text-cyber-pink rounded text-xs font-mono hover:bg-cyber-pink/10 hover:border-cyber-pink transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink/70 rounded text-xs font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Button */}
                <a
                  href={getViewUrl(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-cyber-pink border-2 border-cyber-pink text-noir-black rounded font-mono font-bold hover:bg-transparent hover:text-cyber-pink transition-all duration-300 text-center block"
                >
                  {getViewText(project)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;
