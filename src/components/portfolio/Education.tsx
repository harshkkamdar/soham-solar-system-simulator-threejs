import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const education = [
  {
    degree: "Bachelor of Science in Physics",
    school: "Tech University",
    period: "2021 - Present",
    description: "Focus on Quantum Mechanics and Computational Physics. GPA: 3.92/4.0",
    achievements: [
      "Dean's List (All Semesters)",
      "Outstanding Junior Physics Student Award",
      "Quantum Computing Research Fellowship"
    ],
    relevantCourses: [
      "Advanced Quantum Mechanics",
      "Computational Physics",
      "Statistical Mechanics",
      "Electrodynamics",
      "Mathematical Methods in Physics"
    ]
  },
  {
    degree: "High School Diploma",
    school: "Science Academy",
    period: "2017 - 2021",
    description: "Advanced Placement in Physics, Mathematics, and Computer Science",
    achievements: [
      "Valedictorian",
      "Physics Olympiad State Finalist",
      "Research Project Award"
    ]
  }
];

const Education = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
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
                {edu.degree}
              </div>
              <div className="mb-2 text-orange-400">{edu.school}</div>
              <div className={`mb-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {edu.period}
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {edu.description}
              </p>
              {edu.achievements && (
                <div className="mt-4">
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Achievements
                  </h4>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.relevantCourses && (
                <div className="mt-4">
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-orange-500/20 text-orange-300 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;