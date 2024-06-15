// src/components/ProductCard.js
import { Box, Button, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4">
            <Text fontSize="xl" mb="2">{product.title}</Text>
            <Text mb="2">{product.category}</Text>
            <Text mb="2">${product.price}</Text>
            <Button as={RouterLink} to={`/products/${product.id}`} colorScheme="blue">More Details</Button>
        </Box>
    );
};

export default ProductCard;
