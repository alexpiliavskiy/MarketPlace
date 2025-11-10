import React from 'react';
import {Box, Button} from "@mui/material";
import {Stack} from "@mui/system";
import styles from "@/components/UI/ActionsButton.module.scss";

const ActionsButton = ({params, onEdit, openModal }) => {
    return (
        <Box>
            <Stack direction="row" spacing={1} className={styles.btnActionsContainer}>
                <Button
                    className={styles.btnEditProduct}
                    variant="contained"
                    size="small"
                    onClick={(event) => onEdit(event, params.row)}
                >
                    Edit
                </Button>
                <Button
                    className={styles.btnDeleteProduct}
                    variant="contained"
                    size="small"
                    onClick={openModal}
                >
                    Delete
                </Button>
            </Stack>
        </Box>
    );
};

export default ActionsButton;