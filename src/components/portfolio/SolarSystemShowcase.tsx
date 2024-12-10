import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";

const SolarSystemShowcase = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="solar-system-showcase"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src="public/images/soham/solar.png"
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
            <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Interactive Solar System
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              An immersive 3D simulation of our solar system built with Three.js and React. 
              Features accurate planetary motions, detailed information about each celestial body, 
              and interactive camera controls.
            </p>
            <ul className="space-y-3 text-sm">
              {['Real-time 3D rendering with Three.js', 
                'Accurate planetary orbits and rotations',
                'Interactive camera controls and planet information',
                'Responsive design with NextUI components'].map((item, index) => (
                <li key={index} className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  • {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <Button
                as={Link}
                to="/solar-system"
                color="warning"
                className="px-6 py-3 bg-orange-500 text-gray-200 hover:bg-orange-600 transition-colors"
              >
                Launch Simulator
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SolarSystemShowcase; 