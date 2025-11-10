"use client";

import React from 'react';
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import { Box, Container } from '@mui/material';

import SliderItem from "@/components/SliderComponent/SliderItem";

import styles from '@/components/SliderComponent/Slider.module.scss';

function Slider() {

    const items = [
        {
            _id: 1,
            title: "Hello New Season",
            description: "LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPPING",
            buttonLabel: "DISCOVER NOW",
            imageUrl: "/back.jpg"
        },
        {
            _id: 2,
            title: "New Arrival Tops",
            description: "Limited time offer - up to 60% off & free shipping",
            buttonLabel: "DISCOVER NOW",
            imageUrl: "/back2.jpg"
        },
        {
            _id: 3,
            title: "Spring Collection",
            description: "Limited time offer - up to 60% off & free shipping",
            buttonLabel: "DISCOVER NOW",
            imageUrl: "/back3.jpg"
        },
    ];

    return (
        <section className={`${styles.mainSection} ls`}>
            <Carousel className={styles.introSlider}
                      indicatorContainerProps={{
                          className: styles.indicatorContainer,
                      }}
                      indicatorIconButtonProps={{
                          className: styles.indicatorIconButton,
                      }}
                      activeIndicatorIconButtonProps={{
                          className: styles.activeIndicatorIconButtonProps,
                      }}
            >
                {
                    items.map( (item, i) => <SliderItem key={i} item={item} /> )
                }
            </Carousel>
        </section>
    );
}

export default Slider;