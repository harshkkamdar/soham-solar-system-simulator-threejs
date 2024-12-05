import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody } from "@nextui-org/react";

const activities = [
  {
    title: "Voluntary Chess Teacher",
    organization: "Sant Kirpal Singh Mission Ashram",
    period: "2022 - Present",
    description: "Conducted chess program for 22 underprivileged children, enhancing their strategic thinking skills.",
    achievements: [
      "Developed comprehensive chess curriculum",
      "Improved students' problem-solving abilities",
      "Organized monthly tournaments"
    ]
  },
  {
    title: "Health Outreach Volunteer",
    organization: "Shrimad Rajchandra Mission, Dharampur",
    period: "2023",
    description: "Assisted medical teams in tribal villages for six weeks, providing primary health check-ups.",
    achievements: [
      "Supported healthcare delivery to remote areas",
      "Helped organize medical camps",
      "Coordinated with local communities"
    ]
  },
  {
    title: "Cultural Performance Lead",
    organization: "School Theater Production",
    period: "2022",
    description: "Played the lead role as 'Beast' in Beauty and the Beast production.",
    achievements: [
      "Led ensemble cast of 30 performers",
      "Contributed to production planning",
      "Enhanced team collaboration skills"
    ]
  },
  {
    title: "Martial Arts Practitioner",
    organization: "Nippon Budo Sogo International India",
    period: "2020 - Present",
    description: "Golden Brown Belt holder, currently pursuing black belt while training others.",
    achievements: [
      "Assists in training 30 white belt students",
      "Participates in regional competitions",
      "Promotes discipline and physical fitness"
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