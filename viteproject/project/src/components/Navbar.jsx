// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, HStack, Image, Input, Select, Text } from '@chakra-ui/react';
import costcoLogo from '../assets/costco-logo.png'; // Ensure this path is correct

const Navbar = () => {
  return (
    <Box width="100%" borderBottom="1px solid #818ea3">
      <Flex direction="column" align="center" bg="antiquewhite" width="100%">
        <Box width="100%" bg="rgb(94, 94, 176)" textAlign="center">
          <Heading as="h2" size="lg" color="white">Cashper Cooling select 12'memory Queen</Heading>
        </Box>
        <HStack spacing={10} justify="center" width="100%" padding="5px">
          <Link to="/costonext">CostoNext</Link>
          <Link to="/whilesupplieslast">WhileSuppliesLast</Link>
          <Link to="/online-only">Online-Only</Link>
          <Link to="/treasure hunt">Treasure Hunt</Link>
          <Link to="/what'snew">What's New</Link>
          <Link to="/newlowerprice">New Lower Price</Link>
          <Link to="/getemailoffer">Get Email Offer</Link>
          <Link to="/customer service">Customer Service</Link>
              US
          <Select placeholder="" width="40px">
          <option value="us">US</option>
            <option value="us">China</option>
            <option value="us">Japan</option>
            <option value="us">Korea</option>
            <option value="us">America</option>
            {/* Add more countries as needed */}
          </Select>
        </HStack>
      </Flex>
      <Flex bg="antiquewhite" justify="space-around" align="center" width="100%" padding="10px">
        <Image src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png" alt="Costco Wholesale" height="50px" /> {/* Ensure the image component is correct */}
        <Input placeholder="Search" width="650px" />
        <HStack spacing={4}>
          <Link to="/signin">Sign In/Register</Link>
          <Link to="/orders">Order & Return</Link>
          <Link to="/cart">Cart</Link>
        </HStack>
      </Flex>
      <Flex bg="rgb(94, 94, 178)" justify="space-around" align="center" width="100%" height="60px">
        <Link to="/shop">Shop</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/same-day">Same Day</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/business-delivery">Business Delivery</Link>
        <Link to="/optical">Optical</Link>
        <Link to="/pharmacy">Pharmacy</Link>
        <Link to="/services">Services</Link>
        <Link to="/photo">Photo</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/locations">Locations</Link>
      </Flex>
      <Flex bg="antiquewhite" justify="space-around" align="center" width="100%" padding="10px">
        <Box>
          <Text>My Warehouse</Text>
          <Heading as="h5" size="sm">Seattle</Heading>
        </Box>
        <Box>
          <Text>Delivery Location</Text>
          <Heading as="h5" size="sm">98001</Heading>
        </Box>
        <Box marginLeft="auto" marginRight="10px">
          <Link to="/listbuyagain">List/Buy Again</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
