"use client";

import React, {useState} from 'react';
import Link from "next/link";
import {Box, Container, Typography} from "@mui/material";

import styles from "@/components/BlogSection/BlogBannerTitleSection.module.scss";

const BlogBannerTitleSection = () => {
    const [activeLink, setActiveLink] = useState('/blog/?blogs=all');

    const handleLinkClick = (href) => {
        setActiveLink(href);
    };

    const linkLabels = [
        { _id: 1, label: 'ALL', href: '/blog/?blogs=all' },
        { _id: 2,  label: 'COMPANY', href: '/blog/?blogs=company' },
        { _id: 3, label: 'FASHION', href: '/blog/?blogs=fashion' },
        { _id: 4, label: 'STYLE', href: '/blog/?blogs=style' },
        { _id: 5, label: 'TRENDS', href: '/blog/?blogs=trends' },
        { _id: 6, label: 'BEAUTY', href: '/blog/?blogs=beauty' }
    ];

    return (
        <Box component="section" textAlign="center" className={`${styles.bannerTitleSection} ds`}>
            <Container>
                <Typography className={`${styles.title} textUppercase`} variant="h2">The Blog</Typography>
                <Box>
                    <Box className={styles.shopLinkCatalog}>
                        {linkLabels.map((link, _id) => (
                            <Link
                                href={link.href}
                                key={link._id}
                                className={activeLink === link.href ? `${styles.activeLink}` : `${styles.shopLink}`}
                                onClick={() => handleLinkClick(link.href)}
                            >{link.label}</Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BlogBannerTitleSection;