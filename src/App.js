import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Element, scroller } from 'react-scroll'; // Import from react-scroll
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectLists from './components/ProjectLists';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Assuming you have a global CSS file

function App() {
  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 2,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <ChakraProvider>
      <div className="app-container">
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="skills" className="section">
          <Skills />
        </Element>
        <Element name="projects" className="section">
          <ProjectLists />
        </Element>
        <Element name="contact" className="section">
          <Contact />
        </Element>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ChakraProvider>
  );
}

export default App;
