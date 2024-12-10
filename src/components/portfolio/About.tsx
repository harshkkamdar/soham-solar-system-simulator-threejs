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
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          About Me
        </h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        >
          <p>
            I'm a high school student at JNIS IBDP with a strong passion for Physics and teaching. 
            I've demonstrated academic excellence through my IGCSE results, including A* grades in 
            Physics and Mathematics, and received the International Certificate of Education with Distinction.
          </p>
          <p>
            My academic journey is complemented by significant research experience, including 
            co-authoring a Physics research article on relativistic effects in damped harmonic 
            oscillators with Prof. Preet Sharma from Midwestern State University. This experience 
            has strengthened my investigative and scientific writing skills.
          </p>
          <p>
            Beyond academics, I'm deeply committed to community service and education, particularly 
            in teaching chess to underprivileged children and participating in health outreach 
            programs. I aspire to become a high school physics teacher, combining my passion for 
            physics with my dedication to education.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;