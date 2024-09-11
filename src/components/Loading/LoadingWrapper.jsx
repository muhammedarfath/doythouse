// src/LoadingWrapper.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './LoadingSpinner';

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loading/> : children;
};

export default LoadingWrapper;
