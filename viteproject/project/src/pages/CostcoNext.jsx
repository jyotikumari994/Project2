// src/pages/CostcoNext.jsx
import React from 'react';
import { Box, Button, Divider, Flex, Heading, HStack, Image, Input, InputGroup, InputLeftElement, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Dummy data for the brands
const brands = [
  { name: "Brand 1", price: "$100", image: "https://costconext.com/wp-content/uploads/2024/04/DB-Brand-Directory-Tile-521x235-1.jpg" },
  { name: "Brand 2", price: "$200", image: "https://costconext.com/wp-content/uploads/2024/04/DB-Brand-Directory-Tile-521x235-1.jpg" },
  { name: "Brand 3", price: "$300", image: "path/to/brand-logo3.png" },
  { name: "Brand 4", price: "$400", image: "path/to/brand-logo4.png" },
  { name: "Brand 5", price: "$500", image: "path/to/brand-logo5.png" },
  { name: "Brand 6", price: "$600", image: "path/to/brand-logo6.png" },
  { name: "Brand 7", price: "$700", image: "path/to/brand-logo7.png" },
  { name: "Brand 8", price: "$800", image: "path/to/brand-logo8.png" },
  { name: "Brand 9", price: "$900", image: "path/to/brand-logo9.png" },
  { name: "Brand 10", price: "$1000", image: "path/to/brand-logo10.png" },
  { name: "Brand 11", price: "$1100", image: "path/to/brand-logo11.png" },
  { name: "Brand 12", price: "$1200", image: "path/to/brand-logo12.png" },
  { name: "Brand 13", price: "$1300", image: "path/to/brand-logo13.png" },
  { name: "Brand 14", price: "$1400", image: "path/to/brand-logo14.png" },
  { name: "Brand 15", price: "$1500", image: "path/to/brand-logo15.png" },
  { name: "Brand 16", price: "$1600", image: "path/to/brand-logo16.png" },
  { name: "Brand 17", price: "$1700", image: "path/to/brand-logo17.png" },
  { name: "Brand 18", price: "$1800", image: "path/to/brand-logo18.png" },
  { name: "Brand 19", price: "$1900", image: "path/to/brand-logo19.png" },
  { name: "Brand 20", price: "$2000", image: "path/to/brand-logo20.png" },
];

const CostcoNext = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box width="100%" padding="20px">
      {/* First Section: Heading */}
      <Heading as="h1" size="xl" marginBottom="20px">Costco Next</Heading>
      
      {/* Second Section: Logo and Search */}
      <Flex alignItems="center" justifyContent="space-between" marginBottom="20px">
        <HStack spacing={4}>
          <Image src="path/to/costco-logo.png" alt="Costco Logo" height="50px" />
          <Divider orientation="vertical" height="50px" />
          <Heading as="h2" size="md">Next</Heading>
        </HStack>
        <HStack spacing={4}>
          <InputGroup width="300px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Button colorScheme="blue">Sign In</Button>
        </HStack>
      </Flex>

      {/* Third Section: Buttons */}
      <Flex justifyContent="space-between" marginBottom="20px">
        <VStack spacing={4}>
          <Button colorScheme="blue">Button 1</Button>
          <Button colorScheme="blue">Button 2</Button>
          <Button colorScheme="blue">Button 3</Button>
        </VStack>
        <VStack spacing={4}>
          <Button colorScheme="blue">Button 4</Button>
          <Button colorScheme="blue">Button 5</Button>
          <Button colorScheme="blue">Button 6</Button>
          <Button colorScheme="blue">Button 7</Button>
          <Button colorScheme="blue">Button 8</Button>
        </VStack>
      </Flex>

      {/* Fourth Section: Sliders */}
      <Box marginBottom="20px">
        <Slider {...settings}>
          <Box width="100%">
            <Image src="path/to/your/image1.jpg" alt="Slide 1" width="100%" />
          </Box>
          <Box width="100%">
            <Image src="path/to/your/image2.jpg" alt="Slide 2" width="100%" />
          </Box>
          <Box width="100%">
            <Image src="path/to/your/image3.jpg" alt="Slide 3" width="100%" />
          </Box>
          <Box width="100%">
            <Image src="path/to/your/image4.jpg" alt="Slide 4" width="100%" />
          </Box>
          <Box width="100%">
            <Image src="path/to/your/image5.jpg" alt="Slide 5" width="100%" />
          </Box>
        </Slider>
      </Box>

      {/* Fifth Section: All Brands */}
      <Heading as="h3" size="lg" marginBottom="20px">All Brands</Heading>
      <SimpleGrid columns={4} spacing={10}>
        {brands.map((brand, index) => (
          <Box key={index} padding="10px" border="1px solid #ccc" borderRadius="8px">
            <Image src={brand.image} alt={brand.name} height="100px" marginBottom="10px" />
            <Text>{brand.name}</Text>
            <Text>{brand.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CostcoNext;
