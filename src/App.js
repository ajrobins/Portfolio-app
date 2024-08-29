import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Element, scroller } from 'react-scroll'; 
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectLists from './components/ProjectLists';
import Contact from './components/Contact';
import About from './components/About';

import Footer from './components/Footer';

import './App.css'; 

function App() {


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
        <Element name="contact" className="section">
          <Contact />
        </Element>
        <Footer  />
      </div>
    </ChakraProvider>
  );
}

export default App;
