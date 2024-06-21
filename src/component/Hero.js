import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../assets/q.webp'; // Ensure this path is correct

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '45vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome to Our E-Commerce Store
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover Amazing Products at Unbeatable Prices
        </Typography>

      </Box>
    </Box>
  );
};

export default Hero;
