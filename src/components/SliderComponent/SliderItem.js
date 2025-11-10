import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Box, Button, Container, Typography} from "@mui/material";
import styles from "@/components/SliderComponent/Slider.module.scss";

import BaseButton from "@/components/BaseButton/BaseButton";

const SliderItem = ({item}) => {
    return (
        <div className={styles.sliderItem}>
            <div className={styles.sliderImage}>
                <img src={item.imageUrl} alt="background"/>
            </div>
            <Container className={styles.textContainer}>
                <Box className={styles.underlineText}>SUMMER 2024</Box>
                <Typography className={styles.title} variant="h1" component="h1">{item.title}</Typography>
                <Typography className={styles.text} variant="body1">{item.description}</Typography>
                <BaseButton variant="text">
                    <Link href={`/shop`} passHref>
                        {item.buttonLabel}
                    </Link>
                </BaseButton>
            </Container>
        </div>
    );
};

export default SliderItem;