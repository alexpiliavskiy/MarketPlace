import React from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

const ModalDelete = ({params, open, handleClose, onDelete}) => {
    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to delete?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={(event) => onDelete(event, params.row.id)}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ModalDelete;