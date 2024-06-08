import React from 'react';
import { Box, Divider, Input, Button, SimpleGrid, VStack, HStack, Text, Image } from '@chakra-ui/react';
//import { FaFacebook, FaInstagram, FaPinterest, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box mt={8} p={4} bg="gray.200">
      {/* First div with 5 columns */}
      <SimpleGrid columns={5} spacing={4}>
        <VStack align="start">
          <Text fontWeight="bold">Customer service</Text>
          <HStack>
            <Image src="https://customerservice.costco.com/" alt="Logo" />
            <Text>Get Help</Text>
          </HStack>
        </VStack>i
        <VStack align="start">
          <Text fontWeight="bold">Find a Warehouse</Text>
          <Input placeholder="Search" />
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Enter Email</Text>
          <HStack>
            <Input placeholder="Enter your email" />
            <Button>Go</Button>
          </HStack>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Follow Us</Text>
          <HStack>
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
          </HStack>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Get the Costco App</Text>
          <HStack>
            <FaApple />
            <Text>Costco</Text>
          </HStack>
        </VStack>
      </SimpleGrid>
      <Divider my={4} />
      {/* Second div with 4 columns */}
      <SimpleGrid columns={4} spacing={4}>
        <VStack align="start">
          <Text fontWeight="bold">About Us</Text>
          <Text>Charitable Contribution</Text>
          <Text>jj</Text>
          <Text>nn</Text>
          <Text>jj</Text>
          <Text>y</Text>
          <Text>j</Text>
          <Text>g</Text>
          <Text>k</Text>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Membership</Text>
          <Text>cc.b</Text>
          <Text>jj</Text>
          <Text>nn</Text>
          <Text>jj</Text>
          <Text>y</Text>
          <Text>j</Text>
          <Text>g</Text>
          <Text>k</Text>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Customer Service</Text>
          <Text>cc.b</Text>
          <Text>jj</Text>
          <Text>nn</Text>
          <Text>jj</Text>
          <Text>y</Text>
          <Text>j</Text>
          <Text>g</Text>
          <Text>k</Text>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold">Location & Service</Text>
          <Text>cc.b</Text>
          <Text>jj</Text>
          <Text>nn</Text>
          <Text>jj</Text>
          <Text>y</Text>
          <Text>j</Text>
          <Text>g</Text>
          <Text>k</Text>
        </VStack>
      </SimpleGrid>
      <Divider my={4} />
      {/* Third div with 8 columns */}
      <SimpleGrid columns={8} spacing={4}>
        <Text>Site</Text>
        <Text>Map</Text>
        <Text>b</Text>
        <Text>m</Text>
        <Text>n</Text>
        <Text>f</Text>
        <Text>u</Text>
        <Text>k</Text>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
