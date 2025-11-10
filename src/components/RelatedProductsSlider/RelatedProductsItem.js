import React from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import Link from "next/link";

import styles from "@/components/RelatedProductsSlider/RelatedProducts.module.scss";
import {FavoriteBorder} from "@mui/icons-material";


const RelatedProductsItem = ({ product }) => {
    return (
        <Box className={styles.itemContainer}>
            <Box className={styles.favoriteIcon}>
                <IconButton className={styles.favoriteButton} aria-label="like">
                    <FavoriteBorder />
                </IconButton>
            </Box>
            <Box className={styles.cardShopCategory}>
                <Box className={styles.cardShopCategoryImage}>
                    <Box className={styles.frontImage}>
                        <img src={product.imageUrl[0]} alt="BlogItem"/>
                    </Box>
                    <Box className={styles.backImage}>
                        <img src={product.imageUrl[1]} alt="BlogItem"/>
                    </Box>
                    <Box className={styles.viewPriceButton}>
                        <Button className={styles.buttonInfoCart}>ADD TO CART</Button>
                    </Box>
                </Box>
                <Box className={`${styles.cardCategoryContent}`}>
                    <Typography className={styles.title} variant="span">{product.title}</Typography>
                    <Typography className={styles.description} variant="h6">
                        <Link href={`shop/${product._id}`} passHref>
                            {product.description}
                        </Link>
                    </Typography>
                    <Box className={styles.priceGroup}>
                        <Typography variant="body1" className={`${product.salePrice ? styles.price : ''}`}>{product.price}</Typography>
                        {<Typography variant="body1" className={styles.salePrice}>{product.salePrice}</Typography>}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RelatedProductsItem;