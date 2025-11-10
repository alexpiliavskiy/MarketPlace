"use client";

import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import LatestProductItem from "@/components/LatestProductSection/LatestProductItem";
import SlickSliderComponentLine from "@/components/SlickSliderComponent/SlickSliderComponentLine";
import {NextArrow, PrevArrow} from "@/components/SlickSliderComponent/CustomArrows";

import styles from "@/components/LatestProductSection/LatestProductSection.module.scss";

const LatestProductSection = () => {
    const items = [
        {
            _id: 1,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["product-4-1.jpg", "product-4-2.jpg"],
        },
        {
            _id: 2,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["product-5-1.jpg", "product-5-2.jpg"],
            tag: "NEW"
        },
        {
            _id: 3,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["product-6-1.jpg", "product-6-2.jpg"]
        },
        {
            _id: 4,
            title: "Jean",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["product-7-1.jpg", "product-7-2.jpg"],
            sale: -67
        },
        {
            _id: 5,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["product-6-1.jpg", "product-6-2.jpg"]
        },
        {
            _id: 6,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["product-4-1.jpg", "product-4-2.jpg"],
        },
        {
            _id: 7,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["product-5-1.jpg", "product-5-2.jpg"],
            tag: "NEW"
        },
        {
            _id: 8,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["product-6-1.jpg", "product-6-2.jpg"]
        },
        {
            _id: 9,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["product-5-1.jpg", "product-5-2.jpg"],
            tag: "NEW"
        },
        {
            _id: 10,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["product-6-1.jpg", "product-6-2.jpg"]
        },
        {
            _id: 11,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["product-4-1.jpg", "product-4-2.jpg"],
        },
        {
            _id: 12,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["product-5-1.jpg", "product-5-2.jpg"],
            tag: "NEW"
        },
        {
            _id: 13,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["product-6-1.jpg", "product-6-2.jpg"]
        },
        {
            _id: 14,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["product-5-1.jpg", "product-5-2.jpg"],
            tag: "NEW"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
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
        <Box component="section" pt="68px">
            <Container>
                <Grid xs={12}>
                    <Typography variant="h3" className="textUppercase" sx={{ textAlign: "center", marginBottom: "33px" }}>LATEST PRODUCTS</Typography>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <SlickSliderComponentLine {...settings} className={`${styles.slickList} bestSellingSlider dotsLine`}>
                        {items.map((item, i) => (
                            <Box key={i} className={styles.slickSlide}>
                                <LatestProductItem item={item} salePrice={i !== 3} />
                            </Box>
                        ))}
                    </SlickSliderComponentLine>
                </Box>
            </Container>
        </Box>
    );
};

export default LatestProductSection;