"use client";
import React from 'react';
import {Box, Container} from "@mui/material";

import SlickSliderComponent from "@/components/SlickSliderComponent/SlickSliderComponent";
import BrandAboutItem from "@/components/BrandSectionAbout/BrandAboutItem";
import styles from "@/components/ShopItemSection/ShopItemSection.module.scss";

const BrandSectionAbout = () => {
    const items = [
        {
            imageUrl: "/brand1.png",
        },
        {
            imageUrl: "/brand2.png",
        },
        {
            imageUrl: "/brand3.png",
        },
        {
            imageUrl: "/brand4.png",
        },
        {
            imageUrl: "/brand5.png",
        },
        {
            imageUrl: "/brand6.png",
        },
        {
            imageUrl: "/brand7.png",
        },
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <Box component="section" pt="103px">
            <Container>
                <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                    {items.map((item, i) => (
                        <Box key={i} className={styles.slickSlide}>
                            <BrandAboutItem item={item} />
                        </Box>
                    ))}
                </SlickSliderComponent>
            </Container>
        </Box>
    );
};

export default BrandSectionAbout;