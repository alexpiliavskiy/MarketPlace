"use client";

import React from 'react';
import Link from "next/link";
import {Box, Button, Container, IconButton, Typography} from "@mui/material";
import {FavoriteBorder} from "@mui/icons-material";
import styles from "@/components/ShopPageSection/ProductItemSection.module.scss";

const ProductItem = ({ product, handleAddToWishlist, handleAddToBasket }) => {

    return (
            <Container className={styles.cardShopContainer}>
                <Box className={styles.favoriteIcon}>
                    <IconButton onClick={() => handleAddToWishlist(product.id)} className={styles.favoriteButton} aria-label="like">
                        <FavoriteBorder />
                    </IconButton>
                </Box>
                <Box className={styles.cardShopCategory}>
                    <Box className={styles.cardShopCategoryImage}>
                        {product.images && product.images.length ? (
                            <>
                                <Box className={styles.frontImage}>
                                    <img src={`${process.env.NEXT_PUBLIC_SERVER_API}/${product.images[0].path}`} alt="ShopItemProduct"/>
                                </Box>
                                <Box className={styles.backImage}>
                                    <img src={`${process.env.NEXT_PUBLIC_SERVER_API}/${product.images[1].path}`} alt="ShopItemProduct"/>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box className={styles.frontImage}>
                                    <img src="/product_1.jpg" alt="ShopItemProduct"/>
                                </Box>
                                <Box className={styles.backImage}>
                                    <img src="/product_1-1.jpg" alt="ShopItemProduct"/>
                                </Box>
                            </>
                        )}
                        <Box className={styles.viewPriceButton}>
                            <Button onClick={() => handleAddToBasket(product.id, product.sizes[0].name, product.colors[0].name)} className={styles.buttonInfoCart}>ADD TO CART</Button>
                        </Box>
                    </Box>
                    <Box className={`${styles.cardCategoryContent}`}>
                        <Typography className={styles.title} variant="span">{product.brands.name}</Typography>
                        <Typography className={styles.description} variant="h6">
                            <Link href={`shop/${product.id}`} passHref>
                                {product.title}
                            </Link>
                        </Typography>
                        <Box className={styles.priceGroup}>
                            {product.salePrice &&
                                <Typography variant="body1" className={styles.salePrice}>${product.salePrice}</Typography>
                            }
                            <Typography variant="body1" className={`${product.salePrice ? styles.price : ''}`}>${product.price}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
    );
};

export default ProductItem;