import React from 'react';
import Link from "next/link";
import {Box, Button, Typography} from "@mui/material";
import styles from "@/components/LatestNewsSection/LatestNewsSection.module.scss";

const LatestNewsItem = ({ item }) => {
    return (
        <Box className={styles.newsItemCategory}>
            <Box className={styles.newsCategoryItemImage}>
                <img src={item.imageUrl} alt="Category" />
            </Box>
            <Box className={styles.newsCategoryContent}>
                <Box className={styles['title-data']}>
                    <Typography className={`${styles.title} textUppercase`} variant="h6">{item.title}</Typography>
                    <Typography className={`${styles.data} textUppercase`} variant="h6">{item.data}</Typography>
                </Box>
                <Button className={styles.description} variant="text">
                    <Link  href={`/blog/${item._id}`} passHref>
                        {item.description}
                    </Link>
                </Button>
            </Box>
        </Box>
    );
};

export default LatestNewsItem;
