import React from 'react';
import Link from "next/link";
import {Box, Button, Container, Typography} from "@mui/material";

import styles from "@/components/BlogSection/BlogItemSection.module.scss";

const BlogItem = ({ blog }) => {
    return (
            <Container className={styles.cardBlogContainer}>
                <Box className={styles.newsItemCategory}>
                    <Box className={styles.newsCategoryItemImage}>
                        <img src={blog.imageUrl} alt="Blog" />
                    </Box>
                    <Box className={styles.newsCategoryContent}>
                        <Box>
                            <Box className={styles.newsInfoContainer}>
                                <Typography className={`${styles.subTitle} textUppercase`} variant="h6">{blog.subTitle}</Typography>
                                <Typography className={`${styles.data} textUppercase`} variant="h6">{blog.data}</Typography>
                            </Box>
                            <Box className={styles.mainContainer}>
                                <Typography className={`${styles.title} textUppercase`} variant="h6">
                                    <Link href={`blog/${blog.id}`} passHref>{blog.title}</Link>
                                </Typography>
                                <Typography className={styles.description} variant="h6">{blog.description}</Typography>
                            </Box>
                        </Box>
                        <Button className={styles.readingBtn} variant="text">
                            <Link href={`blog/${blog.id}`} passHref>
                                {blog.readingBtn}
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
};

export default BlogItem;