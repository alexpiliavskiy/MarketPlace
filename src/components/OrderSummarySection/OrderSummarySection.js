import React from 'react';
import {Box, Grid, Typography, Divider} from "@mui/material";
import styles from "@/components/OrderSummarySection/OrderSummarySection.module.scss";

const OrderSummarySection = ({ orders }) => {
    return (
        <Box component="section">
            <Grid item xs={12} md={12} className={styles.summaryContainer}>
                    <Typography variant="h5" className={styles.mainTitle}>YOUR ORDER</Typography>
                <Box className={styles.orderSummary}>
                    <Box className={styles.textContent}>
                        <Box className={styles.productLabel}>PRODUCT</Box>
                        <Box className={styles.productLabel}>SUBTOTAL</Box>
                    </Box>
                    {orders.products.map((product, index) => (
                        <React.Fragment key={index}>
                            <Box className={styles.textContent}>
                                <Box className={styles.productItem}>{product.name}</Box>
                                <Box className={styles.productItem}>{product.price}</Box>
                            </Box>
                        </React.Fragment>
                    ))}
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>SUBTOTAL</Box>
                        <Box className={styles.subValue}>{orders.subtotal}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>SHIPPING</Box>
                        <Box className={styles.subValue}>{orders.shipping}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>VAT</Box>
                        <Box className={styles.subValue}>{orders.vat}</Box>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.textContent}>
                        <Box className={styles.subTitle}>TOTAL</Box>
                        <Box className={styles.subValue}>{orders.total}</Box>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default OrderSummarySection;