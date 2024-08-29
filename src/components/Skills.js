import React, { useRef } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Container, Flex } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

// Define the motion components
const MotionBox = motion(Box);
const MotionTr = motion(Tr);

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <MotionBox
    id="skills"
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    bg="#f4f4f4"
    minHeight="100vh" // Full screen height
    display="flex"
    flexDirection="column"
    justifyContent="center" // Center content vertically
    alignItems="center"
    p={4} // Adjust padding as needed
  >
      <Container maxW="container.lg" >
        <Flex direction="row" align="center" w="auto">
          <Box w="full">
            <Table variant="simple" size="sm">
              <Thead>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Th colSpan={4} color="green.400" fontSize="medium">Skills</Th>
                  <Th>Languages</Th>
                  <Th>Frameworks</Th>
                  <Th>Tools</Th>
                  <Th>Fields</Th>
                </MotionTr>
              </Thead>
              <Tbody>
              <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Td colSpan={4}></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>C++</Td>
                  <Td>Flask</Td>
                  <Td>OpenGL</Td>
                  <Td>Game Development</Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>C</Td>
                  <Td>Django</Td>
                  <Td>Vulkan</Td>
                  <Td>Robotics</Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>Python</Td>
                  <Td>PyTorch</Td>
                  <Td>Docker</Td>
                  <Td>Web Development</Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>Java</Td>
                  <Td>Qt</Td>
                  <Td>Git</Td>
                  <Td>AI/Deep Learning</Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>JavaScript</Td>
                  <Td>ROS</Td>
                  <Td>Qt</Td>
                  <Td></Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Td colSpan={4}></Td>
                  <Td>HTML/CSS</Td>
                  <Td></Td>
                  <Td>MySQL</Td>
                  <Td></Td>
                </MotionTr>
                <MotionTr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <Td colSpan={4}></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </MotionTr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Container>
    </MotionBox>
  );
}

export default Skills;
