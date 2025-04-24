import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';

// Fallback component with an image
const FallbackOrb = ({ image, activeTab }) => {
  // Map of experience types to appropriate images
  const images = {
    freelance: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?auto=format&fit=crop&q=80&w=1000", // AI/ML related image
    internship: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000" // Developer workspace image
  };

  const currentImage = images[activeTab] || images.freelance;

  return (
    <motion.div 
      className="w-32 h-32 rounded-full relative overflow-hidden shadow-lg"
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 8, 
        ease: "easeInOut",
        repeat: Infinity
      }}
    >
      {/* Background image */}
      <img 
        src={currentImage}
        alt={`${activeTab} visual`} 
        className="absolute w-full h-full object-cover"
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-blue-700/40" />
      
      {/* Pulsing rings for 3D effect */}
      <motion.div
        className="absolute inset-0 border-4 border-blue-400/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-[15%] border-2 border-blue-300/30 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("freelance");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const experiences = {
    freelance: {
      title: "AI Model Training & Prompt Engineering",
      type: "Freelance",
      duration: "2023 - Present",
      icon: <FaCode className="text-blue-400" />,
      responsibilities: [
        "Trained AI models for NLP tasks, evaluating and refining 1,000+ AI-generated responses for accuracy, coherence, and contextual relevance.",
        "Reviewed and optimized hundreds of user prompts, improving AI response quality by 40% through better prompt engineering techniques.",
        "Identified and mitigated 20+ biases and inconsistencies, contributing to a more ethical and adaptive AI system."
      ],
      skills: ["NLP", "Machine Learning", "Prompt Engineering", "Data Analysis"]
    },
    internship: {
      title: "Frontend Developer Intern",
      type: "Internship",
      duration: "Summer 2023",
      icon: <FaBriefcase className="text-green-400" />,
      responsibilities: [
        "Developed responsive user interfaces using React.js and Tailwind CSS, improving site performance by 35%.",
        "Collaborated with UX/UI designers to implement interactive features that enhanced user engagement by 25%.",
        "Optimized web applications for cross-browser compatibility and mobile responsiveness."
      ],
      skills: ["React.js", "Tailwind CSS", "JavaScript", "UI/UX", "Git"]
    }
  };

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="py-6"
          >
            My professional work experience
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 mb-6 md:mb-0"
          >
            {/* Animated 3D Element with Image */}
            <motion.div 
              className="flex justify-center mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 4, 
                ease: "easeInOut",
                repeat: Infinity 
              }}
            >
              <Suspense fallback={<FallbackOrb activeTab={activeTab} />}>
                <div className="w-40 h-40 relative">
                  <FallbackOrb activeTab={activeTab} />
                </div>
              </Suspense>
            </motion.div>

            {/* Tab Selection */}
            <motion.div 
              className="bg-gray-900/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
              whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
            >
              {Object.keys(experiences).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full py-4 px-4 font-medium text-sm flex items-center gap-3 ${
                    activeTab === key
                      ? "bg-blue-900/40 text-blue-400 border-l-4 border-blue-500"
                      : "text-gray-400 hover:text-white border-l-4 border-transparent"
                  } transition-all duration-300`}
                  whileHover={{ x: activeTab !== key ? 5 : 0 }}
                >
                  {experiences[key].icon}
                  {experiences[key].type}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="flex justify-between items-start mb-6">
              <motion.h3 
                className="text-2xl font-bold text-blue-400"
                key={activeTab + "-title"} // Force re-render animation when tab changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {experiences[activeTab].title}
              </motion.h3>
              <motion.span 
                className="bg-blue-900/60 text-xs text-white px-4 py-1 rounded-full"
                key={activeTab + "-duration"} // Force re-render animation
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {experiences[activeTab].duration}
              </motion.span>
            </div>

            <motion.ul 
              className="list-disc pl-5 space-y-4 text-gray-300"
              key={activeTab + "-list"} // Force re-render animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {experiences[activeTab].responsibilities.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="mt-8"
              key={activeTab + "-skills"} // Force re-render animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-sm text-gray-400 mb-3">Skills Used:</p>
              <div className="flex flex-wrap gap-3">
                {experiences[activeTab].skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-gray-800/60 px-3 py-2 rounded-md text-xs backdrop-blur-sm border border-gray-700/50"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(37, 99, 235, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)"
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      boxShadow: hoveredSkill === skill ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      duration: 0.3, 
                      delay: index * 0.05 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Particle effects when hovering */}
            {hoveredSkill && (
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
        </div>
      </div>
    </div>
  );
};

export default Experience;