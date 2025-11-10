"use client";

import React, {useEffect, useMemo, useState} from 'react';
import Link from "next/link";
import {
    Box, Container, Grid, TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography, Button
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ProgressLineOrderSection from "@/components/ProgressLineOrderSection/ProgressLineOrderSection";
import CartSummary from "@/components/ShoppingCartSection/CartSummary";
import BaseButton from "@/components/BaseButton/BaseButton";
import basketService from "@/services/basket.service";
import {deleteProductFromBasket, updateProductInBasket} from "@/store/basket/actions";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/ShoppingCartSection/ShoppingCartSection.module.scss";

const ShoppingCartSection = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const products = useSelector(state => state.basket.products);

    const handleDeleteProduct = async (productId) => {
        try {
            await basketService.removeItem(productId);
            dispatch(deleteProductFromBasket(productId));
        } catch (e) {
            console.error(e);
        }
    };

    const handleChangeQuantity = async (productId, count, size, color, realCount) => {
        try {
            if ((count > 0) || (count < 0 && realCount >= 2)) {
                const updatedItemInBasket = await basketService.addItem(productId, count, size, color);
                dispatch(updateProductInBasket(updatedItemInBasket));
            }
        } catch (e) {
            console.error(e);
        }
    };

    const totalSum = useMemo(() => {
        return products.reduce((sum, item) => {
            const price = parseFloat(item.product.price);
            const count = item.count;
            return sum + price * count;
        }, 0).toFixed(2);
    }, [products]);

    const order = {
        orderNumber: 13119,
        date: '27/10/2024',
        total: '$81.40',
        paymentMethod: 'Direct Bank Transfer',
        products: [
            {name: 'Zessi Dresses x 2', price: '$32.50'},
            {name: 'Kirby T-Shirt', price: '$29.90'},
        ],
        subtotal: '$62.40',
        shipping: 'Free shipping',
        vat: 19,
    };

    return (
        <Box component="section" className={styles.cartPage} pt="87px">
            {loading ? <Loader/> :
                <Container>
                    <Typography component="h3" className={styles.cartTitle}>Basket</Typography>
                    <ProgressLineOrderSection/>
                    <Grid className={styles.cartContainer} container spacing={4}>
                        <Grid item xs={12} lg={8}>
                            <TableContainer component={Box} className={styles.tableContainer}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{textAlign: "center"}} className={styles.tableHeader}>
                                            <TableCell align="justify">PRODUCT</TableCell>
                                            <TableCell align="center">PRICE</TableCell>
                                            <TableCell align="center">QUANTITY</TableCell>
                                            <TableCell align="center">SUBTOTAL</TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className={styles.tableBodyContent}>
                                        {/*{products.length <= 0 && (*/}
                                        {/*    <Typography variant="body1" className={styles.titleProduct}>No products!</Typography>*/}
                                        {/*)}*/}
                                        {products.map((product) => (
                                            <TableRow sx={{textAlign: "center"}} key={product.id}
                                                      className={styles.tableRow}>
                                                <TableCell align="justify">
                                                    <Box className={styles.productInfo}>
                                                        <img src="/cart-item-1.jpg" alt={product.title}
                                                             className={styles.imageUrl}/>
                                                        <Box>
                                                            <Typography variant="h6"
                                                                        className={styles.productTitle}>{product.product.title}</Typography>
                                                            <Typography variant="body2"
                                                                        className={styles.headerItem}>Color: {product.color}</Typography>
                                                            <Typography variant="body2"
                                                                        className={styles.headerItem}>Size: {product.size}</Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center"
                                                           className={styles.price}>${product.product.price}</TableCell>
                                                <TableCell align="center">
                                                    <Box className={styles.quantityControl}>
                                                        <Button
                                                            onClick={() => handleChangeQuantity(product.productId, -1, product.size, product.color, product.count)}
                                                            className={styles.quantityBtn}>-</Button>
                                                        <Box className={styles.quantityInput}>{product.count}</Box>
                                                        <Button
                                                            onClick={() => handleChangeQuantity(product.productId, 1, product.size, product.color, product.count)}
                                                            className={styles.quantityBtn}>+</Button>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center"
                                                           className={styles.subQuantity}>${(product.product.price * product.count).toFixed(2)}</TableCell>
                                                <TableCell align="center">
                                                    <Button onClick={() => handleDeleteProduct(product.id)}
                                                            className={styles.removeButton}>×</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Grid item xs={12}>
                                <Box className={styles.cartActions}>
                                    <TextField label="Coupon Code" className={styles.couponInput}/>
                                    <Link href={`/shop/cart`}>
                                        <Button variant="text" className={styles.applyCouponButton}>Apply
                                            Coupon</Button>
                                    </Link>
                                    <Link href={`/shop/cart`}>
                                        <Button variant="text" className={styles.updateCartButton}>Update Cart</Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <CartSummary order={order} totalSum={totalSum}/>
                            <Grid item xs={12} lg={12}>
                                <Link href={`/shop/check`}>
                                    <BaseButton variant="text" className={styles.placeCartButton}>
                                        PROCEED TO CHECKOUT
                                    </BaseButton>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
        </Box>
    );
};

export default ShoppingCartSection;
