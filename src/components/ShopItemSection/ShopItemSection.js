"use client";

import React, {useState} from 'react';
import {Box, Container, Grid, Tab, Tabs, Typography} from "@mui/material";
import ShopItem from "@/components/ShopItemSection/ShopItem";
import TabPanel from "@/components/TabPanel";
import SlickSliderComponent from "@/components/SlickSliderComponent/SlickSliderComponent";
import {NextArrow, PrevArrow} from "@/components/SlickSliderComponent/CustomArrows";
import styles from "@/components/ShopItemSection/ShopItemSection.module.scss";

const ShopItemSection = () => {
    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    }

    const items = [
        {
            _id: 1,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["shopItem1.jpg", "shopItem1-2.jpg"],
        },
        {
            _id: 2,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["shopItem2-2.jpg", "shopItem2.jpg"],
            tag: "NEW"
        },
        {
            _id: 3,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["shopItem3.jpg", "shopItem3-2.jpg"]
        },
        {
            _id: 4,
            title: "Jean",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["shopItem4.jpg", "shopItem4-2.jpg"],
            sale: -67
        },
        {
            _id: 5,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["shopItem1.jpg", "shopItem1-2.jpg"],
        },
        {
            _id: 6,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["shopItem2-2.jpg", "shopItem2.jpg"],
            tag: "NEW"
        },
        {
            _id: 7,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["shopItem1.jpg", "shopItem1-2.jpg"],
        },
        {
            _id: 8,
            title: "Jean",
            description: "Cropped Faux Leather Jacket",
            price: "$29",
            imageUrl: ["shopItem1.jpg", "shopItem1-2.jpg"],
        },
        {
            _id: 9,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["shopItem2-2.jpg", "shopItem2.jpg"],
            tag: "NEW"
        },
        {
            _id: 10,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["shopItem3.jpg", "shopItem3-2.jpg"]
        },
        {
            _id: 11,
            title: "Jean",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["shopItem4.jpg", "shopItem4-2.jpg"],
            sale: -67
        },
        {
            _id: 12,
            title: "Jean",
            description: "Calvin Shorts",
            price: "$62",
            imageUrl: ["shopItem2-2.jpg", "shopItem2.jpg"],
            tag: "NEW"
        },
        {
            _id: 13,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["shopItem3.jpg", "shopItem3-2.jpg"]
        },
        {
            _id: 14,
            title: "Jean",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["shopItem4.jpg", "shopItem4-2.jpg"],
            sale: -67
        },
        {
            _id: 15,
            title: "Jean",
            description: "Kirby T-Shirt",
            price: "$17",
            imageUrl: ["shopItem3.jpg", "shopItem3-2.jpg"]
        },
        {
            _id: 16,
            title: "Jean",
            description: "Cableknit Shawl",
            price: "$129",
            salePrice: "$99",
            imageUrl: ["shopItem4.jpg", "shopItem4-2.jpg"],
            sale: -67
        },
    ];

    const settings = {
        dots: false,
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
                    dots: false,
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

    const renderItems = (items) => {
        const groupedItems = [];
        for (let i = 0; i < items.length; i += 4) {
            groupedItems.push(items.slice(i, i + 4));
        }
        return groupedItems;
    };

    return (
        <Box component="section" pt="92px">
            <Container>
                <Grid xs={12}>
                    <Typography variant="h3" className="textUppercase" sx={{ textAlign: "center", marginBottom: "30px" }}>BEST SELLING</Typography>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <Tabs className={styles.itemTabs} sx={{color: "#222222"}} value={value} onChange={handleChangeTab} aria-label="best selling">
                        <Tab className={styles.tab} label="TOPS" />
                        <Tab label="JEANS" />
                        <Tab label="BAGS" />
                        <Tab label="ACCESSORIES" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                            {items.map((item, i) => (
                                <Box key={i} className={styles.slickSlide}>
                                    <ShopItem item={item} salePrice={i !== 3} />
                                </Box>
                            ))}
                        </SlickSliderComponent>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                            {items.map((item, i) => (
                                <Box key={i} className={styles.slickSlide}>
                                    <ShopItem item={item} salePrice={i !== 3} />
                                </Box>
                            ))}
                        </SlickSliderComponent>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                            {items.map((item, i) => (
                                <Box key={i} className={styles.slickSlide}>
                                    <ShopItem item={item} salePrice={i !== 3} />
                                </Box>
                            ))}
                        </SlickSliderComponent>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <SlickSliderComponent {...settings} className={`${styles.slickList} bestSellingSlider`}>
                            {items.map((item, i) => (
                                <Box key={i} className={styles.slickSlide}>
                                    <ShopItem item={item} salePrice={i !== 3} />
                                </Box>
                            ))}
                        </SlickSliderComponent>
                    </TabPanel>
                </Box>
            </Container>
        </Box>
    );
};

export default ShopItemSection;
