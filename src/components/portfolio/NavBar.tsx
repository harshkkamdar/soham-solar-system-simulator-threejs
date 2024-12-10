import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";
import { useTheme } from '../../contexts/ThemeContext';
// import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';

const NavBar = () => {
  const { theme } = useTheme();
  //   const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
        </button>

        <div className="hidden lg:flex items-center gap-6">
        <Button
            variant="light"
            className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            onClick={() => scrollToSection('solar-system-showcase')}
          >
            Solar System
          </Button>
          {['about', 'research', 'experience', 'projects', 'education', 'extracurricular', 'contact'].map((section) => (
            <Button
              key={section}
              variant="light"
              className={`capitalize ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </Button>
          ))}

          {/* <Button
            isIconOnly
            variant="light"
            onClick={toggleTheme}
            className="ml-4"
          >
            {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
          </Button> */}
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 p-4 flex flex-col gap-2 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/90'} bg-black/90 backdrop-blur-sm">
            <Button
              variant="light"
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
              onClick={() => {
                scrollToSection('solar-system-showcase');
                setIsMenuOpen(false);
              }}
            >
              Solar System
            </Button>
            {['about', 'research', 'experience', 'projects', 'education', 'extracurricular', 'contact'].map((section) => (
              <Button
                key={section}
                variant="light"
                className={`capitalize ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
              >
                {section}
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;