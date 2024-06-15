// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();

    return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
