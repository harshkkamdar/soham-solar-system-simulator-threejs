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
            I'm a third-year Physics major at Tech University with a focus on Quantum Mechanics and 
            Computational Physics. My passion lies in understanding the fundamental laws of the universe 
            and applying computational methods to solve complex physical problems.
          </p>
          <p>
            Through my coursework and research experiences, I've developed a strong foundation in both 
            theoretical physics and programming. I'm particularly interested in quantum computing and its 
            potential applications in solving complex physical systems.
          </p>
          <p>
            When I'm not studying or conducting research, I enjoy participating in physics outreach 
            programs and helping younger students discover the wonders of science through hands-on 
            demonstrations and experiments.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;