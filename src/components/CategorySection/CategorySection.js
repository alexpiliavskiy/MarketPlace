import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";

import CategoryItem from "@/components/CategorySection/CategoryItem";

import styles from "@/components/CategorySection/CategorySection.module.scss";

const CategorySection = () => {
    const items = [
        {
            _id: 1,
            title: "NEW \n" +
                "HORIZONS",
            buttonLabel: "SHOP NOW",
            imageUrl: "/banner1.jpg"
        },
        {
            _id: 2,
            title: "SUMMER \n" +
                "HATS",
            buttonLabel: "SHOP NOW",
            imageUrl: "/banner2.jpg"
        },
        {
            _id: 3,
            underTitle: "Free delivery for Uomo members",
            title: "PROMOTIONS UP TO 10% OFF",
            buttonLabel: "SEE MORE",
            imageUrl: ""
        },
    ];
    return (
        <Box component="section" pt="60px">
            <Container>
                <Grid container spacing={2}  justifyContent="center">
                {
                    items.map( (item, i) => (
                        <Grid  key={i} item lg={4} xs={12} md={6}>
                            <CategoryItem item={item} withImage={i !== 2}/>
                        </Grid>
                    ) )
                }
                </Grid>
            </Container>
        </Box>
    );
};

export default CategorySection;

