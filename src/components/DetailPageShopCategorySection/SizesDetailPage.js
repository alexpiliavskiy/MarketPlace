import React from 'react';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import styles from "@/components/DetailPageShopCategorySection/SizesDetailPage.module.scss";

const SizesDetailPage = ({sizes, toggleSize}) => {
    return (
        <Box className={styles.sizesBtnContainer}>
            {sizes.map((size, index) => (
                <Button  className={`${styles.btnSizes} ${sizes.includes(size.slug) ? styles.activeSize : ''}`}
                         key={index}
                         onClick={() => toggleSize(size.slug)}
                >
                    {size.slug}
                </Button>
            ))}
        </Box>
    );
};

export default SizesDetailPage;