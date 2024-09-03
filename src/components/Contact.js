import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

const MotionBox = motion(Box);

function Contact() {
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
    md: projectsHeight ? `${projectsHeight / 2}px` : '12', // Increased space for medium and larger screens
  });

  // Padding for the entire grid
  const gridPadding = useBreakpointValue({
    base: '5', // Padding for smaller screens
    md: '16', // Padding for medium and larger screens
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      // minHeight="100vh" // Full viewport height
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
            Contact Me
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
            If you would like to work with me, please feel free to contact me at{' '}
            <a href="mailto:alexjosephrobins@gmail.com" style={{ textDecoration: 'underline', color: 'green.400' }}>
              alexjosephrobins@gmail.com
            </a>.
            <br /><br />
            You can also connect with me on{' '}
            <a href="https://www.linkedin.com/in/alexander-robins/" style={{ textDecoration: 'underline', color: 'green.400' }}>
              linkedin.com/in/alexander-robins
            </a>.
            <br /><br />
            My GitHub profile is available at{' '}
            <a href="https://github.com/ajrobins" style={{ textDecoration: 'underline', color: 'green.400' }}>
              github.com/ajrobins
            </a>. Please note that many of my projects are coursework-related and cannot be shared publicly. If you would like to view them, feel free to send me an email, and I’ll be happy to share them with you.
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default Contact;
