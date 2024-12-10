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
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
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
              <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors`}>
                <CardBody className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {edu.school}
                    </h3>
                    <span className="text-yellow-500 text-lg">{edu.period}</span>
                  </div>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
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