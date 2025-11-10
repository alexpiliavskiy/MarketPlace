import React from 'react';
import Link from "next/link";
import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import {FavoriteBorder} from "@mui/icons-material";
import styles from '@/components/ProductMeta/ProductMeta.module.scss';

const ProductMeta = ({setQuantity, quantity, product, handleAddToBasket, handleAddToWishlist}) => {
    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <Box className={styles.productMetaContainer}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Box className={styles.quantityControl}>
                        <Button className={styles.minusBtn} onClick={handleDecrease}>-</Button>
                        <Typography className={styles.text} variant="body1">{quantity}</Typography>
                        <Button className={styles.plusBtn} onClick={handleIncrease}>+</Button>
                    </Box>

                </Grid>
                <Grid item>
                    <Button onClick={() => handleAddToBasket(product.id, product.sizes[0].name, product.colors[0].name)} className={styles.addToCartBtn} variant="contained">
                        ADD TO CART
                    </Button>
                </Grid>
            </Grid>
            <Box onClick={() => handleAddToWishlist(product.id)} className={styles.actionButtons}>
                <Typography className={styles.addLink} variant="body2">
                    <IconButton className={styles.favoritesBtn}>
                        <FavoriteBorder />
                    </IconButton>
                    ADD TO WISHLIST
                </Typography>
                <Typography variant="body2"><Link className={styles.shareLink} href="https://www.instagram.com/" target="_blank">
                    <IconButton className={styles.shareBtn}>
                        <ShareIcon />
                    </IconButton>
                    SHARE
                </Link>
                </Typography>
            </Box>
            <Box className={styles.tagSection}>
                <Typography className={styles.skuLeftText} variant="body1">
                    SKU: <Typography component="span" variant="body1" className={styles.skuLeftLink}>N/A</Typography>
                </Typography>
              <Box className={styles.categoriesContainer}>
                  <Typography className={styles.categoryTitle} variant="body1">CATEGORIES:</Typography>
                  {product?.categories?.map((category) => (
                      <Link key={category.id} className={styles.categorySubTitle} href="/shop">{category.name}</Link>
                  ))}
              </Box>
                <Box className={styles.tagsContainer}>
                    <Typography className={styles.tagTitle} variant="body1">TAGS:</Typography>
                    {product?.categories?.map((category) => (
                        <Link key={category.id} className={styles.tagSubTitle} href="/shop">{category.slug}</Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductMeta;
