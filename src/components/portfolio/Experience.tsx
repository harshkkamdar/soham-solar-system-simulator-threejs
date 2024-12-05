import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Link } from "@nextui-org/react";

const experiences = [
  // {
  //   title: "Research Co-author",
  //   organization: "Midwestern State University, Physics Dept & JNIS",
  //   period: "2023",
  //   description: "Preliminary study on relativistic effects on damped harmonic oscillators",
  //   details: [
  //     "Co-authored research paper on relativistic damped harmonic oscillators",
  //     "Developed compact equations for complex physical systems",
  //     "Collaborated with international researchers"
  //   ],
  //   link: "https://rxiv.org/pdf/2409.0113v1.pdf"
  // },
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
    link: "https://www.hindmotors.com/"
  }
  // {
  //   title: "Crisis Event Organizer",
  //   organization: "International Youth Conference (JNIS)",
  //   period: "2022",
  //   description: "Managed logistics for international delegates",
  //   details: [
  //     "Coordinated with international participants",
  //     "Organized crisis simulation events",
  //     "Developed leadership and management skills"
  //   ]
  // }
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
                  {exp.link && (
                    <Link 
                      href={exp.link} 
                      className="text-orange-400 hover:text-orange-300"
                      isExternal
                    >
                      Learn More →
                    </Link>
                  )}
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