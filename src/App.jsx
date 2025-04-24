import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden">
          <AnimatedBackground />
          <div className="relative z-10"> {/* Add this wrapper div with z-index */}
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <OpenSource />
                  <Certifications />
                  <Contact />
                </>
              } />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;