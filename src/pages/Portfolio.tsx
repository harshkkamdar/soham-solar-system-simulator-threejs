import { motion } from 'framer-motion';
import Hero from '../components/portfolio/Hero';
import SolarSystemShowcase from '../components/portfolio/SolarSystemShowcase';
import About from '../components/portfolio/About';
import Experience from '../components/portfolio/Experience';
import Education from '../components/portfolio/Education';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Extracurricular from '../components/portfolio/ExtraCurricular';
import ParticlesBackground from '../components/portfolio/ParticlesBackground';
import NavBar from '../components/portfolio/NavBar';
import { useTheme } from '../contexts/ThemeContext';

function Portfolio() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : 'light'}`}>
      <ParticlesBackground />
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Hero />
        <SolarSystemShowcase />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Extracurricular />
        <Contact />
      </motion.div>
    </div>
  );
}

export default Portfolio;