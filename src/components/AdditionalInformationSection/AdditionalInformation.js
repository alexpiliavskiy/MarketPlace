import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

import styles from "@/components/AdditionalInformationSection/AdditionalInformation.module.scss";

const AdditionalInformation = () => {
    return (
        <Box component="section">
            <Grid className={styles.infoContainer} container spacing={2}>
                <Typography className={styles.title} variant="h5">Weight</Typography>
                <Typography className={styles.text} variant="body1">1.25 kg</Typography>

                <Typography className={styles.title} variant="h5">Dimensions</Typography>
                <Typography className={styles.text} variant="body1">90 x 60 x 90 cm</Typography>

                <Typography className={styles.title} variant="h5">Size</Typography>
                <Typography className={styles.text} variant="body1">XS, S, M, L, XL</Typography>

                <Typography className={styles.title} variant="h5">Color</Typography>
                <Typography className={styles.text} variant="body1">Black, Orange, White</Typography>

                <Typography className={styles.title} variant="h5">Storage</Typography>
                <Typography className={styles.text} variant="body1">
                    Relaxed fit shirt-style dress with a rugged feel
                </Typography>
            </Grid>
        </Box>
    );
};

export default AdditionalInformation;