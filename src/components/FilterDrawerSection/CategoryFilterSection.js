import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, ListItem} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/components/FilterDrawerSection/CategoryFilterSection.module.scss";

const CategoryFilterSection = ({ categories, handleChangeQuaryCategories }) => {
    return (
        <Box component="section">
            <Accordion defaultExpanded className={styles.categoriesContainer}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={styles.categoriesArrow}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={styles.categoriesTitle}>
                    PRODUCT CATEGORIES
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} className={styles.categoryContainer}>
                        <Grid container xs={12} lg={12} md={12} sm={12}>
                            {categories.map(category => (
                                <Grid item className={styles.categoryItem} xs={12} lg={6} md={6} sm={12} key={category.id}>
                                    <List>
                                        <ListItem onClick={() =>handleChangeQuaryCategories(category.slug)} className={styles.categoryLinkContainer}>
                                            {category.name}
                                        </ListItem>
                                    </List>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default CategoryFilterSection;