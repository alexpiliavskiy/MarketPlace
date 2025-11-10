import React from 'react';
import {Box, Button} from "@mui/material";
import styles from "@/components/ShowMoreBtn/showMoreBtn.module.scss";

const ShowMoreBtn = ({ onClick }) => {
    return (
        <Box className={styles.btnContainer}>
            <Button className={styles.showMoreBtn} variant="text" onClick={onClick}>SHOW MORE</Button>
        </Box>
    );
};

export default ShowMoreBtn;