import React from 'react';
import Link from "next/link";
import {Box, Container, Grid, TextField, Typography} from "@mui/material";
import BaseButton from "@/components/BaseButton/BaseButton";
import styles from "@/components/ShoppingTrackingSection/ShoppingTrackingSection.module.scss";

const ShoppingTrackingSection = () => {
    return (
        <Box component="section" className={styles.cartTrackingPageContainer}>
            <Container>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} lg={6} textAlign="center">
                        <Box className={styles.infoContainer}>
                            <Typography component="h3" className={styles.cartTitle}>Order Tracking</Typography>
                            <Typography component="h6" className={styles.cartsubTitle}>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</Typography>
                        </Box>
                        <Grid className={styles.infoInput} container spacing={2}>
                            <Grid item xs={12}>
                                <TextField margin="dense" type="text" label="Order ID" fullWidth  required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField margin="dense" type="email" label="Billing email" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <Link href={`/shop/cart`}>
                                    <BaseButton variant="text" className={styles.placeTrackingButton}>
                                        TRACK
                                    </BaseButton>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ShoppingTrackingSection;