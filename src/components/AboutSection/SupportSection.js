import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import styles from "@/components/AboutSection/SupportSection.module.scss";

const SupportSection = () => {
    return (
        <Box component="section">
            <Grid container spacing={4} justifyContent="center" className={styles.supportContainer}>
                <Grid item xs={10} md={4} className={styles.supportItem}>
                    <LocalShippingIcon className={styles.imageSupport} />
                    <Box className={styles.textContainer}>
                        <Typography className={styles.titleSupport} variant="h6">
                            FAST AND FREE DELIVERY
                        </Typography>
                        <Typography className={styles.textSupport} variant="body2">
                            Free delivery for all orders over $140
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={10} md={4} className={styles.supportItem}>
                    <HeadsetMicIcon className={styles.imageSupport} />
                    <Box className={styles.textContainer}>
                        <Typography className={styles.titleSupport} variant="h6">
                            24/7 CUSTOMER SUPPORT
                        </Typography>
                        <Typography className={styles.textSupport} variant="body2">
                            Friendly 24/7 customer support
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={10} md={4} className={styles.supportItem}>
                    <VerifiedUserIcon className={styles.imageSupport} />
                    <Box className={styles.textContainer}>
                        <Typography className={styles.titleSupport} variant="h6">
                            MONEY BACK GUARANTEE
                        </Typography>
                        <Typography className={styles.textSupport} variant="body2">
                            We return money within 30 days
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SupportSection;