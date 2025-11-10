import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    FormControlLabel, FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/components/FilterDrawerSection/ColorsFilterSection.module.scss";

const ColorsFilterSection = ({ colors, selectedColor, handleColorChange, activeColors }) => {
    return (
        <Box component="section">
            <Accordion defaultExpanded className={styles.colorsContainer}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.colorsArrow}/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className={styles.colorsTitle}
                >
                    COLOR
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={styles.colorsRadioContainer}>
                        <FormGroup row className={styles.colorsRadioGroup}>
                            {colors.map((color, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={activeColors.includes(color.slug)}
                                    className={styles.colorsFormRadio}
                                    control={
                                        <Checkbox
                                            className={styles.colorsRadio}
                                            checked={activeColors.includes(color)}
                                            onChange={() => handleColorChange(color.slug)}
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: "50%",
                                                border: `2px solid ${color.slug}`,
                                                backgroundColor: activeColors.includes(color.slug) ? color.slug : "transparent",
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
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default ColorsFilterSection;