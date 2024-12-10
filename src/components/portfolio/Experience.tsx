import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Button } from "@nextui-org/react";
import EnhancedProjectModal from './EnhancedProjectModal';

const experiences = [
  {
    title: "Intern",
    organization: "Hindustan Electric Motors",
    period: "2023",
    description: "Worked on electric motor optimization and development",
    details: [
      "Led motor optimization project",
      "Received management appreciation",
      "Gained hands-on industry experience"
    ],
    link: "https://www.hindmotors.com/",
    images: [
      {
        url: "public/images/soham/Internship/1.jpg",
        caption: "Working on motor optimization"
      }
    ],
    sections: [
      {
        title: "Project Overview",
        content: "Led a significant motor optimization project at Hindustan Electric Motors, focusing on improving efficiency and performance."
      },
      {
        title: "Key Responsibilities",
        content: "Managed technical analysis, conducted performance testing, and collaborated with senior engineers on optimization strategies."
      }
    ]
  }
];

const Experience = () => {
  const { theme } = useTheme();
  const [selectedExp, setSelectedExp] = useState<(typeof experiences)[0] | null>(null);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Internship Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors`}>
                <CardBody className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {exp.title}
                      </h3>
                      <p className="text-yellow-500 text-lg">{exp.organization}</p>
                    </div>
                    <span className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    <Button 
                      color="warning" 
                      variant="ghost" 
                      onPress={() => setSelectedExp(exp)}
                    >
                      View Details
                    </Button>
                    {/* {exp.link && (
                      <Link 
                        href={exp.link} 
                        className="text-orange-400 hover:text-orange-300"
                        isExternal
                      >
                        Learn More →
                      </Link>
                    )} */}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedExp && (
        <EnhancedProjectModal
          isOpen={!!selectedExp}
          onClose={() => setSelectedExp(null)}
          project={{
            title: selectedExp.title,
            longDescription: selectedExp.description,
            tech: selectedExp.details,
            images: selectedExp.images,
            sections: selectedExp.sections
          }}
        />
      )}
    </motion.section>
  );
};

export default Experience;