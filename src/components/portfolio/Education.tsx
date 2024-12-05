import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody } from "@nextui-org/react";

const education = [
  {
    school: "JNIS IBDP",
    period: "2023 - 2025",
    description: "Pursuing the International Baccalaureate Diploma Programme (IBDP)",
    highlights: [
      "Focus on real-life problem-solving",
      "Global university recognition",
      "Advanced coursework in Physics and Mathematics"
    ]
  },
  {
    school: "Jamnabai Narsee International School",
    period: "2020 - 2023",
    description: "Completed the IGCSE curriculum of Cambridge, UK",
    highlights: [
      "Accessed excellent resources and training",
      "Enriching academic environment",
      "Strong foundation in sciences"
    ]
  },
  {
    school: "Jamnabai Narsee School",
    period: "2016 - 2020",
    description: "Studied under the ICSE curriculum focused on balanced education",
    highlights: [
      "Diverse subject offerings",
      "Preparation for higher studies",
      "Strong academic foundation"
    ]
  },
  {
    school: "Besant Montessorie School",
    period: "2010 - 2016",
    description: "Founded on Theosophical educational concepts",
    highlights: [
      "Montessori method of education",
      "Focus on creativity and critical thinking",
      "Self-directed learning approach"
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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Academic Journey
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
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
                    <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {edu.school}
                    </h3>
                    <span className="text-orange-400">{edu.period}</span>
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {highlight}
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

export default Education;