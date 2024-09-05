import React from 'react';
import Particles from 'react-tsparticles';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import { loadFull } from 'tsparticles';

const Home = ({ entered }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {
    // Handle loaded particles
    };
    
    const options = {
        autoPlay: true,
        background: {
          color: {
            value: "",
          },
          image: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1,
        },
       
        detectRetina: true,
        fpsLimit: 90,
        interactivity: {
          detectsOn: "window",
          events: {
           
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200, // Smaller radius for hover effect
              duration: 2,
              opacity: 0.8,
              size: 80, // Adjust size change on hover
            },
         
       
          },
        },
        particles: {
          color: {
            value: ["#335c67", "#fff3b0", "#e09f3e", "#9e2a2b", "#540b0e"], // Predefined array of colors
          },
          move: {
            angle: {
              offset: 45,
              value: 20,
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.75,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 300,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0.1,
              max: 0.8,
            },
            animation: {
              enable: false,
              speed: 5,
              sync: false,
            },
          },
          shape: {
            type: "circle", // Ensures the particles are dots
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 10, // Defines the size range of the dots
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      };

  return (
    <div>
       <Box
      as="section"
      id="home"
      position="relative"
      minHeight="100vh"
      display="flex"
      alignItems="center"
    >
      <Particles 
      id="tsparticles"
      options={options} 
      init={particlesInit}
      loaded={particlesLoaded}
      />

 {/* Main Content */}
 <Container maxW="container.md" zIndex={2} position="relative">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color="white">
            Hi, I'm Alexander Robins
          </Heading>
          <Heading as="h2" size="lg" fontWeight="medium" color="white">
            I'm a Software Engineer based in Leeds
          </Heading>
          <Text fontSize="xl" maxW="600px" color="white">
            {/* BSc MEng Computer Science graduate from the University of Leeds. */}
          </Text>
        </VStack>
      </Container>
      </Box>
    </div>
  );
};

export default Home;
