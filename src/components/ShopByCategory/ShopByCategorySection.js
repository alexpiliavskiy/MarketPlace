"use client";
import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

import ShopItemCategory from "@/components/ShopByCategory/ShopItemCategory";
import styles from "@/components/ShopItemSection/ShopItemSection.module.scss";

import SlickSliderComponent from "@/components/SlickSliderComponent/SlickSliderComponent";

const ShopByCategorySection = () => {
    const items = [
        {
            _id: 1,
            title: "ACCESSORIES",
            imageUrl: "/shopCategory-1.jpg",
            description: "20 Products"
        },
        {
            _id: 2,
            title: "BAGS",
            imageUrl: "/shopCategory-2.jpg",
            description: "20 Products"
        },
        {
            _id: 3,
            title: "SHOES",
            imageUrl: "/shopCategory-3.jpg",
            description: "20 Products"
        },
        {
            _id: 4,
            title: "OUTERWEAR",
            imageUrl: "/shopCategory-4.jpg",
            description: "20 Products"
        },
        {
            _id: 5,
            title: "TOP",
            imageUrl: "/shopCategory-5.jpg",
            description: "20 Products"
        },
        {
            _id: 6,
            title: "BAGS",
            imageUrl: "/shopCategory-2.jpg",
            description: "20 Products"
        },
        {
            _id: 7,
            title: "SHOES",
            imageUrl: "/shopCategory-3.jpg",
            description: "20 Products"
        },
        {
            _id: 8,
            title: "OUTERWEAR",
            imageUrl: "/shopCategory-4.jpg",
            description: "20 Products"
        },
        {
            _id: 9,
            title: "ACCESSORIES",
            imageUrl: "/shopCategory-1.jpg",
            description: "20 Products"
        },
        {
            _id: 10,
            title: "BAGS",
            imageUrl: "/shopCategory-2.jpg",
            description: "20 Products"
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <Box component="section" pt="106px">
            <Grid xs={12}>
                <Typography variant="h3" className="textUppercase" sx={{ textAlign: "center", marginBottom: "30px" }}>SHOP BY CATEGORY</Typography>
            </Grid>
            <Container>
                <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                    {items.map((item, i) => (
                        <Box key={i} className={styles.slickSlide}>
                            <ShopItemCategory item={item} />
                        </Box>
                    ))}
                </SlickSliderComponent>
            </Container>
        </Box>
    );
};

export default ShopByCategorySection;