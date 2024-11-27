import React from 'react';
import { PlanetData } from '../../../../types';

interface ForceEquationProps {
  planet: PlanetData;
}

const ForceEquation: React.FC<ForceEquationProps> = ({ planet }) => {
  const G = 6.67430e-11; // Universal gravitational constant
  const sunMass = 1.989e30; // Mass of Sun in kg
  const planetMass = planet.displayStats.mass * 5.972e24; // Convert Earth masses to kg
  const distance = planet.displayStats.meanDistanceFromSun * 1.496e11; // Convert AU to meters
  
  // Calculate force
  const force = (G * sunMass * planetMass) / (distance * distance);
  const forceInN = force.toExponential(2);

  return (
    <div className="space-y-4 text-gray-200">
      <div className="text-center">
        <p className="text-lg mb-2">Newton's Law of Universal Gravitation</p>
        <div className="text-2xl font-mono">
          F = G(M₁M₂)/r²
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <p>Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>G = 6.674 × 10⁻¹¹ N(m/kg)²</li>
          <li>M₁ = {sunMass.toExponential(2)} kg (Sun)</li>
          <li>M₂ = {planetMass.toExponential(2)} kg ({planet.name})</li>
          <li>r = {distance.toExponential(2)} m</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-lg">Gravitational Force:</p>
        <p className="text-xl font-semibold text-warning">
          F = {forceInN} N
        </p>
      </div>
    </div>
  );
};

export default ForceEquation; 