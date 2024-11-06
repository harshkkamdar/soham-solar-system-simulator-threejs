import { motion } from 'framer-motion';

const activities = [
  {
    title: "Physics Club President",
    organization: "University Physics Society",
    period: "2023 - Present",
    description: "Led weekly discussions on modern physics topics, organized stargazing events, and coordinated with faculty for guest lectures.",
    image: "/images/placeholder-physics-club.jpg"
  },
  {
    title: "Research Assistant",
    organization: "Quantum Computing Lab",
    period: "2022 - Present",
    description: "Assisted in quantum entanglement experiments and developed Python scripts for data analysis.",
    image: "/images/placeholder-quantum-lab.jpg"
  },
  {
    title: "Science Outreach Volunteer",
    organization: "Local Science Museum",
    period: "2022 - Present",
    description: "Conducted physics demonstrations for K-12 students and developed interactive exhibits.",
    image: "/images/placeholder-outreach.jpg"
  }
];

const Extracurricular = () => {
  return (
    <motion.section
      id="extracurricular"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Extracurricular Activities
        </h2>
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-orange-600"
            >
              <div className="absolute w-3 h-3 bg-orange-600 rounded-full -left-[6.5px] top-2" />
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="mb-1 text-xl font-semibold text-white dark:text-white">{activity.title}</div>
                  <div className="mb-2 text-orange-400 dark:text-orange-400">{activity.organization}</div>
                  <div className="mb-2 text-sm text-gray-400 dark:text-gray-400">{activity.period}</div>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </div>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Extracurricular;