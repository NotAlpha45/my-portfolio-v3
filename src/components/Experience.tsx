import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored team of 5 junior developers in modern web technologies',
        'Architected real-time data processing system handling 100K events/second',
      ],
      technologies: ['React', 'Node.js', 'Kubernetes', 'AWS', 'PostgreSQL'],
    },
    {
      company: 'Digital Solutions Corp',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: [
        'Developed and maintained e-commerce platform generating $5M+ annual revenue',
        'Optimized database queries improving response time by 40%',
        'Collaborated with UX team to redesign checkout flow, increasing conversion by 25%',
        'Integrated third-party payment gateways and shipping APIs',
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
    },
    {
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      duration: '2018 - 2020',
      location: 'Austin, TX',
      description: [
        'Built responsive web applications using modern JavaScript frameworks',
        'Participated in agile development processes and daily standups',
        'Wrote unit and integration tests achieving 85% code coverage',
        'Contributed to open-source projects and internal tool development',
      ],
      technologies: ['Angular', 'TypeScript', 'Express.js', 'MySQL'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 scanline">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-purple neon-glow">
          <span className="glitch-effect">EXPERIENCE</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-purple">&gt;</span> Professional Journey
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyber-purple via-cyber-pink to-cyber-cyan"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-cyber-purple border-4 border-noir-black shadow-lg shadow-cyber-purple/50"></div>

                <div className="md:ml-20 bg-noir-darker border-2 border-cyber-purple/30 rounded-lg p-6 md:p-8 hover:border-cyber-purple/60 transition-all duration-300 group">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-cyber-white mb-2 group-hover:text-cyber-purple transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-cyber-cyan font-mono">
                        <span className="text-lg font-bold">{exp.company}</span>
                        <span className="text-cyber-gray">•</span>
                        <span className="text-cyber-gray">{exp.location}</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/50 rounded text-cyber-purple font-mono text-sm">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-cyber-gray">
                        <span className="text-cyber-purple mt-1 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-noir-black border border-cyber-purple/30 text-cyber-purple rounded text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-noir-darker border border-cyber-purple/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyber-purple mb-2">6+</div>
            <div className="text-cyber-gray uppercase text-sm tracking-wider">Years Experience</div>
          </div>
          <div className="bg-noir-darker border border-cyber-cyan/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyber-cyan mb-2">50+</div>
            <div className="text-cyber-gray uppercase text-sm tracking-wider">Projects Completed</div>
          </div>
          <div className="bg-noir-darker border border-cyber-pink/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyber-pink mb-2">15+</div>
            <div className="text-cyber-gray uppercase text-sm tracking-wider">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
