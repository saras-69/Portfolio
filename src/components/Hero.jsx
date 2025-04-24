import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { lazy, Suspense, Component, useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';

// Lazy load Three.js components to prevent initial loading issues
const ThreeSphere = lazy(() => import('./ThreeSphere'));

// Fallback component in case Three.js fails or while it's loading
const FallbackSphere = () => {
  return (
    <motion.div
      className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity
      }}
    />
  );
};

// The rest of your code remains unchanged
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sphereContainerRef = useRef(null);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-900/90 to-black/90 relative z-10 ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2 center align-middle">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl text-blue-500 font-bold"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-white mt-2"
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            }}
          >
            Saraswati Chandra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 py-4 max-w-md"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          >
            A passionate Computer Science student and Full-Stack Developer with expertise in creating innovative web applications and contributing to open-source projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 mb-6"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
            }}
          >
            <a href="https://www.linkedin.com/in/saraswati-chandra069" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com/saras-69" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <FaGithub size={25} />
            </a>
            <a href="mailto:saketsingh102003@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">
              <MdEmail size={25} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="group-hover:rotate-90 duration-300 ml-2 relative z-10"
              >
                →
              </motion.span>

              {/* Moving light effect */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  background: [
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                  ],
                  backgroundPosition: ["-200px 0", "200px 0"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundSize: "200px 100%",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 h-[350px] md:h-[500px] mt-8 md:mt-0 flex items-center justify-center"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        >
          <div
            ref={sphereContainerRef}
            className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] relative"
            style={{ minWidth: '250px', minHeight: '250px' }}
          >
            <ErrorBoundary>
              <Suspense fallback={<FallbackSphere />}>
                <ThreeSphere />
              </Suspense>
            </ErrorBoundary>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Simple error boundary to prevent Three.js errors from crashing the app
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <FallbackSphere />;
    }
    return this.props.children;
  }
}

export default Hero;