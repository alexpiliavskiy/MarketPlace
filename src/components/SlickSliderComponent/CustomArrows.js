import React from 'react';
import styles from '@/styles/overrides/SliderDots.scss';
import {Box} from "@mui/material";
export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className='slickArrow slickNext'
            onClick={onClick}
        >
            <img src="./right-arrow.svg" alt="Next" className={styles.arrowIcon} />
        </Box>
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className='slickArrow slickPrev'
            onClick={onClick}
        >
            <img src="./left-arrow.svg" alt="Prev" className={styles.arrowIcon} />
        </Box>
    );
};
