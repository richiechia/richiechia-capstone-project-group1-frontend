import React, { useState } from 'react';
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Input,
  VStack,
  useToast,
  FormControl,
  FormLabel,
  Textarea,
  Text
} from '@chakra-ui/react';

const ImageUploadDisplayPage = () => {
  const toast = useToast();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  // Function to fetch images (you'll replace this with your actual fetching logic)
  const fetchImages = async () => {
    const fetchedImages = await fetch('YOUR_API_ENDPOINT').then(response => response.json());
    setImages(fetchedImages);
  };

  const handleFileChange = (e) => {
    // File upload handling logic here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, implement your submission logic to your backend
    // For demonstration, we'll just show a toast and clear the form.
    toast({
      title: "Submission successful.",
      description: "Your information has been submitted.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setDescription(''); // Clear the text input after submission
    // Optionally, fetch images again if your backend immediately processes and includes the new data
    // fetchImages();
  };

  return (
    <VStack spacing={8}>
      <Box p={5} shadow="md" borderWidth="1px" width="full">
        <FormControl>
          <FormLabel htmlFor="image-upload">Image Upload</FormLabel>
          <Input id="image-upload" type="file" onChange={handleFileChange} accept="image/*" />
          <FormLabel mt={4} htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description here..."
          />
          <Button mt={4} colorScheme="blue" onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" width="full">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Submissions</Text>
        {images.length > 0 ? (
          <SimpleGrid columns={3} spacing={4}>
            {images.map((image, index) => (
              <Image key={index} src={image.url} alt={`Image ${index}`} boxSize="150px" objectFit="cover" />
            ))}
          </SimpleGrid>
        ) : (
          <Text>No records found</Text>
        )}
      </Box>
    </VStack>
  );
};

export default ImageUploadDisplayPage;
