// src/pages/Login.js
import { useState, useEffect } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const toast = useToast();
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.focus();
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post('API_ENDPOINT_LOGIN', { email, password });
            login(response.data.token, email);
            navigate('/home');
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <Box maxWidth="400px" margin="auto" padding="1rem" mt="10">
            <Text mb="4" fontSize="2xl" textAlign="center">Login</Text>
            {error && <Text color="red.500">{error}</Text>}
            <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb="4"
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                mb="4"
            />
            <Button onClick={handleLogin} width="full" colorScheme="blue">Login</Button>
        </Box>
    );
};

export default LoginPage;
