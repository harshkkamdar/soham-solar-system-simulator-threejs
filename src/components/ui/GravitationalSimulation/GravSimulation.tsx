import React from 'react';
import { motion } from 'framer-motion';
import { PlanetData } from '../../../../types';
import ForceEquation from './ForceEquation';
import SimulationCanvas from './SimulationCanvas';
import { Accordion, AccordionItem } from "@nextui-org/react";

interface GravSimulationProps {
  planet: PlanetData;
}

const GravSimulation: React.FC<GravSimulationProps> = ({ planet }) => {
  // Calculate gravitational force
  const G = 6.67430e-11;
  const sunMass = 1.989e30;
  const planetMass = planet.displayStats.mass * 5.972e24;
  const distance = planet.displayStats.meanDistanceFromSun * 1.496e11;
  const force = (G * sunMass * planetMass) / (distance * distance);
  const forceInN = force.toExponential(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-warning-100/20"
    >
      <h3 className="text-xl font-semibold mb-4 text-warning">
        Gravitational Interaction
      </h3>
      
      <div className="flex flex-col items-center gap-4">
        <SimulationCanvas planet={planet} />
        
        <div className="text-center text-gray-200">
          <p className="text-lg mb-2">Total Gravitational Force:</p>
          <p className="text-2xl font-semibold text-warning">
            {forceInN} N
          </p>
        </div>

        <Accordion variant="light" className="w-full">
          <AccordionItem 
            key="calculations" 
            aria-label="Calculations"
            title="Calculations"
            className="text-gray-200"
          >
            <ForceEquation planet={planet} />
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default GravSimulation; 