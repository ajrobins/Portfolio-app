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
    base: '4',
    md: projectsHeight ? `${projectsHeight / 2}px` : '8'
  });

return (
    <MotionBox
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        minHeight="100vh" // Full screen height
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: '0.6fr 1.9fr' }}
        gap={6}
        p={{ base: '5', md: '16' }} // Padding for the grid
        alignItems={{ base: 'center', md: 'center' }} // Center along the height on large screens
    >
        {/* Header Section */}
        <Box
            gridColumn={{ base: '1 / -1', md: '1 / 2' }}
            display="flex"
            flexDirection="column"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={{ base: '4', md: '8' }}
            mb={headerMarginBottom} // Responsive margin-bottom based on height
        >
            <Heading
                as="h2"
                size="md"
                color="green.400"
                textAlign={{ base: 'left', md: 'center' }}
                mb={{ base: '4', md: '6' }} // Margin-bottom for Heading
            >
                About Me
            </Heading>
        </Box>

        {/* Content Section */}
        <Box
            gridColumn={{ base: '1 / -1', md: '2 / 3' }}
            ref={projectsRef} // Reference to measure height
        >
            <Text fontSize="lg" lineHeight="tall" mb={4}>
    Hi there! I'm a passionate and dedicated software developer with expertise in <strong>multiple programming languages and frameworks</strong>. My journey in technology began with a strong interest in web development and AI, which has since evolved to include <strong>robotics</strong> and <strong>game development</strong>. I thrive on solving complex challenges and contributing to innovative projects that create meaningful impact.

    <br></br>
    <br></br>

    

    I recently graduated with a BSc MEng in Computer Science from the <strong>University of Leeds</strong>, earning a 2:1 with Honors. Based in <strong>Leeds</strong>, I am exploring new opportunities and am eager to apply my skills in a dynamic and growth-oriented environment. I am open to roles in the area as well as remote positions. Let's connect and explore how we can collaborate!
    <br />
    <br />
    Currently, I am working as an <strong>LLM Training Assistant</strong> at DataAnnotation. In this role, I collaborate on training Large Language Models using Reinforcement Learning with Human Feedback. Alongside this, I am dedicating time to familiarizing myself with game engines like <strong>Unity</strong> and <strong>Unreal Engine</strong>, expanding my skills and exploring new technologies. I have also been making this portfolio page!


</Text>


        </Box>
    </MotionBox>
    
    
    
);
}

export default About;
