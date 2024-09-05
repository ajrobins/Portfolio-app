import React from 'react';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import Project from './Project';
import projects from './data/Projects';
import { motion } from 'framer-motion';

function ProjectLists() {
  const gridPadding = useBreakpointValue({
    base: '5',  // Padding for smaller screens
    md: '16',   // Padding for medium and larger screens
  });

  const contentMarginLeft = useBreakpointValue({
    base: '0',
    md: '6' // Margin between header and content for wide screens
  });

  const filteredProjects = projects.filter(
    (project) => project.category === 'Graphics'
  );

  return (
    <Box
    w="full"
    bg="gray.50"

    >
    <Box
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
      gap={6}
      p={gridPadding}
      maxW="1200px"
      w="full"
      mx="auto"  // Center the entire grid horizontally
      alignItems="start"
      bg="gray.50"

    >
      <Box
        gridColumn={{ base: '1 / -1', md: '1 / 2' }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        mt={{ base: '4', md: '8' }}
        mb={{ base: '4', md: '8' }}  // Adjusted margin-bottom to match other sections
        ml={{ md: -10 }}  // Extra margin-left for the header on large screens
        // mr={{ md: -10 }}  // Extra margin-left for the header on large screens

      >
        <Heading
          as="h2"
          size="md"
          color="green.400"
          textAlign="left"
          mb="4"
          // ml={{ md: '-80px' }}  // Slight left shift for alignment with other headers
          mr={{ md: '8' }}  // Extra margin-right for the header on large screens
        >
          Projects
        </Heading>
      </Box>
      <Box
        gridColumn={{ base: '1 / -1', md: '2 / 3' }}
        ml={{ md: contentMarginLeft }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
  </Box>

  );
}

export default ProjectLists;
