// src/pages/ProjectDetails.jsx

import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';


const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Projet non trouvé</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img
        src={project.image}
        alt={project.title}
        className=" h-[450px] w-[500px] object-cover rounded-2xl shadow-lg mb-5"
      />
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>

      <div className="mb-4">
        <strong>Type :</strong> {project.type}
      </div>

      <div className="mb-4">
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Tech Stack:</strong>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
          {project.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
