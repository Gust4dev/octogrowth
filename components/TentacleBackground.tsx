import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Creates an abstract visual representation of tentacles using SVG paths.
 * Uses Framer Motion to animate them based on scroll position.
 * The style is sober, dark, and subtle.
 */
const TentacleBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax transformations for different "depths" of tentacles
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 150]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 10]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -15]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply">
      {/* Tentacle 1 - Left Bottom Large */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -bottom-20 -left-20 w-[600px] h-[800px] opacity-40"
      >
        <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M0 600 C50 500, 150 400, 100 200 C80 120, 120 50, 150 0" 
            stroke="#2c3326" 
            strokeWidth="40" 
            strokeLinecap="round"
            className="drop-shadow-2xl"
          />
           <path 
            d="M0 600 C50 500, 150 400, 100 200 C80 120, 120 50, 150 0" 
            stroke="#1a2115" 
            strokeWidth="10" 
            strokeLinecap="round"
            className="blur-sm"
          />
        </svg>
      </motion.div>

      {/* Tentacle 2 - Right Top Hanging */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute -top-40 -right-20 w-[500px] h-[900px] opacity-30"
      >
        <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M180 0 C100 150, 0 300, 80 500 C110 580, 150 600, 180 650" 
            stroke="#3f4a36" 
            strokeWidth="50" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Tentacle 3 - Center Background Fade */}
      <motion.div 
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-1/3 left-1/4 w-[800px] h-[800px] opacity-20 blur-xl"
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
           <path 
            d="M0 500 C200 400, 400 300, 300 100 C250 0, 400 -50, 500 0" 
            stroke="#2c3326" 
            strokeWidth="80" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      
       {/* Tentacle 4 - Right Bottom Rising */}
       <motion.div 
        style={{ y: useTransform(scrollY, [0, 2000], [0, 600]) }}
        className="absolute top-[80vh] -right-40 w-[600px] h-[800px] opacity-40"
      >
        <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
           <path 
            d="M200 600 C150 400, 50 300, 100 100" 
            stroke="#1a2115" 
            strokeWidth="60" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default TentacleBackground;