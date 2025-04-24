import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Online Code Compiler",
      description: "A web-based compiler allowing users to write, compile, and execute code in multiple programming languages with real-time syntax highlighting and error detection.",
      technologies: ["Node.js", "Express", "CodeMirror", "JavaScript"],
      date: "March 2023 - May 2023",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Sudoku Solver",
      description: "An interactive Sudoku game with automatic puzzle generation, difficulty levels, and an intelligent solver using backtracking algorithm. Features real-time validation and hints.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Algorithms"],
      date: "April 2023 - June 2023",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Quick Crew",
      description: "An on-demand service hiring platform for professionals like drivers, helpers, and caretakers with real-time booking system and secure payment integration.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      date: "Nov 2024 - Dec 2024",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "SwayamRozgar",
      description: "A freelancing platform connecting clients and freelancers, enabling seamless project collaboration with secure authentication and messaging features.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      date: "Feb 2025 - March 2025",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      title: "Legal-Convenience",
      description: "An incentive-based marketplace for legal service providers in India, connecting citizens with qualified professionals like advocates, arbitrators, mediators, and notaries.",
      technologies: ["Laravel", "PHP", "MongoDB", "Tailwind CSS", "Bootstrap", "MySQL", "XAMPP"],
      date: "July 2024 - Oct 2024",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 6,
      title: "Taapman",
      description: "A modern weather platform that provides real-time weather data, forecasts and climate insights using external weather APIs with interactive visualizations.",
      technologies: ["React.js", "Tailwind CSS", "Weather API", "Chart.js", "JavaScript"],
      date: "Jan 2024 - Feb 2024",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Projects
          </motion.h2>
          <p className="py-6 text-gray-400">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map(({ id, title, description, technologies, date, github, demo, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: id * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-lg shadow-lg overflow-hidden relative"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Subtle border effect */}
              <div className="absolute inset-0 border border-blue-500/20 rounded-lg" />
              
              <motion.div 
                className="h-48 flex items-center justify-center relative overflow-hidden"
                animate={hoveredId === id ? {
                  backgroundPosition: ["0% 0%", "100% 100%"],
                } : {}}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              >
                {/* Background image with lighter overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20" />
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold text-center px-2 relative z-10 text-white drop-shadow-xl"
                  animate={hoveredId === id ? { 
                    y: [0, -5, 0],
                    textShadow: [
                      "0 0 5px rgba(0,0,0,0.8)",
                      "0 0 15px rgba(0,0,0,0.9)",
                      "0 0 5px rgba(0,0,0,0.8)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                >
                  {title}
                </motion.h3>
                
                {/* 3D particles effect */}
                {hoveredId === id && (
                  <motion.div 
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
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
              
              <div className="p-5 relative z-10 bg-gray-900/40 backdrop-blur-md">
                <p className="text-sm text-gray-300 mb-2">{date}</p>
                <p className="text-white mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="px-2 py-1 bg-gray-800/60 rounded-md text-xs text-white"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(37, 99, 235, 0.4)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a 
                    href={github} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-gray-800/70 hover:bg-gray-700/90 px-3 py-2 rounded-md flex items-center gap-1 text-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)" 
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a 
                    href={demo} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-blue-600/70 hover:bg-blue-700/90 px-3 py-2 rounded-md flex items-center gap-1 text-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" 
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/saras-69"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaGithub size={20} />
            </motion.div> 
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;