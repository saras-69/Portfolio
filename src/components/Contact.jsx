import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - in a real application, you would send this data to a server
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Contact Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="py-6 text-gray-400"
          >
            Get in touch with me
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <motion.div 
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
                scale: 1.01
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onMouseEnter={() => setHoveredElement('contact-info')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
              
              {/* Animated corner accent */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-1 bg-blue-500/50"
                  animate={{ width: [0, 80, 80], height: [1, 1, 20] }}
                  transition={{ 
                    duration: 1.5, 
                    times: [0, 0.6, 1],
                    delay: 0.5,
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute top-0 right-0 w-1 h-20 bg-blue-500/50"
                  animate={{ height: [0, 80, 80], width: [1, 1, 20] }}
                  transition={{ 
                    duration: 1.5, 
                    times: [0, 0.6, 1],
                    delay: 0.5,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold mb-6 text-blue-400 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-4 relative z-10">
                {[
                  { icon: <FaUser />, text: "Saraswati Chandra", id: "name" },
                  { icon: <FaEnvelope />, text: "saketsingh102003@gmail.com", id: "email", href: "mailto:saketsingh102003@gmail.com" },
                  { icon: <FaPhone />, text: "+91 8905948930", id: "phone", href: "tel:+918905948930" },
                  { icon: <FaMapMarkerAlt />, text: "Gaya, Bihar 823001", id: "address" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="text-blue-500"
                      animate={hoveredElement === 'contact-info' ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0, -5, 0],
                      } : {}}
                      transition={{ duration: 0.5 + index * 0.1, repeat: hoveredElement === 'contact-info' ? 1 : 0 }}
                    >
                      {item.icon}
                    </motion.div>
                    {item.href ? (
                      <a href={item.href} className="hover:text-blue-400 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="text-xl font-semibold mb-4">Social Links</h4>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/saraswati-chandra069" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-800/80 backdrop-blur-sm hover:bg-blue-700 p-3 rounded-full"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, 10, -10, 0],
                      boxShadow: "0 0 15px rgba(37, 99, 235, 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/saras-69" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 p-3 rounded-full"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.a 
                  href="/resume.pdf" 
                  download="saras.pdf"
                  className="group block w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-center py-3 rounded-md transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    y: -2
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Download Resume
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                  
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute bg-white/10 top-0 left-0 w-20 h-full transform -skew-x-12"
                    animate={{ 
                      x: [-150, 250]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5, 
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              </motion.div>
              
              {/* Particle effects when hovering */}
              {hoveredElement === 'contact-info' && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2]
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3"
            onMouseEnter={() => setHoveredElement('form')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col gap-4 bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg shadow-lg relative"
              whileHover={{ 
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.2)",
              }}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 border border-blue-500/20 rounded-lg" />
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-lg" />
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"
              />
              
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Your Email", type: "email", placeholder: "example@email.com" }
              ].map((field, index) => (
                <motion.div 
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative z-10"
                >
                  <label htmlFor={field.id} className="text-sm mb-1 block text-blue-400">{field.label}</label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 text-white"
                    required
                    whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
                    whileFocus={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative z-10"
              >
                <label htmlFor="message" className="text-sm mb-1 block text-blue-400">Your Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Type your message here..."
                  className="w-full bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 text-white"
                  required
                  whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
                  whileFocus={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 self-start mt-2 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Button highlight effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-20 h-full bg-white/10 transform -skew-x-12"
                  animate={{ 
                    x: [-150, 250]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
              
              {/* Particle effects when hovering */}
              {hoveredElement === 'form' && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.6, 0.2]
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
            </motion.form>
            
            {/* 3D-like decorative element */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;