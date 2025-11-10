import React from 'react';
import {Box, Grid, Typography, Divider} from "@mui/material";
import styles from "@/components/OrderSummarySection/OrderSummarySection.module.scss";


const CartSummary = ({ order, totalSum }) => {
    const totalMainSum = (Number(totalSum) + Number(order.vat)).toFixed(2);

    return (
        <Box component="section">
            <Grid item xs={12} md={12} className={styles.summaryContainer}>
                <Typography variant="h5" className={styles.mainTitle}>BASKET TOTALS</Typography>
                <Box className={styles.orderSummary}>
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>SUBTOTAL</Box>
                        <Box className={styles.subValue}>${totalSum}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>SHIPPING</Box>
                        <Box className={styles.subValue}>{order.shipping}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>VAT</Box>
                        <Box className={styles.subValue}>${order.vat}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>TOTAL</Box>
                        <Box className={styles.subValue}>${totalMainSum}</Box>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default CartSummary;