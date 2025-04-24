import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ExperienceOrb = () => {
  // Since creating a full Three.js orb might be overkill for this section,
  // we'll use nested divs with animations to create a simplified 3D effect
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute inset-[10%] rounded-full bg-blue-600/20"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute inset-[20%] rounded-full bg-blue-700/20"
        animate={{ 
          scale: [1, 1.4, 1],
        }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute inset-[30%] rounded-full bg-blue-800/20"
        animate={{ 
          scale: [1, 1.5, 1],
        }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.9,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};

export default ExperienceOrb;