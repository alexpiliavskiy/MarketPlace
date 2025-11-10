import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "@/components/FilterDrawerSection/SizesFilterSection.module.scss";

const SizesFilterSection = ({ sizes, activeSizes, toggleSize }) => {
    return (
        <Box component="section">
            <Accordion defaultExpanded className={styles.sizesContainer}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.sizesArrow}/>}
                    aria-controls="panel2-content"
                    id="panel3-header"
                    className={styles.sizesTitle}
                >
                    SIZES
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={styles.sizesBtnContainer}>
                        {sizes.map((size, index) => (
                            <Button  className={`${styles.btnSizes} ${activeSizes.includes(size.slug) ? styles.activeSize : ''}`}
                                    key={index}
                                    onClick={() => toggleSize(size.slug)}
                            >
                                {size.slug}
                            </Button>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default SizesFilterSection;