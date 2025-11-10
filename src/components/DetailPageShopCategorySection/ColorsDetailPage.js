import React, {useState} from 'react';
import {Box, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import styles from "@/components/DetailPageShopCategorySection/ColorsDetailPage.module.scss";

const ColorsDetailPage = ({colors, handleColorChange, activeColors}) => {

    return (
        <Box className={styles.colorsRadioContainer}>
            <FormGroup row className={styles.colorsRadioGroup}>
                {colors.map((color, index) => (
                    <FormControlLabel
                        key={index}
                        value={colors.includes(color.slug)}
                        className={styles.colorsFormRadio}
                        control={
                            <Checkbox
                                className={styles.colorsRadio}
                                checked={colors.includes(color)}
                                onChange={() => handleColorChange(color.slug)}
                                sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    border: `2px solid ${color.slug}`,
                                    backgroundColor: colors.includes(color.slug) ? color.slug : "transparent",
                                    display: "flex",
                                    cursor: "pointer",
                                    "&:hover": {
                                        borderColor: color,
                                    },
                                    "&.Mui-checked": {
                                        backgroundColor: color,
                                        borderColor: color,
                                    },
                                    "& .MuiSvgIcon-root": {
                                        display: "none",
                                    },
                                }}
                            />
                        }
                        label={
                            <Box className={styles.labelControl} />
                        }
                    />
                ))}
            </FormGroup>
        </Box>
    );
};

export default ColorsDetailPage;