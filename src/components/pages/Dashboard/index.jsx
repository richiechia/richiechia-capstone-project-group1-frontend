import React, { useState, useRef, useEffect } from 'react';
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
  Text,
} from '@chakra-ui/react';

const ImageUploadDisplayPage = () => {
  const toast = useToast();
  const [description, setDescription] = useState('');
  const [data, setData] = useState({ data: [] });
  const [name, setName] = useState('');


  const fetchData = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/get-files`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        toast({
          title: 'Error fetching data',
          description: 'There was an issue fetching the submissions.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  // Code to get all the files
  useEffect(() => {
    fetchData();
    }, []); 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate description and file
    if (!description.trim() || !name.trim()) {
      toast({
        title: 'Error',
        description: 'Both description and an name are required.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
      
    const formData = {
      "user" : name,
      "content" : description,
      "filename" : ""
    }

    try {
      const response = await fetch (`${process.env.REACT_APP_BACKEND_URL}/upload-files`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)});

      if (response.ok) {
      const data = await response.json();
      // Handle success
      toast({
        title: 'Success',
        description: 'Your information and image have been submitted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Clear form fields and reset file input
      setName('');
      setDescription('');

    } else {
      // Handle server errors
      throw new Error('Failed to submit data');
    }
    } catch (error) {
      console.error('Submission error:', error);
    toast({
      title: 'Submission Error',
      description: 'There was a problem submitting your form. Please try again.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    }

    // Clear form fields and reset file input
    console.log("Submitted Name: ", name);
    console.log("Submitted Description: ", description);
    // Reset form
    setName('');
    setDescription('');
    fetchData();
  
  };

  return (
    <VStack spacing={8}>
      <Box p={5} shadow="md" borderWidth="1px" width="full">
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="description" mt={4} isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description"
            />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" width="full">
  <Text fontSize="2xl" fontWeight="bold" mb={4}>Submissions</Text>
  {
    Array.isArray(data['data']) && data['data'].length > 0 ? (
      <SimpleGrid columns={3} spacing={4}>
        {data['data'].map((list, index) => (
          <Box key={index} border="1px" borderColor="gray.200" p={4} borderRadius="md" boxShadow="md" m={2}>
            <Text mb={2}>{list.content}</Text>
            <Text fontWeight="bold">- {list.user}</Text>
          </Box>
        ))}
      </SimpleGrid>
    ) : (
      <Text>No records found</Text>
    )
  }
</Box>
    </VStack>
  );
};

export default ImageUploadDisplayPage;
