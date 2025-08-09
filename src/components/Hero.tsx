import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { Download } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Web Developer",
    "Data Analyst", 
    "AI Enthusiast",
    "Innovative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 120, 212, 0.9), rgba(0, 120, 212, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-hero">
            Hi, I'm{' '}
            <span className="text-primary-light block mt-2">
              Nezha AIT EL HAD
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-white/90 mb-4 h-16 flex items-center justify-center">
            <span className="typewriter font-semibold text-primary-light">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            From Data to Impact. From Passion to Profession.
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Rigorous and fast learner, passionate about data and innovation.
          </p>

          <div className="flex justify-center items-center gap-4 mt-8">
          <Button onClick={scrollToContact}
            className="bg-gradient-to-r from-emerald-400 to-sky-400  text-primary hover:bg-primary-light hover:text-white text-lg px-8 py-6 rounded-full hero-glow transition-bounce transform hover:scale-105"
          >
            Contact Me
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button  
            className="bg-gradient-to-r from-emerald-400 to-sky-400 text-primary hover:bg-primary-light hover:text-white text-lg px-8 py-6 rounded-full hero-glow transition-bounce transform hover:scale-105"
            onClick={() => window.open('https://www.canva.com/design/DAGvCxTVdCE/ij9obKzOV7uC-SB_IcIKOA/view', '_blank')}>
              View CV
           <Download className="ml-2 h-5 w-5" />
          </Button>
            </div>	
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-45 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;