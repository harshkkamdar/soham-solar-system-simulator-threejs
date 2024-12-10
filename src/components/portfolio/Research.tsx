import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardBody, Button } from "@nextui-org/react";

const Research = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="research"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-26"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Research
        </h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className={`${theme === 'dark' ? 'bg-black/40' : 'bg-white'} border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors`}>
            <CardBody className="space-y-6">
              <div className="space-y-4">
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Co-authored Physics Research Article
                </h3>
                <p className="text-yellow-500 text-lg">
                  Midwestern State University, Physics Dept & JNIS
                </p>
                <h4 className={`text-xl font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  Relativistic Effects on a Damped Harmonic Oscillator
                </h4>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Attempted to study the damped harmonic oscillator and apply relativistic effects to it. 
                  In the preliminary study, we have expressed a compact equation that demonstrates these effects.
                </p>
                <div className="pt-6">
                  <Button
                    as="a"
                    href="https://rxiv.org/pdf/2409.0113v1.pdf"
                    target="_blank"
                    color="warning" 
                    variant="ghost"
                  >
                    View Research Paper
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Research; 