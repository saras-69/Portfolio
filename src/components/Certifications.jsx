import { motion } from 'framer-motion';
import { FaMedal, FaCertificate, FaTrophy } from 'react-icons/fa';
import { useState } from 'react';

const Certifications = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div name="certifications" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Certifications & Achievements
          </motion.h2>
          <p className="py-6 text-gray-400">Professional certifications and notable achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            onMouseEnter={() => setHoveredItem('certifications')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                animate={hoveredItem === 'certifications' ? {
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaCertificate className="text-4xl text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-blue-400">Certifications</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {[
                { title: "Cloud Computing Certification", org: "NPTEL", desc: "Completed with Excellence" },
                { title: "Web Development Bootcamp", org: "Udemy", desc: "Completed 50+ projects" },
                { title: "Data Structures and Algorithms", org: "GeeksforGeeks", desc: "Advanced problem-solving techniques" }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
                  }}
                >
                  <motion.h4 
                    className="text-xl font-semibold text-blue-400"
                    whileHover={{ scale: 1.02 }}
                  >
                    {cert.title}
                  </motion.h4>
                  <p className="text-gray-400 mt-2">{cert.org}</p>
                  <p className="text-gray-400">{cert.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Particle effects when hovering (matches Hero) */}
            {hoveredItem === 'certifications' && (
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
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            onMouseEnter={() => setHoveredItem('achievements')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                animate={hoveredItem === 'achievements' ? {
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaTrophy className="text-4xl text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-blue-400">Achievements</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {[
                { title: "Hacktoberfest", desc: "Successfully completed Hacktoberfest challenge by contributing to multiple open-source projects" },
                { title: "GirlScript Summer of Code", desc: "Secured 85th rank among participants by collaborating on impactful features, fixing bugs, and enhancing documentation" },
                { title: "University Coding Competition", desc: "Won 2nd place in university-wide coding competition for innovative solution to real-world problem" }
              ].map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="bg-blue-900/80 p-3 rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, 0, -10, 0],
                      backgroundColor: "rgba(30, 64, 175, 0.8)",
                    }}
                  >
                    <FaMedal className="text-xl text-yellow-400" />
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="text-xl font-semibold text-white"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      {achievement.title}
                    </motion.h4>
                    <p className="text-gray-400">{achievement.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Particle effects when hovering */}
            {hoveredItem === 'achievements' && (
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400/50 rounded-full"
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
        </div>
      </div>
    </div>
  );
};

export default Certifications;