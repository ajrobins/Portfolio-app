import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

// Define motion components
const MotionBox = motion(Box);

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const [projectsHeight, setProjectsHeight] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      setProjectsHeight(projectsRef.current.getBoundingClientRect().height);
    }
  }, [projectsRef.current]);

  // Set margin-bottom based on the projects column height
  const headerMarginBottom = useBreakpointValue({
    base: '6', // Increased space for smaller screens
    md: projectsHeight ? `${projectsHeight / 2}px` : '12' // Increased space for medium and larger screens
  });

  // Padding for the entire grid
  const gridPadding = useBreakpointValue({
    base: '5',    // Padding for smaller screens
    md: '16',     // Padding for medium and larger screens
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      minHeight="50vh" // Full viewport height
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center content vertically
      alignItems="center" // Center content horizontally
      p={gridPadding} // Use consistent padding
      bg="#f4f4f4"
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
        gap={4}
        w="full" // Ensure the grid takes full width
        maxW="1200px" // Max width for large screens
      >
        {/* Header Section */}
        <Box
          gridColumn={{ base: '1 / -1', md: '1 / 2' }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          mb={headerMarginBottom} // Responsive margin-bottom based on height
          position="relative"
          pr={{ base: '0', md: '8' }} // Extra padding on the right for the header on large screens
        >
          <Heading
            as="h2"
            size="md"
            color="green.400"
            textAlign={{ base: 'left', md: 'left' }}
          >
            About Me
          </Heading>
        </Box>

        {/* Content Section */}
        <Box
          gridColumn={{ base: '1 / -1', md: '2 / 3' }}
          display="flex"
          alignItems="center"
          position="relative"
          pl={{ base: '0', md: '8' }} // Extra padding on the left for the content on large screens
        >
          <Text fontSize="md" lineHeight="tall" mb={4}>
            Hi there! I'm a passionate and dedicated software developer with expertise in <strong>multiple programming languages and frameworks</strong>. My journey in technology began with a strong interest in web development and AI, which has since evolved to include <strong>robotics</strong> and <strong>game development</strong>. I thrive on solving complex challenges and contributing to innovative projects that create meaningful impact.

            <br /><br />

            I recently graduated with a BSc MEng in Computer Science from the <strong>University of Leeds</strong>, earning a 2:1 with Honors. Based in <strong>Leeds</strong>, I'm exploring new opportunities and am eager to apply my skills in a dynamic and growth-oriented environment. I am open to roles in the area as well as remote positions.

            <br /><br />

            Currently, I am working as an <strong>LLM Training Assistant</strong> at DataAnnotation. In this role, I collaborate on training Large Language Models using Reinforcement Learning with Human Feedback. Alongside this, I'm dedicating time to familiarizing myself with game engines like <strong>Unity</strong> and <strong>Unreal Engine</strong>, expanding my skills and exploring new technologies. I have also been making this portfolio page!
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default About;
