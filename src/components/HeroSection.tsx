import TypewriterText from './TypewriterText';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const roles = ['Web Developer', 'Data Analyst', 'AI Enthusiast', 'Innovative Thinker'];

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
        background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <div className="mb-2">Hi, I'm</div>
          <div className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Nezha AIT EL HAD
          </div>
        </h1>

        {/* Animated role */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
          <TypewriterText words={roles} />
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 opacity-90">
          From Data to Impact. From Passion to Profession.
        </p>

        {/* Bio */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-12 opacity-80 max-w-3xl mx-auto">
          Rigorous and fast learner, passionate about data and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-[var(--shadow-glow)] transform hover:scale-105 transition-all duration-300 ease-out"
          >
            Contact Me
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-300 ease-out"
          >
            View My Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;