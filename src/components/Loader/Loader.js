import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const Loader = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            gap: 2,
        }}
    >
        <LinearProgress sx={{ width: '50%', height: 6, backgroundColor: '#fff', '& .MuiLinearProgress-bar': { backgroundColor: '#222' }}} />
        <Typography variant="h6">
            Loading...
        </Typography>
    </Box>
);

export default Loader;
