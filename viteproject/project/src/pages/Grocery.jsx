// src/pages/Grocery.jsx
import React, { useState, useEffect } from 'react';
import { Box, Image, SimpleGrid, Heading, Text, Container } from '@chakra-ui/react';

const Grocery = () => {
  const images = [
    'https://mobilecontent.costco.com/live/resource/img/24g1007/d_24g1007_cat_hero_prepare.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24g0904/d_24g0904_hero_pine_sol.jpg',
    'https://mobilecontent.costco.com/staging/resource/img/24w08171/d_24w08171_may_mvm_cover_hero_v3.jpg',
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={4}>Grocery</Heading>
      <Box mb={4} overflow="hidden">
        <Image src={images[currentImage]} alt="Grocery" w="full" />
      </Box>
      <SimpleGrid columns={4} spacing={4} mb={4}>
        <Image src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1111161-847__1&recipeName=350" alt="Small 1" />
        <Image src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1727590-847__1&recipeName=350" alt="Small 2" />
        <Image src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=3223955-847__1&recipeName=350" alt="Small 3" />
        <Image src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1761722-847__1&recipeName=350" alt="Small 4" />
      </SimpleGrid>
      <Heading as="h2" mb={4}>Shop by Grocery</Heading>
      <SimpleGrid columns={6} spacing={4}>
        <Box bg="gray.100" p={4} borderRadius="md">Category 1</Box>
        <Box bg="gray.100" p={4} borderRadius="md">Category 2</Box>
        <Box bg="gray.100" p={4} borderRadius="md">Category 3</Box>
        <Box bg="gray.100" p={4} borderRadius="md">Category 4</Box>
        <Box bg="gray.100" p={4} borderRadius="md">Category 5</Box>
        <Box bg="gray.100" p={4} borderRadius="md">Category 6</Box>
      </SimpleGrid>
    </Container>
  );
};

export default Grocery;
