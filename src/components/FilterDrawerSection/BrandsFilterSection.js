import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField, Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import styles from "@/components/FilterDrawerSection/BrandsFilterSection.module.scss";

const BrandsFilterSection = ({activeBrands, handleSearch, filteredBrands, searchInput, handleChangeInput, searchInputCheckbox, handleChangeInputCheckbox}) => {
    return (
        <Box component="section">
            <Accordion defaultExpanded className={styles.brandsContainer}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.brandsArrow}/>}
                    aria-controls="panel2-content"
                    id="panel4-header"
                    className={styles.brandsTitle}
                >
                    BRANDS
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={styles.brandsContent}>
                        <Grid container>
                            <Grid item xs={12} lg={12} md={6} sm={12} className={styles.searchContainer}>
                                <TextField
                                    label="Search" variant="outlined"
                                    placeholder="Search"
                                    className={styles.searchInput}
                                    value={searchInput}
                                    onChange={handleChangeInput}
                                    fullWidth />
                                <SearchIcon onClick={handleSearch} className={styles.searchIcon}/>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} lg={12} md={12} sm={12}>
                                    {filteredBrands.map((brand, index) => (
                                        <FormControlLabel
                                            className={styles.searchTitle}
                                            key={brand.id}
                                            control={
                                                <Checkbox
                                                    className={styles.searchCheck}
                                                    checked={activeBrands.includes(brand.slug)}
                                                    onChange={ () => handleChangeInputCheckbox(brand.slug)}
                                                />
                                            }
                                            label={
                                                <Box className={styles.labelContainer}>
                                                    <Typography variant="h6" className={styles.brandTitle}>{brand.name}</Typography>
                                                    <Typography variant="h6" className={styles.brandCount}>{brand.count}</Typography>
                                                </Box>
                                            }
                                        />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default BrandsFilterSection;