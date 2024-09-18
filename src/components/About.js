import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Define motion components
const MotionBox = motion(Box);

function About() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: isInView ?  1.0 : 0.5} // Different thresholds based on visibility
      // Adjust as needed, lower threshold for detecting partial view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);

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
    <Box
      ref={ref}
      minHeight="50vh" // Full viewport height
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center content vertically
      alignItems="center" // Center content horizontally
      p={gridPadding} // Use consistent padding
      bg="gray.50"
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
            color="#E01A23"
            textAlign={{ base: 'left', md: 'left' }}
          >
            About Me
          </Heading>
        </Box>

        {/* Content Section */}
        <MotionBox
        classList="about-me"
          // initial={{ opacity: 0, x: '100vw' }} // Start off-screen to the right
          // animate={{ opacity: isInView ? 1 : 1, x: isInView ? 0 : '100vw' }} // Move to the left and fade in
          // transition={{ duration: 0.5, ease: "easeOut" }} // Adjust duration and easing
          // transitionDelay= {"1"} // Delay the animation when scrolling into view
          gridColumn={{ base: '1 / -1', md: '2 / 3' }}
          display="flex"
          alignItems="center"
          position="relative"
          pl={{ base: '0', md: '8' }} // Extra padding on the left for the content on large screens
        >
          <Text fontSize="md" lineHeight="tall" mb={4}>
            I'm a software engineer who recently graduated with a BSc MEng in Computer Science from the <strong>University of Leeds</strong>, earning a 2:1 with Honors. Throughout my degree, I've had many focuses, with the main ones being robotics, graphics/game development, web development, and AI.

            <br /><br />

            Based in <strong>Leeds</strong>, I'm currently looking for jobs nearby or remote. My main goal is to keep learning and creating after university, whether that be learning more about a familiar field, or delving into a new one. If you can help with that, please get in touch!

            <br /><br />

            Currently, I'm working as an <strong>LLM Training Assistant</strong> at DataAnnotation. In this role, I collaborate on training Large Language Models to code to a high standard by providing comprehensive feedback to their responses after assessing their code, supporting the reinforcement learning of the models. These involve short tasks in various tech domains, but what I really want is to get involved in more long-term projects. Alongside this, I'm dedicating time to familiarizing myself with game engines like <strong>Unity</strong> and <strong>Unreal Engine</strong>, expanding my skills and exploring new technologies. I have also been making this portfolio page, boosting my JavaScript knowledge with React!
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default About;
