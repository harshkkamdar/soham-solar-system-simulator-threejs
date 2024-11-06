import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const SolarSystemShowcase = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="solar-system-showcase"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src="/images/solar-system-preview.jpg"
              alt="Solar System Simulator Preview"
              className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className={`absolute inset-0 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-white/50 to-transparent'}`} />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Interactive Solar System
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              An immersive 3D simulation of our solar system built with Three.js and React. 
              Features accurate planetary motions, detailed information about each celestial body, 
              and interactive camera controls.
            </p>
            <ul className="space-y-3 text-sm">
              <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                • Real-time 3D rendering with Three.js
              </li>
              <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                • Accurate planetary orbits and rotations
              </li>
              <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                • Interactive camera controls and planet information
              </li>
              <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                • Responsive design with NextUI components
              </li>
            </ul>
            <div className="flex gap-4 pt-4">
              <Link 
                to="/solar-system"
                className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors inline-flex items-center"
              >
                Launch Simulator
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SolarSystemShowcase; 