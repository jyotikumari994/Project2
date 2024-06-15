// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ProductDetailsPage from './pages/ProductDetails';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                        <Route path="/products/:id" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
                    </Routes>
                </Router>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
