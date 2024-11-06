import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"
        >
          Soham Mehta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}
        >
          Physics Student & Aspiring Quantum Computing Researcher
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
          >
            Download Resume
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-orange-600 rounded-full hover:bg-orange-600/10 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;