import React from 'react';
import Link from "next/link";
import {Box, Button, Typography} from "@mui/material";

import styles from "@/components/CategorySection/CategorySection.module.scss";

const CategoryItem = ({item, withImage}) => {
    return (
        <Box className={styles.cardCategory}>
            {withImage && <Box className={styles.cardCategoryImage}>
                <img src={item.imageUrl} alt="Category"/>
            </Box>}
            <Box className={`${styles.cardCategoryContent} ${withImage ? styles.withImage : ''}`}>
                {item.underTitle && <Typography className={styles.underTitle} variant="h6">{item.underTitle}</Typography>}
                <Typography className={styles.title} variant="h4">{item.title}</Typography>
                <Button variant="text" className={styles.button}>
                    <Link href={`/shop`} passHref>
                        {item.buttonLabel}
                    </Link>
                </Button>
            </Box>
        </Box>
    );
};

export default CategoryItem;