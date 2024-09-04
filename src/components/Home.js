import React from 'react';
import Particles from 'react-tsparticles';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import { distance } from 'framer-motion';

const Background = ({ entered }) => {
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
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 90,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 80,
            },
            repulse: {
                distance: 300,
                duration: 0.2,
            },
        },
    },
    particles: {
        color: {
            value: ["#335c67", "#fff3b0", "#e09f3e", "#9e2a2b", "#540b0e"],
        },
        move: {
            angle: {
                offset: 45,
                value: 90,
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
                minimumValue: 1,
            },
            value: {
                min: 0.1,
                max: 0.5,
            },
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            random: {
                enable: true,
                minimumValue: 1,
            },
            value: {
                min: 1,
                max: 10,
            },
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        position: {
            x: {
                min: 0,
                max: 100,
            },
            y: {
                min: 0,
                max: 100,
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
      <Particles id="tsparticles" options={options} />
 {/* Main Content */}
 <Container maxW="container.md" zIndex={2} position="relative">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color="white">
            Alexander Robins
          </Heading>
          <Heading as="h2" size="lg" fontWeight="medium" color="white">
            Software Engineer - Leeds
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

export default Background;
