import React from 'react';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';

function Home() {
  return (
    <Box
      as="section"
      id="home"
      bgGradient="linear(to-r, teal.500, green.500)"
      // color="white"
      minHeight="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.md">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Alexander Robins
          </Heading>
          <Heading as="h2" size="lg" fontWeight="medium">
            Software Engineer - Leeds
          </Heading>
          <Text fontSize="xl" maxW="600px">
            {/* BSc MEng Computer Science graduate from the University of Leeds. */}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;
