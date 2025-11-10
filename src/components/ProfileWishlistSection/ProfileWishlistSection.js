"use client";

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid, Typography} from "@mui/material";
import MenuProfileSection from "@/components/ProfileMainSection/MenuProfileSection";
import ProfileWishlistContent from "@/components/ProfileWishlistSection/ProfileWishlistContent";
import wishlistService from "@/services/wishlist.service";
import {deleteProductFromWishlist} from "@/store/wishlist/actions";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/ProfileWishlistSection/ProfileWishlistSection.module.scss";


const ProfileWishlistSection = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const products = useSelector(state => state.wishlist.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const data = await wishlistService.getItems();
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        };

        fetchProducts();
    }, [dispatch]);

    const handleDeleteProduct = async (productId) => {
        try {
            await wishlistService.removeItem(productId);
            dispatch(deleteProductFromWishlist(productId));
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <Box component="section" className={styles.wishlistContainer}>
            {loading ? <Loader /> :
                <Container>
                    <Typography variant="h3" className={styles.mainTitle}>Wishlist</Typography>
                    <Grid container>
                        <Grid item xs={12} md={4} lg={3}>
                            <MenuProfileSection />
                        </Grid>
                        <Grid item xs={12} md={8} lg={9}>
                            <Grid container spacing={2} className={styles.mainContentContainer}>
                                <Grid item xs={12} md={12} lg={12}>
                                    {products.length <= 0 && (
                                        <Typography variant="body1" className={styles.titleProduct}>No favorite products!</Typography>
                                    )}
                                </Grid>
                                {products.map((product) => (
                                    <Grid item xs={12} lg={4} md={6} sm={12} key={product.id} className={styles.contentContainer}>
                                        <ProfileWishlistContent product={product.product} handleDeleteProduct={handleDeleteProduct} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
        </Box>
    );
};

export default ProfileWishlistSection;