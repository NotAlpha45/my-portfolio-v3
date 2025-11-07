import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 scanline">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-cyber-cyan neon-glow">
          <span className="glitch-effect">ABOUT_ME</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-cyber-pink pl-6">
              <p className="text-xl md:text-2xl text-cyber-white leading-relaxed">
                <span className="text-cyber-cyan font-mono">&gt;</span> Hello, I'm Maheen Mashrur Hoque, 
                a Software Engineering graduate passionate about developing scalable applications and 
                AI-driven solutions.
              </p>
            </div>
            
            <div className="border-l-4 border-cyber-purple pl-6">
              <p className="text-lg text-cyber-gray leading-relaxed">
                <span className="text-cyber-purple font-mono">&gt;</span> With a strong research background 
                in transformer-based models and machine learning, I specialize in creating innovative solutions 
                that bridge the gap between cutting-edge AI research and practical software engineering. 
                Currently working as an Associate Software Engineer at Kaz Software, where I develop tax analytics 
                platforms and AI-powered tools.
              </p>
            </div>
            
            <div className="border-l-4 border-cyber-blue pl-6">
              <p className="text-lg text-cyber-gray leading-relaxed">
                <span className="text-cyber-blue font-mono">&gt;</span> My journey spans from publishing 
                research in asteroid classification and AI ethics to building production-grade web applications 
                serving thousands of users. I'm driven by curiosity and a relentless pursuit of innovation in 
                the interdisciplinary space of AI and software engineering.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-linear-to-br from-cyber-cyan/20 via-cyber-purple/20 to-cyber-pink/20 rounded-lg border-2 border-cyber-cyan/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-noir-darker/30 backdrop-blur-sm"></div>
              <img 
                src="./images/profile_pic.jpg" 
                alt="Maheen Mashrur Hoque" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-noir-black/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyber-pink/50 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-cyber-purple/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
