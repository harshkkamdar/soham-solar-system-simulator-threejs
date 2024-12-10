import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody } from "@nextui-org/react";

const experiences = [
  {
    title: "Research Co-author",
    organization: "Midwestern State University, Physics Dept & JNIS",
    period: "2023",
    description: "Co-authored research on relativistic effects in damped harmonic oscillators",
    details: [
      "Conducted research under Prof. Preet Sharma's guidance",
      "Developed compact modeling equations for complex physical systems",
      "Enhanced investigative and scientific writing skills",
      "Established foundation for further exploration in the field"
    ]
  },
  {
    title: "Crisis Event Organizer",
    organization: "International Youth Conference (JNIS)",
    period: "2023",
    description: "Led Crisis Department for pan-India MUN with 290+ delegates",
    details: [
      "Organized night crisis event for top 15 delegates",
      "Managed logistics and event planning",
      "Demonstrated leadership and organizational skills",
      "Coordinated with international participants"
    ]
  },
  {
    title: "Python & C++ Programming",
    organization: "ICAD Academy, Mumbai",
    period: "2021",
    description: "Completed intermediate level programming courses",
    details: [
      "Developed problem-solving skills",
      "Learned to break down complex problems",
      "Applied programming concepts to real-world scenarios",
      "Enhanced logical thinking abilities"
    ]
  }
];

const Experience = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Professional Experience
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
              <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-orange-500/20`}>
                <CardBody>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {exp.title}
                      </h3>
                      <p className="text-orange-400">{exp.organization}</p>
                    </div>
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
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
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;