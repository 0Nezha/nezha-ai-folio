// src/pages/AllProjects.jsx
import { ExternalLink} from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // AJOUT ICI ✅


const AllProjects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">All Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            <div className="flex gap-3">
                 <Link to={`/projects/${project.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  </Link>
                  <Button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
