import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const Snack = ({open, handleClose}) => {
    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert severity="success">Successfully!</Alert>
        </Snackbar>
    );
};

export default Snack;