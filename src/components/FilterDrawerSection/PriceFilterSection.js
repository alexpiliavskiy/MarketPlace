import React, {useEffect} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Slider} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/components/FilterDrawerSection/PriceFilterSection.module.scss";

const PriceFilterSection = ({ rangePrice, activePrice, handleChangeRange }) => {
    const [value, setValue] = React.useState(activePrice);

    useEffect(() => {
        setValue(activePrice);
    }, [activePrice])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCommitChange = (event, newValue) => {
        handleChangeRange(newValue);
    };

    return (
        <Box component="section">
            <Accordion defaultExpanded className={styles.priceContainer}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.priceArrow}/>}
                    aria-controls="panel2-content"
                    id="panel5-header"
                    className={styles.priceTitle}
                >
                    PRICE
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={styles.priceContent}>
                        <Grid container>
                            <Grid item xs={12} lg={12} md={12} sm={12}>
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    valueLabelDisplay="auto"
                                    value={value}
                                    onChange={handleChange}
                                    onChangeCommitted={handleCommitChange}
                                    min={rangePrice.minPrice}
                                    max={rangePrice.maxPrice}
                                    className={styles.sliderRange}
                                />
                            </Grid>
                            <Grid container className={styles.PriceRangeContainer}>
                                <Grid item>Min Price: ${activePrice[0]}</Grid>
                                <Grid item>Max Price: ${activePrice[1]}</Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default PriceFilterSection;