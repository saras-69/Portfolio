import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full min-h-screen bg-gradient-to-b from-gray-800/80 to-black/80 text-white py-16 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-screen-lg mx-auto px-4 relative z-10">
        {/* Animated 3D logo */}
        <motion.div 
          className="w-full flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity 
            }}
            className="relative"
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center"
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
              {/* Inner glowing orb */}
              <motion.div 
                className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600/30 to-blue-800/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity
                }}
              />
              
              {/* Central icon */}
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaCode size={24} className="text-blue-400" />
              </motion.div>
              
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-[15%] border-2 border-blue-300/20 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-blue-500">S</span>araswati Chandra
            </motion.h2>
            <p className="text-gray-400">Full-Stack Developer & Open Source Contributor</p>
            <motion.div 
              className="bg-blue-900/20 backdrop-blur-sm mt-4 p-4 rounded-lg border border-blue-500/10"
              whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
            >
              <p className="text-sm text-gray-300">
                Thank you for visiting my portfolio! Feel free to connect with me for collaborations or opportunities.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col mb-6 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Quick Links</h3>
            <div className="flex flex-wrap gap-3">
              {["home", "about", "skills", "projects", "contact"].map((link, index) => (
                <motion.div
                  key={link}
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    duration: 0.3, 
                    delay: 0.3 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link} 
                    smooth 
                    duration={500} 
                    className="hover:text-blue-400 cursor-pointer capitalize"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -top-2 -left-2 w-5 h-5"
                animate={{
                  boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 15px rgba(59, 130, 246, 0.7)", "0 0 0 rgba(59, 130, 246, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="p-4 bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-500/10"
                whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
              >
                <h4 className="font-semibold mb-2">Want to work together?</h4>
                <Link 
                  to="contact" 
                  smooth 
                  duration={500} 
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm cursor-pointer"
                >
                  <span>Reach out</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Connect With Me</h3>
            <div className="flex gap-4 mb-6">
              {[
                { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/saraswati-chandra069", color: "hover:text-blue-400" },
                { icon: <FaGithub size={20} />, href: "https://github.com/saras-69", color: "hover:text-gray-100" },
                { icon: <FaEnvelope size={20} />, href: "mailto:saketsingh102003@gmail.com", color: "hover:text-red-400" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href} 
                  target="_blank"
                  rel="noreferrer"
                  className={`${item.color} transition-colors bg-gray-800/50 p-3 rounded-full`}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  custom={index}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    delay: 0.5 + index * 0.1,
                    duration: 0.3
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              className="relative overflow-hidden bg-blue-900/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/10"
              whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Three.js", "Framer Motion", "Tailwind"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="text-xs bg-blue-900/40 px-2 py-1 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(37, 99, 235, 0.4)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Animated highlight effect */}
              <motion.div 
                className="absolute bg-white/5 bottom-0 left-0 h-1 w-full"
                animate={{ 
                  scaleX: [0, 1, 0],
                  x: [0, 0, 300],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800/50 mt-12 pt-6 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated corner accents */}
          <motion.div 
            className="absolute top-0 left-0 w-20 h-1"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="h-full bg-gradient-to-r from-blue-500/50 to-transparent" />
          </motion.div>
          <motion.div 
            className="absolute top-0 right-0 w-20 h-1"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="h-full bg-gradient-to-l from-blue-500/50 to-transparent" />
          </motion.div>
          
          <p>© {currentYear} Saraswati Chandra. All rights reserved.</p>
          <motion.p 
            className="text-sm text-gray-500 mt-2 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            Made with 
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-1"
            >
              <FaHeart className="text-red-500" />
            </motion.span> 
            and 
            <motion.span
              className="ml-1 inline-flex items-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FaReact className="text-blue-400 mx-1" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;