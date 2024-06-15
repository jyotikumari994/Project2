// src/components/Navbar.js
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { authState, logout } = useAuth();

    return (
        <Flex justify="space-between" padding="1rem" bg="blue.500" color="white">
            {authState.isAuthenticated ? (
                <>
                    <Text>{authState.email}</Text>
                    <Flex>
                        <Link as={RouterLink} to="/home" marginRight="1rem">
                            Home
                        </Link>
                        <Button onClick={logout}>LOGOUT</Button>
                    </Flex>
                </>
            ) : (
                <Link as={RouterLink} to="/login">
                    Login
                </Link>
            )}
        </Flex>
    );
};

export default Navbar;
