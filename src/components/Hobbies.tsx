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
      title: 'Reading',
      description: 'Fiction, non-fiction, or even boring research papers - everything has something to offer. I am always open to more recommendations from people.',
      icon: '📚',
      color: 'cyber-cyan',
    },
    {
      title: 'Writing',
      description: 'As an introvert, this is one of the few ways that I express myself. I see little verses everywhere around me, I only write them down.',
      icon: '✍️',
      color: 'cyber-purple',
    },
    {
      title: 'Riding Motorbikes',
      description: 'Two wheels, an engine, and a soul that looks beyond the horizon. The ride thrills me and the engineering fascinates me - a perfect coping mechanism.',
      icon: "🏍️",
      color: 'cyber-pink',
    },
    {
      title: 'Touring',
      description: 'The open road calls to me, and I answer gladly. The view, the breeze, and the food of someplace unknown - all make the journey worthwhile.',
      icon: '🗺️',
      color: 'cyber-blue',
    },
    {
      title: 'Gaming',
      description: 'Not a professional gamer by any means, but games as a medium of art and storytelling is something that truly intrigues me. Again, I am open to game recommendations!',
      icon: '🎮',
      color: 'cyber-cyan',
    },
    {
      title: 'Teaching',
      description: "'I believe that knowledge is destined to be shared. I've had a hard time learning things on my own, so I always try to help others like me to the best of my ability.",
      icon: '👨‍🏫',
      color: 'cyber-purple',
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
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
            You live in the present. The past is something you can never return to, and the future will always be ahead of you. What you do now, is what matters to everyone, including yourself. So, you might as well enjoy the little things that you have right now. 
            <span className="text-cyber-cyan">"</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
