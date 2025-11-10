import React, {useState} from 'react';
import Link from "next/link";
import {Badge, Box, Button, IconButton, Typography} from "@mui/material";
import {FavoriteBorder} from "@mui/icons-material";

import styles from "@/components/LatestProductSection/LatestProductSection.module.scss";
import ModalPreviewPage from "@/components/ShopItemSection/ModalPreviewPage";

const LatestProductItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box className={styles.cardShopCategory}>
            {item.sale && <Box className={`${styles.badgeContent} bg-red` }>
                <Badge className={styles.badge} badgeContent={`${item.sale}%`} />
            </Box>}
            {item.tag && <Box className={styles.badgeContent}>
                <Badge className={styles.badge} badgeContent={`${item.tag}`} color={'#D6001C'}/>
            </Box>}
            <Box className={styles.favoriteIcon}>
                <IconButton className={styles.favoriteButton} aria-label="like">
                    <FavoriteBorder />
                </IconButton>
            </Box>
            <Box className={styles.cardShopCategoryImage}>
                <Box className={styles.frontImage}>
                    <img src={item.imageUrl[0]} alt="ShopItemCategory"/>
                </Box>
                <Box className={styles.backImage}>
                    <img src={item.imageUrl[1]} alt="ShopItemCategory"/>
                </Box>
                <Box className={styles.viewPriceButton}>
                    <Button className={styles.buttonInfoCart}>ADD TO CART</Button>
                    <Button className={styles.buttonInfoCart} onClick={handleOpen}>QUICK VIEW</Button>
                </Box>
            </Box>
            <Box className={`${styles.cardCategoryContent}`}>
                <Typography className={styles.title} variant="span">{item.title}</Typography>
                <Typography className={styles.description} variant="h6">
                    <Link  href={`/shop/${item._id}`} passHref>
                        {item.description}
                    </Link>
                </Typography>
                <Box className={styles.priceGroup}>
                    <Typography variant="body1" className={`${item.salePrice ? styles.price : ''}`}>{item.price}</Typography>
                    <Typography variant="body1" className={styles.salePrice}>{item.salePrice}</Typography>
                </Box>
            </Box>
            <ModalPreviewPage open={open} handleClose={handleClose} item={item} />
        </Box>
    );
};

export default LatestProductItem;