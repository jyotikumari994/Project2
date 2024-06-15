// src/pages/ProductDetails.js
import { useState, useEffect } from 'react';
import { Box, Button, Image, Text, useToast, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const toast = useToast();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`API_ENDPOINT_PRODUCTS/${id}`);
                setProduct(response.data);
            } catch (error) {
                setError('Failed to fetch product details.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        toast({
            title: "Item added to cart",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
        setIsDialogOpen(false);
    };

    if (loading) return <Spinner />;
    if (error) return <Text color="red.500">{error}</Text>;

    return (
        <Box padding="1rem">
            <Image src={product.image} alt={product.title} mb="4" />
            <Text fontSize="2xl">{product.title}</Text>
            <Text>{product.category}</Text>
            <Text>{product.description}</Text>
            <Text fontSize="xl" fontWeight="bold">${product.price}</Text>
            <Button onClick={() => setIsDialogOpen(true)} colorScheme="blue">Add to Cart</Button>
            {isDialogOpen && (
                <Box>
                    <Text>Are you sure you want to add this item to cart?</Text>
                    <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleAddToCart}>Confirm</Button>
                </Box>
            )}
        </Box>
    );
};

export default ProductDetailsPage;
