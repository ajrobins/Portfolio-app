import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Element } from 'react-scroll'; 
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectLists from './components/ProjectLists';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  useEffect(() => {
    const easeInOutExpoSmooth = (t) => {
      if (t < 0.5) {
        return 0.5 * Math.pow(2, 20 * t - 10) * (1 - 0.1 * Math.sin(Math.PI * t));
      } else {
        return 1 - 0.5 * Math.pow(2, -20 * t + 10) * (1 - 0.1 * Math.sin(Math.PI * t));
      }
    };

    const smoothScroll = (distance, duration) => {
      const start = window.pageYOffset;
      const end = start + distance;
      const startTime = performance.now();

      const scrollStep = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutExpoSmooth(progress);
        const scrollY = start + (distance * easedProgress);

        window.scrollTo(0, scrollY);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        } else {
          scrollBack(); // Trigger scroll back after reaching the target
        }
      };

      const scrollBack = () => {
        const start = window.pageYOffset;
        const end = start - distance;
        const startTime = performance.now();

        const scrollBackStep = (currentTime) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const easedProgress = easeInOutExpoSmooth(progress);
          const scrollY = start - (distance * easedProgress);

          window.scrollTo(0, scrollY);

          if (progress < 1) {
            requestAnimationFrame(scrollBackStep);
          }
        };

        requestAnimationFrame(scrollBackStep);
      };

      requestAnimationFrame(scrollStep);
    };

    // Check if the user is at the top of the page before starting the smooth scroll
    const isAtTop = window.pageYOffset === 0;

    if (isAtTop) {
      smoothScroll(80, 1500); // Scroll 80px in 1.5 seconds
    }
  }, []);

  return (
    <ChakraProvider>
      <div className="app-container">
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="about" className="section">
          <About />
        </Element>
        <Element name="skills" className="section">
          <Skills />
        </Element>
        <Element name="projects" className="section">
          <ProjectLists />
        </Element>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
