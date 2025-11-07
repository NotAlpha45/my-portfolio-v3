import React from 'react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  doi?: string;
  url?: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: 'Asteroid Family Classification with Machine Learning: A Novel Two Step Approach',
      authors: 'Maheen Mashrur Hoque, et al.',
      venue: 'Experimental Astronomy (Springer)',
      year: 2025,
      type: 'journal',
      doi: '10.1007/s10686-025-09982-y',
      url: 'https://link.springer.com/article/10.1007/s10686-025-09982-y',
    },
    {
      title: 'AI Tools in Education: Investigating University Students\' Motivations, Institutional Policies, and Ethical Considerations in Bangladesh',
      authors: 'Maheen Mashrur Hoque, Research Team',
      venue: 'OzCHI 2025',
      year: 2025,
      type: 'conference',
      url: 'https://www.ozchi.org/2025/',
    },
    {
      title: 'Enhancing Bangla Cyberbullying Detection with Data Augmentation: A Performance Evaluation',
      authors: 'Maheen Mashrur Hoque, Co-Authors',
      venue: 'SCoRED 2025',
      year: 2025,
      type: 'conference',
      url: 'https://ieeemy.org/scored/',
    },
    {
      title: 'A Transformer-Based Approach for Classifying Software Requirements',
      authors: 'Maheen Mashrur Hoque',
      venue: 'Islamic University of Technology - Undergraduate Thesis',
      year: 2024,
      type: 'preprint',
      url: 'http://103.82.172.44:8080/xmlui/handle/123456789/2408',
    },
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'conference': return 'bg-cyber-cyan text-noir-black';
      case 'journal': return 'bg-cyber-purple text-noir-black';
      case 'workshop': return 'bg-cyber-pink text-noir-black';
      case 'preprint': return 'bg-cyber-blue text-noir-black';
      default: return 'bg-cyber-cyan text-noir-black';
    }
  };

  return (
    <section id="publications" className="min-h-screen flex items-center justify-center px-6 py-20 bg-noir-dark">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-cyan neon-glow">
          <span className="glitch-effect">PUBLICATIONS</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-cyan">&gt;</span> Research & Academic Contributions
        </p>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-noir-darker border-l-4 border-cyber-cyan/50 rounded-lg p-6 hover:border-cyber-cyan hover:bg-noir-darker/80 transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    {pub.title}
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${getTypeColor(pub.type)}`}>
                  {pub.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 items-center text-sm text-cyber-gray mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="font-mono">{pub.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono">{pub.year}</span>
                </div>
                {pub.doi && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="font-mono text-xs">DOI: {pub.doi}</span>
                  </div>
                )}
              </div>

              {pub.url && (
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-cyber-cyan/50 text-cyber-cyan rounded text-sm font-mono hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Read Paper</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Publications', value: '4', color: 'cyber-cyan' },
            { label: 'Conferences', value: '2', color: 'cyber-purple' },
            { label: 'Journal Papers', value: '1', color: 'cyber-pink' },
            { label: 'Research Areas', value: '3', color: 'cyber-blue' },
          ].map((stat, index) => (
            <div key={index} className="bg-noir-darker border border-cyber-cyan/20 rounded-lg p-6 text-center">
              <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-cyber-gray text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
