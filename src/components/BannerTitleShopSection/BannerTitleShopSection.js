"use client";

import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Box, Container, Typography} from "@mui/material";
import styles from "@/components/BannerTitleShopSection/BannerTitleShopSection.module.scss";

const BannerTitleShopSection = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('/shop/?category=stayhome');

    const handleLinkClick = (href) => {
        setActiveLink(href);
    };

    const linkLabels = [
        { _id: 1, label: 'STAYHOME', href: '/shop/?category=stayhome' },
        { _id: 2,  label: 'NEW IN', href: '/shop/?category=new-in' },
        { _id: 3, label: 'JACKETS', href: '/shop/?category=jackets' },
        { _id: 4, label: 'HOODIES', href: '/shop/?category=hoodies' },
        { _id: 5, label: 'MEN', href: '/shop/?category=men' },
        { _id: 6, label: 'WOMEN', href: '/shop/?category=women' },
        { _id: 7, label: 'TROUSERS', href: '/shop/?category=trousers' },
        { _id: 8, label: 'ACCESSORIES', href: '/shop/?category=accessories' },
        { _id: 9, label: 'SHOES', href: '/shop/?category=shoes' }
    ];

    return (
        <Box component="section" textAlign="center" className={`${styles.bannerTitleSection} ds`}>
            <Container>
                <Typography className={`${styles.title} textUppercase`} variant="h2">Jackets & Coats</Typography>
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

export default BannerTitleShopSection;