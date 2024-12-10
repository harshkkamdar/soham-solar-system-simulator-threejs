import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          Contact
        </h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`${theme === 'dark' ? 'bg-yellow-900/20' : 'bg-yellow-50'} p-8 rounded-lg border ${theme === 'dark' ? 'border-yellow-500/20' : 'border-yellow-200'}`}
        >
          <p className={theme === 'dark' ? 'text-gray-300 mb-6' : 'text-gray-600 mb-6'}>
            I'm always excited to discuss physics, quantum computing, or potential research opportunities. 
            Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Email</h3>
              <a 
                href="mailto:soham.mehta000@gmail.com" 
                className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              >
                soham.mehta000@gmail.com
              </a>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Academic Office</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Physics Building, Room 301<br />
                Tech University<br />
                Science Campus
              </p>
            </div> */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Professional Profiles</h3>
              <div className="flex gap-4">
                {/* <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  ResearchGate
                </a> */}
                <a 
                  href="mailto:soham.mehta000@gmail.com" 
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  Email
                </a>
                <a 
                  href="http://linkedin.com/in/soham-mehta-2766902a3" 
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;