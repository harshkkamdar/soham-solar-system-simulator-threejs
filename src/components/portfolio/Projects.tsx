import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Button } from "@nextui-org/react";
import EnhancedProjectModal from './EnhancedProjectModal';

const projects = [
  {
    title: "Collaborative Science Project",
    description: "A comprehensive community service initiative focusing on robotics, environmental science, and animal welfare.",
    longDescription: "Led a multifaceted project that included building an autonomous robot (FRAM), conducting plant growth experiments, and surveying local dog populations. The project emphasized cleanliness, hygiene, and community service while applying scientific principles to real-world problems.",
    tech: ["Robotics", "Environmental Science", "Data Analysis", "Community Service"],
    images: [
      {
        url: "/images/soham/scienceProject/1.jpg",
        caption: "FRAM Robot prototype"
      },
      {
        url: "/images/soham/scienceProject/2.jpg",
        caption: "Plant growth experiment setup"
      }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "Using the information on cow dung as a good fertilizer, we formed our hypothesis that dog faeces can be used for the same. We conducted extensive research and experiments to test this hypothesis while addressing community hygiene issues."
      },
      {
        title: "FRAM Robot Development",
        content: "We built an autonomous robot (FRAM) to help gather faeces samples safely and efficiently. The robot was designed to navigate urban environments and collect samples for our research.",
        link: "/images/soham/scienceProject/FRAM.pdf"
      }
    ]
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Projects with Impact
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors`}>
                <CardBody className="space-y-6">
                  <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex pt-4">
                    {project.title === "Interactive Solar System" ? (
                      <Button
                        color="warning"
                        variant="ghost"
                        onClick={() => scrollToSection('solar-system-showcase')}
                      >
                        Learn More
                      </Button>
                    ) : (
                      <Button
                        color="warning"
                        variant="ghost"
                        onPress={() => setSelectedProject(project)}
                      >
                        View Details
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
        <EnhancedProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={{
            title: selectedProject.title,
            longDescription: selectedProject.longDescription,
            tech: selectedProject.tech,
            images: selectedProject.images || [],
            sections: selectedProject.sections || []
          }}
        />
      )}
    </motion.section>
  );
};

export default Projects;