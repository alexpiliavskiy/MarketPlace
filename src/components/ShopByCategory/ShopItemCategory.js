import React from 'react';
import Link from "next/link";
import {Box, Button, Typography} from "@mui/material";

import styles from "@/components/ShopByCategory/ShopByCategory.module.scss";

const ShopItemCategory = ({ item }) => {
    return (
        <Box className={styles.shopItemCategory}>
            <Box className={styles.cardCategoryItemImage}>
                <img src={item.imageUrl} alt="Category"/>
            </Box>
            <Box className={styles.cardCategoryContent}>
                <Typography className={`${styles.title} textUppercase`} variant="h6">
                    <Link  href={`/shop`} passHref>
                        {item.title}
                    </Link>
                </Typography>
                <Typography className={styles.description} variant="h6">{item.description}</Typography>
            </Box>
        </Box>
    );
};

export default ShopItemCategory;