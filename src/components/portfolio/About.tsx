import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className={`space-y-6 md:w-2/3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            <p className="text-lg">
              I'm a high school student at JNIS IBDP with a strong passion for Physics and mathematics.
              I've demonstrated academic excellence through my IGCSE results and received the
              International Certificate of Education with Distinction
            </p>
            <p className="text-lg">
              My academic journey is complemented by significant research experience, including
              co-authoring a Physics research article on relativistic effects in damped harmonic
              oscillators with Prof. Preet Sharma from Midwestern State University. This experience
              has strengthened my investigative and scientific writing skills.
            </p>
            <p className="text-lg">
              When I'm not studying or conducting research, I enjoy playing & teaching Chess.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <img
              src="/images/soham/about.jpeg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;