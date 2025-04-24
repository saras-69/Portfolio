import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaBug, FaLaptopCode, FaTrophy, FaGithub } from 'react-icons/fa';

const OpenSource = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div name="contributions" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Open Source & Competitive Programming
          </motion.h2>
          <p className="py-6 text-gray-400">My contributions to the open-source community and programming achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-md relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent" />

            <h3 className="text-2xl font-bold text-blue-400 mb-4 relative z-10">Open Source Contributions</h3>
            
            <div className="space-y-6 relative z-10">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setHoveredItem('projects')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div 
                  className="bg-blue-900/80 p-3 rounded-lg"
                  animate={hoveredItem === 'projects' ? {
                    scale: [1, 1.1, 1],
                    borderRadius: ["20%", "30%", "20%"]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FaCode className="text-2xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">10+ Open Source Projects</h4>
                  <p className="text-gray-400">Contributed to projects under organizations like GirlScript Summer of Code (GSSoC) and Hacktoberfest, collaborating with developers globally.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setHoveredItem('bugs')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div 
                  className="bg-red-900/80 p-3 rounded-lg"
                  animate={hoveredItem === 'bugs' ? {
                    scale: [1, 1.1, 1],
                    borderRadius: ["20%", "30%", "20%"]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FaBug className="text-2xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">50+ Bugs Resolved</h4>
                  <p className="text-gray-400">Fixed security vulnerabilities and performance issues, enhancing code efficiency and system reliability.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setHoveredItem('features')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div 
                  className="bg-green-900/80 p-3 rounded-lg"
                  animate={hoveredItem === 'features' ? {
                    scale: [1, 1.1, 1],
                    borderRadius: ["20%", "30%", "20%"]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FaLaptopCode className="text-2xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">Feature Implementation</h4>
                  <p className="text-gray-400">Implemented 5+ new features and improved frontend performance by 25% in React and Node.js applications.</p>
                </div>
              </motion.div>
            </div>

            {/* Particle effects when hovering */}
            {hoveredItem && (
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 1, 0.2]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-md"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Competitive Programming & Hackathons</h3>
            
            <div className="space-y-4">
              {['LeetCode', 'CodeChef', 'HackWithInfy 2022', 'Smart India Hackathon'].map((platform, index) => {
                const colors = ['blue-500', 'green-500', 'yellow-500', 'purple-500'];
                const descriptions = [
                  'Solved 200+ problems, focusing on Data Structures and Algorithms',
                  '3-star rated coder with consistent participation in monthly contests',
                  'Participated and reached the semi-finals by solving complex algorithmic problems',
                  'Worked in a team to build innovative solutions for real-world problems'
                ];
                
                return (
                  <motion.div 
                    key={platform}
                    className={`border-l-4 border-${colors[index]} pl-4`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5, 
                      backgroundColor: "rgba(17, 24, 39, 0.5)",
                      borderRadius: "0 4px 4px 0" 
                    }}
                  >
                    <motion.h4 
                      className="font-semibold text-lg"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      {platform}
                    </motion.h4>
                    <p className="text-gray-400">{descriptions[index]}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.a
            href="https://github.com/saras-69"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub size={20} />
            <span>View my GitHub profile</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenSource;