import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if the user is authenticated by verifying the presence of a token
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  // If authenticated, render the protected route; otherwise, redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
