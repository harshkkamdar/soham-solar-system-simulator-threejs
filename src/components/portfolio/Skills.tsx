import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const skills = [
  {
    category: "Physics",
    items: [
      "Quantum Mechanics",
      "Statistical Physics",
      "Electromagnetism",
      "Classical Mechanics",
      "Thermodynamics"
    ],
  },
  {
    category: "Programming & Computing",
    items: [
      "Python",
      "MATLAB",
      "C++",
      "LaTeX",
      "Linux",
      "Git"
    ],
  },
  {
    category: "Research Tools",
    items: [
      "Qiskit",
      "NumPy/SciPy",
      "Mathematica",
      "Data Analysis",
      "Lab Equipment"
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Research Methods",
      "Technical Writing",
      "Problem Solving",
      "Public Speaking",
      "Team Leadership"
    ],
  }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-200'}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-400">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;