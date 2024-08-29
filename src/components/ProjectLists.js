import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import Project from './Project';
import projects from './data/Projects';
import { motion } from 'framer-motion';

function ProjectLists() {
  const [category, setCategory] = useState('Graphics');
  const [projectsHeight, setProjectsHeight] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      setProjectsHeight(projectsRef.current.getBoundingClientRect().height);
    }
  }, [projectsRef.current]);

  // Set margin-bottom based on the projects column height
  const headerMarginBottom = useBreakpointValue({
    base: '4',
    md: projectsHeight ? `${projectsHeight / 2}px` : '8'
  });

  // Padding for the entire grid
  const gridPadding = useBreakpointValue({
    base: '5',    // Padding for smaller screens
    md: '16',      // Padding for medium1d larger screens
  });

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: '0.6fr 1.9fr' }}
      gap={6}
      p={gridPadding}   // Apply padding to the entire grid
    >
      <Box
        gridColumn={{ base: '1 / -1', md: '1 / 2' }}
        display="flex"
        flexDirection="column"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={{ base: '4', md: '8' }}
        mb={headerMarginBottom}  // Responsive margin-bottom based on height
      >
        <Heading
          as="h2"
          size="sm"
          color="green.400"
          textAlign={{ base: 'left', md: 'center' }}
          mb={{ base: '-5', md: '6' }}  // Margin-bottom for Heading
          ml={{ base: '6', md: '150' }}  // Margin-left for Heading
        >
          PROJECTS
        </Heading>
      </Box>
      <Box
        gridColumn={{ base: '1 / -1', md: '2 / 3' }}
        ref={projectsRef}  // Reference to measure height
      >
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
      </Box>
    </Box>
  );
}

export default ProjectLists;
