import { Code, Database, BarChart3, Palette, Globe, Brain } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites using React.js, Vue.js, PHP, and Tailwind CSS. From concept to deployment.',
      technologies: ['React.js', 'Vue.js', 'PHP', 'Tailwind CSS', 'express.js', 'WordPress'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using Python, R, and advanced statistical methods.',
      technologies: ['Python', 'R', 'SQL', 'Statistics', 'Visualization'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Efficient database design, optimization, and management with SQL and PL/SQL expertise.',
      technologies: ['SQL', 'PL/SQL', 'Database Design', 'Performance Tuning'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for optimal user experience.',
      technologies: ['HTML/CSS', 'Design Tools', 'User Research', 'Prototyping'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Brain,
      title: 'AI & Innovation',
      description: 'Leveraging artificial intelligence and machine learning to solve complex problems and drive innovation.',
      technologies: ['Machine Learning', 'AI Integration', 'Innovation Strategy'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development solutions combining frontend excellence with robust backend architecture.',
      technologies: ['Frontend', 'Backend', 'APIs', 'DevOps'],
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-background to-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that bridge technology and innovation to drive your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card fade-in-up card-elegant group cursor-pointer"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;