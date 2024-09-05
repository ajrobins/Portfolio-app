import React, { useRef } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, useBreakpointValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

const MotionBox = motion(Box);
const MotionTr = motion(Tr);

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  // Padding for the entire grid
  const gridPadding = useBreakpointValue({
    base: '2',    // Padding for smaller screens
    md: '16',     // Padding for medium and larger screens
  });

  // Adjust margin-bottom for header
  const headerMarginBottom = useBreakpointValue({
    base: '0',    // Increased space for smaller screens
    md: '12'      // Increased space for medium and larger screens
  });

  return (
    <MotionBox
      ref={ref}
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center content vertically
      alignItems="center" // Center content horizontally
      minHeight="50vh" // Full viewport height for consistency
      bg="gray.100"
      p={gridPadding} // Use consistent padding
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
        gap={4}
        w="full" // Ensure the grid takes full width
        maxW="1200px" // Max width for large screens
        overflowX="auto" width="100%"

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
          ml={{ base: '0', md: '10' }} 
        >
          <Heading
            as="h2"
            size="md"
            color="green.400"
            textAlign={{ base: 'left', md: 'left' }}
            ml={{ base: '2', md: '0' }} 
            mt={{ base: '0', md: '0' }}
            mb={{ base: '4', md: '0' }}
          >
            Skills
          </Heading>
        </Box>

        {/* Skills Table Section */}
        <Box
          gridColumn={{ base: '1 / -1', md: '2 / 3' }}
          display="flex"
          alignItems="center"
          position="relative"
          pl={{ base: '0', md: '8' }} // Extra padding on the left for the content on large screens
        >
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            width="100%"
            borderRadius="md"
            ml={{ base: '-2', md: '0' }}

          >
<Box >
  <Table variant="simple" size={{base: "sm", md: "md"}} mr={{base: 10}}>
    <Thead>
      <Tr>
        <Th>Languages</Th>
        <Th>Frameworks</Th>
        <Th>Tools</Th>
        <Th>Fields</Th>
      </Tr>
    </Thead>
    <Tbody>
      {[
        { language: 'C++', framework: 'Flask', tool: 'OpenGL', field: 'Game Development' },
        { language: 'C', framework: 'Django', tool: 'Vulkan', field: 'Robotics' },
        { language: 'Python', framework: 'PyTorch', tool: 'Docker', field: 'Web Development' },
        { language: 'Java', framework: 'Qt', tool: 'Git', field: 'AI/Deep Learning' },
        { language: 'JavaScript', framework: 'ROS', tool: 'Qt', field: '' },
        { language: 'HTML/CSS', framework: '', tool: 'MySQL', field: '' },
      ].map((skill, index) => (
        <Tr key={index}>
          <Td>{skill.language}</Td>
          <Td>{skill.framework}</Td>
          <Td>{skill.tool}</Td>
          <Td>{skill.field}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</Box>
          </MotionBox>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default Skills;
