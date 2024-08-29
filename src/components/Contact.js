import React, { useRef } from 'react';
import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

// Define motion components
const MotionBox = motion(Box);

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  // Set margin-bottom based on the projects column height
  const headerMarginBottom = useBreakpointValue({
    base: '4',
    md: '8'
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      minHeight="40vh" // Full screen height
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: '0.6fr 1.9fr' }}
      gap={6}
      bg="#f4f4f4"
      p={{ base: '5', md: '16' }} // Padding for the grid
      alignItems="center" // Center content along the height
    >
      {/* Header Section */}
      <Box
        gridColumn={{ base: '1 / -1', md: '1 / 2' }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        mt={{ base: '4', md: '8' }}
        mb={headerMarginBottom} // Responsive margin-bottom based on height
      >
        <Heading
          as="h2"
          size="md"
          color="green.400"
          textAlign={{ base: 'left', md: 'left' }}
          mb={{ base: '4', md: '6' }} // Margin-bottom for Heading
        >
          Contact Me
        </Heading>
      </Box>

      {/* Content Section */}
      <Box
        gridColumn={{ base: '1 / -1', md: '2 / 3' }}
      >
        <Text fontSize="lg" lineHeight="tall">
          If you would like to work with me, please feel free to contact me at{' '}
          <a href="mailto:alexjosephrobins@gmail.com" style={{ textDecoration: 'underline', color: 'green.400' }}>
            alexjosephrobins@gmail.com
          </a>.
          <br /><br />

          You can also connect with me on LinkedIn at{' '}
          <a href="https://www.linkedin.com/in/alex-robins/" style={{ textDecoration: 'underline', color: 'green.400' }}>
            linkedin.com/in/alex-robins
          </a>.
          <br /><br />

          My GitHub profile is available at{' '}
          <a href="https://github.com/ajrobins" style={{ textDecoration: 'underline', color: 'green.400' }}>
            github.com/ajrobins
          </a>. Please note that many of my projects are coursework-related and cannot be shared publicly. If you would like to view them, feel free to send me an email, and I’ll be happy to share them with you.
        </Text>
      </Box>
    </MotionBox>
  );
}

export default Contact;
