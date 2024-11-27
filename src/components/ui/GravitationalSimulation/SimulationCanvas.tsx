import React, { useEffect, useRef } from 'react';
import { PlanetData } from '../../../../types';

interface SimulationCanvasProps {
  planet: PlanetData;
}

const SimulationCanvas: React.FC<SimulationCanvasProps> = ({ planet }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set smaller canvas size
    canvas.width = 300;
    canvas.height = 300;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Smaller orbit radius
    const orbitRadius = 100;
    let angle = 0;
    
    // Adjust speed based on orbital period (faster for visualization)
    const speed = 0.02 / Math.sqrt(planet.displayStats.orbitalPeriod);

    const drawSimulation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw orbit path
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.ellipse(centerX, centerY, orbitRadius, orbitRadius, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Sun
      ctx.beginPath();
      ctx.fillStyle = '#FFD700';
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Calculate planet position
      const planetX = centerX + Math.cos(angle) * orbitRadius;
      const planetY = centerY + Math.sin(angle) * orbitRadius;

      // Draw gravitational force line
      ctx.beginPath();
      ctx.strokeStyle = '#e74c3c';
      ctx.setLineDash([5, 5]);
      ctx.moveTo(planetX, planetY);
      ctx.lineTo(centerX, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw planet
      ctx.beginPath();
      ctx.fillStyle = '#3498db';
      ctx.arc(planetX, planetY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Update angle for orbital motion
      angle += speed;

      animationFrameRef.current = requestAnimationFrame(drawSimulation);
    };

    drawSimulation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [planet]);

  return (
    <canvas
      ref={canvasRef}
      className="border border-warning-100/20 rounded-lg"
    />
  );
};

export default SimulationCanvas; 