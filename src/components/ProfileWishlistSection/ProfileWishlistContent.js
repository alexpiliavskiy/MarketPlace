import React from 'react';
import Link from "next/link";
import {Box, IconButton, Typography} from "@mui/material";
import {DeleteOutlined, FavoriteBorder} from "@mui/icons-material";
import styles from "@/components/ProfileWishlistSection/ProfileWishlistContent.module.scss";

const ProfileWishlistContent = ({ product, handleDeleteProduct }) => {
    return (
        <Box component="section" className={styles.cardShopContainer}>
            <Box className={styles.favoriteIcon}>
                <IconButton className={styles.favoriteButton} aria-label="like">
                    <FavoriteBorder />
                </IconButton>
            </Box>
            <Box className={styles.removeIcon}>
                <IconButton onClick={() => handleDeleteProduct(product.id)} className={styles.removeButton} aria-label="remove">
                    <DeleteOutlined />
                </IconButton>
            </Box>
            <Box className={styles.cardShopCategory}>
                <Box className={styles.cardShopCategoryImage}>
                    <Box className={styles.frontImage}>
                        <img src="/product_1.jpg" alt="ShopItemProduct"/>
                    </Box>
                    <Box className={styles.backImage}>
                        <img src="/product_1-1.jpg" alt="ShopItemProduct"/>
                    </Box>
                </Box>
                <Box className={`${styles.cardCategoryContent}`}>
                    <Typography className={styles.title} variant="span">{product.title}</Typography>
                    <Box className={styles.priceGroup}>
                        <Typography variant="body1" className={`${product.salePrice ? styles.price : ''}`}>${product.price}</Typography>
                        {<Typography variant="body1" className={styles.salePrice}>${product.salePrice}</Typography>}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileWishlistContent;