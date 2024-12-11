import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
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
          className="text-5xl md:text-7xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
        >
          Soham Mehta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}
        >
          Physics Student & Aspiring Researcher
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <button 
            onClick={() => scrollToSection('about')} 
            className="px-6 py-3 bg-orange-500 text-gray-200 rounded-full hover:bg-orange-600 transition-colors"
          >
            Know More
          </button>
          <button 
            onClick={() => scrollToSection('solar-system-showcase')} 
            className="px-6 py-3 border border-orange-500 rounded-full hover:bg-orange-600/10 transition-colors"
          >
            Solar System Simulator
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;