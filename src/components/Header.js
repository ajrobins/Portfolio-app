// components/Home.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Home() {
  return (
    <MotionBox
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
      w="full"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box>
        <Heading as="h1">Alexander Robins</Heading>
        <Heading as="h2">Software Engineer - Leeds</Heading>
        <Text mt={4}>BSc MEng Computer Science graduate from the University of Leeds. Mainly experienced with Game Development, Robotics, and Web Development.</Text>
      </Box>
    </MotionBox>
  );
}

export default Home;
