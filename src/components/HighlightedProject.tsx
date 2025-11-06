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
  const project: Project = {
    title: 'Reg-AI',
    description: 'A comprehensive tax expert AI agent built with a knowledge base of 1.5 million+ records of tax-related information. Engineered a sophisticated data pipeline leveraging Agno and Pinecone to accelerate query speeds up to 2x, significantly improving the AI agent\'s response time for tax professionals worldwide.',
    technologies: ['Next.js', 'React', 'FastAPI', 'Langchain', 'Agno', 'Transformers', 'Pinecone'],
    githubUrl: 'https://github.com/NotAlpha45',
    liveUrl: 'https://www.kazsoftware.com/',
  };

  return (
    <section id="project" className="min-h-screen flex items-center justify-center px-6 py-20 scanline">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-pink neon-glow">
          <span className="glitch-effect">FEATURED_PROJECT</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-pink">&gt;</span> Showcase Excellence
        </p>

        <div className="bg-noir-darker border-2 border-cyber-pink/30 rounded-lg overflow-hidden hover:border-cyber-pink/60 transition-all duration-300 shadow-2xl">
          {/* Project Image/Placeholder */}
          <div className="relative h-96 bg-linear-to-br from-cyber-pink/20 via-cyber-purple/20 to-cyber-cyan/20 overflow-hidden">
            <div className="absolute inset-0 bg-noir-black/50 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-cyber-pink/30 mb-4">[ ]</div>
                <p className="text-cyber-gray font-mono">// Project Screenshot</p>
              </div>
            </div>
            
            {/* Decorative grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Project Content */}
          <div className="p-8 md:p-12">
            <h3 className="text-4xl font-bold text-cyber-white mb-4 font-mono">
              <span className="text-cyber-pink">&lt;</span>
              {project.title}
              <span className="text-cyber-pink">/&gt;</span>
            </h3>
            
            <p className="text-lg text-cyber-gray leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-cyber-cyan font-mono mb-3 text-sm uppercase tracking-wider">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-noir-black border border-cyber-pink/50 text-cyber-pink rounded text-sm font-mono hover:bg-cyber-pink/10 hover:border-cyber-pink transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-transparent border-2 border-cyber-cyan text-cyber-cyan rounded font-mono font-bold hover:bg-cyber-cyan hover:text-noir-black transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-cyber-pink border-2 border-cyber-pink text-noir-black rounded font-mono font-bold hover:bg-transparent hover:text-cyber-pink transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Additional projects grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div 
            className="bg-noir-darker border border-cyber-pink/20 rounded-lg p-6 hover:border-cyber-pink/50 transition-all cursor-pointer group"
          >
            <div className="h-32 bg-noir-black rounded mb-4 flex items-center justify-center border border-cyber-pink/20 group-hover:border-cyber-pink/40 transition-all">
              <span className="text-cyber-pink/50 text-4xl font-mono">RA</span>
            </div>
            <h4 className="text-cyber-white font-mono mb-2 font-bold">Reganalytics</h4>
            <p className="text-cyber-gray text-sm mb-3">Modular tax analytics platform serving 10,000+ worldwide users with real-time tax tools</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">React</span>
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">Single-SPA</span>
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">.NET</span>
            </div>
          </div>
          
          <div 
            className="bg-noir-darker border border-cyber-pink/20 rounded-lg p-6 hover:border-cyber-pink/50 transition-all cursor-pointer group"
          >
            <div className="h-32 bg-noir-black rounded mb-4 flex items-center justify-center border border-cyber-pink/20 group-hover:border-cyber-pink/40 transition-all">
              <span className="text-cyber-pink/50 text-4xl font-mono">CB</span>
            </div>
            <h4 className="text-cyber-white font-mono mb-2 font-bold">Cyberbullying Detection</h4>
            <p className="text-cyber-gray text-sm mb-3">Empirical study benchmarking models for detecting cyberbullying in Bangla text</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">Python</span>
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">Transformers</span>
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">PyTorch</span>
            </div>
          </div>
          
          <div 
            className="bg-noir-darker border border-cyber-pink/20 rounded-lg p-6 hover:border-cyber-pink/50 transition-all cursor-pointer group"
          >
            <div className="h-32 bg-noir-black rounded mb-4 flex items-center justify-center border border-cyber-pink/20 group-hover:border-cyber-pink/40 transition-all">
              <span className="text-cyber-pink/50 text-4xl font-mono">SR</span>
            </div>
            <h4 className="text-cyber-white font-mono mb-2 font-bold">Requirements Classifier</h4>
            <p className="text-cyber-gray text-sm mb-3">Transformer-based ensemble for classifying software requirements with RAG-based zero-shot method</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">PyTorch</span>
              <span className="text-xs px-2 py-1 bg-noir-black border border-cyber-pink/30 text-cyber-pink rounded">ChromaDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;
