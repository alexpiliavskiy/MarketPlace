import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Check} from "@mui/icons-material";
import ProgressLineOrderSection from "@/components/ProgressLineOrderSection/ProgressLineOrderSection";
import OrderSummarySection from "@/components/OrderSummarySection/OrderSummarySection";
import styles from "@/components/ShoppingConfirmationSection/ShoppingConfirmationSection.module.scss";

const ShoppingConfirmationSection = () => {
    const order = {
        orderNumber: '13119',
        date: '27/10/2024',
        total: '$81.40',
        paymentMethod: 'Direct Bank Transfer',
        products: [
            { name: 'Zessi Dresses x 2', price: '$32.50' },
            { name: 'Kirby T-Shirt', price: '$29.90' },
        ],
        subtotal: '$62.40',
        shipping: 'Free shipping',
        vat: '$19',
    };

    const orderDetails = [
        { label: 'Order Number', value: order.orderNumber },
        { label: 'Date', value: order.date },
        { label: 'Total', value: order.total },
        { label: 'Payment Method', value: order.paymentMethod },
    ];

    return (
        <Box component="section" pt="94px" className={styles.cartConfirmPageContainer}>
            <Container>
                <Typography component="h3" className={styles.cartTitle}>Order received</Typography>
                <ProgressLineOrderSection />
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={10} textAlign="center">
                        <Check className={styles.checkIcon} />
                        <Typography variant="h3" className={styles.cartMainTitle}>Your order is completed!</Typography>
                        <Typography variant="h6" className={styles.cartSubTitle}>Thank you. Your order has been received.</Typography>
                    </Grid>
                    <Grid className={styles.orderDetailContainer} item xs={12} lg={10}>
                        {orderDetails.map((detail, index) => (
                            <React.Fragment key={index}>
                                <Box className={styles.orderDetailItem}>
                                    <Typography variant="body1" className={styles.orderDetailTitle}>{detail.label}</Typography>
                                    <Typography variant="body2" className={styles.orderDetailValue}>{detail.value}</Typography>
                                </Box>
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <OrderSummarySection order={order} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ShoppingConfirmationSection;