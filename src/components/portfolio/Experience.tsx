import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Quantum Computing Research Lab",
    period: "2023 - Present",
    description: "Working on quantum algorithm optimization and implementation using Qiskit. Developing Python scripts for quantum state analysis.",
  },
  {
    title: "Teaching Assistant - Physics Department",
    company: "Tech University",
    period: "2022 - Present",
    description: "Leading laboratory sessions for introductory physics courses. Creating and grading assignments, providing one-on-one tutoring.",
  },
  {
    title: "Summer Research Intern",
    company: "National Physics Laboratory",
    period: "Summer 2022",
    description: "Participated in experimental physics research, focusing on particle detection methods. Developed data analysis tools using Python.",
  },
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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-orange-600"
            >
              <div className="absolute w-3 h-3 bg-orange-600 rounded-full -left-[6.5px] top-2" />
              <div className={`mb-1 text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {exp.title}
              </div>
              <div className="mb-2 text-orange-400">{exp.company}</div>
              <div className={`mb-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {exp.period}
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;