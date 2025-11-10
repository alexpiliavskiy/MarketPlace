import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Modal,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl, Divider
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

import styles from "@/components/ShopItemSection/ModalPreviewPage.module.scss";
import ProductMeta from "@/components/ProductMeta/ProductMeta";
import ProductSlider from "@/components/SliderComponent/ProductSlider";
import SizeGuideModal from "@/components/SizeGuideModal/SizeGuideModal";

const productsDetail = {
    _id: 1,
    title: "Lightweight Puffer Jacket With a Hood",
    description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
    price: "$249",
    images: [
        "/product-detail_0.jpg",
        "/product-detail_0-1.jpg",
        "/product-detail_0-2.jpg",
        "/product-detail_0-3.jpg"
    ],
    colors: ["#222222", "#C93A3E", "#E4E4E4"],
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: "8k+ reviews",
}

const ModalPreviewPage = ({ open, handleClose }) => {
    const [selectedColor, setSelectedColor] = useState(productsDetail.colors[0]);
    const [selectedSize, setSelectedSize] = useState(productsDetail.sizes[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="shop-item-modal-title"
            aria-describedby="shop-item-modal-description"
            className={styles.modal}
        >
            <Container spacing={2} className={styles.pageDetailContainer}>
                <IconButton
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
                <Grid container spacing={4}>
                    <Grid mt={2} item xs={12} sm={6} md={6} lg={6}>
                        <ProductSlider className={styles.pageDetailSlider} images={productsDetail.images} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography className={styles.pageDetailTitle} variant="h4">{productsDetail.title}</Typography>
                        <Typography className={styles.pageDetailPrice} variant="h5">{productsDetail.price}</Typography>
                        <Typography className={styles.pageDetailDescription} variant="body1">{productsDetail.description}</Typography>
                        <Box className={styles.pageDetailContainerSIZES}>
                            <Typography className={styles.pageDetailText} variant="h5">SIZES</Typography>
                            <Box className={styles.pageDetailSIZES}>
                                {productsDetail.sizes.map((size, index) => (
                                    <Button className={`${styles.pageDetailBtnSizes} ${selectedSize === size ? styles.activeSize : ''}`}
                                            key={index}
                                            onClick={() => handleSizeChange(size)}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </Box>
                            <Button onClick={() => setIsOpen(true)} className={styles.pageDetailBtnSizeGuide} variant="text">SIZE GUIDE</Button>
                            <SizeGuideModal open={isOpen} onClose={() => setIsOpen(false)} />
                        </Box>
                        <FormControl className={styles.pageDetailCOLOR}>
                            <Typography className={styles.pageDetailTextColor} variant="h5">COLOR</Typography>
                            <RadioGroup  row value={selectedColor} onChange={handleColorChange}>
                                {productsDetail.colors.map((color, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={color}
                                        control={<Radio className={styles.pageDetailRadio} sx={{ color: color, '&.Mui-checked': { color: color } }} />}
                                        label=""
                                        className={styles.pageDetailColorLabel}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <ProductMeta />
                    </Grid>
                </Grid>
            </Container>
        </Modal>
    );
};

export default ModalPreviewPage;
