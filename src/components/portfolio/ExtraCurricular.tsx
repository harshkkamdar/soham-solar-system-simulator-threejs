import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Button } from "@nextui-org/react";
import EnhancedProjectModal from './EnhancedProjectModal';

const communityService = [
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
    ],
    images: [
      {
        url: "/images/soham/healthOutreach/1.jpeg",
        caption: "Providing healthcare services in tribal villages"
      },
      {
        url: "/images/soham/healthOutreach/2.jpg",
        caption: "Medical camp setup and coordination"
      }
    ]
  }
];
const sports_culture =[
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
];
const current_affairs = [
  {
    title: "MUN Crisis Department Lead",
    organization: "International Youth Conference",
    period: " ",
    description: "Organiser & part of the Leadership Team of Crisis Department for pan-India MUN with 290+ delegates.",
    achievements: [
      "Led Crisis Dept. for India conference",
      "Sole organizer for night crisis event",
      "Managed 15-delegate crisis sim",
      "Coordinated 290+ delegates"
    ]
  },
  {
    title: "Yemen Crisis Committee Delegate",
    organization: "International Youth Conference",
    period: " ",
    description: "Represented Turkiye in Yemen Civil War committee, focusing on diplomatic solutions and international relations.",
    achievements: [
      "Co-authored winning resolution",
      "Researched Yemen civil war history",
      "Analyzed Turkiye's diplomatic stance",
      "Enhanced collaborative skills"
    ]
  },
  {
    title: "Nigeria Cryptocurrency Delegate",
    organization: "International Youth Conference",
    period: " ",
    description: "Represented Nigeria in cryptocurrency policy negotiations, earning verbal mention for performance.",
    achievements: [
      "Earned verbal mention at awards",
      "Studied Nigerian crypto regulations",
      "Researched crypto policies",
      "Honed speaking + negotiation skills"
    ]
  }
];

const Extracurricular = () => {
  const { theme } = useTheme();
  const [selectedActivity, setSelectedActivity] = useState<(typeof communityService)[0] | null>(null);
  const [showMUNModal, setShowMUNModal] = useState(false);

  const renderActivities = (items: typeof communityService, title: string) => (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          {title}
        </h3>
        {title === "Geopolitical Affairs" && (
          <Button 
            color="warning"
            variant="ghost"
            onPress={() => setShowMUNModal(true)}
          >
            View MUN Photos
          </Button>
        )}
      </div>
      <div className={`grid grid-cols-1 ${title === "Geopolitical Affairs" ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
        {items.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors h-full`}>
              <CardBody className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {activity.title}
                    </h3>
                    <p className="text-yellow-500 text-lg">{activity.organization}</p>
                  </div>
                  <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {activity.period}
                  </span>
                </div>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {activity.description}
                </p>
                <div className="space-y-4">
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {activity.achievements.map((achievement, i) => (
                      <li key={i} className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                {(activity.images || activity.images) && (
                  <Button 
                    color="warning"
                    variant="ghost"
                    onPress={() => setSelectedActivity(activity)}
                  >
                    View Photos
                  </Button>
                )}
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      id="extracurricular"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Beyond Academics
        </h2>
        
        {renderActivities(communityService, "Community Service")}
        {renderActivities(sports_culture, "Sports & Culture")}
        {renderActivities(current_affairs, "Geopolitical Affairs")}
      </div>

      {selectedActivity && selectedActivity.images && (
        <EnhancedProjectModal
          isOpen={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
          project={{
            title: selectedActivity.title,
            longDescription: selectedActivity.description,
            tech: selectedActivity.achievements,
            images: selectedActivity.images,
            sections: [
              {
                title: "About the Activity",
                content: selectedActivity.description,
              },
              {
                title: "Impact",
                content: selectedActivity.achievements.join(". ")
              }
            ]
          }}
        />
      )}

      <EnhancedProjectModal
        isOpen={showMUNModal}
        onClose={() => setShowMUNModal(false)}
        project={{
          title: "MUN Conference",
          longDescription: "Model United Nations Conference Leadership",
          tech: [],
          images: [{
            url: "public/images/soham/mun/1.JPG",
            caption: "MUN Conference Leadership"
          }],
          sections: []
        }}
      />
    </motion.section>
  );
};

export default Extracurricular;