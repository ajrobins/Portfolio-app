import React, { useState } from 'react';
import Project from './Project';
import projects from './data/Projects';
import './ProjectLists.css'; 
import { motion } from 'framer-motion';

function ProjectsList() {
    const [category, setCategory] = useState('Graphics');
  
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
  
    return (
      <div className="projects-list">
        <h2>Projects</h2>
        <div className="button-group">
          <button onClick={() => setCategory('Graphics')}>Graphics</button>
          <button onClick={() => setCategory('Robotics')}>Robotics</button>
          <button onClick={() => setCategory('Other')}>Other</button>
        </div>
        <motion.div
          className="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.03 }}
            >
              <Project
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                video={project.video}
                gif={project.gif}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
}

export default ProjectsList;
