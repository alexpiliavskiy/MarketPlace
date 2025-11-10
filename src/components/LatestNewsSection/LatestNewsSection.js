"use client";

import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import LatestNewsItem from "@/components/LatestNewsSection/LatestNewsItem";
import SlickSliderComponent from "@/components/SlickSliderComponent/SlickSliderComponent";

import styles from "@/components/LatestNewsSection/LatestNewsSection.module.scss";

const LatestNewsSection = () => {
    const items = [
        {
            _id: 1,
            title: "BY ADMIN",
            description: "Woman with good shoes is never be ugly place",
            data: "APRIL 05, 2024",
            imageUrl: "post1.jpg"
        },
        {
            _id: 2,
            title: "BY ADMIN",
            description: "What Freud Can Teach Us About Furniture",
            data: "APRIL 05, 2024",
            imageUrl: "post2.jpg",
        },
        {
            _id: 3,
            title: "BY ADMIN",
            description: "Habitant morbi tristique senectus",
            data: "APRIL 05, 2024",
            imageUrl: "post3.jpg"
        },
        {
            _id: 4,
            title: "BY ADMIN",
            description: "Woman with good shoes is never be ugly place",
            data: "APRIL 05, 2024",
            imageUrl: "post1.jpg"
        },
        {
            _id: 5,
            title: "BY ADMIN",
            description: "What Freud Can Teach Us About Furniture",
            data: "APRIL 05, 2024",
            imageUrl: "post2.jpg",
        },
        {
            _id: 6,
            title: "BY ADMIN",
            description: "Habitant morbi tristique senectus",
            data: "APRIL 05, 2024",
            imageUrl: "post3.jpg"
        },
        {
            _id: 7,
            title: "BY ADMIN",
            description: "Woman with good shoes is never be ugly place",
            data: "APRIL 05, 2024",
            imageUrl: "post1.jpg"
        },
        {
            _id: 8,
            title: "BY ADMIN",
            description: "What Freud Can Teach Us About Furniture",
            data: "APRIL 05, 2024",
            imageUrl: "post2.jpg",
        },
        {
            _id: 9,
            title: "BY ADMIN",
            description: "Habitant morbi tristique senectus",
            data: "APRIL 05, 2024",
            imageUrl: "post3.jpg"
        },
        {
            _id: 10,
            title: "BY ADMIN",
            description: "Woman with good shoes is never be ugly place",
            data: "APRIL 05, 2024",
            imageUrl: "post1.jpg"
        },
        {
            _id: 11,
            title: "BY ADMIN",
            description: "What Freud Can Teach Us About Furniture",
            data: "APRIL 05, 2024",
            imageUrl: "post2.jpg",
        },
        {
            _id: 12,
            title: "BY ADMIN",
            description: "Habitant morbi tristique senectus",
            data: "APRIL 05, 2024",
            imageUrl: "post3.jpg"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <Box component="section" pt="56px">
            <Container>
                <Grid xs={12}>
                    <Typography variant="h3" className="textUppercase" sx={{ textAlign: "center", marginBottom: "33px" }}>LATEST NEWS</Typography>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <SlickSliderComponent{...settings} className={`${styles.slickList} bestSellingSlider`}>
                        {items.map((item, i) => (
                            <Box key={i} className={styles.slickSlide}>
                                <LatestNewsItem item={item} />
                            </Box>
                        ))}
                    </SlickSliderComponent>
                </Box>
            </Container>
        </Box>
    );
};

export default LatestNewsSection;