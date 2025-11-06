import React from 'react';

interface Hobby {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      title: 'Gaming',
      description: 'Exploring virtual worlds and competitive gaming. Fan of RPGs, strategy games, and indie titles.',
      icon: '🎮',
      color: 'cyber-cyan',
    },
    {
      title: 'Photography',
      description: 'Capturing moments through the lens. Specializing in urban photography and night scenes.',
      icon: '📸',
      color: 'cyber-purple',
    },
    {
      title: 'Music Production',
      description: 'Creating electronic music and experimenting with synthesizers and digital audio workstations.',
      icon: '🎵',
      color: 'cyber-pink',
    },
    {
      title: 'Reading',
      description: 'Diving into sci-fi novels, tech blogs, and research papers. Always learning something new.',
      icon: '📚',
      color: 'cyber-blue',
    },
    {
      title: 'Fitness',
      description: 'Staying active through gym workouts, running, and martial arts training.',
      icon: '💪',
      color: 'cyber-cyan',
    },
    {
      title: 'Travel',
      description: 'Exploring new places, cultures, and cuisines. Always ready for the next adventure.',
      icon: '✈️',
      color: 'cyber-purple',
    },
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'cyber-cyan': return 'border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10';
      case 'cyber-purple': return 'border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10';
      case 'cyber-pink': return 'border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10';
      case 'cyber-blue': return 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10';
      default: return 'border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10';
    }
  };

  return (
    <section id="hobbies" className="min-h-screen flex items-center justify-center px-6 py-20 bg-noir-dark">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-cyber-blue neon-glow">
          <span className="glitch-effect">HOBBIES</span>
        </h2>
        <p className="text-cyber-gray font-mono mb-12 text-xl">
          <span className="text-cyber-blue">&gt;</span> Beyond The Code
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className={`bg-noir-darker border-2 ${getColorClass(hobby.color)} rounded-lg p-6 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-cyber-white mb-3 font-mono">
                <span className={`text-${hobby.color}`}>#</span> {hobby.title}
              </h3>
              
              <p className="text-cyber-gray leading-relaxed">
                {hobby.description}
              </p>

              {/* Decorative corner */}
              <div className="mt-4 flex gap-1">
                <div className={`w-2 h-2 bg-${hobby.color} rounded-full`}></div>
                <div className={`w-2 h-2 bg-${hobby.color} rounded-full opacity-60`}></div>
                <div className={`w-2 h-2 bg-${hobby.color} rounded-full opacity-30`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 bg-noir-darker border-2 border-cyber-cyan/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-cyber-cyan mb-6 font-mono text-center">
            {'// Fun Facts'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">☕</div>
              <div className="text-2xl font-bold text-cyber-cyan mb-1">∞</div>
              <div className="text-cyber-gray text-sm">Cups of Coffee/Day</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌙</div>
              <div className="text-2xl font-bold text-cyber-purple mb-1">Night</div>
              <div className="text-cyber-gray text-sm">Owl Status</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-cyber-pink mb-1">100%</div>
              <div className="text-cyber-gray text-sm">Passion Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-cyber-blue mb-1">Always</div>
              <div className="text-cyber-gray text-sm">Learning Mode</div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl text-cyber-white italic border-l-4 border-cyber-cyan pl-6 py-4 inline-block">
            <span className="text-cyber-cyan">"</span>
            Life is not just about writing code; it's about experiencing the world in all its dimensions.
            <span className="text-cyber-cyan">"</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
