import React from 'react';
import {Box} from "@mui/material";
import styles from "@/components/BrandSectionAbout/BrandSection.module.scss";

const BrandAboutItem = ({ item }) => {
    return (
        <Box className={styles.shopItemCategory}>
            <Box className={styles.cardCategoryItemImage}>
                <img src={item.imageUrl} alt="BrendCategory"/>
            </Box>
        </Box>
    );
};

export default BrandAboutItem;