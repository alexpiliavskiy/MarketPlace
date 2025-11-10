import { useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import {ArrowBackIos, ArrowForwardIos, Close, ZoomIn} from '@mui/icons-material';

import styles from "@/components/SliderComponent/ImageSlider.module.scss";


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box className={styles.sliderContainer}>
            <Box className={styles.mainSlider}>
                <IconButton onClick={handlePrev} className={styles.prevArrow}>
                    <ArrowBackIos />
                </IconButton>
                <img src={`${process.env.NEXT_PUBLIC_SERVER_API}/${images[currentIndex]?.path}`} alt={`Slide ${currentIndex}`} className={styles.sliderImage} />
                <IconButton onClick={handleNext} className={styles.nextArrow}>
                    <ArrowForwardIos />
                </IconButton>
                <IconButton onClick={handleOpen} className={styles.zoomIcon}>
                    <ZoomIn />
                </IconButton>
            </Box>

            <Box className={styles.thumbnailContainer}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`${process.env.NEXT_PUBLIC_SERVER_API}/${image?.path}`}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
                    />
                ))}
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box className={styles.modalContent}>
                    <img src={`${process.env.NEXT_PUBLIC_SERVER_API}/${images[currentIndex]?.path}`} alt={`Slide ${currentIndex}`} className={styles.modalImage} />
                    <IconButton onClick={handlePrev} className={styles.modalPrevArrow}>
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton onClick={handleNext} className={styles.modalNextArrow}>
                        <ArrowForwardIos />
                    </IconButton>
                    <IconButton onClick={handleClose} className={styles.closeIcon}>
                        <Close />
                    </IconButton>
                </Box>
            </Modal>
        </Box>
    );
};

export default ImageSlider;
