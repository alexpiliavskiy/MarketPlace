import React from 'react';
import {Box, Container, Grid, IconButton, Typography} from "@mui/material";
import {FavoriteBorder} from "@mui/icons-material";

import SlickSliderComponent from "@/components/SlickSliderComponent/SlickSliderComponent";
import {NextArrow, PrevArrow} from "@/components/SlickSliderComponent/CustomArrows";
import RelatedProductsItem from "@/components/RelatedProductsSlider/RelatedProductsItem";

import styles from "@/components/RelatedProductsSlider/RelatedProducts.module.scss";

const RelatedProductsSlider = () => {
    const products = [
        {
            _id: 1,
            title: "Dresses",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["/product_1.jpg", "/product_1-1.jpg"],
        },
        {
            _id: 2,
            title: "Dresses",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["/product_2.jpg", "/product_2-1.jpg"],
        },
        {
            _id: 3,
            title: "Dresses",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["/product_3.jpg", "/product_3-1.jpg"],
        },
        {
            _id: 4,
            title: "Dresses",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_4.jpg", "/product_4-1.jpg"],
        },
        {
            _id: 5,
            title: "Dresses",
            description: "Zessi Dresses",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_5.jpg", "/product_5-1.jpg"],
        },
        {
            _id: 6,
            title: "Dresses",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["/product_6.jpg", "/product_6-1.jpg"],
        },
        {
            _id: 7,
            title: "Dresses",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["/product_7.jpg", "/product_7-1.jpg"],
        },
        {
            _id: 8,
            title: "Dresses",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["/product_8.jpg", "/product_8-1.jpg"],
        },
        {
            _id: 8,
            title: "Dresses",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_9.jpeg", "/product_9-1.jpeg"],
        },
        {
            _id: 9,
            title: "Dresses",
            description: "Zessi Dresses",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_10.jpeg", "/product_10-1.jpeg"],
        },
        {
            _id: 10,
            title: "Dresses",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["/product_11.jpeg", "/product_11-1.jpeg"],
        },
        {
            _id: 11,
            title: "Dresses",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["/product_12.jpeg", "/product_12-1.jpeg"],
        },
        {
            _id: 12,
            title: "Dresses",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["/product_13.jpeg", "/product_13-1.jpeg"],
        },
        {
            _id: 13,
            title: "Dresses",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_14.jpeg", "/product_14-1.jpeg"],
        },
        {
            _id: 14,
            title: "Dresses",
            description: "Zessi Dresses",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["/product_15.jpeg", "/product_15-1.jpeg"],
        },
    ];

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                    dots: false,
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
        <Box component="section" pb="100px">
            <Grid xs={12}>
                <Typography variant="h3" className="textUppercase" sx={{ marginBottom: "30px" }}>RELATED PRODUCTS</Typography>
            </Grid>
            <Container>
                <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                    {products.map((product, i) => (
                        <Box key={i} className={styles.slickSlide}>
                            <RelatedProductsItem product={product} />
                        </Box>
                    ))}
                </SlickSliderComponent>
            </Container>
        </Box>
    );
};

export default RelatedProductsSlider;