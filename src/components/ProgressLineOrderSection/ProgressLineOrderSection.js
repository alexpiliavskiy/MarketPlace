"use client";

import React, {useState} from 'react';
import Link from "next/link";
import {Box, Grid, Paper, Typography} from "@mui/material";
import styles from "@/components/ProgressLineOrderSection/ProgressLineOrderSection.module.scss";

const ProgressLineOrderSection = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleClick = (step) => {
        setActiveStep(step);
    };

    return (
        <Box component="section">
            <Grid container spacing={2} className={styles.progressContainer}>
                <Grid item sm={12} md={4}>
                    <Box className={styles.linkProgress} onClick={() => handleClick(1)}>
                        <Typography variant="body1" className={styles.numberProgress}>01</Typography>
                        <Box>
                            <Link href={`/shop/basket`}>
                                <Typography className={`${styles.progressTitle} ${activeStep >= 1 ? styles.isActive : ''}`}>SHOPPING BAG</Typography>
                                <Typography className={styles.progressSubTitle}>Manage Your Items List</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} md={4}>
                <Box className={styles.linkProgress} onClick={() => handleClick(2)}>
                        <Typography variant="body1" className={styles.numberProgress}>02</Typography>
                        <Box>
                            <Link href={`/shop/check`}>
                                <Typography className={`${styles.progressTitle} ${activeStep >= 2 ? styles.isActive : ''}`}>SHIPPING AND CHECKOUT</Typography>
                                <Typography className={styles.progressSubTitle}>Checkout Your Items List</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} md={4}>
                <Box className={styles.linkProgress} onClick={() => handleClick(3)}>
                        <Typography variant="body1" className={styles.numberProgress}>03</Typography>
                        <Box>
                            <Link href={`/shop/confirmation`}>
                                <Typography className={`${styles.progressTitle} ${activeStep >= 3 ? styles.isActive : ''}`}>CONFIRMATION</Typography>
                                <Typography className={styles.progressSubTitle}>Review And Submit Your Order</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box className={styles.progressLine}>
                <Paper className={styles.progressFill} style={{ width: `${(activeStep / 3) * 100}%` }} />
            </Box>
        </Box>
    );
};

export default ProgressLineOrderSection;