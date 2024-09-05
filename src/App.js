import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Element } from 'react-scroll'; 
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectLists from './components/ProjectLists';
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
        
        <Footer  />
      </div>
    </ChakraProvider>
  );
}

export default App;
