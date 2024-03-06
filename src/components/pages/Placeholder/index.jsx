import React from 'react';
import { Box, Heading, Text, Container, Center, useColorModeValue } from '@chakra-ui/react';

const PlaceholderPage = () => {
  // Use useColorModeValue hook to define light and dark mode color values
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Container centerContent>
      <Box
        padding="4"
        bg={bgColor} // Use bgColor for background color
        color={textColor} // Use textColor for text color
        maxWidth="2x1"
        marginTop="5"
        borderRadius="md"
        boxShadow="md">
        <Center>
          <Heading
            whiteSpace="nowrap" // Prevent the heading from wrapping
            overflow="hidden"  // Hide overflow
          >Page Under Construction</Heading>
        </Center>
        <Text mt={4} textAlign="center">
          Error 404
        </Text>
        <Text mt={4} textAlign="center">
          This page is currently under development. Please check back later!
        </Text>
      </Box>
    </Container>
  );
};

export default PlaceholderPage;
