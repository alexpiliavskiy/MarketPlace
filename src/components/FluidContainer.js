import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function FluidContainer({children}) {
    return (
        <Container maxWidth={false} sx={{ padding: 0 }}>
            <Box sx={{ padding: '16px' }}>
                {children}
            </Box>
        </Container>
    );
}

export default FluidContainer;