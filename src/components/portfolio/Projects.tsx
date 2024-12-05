import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Button } from "@nextui-org/react";
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Collaborative Science Project",
    description: "A comprehensive community service initiative focusing on robotics, environmental science, and animal welfare.",
    longDescription: "Led a multifaceted project that included building an autonomous robot (FRAM), conducting plant growth experiments, and surveying local dog populations. The project emphasized cleanliness, hygiene, and community service while applying scientific principles to real-world problems.",
    tech: ["Robotics", "Environmental Science", "Data Analysis", "Community Service"],
    link: "https://drive.google.com/drive/folders/1-lPUPczIbSy6cpK2EJStY_WcogWGDbp8?usp=share_link"
  },
  {
    title: "Interactive Solar System",
    description: "A real-time 3D visualization of our solar system with accurate orbital mechanics.",
    longDescription: "Developed a comprehensive solar system simulation using Three.js and React. Features include accurate planetary orbits, detailed celestial body information, and interactive camera controls. The project demonstrates both technical expertise and scientific accuracy.",
    tech: ["Three.js", "React", "TypeScript", "Physics Simulation"],
    link: "/solar-system"
  },
  {
    title: "Chess Training Program",
    description: "Developed and implemented a chess training curriculum for underprivileged children.",
    longDescription: "Created and conducted a structured chess program at Sant Kirpal Singh Mission Ashram, teaching 22 underprivileged children. The program focused on developing strategic thinking, problem-solving skills, and concentration through the game of chess.",
    tech: ["Education", "Strategy", "Curriculum Development", "Mentoring"],
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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Projects with Impact
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-orange-500/20`}>
                <CardBody>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
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
                  <div className="flex gap-4">
                    <Button
                      color="warning"
                      variant="ghost"
                      onClick={() => setSelectedProject(project)}
                    >
                      Learn More
                    </Button>
                    {project.link && (
                      <Button
                        color="warning"
                        variant="flat"
                        as="a"
                        href={project.link}
                        target={project.link.startsWith('http') ? "_blank" : "_self"}
                      >
                        View Project
                      </Button>
                    )}
                  </div>
                </CardBody>
              </Card>
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