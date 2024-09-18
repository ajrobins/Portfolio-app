import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';

function Project({ title, description, link, image, video, gif }) {
  return (
    <Flex
      className="project-item"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      bg="gray.100"
      p={4}
      borderRadius="md"
      boxShadow="md"
      mb={6}
    >
      {/* Video Section */}
      {video && (
        <Box
          flex="1.5"
          maxW={{ base: '100%', md: '60%' }}
          mr={{ base: 0, md: 6 }}
          mb={{ base: 4, md: 0 }}
        >
          <ReactPlayer
            url={video}
            controls={true}
            width="100%"
            height="auto"
          />
        </Box>
      )}

      {/* Image Section */}
      {image && (
        <Box
          flex="1.5"
          display="flex"
          // alignItems="center"
          justifyContent="center"
          maxW={{ base: '100%', md: '60%' }}
          // maxH="300px" // Adjust the max height as needed
          mr={{ base: 0, md: 6 }}
          mb={{ base: 4, md: 0 }}
        >
          <Image
            src={image}
            alt={`${title} screenshot`}
          
            borderRadius="md"
            objectFit="cover" // Ensures the image doesn't stretch
            maxH="80%" // Makes the image responsive to the column's height
            maxW="80%" // Ensures the image width doesn't overflow
          />
        </Box>
      )}

      {/* Content Section */}
      <Box flex="1">
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>

        {gif && (
          <Image
            src={gif}
            alt={`${title} gif`}
            mb={4}
            borderRadius="md"
            maxWidth="100%"
          />
        )}

        {link && (
          <Link
            href={link}
            isExternal
            color="teal.500"
            fontWeight="bold"
            mt={4}
          >
            View on GitHub
          </Link>
        )}
      </Box>
    </Flex>
  );
}

export default Project;
