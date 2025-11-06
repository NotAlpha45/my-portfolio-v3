import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import HighlightedProject from './components/HighlightedProject';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'project', label: 'PROJECT' },
    { id: 'publications', label: 'RESEARCH' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'hobbies', label: 'HOBBIES' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-noir-black text-cyber-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-black/80 backdrop-blur-md border-b border-cyber-cyan/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold font-mono">
              <span className="text-cyber-cyan">&lt;</span>
              <span className="text-cyber-white">Portfolio</span>
              <span className="text-cyber-pink">/&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyber-cyan border-b-2 border-cyber-cyan'
                      : 'text-cyber-gray hover:text-cyber-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-cyber-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
        
        <div className="relative z-10 text-center">
          <div className="mb-6 flex justify-center gap-2">
            <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-cyber-pink rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-cyber-purple rounded-full animate-pulse delay-200"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glitch-effect">
            <span className="text-cyber-cyan">YOUR</span>
            <br />
            <span className="text-cyber-white">NAME</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-cyber-purple mb-8 font-mono">
            <span className="text-cyber-pink">&gt;</span> Full Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-cyber-gray max-w-2xl mx-auto mb-12">
            Crafting immersive digital experiences at the intersection of 
            <span className="text-cyber-cyan"> technology</span> and 
            <span className="text-cyber-pink"> creativity</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('project')}
              className="px-8 py-3 bg-cyber-cyan text-noir-black font-bold rounded font-mono hover:bg-transparent hover:text-cyber-cyan border-2 border-cyber-cyan transition-all duration-300"
            >
              VIEW WORK
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-transparent text-cyber-pink font-bold rounded font-mono border-2 border-cyber-pink hover:bg-cyber-pink hover:text-noir-black transition-all duration-300"
            >
              ABOUT ME
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-cyan transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-cyan transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-cyan transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <AboutMe />
      <Skills />
      <HighlightedProject />
      <Publications />
      <Experience />
      <Hobbies />

      {/* Footer */}
      <footer className="bg-noir-darker border-t border-cyber-cyan/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-cyber-cyan font-mono font-bold mb-4">CONTACT</h3>
              <div className="space-y-2 text-cyber-gray">
                <p>email@example.com</p>
                <p>+1 (123) 456-7890</p>
                <p>Location, Country</p>
              </div>
            </div>
            <div>
              <h3 className="text-cyber-purple font-mono font-bold mb-4">QUICK LINKS</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-cyber-gray hover:text-cyber-purple transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-cyber-pink font-mono font-bold mb-4">CONNECT</h3>
              <div className="flex gap-4">
                <a href="#" className="text-cyber-gray hover:text-cyber-pink transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-cyber-gray hover:text-cyber-pink transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyber-cyan/20 pt-8 text-center">
            <p className="text-cyber-gray font-mono">
              <span className="text-cyber-cyan">&lt;</span>
              Designed & Built with 
              <span className="text-cyber-pink"> ❤ </span>
              by Your Name
              <span className="text-cyber-cyan">/&gt;</span>
            </p>
            <p className="text-cyber-gray text-sm mt-2">© 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
