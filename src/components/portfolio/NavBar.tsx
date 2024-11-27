import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";
import { useTheme } from '../../contexts/ThemeContext';
// import { IconSun, IconMoon } from '@tabler/icons-react';

const NavBar = () => {
  const { theme } = useTheme();
//   const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-300/20'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-xl font-bold ${theme === 'dark' ? 'text-white hover:text-orange-400' : 'text-black hover:text-orange-600'} transition-colors`}
        >
        SM
        </Link>
        <div className="flex items-center gap-6">
          {['about', 'experience', 'projects', 'extracurricular', 'contact'].map((section) => (
            <Button
              key={section}
              variant="light"
              className={`capitalize ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </Button>
          ))}
          {/* <Link to="/solar-system">
            <Button
              variant="light"
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            >
              Solar System
            </Button>
          </Link> */}
          {/* <Button
            isIconOnly
            variant="light"
            onClick={toggleTheme}
            className="ml-4"
          >
            {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
          </Button> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;