import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody } from "@nextui-org/react";

const activities = [
  {
    title: "Chess Program Lead",
    organization: "Sant Kirpal Singh Mission Ashram",
    period: "2022 - Present",
    description: "Founded and led a comprehensive chess program for underprivileged children, focusing on strategic thinking and cognitive development.",
    achievements: [
      "Developed structured chess curriculum from basics to intermediate tactics",
      "Organized regular tournaments to track progress",
      "Improved students' problem-solving and analytical skills",
      "Received positive feedback from ashram management"
    ]
  },
  {
    title: "Chess Instructor",
    organization: "Khel Katha - Each One Teach One",
    period: "2023",
    description: "Volunteered to teach chess to underprivileged children at a government-run school.",
    achievements: [
      "Introduced basic chess concepts and strategies",
      "Helped develop critical thinking skills",
      "Created engaging learning materials",
      "Fostered enthusiasm for the game"
    ]
  },
  {
    title: "Health Outreach Volunteer",
    organization: "Shrimad Rajchandra Mission, Dharampur",
    period: "2023",
    description: "Assisted medical teams in tribal villages, providing primary health check-ups.",
    achievements: [
      "Supported healthcare delivery to remote areas",
      "Helped organize medical camps",
      "Coordinated with local communities",
      "Managed health data documentation"
    ]
  },
  {
    title: "Cultural Performance Lead",
    organization: "JNIS School Productions",
    period: "2022 - 2023",
    description: "Led major roles in school theatrical productions, including Beast in Beauty and the Beast and Hagrid in Harry Potter.",
    achievements: [
      "Led ensemble casts of 30+ performers",
      "Contributed to script writing and production planning",
      "Helped with auditions and rehearsal organization",
      "Enhanced team collaboration skills"
    ]
  },
  {
    title: "EU MIND Exchange Program Participant",
    organization: "JNIS International Collaborations",
    period: "2020",
    description: "Participated in virtual cultural exchange program with students from the Netherlands.",
    achievements: [
      "Engaged in cross-cultural dialogue",
      "Shared insights about Indian culture and traditions",
      "Developed international communication skills",
      "Gained perspective on Dutch culture and society"
    ]
  },
  {
    title: "International Youth Conference Delegate",
    organization: "JNIS Model United Nations",
    period: "2021 - 2023",
    description: "Participated in and organized multiple MUN conferences, representing various countries and roles.",
    achievements: [
      "Led Crisis Department for pan-India conference",
      "Represented Turkiye in Yemen Civil War committee",
      "Earned verbal mention for Nigeria cryptocurrency policy debate",
      "Developed research and diplomatic skills"
    ]
  },
  {
    title: "Martial Arts Practitioner",
    organization: "Nippon Budo Sogo International India",
    period: "2020 - Present",
    description: "Golden Brown Belt holder in Karate, pursuing black belt while mentoring junior students.",
    achievements: [
      "Assists in training white belt students",
      "Participates in regional competitions",
      "Demonstrates discipline and dedication",
      "Helps organize training camps"
    ]
  }
];

const Extracurricular = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="extracurricular"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Beyond Academics
        </h2>
        <div className="grid gap-8">
          {activities.map((activity, index) => (
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
                        {activity.title}
                      </h3>
                      <p className="text-orange-400">{activity.organization}</p>
                    </div>
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {activity.period}
                    </span>
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {activity.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside">
                      {activity.achievements.map((achievement, i) => (
                        <li key={i} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {achievement}
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

export default Extracurricular;