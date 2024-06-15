// src/pages/Home.js
import { useState, useEffect } from 'react';
import { Box, Grid, Select, Spinner, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const toast = useToast();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('API_ENDPOINT_PRODUCTS');
                setProducts(response.data);
            } catch (error) {
                setError('Failed to fetch products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleSort = (e) => {
        const value = e.target.value;
        setSearchParams({ sort: value });
    };

    const handleFilter = (e) => {
        const value = e.target.value;
        setSearchParams({ filter: value });
    };

    useEffect(() => {
        // Sort and filter logic based on searchParams
        let sortedFilteredProducts = [...products];
        const sort = searchParams.get('sort');
        const filter = searchParams.get('filter');

        if (sort === 'asc') {
            sortedFilteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'desc') {
            sortedFilteredProducts.sort((a, b) => b.price - a.price);
        }

        if (filter) {
            sortedFilteredProducts = sortedFilteredProducts.filter(product => product.category === filter);
        }

        setProducts(sortedFilteredProducts);
    }, [searchParams, products]);

    if (loading) return <Spinner />;
    if (error) return <Text color="red.500">{error}</Text>;

    return (
        <Box padding="1rem">
            <Box display="flex" justifyContent="space-between" mb="4">
                <Select placeholder="Sort by Price" onChange={handleSort}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
                <Select placeholder="Filter by Category" onChange={handleFilter}>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Home Decor">Home Decor</option>
                </Select>
            </Box>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Box>
    );
};

export default HomePage;
