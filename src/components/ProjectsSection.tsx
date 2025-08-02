import { ExternalLink, Github, Smartphone, Monitor, Brain } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projects = entry.target.querySelectorAll('.project-card');
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add('animate');
              }, index * 300);
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

  const projects = [
    {
      title: 'Medical Management App',
      description: 'PFE Project: A comprehensive mobile application designed to streamline daily operations in medical cabinets. Features patient management, appointment scheduling, and medical records organization.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Mobile Development', 'Healthcare', 'Database', 'UI/UX'],
      type: 'Featured Project',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence, featuring real-time data visualization, trend analysis, and predictive modeling capabilities.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'R', 'Data Visualization', 'Statistics'],
      type: 'Analytics Project',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Collection of AI experiments and implementations, including machine learning models, natural language processing, and innovative AI integrations.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      technologies: ['Machine Learning', 'AI', 'Python', 'Innovation'],
      type: 'AI Experiments',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card fade-in-up group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional projects note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects? Let's connect and discuss my complete portfolio.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;