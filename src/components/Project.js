import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';

function Project({ title, description, link, image, video, gif }) {
  return (
    <Flex
      className="project-item"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      bg="gray.500"
      p={4}
      borderRadius="md"
      boxShadow="md"
      mb={6}
    >
      {/* Video Section */}
      {video && (
        <Box
          flex="1.5" // Increase the flex value for the video
          maxW={{ base: '100%', md: '60%' }} // Increase the max width for larger screens
          mr={{ base: 0, md: 6 }}
          mb={{ base: 4, md: 0 }}
        >
          <ReactPlayer
            url={video}
            controls={true}
            width="100%"
            height="auto" // Ensures the video is visible
          />
        </Box>
      )}

      {/* Content Section */}
      <Box flex="1">
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>

        {image && (
          <Image
            src={image}
            alt={`${title} screenshot`}
            mb={4}
            borderRadius="md"
            maxWidth="100%"
          />
        )}

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
