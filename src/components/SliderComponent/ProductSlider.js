import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { Box } from "@mui/material";
import styles from '@/components/SliderComponent/ProductSlider.module.scss';

const ProductSlider = ({ images }) => {
    return (
        <Box className={styles.photoSlider}>
            <Carousel
                navButtonsAlwaysVisible
                className={styles.carousel}
                indicatorContainerProps={{
                    style: {
                        display: 'none',
                    },
                }}
            >
                {images.map((image, index) => (
                    <Box key={index} >
                        <img  key={index}
                              src={image}
                              alt={`Product Image ${index + 1}`}
                              className={styles.carouselItem}
                        />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}

export default ProductSlider;