import React from 'react';
import Link from "next/link";
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import BaseButton from "@/components/BaseButton/BaseButton";
import styles from "@/components/PaymentMethodsSection/PaymentMethods.module.scss";

const PaymentMethods = ({ orders }) => {
    const paymentMethods = [
        {
            value: 'bank-transfer',
            label: 'Direct Bank Transfer',
            description: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        },
        {
            value: 'check-payment',
            label: 'Check Payment',
            description: 'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu.',
        },
        {
            value: 'cod',
            label: 'Cash on Delivery',
            description: 'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu.',
        },
        {
            value: 'paypal',
            label: 'PayPal',
            description: 'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu.',
        },
    ];

    return (
        <Box component="section">
            <FormControl component="fieldset" className={styles.paymentMethods}>
                <RadioGroup aria-label="payment-method" defaultValue={orders.paymentMethod.toLowerCase().replace(/ /g, '-')}>
                    {paymentMethods.map((method) => (
                        <Box key={method.value} className={styles.paymentMethodContainer}>
                            <FormControlLabel
                                value={method.value}
                                control={<Radio className={styles.ratio} />}
                                label={method.label}
                                className={styles.paymentMethodLabel}
                            />
                            <Typography variant="body2" className={styles.paymentMethodDescription}>
                                {method.description}
                            </Typography>
                        </Box>
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default PaymentMethods;