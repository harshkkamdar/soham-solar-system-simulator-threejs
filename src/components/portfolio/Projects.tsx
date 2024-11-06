import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Quantum Circuit Simulator",
    description: "A web-based quantum circuit simulator for educational purposes.",
    longDescription: "Developed a comprehensive quantum circuit simulator that allows students to design and test quantum algorithms. Features include drag-and-drop circuit building, state visualization, and interactive tutorials on quantum computing concepts.",
    tech: ["Python", "Qiskit", "React", "TypeScript"],
    images: ["/images/placeholder-quantum-sim-1.jpg", "/images/placeholder-quantum-sim-2.jpg"],
    link: "#"
  },
  {
    title: "Physics Lab Data Analysis Tool",
    description: "Automated data analysis software for undergraduate physics experiments.",
    longDescription: "Created a tool that streamlines the process of analyzing and visualizing data from common undergraduate physics experiments. Includes error propagation, curve fitting, and automated report generation.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas"],
    images: ["/images/placeholder-data-analysis-1.jpg", "/images/placeholder-data-analysis-2.jpg"],
    link: "#"
  },
  {
    title: "Particle Physics Visualization",
    description: "3D visualization of particle collision data from CERN experiments.",
    longDescription: "Interactive 3D visualization tool for particle physics data, allowing users to explore and understand particle collision events from CERN experiments. Features include time evolution, particle tracking, and energy distribution analysis.",
    tech: ["Three.js", "React", "WebGL", "Python"],
    images: ["/images/placeholder-particle-vis-1.jpg", "/images/placeholder-particle-vis-2.jpg"],
    link: "#"
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-200'} hover:border-orange-500/40 transition-colors cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <span className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </span>
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300 mb-4' : 'text-gray-600 mb-4'}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-orange-500/20 text-orange-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="text-orange-400 hover:text-orange-300 transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </motion.section>
  );
};

export default Projects;